import axios from 'axios';

const UNAUTHORIZED_HTTP_CODE = 401;

const extractError = data => {
  let msg;
  if (Array.isArray(data))
    msg = data.join('; ');
  else if (typeof data === 'string')
    msg = data;
  else if (typeof data === 'object')
    msg = data.error;
  else
    msg = 'Error occurred! Please, try again.';
  throw new Error(msg);
};

const defaultOptions = {
  method: 'GET',
  validateStatus: status => {
    if (status == UNAUTHORIZED_HTTP_CODE) {
      throw new Error('User is not authorized!');
    }
    return status;
  }
};

export const apiRequest = async options => {
  const { url } = options;
  return await axios(
    {
      ...defaultOptions,
      ...options,
      url: `/${REACT_APP_URL}${url}`
    })
    .catch(error => {
      const { response } = error;
      if (!response) return error;
      const { status, data } = response;
      extractError(status >= 500 ? undefined : data);
    });
};

export const apiMutation = options => apiRequest({method: 'POST', ...options});
