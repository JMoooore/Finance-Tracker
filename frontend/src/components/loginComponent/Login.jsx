import React, { useState, useRef } from 'react';
import styles from './login.module.css';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const signinEmailRef = useRef();
    const signinPasswordRef = useRef();

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const navigate = useNavigate();

    // const [showErr, setShowErr] = useState(false);
    // const [showWelcome, setShowWelcome] = useState(false);
    // const [hideLoginCard, setHideLoginCard] = useState(false)
    // const [displayName, setDisplayName] = useState("")

    // const changeSuccesLogin = () => {
    //     if(showErr) setShowErr(false)
    //     setHideLoginCard(true)
    //     setShowWelcome(true)
    // };

    async function handleSignInSubmit(e) {
        /// check user
        e.preventDefault();
        axios
            .get(`http://localhost:3001/users`)
            .then((res) => {
                for (let i = 0; i < res.data.length; i++) {
                    let current = res.data[i];
                    if (
                        current.email === signinEmailRef.current.value &&
                        current.password === signinPasswordRef.current.value
                    ) {
                        // props.setUser(current)
                        // setDisplayName(current.first_name)
                        // changeSuccesLogin()
                        // setShowErr(false)
                        navigate('/dashboard');
                        // setTimeout(() =>{
                        //     navigate('/dashboard')
                        // }, 2000)
                    }
                    // } else {
                    //     setShowErr(true)
                    // }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // function handleCreateUser() {                        //// for creating user
    //     axios.post('http://localhost:3001/users', {
    //         email: emailRef.current.value,
    //         first_name: firstNameRef.current.value,
    //         last_name: lastNameRef.current.value,
    //         password: passwordRef.current.value
    //     })
    //     .then(res => {props.setUser(res.data[0])})
    //     .catch((err) => {console.log(err);})
    // }

    // async function handleSignUpSubmit(e) {
    //     e.preventDefault()
    //     if(!passwordRef.current.value ||
    //         !emailRef.current.value ||
    //         !lastNameRef.current.value ||
    //         !firstNameRef.current.value ||
    //         !confirmPasswordRef.current.value) {
    //         setShowErr(true)
    //     } else if (passwordRef.current.value !== confirmPasswordRef.current.value) {
    //         setShowErr(true)
    //     } else {
    //         handleCreateUser()
    //         setFirstName(firstNameRef.current.value)
    //         changeSuccessSignup()
    //         setTimeout(() =>{
    //             navigate('/dashboard')
    //         }, 2000)
    //     }
    //     passwordRef.current.value = null
    //     emailRef.current.value = null
    //     firstNameRef.current.value = null
    //     lastNameRef.current.value = null
    //     confirmPasswordRef.current.value = null
    // }

    const [showSignin, setShowSignin] = useState(true);

    const toggleContainer = () => {
        if (showSignin) {
            setShowSignin(false);
        } else {
            setShowSignin(true);
        }
    };

    return (
        <>
            {/* <div className={styles.mainLoginPageContainer}>
            <h1 className={showWelcome ? styles.shownSuccessLogin : styles.hiddenSuccessLogin}>Welcome Back {displayName}</h1>   
            <div className={hideLoginCard ? styles.hiddenSuccessLoginCard :  styles.shownLoginCard }>
                <h1 className={styles.loginTitle}>Login</h1>                        
                <h1 className={showErr ? styles.shownErr : styles.hiddenErr}>Invalid username and/or password</h1>                
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <div><input type="text" placeholder='Email..' ref={emailRef} /></div>
                    <div><input type="password"placeholder='Password..' ref={passwordRef}  /></div>
                    <button type="submit" className={styles.loginBtn}>Login</button>
                </form>
                <div>or</div>
               <Link to="/signup"> <h1 className={styles.signUpLink}>Sign Up</h1></Link>
            </div>
        </div> */}

            <div
                className={
                    'container ' + (showSignin ? ' ' : 'right-panel-active')
                }
                id="container"
            >
                <div class="form-container sign-up-container">
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

                        <button>Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
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

                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <div className="overlayLeft">
                                <h1>Welcome Back!</h1>
                                <p>
                                    To keep connected with us please login with
                                    your personal info
                                </p>
                                <button
                                    class="ghost"
                                    id="signIn"
                                    onClick={toggleContainer}
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <div className="overlayRight">
                                <h1>Hello, Friend!</h1>
                                <p>
                                    Enter your personal details and start
                                    journey with us
                                </p>
                                <button
                                    class="ghost"
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
