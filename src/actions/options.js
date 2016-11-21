export function editRecord(record) {
  return {
    type: 'EDIT_RECORD',
    record
  };
}
export function openModal(modalObj) {
  return {
    type: 'OPEN_MODAL',
    modalObj
  };
}
export function searchSites(filter) {
  return {
    type: 'SITE_SEARCH',
    filter
  };
}
export function sortSites(sortBy) {
  return {
    type: 'SITE_SORT',
    sortBy
  };
}
export function fetchDailySites() {
  return {
    type: 'FETCH_DAILY_SITES'
  };
}
