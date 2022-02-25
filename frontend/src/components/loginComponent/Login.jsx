import React, { useState, useRef, useContext } from 'react';
import styles from './login.module.css';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from '../../config/axios.js';
import { BASE_API_URL } from '../../config/apiURL.js';
import TableContext from '../../context/TableContext';

export default function Login() {
    const signinEmailRef = useRef();
    const signinPasswordRef = useRef();

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const navigate = useNavigate();

    const { getUserData } = useContext(TableContext);

    async function handleSignInSubmit(e) {
        e.preventDefault();
        axios
            .post('/users/login', {
                email: signinEmailRef.current.value,
                password: signinPasswordRef.current.value,
            })
            .then((res) => {
                getUserData(res.data[0].id);
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log(err);
            });

        signinPasswordRef.current.value = null;
        signinEmailRef.current.value = null;
    }

    function handleCreateUser() {
        axios
            .post('/users', {
                email: emailRef.current.value,
                first_name: firstNameRef.current.value,
                last_name: lastNameRef.current.value,
                password: passwordRef.current.value,
            })
            .then((res) => console.log(res.data))
            .catch((err) => {
                console.log(err);
            });
    }

    async function handleSignUpSubmit(e) {
        e.preventDefault();
        if (
            !passwordRef.current.value ||
            !emailRef.current.value ||
            !lastNameRef.current.value ||
            !firstNameRef.current.value ||
            !confirmPasswordRef.current.value
        ) {
        } else if (
            passwordRef.current.value !== confirmPasswordRef.current.value
        ) {
            console.log('err');
        } else {
            handleCreateUser();
            navigate('/dashboard');
        }
        passwordRef.current.value = null;
        emailRef.current.value = null;
        firstNameRef.current.value = null;
        lastNameRef.current.value = null;
        confirmPasswordRef.current.value = null;
    }

    const [showSignin, setShowSignin] = useState(false);

    const toggleContainer = () => {
        if (showSignin) {
            setShowSignin(false);
        } else {
            setShowSignin(true);
        }
    };

    return (
        <>
            <div
                className={
                    'container ' + (showSignin ? ' ' : 'right-panel-active')
                }
                id="container"
            >
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div>
                            <input
                                type="text"
                                placeholder="First Name.."
                                ref={firstNameRef}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Last Name.."
                                ref={lastNameRef}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Email.."
                                ref={emailRef}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password.."
                                ref={passwordRef}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Confirm Password.."
                                ref={confirmPasswordRef}
                            />
                        </div>

                        <button onClick={handleSignUpSubmit}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div>
                            <input
                                type="text"
                                placeholder="Email.."
                                ref={signinEmailRef}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password.."
                                ref={signinPasswordRef}
                            />
                        </div>
                        <a href="#">Forgot your password?</a>

                        <button onClick={handleSignInSubmit}>Sign In</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <div className="overlayLeft">
                                <h1>Welcome Back!</h1>
                                <p>
                                    To keep connected with us please login with
                                    your personal info
                                </p>
                                <button
                                    className="ghost"
                                    id="signIn"
                                    onClick={toggleContainer}
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <div className="overlayRight">
                                <h1>Hello, Friend!</h1>
                                <p>
                                    Enter your personal details and start
                                    journey with us
                                </p>
                                <button
                                    className="ghost"
                                    id="signUp"
                                    onClick={toggleContainer}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
