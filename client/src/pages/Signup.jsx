import React, { useState } from 'react'
import '../css/signup.css'
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup =async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:3001/api/user/signup", {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                username : username,
                email: email,
                password: password
            })
        })

        const json = response.status;
        console.log(json);
        if (json === 200) {
            alert("Registered Successfully");
            navigate("/login")
        }
    }

    return (
        <div>
            <div class="container">
                <div class="screen">
                    <div class="screen__content">
                        <form class="login">
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" class="login__input" placeholder="User name" onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" class="login__input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" class="login__input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div class="button login__submit" onClick={handleSignup}>
                                <button class="button__text" type='submit'>Log In Now</button>
                                <i class="button__icon fas fa-chevron-right"></i>
                            </div>
                            <div className='ps-2 mt-2 flex '>
                                <p className='me-2'>already have an account?</p>
                                <p className='text-white underline' onClick={() => navigate('/login')}>Login</p>
                            </div>
                        </form>
                        
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
