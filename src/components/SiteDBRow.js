import React from 'react';
import moment from 'moment';
import 'moment-duration-format';

export default function SiteDBRow(props) {
  // utilize id that corresponds to index of element in state
  const { id, record, openModal, offset } = props;
  const onClickEdit = record => e => {
    openModal(record);
  };
  const advAction = (record.advAction.length === 0) ? 'N/A' : '...';
  return (
    <tr className="dataRow" id={`datarow-${id + offset}`} key={id + offset} >
      <th scope="row">{id + offset + 1}</th>
      <td className="dataCell">{record.site}</td>
      <td className="dataCell">{record.visits}</td>
      <td className="dataCell">
        {moment.duration(record.timeSpent, 'seconds').format('hh:mm', { trim: false })}
      </td>
      <td className="dataCell">{record.action}</td>
      <td className="dataCell">{advAction}</td>
      <td className="editModal">
        <button
          type="button" className="btn btn-default"
          data-toggle="modal" data-target="#myModal" onClick={onClickEdit(record)}
        >
          <span className="glyphicon glyphicon-pencil"></span>
        </button>
      </td>
    </tr>
  );
}
