import React from 'react';
import moment from 'moment';
import 'moment-duration-format';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    const limitSeconds = props.currentLimit ? props.currentLimit - props.seconds : undefined;
    this.state = {
      seconds: props.seconds || 0,
      limitSeconds
    };
    this.incrementTimer = this.incrementTimer.bind(this);
    this.interval = setInterval(this.incrementTimer, 1000);
  }
  incrementTimer() {
    const { seconds } = this.state;
    this.setState({
      seconds: seconds + 1,
    });
  }
  render() {
    const { seconds, limitSeconds } = this.state;
    let spanTimer;
    const spanStyle = {};
    if (limitSeconds) {
      spanTimer = moment.duration(limitSeconds - seconds, 'seconds')
        .format('h:mm:ss', { trim: false });
      spanStyle.color = 'red';
    } else {
      spanTimer = moment.duration(seconds, 'seconds').format('h:mm:ss', { trim: false });
    }
// Need to set onLimit value in Filter or maybe check if limitCD is undefined?
    return (
      <div>
        <span style={spanStyle}>{spanTimer}</span>
      </div>
    );
  }
}
