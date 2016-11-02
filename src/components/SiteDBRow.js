import React from 'react';
import moment from 'moment';

export default function SiteDBRow(props) {
  // utilize id that corresponds to index of element in state
  const { id, site, timeSpent, block, advBlock, visits, openModal } = props;
  const onClickEdit = rowId => e => openModal(rowId);
  return (
    <tr id={`datarow-${id}`} key={id} >
      <th scope="row">{id}</th>
      <td>{site}</td>
      <td>{visits}</td>
      <td>{timeSpent}</td>
      <td>{block}</td>
      <td>{JSON.stringify(advBlock)}</td>
    </tr>
  );
}
