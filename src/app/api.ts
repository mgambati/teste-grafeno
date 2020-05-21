import axios from "axios";
import { stringify } from "qs";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  paramsSerializer: stringify,
});
