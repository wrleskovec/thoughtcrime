import React from 'react';
import logo from '../img/thoughtcrime.svg';
import menuOptions from './options/OptionsMenu';

export default class OptionsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: 'Dash',
      category: 'Dash'
    };
    this.onMenuClick = this.onMenuClick.bind(this);
  }
  onMenuClick(category, selectedPage) {
    return e => {
      e.stopPropagation();
      this.setState({ category, selectedPage });
    };
  }

  render() {
    const { selectedPage, category } = this.state;
    const Content = menuOptions.options[selectedPage];
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
                <h1>ThoughtCrime - <small>{selectedPage}</small></h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 sidebar">
              <ul className="nav nav-sidebar nav-pills nav-stacked" id="options-menu">
                {menuOptions.structure.map(cat => {
                  const catActive = (selectedPage === cat.title) ? 'active' : '';
                  const collapse = (cat.title === category) ?
                  'nav nav-pills nav-stacked collapse in' : 'nav nav-pills nav-stacked collapse';
                  return (
                    <li
                      key={cat.title} role="presentation" className={catActive}
                    >
                      <a
                        data-toggle="collapse" data-parent="options-menu"
                        onClick={this.onMenuClick(cat.title, cat.title)} href={`#${cat.title}-menu`}
                      >
                        {cat.title}
                      </a>
                      {cat.items &&
                        <ul
                          className={collapse} id={`${cat.title}-menu`}
                        >
                          {cat.items.map(item => {
                            const active = (selectedPage === item) ? 'active' : '';
                            return (
                              <li
                                key={item} role="presentation" className={active}
                                onClick={this.onMenuClick(cat.title, item)}
                              >
                                <a href={`#${item}`}>{item}</a>
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
