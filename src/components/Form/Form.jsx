import React from "react";
import { validation } from "./validation";

export default function Form (props) {
    const [userData, setUserData] = React.useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = React.useState({
        username: "",
        password: ""
    })

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
        setErrors(validation ({
            ...userData,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input 
                    name="username"
                    type="text"
                    value={userData.username}
                    onChange={handleInputChange}
                />
                <p style={{color: "red"}}>{errors.username}</p>
            </div>
            <div>
                <label>Password:</label>
                <input 
                    name="password"
                    type="password" 
                    value={userData.password}
                    onChange={handleInputChange}
                />
                <p style={{color: "red"}}>{errors.password}</p>
            </div>
            <button>Login</button>
        </form>
        </>
    )
}