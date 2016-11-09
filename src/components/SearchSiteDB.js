import React from 'react';
import SiteDBRow from './SiteDBRow.js';
import Pagination from './Pagination';

const PAGE_ITEMS = 12;

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
      pageN: 0,
    };
  }
  onPageClick(e) {
    const { pageN, records } = this.state;
    const id = e.target.id;
    const numOfPages = Math.ceil(records.length / PAGE_ITEMS);

    if (id === 'pagePrev' && pageN > 0) {
      this.setState({ pageN: pageN - 1 });
    } else if (id === 'pageNext' && pageN < numOfPages) {
      this.setState({ pageN: pageN + 1 });
    } else if (id.indexOf('page') > -1) {
      this.setState({ pageN: parseInt(id.slice(4), 10) });
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
                id={index} openModal={this.props.openModal}
                offset={offset} {...record}
              />
            ))}
          </tbody>
        </table>
        <Pagination onPageClick={this.onPageClick} pageN={pageN} numOfPages={numOfPages} />
      </div>
    );
  }
}
