import React from 'react';
import DailyPieChart from '~/components/DailyPieChart';
import DailySitesDB from '~/components/DailySitesDB';

export default class DailyStatistics extends React.Component {
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
                <DailyPieChart n={7} />
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
                <DailySitesDB />
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
