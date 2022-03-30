import Cookies from "js-cookie";
import qs from "qs";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://alunos.b7web.com.br:501",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
});

const apiPost = async (endpoint, body) => {
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

const apiGet = async (endpoint, body = []) => {
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }

  const response = await instance.get(`${endpoint}?${qs.stringify(body)}`);

  if (response.notallowed) {
    window.location.href = "signin";
    return;
  }
  return response.data;
};

const API = {
  login: async (email, password) => {
    const json = await apiPost("/user/signin", { email, password });
    return json;
  },
  getStates: async () => {
    const json = await apiGet("/states");
    return json.states;
  },
  register: async (name, email, password, stateLoc) => {
    const json = await apiPost("/user/signup", {
      name,
      email,
      password,
      state: stateLoc
    });
    return json;
  }
};

export default () => API;
