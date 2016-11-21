import React from 'react';
import { Cell } from 'fixed-data-table';

export default class SortableHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onHeaderClick = this.onHeaderClick.bind(this);
  }
  onHeaderClick(e) {
    console.log(this.refs.column);
    this.props.onHeaderClick(this.refs.column.innerText);
  }
  render() {
    const { column } = this.props;
    return (
      <Cell>
        <a ref={column} onClick={this.onHeaderClick}>{column}</a>
      </Cell>
    );
  }
}
