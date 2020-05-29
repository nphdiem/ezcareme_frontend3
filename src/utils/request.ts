import axios from "axios";
import NProgress from "nprogress";
import store from "configureStore";
import { LOGOUT } from "constants/actionTypes";

const coreAPI = axios.create({
  baseURL: "",
  timeout: 10000,
});

coreAPI.interceptors.request.use(
  function (config) {
    if (config.method !== "get") {
      NProgress.start();
    }
    return config;
  },
  function (error) {
    NProgress.done();
    return Promise.reject(error);
  }
);

coreAPI.interceptors.response.use(
  function (response) {
    NProgress.done();
    return response.data;
  },
  function (error) {
    NProgress.done();
    if (error.response.status === 401) {
      // showErrorNotification('No Permission', error);
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(error);
  }
);

function setToken(token: string) {
  window.localStorage.setItem("token", token);
  coreAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

function removeToken() {
  delete coreAPI.defaults.headers.common["Authorization"];
  window.localStorage.removeItem("token");
}

const token = window.localStorage.getItem("token");

if (token) {
  setToken(token);
}

export { coreAPI, setToken, removeToken };
