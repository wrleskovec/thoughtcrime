import React from 'react';

export default function PatternList({ patterns }) {
  let count = 0;
  return (
    <ul className="list-group">
      {patterns.map(p => (
        <li className="list-group-item" key={count++}>{p}</li>
      ))}
    </ul>
  );
}
