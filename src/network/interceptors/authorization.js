import { CONFIG } from '../../config';

const authorization = () => ({
  authRequest: request => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      request.headers = {
        Authorization: `Bearer ${accessToken}`,
        'Client-Id': CONFIG.client_id
      };
    }
    return request;
  },
});

export default authorization;
