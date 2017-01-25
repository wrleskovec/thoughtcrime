// import { VictoryPie, VictoryTheme, VictoryContainer } from 'victory';
import React from 'react';
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
      const numOfSites = (props.sites.length > 5) ? 5 : props.sites.length;
      const topFive = this.sortProps(props.sites).slice(0, numOfSites);
      for (let j = 0; j < numOfSites; j += 1) {
        fiveTotalTime += topFive[j].timeSpent;
      }
      for (let i = 0; i < props.sites.length; i += 1) {
        totalTime += props.sites[i].timeSpent;
      }
      topFive.push({ site: 'Other', timeSpent: totalTime - fiveTotalTime, visits: 0 });
      console.log(topFive);
      this.state = {
        topFiveSites: topFive
      };
    } else {
      this.state = {
        topFiveSites: []
      };
    }
  }
  componentDidMount() {
    const { topFiveSites } = this.state;
    const ctx = document.getElementById('dailyPieChart');
    const dailyPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: topFiveSites.map(record => record.site),
        datasets: [{
          data: topFiveSites.map(record => record.timeSpent),
          backgroundColor: [
            'hsl(35, 100%, 55%)',
            'hsl(195, 100%, 55%)',
            'hsl(107, 100%, 55%)',
            'hsl(0, 100%, 55%)',
            'hsl(52, 100%, 55%)',
            'hsl(149, 100%, 55%)'
          ],
          hoverBackgroundColor: [
            'hsl(35, 100%, 65%)',
            'hsl(195, 100%, 65%)',
            'hsl(107, 100%, 65%)',
            'hsl(0, 100%, 65%)',
            'hsl(52, 100%, 65%)',
            'hsl(149, 100%, 65%)'
          ]
        }]
      },
      animation: { animateScale: true }
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
      <canvas id="dailyPieChart" width={400} height={400}>
      </canvas>
    );
  }
}
