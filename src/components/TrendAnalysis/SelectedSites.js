import React from 'react';

export default class SelectedSites extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { selectedSites, removeSite } = this.props;
    return (
      <div className="col-md-6">
        <div className="input-group">
          {selectedSites.map(site => (
            <div className="checkbox">
              <label>
                <input
                  key={`selectedSite-${site.site}`} defaultChecked type="checkbox"
                  onChange={() => removeSite(site.site)}
                />
                {site.site}
              </label>
            </div>

          ))}
        </div>

      </div>
    );
  }
}
