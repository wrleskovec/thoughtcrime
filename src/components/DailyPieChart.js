import React from 'react';
import moment from 'moment';
import 'moment-duration-format';
import Chart from 'chart.js';

export default class DailyPieChart extends React.Component {
  constructor(props) {
    super(props);
    const { dailySites, n } = props;
    this.state = { topSites: this.filterChartData(dailySites, n) };
    this.handleChartClick = this.handleChartClick.bind(this);
    this.handleLegendClick = this.handleLegendClick.bind(this);
  }
  componentDidMount() {
    const { topSites } = this.state;
    if (topSites && topSites[0]) {
      this.createChart(topSites);
    }
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      const { dailySites, n } = nextProps;
      this.setState({ topSites: this.filterChartData(dailySites, n) });
    }
    if (nextState !== this.state) {
      const { topSites } = nextState;
      console.log('State change detected');
      console.log(this.state);
      this.createChart(topSites);
    }
  }
  filterChartData(dailySites, n) {
    if (dailySites && dailySites[0]) {
      let totalTime = 0;
      let fiveTotalTime = 0;
      const numOfSites = (dailySites.length > n) ? n : dailySites.length;
      const topSites = this.sortProps(dailySites).slice(0, numOfSites);
      for (let j = 0; j < numOfSites; j += 1) {
        fiveTotalTime += topSites[j].timeSpent;
      }
      for (let i = 0; i < dailySites.length; i += 1) {
        totalTime += dailySites[i].timeSpent;
      }
      topSites.push({ site: 'Other', timeSpent: totalTime - fiveTotalTime, visits: 0 });
      return topSites;
    }
    return [];
  }
  createChart(sites) {
    const ctx = document.getElementById('dailyPieChart');
    this.dailyPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: sites.map(record => record.site),
        datasets: [{
          data: sites.map(record => record.timeSpent),
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
        maintainAspectRatio: false,
        onClick: this.handleChartClick,
        legend: {
          onClick: this.handleLegendClick
        },
        tooltips: {
          callbacks: {
            label: (tooltipItems, data) => {
              const secs = data.datasets[0].data[tooltipItems.index];
              const site = data.labels[tooltipItems.index];
              const timeElapsed = moment.duration(secs, 'seconds').format('hh:mm', { trim: false });
              return `${timeElapsed} - ${site}`;
            }
          }
        }
      }
    });
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
  handleLegendClick(e, legendItem) {
    const { fetchModalRecord } = this.props;
    const site = legendItem.text;
    if (site && site !== 'Other') {
      $('#myModal').modal('show');
      fetchModalRecord(site);
    }
  }
  handleChartClick(e) {
    const { fetchModalRecord } = this.props;
    const el = this.dailyPieChart.getElementsAtEvent(e)[0];
    if (el && el._model) {
      const site = el._model.label;
      if (site !== 'Other') {
        $('#myModal').modal('show');
        fetchModalRecord(site);
      }
    }
  }

  render() {
    return (
      <div>
        <canvas id="dailyPieChart" />
      </div>
    );
  }
}
