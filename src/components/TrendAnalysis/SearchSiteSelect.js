import React from 'react';

export default class SearchSiteSelect extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-6">
        <label htmlFor="siteSearchDropDown">Add Site: </label>
        <div id="siteSearchDropDown" className="form-group">
          <input type="text" className="form-control"></input>
        </div>
      </div>
    );
  }
}
