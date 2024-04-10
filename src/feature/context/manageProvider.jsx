import { createContext, useState, useContext } from "react";
import * as mangeApi from "../../api/manage";
import useRender from "./renderProvider";
import * as manageApi from "../../api/manage";

const ManageContext = createContext();

const inittial = {
  image: "",
  licenseHead: "",
  licenseBody: "",
  city: "",
  model: "",
  color: "",
  note: "",
  insurance: "",
  descrition: "",
  year: "",
  type: "",
};

export function ManageContextProvider({ children }) {
  const { handleIsAbout } = useRender();
  const [cars, setCars] = useState(null);
  const [newObj, setNewObj] = useState(inittial);
  const [isEdit, setIsEdit] = useState(false);
  const [manage, setManage] = useState(false);
  const [user, setUser] = useState([]);

  const handleMange = () => {
    setManage(!manage);
  };

  const fetchCars = async () => {
    const response = await mangeApi.fetchCars();
    setCars(response?.data.car);
  };

  const fetchUser = async () => {
    const response = await manageApi.fetchUser();
    setUser(response?.data.users);
  };

  const editCar = (obj) => {
    setIsEdit(true);
    setNewObj({
      id: obj.id,
      image: "" || obj?.image,
      licenseHead: "" || obj?.licenseHead,
      licenseBody: "" || obj?.licenseBody,
      city: "" || obj?.city,
      model: "" || obj?.model,
      color: "" || obj?.color == null ? "" : obj?.color,
      note: "" || obj?.note == null ? "" : obj?.note,
      insurance: "" || obj?.insurance == null ? "" : obj?.insurance,
      descrition: "" || obj?.descrition == null ? "" : obj?.descrition,
      year: "" || obj?.year == null ? "" : +obj?.year,
      type: obj?.type,
      role: obj?.role,
    });
  };

  const cancelEdit = () => {
    setNewObj({});
    handleIsAbout({ car: true });
    setIsEdit(false);
  };

  const deleteCar = async (id) => {
    await manageApi.deleteCar(id);
    fetchCars();
  };

  return (
    <ManageContext.Provider
      value={{
        fetchCars,
        cars,
        handleMange,
        manage,
        editCar,
        newObj,
        cancelEdit,
        isEdit,
        deleteCar,
        fetchUser,
        user,
      }}
    >
      {children}
    </ManageContext.Provider>
  );
}

export default function useMange() {
  return useContext(ManageContext);
}
