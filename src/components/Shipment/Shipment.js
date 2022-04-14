import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleName = event =>{
        setName(event.target.value);
    }

    const handleAddress = event => {
        setAddress(event.target.value);
    }
    const handlePhone = e => {
        setPhone(e.target.value);
    }

    const handleCreateUser = e => {
        e.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }

    return (
        <div>
            <div className="form-container">
                <div>
                    <h2 className='form-title'>Shipping</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className="input-group">
                        <label htmlFor="text">Name</label>
                        <input onBlur={handleName} type="text" name="" id="" required/>
                        </div>
                        <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="" id="" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="text">Adderss</label>
                            <input onBlur={handleAddress} type="text" name="" id="" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Phone</label>
                            <input onBlur={handlePhone} type="text" name="" id="" required/>
                        </div>
                        <p style={{color:'red'}}>{error}</p>
                        <input className='form-submit' type="submit" value="Shipping"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Shipment;