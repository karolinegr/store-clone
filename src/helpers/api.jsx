import Cookies from "js-cookie";
import qs from "qs";
import axios from "axios";

const BASE = "http://alunos.b7web.com.br:501";
const instance = axios.create({
  baseURL: "http://alunos.b7web.com.br:501",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
});

const apiFetchPost = async (endpoint, body) => {
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }

  const response = await instance.post(endpoint, body);

  if (response.notallowed) {
    window.location.href = "/signin";
    return;
  }

  return response.data;
};

const apiFetchGet = async (endpoint, body = []) => {
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }

  const res = await fetch(`${BASE + endpoint}?${qs.stringify(body)}`);
  const json = await res.json();

  if (json.notallowed) {
    window.location.href = "signin";
    return;
  }

  return json;
};

const API = {
  login: async (email, password) => {
    const json = await apiFetchPost("/user/signin", { email, password });
    return json;
  }
};

export default () => API;
