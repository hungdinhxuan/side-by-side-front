import axiosClient from "./axiosClient";

const authAPI = {
  login: (values) => {
    return axiosClient.post("/renter/login", values);
  },
  register: (values) => {
    return axiosClient.post("/renter/register", values);
  },
};

export default authAPI;