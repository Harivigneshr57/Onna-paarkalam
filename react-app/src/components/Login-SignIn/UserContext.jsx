import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({id:"",username:""});
    function changeUser(id, username){
        setUser({id,username})
    }
    return (
        <UserContext.Provider value={{ user,changeUser }}>
            {children}
        </UserContext.Provider>
    );

}