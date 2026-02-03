import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route,Link,useNavigate, useParams} from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import SignIn from './components/Login-SignIn/SignIn.jsx'
import SocialHub from './components/Social/SocialHub.jsx'
import Discover from './components/Discover/Discover.jsx'
import Home from './components/Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route> 
        <Route path='home' element={<Home/>}></Route>
        <Route path='/social' element={<SocialHub />}></Route>
        <Route path='/discover' element={<Discover />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
