import axiosClient from "./axiosClient";

const authAPI = {
  login: (values) => {
    return axiosClient.post("/auth/login", values);
  },
  register: (values) => {
    return axiosClient.post("/auth/register", values);
  },
  loginGoogle: (values) => {
    return axiosClient.post("/auth/google",values);
  }
};

export default authAPI;
