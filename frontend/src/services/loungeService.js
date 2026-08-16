import axios from "axios";

const API_URL = "https://libraryhub-backend-rity.onrender.com/api/lounges";

export const getLounges = () => {
  return axios.get(API_URL);
};

export const createLounge = (data) => {
  return axios.post(API_URL, data);
};