import React from 'react';
import { connect } from 'react-redux';
import SiteTable from '../components/SiteTable.js';
import InputBar from '../components/InputBar.js';

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
    return (
      <div id="OptionsApp">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <InputBar onSubmitPattern={this.onSubmitPattern} />
            </div>
            <div className="col-md-6">
              <SiteTable sites={this.props.sites} />
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
