import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import Mainhead from './Mainhead'
import Mainchat from './Mainchat'
import Translate from './Translate'
import Debug from './Debug'
import Explain from './Explain'
import Sidebar from '../Sidebar/Sidebar'
import { curve, heroBackground, robot } from "../../assets";
import { BackgroundCircles } from '../design/Hero'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, isLogin, isTranslate, isDebug, isExplain, isHome } = useContext(Context)

    return (
        <>
            <div className="main-sidebar">
                <Sidebar />
                <div className='main' style={{
                    backgroundImage: `url(${heroBackground})`,
                    backgroundSize: 'cover', // Adjust as needed (e.g., 'contain', 'auto')
                    backgroundPosition: 'center', // Adjust as needed
                    height: '100vh', // Set height as needed
                    width: '100%', // Set width as needed
                    position: 'relative'
                }}>
                    <div style={{ zIndex: '1' }}>
                        <Mainhead />
                        {isHome ? <Mainchat /> : null}
                        {isTranslate ? <Translate /> : null}
                        {isDebug ? <Debug /> : null}
                        {isExplain ? <Explain /> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main