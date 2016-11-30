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
    console.log(props);
    if (props.site != null) {
      this.state = {
        action: props.site.action || '',
        cards: props.site.advAction || []
      };
    } else {
      this.state = {
        action: '',
        cards: []
      };
    }
    this.moveCard = this.moveCard.bind(this);
    this.handleAdvText = this.handleAdvText.bind(this);
    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleAdvDelete = this.handleAdvDelete.bind(this);
    this.handleAdvSelect = this.handleAdvSelect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSaveChanges = this.handleSaveChanges.bind(this);
  }
  componentWillMount() {
    this.handleAdvText = _.debounce(this.handleAdvText, 500);
  }
  componentWillReceiveProps(nextProps) {
    console.log('Prop change detected');
    if (nextProps.site) {
      this.setState({
        action: nextProps.site.action,
        cards: nextProps.site.advAction
      });
    }
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
  prepCards(cards) {
    return cards.map((card, index) => (
      { id: index, text: card.text, action: card.action }
    ));
  }
  handleAdvText(id, value) {
    const index = this.state.cards.findIndex(i => i.id === id);
    this.setState({
      cards: update(this.state.cards, { [index]: { text: { $set: value } } })
    });
  }
  handleAdvSelect(id, selected) {
    console.log(selected);
    const index = this.state.cards.findIndex(i => i.id === id);
    this.setState({
      cards: update(this.state.cards, { [index]: { action: { $set: selected } } })
    });
  }
  handleAdvDelete(id) {
    const { cards } = this.state;
    const newCards = cards.filter(card => card.id !== id)
      .map((card, index) => ({
        id: index + 1,
        action: card.action,
        text: card.text
      }));
    console.log(newCards);
    this.setState({
      cards: newCards
    });
  }
  handleAddCard() {
    const { cards } = this.state;
    this.setState({
      cards: update(cards, { $push: [{
        id: cards.length + 1,
        action: 'accept',
        text: ''
      }] })
    });
  }
  handleDelete() {
    const { site, deleteSite } = this.props;
    deleteSite(site.site);
  }
  handleSaveChanges() {
    const { site, saveChangesModal } = this.props;
    const { action, cards } = this.state;
    saveChangesModal(update(site, {
      action: { $set: action },
      advAction: { $set: cards }
    }));
  }
  render() {
    const { site } = this.props;
    const { action, cards } = this.state;
    const siteName = site ? site.site : '';
    console.log('Rendered EditModal Component');
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
              <h4 className="modal-title" id="myModalLabel">Domain options: {siteName}</h4>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="action">Filter: </label>
                    <select className="form-control" id="action" value={action}>
                      <option value="block">Block</option>
                      <option value="limit">Limit</option>
                      <option value="accept">Accept</option>
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
                          text={card.text} action={card.action} moveCard={this.moveCard}
                          handleAdvText={this.handleAdvText} handleAdvDelete={this.handleAdvDelete}
                          handleAdvSelect={this.handleAdvSelect}
                        />
                      )
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button type="button" className="btn btn-default" onClick={this.handleAddCard}>
                    <span className="glyphicon glyphicon-plus"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">
                Close
              </button>
              <button
                type="button" className="btn btn-danger"
                onClick={this.handleDelete} data-dismiss="modal"
              >
                Delete
              </button>
              <button
                type="button" className="btn btn-primary"
                data-dismiss="modal" onClick={this.handleSaveChanges}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
