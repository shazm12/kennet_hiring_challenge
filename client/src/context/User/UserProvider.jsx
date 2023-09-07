import { useState } from "react"
import UserContext from "./UserContext"

const UserProvider = ({ children }) => {
    const [userName, setUserName ] = useState("");
    const [userId, setUserId ] = useState("");

    const updateUserName = (value) => setUserName(value);
    const baseUrl = import.meta.env.VITE_API_URL;

    const saveUserInDB = async() => {
        const payload = {
            name: userName
        }
        try {
            const response = await fetch(`${baseUrl}/user/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            });
            const data = await response.json();
            setUserId(data?.user?._id);
          } catch (error) {
            throw new Error(error);
          }
    }

    return (
        <UserContext.Provider value={{userName, updateUserName, saveUserInDB, userId }}> 
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;

