import React from 'react';
import _ from 'lodash';

export default class SearchSiteSelect extends React.Component {
  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onSelectSite = this.onSelectSite.bind(this);
    this.onChange = _.debounce(this.onChange.bind(this), 100);
  }
  onFocus() {
    console.log('focus was called');
    document.querySelector('.list-group').style.display = 'block';
  }
  onChange(e) {
    const { handleOnChange } = this.props;
    const value = e.target.value;
    handleOnChange(value);
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
