import React from 'react';
import { connect } from 'react-redux';
import { fetchDailySites } from '~/actions/options.js';
import DailyPieChart from '~/components/DailyPieChart';

class DailyStatistics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
                <DailyPieChart sites={this.props.dailySites} />
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
                <DailyPieChart sites={this.props.dailySites} n={8} />
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
      dailySites: state.dailySites,
      message: state.message
    }
  ),
  dispatch => (
    {
      fetchDailySites: () => dispatch(fetchDailySites())
    }
  )
)(DailyStatistics);
