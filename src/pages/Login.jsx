import axios from 'axios';
import { useState } from 'react'
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { NavBarBrands } from '../components/NavBarBrands';
import { useAuth } from '../contexts/auth-context'

const Login = () => {

    const { setIsLoggedIn } = useAuth();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const location = useLocation();

    const loginHandler = async(e, email, password) =>  {
        e.preventDefault();
        try {
            const response = await axios.post(`/api/auth/login`, {
                email,
                password
            });

            if(response.status === 200) {
                localStorage.setItem("token", response.data.encodedToken);
                setIsLoggedIn((login) => !login);
            }

            navigate(location?.state?.from.pathname || "/", {
                replace: true
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
           <NavBarBrands />
           <hr />
           <div className="container-sign-in justify-center align-center">
                <form
                    className='form-sign-in'
                    onSubmit={(e) => loginHandler(e, credentials.email, credentials.password)}
                >
                    <div className='heading-sign-in t3 bold'>
                        Login
                    </div>
                    <hr />
                    <div className="sub-heading-sign-in light">
                        Enter your Details
                    </div>
                    <hr />
                    <div className='input-box-sign-in'>
                        <input 
                            type="email" 
                            placeholder='Email'
                            onChange={(e) => setCredentials((a) => ({
                                ...a,
                                email: e.target.value
                            }))}
                        />
                        <input 
                            type="password"
                            placeholder='Password'
                            onChange={(e) => setCredentials((a) => ({
                                ...a,
                                password: e.target.value
                            }))}
                        />
                    </div>
                    <div className='btn-box-sign-in'>
                        <input 
                            type="submit"
                            value="LOG IN"
                            className="btn btn-sign-in" 
                        />
                    </div>
                    <br />
                    <div className='btn-box-sign-in'>
                        <input 
                            className='btn btn-sign-in'
                            type="submit" 
                            value="SIGN IN AS GUEST"
                            onClick={(e) => {
                                setCredentials((a) => ({
                                    ...a,
                                    email: "test@gmail.com",
                                    password: "testing"
                                }))
                            }}
                        />
                    </div>
                    <div className='login-text'>
                        <NavLink to='/signup'>
                            Don't have an account? 
                            <span className='login-text'>
                                Create here
                            </span>
                        </NavLink>
                    </div>
                </form>
           </div>
        </>
    )
}

export { Login }