import React, { useContext, useState } from 'react'
import './Explain.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import { BackgroundCircles } from '../design/Hero'


const Debug = () => {

    const { explainInput, setExplainInput, explainLoading, handleExplainBtn, explainedResult, explainResultData } = useContext(Context)

    return (
        <>
            <div className='explian-container'>
                <div className='explaincircles' style={{ position: 'relative', zIndex: '0', top: '65vh', }}><BackgroundCircles /></div>
                <div className='explain-input-container'>
                    <textarea onChange={(e) => setExplainInput(e.target.value)} value={explainInput} placeholder='Enter Your Code Here' className='language-input bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex' name="" id="" cols="30" rows="10"></textarea>
                    {/* <img src={assets.loading_icon} alt="" /> */}
                    {explainLoading ? <span className="explain-loader"></span> : null}
                    {explainResultData ? <div id='output-div1' className='language-output bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex' dangerouslySetInnerHTML={{ __html: explainResultData }} ></div> : <div id='output-div1' className='language-output bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex' ></div>}
                </div>

                <div className="explain-btn-container">
                    <button onClick={handleExplainBtn} className="btn">Explain</button>
                </div>
            </div >
        </>
    )
}

export default Debug;