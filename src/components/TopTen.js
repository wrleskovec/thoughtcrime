import React from 'react';
import SortableHeader from './SortableHeader.js';
import TopTenRow from './TopTenRow';

export default class SiteTable extends React.Component {
  constructor(props) {
    super(props);
    // Default to Descending Order on timeSpent
    console.log(props);
    this.onHeaderClick = this.onHeaderClick.bind(this);
    this.state = {
      sortBy: 'timeSpent',
      order: 1,
      sites: this.sortProps(props.sites, 'timeSpent', 1)
    };
  }
  onHeaderClick(column) {
    const order = (column === this.state.sortBy) ? -this.state.order : 1;
    this.setState({
      sortBy: column,
      order,
      sites: this.sortProps(this.props.sites, column, order)
    });
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
    const { maxEntry } = this.props;
    const { sites } = this.state;
    const itemCount = (this.state.sites.length < maxEntry) ? this.state.sites.length : maxEntry;
    const topTen = sites.slice(0, itemCount);
    return (
      <div id="searchSiteDB">
        <table className="table table-striped table-bordered">
          <SortableHeader
            handleHeaderClick={this.onHeaderClick} columns={[
              { name: '#', sort: false, title: '#' },
              { name: 'site', sort: false, title: 'Site' },
              { name: 'visits', sort: true, title: 'Visits' },
              { name: 'timeSpent', sort: true, title: 'Time Spent' }
            ]}
          />
          <tbody>
            {topTen.map((record, index) => (
              <TopTenRow id={index} record={record} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
