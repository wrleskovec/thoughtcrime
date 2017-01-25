import React from 'react';
import { connect } from 'react-redux';
import TopTen from '~/components/TopTen';
import InputBar from '~/components/InputBar.js';
import DailyPieChart from '~/components/DailyPieChart';

import { addFilter } from '~/actions/common.js';

class Dash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className=" panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Add Pattern</h3>
              </div>
              <div className="panel-body">
                <InputBar addFilter={this.props.addFilter} />
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Daily Statistics</h3>
              </div>
              <div className="panel-body">
                <DailyPieChart sites={this.props.dailySites} />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className=" panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Daily Statistics</h3>
              </div>
              <div className="panel-body">
                <TopTen sites={this.props.dailySites} maxEntry={10} />
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
      dailySites: state.dailySites
    }
  ),
  dispatch => (
    {
      addFilter: (filter, action, type) => dispatch(addFilter(filter, action, type))
    }
  )
)(Dash);
