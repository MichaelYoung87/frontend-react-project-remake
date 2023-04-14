import React from 'react';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';
import ProfileUser from './pages/ProfileUser';
import Logout from './pages/Logout';
import {
  BrowserRouter,
  Route,
  Routes
}
  from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/userprofile" element={<ProfileUser />} />
          <Route path="/logout" element={<Logout />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;