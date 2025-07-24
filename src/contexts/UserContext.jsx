import { createContext, useContext, useState, useEffect } from "react";
import { getUserById } from "../services/user-service";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const loggedUser = JSON.parse(localStorage.getItem("user"));
      if (loggedUser) {
        const userInfo = await getUserById(loggedUser.id);
        setUser(userInfo);
      }
    }

    fetchUser();
  }, []);

  async function refreshUser() {
    if (!user?.id) return;
    const response = await getUserById(user.id);
    setUser(response);
  }

  return (
    <UserContext.Provider value={{ user, setUser, refreshUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
