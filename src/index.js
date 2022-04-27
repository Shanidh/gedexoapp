import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login';
import Profile from './Profile';
import EditProfile from './EditProfile';
import Partner from './Partner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <div> 
   <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
             <Route path="login" element={<Login />} /> 
             <Route path="profile" element={<Profile/>} >
               {/* <Route path="editprofile" element={< EditProfile/>} /> */}
             </Route>
             <Route path="partner" element={<Partner/>} />
             </Routes>
        </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
