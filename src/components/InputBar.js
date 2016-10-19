import React from 'react';

export default class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitPattern = this.onSubmitPattern.bind(this);
  }
  onSubmitPattern(e) {
    e.preventDefault();
    this.props.addSite(this.refs.patternInput.value.trim());
    this.setState({ currentValue: '' });
  }
  render() {
    return (
      <div id="InputBar">
        <form onSubmit={this.onSubmitPattern}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="patternInput" ref="patternInput" value={this.props.currentValue || ''}
            />
            <span className="input-group-btn">
              <input type="submit" className="btn btn-default" value="Add" />
            </span>

          </div>

        </form>
        <div className="alert alert-warning" role="alert">
        </div>
      </div>
    );
  }

}
