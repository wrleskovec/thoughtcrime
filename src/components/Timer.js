import React from 'react';
import moment from 'moment';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    console.log(`In Timer: ${props.timer}`);
    this.state = {
      seconds: props.timer || 0
    };
    this.incrementTimer = this.incrementTimer.bind(this);
    this.interval = setInterval(this.incrementTimer, 1000);
  }
  incrementTimer() {
    this.setState({
      seconds: this.state.seconds + 1
    });
  }
  render() {
    console.log(this.state.seconds);
    const spanTimer = moment('2015-01-01').startOf('day')
    .seconds(this.state.seconds)
    .format('H:mm:ss');

    return (
      <span>{spanTimer}</span>
    );
  }
}
