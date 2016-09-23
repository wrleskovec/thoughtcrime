import React from 'react';
import { connect } from 'react-redux';
import wurl from 'wurl';
import logo from '../img/tc-32.png';
import { addSite } from '../actions/common.js';
const styleHeading = { padding: '0px' };
const styleTitle = { padding: '10px 15px 10px 15px' };
const styleLogo = { padding: '3px 15px 4px 5px' };

class PopupApp extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitPattern = this.onSubmitPattern.bind(this);
    this.goToOptions = this.goToOptions.bind(this);
    this.state = {
      currentDN: ''
    };
  }
  componentWillMount() {
    chrome.tabs.getSelected(null, tab => {
      this.setState({ currentDN: wurl('domain', tab.url) });
    });
  }
  onSubmitPattern(e) {
    const { addSite } = this.props;
    e.preventDefault();
    addSite(this.refs.patternInput.value.trim());
    this.setState({ currentDN: '' });
  }
  goToOptions(e) {
    e.preventDefault();
    chrome.tabs.create({ url: chrome.extension.getURL('options.html') });
  }
  render() {
    console.log('kay');
    return (
      <div id="PopupApp" className="panel panel-default" style={{ width: '400px' }}>
        <div className="panel-heading" style={styleHeading}>
          <img src={logo} className="img-responsive pull-left" style={styleLogo} alt="" />

          <h3 className="panel-title" style={styleTitle}>Thought Crime</h3>

        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmitPattern}>
            <div className="input-group">
              <input
                type="text" className="form-control" name="patternInput" ref="patternInput"
                value={this.state.currentDN}
              />
              <span className="input-group-btn">
                <input type="submit" className="btn btn-default" value="Add" />
              </span>

            </div>

          </form>
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
      message: state.message
    }
  ),
  dispatch => (
    {
      addSite: site => dispatch(addSite(site))
    }
  )
)(PopupApp);
