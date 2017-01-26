// import { VictoryPie, VictoryTheme, VictoryContainer } from 'victory';
import React from 'react';
import moment from 'moment';
import 'moment-duration-format';
import Chart from 'chart.js';

// const pieStyle = {
//   parent: {
//     paddingLeft: '50px',
//     paddingRight: '50px'
//   }
// };

export default class DailyPieChart extends React.Component {
  constructor(props) {
    super(props);
    if (props.sites) {
      let totalTime = 0;
      let fiveTotalTime = 0;
      const numOfSites = (props.sites.length > props.n) ? props.n : props.sites.length;
      const topSites = this.sortProps(props.sites).slice(0, numOfSites);
      for (let j = 0; j < numOfSites; j += 1) {
        fiveTotalTime += topSites[j].timeSpent;
      }
      for (let i = 0; i < props.sites.length; i += 1) {
        totalTime += props.sites[i].timeSpent;
      }
      topSites.push({ site: 'Other', timeSpent: totalTime - fiveTotalTime, visits: 0 });
      console.log(topSites);
      this.state = {
        topSites
      };
    } else {
      this.state = {
        topSites: []
      };
    }
  }
  componentDidMount() {
    const { topSites } = this.state;
    const ctx = document.getElementById('dailyPieChart');
    const dailyPieChart = new Chart(ctx, {
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
        tooltips: {
          callbacks: {
            label: (tooltipItems, data) => {
              console.log(data);
              console.log(tooltipItems);
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

  render() {
    return (
      <div>
        <canvas id="dailyPieChart" />
      </div>
    );
  }
}
