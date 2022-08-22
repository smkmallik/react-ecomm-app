import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { NavBarBrands } from '../components/NavBarBrands';
import { useAuth } from '../contexts/auth-context';
import axios from 'axios';

const Signup = () => {
    const { setIsLoggedIn } = useAuth();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    });
    const navigate = useNavigate();

    const signupHandler = async(e, email, password, firstName, lastName) => {
        console.log(email, password, firstName, lastName);
        e.preventDefault();

        try {
            const response = await axios.post(`/api/auth/signup`, {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            })
            console.log(response);
            if(response.status === 201) {
                localStorage.setItem("token", response.data.encodedToken);
                setIsLoggedIn((login) => !login)
            }
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <>
        <NavBarBrands />
        <hr />
        <div className='container-sign-in justify-center align-center'>
          <form
            className='form-sign-in'
            onSubmit={(e) =>
              signupHandler(
                e,
                credentials.email,
                credentials.password,
                credentials.firstName,
                credentials.lastName
              )
            }
          >
            <div className='heading-sign-in t3 bold'>Sign Up</div>
            <hr />
            <div className='sub-heading-sign-in light'>
              Enter your details to create account
            </div>
            <hr />
            <div className='input-box-sign-in'>
              <input
                type='text'
                placeholder='First Name'
                onChange={(e) =>
                  setCredentials((a) => ({
                    ...a,
                    firstName: e.target.value,
                  }))
                }
                required
              />
              <input
                type='text'
                placeholder='Last Name'
                onChange={(e) =>
                  setCredentials((a) => ({
                    ...a,
                    lastName: e.target.value,
                  }))
                }
                required
              />
              <input
                type='email'
                placeholder='Email'
                onChange={(e) =>
                  setCredentials((a) => ({
                    ...a,
                    email: e.target.value,
                  }))
                }
                required
              />
              <input
                type='password'
                placeholder='Password'
                onChange={(e) =>
                  setCredentials((a) => ({
                    ...a,
                    password: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className='login-text'>
                <NavLink to='/login'>
                    Already have an account?
                    <span className='login-text'>
                        Login Here
                    </span>
                </NavLink>
            </div>
          </form>
        </div>
      </>
    )
}

export { Signup }