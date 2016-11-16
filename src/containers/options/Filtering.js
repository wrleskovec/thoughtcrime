import React from 'react';
import { connect } from 'react-redux';
import { editRecord, openModal } from '../../actions/options.js';
import { fetchSites } from '../../actions/common.js';
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
    console.log(this.props.sites);
    const loaded = this.props.sites[0] != null;
    return (
      <div className="col-md-10 panel panel-default">
        <div className="panel-heading">Lookup Record</div>
        <div className="panel-body">
          <SearchRecordsBox />
        </div>
        {loaded && <SearchSiteDB openModal={openModal} sites={this.props.sites} />}
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
