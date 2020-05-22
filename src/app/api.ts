import axios from "axios";
import { stringify } from "qs";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  paramsSerializer: stringify,
});
