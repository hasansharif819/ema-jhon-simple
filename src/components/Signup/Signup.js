import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    
    const handleEmail = event => {
        setEmail(event.target.value);
        console.log(email);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
        console.log(password);
    }
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
        console.log(confirmPassword);
    }

    const handleCreateUser = e => {
        e.preventDefault();
        if(password.length <6){
            setError('short password');
            return;
        }
        if(password !== confirmPassword){
            setError('Password incorrect');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    if(user){
        navigate('/');
    }
    return (
        <div>
            <div className="form-container">
                <div>
                    <h2 className='form-title'>Sign up now</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="" id="" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="" id="" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password">Confirm-Password</label>
                            <input onBlur={handleConfirmPassword} type="password" name="" id="" required/>
                        </div>
                        <p style={{color:'red'}}>{error}</p>
                        <input className='form-submit' type="submit" value="Sign up"/>
                    </form>
                <p>
                    Already Have an Account? <Link to='/login' className='form-link'>Log in</Link>
                </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;