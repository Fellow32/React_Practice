import React, { useEffect, useState } from 'react'
import './Styles/App.css'
import {BrowserRouter, Link, Redirect, Route, Switch} from 'react-router-dom'
import Navbar from './UI/Navbar/Navbar'
import AppRouter from './UI/AppRouter'
import { AuthContext } from './context'

function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

      useEffect (()=> {
        if(localStorage.getItem('auth')){
          setIsAuth(true)
        }
        setIsLoading(false)
      },[])


    return (
   

      <AuthContext.Provider value ={{
        isAuth,
        setIsAuth,
        isLoading
      }}>
         
      <BrowserRouter>
      <Navbar/>   
      <AppRouter/>


   </BrowserRouter>

      </AuthContext.Provider>
    
  



    )
  }


export default App