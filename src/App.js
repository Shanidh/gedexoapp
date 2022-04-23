import './App.css';
import React from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import { ProgressBar } from 'react-bootstrap';


function App() {
   
  return (
    <div className="App">
     <ButtonAppBar />
     <div className='main'>
         <center>
         <div className='sub-main'> 
         <small style={{paddingRight:'120px'}}>40%</small> 
         <ProgressBar variant="success" now={40} style={{width:'200px', marginLeft:'40px', height:'5px'}} /><br />
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
         </center>
         <br /><br />
         <div className='row footerr'>
           <div className='float1' style={{width:"225px"}}>
             <p><b>Helpline 24/7</b></p>
             <p>+91 000000000</p>
           </div>
           <div  className='float2'  style={{width:"225px"}}>
             <p><b>Send your queries</b></p>
             <p>matrimony@gmail.com</p>
           </div>
         </div><br />
         <p style={{color: 'white'}} >Copyright &#169; 2022. All Right Reserved</p>
     </div>

    </div>
  );
}

export default App;







