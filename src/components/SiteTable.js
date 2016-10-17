import React from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.css';
import moment from 'moment';

export default class SiteTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: props.sites
    };
  }
  // sortSites(sortBy) {
  //   const sortObj = this.props.sites[sortBy];
  //   this.setState({
  //     sites: Object.keys(sortObj).sort((a, b) => sortObj[a] - sortObj[b])
  //   });
  // }
  render() {
    return (
      <Table
        rowsCount={this.state.sites.length}
        rowHeight={30}
        headerHeight={30}
        width={320}
        height={332}
      >
        <Column
          header="Site"
          cell={c => (
            <Cell>
              {this.state.sites[c.rowIndex].site}
            </Cell>
          )}
          fixed="true"
          width={200}
        />
        <Column
          header="Visits"
          cell={c => (
            <Cell>
              {this.state.sites[c.rowIndex].visits}
            </Cell>
          )}
          width={50}
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
          width={70}
        />
      </Table>
    );
  }
}
