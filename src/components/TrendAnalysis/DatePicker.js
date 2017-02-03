import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function DatePickerGroup(props) {
  const { endDate, startDate, handleEndDateChange, handleStartDateChange } = props;
  return (
    <div>
      <div id="startDatePicker" className="col-md-3">
        <label className="datepicker-label" htmlFor="startDatePicker">Start Date: </label>
        <DatePicker selected={startDate} onChange={handleStartDateChange} />
      </div>
      <div id="endDatePicker" className="col-md-3">
        <label className="datepicker-label" htmlFor="endDatePicker">End Date: </label>
        <DatePicker selected={endDate} onChange={handleEndDateChange} />
      </div>
    </div>
  );
}
