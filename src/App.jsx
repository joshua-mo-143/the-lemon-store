import { useState, useContext } from 'react'
import { AllRoutes } from './pages/AllRoutes'
import './styles.css'

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
    <AllRoutes/>
    </>
  )
}

export default App
