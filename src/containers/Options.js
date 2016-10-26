import React from 'react';
import { connect } from 'react-redux';
import SiteTable from '../components/SiteTable.js';
import InputBar from '../components/InputBar.js';
import logo from '../img/thoughtcrime.svg';

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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <img src={logo} alt="" className="img-responsive center-block" height="128" width="128" />
            </div>
            <div className="col-md-10 offset-md-2">
              <div className="page-header text-center">
                <h1>ThoughtCrime - <small>Dashboard</small></h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 sidebar">
              <ul className="nav nav-sidebar nav-pills nav-stacked">
                <li role="presentation" className="active"><a href="#">Dashboard</a></li>
                <li role="presentation"><a href="#">Statistics</a></li>
                <li role="presentation"><a href="#">Filtering</a></li>
                <li role="presentation"><a href="#">Settings</a></li>
              </ul>
            </div>
            <div className="col-md-10 main">
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
