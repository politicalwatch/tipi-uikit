import d3chart from '../d3.chart';
import { select, selectAll } from 'd3-selection';
import { scaleLinear, scaleOrdinal, scaleSqrt } from 'd3-scale';
import { hierarchy, partition } from 'd3-hierarchy';
import { arc } from 'd3-shape';
import { path } from 'd3-path';
import { transition } from 'd3-transition';
import { interpolate } from 'd3-interpolate';
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
  scaleLinear,
  scaleOrdinal,
  scaleSqrt,
  hierarchy,
  partition,
  arc,
  path,
  transition,
  interpolate,
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
 * D3 Sunburst
 */
class d3sunburst extends d3chart {
  constructor(selection, data, config) {
    super(selection, data, config, {
      margin: { top: 20, right: 20, bottom: 20, left: 20 },
      key: '',
      value: '',
      color: {
        key: false,
        keys: false,
        scheme: false,
        current: '#1f77b4',
        default: '#AAA',
        axis: '#000',
      },
      tooltip: { label: false, suffix: false, suffixPlural: false },
      transition: { duration: 350, ease: 'easeLinear' },
      charSpace: 8,
    });
  }

  /**
   * Init chart
   */
  initChart() {
    // Set up dimensions
    this.getDimensions();
    this.initChartFrame('sunburst');

    if (this.cfg.tooltip.suffix && this.cfg.tooltip.suffixPlural) {
      pluralize.addIrregularRule(this.cfg.tooltip.suffix, this.cfg.tooltip.suffixPlural);
    }

    // Center group
    this.gcenter = this.g.append('g');

    this.setChartDimension();
    this.updateChart();
  }

  /**
   * Set up chart dimensions (non depending on data)
   */
  setChartDimension() {
    // SVG element
    this.svg
      .attr(
        'viewBox',
        `0 0 ${this.cfg.width + this.cfg.margin.left + this.cfg.margin.right} ${
          this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom
        }`
      )
      .attr('width', this.cfg.width + this.cfg.margin.left + this.cfg.margin.right)
      .attr('height', this.cfg.height + this.cfg.margin.top + this.cfg.margin.bottom);

    // Center group
    this.gcenter.attr('transform', `translate(${this.cfg.width / 2}, ${this.cfg.height / 2})`);
  }

  /**
   * Bind data to main elements groups
   */
  bindData() {
    const partition = (data) => {
      const root = d3
        .hierarchy(data)
        .sum((d) => d[this.cfg.value])
        .sort((a, b) => b.name - a.name);
      return d3.partition()(root);
    };

    this.hData = partition(this.data[0]).descendants();

    this.itemg = this.gcenter
      .selectAll('.chart__slice-group')
      .data(this.hData, (d) => d.data[this.cfg.key]);

    // Set transition
    this.transition = d3
      .transition('t')
      .duration(this.cfg.transition.duration)
      .ease(d3[this.cfg.transition.ease]);
  }

  /**
   * Set up scales
   */
  setScales() {
    this.radius = Math.min(this.cfg.width, this.cfg.height) / 2;

    this.xScale = d3
      .scaleLinear()
      .range([0, 2 * Math.PI])
      .clamp(true);

    this.yScale = d3.scaleSqrt().range([this.radius * 0.1, this.radius]);

    this.arc = d3
      .arc()
      .startAngle((d) => this.xScale(d.x0))
      .endAngle((d) => this.xScale(d.x1))
      .innerRadius((d) => Math.max(0, this.yScale(d.y0)))
      .outerRadius((d) => Math.max(0, this.yScale(d.y1)));

    // Set up color scheme
    if (this.cfg.color.scheme) {
      if (this.cfg.color.scheme instanceof Array === true) {
        this.colorScale = d3.scaleOrdinal().range(this.cfg.color.scheme);
      } else {
        this.colorScale = d3.scaleOrdinal(d3[this.cfg.color.scheme]);
      }
    }
  }

