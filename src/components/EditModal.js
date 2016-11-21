import React from 'react';

export default class EditModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { site, action, advAction, modalClicked } = this.props;
    const showStatus = { display: 'none' };
    if (modalClicked) showStatus.display = 'block';
    console.log(showStatus);
    return (
      <div
        className="modal fade" id="myModal" style={showStatus}
        tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">Domain options: {site}</h4>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
