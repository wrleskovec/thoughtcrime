import React from 'react';
import { connect } from 'react-redux';
import { getBlockedUrl, setBlockedUrl } from '~/actions/options';
import BL from '~/blockList';

class MiscSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockedUrl: props.blockedUrl || ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleSaveChanges = this.handleSaveChanges.bind(this);
    this.exportDatabase = this.exportDatabase.bind(this);
  }
  componentWillMount() {
    const { getBlockedUrl } = this.props;
    getBlockedUrl();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.blockedUrl !== this.props.blockedUrl) {
      this.setState({ blockedUrl: nextProps.blockedUrl });
    }
  }
  onChange(e) {
    this.setState({ blockedUrl: e.target.value });
  }
  exportDatabase() {
    BL.exportDatabase().then(database => {
      const jsonObj = encodeURIComponent(JSON.stringify(database));
      const link = document.createElement('a');
      link.download = 'thoughtcrime.json';
      link.href = `data:text/json;charset=utf-8,${jsonObj}`;
      link.click();
    });
  }
  handleSaveChanges() {
    const { setBlockedUrl } = this.props;
    const { blockedUrl } = this.state;
    setBlockedUrl(blockedUrl);
  }
  render() {
    const { blockedUrl } = this.state;
    console.log(blockedUrl);
    return (
      <div className="col-md-10" id="MiscSettings">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Set Filter Page</h3>
          </div>
          <div className="panel-body">
            <p>This is the URL that will be loaded if a page is blocked by extension. Cannot be a
              local file.
            </p>
            <div className="row">
              <div className="col-md-12">
                <div className="input-group">
                  <label htmlFor="urlInput">Filter Url: </label>
                  <input
                    type="text" className="form-control" id="urlInput"
                    value={blockedUrl || ''} onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <button
                  type="button" className="btn btn-primary pull-left"
                  onClick={this.handleSaveChanges}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>

        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Import Export Data</h3>
          </div>
          <div className="panel-body">
            <p>
              Here you can import and export ThoughCrime data. When you import previous data you
              will be overwriting existing data where there are conflicts. So it's similar to a
               merge.
            </p>
            <div className="row">
              <div className="col-md-12">
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <button
                  type="button" className="btn btn-success pull-center"
                  onClick={this.exportDatabase}
                >
                  Export Data
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    blockedUrl: state.blockedUrl
  }),
  dispatch => ({
    getBlockedUrl: () => dispatch(getBlockedUrl()),
    setBlockedUrl: url => dispatch(setBlockedUrl(url))
  })
)(MiscSettings);
