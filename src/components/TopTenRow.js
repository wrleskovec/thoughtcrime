import React from 'react';
import moment from 'moment';

export default function SiteDBRow(props) {
  // utilize id that corresponds to index of element in state
  const { id, record } = props;
  console.log(record.timeSpent);

  return (
    <tr className="dataRow" id={`tenrow-${id + 1}`} key={id + 1} >
      <th scope="row">{id + 1}</th>
      <td className="dataCell">{record.site}</td>
      <td className="dataCell">{record.visits}</td>
      <td className="dataCell">{moment('2015-01-01').startOf('day')
            .seconds(record.timeSpent)
            .format('H:mm:ss')}</td>
    </tr>
  );
}
