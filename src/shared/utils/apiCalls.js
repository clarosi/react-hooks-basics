import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000
});

const errObj = (error, msg) => {
  return { error, msg };
};

export const getRequest = url => {
  return axiosInstance
    .get(url)
    .then(res => res.data)
    .catch(err => errObj(true, err.message));
};

export const postRequest = (url, data = {}, method = 'POST') => {
  return axiosInstance
    .request({
      method,
      url,
      data
    })
    .then(res => res.data)
    .catch(err => errObj(true, err.message));
};
