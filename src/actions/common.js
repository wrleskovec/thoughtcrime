export function addFilter(filter, action, filterType) {
  return {
    type: 'ADD_FILTER',
    filter,
    action,
    filterType
  };
}
export function fetchSites(search = false) {
  return {
    type: 'SITE_FETCH',
    search
  };
}
