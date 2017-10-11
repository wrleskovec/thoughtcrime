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
export function saveChangesSchedule(schedule) {
  return {
    type: 'SAVE_CHANGES_SCHEDULE',
    schedule
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
export function fetchModalRecord(site) {
  return {
    type: 'FETCH_MODAL_RECORD',
    site
  };
}
// maybe get rid of this
export function navigateOptions(selectedCategory, selectedPage, options = null) {
  return {
    type: 'NAVIGATE_OPTIONS',
    selectedCategory,
    selectedPage,
    options
  };
}
// fetches additional site data such as action && advAction
export function fetchDailySiteRecords() {
  return {
    type: 'FETCH_DAILY_SITE_RECORDS'
  };
}

export function updateSelectedSites(newSites) {
  return {
    type: 'UPDATE_SELECTED_SITES',
    newSites
  };
}
export function setEndDate(date) {
  return {
    type: 'SET_END_DATE',
    date
  };
}
export function setStartDate(date) {
  return {
    type: 'SET_START_DATE',
    date
  };
}
export function statisticsSearchRecords(filter) {
  return {
    type: 'STATISTICS_SEARCH_RECORDS',
    filter
  };
}

export function fetchTrendData() {
  return {
    type: 'FETCH_TREND_DATA'
  };
}

export function getBlockedUrl() {
  return {
    type: 'GET_BLOCKED_URL'
  };
}
export function setBlockedUrl(url) {
  return {
    type: 'SET_BLOCKED_URL',
    url
  };
}

export function importDatabase(db) {
  return {
    type: 'IMPORT_DATABASE',
    db
  };
}

export function checkDomainPreset() {
  return {
    type: 'CHECK_DOMAIN_PRESET'
  };
}
