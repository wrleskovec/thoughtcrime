import React from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.css';
import moment from 'moment';

export default class SiteTable extends React.Component {
  constructor(props) {
    super(props);
    this.sortSites = this.sortSites.bind(this);
    this.state = {
      sites: this.sortSites(props.sites, 'timeSpent')
    };
  }
  sortSites(sites, sortBy) {
    return sites.sort((a, b) => b[sortBy] - a[sortBy]);
  }
  render() {
    const itemCount = (this.state.sites.length < 10) ? this.state.sites.length : 10;
    const topTen = this.state.sites.slice(0, itemCount);
    return (
      <Table
        rowsCount={10}
        rowHeight={30}
        headerHeight={30}
        width={600}
        height={(itemCount + 1) * 30 + 2}
      >
        <Column
          header="Site"
          cell={c => (
            <Cell>
              {topTen[c.rowIndex].site}
            </Cell>
          )}
          width={200}
        />
        <Column
          columnKey="number"
          header="Visits"
          cell={c => (
            <Cell>
              {topTen[c.rowIndex].visits}
            </Cell>
          )}
          width={200}
        />
        <Column
          header="Time"
          cell={c => (
            <Cell>
              {moment('2015-01-01').startOf('day')
                .seconds(this.state.sites[c.rowIndex].timeSpent)
                .format('H:mm:ss')}
            </Cell>
          )}
          width={200}
        />
      </Table>
    );
  }
}
