import d3chart from '../d3.chart';
import { select, selectAll } from 'd3-selection';
import { scaleOrdinal, scaleLinear } from 'd3-scale';
import { min, max, extent } from 'd3-array';
import { transition } from 'd3-transition';
import cloud from 'd3-cloud';
import {
  easeLinear,
  easePolyIn,
  easePolyOut,
  easePoly,
  easePolyInOut,
  easeQuadIn,
  easeQuadOut,
  easeQuad,
  easeQuadInOut,
  easeCubicIn,
  easeCubicOut,
  easeCubic,
  easeCubicInOut,
  easeSinIn,
  easeSinOut,
  easeSin,
  easeSinInOut,
  easeExpIn,
  easeExpOut,
  easeExp,
  easeExpInOut,
  easeCircleIn,
  easeCircleOut,
  easeCircle,
  easeCircleInOut,
  easeElasticIn,
  easeElastic,
  easeElasticOut,
  easeElasticInOut,
  easeBackIn,
  easeBackOut,
  easeBack,
  easeBackInOut,
  easeBounceIn,
  easeBounce,
  easeBounceOut,
  easeBounceInOut,
} from 'd3-ease';
import {
  schemeCategory10,
  schemeAccent,
  schemeDark2,
  schemePaired,
  schemePastel1,
  schemePastel2,
  schemeSet1,
  schemeSet2,
  schemeSet3,
  schemeTableau10,
} from 'd3-scale-chromatic';

const d3 = {
  select,
  selectAll,
  scaleOrdinal,
  scaleLinear,
  min,
  max,
  extent,
  transition,
  cloud,
  easeLinear,
  easePolyIn,
  easePolyOut,
  easePoly,
  easePolyInOut,
  easeQuadIn,
  easeQuadOut,
  easeQuad,
  easeQuadInOut,
  easeCubicIn,
  easeCubicOut,
  easeCubic,
  easeCubicInOut,
  easeSinIn,
  easeSinOut,
  easeSin,
  easeSinInOut,
  easeExpIn,
  easeExpOut,
  easeExp,
  easeExpInOut,
  easeCircleIn,
  easeCircleOut,
  easeCircle,
  easeCircleInOut,
  easeElasticIn,
  easeElastic,
  easeElasticOut,
  easeElasticInOut,
  easeBackIn,
  easeBackOut,
  easeBack,
  easeBackInOut,
  easeBounceIn,
  easeBounce,
  easeBounceOut,
  easeBounceInOut,
  schemeCategory10,
  schemeAccent,
  schemeDark2,
  schemePaired,
  schemePastel1,
  schemePastel2,
  schemeSet1,
  schemeSet2,
  schemeSet3,
  schemeTableau10,
};

import pluralize from 'pluralize';

/**
 * D3 Words Cloud
 */
class d3wordscloud extends d3chart {
  constructor(selection, data, config) {
    super(selection, data, config, {
      margin: { top: 20, right: 20, bottom: 20, left: 20 },
      key: 'word',
      size: 'size',
      value: 'value',
      fontFamily: 'Arial',
      angle: { steps: 2, start: 0, end: 90 },
      color: {
        key: false,
        keys: false,
        scheme: false,
        current: '#1f77b4',
        default: '#AAA',
        axis: '#000',
      },
      tooltip: { label: false, suffix: false, suffixPlural: false },
      transition: { duration: 500, ease: 'easeLinear' },
    });
  }

  /**
   * Init chart
   */
  initChart() {
    // Set up dimensions
    this.getDimensions();
    this.initChartFrame('wordscloud');

    if (this.cfg.tooltip.suffix && this.cfg.tooltip.suffixPlural) {
      pluralize.addIrregularRule(this.cfg.tooltip.suffix, this.cfg.tooltip.suffixPlural);
    }

    this.gcenter = this.g.append('g');
    this.tData = [];

    this.setChartDimension();
    this.updateChart();
  }

  /**
   * Compute data before operate
   */
  computeData() {
    cloud()
      .size([this.cfg.width, this.cfg.height])
      .words(
        this.data.map((d) => ({
          text: d[this.cfg.key],
          size: d[this.cfg.size],
          value: d[this.cfg.value],
          color: this.colorElement(d, 'text'),
        }))
      )
      .rotate(() => this.wordsAngle(this.cfg.angle))
      .font(this.cfg.fontFamily)
      .fontSize((d) => d.size * this.fontScale)
      .on('end', (d) => {
        if (this.data.length !== d.length && this.fontScale > 0) {
          this.fontScale = this.fontScale - 0.1;
          this.computeData();
        } else {
          this.renderEnd = true;
          this.tData = d;
        }
      })
      .start();
  }

