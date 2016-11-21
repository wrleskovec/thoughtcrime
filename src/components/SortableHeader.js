import React from 'react';
import { Cell } from 'fixed-data-table';

export default class SortableHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onHeaderClick = this.onHeaderClick.bind(this);
  }
  onHeaderClick(e) {
    this.props.onHeaderClick(this.props.column);
  }
  render() {
    return (
      <Cell>
        <a onClick={this.onHeaderClick}>{this.props.column}</a>
      </Cell>
    );
  }
}
