import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment-duration-format';
import Chart from 'chart.js';
import { fetchModalRecord } from '~/actions/options.js';

class DailyPieChart extends React.Component {
  constructor(props) {
    super(props);
    const { dailySites, n } = props;
    if (dailySites) {
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
      this.state = {
        topSites
      };
    } else {
      this.state = {
        topSites: []
      };
    }
    this.handleChartClick = this.handleChartClick.bind(this);
    this.handleLegendClick = this.handleLegendClick.bind(this);
    this.dailyPieChart = null;
  }
  componentDidMount() {
    const { topSites } = this.state;
    console.log(topSites);
    const ctx = document.getElementById('dailyPieChart');
    this.dailyPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: topSites.map(record => record.site),
        datasets: [{
          data: topSites.map(record => record.timeSpent),
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
    console.log(el);
    if (el && el._model) {
      const site = el._model.label;
      if (site !== 'Other') {
        $('#myModal').modal('show');
        fetchModalRecord(site);
      }
    }
  }

  render() {
    console.log('rendering daily PieCharg');
    return (
      <div>
        <canvas id="dailyPieChart" />
      </div>
    );
  }
}

export default connect(
  state => (
    {
      dailySites: state.dailySites
    }
  ),
  dispatch => (
    {
      fetchModalRecord: site => dispatch(fetchModalRecord(site))
    }
  )
)(DailyPieChart);
