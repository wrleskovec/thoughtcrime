import React from 'react';
import { connect } from 'react-redux';
import { editRecord, openModal } from '../../actions/options.js';
import { fetchSites } from '../../actions/common.js';
import SearchSiteDB from '../../components/SearchSiteDB.js';

class Filtering extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    fetchSites();
  }

  render() {
    return (
      <div className="col-md-10 panel panel-default">
        <div className="panel-heading">Lookup Record</div>
        <div className="panel-body">SearchBox goes HERE</div>
        <SearchSiteDB openModal={openModal} sites={this.props.sites || []} />
      </div>
    );
  }
}

export default connect(
  state => (
    {
      sites: state.sites,
      message: state.message
    }
  ),
  dispatch => (
    {
      fetchSites: () => dispatch(fetchSites()),
      editRecord: record => dispatch(editRecord(record)),
      openModal: modalID => dispatch(openModal(modalID))
    }
  )
)(Filtering);
