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
    }
  }
  createChart() {
    const { trendDatasets } = this.props;
  }
  adaptDataSets(datasets, selectedSites) {
    const labels = datasets.map(day => day.day);
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
    return {
      labels,
      datasets: datasets.map((day, index) => {
        // label: selectedSites[index]
      })
    };
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
