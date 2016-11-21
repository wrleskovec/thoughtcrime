import React from 'react';
import { Cell } from 'fixed-data-table';

export default class SortableHeader extends React.Component {
  // test
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log(this.refs.column);
    this.props.onHeaderClick(this.refs.column.innerText);
  }
  render() {
    const { column } = this.props;
    return (
      <Cell>
        <a ref={column} onClick={this.handleClick}>{column}</a>
      </Cell>
    );
  }
}
