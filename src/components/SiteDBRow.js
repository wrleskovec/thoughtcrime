import React from 'react';
import moment from 'moment';

export default function SiteDBRow(props) {
  // utilize id that corresponds to index of element in state
  const { id, site, timeSpent, action, advAction, visits, openModal } = props;
  const onClickEdit = rowId => e => openModal(rowId);
  return (
    <tr id={`datarow-${id}`} key={id} >
      <th scope="row">{id}</th>
      <td>{site}</td>
      <td>{visits}</td>
      <td>{timeSpent}</td>
      <td>{action}</td>
      <td>{JSON.stringify(advAction)}</td>
    </tr>
  );
}
