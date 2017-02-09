import React from 'react';

export default class SelectedSites extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { selectedSites, removeSite } = this.props;
    return (
      <div className="col-md-6">
        <div className="input-group selected-sites">
          {selectedSites.map(site => (
            <div className="checkbox">
              <label>
                <input
                  key={`selectedSite-${site}`} defaultChecked type="checkbox"
                  onChange={() => removeSite(site)}
                />
                {site}
              </label>
            </div>

          ))}
        </div>

      </div>
    );
  }
}
