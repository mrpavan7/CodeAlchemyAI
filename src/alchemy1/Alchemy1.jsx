import React, { useContext } from 'react'
import { Context } from '../context/Context'
import Sidebar from '../components/Sidebar/Sidebar'
import Loginpage from '../components/Loginpage/Loginpage'
import Main from '../components/Main/Main'
import './Alchemy1.css'

const Alchemy1 = () => {
    const { logging } = useContext(Context)
    return (
        <>
            {logging ? <Loginpage /> : null}
            {!logging ? <Main /> : null}
            {/* <Loginpage /> */}
        </>
    )
}

export default Alchemy1