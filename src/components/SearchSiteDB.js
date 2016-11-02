import React from 'react';
import SiteDBRow from './SiteDBRow.js';

export default class SearchSiteDB extends React.Component {
  constructor(props) {
    super(props);
    // Default to Descending Order on timeSpent
    console.log(props);
    this.onHeaderClick = this.onHeaderClick.bind(this);
    this.state = {
      sortBy: 'timeSpent',
    };
  }
  onHeaderClick(header) {
    return e => {
      console.log(header);
      console.log(e);
    };
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Site</th>
            <th>Visits</th>
            <th>TimeSpent</th>
            <th>Filter</th>
            <th>AdvFilter</th>
          </tr>
        </thead>
        {this.props.sites.map((record, index, array) => (
          <SiteDBRow id={index} openModal={this.props.openModal} {...record} />
        ))}
      </table>
    );
  }
}
