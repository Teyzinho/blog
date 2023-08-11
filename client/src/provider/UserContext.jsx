import {createContext, useState} from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}){
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : {};
      });
    
      const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      };
    
      const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
      };

    return (
        <UserContext.Provider value={{user, setUser, logout, login}}>
            {children}
        </UserContext.Provider>
    )
}