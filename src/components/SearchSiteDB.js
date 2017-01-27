import React from 'react';
import SiteDBRow from './SiteDBRow.js';
import Pagination from './Pagination';
import _ from 'lodash';

const PAGE_ITEMS = 12;

export default class SearchSiteDB extends React.Component {
  constructor(props) {
    super(props);
    const { sites, sortBy, order, openModal } = this.props;

    let records;
    if (sites && sites.length > 0) {
      records = this.sortProps(sites, sortBy, order);
    } else {
      records = [];
    }
    this.onHeaderClick = this.onHeaderClick.bind(this);
    this.onPageClick = this.onPageClick.bind(this);
    this.state = {
      pageN: 0,
      records
    };
  }
  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps, this.props)) {
      const { order, sites, sortBy } = nextProps;
      let records;
      if (sites && sites.length > 0) {
        records = this.sortProps(sites, sortBy, order);
      } else {
        records = [];
      }
      this.setState({ records, pageN: 0 });
    }
  }
  onPageClick(e) {
    const { pageN, records } = this.state;

    const id = e.target.id;
    const numOfPages = Math.ceil(records.length / PAGE_ITEMS);
    if (id === 'prev' && pageN > 0) {
      this.setState({ pageN: pageN - 1 });
    } else if (id === 'next' && pageN < numOfPages - 1) {
      this.setState({ pageN: pageN + 1 });
    } else if (id.indexOf('page') > -1) {
      this.setState({ pageN: parseInt(id.slice(4), 10) });
    }
  }
  onHeaderClick(header) {
    const { sortSites } = this.props;
    return e => {
      sortSites(header);
    };
  }
  sortProps(sites, sortBy, order) {
    const sortOrder = (order === 'DESCENDING') ? 1 : -1;
    return sites.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return sortOrder * 1;
      }
      if (a[sortBy] > b[sortBy]) {
        return sortOrder * -1;
      }
      return 0;
    });
  }

  render() {
    const { openModal } = this.props;
    const { pageN, records } = this.state;

    const numOfPages = Math.ceil(records.length / PAGE_ITEMS);

    const offset = pageN * PAGE_ITEMS;
    const currentPage = records.slice(offset, offset + PAGE_ITEMS);

    return (
      <div id="searchSiteDB">
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
            {currentPage.map((record, index, array) => (
              <SiteDBRow
                id={index} openModal={openModal}
                offset={offset} record={record}
              />
            ))}
          </tbody>
        </table>
        <Pagination onPageClick={this.onPageClick} pageN={pageN} numOfPages={numOfPages} />
      </div>
    );
  }
}
