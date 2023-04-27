import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0f73c3e7852143acab3cd80db80e7440",
  },
});

export { CanceledError };
