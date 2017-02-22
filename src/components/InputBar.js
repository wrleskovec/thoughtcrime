import React from 'react';
import wurl from 'wurl';

export default class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'Domain',
      action: 'limit',
      error: ''
    };
    this.onSubmitPattern = this.onSubmitPattern.bind(this);
    this.toggleACL = this.toggleACL.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  onSubmitPattern(e) {
    e.preventDefault();
    const { patternInput, select } = this.refs;
    const { type } = this.state;
    const value = patternInput.value.trim();
    if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/.test(value)) {
      this.props.addFilter(value, select.value, type);
      this.refs.patternInput.value = '';
      this.setState({ error: '' });
    } else {
      this.setState({ error: 'Invalid Domain. Format: youtube.com' });
    }
  }
  handleSelect(e) {
    const selected = e.target.value;
    this.setState({
      action: selected
    });
  }
  toggleACL(type) {
    return e => {
      this.setState({ type });
    };
  }
  render() {
    const { type, action, error } = this.state;
    const domainBtn = `btn ${(type === 'Domain') ? 'btn-primary' : 'btn-default'}`;
    const patternBtn = `btn ${(type === 'Pattern') ? 'btn-primary' : 'btn-default'}`;
    const showError = error ? 'block' : 'none';
    return (
      <div id="InputBar">
        <form onSubmit={this.onSubmitPattern}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="patternInput" ref="patternInput" defaultValue={this.props.currentValue || ''}
            />
          </div>
          <div className="btn-group" role="group">
            <button type="button" className={domainBtn} onClick={this.toggleACL('Domain')}>
              Domain
            </button>
            <button type="button" className={patternBtn} onClick={this.toggleACL('Pattern')}>
              Pattern
            </button>
            <select
              ref="select" value={action} onChange={this.handleSelect} className="btn btn-default"
            >
              <option value="accept">Accept</option>
              <option value="block">Block</option>
              <option value="limit">Limit</option>
            </select>
          </div>
          <input type="submit" className="btn btn-default pull-right" value="Add" />
        </form>
        <div className="alert alert-danger" role="alert" style={{ display: showError }}>
          <span className="glyphicon glyphicon-exclamation-sign"></span>
          <span className="sr-only">Error:</span>
          {error}
        </div>
      </div>
    );
  }

}
