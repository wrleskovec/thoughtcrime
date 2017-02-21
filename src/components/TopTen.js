import React from 'react';
import TopTenRow from './TopTenRow';

export default class SiteTable extends React.Component {
  constructor(props) {
    super(props);
    // Default to Descending Order on timeSpent
    this.onHeaderClick = this.onHeaderClick.bind(this);
    this.state = {
      sortBy: 'timeSpent',
      order: 1,
      sites: this.sortProps(props.sites, 'timeSpent', 1)
    };
  }
  componentWillReceiveProps(nextProps) {
    const { order, sortBy } = this.state;
    const { sites } = nextProps;
    this.setState({ sites: this.sortProps(sites, sortBy, order) });
  }
  onHeaderClick(column) {
    const order = (column === this.state.sortBy) ? -this.state.order : 1;
    return () => {
      this.setState({
        sortBy: column,
        order,
        sites: this.sortProps(this.props.sites, column, order)
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
    const { maxEntry } = this.props;
    const { sites } = this.state;
    const itemCount = (this.state.sites.length < maxEntry) ? this.state.sites.length : maxEntry;
    const topTen = sites.slice(0, itemCount);
    return (
      <div id="TopTenTable">
        <table className="table table-striped table-bordered">
          <thead className="thead-inverse">
            <tr>
              <th>#</th>
              <th onClick={this.onHeaderClick('site')}>Site</th>
              <th onClick={this.onHeaderClick('visits')}>Visits</th>
              <th onClick={this.onHeaderClick('timeSpent')}>TimeSpent</th>
            </tr>
          </thead>
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
