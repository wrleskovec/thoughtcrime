import Dash from './Dash';
import DomainFilter from './Filtering/DomainFilter';
import PatternFilter from './Filtering/PatternFilter';
import ScheduleSettings from './Settings/Scheduling';
import DailyStatistics from './Statistics/DailyStatistics';

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
    items: null
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
  'Filter by Domain': DomainFilter,
  'Filter by Pattern': PatternFilter
};

export default {
  structure,
  options
};
