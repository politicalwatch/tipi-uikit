import d3chart from '../d3.chart';
import { select, selectAll } from 'd3-selection';
import { scaleBand, scaleLinear, scaleOrdinal } from 'd3-scale';
import { max } from 'd3-array';
import { transition } from 'd3-transition';
import { axisBottom, axisLeft } from 'd3-axis';
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
  scaleBand,
  scaleLinear,
  scaleOrdinal,
  max,
  transition,
  axisBottom,
  axisLeft,
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

const REFERENCE = 'Texto de referencia';
const SCANNED = 'Texto escaneado';

/**
 * D3 Bar Chart
 */
class d3barchart extends d3chart {
  constructor(selection, data, config) {
    super(selection, data, config, {
      margin: { top: 10, right: 30, bottom: 20, left: 40 },
      key: 'key',
      currentKey: false,
      values: [],
      orientation: 'vertical',
      labelRotation: 0,
      color: {
        key: false,
        keys: false,
        scheme: false,
        current: '#1f77b4',
        default: '#AAA',
        axis: '#000',
      },
      axis: {
        yTitle: false,
        xTitle: false,
        yFormat: '.0f',
        xFormat: '.0f',
        yTicks: 10,
        xTicks: 10,
      },
      tooltip: { label: false, suffix: false, suffixPlural: false },
      keys: { [SCANNED]: SCANNED, [REFERENCE]: REFERENCE },
      transition: { duration: 350, ease: 'easeLinear' },
    });
  }

  /**
   * Init chart
   */
  initChart() {
    // Set up dimensions
    this.getDimensions();
    this.initChartFrame('barchart');

    if (this.cfg.tooltip.suffix && this.cfg.tooltip.suffixPlural) {
      pluralize.addIrregularRule(this.cfg.tooltip.suffix, this.cfg.tooltip.suffixPlural);
    }

    // Set up scales
    this.xScale = d3.scaleBand();
    this.xScaleInn = d3.scaleBand();
    this.yScale = d3.scaleLinear();

    // Axis group
    this.axisg = this.g.append('g').attr('class', 'chart__axis chart__axis--barchart');

    // Horizontal grid
    this.yGrid = this.axisg
      .append('g')
      .attr('class', 'chart__grid chart__grid--y chart__grid--barchart');

    // Bottom axis
    this.xAxis = this.axisg.append('g').attr('class', 'chart__axis-x chart__axis-x--barchart');

    // Vertical axis title
    if (this.cfg.axis.yTitle)
      this.yAxisTitle = this.axisg
        .append('text')
        .attr('class', 'chart__axis-title chart__axis-title--barchart')
        .attr('transform', 'rotate(-90)')
        .style('text-anchor', 'middle');

    this.setChartDimension();
    this.updateChart();
  }

  /**
   * Resize chart pipe
   */
  setScales() {
    this.xScale
      .rangeRound(
        this.cfg.orientation !== 'horizontal' ? [0, this.cfg.width] : [0, this.cfg.height]
      )
      .paddingInner(0.1)
      .domain(this.data.map((d) => d[this.cfg.key]));

    this.xScaleInn
      .domain(this.cfg.values)
      .rangeRound([0, this.xScale.bandwidth()])
      .paddingInner(0.05);

    const yMax = this.calculateBiggestNumber();
    this.yScale
      .rangeRound(
        this.cfg.orientation !== 'horizontal' ? [0, this.cfg.height] : [this.cfg.width, 0]
      )
      .domain([yMax, 0]);

    if (this.cfg.color.scheme instanceof Array === true) {
      this.colorScale = d3.scaleOrdinal().range(this.cfg.color.scheme);
    } else if (typeof this.cfg.color.scheme === 'string') {
      this.colorScale = d3.scaleOrdinal(d3[this.cfg.color.scheme]);
    }

    const yGridFunction =
      this.cfg.orientation !== 'horizontal'
        ? d3
            .axisLeft(this.yScale)
            .tickSize(-this.cfg.width)
            .ticks(this.cfg.axis.yTicks, this.cfg.axis.yFormat)
        : d3
            .axisBottom(this.yScale)
            .tickSize(-this.cfg.height)
            .ticks(this.cfg.axis.yTicks, this.cfg.axis.yFormat);

    const xAxisFunction =
      this.cfg.orientation !== 'horizontal' ? d3.axisBottom(this.xScale) : d3.axisLeft(this.xScale);

    // Horizontal grid
    this.yGrid
      .attr(
        'transform',
        this.cfg.orientation !== 'horizontal' ? 'translate(0,0)' : `translate(0,${this.cfg.height})`
      )
      .transition(this.transition)
      .call(yGridFunction);

    // Bottom axis
    this.xAxis
      .attr(
        'transform',
        this.cfg.orientation !== 'horizontal' ? `translate(0,${this.cfg.height})` : 'translate(0,0)'
      )
      .call(xAxisFunction);
  }

