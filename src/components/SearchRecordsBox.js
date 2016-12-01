import React from 'react';

export default class SearchRecordsBox extends React.Component {
  constructor(props) {
    super(props);
    this.searchSites = this.searchSites.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  searchSites() {
    const { searchSites } = this.props;
    console.log(this.refs.findSites.value);
    searchSites(this.refs.findSites.value);
  }
  handleKeyDown(e) {
    if (e.which === 13) {
      this.searchSites();
    }
  }
  render() {
    return (
      <div id="SearchRecordsBox" className="input-group">
        <input
          id="findSites" type="text" className="form-control"
          placeholder="Search for Records" ref="findSites" onKeyDown={this.handleKeyDown}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-default" type="button"
            onClick={this.searchSites}
          >
            Search
          </button>
        </span>
      </div>
    );
  }
}
