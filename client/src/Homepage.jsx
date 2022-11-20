import React, { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid,Paper,TextField,Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import './Style.css'
import Pagination from './Pagination';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts, getPatientBySearch } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png'; 


function useQuery ()
{
  return new URLSearchParams(useLocation().search);
}

const Homepage = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const query= useQuery();
    const page = query.get('page') || 1;
    const classes = useStyles();
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();
    
  const searchPatient = () =>
   {
    if (search.trim() || tags)
    {
      dispatch(getPatientBySearch({ search, tags: tags.join(',') }));
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    }  else{
     navigate('/')
    }
   };

    const handlekeypress =(e)=>
    {
        if(e.key === 'Enter'){
           searchPatient();
    }
  }

   const handleadd = (tag) =>setTags([...tags,tag])

   const handledelete = (tagToDelete) =>setTags(tags.filter((tag) => tag !== tagToDelete))

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  const d = new Date();
  let day = days[d.getDay()];
  
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  return (
    <div className=' w-full absolute bg-slate-600'>
    <div className='fixed z-20 h-[5rem] lg:pl-[5rem] flex mb-10 p-2 shadow-xl bg-white flex-row w-full flex-wrap justify-between items-center' position="static" color="inherit">
   <div className='lg:w-1/2 h-auto flex flex-row flex-wrap'>
   <img className='h-[4rem] w-[4rem]' src={memories} alt="icon" height="70" />
    <Link className='mt-5 h-full font-mono font-bold text-green-500 text-3xl' to='/posts'>Dream-line Hospital </Link>
   </div>
     
    <Link className=' bg-red-500 py-2 px-7 lg:mr-[5rem]' to='/Login'>Log Out </Link>
    </div>
    <div className='bgc right-0 w-full absolute p-10'>
    
    <h1 className='pt-[7rem]  text-2xl font-bold p-5 pl-10 w-[20rem] items-start text-blue-400 bg-white'>
      Hello! <br /> Doctor <span className='text-green-500'> {localStorage.getItem('hardikSubmissionName').replace(/"/g, "")}</span> <br/>
      <span style={{color:"red"}}>{day}-{formatAMPM(new Date())}</span>
      
    </h1>
    <Grow in>
      <Container maxWidth='xl'>
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paperContainer} style={{marginTop:'-10rem',borderRadius: '5px'}} elevation={6}>
          
            <div className='flex flex-wrap py-5 m-8 justify-center' position="static" color='inherit' >
              <TextField
              name='search'
              variant='outlined'
              onKeyPress={handlekeypress}
              label='Patient Type'
              fullWidth
              value={search}
              onChange={(e) =>setSearch(e.target.value)}
               />
              <ChipInput 
              style={{margin:'7px 0'}}
              className='w-full'
              value={tags}
              onAdd={handleadd}
              onDelete={handledelete}
              label='Patient tags'
              variant='outlined'
              />
              <Button onClick={searchPatient} variant='contained' className='w-full' color='secondary'>Search</Button>
            </div>
            </Paper>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {(!searchQuery && !tags.length) && (
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}
          </Grid> 
        </Grid>
      </Container>
    </Grow>
  </div>
</div>
   
  );
};
export default Homepage;
