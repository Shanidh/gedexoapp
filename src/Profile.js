import React from 'react';
import './Profile.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Profile() {
    return (
        <div className='profilestyle'>
            <br />
            <div>
                <button className='but'><Link to='/profile'>Edit profile</Link></button>
                <button className='but'><Link to='/partner'>partner preferences</Link></button>
                <button className='but'>Manage photos</button>
            </div>
            <div className='profilecard row col-md-10'>
                <div style={{height:'200px', width:'200px', paddingTop:'50px', paddingLeft:'50px', borderRadius:'10px'}}>
                <img src="C:\Users\user\Downloads\download.png" alt=""  />
                </div>
                <div style={{color:'white', paddingLeft:'50px', width:'500px'}}>
                    <h6 style={{textAlign:'center', paddingTop:'5px'}}>Name</h6>
                    <hr />
                    <p style={{textAlign:'center'}}>Calicut , Kerala , India/UAE</p>
                    <p style={{textAlign:'center'}}>Marital Status &nbsp;&nbsp; :  &nbsp;&nbsp;  Never Married</p>
                    <p style={{textAlign:'center'}}>Marital Status &nbsp;&nbsp; : &nbsp;&nbsp;   Never Married</p>
                    <p style={{textAlign:'center'}}>Marital Status &nbsp;&nbsp; : &nbsp;&nbsp;   Never Married</p>
                    <p style={{textAlign:'center'}}>Marital Status &nbsp;&nbsp; : &nbsp;&nbsp;   Never Married</p>
                </div>
            </div><br />
            <div className='personalinfo'>
            <div><p><b>Physical Informations</b></p></div><br />
           <div><label>Height</label><br />
           <select name="Height" id="Height">
            <option value="select">select</option>
            <option value="100cm">100cm</option>
            </select></div><br />
            <div><label>Weight</label><br />
           <select name="Weight" id="Weight">
            <option value="select">select</option>
            <option value="100cm">100cm</option>
            </select></div><br />
            <div><label>Physical Status</label><br />
           <select name="Physical Status" id="Physical Status">
            <option value="select">select</option>
            <option value="100cm">100cm</option>
            </select></div><br />
            <div><label>Complexion</label><br />
           <select name="Complexion" id="Complexion">
            <option value="select">select</option>
            <option value="100cm">100cm</option>
            </select></div><br />
            <div><label>Body Type</label><br />
            <select name="Body Type" id="Body Type">
            <option value="select">select</option>
            <option value="100cm">100cm</option>
            </select></div><br /><br />
            <div><button className='nextbutton'>Next</button></div>
            <br />
            </div>
        </div>
    )
}

export default Profile;