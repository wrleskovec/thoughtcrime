import { DragDropManager } from 'dnd-core';
import HTML5Backend from 'react-dnd-html5-backend';
import React from 'react';

let defaultManager;

function getDNDContext() {
  if (defaultManager) return defaultManager;
  defaultManager = new DragDropManager(HTML5Backend);
  return defaultManager;
}

export default class DNDWrapper extends React.Component {
  static childContextTypes = {
    dragDropManager: React.PropTypes.object.isRequired
  };
  getChildContext() {
    return {
      dragDropManager: getDNDContext()
    };
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
