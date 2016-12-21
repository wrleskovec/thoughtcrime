import React from 'react';
import { connect } from 'react-redux';
import WeeklyScheduler from 'react-week-scheduler';
import 'react-week-scheduler/react-week-scheduler.css';
import { saveChangesSchedule } from '~/actions/options';

const startingDefault = { event: 'Default', color: [215, 12, 85] };
const blockingEvent = { event: 'Block All', color: [360, 36, 55] };
const limitingEvent = { event: 'Accept All', color: [50, 55, 50] };
const eventList = [startingDefault, blockingEvent, limitingEvent];

class Scheduling extends React.Component {
  constructor(props) {
    super(props);
    this.handleSaveChanges = this.handleSaveChanges.bind(this);
  }
  handleSaveChanges(e) {
    const { saveChangesSchedule } = this.props;
    const { scheduler } = this.refs;
    const schedule = scheduler.state.days;
    saveChangesSchedule(schedule);
  }
  render() {
    return (
      <div className="col-md-10" id="Scheduling">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Schedule Week Filter Behavior</h3>
          </div>
          <div className="panel-body">
            <p>
              Schedule weekly filter behavior with table below by selecting filter option and drag
               and drop applicable rows.
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <WeeklyScheduler
                defaultEvent={startingDefault} selectedEvent={blockingEvent} events={eventList}
                ref="scheduler"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button
                type="button" className="btn btn-primary pull-right"
                onClick={this.handleSaveChanges}
              >
                Save Changes
              </button>
            </div>
          </div>
          <div className="panel-footer">
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    patterns: state.Filtering.patterns
  }),
  dispatch => ({
    saveChangesSchedule: schedule => dispatch(saveChangesSchedule(schedule))
  })
)(Scheduling);
