import React from 'react';
import EditModalRow from './EditModalRow';

export default class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advAction: props.advAction,
      action: props.action
    };
  }

  render() {
    console.log(this.props);
    const { site } = this.props;
    const { action, advAction } = this.state;
    return (
      <div
        className="modal fade" id="myModal"
        tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">X</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">Domain options: {site}</h4>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="action">Filter: </label>
                    <select className="form-control" id="action">
                      <option value="block" selected={action === 'block'}>Block</option>
                      <option value="limit" selected={action === 'limit'}>Limit</option>
                      <option value="accept" selected={action === 'accept'}>Accept</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <table className="table table-striped table-bordered">
                  <thead className="thead-inverse">
                    <tr>
                      <th>Advanced Filtering(Regex)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <EditModalRow id={1} pattern={'manga'} action={'block'} />
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger">Delete</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
