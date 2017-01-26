import React from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';


const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
};

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveCard(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};
@DropTarget('card', cardTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource('card', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class ActionRow extends React.Component {
  static propTypes = {
    connectDragSource: React.PropTypes.func.isRequired,
    connectDropTarget: React.PropTypes.func.isRequired,
    index: React.PropTypes.number.isRequired,
    isDragging: React.PropTypes.bool.isRequired,
    id: React.PropTypes.any.isRequired,
    action: React.PropTypes.string.isRequired,
    regex: React.PropTypes.string.isRequired,
    moveCard: React.PropTypes.func.isRequired,
    handleAdvRegex: React.PropTypes.func.isRequired,
    handleAdvDelete: React.PropTypes.func.isRequired,
    handleAdvSelect: React.PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.handleRegex = this.handleRegex.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleRegex(e) {
    const { handleAdvRegex, id } = this.props;
    const value = e.target.textContent.trim();
    handleAdvRegex(id, value);
  }
  handleSelect(e) {
    const { handleAdvSelect, id } = this.props;
    const selected = e.target.value;
    handleAdvSelect(id, selected);
  }
  handleDelete() {
    const { handleAdvDelete, id } = this.props;
    handleAdvDelete(id);
  }
  render() {
    const { regex, isDragging, connectDragSource, connectDropTarget, id, action } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(connectDropTarget(
      <div id={`pattern${id}`} className="row-fluid" style={{ ...style, opacity }}>
        <div className="regexPattern col-md-9" onKeyUp={this.handleRegex} contentEditable>
          {regex}
        </div>
        <div className="editModal">
          <div className="btn-group" role="group">
            <select className="btn btn-default btn-sm" onChange={this.handleSelect}>
              <option value="accept" selected={action === 'accept'}>Accept</option>
              <option value="block" selected={action === 'block'}>Block</option>
              <option value="limit" selected={action === 'limit'}>Limit</option>
            </select>
            <button
              type="button" className="btn btn-danger btn-sm remove" onClick={this.handleDelete}
            >
              <span className="glyphicon glyphicon-remove"></span>
            </button>
          </div>
        </div>
      </div>
    ));
  }
}
