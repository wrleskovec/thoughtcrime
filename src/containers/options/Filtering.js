import React from 'react';
import { connect } from 'react-redux';
import { editRecord, openModal, searchSites } from '../../actions/options.js';
import { fetchSites, } from '../../actions/common.js';
import SearchSiteDB from '../../components/SearchSiteDB.js';
import SearchRecordsBox from '../../components/SearchRecordsBox';
import EditModal from '../../components/EditModal';

class Filtering extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('React is bullshit');
    this.props.fetchSites();
  }

  render() {
    console.log(this.props.searchedSites);
    console.log(this.props.modalObj);
    const loaded = this.props.searchedSites[0] != null;
    const modalClicked = this.props.modalObj !== null;
    if (modalClicked) $('#myModal').modal('show');
    return (
      <div className="col-md-10 panel panel-default">
        {modalClicked && <EditModal {...this.props.modalObj} />}
        <div className="panel-heading">Lookup Record</div>
        <div className="panel-body">
          <SearchRecordsBox searchSites={this.props.searchSites} />
        </div>
        {loaded && <SearchSiteDB openModal={this.props.openModal} sites={this.props.searchedSites} />}
      </div>
    );
  }
}

export default connect(
  state => (
    {
      sites: state.Filtering.sites,
      searchedSites: state.Filtering.searchedSites,
      message: state.Filtering.message,
      modalObj: state.Filtering.modalObj
    }
  ),
  dispatch => (
    {
      fetchSites: () => dispatch(fetchSites()),
      searchSites: filter => dispatch(searchSites(filter)),
      editRecord: record => dispatch(editRecord(record)),
      openModal: modalObj => dispatch(openModal(modalObj))
    }
  )
)(Filtering);
