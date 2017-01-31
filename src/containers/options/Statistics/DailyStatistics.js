import React from 'react';
import { connect } from 'react-redux';
import DailyPieChart from '~/components/DailyPieChart';
import DailySitesDB from '~/components/DailySitesDB';
import { fetchModalRecord, fetchDailySiteRecords } from '~/actions/options.js';

class DailyStatistics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fetchModalRecord, dailySiteRecords } = this.props;
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
                <DailySitesDB dailySites={dailySiteRecords} />
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
      dailySiteRecords: state.Statistics.dailySiteRecords
    }
  ),
  dispatch => (
    {
      fetchDailySiteRecords: () => dispatch(fetchDailySiteRecords()),
      fetchModalRecord: site => dispatch(fetchModalRecord(site))
    }
  )
)(DailyStatistics);
