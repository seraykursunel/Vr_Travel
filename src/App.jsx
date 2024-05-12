import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import generateMessage from './utilities/generateMessage'
import './styles.css'
export default function App() {
  const [userData, setUserData] = useState({
    hasEntered: false,
    pageLoadTime: new Date(),
    entranceTime: undefined,
    clickCoordinates: { offsetX: undefined, offsetY: undefined },
  })

  if (userData.hasEntered) {
    generateMessage(userData)
  }

const handleClick = (e) => {
setUserData({...userData, hasEntered: true, entranceTime: new Date (), clickCoordinates:{offsetX: e.clientX, offsetY:e.clientY}} )
}



  return (
    <div>
      <button
        disabled={userData.hasEntered}
        className={userData.hasEntered ? 'activated' : 'unactivated'}
        onClick={handleClick}
      >
        {userData.hasEntered ? 'Bağlanıyor...' : 'Enter'}
      </button>

      <WelcomeMessage userData={userData} />
    </div>
  )
}
