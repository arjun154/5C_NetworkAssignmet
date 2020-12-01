import Axios from "axios";

const api = Axios.create({
  baseURL: "https://api.github.com/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