  /**
   * Set chart dimensional sizes
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

    // Vertical axis title
    if (this.cfg.axis.yTitle)
      this.yAxisTitle
        .attr('y', -this.cfg.margin.left + 10)
        .attr('x', -this.cfg.height / 2)
        .text(this.cfg.axis.yTitle);

    // Bottom axis label rotation
    if (this.cfg.labelRotation !== 0)
      this.xAxis
        .selectAll('text')
        .attr('y', Math.cos((this.cfg.labelRotation * Math.PI) / 180) * 9)
        .attr('x', Math.sin((this.cfg.labelRotation * Math.PI) / 180) * 9)
        .attr('dy', '.35em')
        .attr('transform', `rotate(${this.cfg.labelRotation})`)
        .style('text-anchor', 'start');
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

    // Bars groups
    this.g.selectAll('.chart__bar-group').remove();
    this.itemg = this.g.selectAll('.chart__bar-group').data(this.data, (d) => d[this.cfg.key]);
  }

  hasComparissionData() {
    return this.data.some((item) => item[REFERENCE] > 0);
  }

  calculateTotals() {
    const totalCompared = this.data.reduce((total, item) => {
      return total + item[REFERENCE];
    }, 0);
    const totalOriginal = this.data.reduce((total, item) => {
      return total + item[SCANNED];
    }, 0);
    return { [REFERENCE]: totalCompared, [SCANNED]: totalOriginal };
  }

  calculateMaximums() {
    const maxCompared = this.data.reduce(
      (max, item) => this.getBiggerNumber(max, item[REFERENCE]),
      0
    );
    const maxOriginal = this.data.reduce(
      (max, item) => this.getBiggerNumber(max, item[SCANNED]),
      0
    );
    return { [REFERENCE]: maxCompared, [SCANNED]: maxOriginal };
  }

  getBiggerNumber(a, b) {
    if (a > b) {
      return a;
    }
    return b;
  }

  calculateBiggestNumber() {
    const totals = this.calculateTotals();
    const maximums = this.calculateMaximums();

    const referenceMax = maximums[REFERENCE];
    const referenceTotal = totals[REFERENCE];

    const scannedMax = maximums[SCANNED];
    const scannedTotal = totals[SCANNED];

    const referencePercentage = this.calculatePercentage(referenceMax, referenceTotal);
    const scannedPercentage = this.calculatePercentage(scannedMax, scannedTotal);

    const biggest = this.getBiggerNumber(referencePercentage, scannedPercentage);
    return this.roundToNextStep(biggest);
  }

  roundToNextStep(x) {
    return Math.ceil(x / 10) * 10;
  }

  calculatePercentage(value, total) {
    return (value * 100) / total;
  }

  /**
   * Add new chart's elements
   */
  enterElements() {
    const totals = this.calculateTotals();

    const newbars = this.itemg
      .enter()
      .append('g')
      .attr('class', 'chart__bar-group chart__bar-group--barchart')
      .attr('transform', (d) => {
        if (this.cfg.orientation !== 'horizontal') {
          return `translate(${this.xScale(d[this.cfg.key])},0)`;
        }
        return `translate(0,${this.xScale(d[this.cfg.key])})`;
      });

    const rects = newbars
      .selectAll('.chart__bar')
      .data((d) =>
        this.cfg.values.map((v) => {
          const dat = { ...d };
          dat[this.cfg.key] = d[this.cfg.key];
          return dat;
        })
      )
      .enter()
      .append('rect')
      .attr('class', 'chart__bar chart__bar--barchart')
      .classed('chart__bar--current', (d) => {
        return this.cfg.currentKey && d[this.cfg.key] === this.cfg.currentKey;
      })
      .attr('x', (d, i) => {
        return this.cfg.orientation !== 'horizontal'
          ? this.xScaleInn(this.cfg.values[i % this.cfg.values.length])
          : 0;
      })
      .attr('y', (d, i) => {
        return this.cfg.orientation !== 'horizontal'
          ? this.cfg.height
          : this.xScaleInn(this.cfg.values[i % this.cfg.values.length]);
      })
      .attr('height', 0)
      .attr('width', 0)
      .on('mouseover', (event, d) => {
        const bars = d3.selectAll('.chart__bar--barchart').nodes();
        const index = bars.indexOf(event.currentTarget);
        const key = this.cfg.values[index % this.cfg.values.length];
        const label = this.cfg.tooltip.suffixPlural
          ? pluralize(this.cfg.tooltip.suffix, d[key])
          : this.cfg.tooltip.suffix;

        const labelKey = this.cfg.keys[key];

        const percentage = this.calculatePercentage(d[key], totals[key]).toFixed(2);

        const text = `<div>${labelKey}: ${percentage}%</div>`;
        this.tooltip.html(text).classed('active', true);
      })
      .on('mouseout', () => {
        this.tooltip.classed('active', false);
      })
      .on('mousemove', (event) => {
        this.tooltip
          .style('left', event['pageX'] - 28 + 'px')
          .style('top', event['pageY'] - 40 + 'px');
      });
  }

