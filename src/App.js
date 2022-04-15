import React, { useState } from 'react'
import { BrowserRouter as Router,Link,Route,Routes,Navigate } from 'react-router-dom'
import About from './About'
import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import Signup from './SignUp'

const App = () => {
    const token = localStorage.getItem('token')
    const [isLoggedIn, setIsLoggedIn] = useState(token? true : false)
    return (
        <Router>
            <Nav isLoggedIn={isLoggedIn}/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/login" element={isLoggedIn?<Navigate to="/"/>:<Login setIsLoggedIn={setIsLoggedIn}/>}/>
                <Route exact path="/signup" element={isLoggedIn?<Navigate to="/"/>:<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
                {/* <Route> {login?<Profile/>:<Navigate to="/"/>}</Route> */}
                {/* <Route exact path="*"><Error /></Route> */}
            </Routes>
        </Router>
    )
}

export default App

