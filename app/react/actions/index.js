import * as types from '../constants';

export function filter(data) {
  return { type: types.SEARCH_DOCUMENT, data: data };
}
