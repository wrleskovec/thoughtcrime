import React from 'react';
import { connect } from 'react-redux';
import { editRecord, openModal, sortSites } from '../../actions/options.js';
import { fetchSites, } from '../../actions/common.js';
import SearchSiteDB from '../../components/SearchSiteDB.js';
import SearchRecordsBox from '../../components/SearchRecordsBox';

class Filtering extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('React is bullshit');
    this.props.fetchSites();
  }

  render() {
    console.log(this.props.sortedSites);
    const loaded = this.props.sortedSites[0] != null;
    return (
      <div className="col-md-10 panel panel-default">
        <div className="panel-heading">Lookup Record</div>
        <div className="panel-body">
          <SearchRecordsBox sortSites={this.props.sortSites} />
        </div>
        {loaded && <SearchSiteDB openModal={openModal} sites={this.props.sortedSites} />}
      </div>
    );
  }
}

export default connect(
  state => (
    {
      sites: state.sites,
      sortedSites: state.sortedSites,
      message: state.message
    }
  ),
  dispatch => (
    {
      fetchSites: () => dispatch(fetchSites()),
      sortSites: filter => dispatch(sortSites(filter)),
      editRecord: record => dispatch(editRecord(record)),
      openModal: modalID => dispatch(openModal(modalID))
    }
  )
)(Filtering);
