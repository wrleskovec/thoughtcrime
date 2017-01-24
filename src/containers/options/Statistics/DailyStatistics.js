import React from 'react';
import { connect } from 'react-redux';
import { fetchDailySites } from '~/actions/options.js';
import { VictoryPie, VictoryTheme } from 'victory';

class DailyStatistics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-10 panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Add Pattern</h3>
          </div>
          <div className="panel-body">
            <div className="svg-chart-container">
              <VictoryPie
                style={{ parent: { paddingLeft: '30px' } }}
                theme={VictoryTheme.material}
                data={[
                  { month: 'September', profit: 35000, loss: 2000 },
                  { month: 'October', profit: 42000, loss: 8000 },
                  { month: 'November', profit: 55000, loss: 5000 }
                ]}
                x="month"
                y={(datum) => datum.profit - datum.loss}
              />
            </div>

          </div>
        </div>
        <div className="col-md-7 panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Add Pattern</h3>
          </div>
          <div className="panel-body">
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
      message: state.message
    }
  ),
  dispatch => (
    {
      fetchDailySites: () => dispatch(fetchDailySites())
    }
  )
)(DailyStatistics);
