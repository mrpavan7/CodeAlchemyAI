import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = () => {

    const [extended, setextended] = useState(false)
    const { onSent, prevPrompts, setRecentPrompt, newChat, isTranslate, isHome, transPrompts, setTransPrompts, loadTransPrompt } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }


    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setextended(prev => !prev)} className='menu' src={assets.menu_icon2} style={{ width: '20px' }} alt="" />
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon2} alt="" style={{ width: '30px' }} />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended
                    ? <div className="recent">
                        <p className="recent-title">Recent</p>
                        {isTranslate ?
                            <div>
                                {transPrompts.map((item, index) => (
                                    <div key={index} onClick={() => loadTransPrompt(item)} className="recent-entry">
                                        <img src={assets.message_icon} alt="Message Icon" />
                                        <p>{item.transInput.slice(0, 18)} ...</p>
                                    </div>
                                ))}
                            </div> : null}
                        {isHome ?
                            <div>
                                {prevPrompts.map((item, index) => {
                                    return (
                                        <div onClick={() => loadPrompt(item)} className="recent-entry">
                                            <img src={assets.message_icon} alt="" />
                                            <p>{item.slice(0, 18)} ...</p>
                                        </div>
                                    )
                                })}
                            </div> : null}
                    </div> : null
                }
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.help_icon2} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.feedback_icon} alt="" />
                    {extended ? <p>Feedback</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar