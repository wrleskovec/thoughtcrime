import React from 'react';
import { connect } from 'react-redux';
import DailyPieChart from '~/components/DailyPieChart';
import SearchSiteDB from '~/components/SearchSiteDB';
import {
  openModal, fetchDailySiteRecords, sortSites, fetchModalRecord
} from '~/actions/options.js';

class DailyStatistics extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { fetchDailySiteRecords } = this.props;
    fetchDailySiteRecords();
  }
  render() {
    const { openModal, dailySiteRecords, order, sortBy, sortSites } = this.props;
    return (
      <div id="DailyStatistics">
        <div className="row">
          <div className="col-md-10">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Time Spent Today
                </h3>
              </div>
              <div className="panel-body">
                <DailyPieChart
                  n={7} fetchModalRecord={fetchModalRecord} dailySites={dailySiteRecords}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row" height="400px">
          <div className="col-md-10">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Time Spent Today
                </h3>
              </div>
              <div className="panel-body">
                <SearchSiteDB
                  sites={dailySiteRecords} sortSites={sortSites} sortBy={sortBy} order={order}
                />
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
      dailySiteRecords: state.Statistics.dailySiteRecords,
      sortBy: state.Filtering.sortBy,
      order: state.Filtering.order
    }
  ),
  dispatch => (
    {
      fetchDailySiteRecords: () => dispatch(fetchDailySiteRecords()),
      openModal: record => dispatch(openModal(record)),
      fetchModalRecord: site => dispatch(fetchModalRecord(site)),
      sortSites: sortBy => dispatch(sortSites(sortBy)),
    }
  )
)(DailyStatistics);
