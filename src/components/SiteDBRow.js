import React from 'react';
import moment from 'moment';

export default function SiteDBRow(props) {
  // utilize id that corresponds to index of element in state
  const { id, record, openModal, offset } = props;
  const onClickEdit = record => e => {
    console.log(record);
    openModal(record);
  };
  return (
    <tr className="dataRow" id={`datarow-${id + offset}`} key={id + offset} >
      <th scope="row">{id + offset + 1}</th>
      <td className="dataCell">{record.site}</td>
      <td className="dataCell">{record.visits}</td>
      <td className="dataCell">{moment('2015-01-01').startOf('day')
            .seconds(record.timeSpent)
            .format('H:mm:ss')}</td>
      <td className="dataCell">{record.action}</td>
      <td className="dataCell">{JSON.stringify(record.advAction)}</td>
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
