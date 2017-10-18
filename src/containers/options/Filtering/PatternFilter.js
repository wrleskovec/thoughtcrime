import React from 'react';
import update from 'react/lib/update';
import { connect } from 'react-redux';
import ActionRow from '~/components/ActionRow.js';
import { saveChangesRegex, fetchPatterns } from '~/actions/options';
import DNDWrapper from '~/helpers/DNDWrapper';
import _ from 'lodash';

const style = {
  width: 800
};

class PatternFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.patterns || []
    };
    this.moveCard = this.moveCard.bind(this);
    this.handleAdvRegex = _.debounce(this.handleAdvRegex.bind(this), 500);
    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleAdvDelete = this.handleAdvDelete.bind(this);
    this.handleAdvSelect = this.handleAdvSelect.bind(this);
    this.handleSaveChanges = this.handleSaveChanges.bind(this);
  }
  componentWillMount() {
    const { fetchPatterns } = this.props;
    fetchPatterns();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ cards: nextProps.patterns });
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { cards } = this.state;
    if (cards === nextState.cards) return false;
    return true;
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
    this.setState((prevState) => {
      const { cards } = prevState;
      const index = cards.findIndex(i => i.id === id);
      cards[index].regex = value;
      return prevState;
    });
  }
  handleAdvSelect(id, selected) {
    this.setState((prevState) => {
      const { cards } = prevState;
      const index = cards.findIndex(i => i.id === id);
      cards[index].action = selected;
      return prevState;
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
    this.setState({
      cards: newCards
    });
  }
  handleAddCard() {
    const { cards } = this.state;
    this.setState({
      cards: update(cards, { $push: [{
        id: cards.length + 1,
        action: 'limit',
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
      <div className="col-md-10" id="pattern-sorter">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Pattern Drag and Drop</h3>
          </div>
          <div className="panel-body">
            <p>Drag and drop the patterns into the desired order of precedence.</p>
            <div className="col-md-12">
              <div className="form-group">
                <div id="PatternDND" style={style}>
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
              <button
                type="button" className="btn btn-primary pull-right"
                onClick={this.handleSaveChanges}
              >
                Save Changes
              </button>
            </div>
          </div>
          <div className="panel-footer">
          </div>
        </div>
      </div>

    );
  }
}

const PatternFilterConnect = connect(
  state => ({
    patterns: state.patterns
  }),
  dispatch => ({
    saveChangesRegex: items => dispatch(saveChangesRegex(items)),
    fetchPatterns: () => dispatch(fetchPatterns())
  })
)(PatternFilter);

export default function PatternFilterContainer(props) {
  return (
    <DNDWrapper>
      <PatternFilterConnect {...props} />
    </DNDWrapper>
  );
}
