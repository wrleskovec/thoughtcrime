import Dash from './Dash';
import DomainFilter from './Filtering/DomainFilter';
import PatternFilter from './Filtering/PatternFilter';
import ScheduleSettings from './Settings/Scheduling';
import DailyStatistics from './Statistics/DailyStatistics';
import TotalStatistics from './Statistics/TotalStatistics';
import TrendAnalysis from './Statistics/TrendAnalysis';

const structure = [
  {
    title: 'Dash',
    items: null
  },
  {
    title: 'Filtering',
    items: ['Filter by Domain', 'Filter by Pattern']
  },
  {
    title: 'Statistics',
    items: ['Daily Statistics', 'Total Statistics', 'Trend Analysis']
  },
  {
    title: 'Settings',
    items: ['Scheduling']
  }
];

const options = {
  Dash,
  Filtering: DomainFilter,
  Settings: ScheduleSettings,
  Scheduling: ScheduleSettings,
  Statistics: DailyStatistics,
  'Daily Statistics': DailyStatistics,
  'Total Statistics': TotalStatistics,
  'Trend Analysis': TrendAnalysis,
  'Filter by Domain': DomainFilter,
  'Filter by Pattern': PatternFilter
};

export default {
  structure,
  options
};
