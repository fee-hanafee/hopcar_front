import axios from "../config/axios";

export const fetchMe = () => axios.get("/auth/me");

export const userLogin = (user) => axios.post("/auth/login", user);

export const register = (userObj) => axios.post("/auth/register", userObj);
