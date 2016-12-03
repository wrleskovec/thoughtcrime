import React from 'react';

export default class SortableHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onHeaderClick = this.onHeaderClick.bind(this);
    this.state = {
      sortBy: props.sortBy
    };
  }
  onHeaderClick(column) {
    const { handleHeaderClick } = this.props;
    return e => {
      handleHeaderClick(column);
      this.setState({ sortBy: column });
    };
  }
  render() {
    const { columns } = this.props;
    const { sortBy } = this.state;
    return (
      <thead className="thead-inverse">
        <tr>
          {columns.map(column => {
            if (column.sort) {
              const active = (sortBy === column.name) ? 'active-col' : '';
              return (
                <th className={active} onClick={this.onHeaderClick(column.name)}>{column.title}</th>
              );
            }
            return (
              <th>{column.title}</th>
            );
          })}
        </tr>
      </thead>
    );
  }
}
