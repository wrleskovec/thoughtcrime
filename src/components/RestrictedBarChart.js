import React from 'react';
import Chart from 'chart.js';
import moment from 'moment';

export default class RestrictedBarChart extends React.Component {
  constructor(props) {
    super(props);
    const { sites, n } = props;
    this.state = { topSites: this.filterChartData(sites, n) };
    this.handleChartClick = this.handleChartClick.bind(this);
    this.RestrictedBarChart = null;
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
      const filteredSites = this.filterProps(sites);
      const numOfSites = (filteredSites.length > n) ? n : filteredSites.length;
      const topSites = this.sortProps(filteredSites).slice(0, numOfSites);
      return topSites;
    }
    return [];
  }
  filterProps(sites) {
    return sites.filter(record => record.action !== 'accept');
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
    const ctx = document.getElementById('RestrictedBarChart');
    this.RestrictedBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: sites.map(record => record.site),
        datasets: [{
          data: sites.map(record => Math.round(record.timeSpent / 60)),
          backgroundColor: [
            '#ff0000',
            '#ff0000',
            '#ff0000',
            '#ff0000',
            '#ff0000',
            '#ff0000',
            '#ff0000',
            '#ff0000'
          ],
          hoverBackgroundColor: [
            '#ff4d4d',
            '#ff4d4d',
            '#ff4d4d',
            '#ff4d4d',
            '#ff4d4d',
            '#ff4d4d',
            '#ff4d4d',
            '#ff4d4d'
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
    const el = this.RestrictedBarChart.getElementsAtEvent(e)[0];
    if (el && el._model) {
      const site = el._model.label;
      if (site !== 'Other') {
        $('#myModal').modal('show');
        fetchModalRecord(site);
      }
    }
  }
  render() {
    console.log('its happening!');
    return (
      <div>
        <canvas id="RestrictedBarChart" />
      </div>
    );
  }
}
