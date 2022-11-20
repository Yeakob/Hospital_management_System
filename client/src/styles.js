import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({



  appBarSearch:{
   borderRadius:4,
   marginBottom:'1rem',
   display:'flex',
   padding:'16px',


  },
  ul:{
    justifyContent: 'space-around'
  },

  gridContainer:{
     [theme.breakpoints.down('xs')]:{
      flexDirection:'column-reverse',
     },
  },
  AppBar: {
    borderRadius: 15,
   
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
}));
