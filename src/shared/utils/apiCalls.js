import axios from 'axios';

const errObj = (error, msg) => {
  return { error, msg };
};

export const getRequest = url => {
  return axios
    .get(url)
    .then(res => res.data)
    .catch(err => errObj(true, err.message));
};

export const postRequest = (url, data = {}, method = 'POST') => {
  return axios
    .request({
      method,
      url,
      data
    })
    .then(res => res.data)
    .catch(err => errObj(true, err.message));
};
