import React, { useContext } from 'react'
import './Mainchat.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import { BackgroundCircles } from '../design/Hero'



const Mainchat = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, user, setInput, input, isLogin, setIsTranslate, setIsDebug, setIsExplain, handleTranslate, handleExplain, handleDebug, username, userDetails } = useContext(Context)
    function handleKeyDown(event) {
        if (event.keyCode === 13) {
            onSent();
        }
    }
    return (
        <>
            <div className="main-container">
                <div className='maincircle' style={{ position: 'relative', zIndex: '0', top: '60vh', }}><BackgroundCircles /></div>

                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello,{isLogin ? userDetails ? userDetails.userName : username : "Guest"}.</span></p>
                            <p>How Can I Help You Today?</p>
                        </div>
                        <div className="cards">
                            <div className=" card2 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex" id='div-tranlate' onClick={handleTranslate}>
                                <p>Convert your code across languages</p>
                                <img className="card-img" src={assets.chat_icon2} alt="" />
                            </div>
                            <div className="card2 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex" id='div-debug' onClick={handleDebug}>
                                <p>Check erros in your code and Debug them</p>
                                <img className="card-img" src={assets.code_icon2} alt="" />
                            </div>
                            <div className="card2 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex" id='div-explain' onClick={handleExplain}>
                                <p>Get an explanation for your code</p>
                                <img className="card-img" src={assets.bulb_icon2} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data" style={{ position: 'relative', left: '-6%', zIndex: '1' }}>
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }} style={{ height: '60%' }}></p>
                            }

                        </div>
                    </div>
                }


                <div className="main-bottom">
                    <div className="search-box bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                        <input id='ask-input' onKeyDown={handleKeyDown} onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Ask me Anything' />
                        <div>
                            {!input ? <img src={assets.send_icon2} alt="" /> : null}
                            {/* <img src={assets.mic_icon} alt="" /> */}
                            {input ? <img id='send-img' onClick={() => onSent()} src={assets.send_icon2} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        CodeAlchemy AI may display inaccurate info, including about coding, so double-check its responses.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Mainchat