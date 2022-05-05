import axios from 'axios';
import authNetwork from './auth';

const httpConfig = {
  // TODO: set default config
};

const http = axios.create(httpConfig);

export const auth = authNetwork(http);
