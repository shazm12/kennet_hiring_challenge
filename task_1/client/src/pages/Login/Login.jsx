import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import UserContext from '../../context/User/UserContext';

const Login = () => {

    const navigate = useNavigate();
    const { userName, updateUserName, saveUserInDB } = useContext(UserContext);

    const login = async() => {
        if(userName === "") {
            alert("Please enter a user name");
            return;
        }
        await saveUserInDB();
        navigate("/feed");
    }

    return (
        <>
            <div className='login__container'>
                <div className='login__text'>
                    <h1>Login To Kennet Feed</h1>
                </div>
                <div className='login__form'>
                    <input type='text' placeholder='enter username...' value={userName} onChange={(event) => updateUserName(event.target.value)} name="name" id="name" />
                    <button onClick={login}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login;
