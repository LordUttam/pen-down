import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authData, setAuthData] = useState({
    token: null,
    user: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    let userLoggedIn = localStorage.getItem("user");
    let tokenSaved = localStorage.getItem("token");
    if (userLoggedIn && tokenSaved) {
      setAuthData({
        user: JSON.parse(userLoggedIn),
        token: tokenSaved,
        isAuthenticated: true,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
