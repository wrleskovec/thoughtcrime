import React from 'react';
import { connect } from 'react-redux';
import { fetchModalRecord } from '~/actions/options';
import TrendAnalysisOptions from '~/components/TrendAnalysisOptions';
import searchSites from '~/helpers/searchSites';

class TrendAnalysis extends React.Component {
  constructor(props) {
    super(props);
    const { sites, n } = props;
    this.state = {
      selectedSites: this.filterChartData(sites, n),
      dropDownSites: [],
      error: ''
    };
    this.handleAddSite = this.handleAddSite.bind(this);
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
  handleAddSite(selectedSite) {
    const { selectedSites } = this.state;
    const { sites, n } = this.props;
    if (selectedSites.length < n) {
      if (sites.find(site => site === selectedSite)) {
        const newSelectedSites = selectedSites.slice();
        newSelectedSites.push(selectedSite);
        this.setState({ selectedSites: newSelectedSites });
      } else {
        this.setState({ error: 'Not a valid site' });
      }
    } else {
      this.setState({ error: `Max ${n} Sites` });
    }
  }
  render() {
    const { selectedSites } = this.state;
    return (
      <div id="TotalStatistics">
        <TrendAnalysisOptions selectedSites={selectedSites} addSite={this.handleAddSite} />
        <div className="row" height="400px">
          <div className="col-md-10">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Time Spent Today
                </h3>
              </div>
              <div className="panel-body">
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
      sites: state.sites
    }
  ),
  dispatch => (
    {
      fetchModalRecord: site => dispatch(fetchModalRecord(site))
    }
  )
)(TrendAnalysis);
