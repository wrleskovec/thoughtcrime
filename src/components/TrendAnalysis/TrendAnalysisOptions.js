import React from 'react';
import DatePicker from '~/components/TrendAnalysis/DatePicker';
import SearchSiteSelect from '~/components/TrendAnalysis/SearchSiteSelect';
import SelectedSites from '~/components/TrendAnalysis/SelectedSites';
import moment from 'moment';
import { connect } from 'react-redux';
import { updateSelectedSites, setEndDate, setStartDate, statisticsSearchRecords }
from '~/actions/options';
import { fetchSites } from '~/actions/common.js';

class TrendAnalysisOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
    this.handleAddSite = this.handleAddSite.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.removeSite = this.removeSite.bind(this);
  }
  componentWillMount() {
    const { sites, fetchSites, n, updateSelectedSites } = this.props;
    if (!sites || !sites[0]) {
      fetchSites();
    } else {
      const truncatedSites = this.filterChartData(this.sortProps(sites), n).map(site => site.site);
      updateSelectedSites(truncatedSites);
    }
  }
  componentWillReceiveProps(nextProps) {
    const { sites } = nextProps;
    const { n, updateSelectedSites } = this.props;
    this.setState({ error: '' });
    if (sites && sites[0]) {
      if (!this.props.sites || !this.props.sites[0]) {
        const truncatedSites = this.filterChartData(this.sortProps(sites), n)
          .map(site => site.site);
        updateSelectedSites(truncatedSites);
      }
    }
  }
  filterChartData(sites, n) {
    if (sites && sites[0]) {
      const numOfSites = (sites.length > n) ? n : sites.length;
      const topSites = this.sortProps(sites).slice(0, numOfSites);
      return topSites;
    }
    return [];
  }
  sortProps(sites) {
    return sites.sort((a, b) => {
      if (a.timeSpent < b.timeSpent) {
        return 1;
      }
      if (a.timeSpent > b.timeSpent) {
        return -1;
      }
      return 0;
    });
  }
  removeSite(site) {
    const { selectedSites, updateSelectedSites } = this.props;
    const newSelectedSites = selectedSites.filter(record => record !== site);
    updateSelectedSites(newSelectedSites);
  }
  handleAddSite(selectedSite) {
    const { selectedSites, updateSelectedSites, searchResults } = this.props;
    if (this.validateSite(selectedSite)) {
      const newSelectedSites = selectedSites.slice();
      const record = searchResults.find(site => site === selectedSite);
      newSelectedSites.push(record);
      updateSelectedSites(newSelectedSites);
    }
  }
  validateSite(selectedSite) {
    const { n, selectedSites } = this.props;
    if (selectedSites.length >= n) {
      this.setState({ error: `Max ${n} Sites` });
      return false;
    } else if (selectedSites.indexOf(selectedSite) > -1) {
      this.setState({ error: 'Already selected.' });
      return false;
    }
    return true;
  }
  handleOnChange(value) {
    const { statisticsSearchRecords } = this.props;
    statisticsSearchRecords(value);
  }
  handleStartDateChange(date) {
    const { setStartDate } = this.props;
    if (this.validateStartDate(date)) {
      setStartDate(date);
    } else {
      this.setState({ error: 'Invalid Start Date' });
    }
  }
  handleEndDateChange(date) {
    const { setEndDate } = this.props;
    if (this.validateEndDate(date)) {
      setEndDate(date);
    } else {
      this.setState({ error: 'Invalid End Date' });
    }
  }
  validateStartDate(startDate) {
    const { endDate } = this.props;
    return startDate.isSameOrBefore(endDate);
  }
  validateEndDate(endDate) {
    const { startDate } = this.props;
    return endDate.isSameOrBefore(moment()) && endDate.isSameOrAfter(startDate);
  }
  render() {
    const { startDate, endDate, selectedSites, searchResults } = this.props;
    const { error } = this.state;
    const showError = error ? 'block' : 'none';
    return (
      <div id="TrendAnalysisOptions" className="row">
        <div className="col-md-10">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                Custom Chart Options
              </h3>
            </div>
            <div className="panel-body">
              <div className="row">
                <DatePicker
                  handleEndDateChange={this.handleEndDateChange} endDate={endDate}
                  handleStartDateChange={this.handleStartDateChange} startDate={startDate}
                />
                <SearchSiteSelect
                  handleOnChange={this.handleOnChange} searchResults={searchResults}
                  handleAddSite={this.handleAddSite}
                />
              </div>
              <div className="row">
                <SelectedSites selectedSites={selectedSites} removeSite={this.removeSite} />
                <div className="col-md-4">
                  <div className="alert alert-danger" role="alert" style={{ display: showError }}>
                    <span className="glyphicon glyphicon-exclamation-sign"></span>
                    <span className="sr-only">Error:</span>
                    {error}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  state => (
    {
      sites: state.sites,
      ...state.Statistics
    }
  ),
  dispatch => (
    {
      setEndDate: date => dispatch(setEndDate(date)),
      setStartDate: date => dispatch(setStartDate(date)),
      updateSelectedSites: newSites => dispatch(updateSelectedSites(newSites)),
      statisticsSearchRecords: filter => dispatch(statisticsSearchRecords(filter)),
      fetchSites: () => dispatch(fetchSites())
    }
  )
)(TrendAnalysisOptions);
