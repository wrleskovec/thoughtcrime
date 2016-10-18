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
    const topTen = this.state.sites.slice(0, 10);
    return (
      <Table
        rowsCount={10}
        rowHeight={30}
        headerHeight={30}
        width={340}
        height={332}
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
          width={60}
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
          width={80}
        />
      </Table>
    );
  }
}
