import React from 'react';

export default class EditModalRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: props.action
    };
  }
  render() {
    const { id, pattern } = this.props;
    const { action } = this.state;
    const dropDownOptions = ['accept', 'block', 'limit'];
    const actionIndex = dropDownOptions.indexOf(action);
    dropDownOptions.splice(actionIndex, 1);
    console.log(action);
    return (
      <tr id={`pattern${id}`}>
        <td className="regexPattern" contentEditable>{pattern}</td>
        <td className="editModal">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default btn-sm">
              <span className="glyphicon glyphicon-menu-up"></span>
            </button>
            <button type="button" className="btn btn-default btn-sm">
              <span className="glyphicon glyphicon-menu-down"></span>
            </button>
            <select className="btn btn-default btn-sm" name="advAction">
              <option value="accept">Accept</option>
              <option value="block">Block</option>
              <option value="limit">Limit</option>
            </select>
            <button type="button" className="btn btn-danger btn-sm">
              <span className="glyphicon glyphicon-remove"></span>
            </button>
          </div>
        </td>
      </tr>
    );
  }

}
