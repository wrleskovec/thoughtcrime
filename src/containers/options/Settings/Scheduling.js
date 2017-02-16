import React from 'react';
import { connect } from 'react-redux';
import WeeklyScheduler from 'react-week-scheduler';
import 'react-week-scheduler/react-week-scheduler.css';
import { saveChangesSchedule, fetchSchedule } from '~/actions/options';

const startingDefault = { event: 'Default', color: '#d4d8dd' };
const blockingEvent = { event: 'Block All', color: '#b66363' };
const limitingEvent = { event: 'Accept All', color: '#c6ae39' };
const eventList = [startingDefault, blockingEvent, limitingEvent];

class Scheduling extends React.Component {
  constructor(props) {
    super(props);
    this.handleSaveChanges = this.handleSaveChanges.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      dailyLimit: 0
    };
  }
  componentWillMount() {
    const { fetchSchedule } = this.props;
    fetchSchedule();
  }
  componentWillReceiveProps({ schedule }) {
    const { dailyLimit } = this.state;
    if (schedule.setting.dailyLimit !== dailyLimit) {
      this.setState({
        dailyLimit: schedule.setting.dailyLimit
      });
    }
  }
  handleChange(e) {
    this.setState({
      dailyLimit: e.target.value
    });
  }
  handleSaveChanges(e) {
    const { saveChangesSchedule, schedule } = this.props;
    const { dailyLimitInput } = this.refs;
    const dailyLimit = parseInt(dailyLimitInput.value, 10);
    // Adjusting currentTime alotted to this day to account for previous usage
    const oldCurrentTime = schedule.setting.currentTime;
    const oldDailyLimit = schedule.setting.dailyLimit;
    const newCurrentTime = dailyLimit * 60000 - (oldDailyLimit * 60000 - oldCurrentTime);
    const currentItems = this.scheduler.state.days;
    const newRecord = {
      config: 'schedule',
      items: currentItems,
      setting: { dailyLimit, currentTime: newCurrentTime }
    };
    saveChangesSchedule(newRecord);
  }
  render() {
    const { schedule } = this.props;
    const currentSchedule = schedule ? schedule.items : undefined;
    const { dailyLimit } = this.state;
    return (
      <div className="col-md-10" id="Scheduling">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Allocate Daily Limit</h3>
          </div>
          <div className="panel-body">
            <p>Allocate the amount of time allowed to visit limited websites daily
              (integer in minutes).
            </p>
            <div className="row">
              <div className="col-md-12">
                <div className="input-group daily-limit">
                  <input
                    type="text" className="form-control" name="dailyLimit" ref="dailyLimitInput"
                    value={dailyLimit} onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

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
                currentSchedule={currentSchedule}
                ref={(scheduler) => { this.scheduler = scheduler; }}
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
    schedule: state.schedule
  }),
  dispatch => ({
    saveChangesSchedule: schedule => dispatch(saveChangesSchedule(schedule)),
    fetchSchedule: () => dispatch(fetchSchedule())
  })
)(Scheduling);
