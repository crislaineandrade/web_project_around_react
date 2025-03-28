import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { useState, useEffect } from 'react'
import api from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'



function App() {

  const [currentUser, setCurrentUser] = useState({}) 
  useEffect(() => {
    function getUserInfo() {
      api.getUserInfo().then((userInfo) => {
        console.log(userInfo)
        setCurrentUser(userInfo)
        
      })
    }
    getUserInfo()
  }, [])


  function handleUpdateUser({data}) {

    async () => {
      await api.editProfile({data}).then((newData) => {
        setCurrentUser(newData)
      })
    }
  }

  console.log(currentUser)
  return (
    <>
    <CurrentUserContext.Provider value={{currentUser, handleUpdateUser}}>
    <Header />
    <Main />
    <Footer />
    </CurrentUserContext.Provider>
    
    </>
  )
}

export default App
