import React from 'react';
import moment from 'moment';

export default function SiteDBRow(props) {
  // utilize id that corresponds to index of element in state
  const { id, site, timeSpent, action, advAction, visits, openModal, offset } = props;
  const onClickEdit = rowId => e => openModal(rowId);
  return (
    <tr id={`datarow-${id + offset}`} key={id + offset} >
      <th scope="row">{id + offset + 1}</th>
      <td className="dataCell">{site}</td>
      <td className="dataCell">{visits}</td>
      <td className="dataCell">{moment('2015-01-01').startOf('day')
            .seconds(timeSpent)
            .format('H:mm:ss')}</td>
      <td className="dataCell">{action}</td>
      <td className="dataCell">{JSON.stringify(advAction)}</td>
    </tr>
  );
}
