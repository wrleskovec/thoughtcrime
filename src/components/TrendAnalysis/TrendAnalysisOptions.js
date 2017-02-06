import React from 'react';
import DatePicker from '~/components/TrendAnalysis/DatePicker';
import SearchSiteSelect from '~/components/TrendAnalysis/SearchSiteSelect';
import SelectedSites from '~/components/TrendAnalysis/SelectedSites';
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
      const truncatedSites = this.filterChartData(this.sortProps(sites), n);
      updateSelectedSites(truncatedSites);
    }
  }
  componentWillReceiveProps(nextProps) {
    const { sites } = nextProps;
    const { n, updateSelectedSites } = this.props;
    if (sites && sites[0]) {
      if (!this.props.sites || !this.props.sites[0]) {
        const truncatedSites = this.filterChartData(this.sortProps(sites), n);
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
    const newSelectedSites = selectedSites.filter(record => record.site !== site);
    updateSelectedSites(newSelectedSites);
  }
  handleAddSite(selectedSite) {
    const { n, selectedSites, updateSelectedSites, searchResults } = this.props;
    if (selectedSites.length < n) {
      const newSelectedSites = selectedSites.slice();
      const record = searchResults.find(site => site.site === selectedSite);
      newSelectedSites.push(record);
      updateSelectedSites(newSelectedSites);
    } else {
      this.setState({ error: `Max ${n} Sites` });
    }
  }
  handleOnChange(value) {
    const { statisticsSearchRecords } = this.props;
    statisticsSearchRecords(value);
  }
  handleStartDateChange(date) {
    const { setStartDate } = this.props;
    setStartDate(date);
  }
  handleEndDateChange(date) {
    const { setEndDate } = this.props;
    setEndDate(date);
  }
  render() {
    const { startDate, endDate, selectedSites, searchResults } = this.props;
    console.log(this.props);
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
