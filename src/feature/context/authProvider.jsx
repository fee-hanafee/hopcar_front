import { createContext, useState, useContext } from "react";
import { useEffect } from "react";

import * as authApi from "../../api/auth";
import * as store from "../../utils/local-store";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const fetchMe = async () => {
    try {
      const res = await authApi.fetchMe();
      setAuthUser(res.data.user);
    } catch (err) {
      console.log(err.response?.data.message);
    }
  };

  const login = async (input) => {
    const response = await authApi.userLogin(input);
    store.storeToken(response.data.accessToken);

    setAuthUser(response.data.user);
  };

  const register = async (input) => {
    const respon = await authApi.register(input);
    setAuthUser(respon.data.user);
  };

  const logout = () => {
    store.clearToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, fetchMe, login,logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
