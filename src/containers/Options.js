import React from 'react';
import { connect } from 'react-redux';
import logo from '../img/thoughtcrime.svg';
import menuOptions from './options/AllOptions.js';

import { addSite, fetchSites } from '../actions/common.js';

class OptionsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: 'Dash'
    };
    this.onMenuClick = this.onMenuClick.bind(this);
  }
  onMenuClick(id) {
    return e => {
      this.setState({ selectedPage: id });
    };
  }


  render() {
    const Content = menuOptions[this.state.selectedPage];
    return (
      <div id="OptionsApp">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <img src={logo} alt="" className="img-responsive center-block" height="128" width="128" />
            </div>
            <div className="col-md-10 offset-md-2">
              <div className="page-header text-center">
                <h1>ThoughtCrime - <small>{this.state.selectedPage}</small></h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 sidebar">
              <ul className="nav nav-sidebar nav-pills nav-stacked">
                {Object.keys(menuOptions).map(item => {
                  const active = (this.state.selectedPage === item) ? 'active' : '';
                  return (
                    <li
                      id={item}
                      key={item}
                      role="presentation" className={active} onClick={this.onMenuClick(item)}
                    >
                      <a href="#">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-md-10 main">
              <Content />
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
