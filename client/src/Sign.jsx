import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
import './Style.css'
import { useState } from 'react'
import Tree from './pngwing.com (1).png';
import { TextField, Button, Typography} from '@material-ui/core';

const Sign = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setcode] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !code) {
       

    } else {
        localStorage.setItem("hardikSubmissionName", JSON.stringify(name));
        localStorage.setItem("hardikSubmissionEmail", JSON.stringify(email));
        localStorage.setItem("hardikSubmissionPassword", JSON.stringify(password));
        console.log("Saved in Local Storage");
        alert("Sign UP Successfully")

    }

}




  return (
    <div className='back font-bold h-screen w-full overflow-hidden bg-blue-300'>
    <h1 className='h-[5rem] mt-0 w-full font-bolds items-center flex justify-center shadow-lg p-10 text-3xl font-mono text-green-600 bg-blue-300 '>Dream Line Hospital</h1>
    <div className='w-[25rem] h-[28rem] top-1/5 mt-[6rem] right-10 absolute flex flex-col flex-wrap justify-center items-center shadow-xl bg-green-100'> 
        <Typography className='p-3' variant="h6">{'Sign Up'}</Typography>
        <div className='w-full p-3 flex justify-center items-center'> <TextField className='mt-5 w-2/3' name="Name" onChange={(event) => setName(event.target.value)} variant="outlined" label="User Name" /></div>
        <div className='w-full p-3 flex justify-center items-center'><TextField className='m-3 w-2/3' name="Gmail" variant="outlined" onChange={(event) => setEmail(event.target.value)} label="Gmail"/></div>
        <div className='w-full p-3 flex justify-center items-center'><TextField className='m-3 w-2/3 p-5' name="password" variant="outlined" onChange={(event) => setPassword(event.target.value)}  label="Passward" /></div>
        <div className='w-full p-3 flex justify-center items-center'><TextField className='m-3 w-2/3 p-5' name="Doctor Code" variant="outlined" onChange={(event) => setcode(event.target.value)}  label="Doctor Code" /></div>
        <Button  className='w-1/3 mt-5' variant="contained" style={{backgroundColor:"green",color:"white",fontWeight:"20"}} size="large" type="submit" onClick={handleFormSubmit}><Link to='/Login'>Register</Link></Button>
        
    </div>
    <img className='h-[25rem] absolute left-10 top-1/4 mt-12 mr-20 hidden lg:block' src={Tree} alt="" />
    <div className='h-1/6 w-full border-t-4 border-slate-600 bg-lime-600 absolute bottom-0'></div>
    </div>
  )
}

export default Sign
