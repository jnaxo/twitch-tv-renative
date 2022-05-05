import { auth } from '../../network';

const helpers = {};

helpers.getPublicAccess = (callback = () => null) => {
  const accessToken = localStorage.getItem('accessToken');
  const expiresAt = localStorage.getItem('expiresAt');
  if (!accessToken || expiresAt < Date.now()) {
    auth.requestAppToken().then(({ data }) => {
      console.log('response', data);
      localStorage.setItem('accessToken', data.access_token);
      localStorage.setItem('expiresAt', Date.now() + data.expires_in);
      callback(accessToken);
    });
  } else {
    callback(accessToken);
  }
};

export default helpers;
