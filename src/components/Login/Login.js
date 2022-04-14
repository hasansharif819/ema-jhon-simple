import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword,
        user,
        loading,
        error] = useSignInWithEmailAndPassword(auth);

        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || '/';

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleSignin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if(user){
        navigate(from, { replace : true});
    }
    return (
        <div>
            <div className="form-container">
                <div>
                    <h2 className='form-title'>Login</h2>
                    <form onClick={handleSignin}>
                        <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="" id="" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="" id="" required/>
                        </div>
                        {
                            error && <p>{error.message}</p>
                        }
                        {
                            loading && <p>Loading...</p>
                        }
                        <input className='form-submit' type="submit" value="Login" />
                    </form>
                <Link to='/signup' className='form-link'>Cerate new account</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;