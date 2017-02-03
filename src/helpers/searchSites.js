import Fuse from 'fuse.js';

const fuseOptions = {
  shouldSort: true,
  threshold: 0.1,
  location: 0,
  distance: 1000,
  maxPatternLength: 32,
  keys: ['site']
};

export default function searchSites(sites, input) {
  const fuse = new Fuse(sites, fuseOptions);
  return fuse.search(input);
}
