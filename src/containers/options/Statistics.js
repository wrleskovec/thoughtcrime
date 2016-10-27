import React from 'react';
import { connect } from 'react-redux';
import SiteTable from '../../components/SiteTable.js';
import InputBar from '../../components/InputBar.js';

import { addSite, fetchSites } from '../../actions/common.js';

class Statistics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Add Pattern</h3>
          </div>
          <div className="panel-body">
            <InputBar addSite={this.props.addSite} />
          </div>
        </div>
        <div className="col-md-7 panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Add Pattern</h3>
          </div>
          <div className="panel-body">
            <SiteTable sites={this.props.sites} maxEntry={10} />
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
)(Statistics);
