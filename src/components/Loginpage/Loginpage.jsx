import React, { useContext, useEffect, useState } from 'react'
import './Loginpage.css'
import { Context } from '../../context/Context';
import { assets } from '../../assets/assets';
// import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth';
// import { useAuth } from '../../context/authContext/index';

const Loginpage = () => {

    const { logging, setLogging, setemail, setpassword, setname, handlesigninbtn, handlesignupbtn, isLogin, setIsLogin, email, password, doSignInWithGoogle, doSignInWithFacebook, doSignInWithGitHub, doSignInWithTwitter } = useContext(Context);
    const [googleValue, setGoogleValue] = useState('');




    // useEffect(() => {
    //     setGoogleValue(localStorage.getItem('email'))
    // })

    // { googleValue ? console.log(email) : console.log("error") }


    // const { userLoggedIn } = useAuth()


    const [isActive, setIsActive] = useState(false);

    // const onSubmit = async (e) => {
    //     e.preventDefault()
    //     if (!isLogin) {
    //         setIsLogin(true);
    //         await doSignInWithEmailAndPassword(email, password)
    //     }

    // }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isLogin) {
            setIsLogin(true);
            setLogging(false);
            doSignInWithGoogle().catch(err => {
                setIsLogin(false);
                console.log(err);
            })
        }
    }

    const handleRegister = event => {
        setIsActive(current => !current);
    };

    return (
        <>
            <div className='login-body'>
                <div className={isActive ? 'login-container login-active' : 'login-container'} id="login-container">
                    <div className='login-form-container login-sign-up'>
                        <form method='POST'>
                            <h1 className='login-signup-head' style={{
                                fontFamily: 'Montserrat',
                                color: 'black'
                            }}>Create Account</h1>
                            <div className="login-social-icons">
                                <a className="icon"><i className="fa-brands fa-google-plus-g"><img onClick={doSignInWithGoogle} src={assets.google} alt="" /></i></a>
                                <a className="icon"><i className="fa-brands fa-facebook-f"><img onClick={doSignInWithFacebook} src={assets.facebook} alt="" /></i></a>
                                <a className="icon"><i className="fa-brands fa-github"><img onClick={doSignInWithGitHub} src={assets.github} alt="" style={{ width: '30px' }} /></i></a>
                                <a className="icon"><i className="fa-brands fa-linkedin-in"><img onClick={doSignInWithTwitter} src={assets.twitter_icon} alt="" /></i></a>
                            </div>
                            <span style={{ color: 'black' }}>or use your email for registeration</span>
                            <input className='class-input' onChange={(e) => { setname(e.target.value) }} type="text" placeholder='Name' />
                            <input className='class-input' onChange={(e) => { setemail(e.target.value) }} type="email" placeholder="Email" />
                            <input className='class-input' onChange={(e) => { setpassword(e.target.value) }} type="password" placeholder="Password" />
                            <button name='data' type='button' onClick={handlesignupbtn}>Sign Up</button>
                        </form>
                    </div>
                    <div className="login-form-container login-sign-in">
                        <form action="">
                            <h1 className='login-signin-head' style={{ color: 'black', fontFamily: 'Montserrat' }}>Sign In</h1>
                            <div className="login-social-icons">
                                <a className="icon"><i className="fa-brands fa-google-plus-g"><img onClick={doSignInWithGoogle} src={assets.google} alt="" /></i></a>
                                <a className="icon"><i className="fa-brands fa-facebook-f"><img onClick={doSignInWithFacebook} src={assets.facebook} alt="" /></i></a>
                                <a className="icon"><i className="fa-brands fa-github"><img onClick={doSignInWithGitHub} src={assets.github} alt="" style={{ width: '30px' }} /></i></a>
                                <a className="icon"><i className="fa-brands fa-linkedin-in"><img onClick={doSignInWithTwitter} src={assets.twitter_icon} alt="" /></i></a>
                            </div>
                            <span style={{ color: 'black' }}>or use your email password</span>
                            <input className='class-input' onChange={(e) => { setemail(e.target.value) }} type="email" placeholder="Email" />
                            <input className='class-input' onChange={(e) => { setpassword(e.target.value) }} type="password" placeholder="Password" />
                            <a href="#" style={{ color: 'black' }}>Forget Your Password?</a>
                            <button type='button' onClick={() => { handlesigninbtn() }}>Log In</button>
                        </form>
                    </div>
                    <div className="login-toggle-container">
                        <div className="login-toggle">
                            <div className="login-toggle-panel login-toggle-left">
                                <h1 className='login-signup-head'>Welcome Back!</h1>
                                <p>Enter your details to Sign-In with CodeAlchemy AI </p>
                                <button className="login-hidden" onClick={handleRegister} id="login-login">Log In</button>
                            </div>
                            <div className="login-toggle-panel login-toggle-right">
                                <h1 className='login-signin-head'>Hello, Friend!</h1>
                                <p>Register with your personal details to use all the features of CodeAlchemy AI</p>
                                <button className='login-hidden' onClick={handleRegister} id="login-register">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='login-goto-home' onClick={() => { setLogging(false) }} >Go To Home</button>
            </div>
        </>
    )
}

export default Loginpage;