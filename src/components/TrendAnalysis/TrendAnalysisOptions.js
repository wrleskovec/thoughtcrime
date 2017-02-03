import React from 'react';
import DatePicker from '~/components/TrendAnalysis/DatePicker';
import SearchSiteSelect from '~/components/TrendAnalysis/SearchSiteSelect';
import moment from 'moment';

export default class TrendAnalysisOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(Date.now() - 7 * 24 * 3600 * 1000),
      endDate: moment()
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }
  handleStartDateChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleEndDateChange(date) {
    this.setState({
      endDate: date
    });
  }
  render() {
    const { startDate, endDate } = this.state;
    return (
      <div id="TrendAnalysisOptions" className="row">
        <div className="col-md-10">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                Custom Chart Options
              </h3>
            </div>
            <div className="panel-body">
              <div className="row">
                <DatePicker
                  handleEndDateChange={this.handleEndDateChange} endDate={endDate}
                  handleStartDateChange={this.handleStartDateChange} startDate={startDate}
                />
                <SearchSiteSelect />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
