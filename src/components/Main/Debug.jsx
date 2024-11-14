import React, { useContext, useState } from 'react'
import './Debug1.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import { BackgroundCircles } from '../design/Hero'


const Debug = () => {

    const { debugInput, setDebugInput, debugLoading, handleDebugBtn, debuggedResult, debugResultData } = useContext(Context)

    return (
        <>
            <div className='debug-container'>
                <div className='debugcircles' style={{ position: 'relative', zIndex: '0', top: '65vh', }}><BackgroundCircles /></div>
                {/* <div className='debug-head'>
                    <p>Code Debugging</p>
                </div> */}
                <div className='debug-input-container'>
                    <textarea onChange={(e) => setDebugInput(e.target.value)} value={debugInput} placeholder='Enter Your Code Here' className='language-debug-input bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex' name="" id="" cols="30" rows="10"></textarea>
                    {/* <img src={assets.loading_icon} alt="" /> */}
                    {debugLoading ? <span className="debug-loader"></span> : null}
                    {debugResultData ? <div id='output-div1' className='language-debug-output bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex' dangerouslySetInnerHTML={{ __html: debugResultData }} ></div> : <div id='output-div1' className='language-debug-output bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex' >{debugLoading ? <div>
                    </div> : null}Debugged Code...</div>}
                </div>

                <div className="explain-btn-container">
                    <button onClick={handleDebugBtn} className="btn">Debug</button>
                </div>
            </div>
        </>
    )
}

export default Debug;