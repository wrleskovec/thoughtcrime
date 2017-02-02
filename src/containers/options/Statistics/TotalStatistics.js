import React from 'react';
import { connect } from 'react-redux';
import { fetchModalRecord } from '~/actions/options';
import { fetchSites } from '~/actions/common';
import TotalBarChart from '~/components/TotalBarChart';
import RestrictedBarChart from '~/components/RestrictedBarChart';

class TotalStatistics extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { sites, fetchSites } = this.props;
    if (!sites || !sites[0]) {
      fetchSites();
    }
  }
  render() {
    const { fetchModalRecord, sites } = this.props;
    return (
      <div id="TotalStatistics">
        <div className="row">
          <div className="col-md-10">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  All Time Top Sites
                </h3>
              </div>
              <div className="panel-body">
                <TotalBarChart sites={sites} fetchModalRecord={fetchModalRecord} n={8} />
              </div>
            </div>
          </div>
        </div>
        <div className="row" height="400px">
          <div className="col-md-10">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  All Time Restricted Sites
                </h3>
              </div>
              <div className="panel-body">
                <RestrictedBarChart sites={sites} fetchModalRecord={fetchModalRecord} n={8} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  state => (
    {
      sites: state.sites
    }
  ),
  dispatch => (
    {
      fetchModalRecord: site => dispatch(fetchModalRecord(site)),
      fetchSites: () => dispatch(fetchSites())
    }
  )
)(TotalStatistics);
