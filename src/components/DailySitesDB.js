import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment-duration-format';
import { fetchDailySiteRecords } from '~/actions/options.js';

class DailySitesDB extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { fetchDailySiteRecords } = this.props;
    fetchDailySiteRecords();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    console.log(this.props.dailySiteRecords);
    return (
      <div></div>
    );
  }
}

export default connect(
  state => (
    {
      dailySiteRecords: state.Statistics.dailySiteRecords
    }
  ),
  dispatch => (
    {
      fetchDailySiteRecords: () => dispatch(fetchDailySiteRecords())
    }
  )
)(DailySitesDB);
