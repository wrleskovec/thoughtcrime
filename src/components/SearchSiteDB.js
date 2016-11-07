import React from 'react';
import SiteDBRow from './SiteDBRow.js';

export default class SearchSiteDB extends React.Component {
  constructor(props) {
    super(props);
    // Default to Descending Order on timeSpent
    console.log(props);
    this.onHeaderClick = this.onHeaderClick.bind(this);
    this.onPageClick = this.onPageClick.bind(this);
    let records;
    if (props.sites && props.sites.length > 1) {
      records = this.sortProps(props.sites, 'action', 1);
    } else {
      records = [];
    }
    this.state = {
      sortBy: 'action',
      order: 1,
      records,
      pageN: 0
    };
  }
  onPageClick(e) {
    const pageN = parseInt(e.target.id.slice(4));
    this.setState({ pageN });
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
    const PAGE_LIMIT = 12;
    const { pageN, records } = this.state;
    const numOfPages = Math.ceil(records.length / PAGE_LIMIT);
    const pages = [];
    for (let i = 0; i < numOfPages; i++) {
      pages.push(<li key={i}><a key={`page${i}`} id={`page${i}`} href="#">{i + 1}</a></li>);
    }
    const pagination = <ul className="pagination" onClick={this.onPageClick}>{pages}</ul>;
    const offset = pageN * PAGE_LIMIT;
    const currentPage = records.slice(offset, offset + PAGE_LIMIT);

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
                id={index} openModal={this.props.openModal}
                offset={offset} {...record}
              />
            ))}
          </tbody>
        </table>
        {pagination}
      </div>
    );
  }
}
