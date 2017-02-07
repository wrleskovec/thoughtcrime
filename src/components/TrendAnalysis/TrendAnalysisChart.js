import React from 'react';
import { connect } from 'react-redux';
import { fetchModalRecord, fetchTrendData } from '~/actions/options';
import _ from 'lodash';

class TrendAnalysisChart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { fetchTrendData, trendDatasets, selectedSites } = this.props;
    if (trendDatasets && trendDatasets[0]) {
      this.createChart();
    } else {
      if (selectedSites && selectedSites[0]) {
        fetchTrendData();
        console.log('FUCKING');
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    const { fetchTrendData } = this.props;
    const diffSelected = !_.isEqual(nextProps.selectedSites, this.props.selectedSites);
    const diffStart = !_.isEqual(nextProps.startDate, this.props.startDate);
    const diffEnd = !_.isEqual(nextProps.endDate, this.props.endDate);
    if (diffSelected || diffStart || diffEnd) {
      fetchTrendData();
      console.log('FUCKING IT UP');
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
