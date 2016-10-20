import React from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.css';
import SortableHeader from './SortableHeader.js';

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
    const order = (column === this.state.sortBy) ? -this.state.order : this.state.order;
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
    const itemCount = (this.state.sites.length < maxEntry) ? this.state.sites.length : maxEntry;
    let columnCount = 0;
    const finishedColumns = [];
    let finishedTable;
    if (!itemCount) {
      finishedTable = <div>Nothing to Show</div>;
    } else {
      const sites = this.state.sites;
      const topTen = sites.slice(0, itemCount);
      for (const column in sites[0]) {
        if (sites[0].hasOwnProperty(column)) {
          columnCount += 1;
          finishedColumns.push(
            <Column
              header=<SortableHeader column={column} onHeaderClick={this.onHeaderClick} />
              key={column}
              cell={c => (
                <Cell>
                  {topTen[c.rowIndex][column]}
                </Cell>
              )}
              width={200}
            />
          );
        }
      }
      finishedTable = (
        <Table
          rowsCount={itemCount}
          rowHeight={30}
          headerHeight={30}
          width={columnCount * 200}
          height={(itemCount + 1) * 30 + 2}
        >
          {finishedColumns}
        </Table>
      );
    }
    return (
      finishedTable
    );
  }
}
