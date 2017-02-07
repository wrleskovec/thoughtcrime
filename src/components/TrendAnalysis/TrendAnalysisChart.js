import React from 'react';
import { connect } from 'react-redux';
import { fetchModalRecord, fetchTrendData } from '~/actions/options';

class TrendAnalysisChart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { fetchTrendData, trendDatasets } = this.props;
    if (trendDatasets && trendDatasets[0]) {
      this.createChart();
    } else {
      fetchTrendData();
    }
  }
  createChart() {
    const { trendDatasets } = this.props;
    console.log('chart rendered');
    console.log(trendDatasets);
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
