import axios from "../config/axios";

export const fetchCars = () => axios.get("/cars")