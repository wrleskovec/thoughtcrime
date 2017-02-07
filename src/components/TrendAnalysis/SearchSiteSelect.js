import React from 'react';
import _ from 'lodash';

export default class SearchSiteSelect extends React.Component {
  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onSelectSite = this.onSelectSite.bind(this);
    this.onKeyUp = _.debounce(this.onKeyUp.bind(this), 100);
  }
  onFocus(e) {
    if (e.target.value.trim() !== '') {
      const { listGroup } = this.refs;
      listGroup.style.display = 'block';
    }
  }
  onBlur() {
    // onBlur has a race condition with onClick so it needs to be delayed
    setTimeout(() => {
      const { listGroup } = this.refs;
      listGroup.style.display = 'none';
    }, 100);
  }
  onKeyUp() {
    const { handleOnChange } = this.props;
    const { searchField, listGroup } = this.refs;
    const value = searchField.value.trim();
    if (value) {
      listGroup.style.display = 'block';
      handleOnChange(value);
    }
  }
  onSelectSite(e) {
    const { handleAddSite } = this.props;
    const siteName = e.target.innerHTML.trim();
    handleAddSite(siteName);
  }
  render() {
    const { searchResults } = this.props;
    return (
      <div className="col-md-6">
        <div className="dropdown-search">
          <label htmlFor="siteSearchDropDown">Add Site: </label>
          <div id="siteSearchDropDown" className="form-group">
            <input
              type="text" className="form-control" onFocus={this.onFocus}
              onKeyUp={this.onKeyUp} onBlur={this.onBlur} ref="searchField"
            />
          </div>
          <ul className="list-group" ref="listGroup">
            {searchResults.map(site => (
              <li className="list-group-item">
                <a onClick={this.onSelectSite}>{site}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
