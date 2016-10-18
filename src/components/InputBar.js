import React from 'react';

export default function InputBar(props) {
  return (
    <div id="InputBar">
      <form onSubmit={props.onSubmitPattern}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            name="patternInput" ref="patternInput" value={props.currentValue || ''}
          />
          <span className="input-group-btn">
            <input type="submit" className="btn btn-default" value="Add" />
          </span>

        </div>

      </form>
      <div className="alert alert-warning" role="alert">
      </div>
    </div>
  );
}
