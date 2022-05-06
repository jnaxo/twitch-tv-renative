import axios from 'axios';
import authNetwork from './auth';
import channelsNetwork from './channels';
import authInterceptor from './interceptors/authorization';
import { CONFIG } from '../config';

const httpConfig = {
  // TODO: set default config
};

const http = axios.create(httpConfig);
const httpAuth = axios.create(httpConfig);

const authorization = authInterceptor();
httpAuth.interceptors.request.use(authorization.authRequest, error => Promise.reject(error));

export const auth = authNetwork(http, CONFIG.authURL);
export const channels = channelsNetwork(httpAuth, CONFIG.baseURL);
