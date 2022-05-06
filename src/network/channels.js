const network = (client, baseURL) => ({
  getChannelList: async () => client.get(`${baseURL}/streams`),
});

export default network;
