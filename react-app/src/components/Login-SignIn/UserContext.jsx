import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({id:"",username:"",bio:""});
    function changeUser(id, username,bio){
        setUser({id,username,bio})
    }
    return (
        <UserContext.Provider value={{ user,changeUser }}>
            {children}
        </UserContext.Provider>
    );
}