import axios from 'axios';
import { Cookies } from 'react-cookie';

export function post(url, data) {
  const cookies = new Cookies();
  const token = cookies.get('token');

  const postData = {
    method: 'post',
    url,
    data,
  };

  if (typeof token !== 'undefined') postData.headers = { Authorization: token };

  return axios(postData);
}

export function postWithKey(url, data, apiKey) {
  const postData = {
    method: 'post',
    headers: {
      Authorization: apiKey,
    },
    url,
    data,
  };

  return axios(postData);
}
