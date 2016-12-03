import React from 'react';
import update from 'react/lib/update';
import { connect } from 'react-redux';
import ActionRow from '~/components/ActionRow.js';
import { saveChangesRegex } from '~/actions/options';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import _ from 'lodash';

const style = {
  width: 550
};

@DragDropContext(HTML5Backend)
class PatternFilter extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      cards: props.patterns || []
    };
    this.moveCard = this.moveCard.bind(this);
    this.handleAdvRegex = this.handleAdvRegex.bind(this);
    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleAdvDelete = this.handleAdvDelete.bind(this);
    this.handleAdvSelect = this.handleAdvSelect.bind(this);
    this.handleSaveChanges = this.handleSaveChanges.bind(this);
  }
  componentWillMount() {
    this.handleAdvRegex = _.debounce(this.handleAdvRegex, 500);
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
  handleAdvRegex(id, value) {
    const index = this.state.cards.findIndex(i => i.id === id);
    this.setState({
      cards: update(this.state.cards, { [index]: { regex: { $set: value } } })
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
        regex: card.regex
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
        regex: ''
      }] })
    });
  }
  handleSaveChanges() {
    const { saveChangesRegex } = this.props;
    const { cards } = this.state;
    saveChangesRegex(cards);
  }
  render() {
    const { cards } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="advActionRow">AdvFilter(regex):</label>
              <div id="advActionRow" style={style}>
                {cards.map((card, i) => (
                  <ActionRow
                    key={card.id} index={i} id={card.id}
                    regex={card.regex} action={card.action} moveCard={this.moveCard}
                    handleAdvRegex={this.handleAdvRegex}
                    handleAdvDelete={this.handleAdvDelete}
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
    );
  }
}

export default connect(
  state => ({
    patterns: state.Filtering.patterns
  }),
  dispatch => ({
    saveChangesRegex: items => dispatch(saveChangesRegex(items))
  })
)(PatternFilter);
