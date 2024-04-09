import { createContext, useState, useContext } from "react";
import useAuth from "./authProvider";
import { useEffect } from "react";

const RenderContext = createContext();

const initial = {
  login: true,
  register: false,
};

export function RenderContextProvider({ children }) {
  const [isShow, setIsShow] = useState(initial);

  const handleIsShow = (name) => {
    if (name == "login") setIsShow({ register: false, login: true });
    if (name == "register") setIsShow({ login: false, register: true });
  };

  return (
    <RenderContext.Provider value={{ handleIsShow, isShow }}>
      {children}
    </RenderContext.Provider>
  );
}

export default function useRender() {
  return useContext(RenderContext);
}
