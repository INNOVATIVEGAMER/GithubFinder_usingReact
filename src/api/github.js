import Axios from "axios";

const AxiosBase = Axios.create({
  baseURL: "https://api.github.com/users",
  headers: {
    Authorization:
      "Client-ID e674dee7c0a1533a1531 Client-Secret e12f110a36c4cde46a2e05c2fae4387b39495173",
  },
});

export default AxiosBase;
