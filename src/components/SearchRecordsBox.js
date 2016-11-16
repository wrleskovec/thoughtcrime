import React from 'react';

export default function SearchRecordsBox(props) {
  return (
    <div id="SearchRecordsBox" className="input-group">
      <input type="text" className="form-control" placeholder="Search for Records" />
      <span className="input-group-btn">
        <button className="btn btn-default" type="button">Search</button>
      </span>
    </div>
  );
}
