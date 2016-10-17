import React from 'react';
import { connect } from 'react-redux';
import SiteTable from '../components/SiteTable.js';

import { addSite, fetchSites } from '../actions/common.js';

class OptionsApp extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitPattern = this.onSubmitPattern.bind(this);
  }
  componentWillMount() {
  }
  onSubmitPattern(e) {
    const { addSite } = this.props;
    e.preventDefault();
    addSite(this.refs.patternInput.value.trim());
    this.refs.patternInput.value = '';
  }

  render() {
    console.log(this.props.sites);
    let listOfPatterns;
    if (this.props.sites) {
      listOfPatterns = <SiteTable sites={this.props.sites} />;
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
              <div className="alert alert-warning" role="alert">
              </div>
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
    {
      sites: state.sites,
      message: state.message
    }
  ),
  dispatch => (
    {
      addSite: site => dispatch(addSite(site)),
      fetchSites: () => dispatch(fetchSites())
    }
  )
)(OptionsApp);
