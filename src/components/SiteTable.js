import React from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.css';
import moment from 'moment';

export default class SiteTable extends React.Component {
  constructor(props) {
    super(props);
    // Default to Descending Order on timeSpent
    console.log(props);
    this.state = {
      sortBy: 'timeSpent',
      order: 1,
      sites: this.sortSites(props.sites, 'timeSpent', 1)
    };
  }
  sortSites(sites, sortBy, order) {
    return sites.sort((a, b) => order * (b[sortBy] - a[sortBy]));
  }
  render() {
    const itemCount = (this.state.sites.length < 10) ? this.state.sites.length : 10;
    let columnCount = 0;
    const finishedColumns = [];
    let finishedTable;
    if (!itemCount) {
      finishedTable = <div>Nothing to Show</div>;
    } else {
      const { sites } = this.state.sites;
      const topTen = sites.slice(0, itemCount);
      for (const column in sites[0]) {
        if (sites[0].hasOwnProperty(column)) {
          columnCount += 1;
          finishedColumns.push(
            <Column
              header={column}
              cell={c => (
                <Cell>
                  {topTen[c.rowIndex].site}
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
      // <Table
      //   rowsCount={10}
      //   rowHeight={30}
      //   headerHeight={30}
      //   width={600}
      //   height={(itemCount + 1) * 30 + 2}
      // >
      //   <Column
      //     header="Site"
      //     cell={c => (
      //       <Cell>
      //         {topTen[c.rowIndex].site}
      //       </Cell>
      //     )}
      //     width={200}
      //   />
      //   <Column
      //     header="Visits"
      //     cell={c => (
      //       <Cell>
      //         {topTen[c.rowIndex].visits}
      //       </Cell>
      //     )}
      //     width={200}
      //   />
      //   <Column
      //     header="Time"
      //     cell={c => (
      //       <Cell>
      //         {moment('2015-01-01').startOf('day')
      //           .seconds(this.state.sites[c.rowIndex].timeSpent)
      //           .format('H:mm:ss')}
      //       </Cell>
      //     )}
      //     width={200}
      //   />
      // </Table>
    );
  }
}
