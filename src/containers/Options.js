import React from 'react';
import { connect } from 'react-redux';
import PatternList from '../components/PatternList.js';

import { addPattern } from '../actions/common.js';

class OptionsApp extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitPattern = this.onSubmitPattern.bind(this);
  }
  onSubmitPattern(e) {
    const { addPattern } = this.props;
    e.preventDefault();
    addPattern(this.refs.patternInput.value.trim());
    this.refs.patternInput.value = '';
  }
  render() {
    let listOfPatterns;
    if (this.props.patterns) {
      listOfPatterns = <PatternList patterns={this.props.patterns} />;
    } else {
      listOfPatterns = {};
    }
    return (
      <div id="OptionsApp">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <form onSubmit={this.onSubmitPattern}>
                <div className="input-group">
                  <input
                    type="text" className="form-control" name="patternInput" ref="patternInput"
                  />
                  <span className="input-group-btn">
                    <input type="submit" className="btn btn-default" value="Add" />
                  </span>

                </div>

              </form>
            </div>
            <div className="col-md-6">
              {listOfPatterns}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => (
    { patterns: state.block }
  ),
  dispatch => (
    {
      addPattern: pattern => dispatch(addPattern(pattern))
    }
  )
)(OptionsApp);
