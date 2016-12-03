import React from 'react';
import { connect } from 'react-redux';
import wurl from 'wurl';
import logo from '../img/tc-32.png';
import { addFilter } from '../actions/common.js';
import { getTimer } from '../actions/popup.js';
import Timer from '../components/Timer.js';
import InputBar from '../components/InputBar.js';
const styleHeading = { padding: '0px' };
const styleTitle = { padding: '10px 15px 10px 15px' };
const styleLogo = { padding: '3px 15px 4px 5px' };

class PopupApp extends React.Component {
  constructor(props) {
    super(props);
    this.goToOptions = this.goToOptions.bind(this);
    this.state = {
      currentValue: undefined,
    };
  }
  componentWillMount() {
    const { getTimer } = this.props;
    getTimer();
    chrome.tabs.getSelected(null, tab => {
      this.setState({ currentValue: wurl('domain', tab.url) });
    });
  }

  goToOptions(e) {
    e.preventDefault();
    chrome.tabs.create({ url: chrome.extension.getURL('options.html') });
  }
  render() {
    console.log(`Timer: ${this.props.timer}`);
    let timerComponent;
    if (this.props.timer) {
      timerComponent = <Timer timer={this.props.timer} />;
    } else {
      timerComponent = '';
    }
    return (
      <div id="PopupApp" className="panel panel-default" style={{ width: '400px' }}>
        <div className="panel-heading" style={styleHeading}>
          <img src={logo} className="img-responsive pull-left" style={styleLogo} alt="" />

          <h3 className="panel-title" style={styleTitle}>Thought Crime</h3>

        </div>
        <div className="panel-body">
          {this.state.currentValue &&
            <InputBar
              addFilter={this.props.addFilter} currentValue={this.state.currentValue}
            />}
          {timerComponent}
          <button type="button" className="btn btn-default pull-right" onClick={this.goToOptions}>
            Options
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => (
    {
      sites: state.sites,
      message: state.message,
      timer: state.timer
    }
  ),
  dispatch => (
    {
      addFilter: (filter, action, type) => dispatch(addFilter(filter, action, type)),
      getTimer: () => dispatch(getTimer())
    }
  )
)(PopupApp);
