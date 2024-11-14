import React, { useContext } from 'react'
import Alchemy1 from './alchemy1/Alchemy1'
import Alchemy2 from './alchemy2/alchemy2'
import { Context } from './context/Context'
import Loginpage from './components/Loginpage/Loginpage'
import Hero2 from './components/Hero2'

const App = () => {
  const { isLanding, logging, isLogin } = useContext(Context)
  return (
    <>
      {logging ? <Loginpage /> :
        !isLogin ?
          <div>
            {logging ? <Loginpage /> : null}
            {isLanding ? <Alchemy2 /> : null}
            {!isLanding ? <Alchemy1 /> : null}
          </div> :
          <div>
            {<Alchemy1 />}
          </div>
      }
      {/* <Hero2 /> */}
    </>
  )
}

export default App