  /**
   * Add new chart's elements
   */
  enterElements() {
    const newg = this.itemg
      .enter()
      .append('g')
      .attr('class', 'chart__slice-group chart__slice-group--sunburst clickable')
      .on('click', (event, d) => {
        event.stopPropagation();
        this.focusOn(d);
      });

    // PATHS
    newg
      .append('path')
      .attr('class', 'chart__slice chart__slice--sunburst')
      .style('fill', (d) => this.colorElement(d.data))
      .on('mouseover', (event, d) => {
        const label = this.cfg.tooltip.suffixPlural
          ? pluralize(this.cfg.tooltip.suffix, d.value)
          : this.cfg.tooltip.suffix;
        const text = this.cfg.tooltip.suffix
          ? `<div>${d.data[this.cfg.key]}: ${d.value} ${label}</div>`
          : `<div>${d.data[this.cfg.key]}: ${d.value}</div>`;
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
      .transition(this.transition)
      .attrTween('d', (d) => {
        const iy0 = d3.interpolate(0, d.y0);
        const iy1 = d3.interpolate(d.y0, d.y1);
        const ix0 = d3.interpolate(0, d.x0);
        const ix1 = d3.interpolate(0, d.x1);
        return (t) => {
          d.y0 = iy0(t);
          d.y1 = iy1(t);
          d.x0 = ix0(t);
          d.x1 = ix1(t);
          return this.arc(d);
        };
      });

    // LABELS
    newg
      .append('path')
      .attr('class', 'chart__line--hidden')
      .attr('id', (_, i) => `hiddenArc${i}`)
      .attr('d', (d) => this.middleArcLine(d));

    this.labels = newg
      .append('text')
      .attr('class', 'chart__labels')
      .attr('display', 'none')
      .attr('text-anchor', 'middle')
      .attr('dy', 2)
      .attr('font-size', '10px')
      .style('opacity', 0);

    this.labels
      .append('textPath')
      .attr('startOffset', '50%')
      .attr('xlink:href', (_, i) => `#hiddenArc${i}`)
      .text((d) => d.data.name);
  }

  /**
   * Update chart's elements based on data change
   */
  updateElements() {
    this.itemg
      .selectAll('.chart__slice')
      .transition(this.transition)
      .attrTween('d', (d) => {
        const d2 = this.hData.filter((j) => j.data.name === d.data.name)[0];
        const iy0 = d3.interpolate(d.y0, d2.y0);
        const iy1 = d3.interpolate(d.y1, d2.y1);
        const ix0 = d3.interpolate(d.x0, d2.x0);
        const ix1 = d3.interpolate(d.x1, d2.x1);
        return (t) => {
          d2.y0 = iy0(t);
          d2.y1 = iy1(t);
          d2.x0 = ix0(t);
          d2.x1 = ix1(t);
          return this.arc(d2);
        };
      })
      .style('fill', (d) => this.colorElement(d.data));

    this.labels
      .attr('display', (d) => (this.textFits(d) ? null : 'none'))
      .transition(this.transition)
      .duration(this.cfg.transition.duration / 2)
      .delay(this.cfg.transition.duration / 2)
      .style('opacity', 1);
  }

  /**
   * Remove chart's elements without data
   */
  exitElements() {
    this.itemg.exit().transition(this.transition).style('opacity', 0).remove();
  }

  /**
   * Check if text fits in available space
   */
  textFits(d) {
    if (!d.parent) return false;
    const deltaAngle = this.xScale(d.x1) - this.xScale(d.x0);
    const r = Math.max(0, (this.yScale(d.y0) + this.yScale(d.y1)) / 2);
    return d.data[this.cfg.key].length * this.cfg.charSpace < r * deltaAngle;
  }

  /**
   * Transition slice on focus
   */
  focusOn(d) {
    const d2 = this.hData.filter((j) => j.data.name === d.data.name)[0];
    const transition = this.svg
      .transition()
      .duration(this.cfg.transition.duration)
      .ease(d3[this.cfg.transition.ease])
      .tween('scale', () => {
        const xd = d3.interpolate(this.xScale.domain(), [d2.x0, d2.x1]);
        const yd = d3.interpolate(this.yScale.domain(), [d2.y0, 1]);
        return (t) => {
          this.xScale.domain(xd(t));
          this.yScale.domain(yd(t));
        };
      });

    transition.selectAll('.chart__slice').attrTween('d', (d) => () => {
      const d3 = this.hData.filter((j) => j.data.name === d.data.name)[0];
      return this.arc(d3);
    });

    transition.selectAll('.chart__line--hidden').attrTween('d', (da) => () => {
      const d2 = this.hData.filter((j) => j.data.name === da.data.name)[0];
      return this.middleArcLine(d2);
    });

    transition.selectAll('.chart__labels').attrTween('display', (da) => () => {
      const d2 = this.hData.filter((j) => j.data.name === da.data.name)[0];
      return this.textFits(d2) ? null : 'none';
    });
  }

  middleArcLine(d) {
    const halfPi = Math.PI / 2;
    const angles = [this.xScale(d.x0) - halfPi, this.xScale(d.x1) - halfPi];
    const r = Math.max(0, (this.yScale(d.y0) + this.yScale(d.y1)) / 2);

    const middleAngle = (angles[1] + angles[0]) / 2;
    const invertDirection = middleAngle > 0 && middleAngle < Math.PI;
    if (invertDirection) {
      angles.reverse();
    }

    const path = d3.path();
    path.arc(0, 0, r, angles[0], angles[1], invertDirection);
    return path.toString();
  }
}

export default d3sunburst;
