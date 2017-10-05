export function getTimer() {
  return {
    type: 'GET_TIMER'
  };
}
export function editDomainModal(domain) {
  return {
    type: 'EDIT_DOMAIN_MODAL',
    domain
  };
}
