import { createContext, useState, useContext } from "react";

const RenderContext = createContext();

export function RenderContextProvider({ children }) {
  const [isShow, setIsShow] = useState({ login: true });
  const [isAbout, setIsAbout] = useState({ car: true });

  const handleIsShow = (name) => {
    setIsShow(name);
  };

  const handleIsAbout = (name) => {
    setIsAbout(name);
  };

  console.log(isAbout);
  return (
    <RenderContext.Provider
      value={{ handleIsShow, isShow, handleIsAbout, isAbout }}
    >
      {children}
    </RenderContext.Provider>
  );
}

export default function useRender() {
  return useContext(RenderContext);
}
