import React from 'react';

export default function PatternList({ sites }) {
  let count = 0;
  console.log(sites);
  return (
    <ul className="list-group">
      {sites.map(p => (
        <li className="list-group-item" key={count++}>{p.site}</li>
      ))}
    </ul>
  );
}
