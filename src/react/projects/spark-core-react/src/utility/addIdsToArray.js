import { uniqueId } from 'lodash';

const addIdsToArray = (arr) => {
  return arr.map(item => {
    return Object.assign({id: uniqueId()}, item);
  });
};

export default addIdsToArray;
