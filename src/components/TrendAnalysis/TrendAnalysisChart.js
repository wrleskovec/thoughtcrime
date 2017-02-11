import React from 'react';
import { connect } from 'react-redux';
import { fetchModalRecord, fetchTrendData } from '~/actions/options';
import _ from 'lodash';
import Chart from 'chart.js';
import moment from 'moment';

class TrendAnalysisChart extends React.Component {
  constructor(props) {
    super(props);
    this.trendChart = null;
  }
  componentWillMount() {
    const { fetchTrendData, trendDatasets, selectedSites } = this.props;
    if (trendDatasets && trendDatasets[0]) {
      this.createChart(trendDatasets);
    } else {
      if (selectedSites && selectedSites[0]) {
        fetchTrendData();
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    const { fetchTrendData } = this.props;
    const { trendDatasets } = nextProps;
    const diffSelected = !_.isEqual(nextProps.selectedSites, this.props.selectedSites);
    const diffStart = !_.isEqual(nextProps.startDate, this.props.startDate);
    const diffEnd = !_.isEqual(nextProps.endDate, this.props.endDate);
    if (diffSelected || diffStart || diffEnd) {
      fetchTrendData();
    } else if (trendDatasets && trendDatasets.datasets) {
      this.createChart(trendDatasets);
    }
  }
  createChart(trendDatasets) {
    console.log(trendDatasets);
    if (this.trendChart) this.trendChart.destroy();
    const ctx = document.getElementById('TrendAnalysisChart');
    this.trendChart = new Chart(ctx, {
      type: 'line',
      data: this.adaptData(trendDatasets),
      options: {
        maintainAspectRatio: true,
        scales: {
          yAxes: [{
            stacked: true,
            scaleLabel: {
              display: true,
              labelString: 'Minutes'
            }
          }]
        },
        onClick: this.handleChartClick,
        legend: {
          onClick: this.handleLegendClick
        },
        tooltips: {
          callbacks: {
            label: ({ datasetIndex, index }, data) => {
              console.log(data);
              const mins = data.datasets[datasetIndex].data[index];
              const site = data.datasets[datasetIndex].label;
              const timeElapsed = moment.duration(mins, 'minutes').format('hh:mm', { trim: false });
              return `${timeElapsed} - ${site}`;
            }
          }
        }
      }
    });
  }
  adaptData(trendDatasets) {
    const labels = trendDatasets.labels;
    const backgroundColor = [
      '#1b9e77',
      '#d95f02',
      '#7570b3',
      '#e7298a',
      '#66a61e',
      '#e6ab02',
      '#a6761d',
      '#666666'
    ];
    const hoverBackgroundColor = [
      '#3bdead',
      '#fd9444',
      '#b5b2d7',
      '#f183bc',
      '#99de4a',
      '#fdcf4e',
      '#dfaa49',
      '#999'
    ];
    const datasets = trendDatasets.datasets.map((set, index) => ({
      label: set.label,
      fill: true,
      lineTension: 0.1,
      backgroundColor: backgroundColor[index],
      borderColor: backgroundColor[index],
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: backgroundColor[index],
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: hoverBackgroundColor[index],
      pointHoverBorderColor: hoverBackgroundColor[index],
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: set.data,
      spanGaps: true,
    }));
    return { labels, datasets };
  }
  render() {
    return (
      <div>
        <canvas id="TrendAnalysisChart" />
      </div>
    );
  }
}

export default connect(
  state => (
    {
      sites: state.sites,
      ...state.Statistics
    }
  ),
  dispatch => (
    {
      fetchModalRecord: site => dispatch(fetchModalRecord(site)),
      fetchTrendData: () => dispatch(fetchTrendData())
    }
  )
)(TrendAnalysisChart);
