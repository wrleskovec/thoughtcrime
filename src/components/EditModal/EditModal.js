import React from 'react';
import update from 'react/lib/update';
import ActionRow from './ActionRow.js';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import _ from 'lodash';

const style = {
  width: 550
};

@DragDropContext(HTML5Backend)
export default class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advAction: props.advAction,
      action: props.action,
      cards: [{
        id: 1,
        text: 'Write a cool JS library'
      }, {
        id: 2,
        text: 'Make it generic enough'
      }, {
        id: 3,
        text: 'Write README'
      }, {
        id: 4,
        text: 'Create some examples'
      }, {
        id: 5,
        text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)'
      }, {
        id: 6,
        text: '???'
      }, {
        id: 7,
        text: 'PROFIT'
      }]
    };
    this.moveCard = this.moveCard.bind(this);
    this.handleAdvText = this.handleAdvText.bind(this);
  }
  componentWillMount() {
    this.handleAdvText = _.debounce(this.handleAdvText, 500);
  }
  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState(update(this.state, {
      cards: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      }
    }));
  }
  handleAdvText(id, value) {
    console.log(id);
    const index = this.state.cards.findIndex(i => i.id === id);
    console.log(index);
    this.setState({
      cards: update(this.state.cards, { [index]: { text: { $set: value } } })
    });
  }

  render() {
    const { site } = this.props;
    const { action, advAction, cards } = this.state;
    console.log(cards);
    return (
      <div
        className="modal fade" id="myModal"
        tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <span className="glyphicon glyphicon-remove"></span>
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
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="advActionRow">AdvFilter(regex):</label>
                    <div id="advActionRow" style={style}>
                      {cards.map((card, i) => (
                        <ActionRow
                          key={card.id} index={i} id={card.id}
                          text={card.text} moveCard={this.moveCard}
                          handleAdvText={this.handleAdvText}
                        />
                      )
                      )}
                    </div>
                  </div>
                </div>
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
