import Axios from "axios";

const AxiosBase = Axios.create({
  baseURL: "https://api.github.com/users",
  headers: {
    Authorization:
      "Client-ID 9df188b7d59bbb573db3 Client-Secret dc2bc7e6f8b42bbc6a3b99f356c75661366ab6e0",
  },
});

export default AxiosBase;
