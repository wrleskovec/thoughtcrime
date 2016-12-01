import Dash from './Dash';
import DomainFilter from './Filtering/DomainFilter';
import PatternFilter from './Filtering/PatternFilter';
import Settings from './Settings';
import Statistics from './Statistics';

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
    items: null
  }
];

const options = {
  Dash,
  Filtering: DomainFilter,
  Settings,
  Statistics,
  'Filter by Domain': DomainFilter,
  'Filter by Pattern': PatternFilter
};

export default {
  structure,
  options
};
