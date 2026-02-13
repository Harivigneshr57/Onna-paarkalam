import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Toaster} from 'react-hot-toast';
import App from "./App.jsx";
import SignIn from "./components/Login-SignIn/SignIn";
import Home from "./components/Home/Home";
import SocialHub from "./components/Social/SocialHub.jsx";
import Discover from "./components/Discover/Discover";
import Profile from "./components/Profile/Profile.jsx"
import { UserProvider } from "./components/Login-SignIn/UserContext.jsx";
import SinglePersonMovie from "./components/Single/SinglePersonMovie.jsx";
import RoomType from "./components/Room/RoomType.jsx";
import Room from "./components/Room/Room.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        
        <Toaster position="top-right" reverseOrder={false} />
        
        <Routes>
          <Route path="/app/" element={<App />} />
          <Route path="/app/signin" element={<SignIn />} />
          <Route path="/app/home" element={<Home />} />
          <Route path="/app/social" element={<SocialHub />} />
          <Route path="/app/discover" element={<Discover />} />
          <Route path="/app/profile" element={<Profile />} />
          <Route path="/app/single" element={<SinglePersonMovie />} />
          <Route path="/app/room" element={<RoomType />} />
          <Route path="/app/createRoom" element={<Room />} />
        </Routes>

      </BrowserRouter>
    </UserProvider>
  </StrictMode>
);

