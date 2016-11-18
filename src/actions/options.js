export function editRecord(record) {
  return {
    type: 'EDIT_RECORD',
    record
  };
}
export function openModal(modalId) {
  return {
    type: 'OPEN_MODAL',
    modalId
  };
}
export function sortSites(filter) {
  return {
    type: 'SITE_SORT',
    filter
  };
}
