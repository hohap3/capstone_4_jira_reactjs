import axios from "axios";
import { BASE_URL, TOKEN } from "constants/constant";

const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN,
  },
});

export default https;
