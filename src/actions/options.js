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
export function saveChangesRegex(items) {
  return {
    type: 'SAVE_CHANGES_REGEX',
    items
  };
}
export function saveChangesSchedule(dailyLimit, schedule) {
  return {
    type: 'SAVE_CHANGES_SCHEDULE',
    schedule,
    dailyLimit
  };
}
export function fetchSchedule() {
  return {
    type: 'FETCH_SCHEDULE'
  };
}
export function fetchPatterns() {
  return {
    type: 'FETCH_PATTERNS'
  };
}
