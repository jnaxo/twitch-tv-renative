import { CONFIG } from '../config';

const network = (client, baseUrl = 'https://id.twitch.tv') => ({
  requestAppToken: async () => client.post(`${baseUrl}/oauth2/token`, {
    client_id: CONFIG.client_id,
    client_secret: CONFIG.client_secret,
    grant_type: 'client_credentials'
  }),
});

export default network;
