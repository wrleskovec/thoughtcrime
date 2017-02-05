import React from 'react';

export default class SearchSiteSelect extends React.Component {
  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onSelectSite = this.onSelectSite.bind(this);
  }
  onFocus() {
    console.log('focus was called');
    document.querySelector('.list-group').style.display = 'block';
  }
  onChange(e) {
    const { target } = e;
  }
  onSelectSite(e) {
    const { target } = e;
    console.log(target.getBoundingClientRect());
  }
  render() {
    const sites = ['google.com', 'washingtonpost.com', 'twitter.com'];
    return (
      <div className="col-md-6">
        <div className="dropdown-search">
          <label htmlFor="siteSearchDropDown">Add Site: </label>
          <div id="siteSearchDropDown" className="form-group">
            <input
              type="text" className="form-control" onFocus={this.onFocus}
            />
          </div>
          <ul className="list-group">
            {sites.map(site => (
              <li className="list-group-item">
                <a onClick={this.onSelectSite} href="#">{site}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
