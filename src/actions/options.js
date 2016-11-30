export function saveChangesModal(site) {
  return {
    type: 'SAVE_CHANGES_MODAL',
    site
  };
}
export function deleteSite(site) {
  return {
    type: 'SITE_DELETE',
    site
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
