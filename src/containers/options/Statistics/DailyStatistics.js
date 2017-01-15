import React from 'react';
import { connect } from 'react-redux';
import { fetchDailySites } from '~/actions/options.js';

class DailyStatistics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-10 panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Add Pattern</h3>
          </div>
          <div className="panel-body">
          </div>
        </div>
        <div className="col-md-7 panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Add Pattern</h3>
          </div>
          <div className="panel-body">
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => (
    {
      sites: state.sites,
      message: state.message
    }
  ),
  dispatch => (
    {
      fetchDailySites: () => dispatch(fetchDailySites())
    }
  )
)(DailyStatistics);
