import { VictoryPie, VictoryTheme } from 'victory';
import React from 'react';

const pieStyle = {
  parent: {
    paddingLeft: '50px',
    paddingRight: '50px'
  }
};

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
      <div className="svg-chart-container">
        <VictoryPie
          style={pieStyle}
          theme={VictoryTheme.material}
          data={this.state.topFiveSites}
          x="site"
          y={(datum) => datum.timeSpent}
        />
      </div>
    );
  }
}
