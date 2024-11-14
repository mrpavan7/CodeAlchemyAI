import React, { useContext } from 'react'
import './Mainhead.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import { curve, heroBackground, robot } from "../../assets";
import Button from '../Button';

const Mainhead = () => {

    const imgstyles = () => {
        ;
    }

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, isLogin, isHome, handleBack, setLogging, handleLanding, doSignOut } = useContext(Context)
    return (
        <>
            <div className="nav" style={{ zIndex: '1' }}>
                {!isHome ? <img onClick={handleBack} className='home-btn' src={assets.home_icon} alt="" /> : <img onClick={handleLanding} className='codealchemy_logo' src={assets.code_3} style={{ borderRadius: '0px' }}></img>}
                <p>CodeAlchemy</p>
                {isLogin ?
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                        {/* <img className='profile-img' src={assets.luffy2} alt="" /> */}
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                            {/* <button className='sign-up-btn' onClick={doSignOut}>Sign out</button> */}
                            <img onClick={doSignOut} src={assets.sign_out} alt="" />
                            <p onClick={doSignOut} style={{ fontSize: '16px', cursor: 'pointer' }}>Sign-Out</p>
                        </div>
                    </div> : <>
                        {/* <button className='sign-up-btn' onClick={() => { setLogging(true) }}>Sign Up</button> */}
                        <p className='sign-up-btn' onClick={() => { setLogging(true) }}>Sign-In</p>
                    </>

                }
            </div>

        </>
    )
}

export default Mainhead;