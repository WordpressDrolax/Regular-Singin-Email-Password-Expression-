// import React from 'react';
import { useRef, useState } from 'react';
import app from '../firebase-config';
import './Login.css'
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
const auth = getAuth(app);

const Login = () => {

    // Declared a State for multiple times assingmet a values to the State;
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const emailRef = useRef();
    const handleSubmitForm = (event) => {
        setSuccess()
        setError()
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;


        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedInUser = result.user
                setSuccess(" User login successfully ")
                console.log(loggedInUser);
                if (!loggedInUser.emailVerified) {
                    alert("please go to your email to do verify email address")
                }
                event.target.reset()

            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleResetPassword = () => {

        const email = emailRef.current.value;
        console.log(email);
        if (!email) {
            alert('please provide your email addresss')
            return

        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("please check your email")
            })
            .catch((error) => {
                setError(error.message)
            })
    }



    return (
        <div className="input-wrapper">
            <h3> Please  login !!! </h3>
            <form onSubmit={handleSubmitForm}>
                <input type="email" name="email" ref={emailRef} placeholder="Your Email" /> <br />
                <input type="password" name="password" placeholder="Your Password" /> <br />
                <input type="submit" value="Login" />
            </form>
            <p>{success}</p>
            <p>{error}</p>
            <p><small> New to this website ? Please  <Link to="/register">Register</Link> </small></p>
            <p><small>Forget Password ? <button onClick={handleResetPassword}> Reset Password</button> </small></p>
        </div>
    );
};

export default Login;