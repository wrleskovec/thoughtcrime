import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

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
      <div className="row">
        <div className="col-md-10">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                Custom Chart Options
              </h3>
            </div>
            <div className="panel-body">
              <label htmlFor="startDatePicker">Start Date: </label>
              <div id="startDatePicker">
                <DatePicker selected={startDate} onChange={this.handleStartDateChange} />
              </div>
              <label htmlFor="endDatePicker">End Date: </label>
              <div id="endDatePicker">
                <DatePicker selected={endDate} onChange={this.handleEndDateChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
