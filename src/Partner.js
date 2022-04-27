import React from 'react';
import './Profile.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Partner(props) {
    return (
        <div className='profilestyle'>
          <br />
            <div>
                <button className='but'><Link to='/profile'>Edit profile</Link></button>
                <button className='but'><Link to='/partner'>partner preferences</Link></button>
                <button className='but'>ssdd</button>
            </div>
            <div className='personalinfo1'>
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
    );
}

export default Partner;