import React from 'react';
import TrendAnalysisOptions from '~/components/TrendAnalysis/TrendAnalysisOptions';

export default class TrendAnalysis extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="TotalStatistics">
        <TrendAnalysisOptions n={8} />
        <div className="row" height="400px">
          <div className="col-md-10">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Time Spent Today
                </h3>
              </div>
              <div className="panel-body">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
