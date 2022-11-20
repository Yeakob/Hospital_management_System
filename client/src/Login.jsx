import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import Tree from './pngwing.com (1).png';
import { TextField, Button, Typography} from '@material-ui/core';

const Login = () => {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag,setflag]=useState("/Login");
  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem('hardikSubmissionPassword').replace(/"/g, "");
    let mail = localStorage.getItem('hardikSubmissionEmail').replace(/"/g, "");
    // .replace(/"/g,"") is used to remove the double quotes for the string

    if (!emaillog || !passwordlog) {

        console.log("EMPTY");
    } else if ((passwordlog === pass) || (emaillog === mail)) {
      setflag("/posts");

    }
    
}

  return (
    <div className='back font-bold h-screen w-full overflow-hidden bg-blue-300'>
    <h1 className='h-[5rem] mt-0 w-full font-bolds items-center shadow-lg flex justify-center p-10 text-3xl font-mono text-red-600 bg-blue-300 '>Dream Line Hospital</h1>
    <div className='w-[25rem] h-[28rem] top-1/4 md:top-1/6 rounded-lg right-10 absolute flex flex-col flex-wrap justify-center items-center shadow-xl bg-green-100'> 
        <Typography className='p-3' variant="h6">{'Log In'}</Typography>
        <div className='w-full p-3 flex justify-center items-center'> <TextField className='mt-5 w-2/3' name="creator" variant="outlined" label="User Name" /></div>
        <div className='w-full p-3 flex justify-center items-center'><TextField className='m-3 w-2/3' name="title" variant="outlined" onChange={(event) => setEmaillog(event.target.value)} label="Gmail"/></div>
        <div className='w-full p-3 flex justify-center items-center'><TextField className='m-3 w-2/3 p-5' name="password" variant="outlined"  onChange={(event) => setPasswordlog(event.target.value)} label="Passward" /></div>
        <Button  className='w-1/3 mt-5'  style={{backgroundColor:"green",color:"white",fontWeight:"20"}} size="large" onClick={handleLogin} type="submit"><Link to={flag}>Submit</Link></Button>
        <p className='text-sm p-4 text-green-800'>Already Have Account or <Link className='text-red-500'  to='/signin'>Sign Up</Link></p>
    </div>
    <img className='h-[25rem] absolute left-10 top-1/4 mt-12 mr-20s hidden lg:block' src={Tree} alt="" />
    <div className='h-1/6 w-full border-t-4 border-slate-600 bg-lime-600 absolute bottom-0'></div>
    </div>
  )
}

export default Login
