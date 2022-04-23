import './Login.css';
import React, { useState, useEffect } from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import CloseIcon from '@mui/icons-material/Close';

function Login() {
   
  return (
    <div>
    <div className="bg-image">
    <ButtonAppBar />
    </div>
    <div class="bg-text">
    <div><p style={{paddingLeft: '130px'}}>Login &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CloseIcon style={{color:'white'}} /></p></div>
           <p>Welcome Back! Please Login</p>
           <div><button className='loginmob'><b> Login with Mobile</b></button></div>
           <br/>
           <p>OR</p>
           <div><label>User name </label>&nbsp;
           <input name="username" id="username" placeholder='assh@gmail.com'>           
            </input></div><br />
            <div><label>Password </label>&nbsp;
           <input name="password" id="password" type='password'>     
            </input>
            </div><br />
            <br />
            <div><button className='nextbutton'>Login</button></div>
            <small><span style={{color:'white'}}>Dont Have an Account?</span>Register Free</small>
            <br />
    </div>
    </div>
  );
}

export default Login;