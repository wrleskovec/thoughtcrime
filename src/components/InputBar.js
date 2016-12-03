import React from 'react';

export default class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'Domain'
    };
    this.onSubmitPattern = this.onSubmitPattern.bind(this);
    this.toggleACL = this.toggleACL.bind(this);
  }
  onSubmitPattern(e) {
    e.preventDefault();
    const { patternInput, select } = this.refs;
    const { type } = this.state;
    this.props.addFilter(patternInput.value.trim(), select.value, type);
    this.refs.patternInput.value = '';
  }
  toggleACL(type) {
    return e => {
      this.setState({ type });
    };
  }
  render() {
    const { type } = this.state;
    const domainBtn = `btn ${(type === 'Domain') ? 'btn-primary' : 'btn-default'}`;
    const patternBtn = `btn ${(type === 'Pattern') ? 'btn-primary' : 'btn-default'}`;
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
            <select ref="select" value="limit" className="btn btn-default">
              <option value="accept">Accept</option>
              <option value="block">Block</option>
              <option value="limit">Limit</option>
            </select>
          </div>
          <input type="submit" className="btn btn-default pull-right" value="Add" />
        </form>
      </div>
    );
  }

}
