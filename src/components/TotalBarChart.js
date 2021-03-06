import React from 'react';
import Chart from 'chart.js';
import moment from 'moment';

export default class TotalBarChart extends React.Component {
  constructor(props) {
    super(props);
    const { sites, n } = props;
    this.state = { topSites: this.filterChartData(sites, n) };
    this.handleChartClick = this.handleChartClick.bind(this);
    this.totalBarChart = null;
  }
  componentDidMount() {
    const { topSites } = this.state;
    if (topSites && topSites[0]) {
      this.createChart(topSites);
    }
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      const { sites, n } = nextProps;
      this.setState({ topSites: this.filterChartData(sites, n) });
    }
    if (nextState !== this.state) {
      const { topSites } = nextState;
      console.log('State change detected');
      console.log(this.state);
      this.createChart(topSites);
    }
  }
  filterChartData(sites, n) {
    if (sites && sites[0]) {
      const numOfSites = (sites.length > n) ? n : sites.length;
      const topSites = this.sortProps(sites).slice(0, numOfSites);
      return topSites;
    }
    return [];
  }
  sortProps(sites) {
    return sites.sort((a, b) => {
      if (a.timeSpent < b.timeSpent) {
        return 1;
      }
      if (a.timeSpent > b.timeSpent) {
        return -1;
      }
      return 0;
    });
  }
  createChart(sites) {
    const ctx = document.getElementById('TotalBarChart');
    this.totalBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: sites.map(record => record.site),
        datasets: [{
          data: sites.map(record => Math.round(record.timeSpent / 60)),
          backgroundColor: [
            '#1b9e77',
            '#d95f02',
            '#7570b3',
            '#e7298a',
            '#66a61e',
            '#e6ab02',
            '#a6761d',
            '#666666'
          ],
          hoverBackgroundColor: [
            '#3bdead',
            '#fd9444',
            '#b5b2d7',
            '#f183bc',
            '#99de4a',
            '#fdcf4e',
            '#dfaa49',
            '#999'
          ]
        }]
      },
      animation: { animateScale: true },
      options: {
        maintainAspectRatio: true,
        onClick: this.handleChartClick,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Minutes'
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: (tooltipItems, data) => {
              const mins = data.datasets[0].data[tooltipItems.index];
              const timeElapsed = moment.duration(mins, 'minutes').format('hh:mm', { trim: false });
              return timeElapsed;
            }
          }
        }
      }
    });
  }
  handleChartClick(e) {
    const { fetchModalRecord } = this.props;
    const el = this.totalBarChart.getElementsAtEvent(e)[0];
    if (el && el._model) {
      const site = el._model.label;
      if (site !== 'Other') {
        fetchModalRecord(site);
      }
    }
  }
  render() {
    console.log('its happening!');
    return (
      <div>
        <canvas id="TotalBarChart" />
      </div>
    );
  }
}
