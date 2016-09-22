export function addSite(site) {
  return {
    type: 'ADD_SITE',
    site
  };
}
export function fetchSites() {
  return {
    type: 'SITE_FETCH_REQUESTED'
  };
}
