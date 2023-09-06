import { useState } from "react"
import UserContext from "./UserContext"

const UserProvider = ({ children }) => {
    const [userName, setUserName ] = useState("");
    const [userId, setUserId ] = useState("");

    const updateUserName = (value) => setUserName(value);

    const saveUserInDB = async() => {
        const payload = {
            name: userName
        }
        try {
            const response = await fetch('http://localhost:8000/user/login', {
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

