import React from 'react';

export default class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitPattern = this.onSubmitPattern.bind(this);
  }
  onSubmitPattern(e) {
    e.preventDefault();
    this.props.addSite(this.refs.patternInput.value.trim());
    this.refs.patternInput.value = '';
  }
  render() {
    console.log(`currentValue: ${this.props.currentValue}`);
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
          <input type="submit" className="btn btn-default" value="Add" />
        </form>
        <div className="alert alert-warning" role="alert">
        </div>
      </div>
    );
  }

}
