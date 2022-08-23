import axios from "axios";
import { getToken } from "./Authentication";

const api = axios.create({
  baseURL: "http://localhost:3002",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    authorization: getToken(),
  }
});

export default api;
