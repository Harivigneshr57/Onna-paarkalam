import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({id:"",email:""});
    function changeUser(id, email){
        setUser({id,email})
    }
    return (
        <UserContext.Provider value={{ user,changeUser }}>
            {children}
        </UserContext.Provider>
    );

}