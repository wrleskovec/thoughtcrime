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
export function sortSites(sortBy, order) {
  return {
    type: 'SITE_SORT',
    sortBy,
    order
  };
}
export function fetchDailySites() {
  return {
    type: 'FETCH_DAILY_SITES'
  };
}
