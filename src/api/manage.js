import axios from "../config/axios";

export const fetchCars = () => axios.get("/cars");

export const fetchUser = () => axios.get("/cars/user");

export const createCar = (data) => axios.post("/manager/create", data);

export const editCar = (data) => axios.patch("/manager/edit", data);

export const deleteCar = (carId) => axios.delete(`/manager/${carId}`);
