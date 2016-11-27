import React from 'react';
import { connect } from 'react-redux';
import { editRecord, openModal, searchSites, sortSites } from '../../actions/options.js';
import { fetchSites, } from '../../actions/common.js';
import SearchSiteDB from '../../components/SearchSiteDB.js';
import SearchRecordsBox from '../../components/SearchRecordsBox';
import EditModal from '../../components/EditModal/EditModal';

class Filtering extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('React is bullshit');
    this.props.fetchSites();
  }

  render() {
    const { modalObj, searchedSites, sortBy, order } = this.props;
    const { sortSites, searchSites, openModal } = this.props;
    const loaded = searchedSites[0] != null;
    console.log(modalObj);
    const modalClicked = modalObj !== null;
    console.log(modalClicked);
    return (
      <div className="col-md-10 panel panel-default">
        <EditModal {...modalObj} />
        <div className="panel-heading">Lookup Record</div>
        <div className="panel-body">
          <SearchRecordsBox searchSites={searchSites} />
        </div>
        {loaded &&
          <SearchSiteDB
            openModal={openModal} sortBy={sortBy} order={order}
            sortSites={sortSites} sites={searchedSites}
          />
        }
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
      modalObj: state.Filtering.modalObj,
      sortBy: state.Filtering.sortBy,
      order: state.Filtering.order
    }
  ),
  dispatch => (
    {
      fetchSites: () => dispatch(fetchSites()),
      searchSites: filter => dispatch(searchSites(filter)),
      editRecord: record => dispatch(editRecord(record)),
      openModal: modalObj => dispatch(openModal(modalObj)),
      sortSites: sortBy => dispatch(sortSites(sortBy))
    }
  )
)(Filtering);
