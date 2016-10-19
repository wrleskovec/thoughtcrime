import React from 'react';
import { connect } from 'react-redux';
import SiteTable from '../components/SiteTable.js';
import InputBar from '../components/InputBar.js';

import { addSite, fetchSites } from '../actions/common.js';

class OptionsApp extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
  }

  render() {
    return (
      <div id="OptionsApp">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <InputBar addSite={this.props.addSite} />
            </div>
            <div className="col-md-6">
              <SiteTable sites={this.props.sites} maxEntry={10} />
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
