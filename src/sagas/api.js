import axios from 'axios';

const headers = (token) => {
  if (token) {
    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }

  return {
    headers: {
      'Content-type': "application/x-www-form-urlencoded"
    }
  }
};

const data = (config) => {
  if (config) {
    return {
      data: {
        ...config
      }
    }
  }

  return null;
}

const request = (method, url, config = null, token = null) => {
  axios({
    method,
    url: `${process.env.REACT_APP_URL}/${url}`,
    ...data(config),
    ...headers(token)
  });
}

export const get = () => request('get', 'test');

export const post = (data) => request('post', 'test', ...data);

export const put = (data) => request('put', 'test', ...data, token);

export const delete = (data) => request('delete', 'test', ...data, token);
