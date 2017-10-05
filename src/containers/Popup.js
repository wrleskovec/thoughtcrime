import React from 'react';
import { connect } from 'react-redux';
import wurl from 'wurl';
import logo from '../img/thoughtcrime.svg';
import { addFilter } from '../actions/common.js';
import { getTimer, editDomainModal } from '../actions/popup.js';
import Timer from '../components/Timer.js';
import PopupInputBar from '../components/PopupInputBar.js';
const styleHeading = { padding: '0px' };
const styleTitle = { padding: '10px 15px 10px 15px' };
const styleLogo = {
  padding: '5px 5px 4px 5px',
  height: '32px',
  width: '32px'
};

class PopupApp extends React.Component {
  constructor(props) {
    super(props);
    this.goToOptions = this.goToOptions.bind(this);
    this.editDomain = this.editDomain.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.state = {
      currentValue: undefined,
      isDomain: true
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
  editDomain(e) {
    const { currentValue } = this.state;
    const { editDomainModal } = this.props;
    e.preventDefault();
    if (currentValue) {
      editDomainModal(currentValue);
    } else {
      chrome.tabs.getSelected(null, tab => {
        editDomainModal(wurl('domain', tab.url));
      });
    }
  }
  handleTypeChange(type) {
    if (type === 'Domain') {
      this.setState({ isDomain: true });
    } else {
      this.setState({ isDomain: false });
    }
  }
  render() {
    console.log('parent render called');
    const { timer } = this.props;
    let timerComponent;
    if (timer) {
      timerComponent = <Timer {...timer} />;
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
            <PopupInputBar
              addFilter={this.props.addFilter} currentValue={this.state.currentValue}
              handleTypeChange={this.handleTypeChange}
            />}
          {timerComponent}
          <button type="button" className="btn btn-default pull-right" onClick={this.goToOptions}>
            Options
          </button>
          <button
            type="button" className="btn btn-default pull-right" onClick={this.editDomain}
            disabled={!this.state.isDomain}
          >
            EditDomain
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
      timer: state.timer
    }
  ),
  dispatch => (
    {
      addFilter: (filter, action, type) => dispatch(addFilter(filter, action, type)),
      getTimer: () => dispatch(getTimer()),
      editDomainModal: (domain) => dispatch(editDomainModal(domain))
    }
  )
)(PopupApp);
