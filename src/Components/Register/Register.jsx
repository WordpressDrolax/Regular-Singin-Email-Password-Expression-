// import React from 'react';
import { useState } from 'react';
import app from '../firebase-config';
import './Register.css'
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import { Link } from 'react-router-dom';
const auth = getAuth(app)
const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        console.log(name, email, password);
        setError('')
        setSuccess('')

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('your password at least one Upparcase character use')
            return
        }
        else if (password.length < 6) {
            setError('your password should be six character long !!!')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                emailVeryfication(result.user)
                handleChangeName(result.user, name)
                setSuccess("User Registraion has been created !!!")
                setError()
                event.target.reset();
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
                setSuccess('')
            })
    }
    const emailVeryfication = (user) => {
        sendEmailVerification(user)
            .then(result => {
                console.log(result)
                alert(" please verify your email address")
            })
    }
    const handleChangeName = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
            .then(() => {
                alert("User Name is Updated")
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className="input-items">
            <h3> Create your user account </h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChangeName} placeholder=" your Name" required /> <br />
                <input type="email" name="email" placeholder=" your email" required /> <br />
                <input type="password" name="password" placeholder="your password" required /> <br />
                <input type="submit" value="Submit A Request" />

            </form>
            <p>{error}</p>
            <p>{success}</p>
            <p><small>Already have an account ? please <Link to="/login"> Login</Link></small></p>
        </div>
    );
};

export default Register;