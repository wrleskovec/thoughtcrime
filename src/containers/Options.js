import React from 'react';
import logo from '../img/thoughtcrime.svg';
import menuOptions from './options/OptionsMenu';

export default class OptionsApp extends React.Component {
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
    const Content = menuOptions.options[this.state.selectedPage];
    return (
      <div id="OptionsApp">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <img
                src={logo} alt="" className="img-responsive center-block" height="128" width="128"
              />
            </div>
            <div className="col-md-10 offset-md-2">
              <div className="page-header text-center">
                <h1>ThoughtCrime - <small>{this.state.selectedPage}</small></h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 sidebar">
              <ul className="nav nav-sidebar nav-pills nav-stacked" id="options-menu">
                {menuOptions.structure.map(cat => {
                  const catActive = (this.state.selectedPage === cat.title) ? 'active' : '';
                  const collapse = cat.items ? 'collapse' : '';
                  return (
                    <li
                      key={cat.title} role="presentation" className={catActive}
                      data-toggle="collapse" data-parent="options-menu"
                      onClick={this.onMenuClick(cat.title)}
                    >
                      <a href="#">{cat.title}</a>
                      {cat.items &&
                        <ul className="nav nav-pills nav-stacked collapse in" id={cat.title}>
                          {cat.items.map(item => {
                            const active = (this.state.selectedPage === item) ? 'active' : '';
                            return (
                              <li
                                key={item} role="presentation" className={active}
                                onClick={this.onMenuClick(item)}
                              >
                                <a href="#">{item}</a>
                              </li>
                            );
                          })}
                        </ul>
                      }
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
