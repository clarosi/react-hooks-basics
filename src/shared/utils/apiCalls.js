import axios from 'axios';

export const getRequest = uri => {
  return axios
    .get(uri)
    .then(res => res.data)
    .catch(err => {
      return { error: true, msg: err.message };
    });
};
