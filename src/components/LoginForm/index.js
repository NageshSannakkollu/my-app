import {useState} from "react"
import { useNavigate } from "react-router-dom";


import "./index.css"
const LoginForm = () => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [showPassword,setShowPassword] = useState(false);
    const navigate = useNavigate()

    const changeUsername = e => {
        setUsername(e.target.value)
    }
    
    const changePassword = e => {
        setPassword(e.target.value)
    }

    const showEncryptPassword = () => {
        setShowPassword(prevState => !prevState)
    }

    const passwordType = showPassword ? "text":"password"

    const loginIntoForm = e => {
        e.preventDefault()
        let initialUsername="rahul sharma";
        let initialPassword = "rahul_sharma@2014"
        if(username===initialUsername){
            if(password ===initialPassword){
                navigate("/")
            }
        }
    }
    return (
        <div className="login-app">
        <div className="login-inside-app">
            <h2 className="appscrip-title">APPSCRIP</h2>
            <form className="form-container" onSubmit={loginIntoForm}>
            <div className="user-input-container">
                <label className="username">USERNAME</label>
                <input type="text" className="user-input" placeholder="Enter Username..." onChange={changeUsername} value={username} required/>
            </div>
            <div className="user-input-container">
                <label>PASSWORD</label>
                <input type={passwordType} className="user-input" placeholder="Enter Username..." onChange={changePassword} value={password} required/>
            </div>
            <div>
                <input type="checkbox" id="checkbox" className="checkbox" onClick={showEncryptPassword}/>
                <label htmlFor="checkbox">Show Password</label>
            </div>
            <button type="submit" className="submit-button">Login</button>
            </form>
        </div>
        </div>
    )
}

export default LoginForm