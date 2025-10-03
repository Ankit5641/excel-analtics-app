import axios from "axios";

const API = axios.create({
  baseURL: "https://excel-analytics-mse0.onrender.com/",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

export default API;
