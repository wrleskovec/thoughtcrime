import React from 'react';
import { connect } from 'react-redux';
import { openModal, searchSites, sortSites, deleteSite, saveChangesModal }
  from '~/actions/options.js';
import { fetchSites, } from '~/actions/common.js';
import SearchSiteDB from '~/components/SearchSiteDB.js';
import SearchRecordsBox from '~/components/SearchRecordsBox';
import EditModal from '~/components/EditModal';

class Filtering extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchSites();
  }

  render() {
    const { modalObj, searchedSites, sortBy, order } = this.props;
    const { sortSites, searchSites, openModal, deleteSite, saveChangesModal } = this.props;
    const loaded = searchedSites[0] != null;
    const modalClicked = modalObj !== null;
    return (
      <div className="col-md-10">
        <div className="panel panel-default">
          <EditModal site={modalObj} deleteSite={deleteSite} saveChangesModal={saveChangesModal} />
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
      </div>
    );
  }
}

export default connect(
  state => (
    {
      sites: state.sites,
      searchedSites: state.Filtering.searchedSites,
      modalObj: state.Filtering.modalObj,
      sortBy: state.Filtering.sortBy,
      order: state.Filtering.order
    }
  ),
  dispatch => (
    {
      fetchSites: () => dispatch(fetchSites(true)),
      searchSites: filter => dispatch(searchSites(filter)),
      openModal: modalObj => dispatch(openModal(modalObj)),
      sortSites: sortBy => dispatch(sortSites(sortBy)),
      deleteSite: site => dispatch(deleteSite(site)),
      saveChangesModal: site => dispatch(saveChangesModal(site))
    }
  )
)(Filtering);
