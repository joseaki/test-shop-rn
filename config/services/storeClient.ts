import axios from "axios";

const storeClient = axios.create({
  baseURL: "https://mock.shop",
  timeout: 10000,
});

export default storeClient;
