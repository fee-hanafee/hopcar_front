import { createContext, useState, useContext } from "react";
import * as mangeApi from "../../api/manage";

const ManageContext = createContext();

export function ManageContextProvider({ children }) {
  const [cars, setCars] = useState(null);

  const fetchCars = async () => {
    const response = await mangeApi.fetchCars();
    setCars(response?.data.car);
  };

  console.log(cars);
  return (
    <ManageContext.Provider value={{ fetchCars, cars }}>
      {children}
    </ManageContext.Provider>
  );
}

export default function useMange() {
  return useContext(ManageContext);
}
