import React from 'react';
import SiteDBRow from './SiteDBRow.js';

export default class SearchSiteDB extends React.Component {
  constructor(props) {
    super(props);
    // Default to Descending Order on timeSpent
    console.log(props);
    this.onHeaderClick = this.onHeaderClick.bind(this);
    if (props.sites) {
      this.state = {
        sortBy: 'action',
        order: 1,
        records: this.sortProps(props.sites, 'action', 1)
      };
    } else {
      this.state = {
        sortBy: 'action',
        order: 1,
        records: []
      };
    }
  }
  onHeaderClick(header) {
    return e => {
      const order = (header === this.state.sortBy) ? -this.state.order : 1;
      this.setState({
        sortBy: header,
        order,
        records: this.sortProps(this.state.records, header, order)
      });
    };
  }
  sortProps(sites, sortBy, order) {
    return sites.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return order * 1;
      }
      if (a[sortBy] > b[sortBy]) {
        return order * -1;
      }
      return 0;
    });
  }

  render() {
    return (
      <table className="table table-striped table-bordered">
        <thead className="thead-inverse">
          <tr>
            <th>#</th>
            <th onClick={this.onHeaderClick('site')}>Site</th>
            <th onClick={this.onHeaderClick('visits')}>Visits</th>
            <th onClick={this.onHeaderClick('timeSpent')}>TimeSpent</th>
            <th onClick={this.onHeaderClick('action')}>Action</th>
            <th>AdvAction</th>
          </tr>
        </thead>
        <tbody>
          {this.state.records.map((record, index, array) => (
            <SiteDBRow id={index} openModal={this.props.openModal} {...record} />
          ))}
        </tbody>

      </table>
    );
  }
}