  /**
   * Update chart's elements based on data change
   */
  updateElements() {
    const totals = this.calculateTotals();

    // Bars groups
    this.itemg.transition(this.transition).attr('transform', (d) => {
      return this.cfg.orientation !== 'horizontal'
        ? `translate(${this.xScale(d[this.cfg.key])},0)`
        : `translate(0,${this.xScale(d[this.cfg.key])})`;
    });
    // Bars
    this.g
      .selectAll('.chart__bar')
      .transition(this.transition)
      .attr('fill', (d, i) => this.colorElement(d, this.cfg.values[i % this.cfg.values.length]))
      .attr('opacity', (d, i) => (i % 2 == 1 && this.hasComparissionData() ? 0.6 : 1))
      .attr('x', (d, i) => {
        return this.cfg.orientation !== 'horizontal'
          ? this.xScaleInn(this.cfg.values[i % this.cfg.values.length])
          : 0;
      })
      .attr('y', (d, i) => {
        return this.cfg.orientation !== 'horizontal'
          ? this.yScale(+d[this.cfg.values[i % this.cfg.values.length]])
          : this.xScaleInn(this.cfg.values[i % this.cfg.values.length]);
      })
      .attr('width', (d, i) => {
        const key = this.cfg.values[i % this.cfg.values.length];
        const percentage = this.calculatePercentage(d[key], totals[key]);

        return this.cfg.orientation !== 'horizontal'
          ? this.xScaleInn.bandwidth()
          : this.yScale(percentage);
      })
      .attr('height', (d, i) => {
        return this.cfg.orientation !== 'horizontal'
          ? this.cfg.height - this.yScale(+d[this.cfg.values[i % this.cfg.values.length]])
          : this.xScaleInn.bandwidth();
      });
  }

  /**
   * Remove chart's elements without data
   */
  exitElements() {
    this.itemg.exit().transition(this.transition).style('opacity', 0).remove();
  }
}

export default d3barchart;