  /**
   * Set up chart dimensions (non depending on data)
   */
  setChartDimension() {
    // Resize SVG element
    this.svg
      .attr(
        'viewBox',
        `0 0 ${this.cfg.width + this.cfg.margin.left + this.cfg.margin.right} ${
          this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom
        }`
      )
      .attr('width', this.cfg.width + this.cfg.margin.left + this.cfg.margin.right)
      .attr('height', this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom);

    // Center element
    this.gcenter.attr('transform', `translate(${this.cfg.width / 2}, ${this.cfg.height / 2})`);

    // Font reduction scale
    this.fontScale = 1;
    this.renderEnd = false;
  }

  /**
   * Bind data to main elements groups
   */
  bindData() {
    // Set transition
    this.transition = d3
      .transition('t')
      .duration(this.cfg.transition.duration)
      .ease(d3[this.cfg.transition.ease]);

    // Word group selection data
    this.wordgroup = this.gcenter.selectAll('.chart__word-group').data(this.tData, (d) => d.text);
  }

  /**
   * Set up scales
   */
  setScales() {
    if (this.cfg.color.scheme instanceof Array === true) {
      this.colorScale = d3.scaleOrdinal().range(this.cfg.color.scheme);
    } else if (typeof this.cfg.color.scheme === 'string') {
      this.colorScale = d3.scaleOrdinal(d3[this.cfg.color.scheme]);
    }
  }

  /**
   * Add new chart's elements
   */
  enterElements() {
    if (!this.renderEnd) return;

    // Elements to add
    const newwords = this.wordgroup
      .enter()
      .append('g')
      .attr('class', 'chart__word-group chart__word-group--wordscloud');

    newwords
      .append('text')
      .style('font-size', (d) => d.size + 'px')
      .style('font-family', (d) => d.font)
      .attr('text-anchor', 'middle')
      .attr('fill', (d) => d.color)
      .attr('transform', (d) => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
      .on('mouseover', (event, d) => {
        console.log('d', d);
        console.log('event', event);
        const label = this.cfg.tooltip.suffixPlural
          ? pluralize(this.cfg.tooltip.suffix, d.value)
          : this.cfg.tooltip.suffix;
        const text = this.cfg.tooltip.suffix
          ? `<div>${d.text}: ${d.value} ${label}</div>`
          : `<div>${d.text}: ${d.value}</div>`;
        this.tooltip.html(text).classed('active', true);
      })
      .on('mouseout', () => {
        this.tooltip.classed('active', false);
      })
      .on('mousemove', (event) => {
        this.tooltip
          .style('left', event['pageX'] - 28 + 'px')
          .style('top', event['pageY'] - 40 + 'px');
      })
      .text((d) => d.text);
  }

  /**
   * Update chart's elements based on data change
   */
  updateElements() {
    if (!this.renderEnd) return;

    this.wordgroup
      .selectAll('text')
      .data(this.tData, (d) => d.text)
      .transition(this.transition)
      .attr('fill', (d) => this.colorElement(d, 'text'))
      .style('font-size', (d) => d.size + 'px')
      .attr('transform', (d) => `translate(${[d.x, d.y]})rotate(${d.rotate})`);
  }

  /**
   * Remove chart's elements without data
   */
  exitElements() {
    if (!this.renderEnd) return;

    this.wordgroup.exit().transition(this.transition).style('opacity', 0).remove();
  }

  /**
   * Word's angle
   */
  wordsAngle() {
    if (typeof this.cfg.angle === 'number') {
      // Config angle is fixed number
      return this.cfg.angle;
    } else if (typeof this.cfg.angle === 'object') {
      if (this.cfg.angle instanceof Array === true) {
        // Config angle is custom array
        const idx = this.randomInt(0, this.cfg.angle.length - 1);
        return this.cfg.angle[idx];
      } else {
        // Config angle is custom object
        const angle = (this.cfg.angle.end - this.cfg.angle.start) / (this.cfg.angle.steps - 1);
        return this.cfg.angle.start + this.randomInt(0, this.cfg.angle.steps) * angle;
      }
    }
    return 0;
  }

  randomInt(min, max) {
    const i = Math.ceil(min);
    const j = Math.floor(max);
    return Math.floor(Math.random() * (j - i + 1)) + i;
  }
}

export default d3wordscloud;
