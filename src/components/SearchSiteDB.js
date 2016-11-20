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
    this.state = {
      sortBy: 'action',
      order: 1,
      pageN: 0,
      records: props.sites
    };
  }
  onPageClick(e) {
    const { pageN } = this.state;
    const { sites } = this.props;
    const id = e.target.id;
    const numOfPages = Math.ceil(sites.length / PAGE_ITEMS);

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
    const { sites, openModal } = this.props;
    console.log(sites);
    const { pageN, sortBy } = this.state;
    let records;
    if (sites && sites.length > 0) {
      records = this.sortProps(sites, sortBy, 1);
    } else {
      records = [];
    }

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
