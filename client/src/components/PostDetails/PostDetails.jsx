import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { getPost, getPatientBySearch } from '../../actions/posts';
import useStyles from './styles';
import Posts from '../Posts/Posts';
import memories from '../../images/memories.png'

const Post = () => {
  const { post, posts, isLoading } = useSelector((state)=>state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
   }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(getPatientBySearch({ search: 'none', tags: post?.tags.join(',') }));
    }
  }, [post]);

  if (!post) return null;

  const openPost = (id) => navigate(`/posts/${id}`);

  if (isLoading) {
    return (

      <div className='w-full h-auto'>
        <div className='fixed top-0 z-20 h-[5rem] lg:pl-[5rem] flex mb-10 p-2 shadow-xl bg-white flex-row w-full flex-wrap justify-between items-center' position="static" color="inherit">
           <div className='lg:w-1/2 h-auto flex flex-row flex-wrap'>
           <img className='h-[4rem] w-[4rem]' src={memories} alt="icon" height="70" />
            <Link className='mt-5 h-full font-mono font-bold text-green-500 text-3xl' to='/posts'>Dream-line Hospital </Link>
           </div>
             
            <Link className=' bg-red-500 py-2 px-7 lg:mr-[5rem]' to='/Login'>Log Out </Link>
            </div>
        <dir className='w-full h-screen flex justify-center items-center'>
        <CircularProgress  className=''/>
        </dir>
      </div>
      
    );
  }

  const recommendedPosts = posts.filter(({id}) => id !== post.id);

  return (
  <div className='w-full h-auto flex flex-wrap flex-col justify-center items-center bg-slate-100'>
    <div className='fixed top-0 z-20 h-[5rem] lg:pl-[5rem] flex mb-10 p-2 shadow-lg bg-white flex-row w-full flex-wrap justify-between items-center' position="static" color="inherit">
   <div className='lg:w-1/2 h-auto flex flex-row flex-wrap'>
   <img className='h-[4rem] w-[4rem]' src={memories} alt="icon" height="70" />
    <Link className='mt-5 h-full font-mono font-bold text-green-500 text-3xl' to='/posts'>Dream-line Hospital </Link>
   </div>
     
    <Link className=' bg-red-500 py-2 px-7 lg:mr-[5rem]' to='/Login'>Log Out </Link>
    </div>
    <Paper className='m-20 mt-[7rem] p-10' style={{ padding: '30px', borderRadius: '10px' }} elevation={3}>
      <div className={classes.card}>
        <div className={classes.section} style={{margin : '20px'}}>
          <Typography variant="p" component="h3" className='align-cente font-bold w-full'>Patient Name - <br />  <div className='text-lg text-blue-400 font-mono font-semibold items-center ml-[10rem] shadow-md w-[20rem] text-center p-2 bg-slate-50 rounded-sm'>{post.creator}</div></Typography>
          <Typography variant="p" component="h3">Patient title - <br /><div className='text-lg text-blue-400 font-mono font-semibold items-center ml-[10rem] shadow-md w-[20rem] text-center p-2 bg-slate-50 rounded-sm'>{post.title}</div></Typography>
          <Typography gutterBottom variant="p" component="h3">Patient Condition - <br />  <div className='text-lg text-blue-400 font-mono font-semibold items-center ml-[10rem] shadow-md w-[20rem] text-center p-2 bg-slate-50 rounded-sm'>{post.tags.map((tag) => `${tag} `)}</div></Typography>
          <Typography gutterBottom variant="p" component="h3"> Patient Discription - <br /> <div className='text-lg mt-5 w-[20rem] text-blue-400 font-mono font-semibold items-center ml-[10rem] shadow-md  p-5 text-center bg-slate-50 rounded-sm'>{post.message}</div> </Typography>
          <Typography variant="p" >{post.name}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1">Appointed On - <br /> <div className='text-lg text-blue-400 font-mono font-semibold items-center ml-[10rem] shadow-md w-[20rem] text-center p-2 bg-slate-50 rounded-sm'>{moment(post.createdAt).fromNow()}</div> </Typography>
          
          <Typography variant="body1">Patient Visited - <div className='text-lg text-blue-400 font-mono font-semibold items-center ml-[10rem] shadow-md w-[20rem] text-center p-2 bg-slate-50 rounded-sm'>{post.likeCount} times</div></Typography>
          <Divider style={{ margin: '20px 0' }} />

        </div>
        <div className='w-1/2 p-5 flex justify-center items-center sm:w-full'>
          <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        </div>
      </div>
      {!!recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">Patient As Same Catagory :</Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(({ title, name, message, likes, selectedFile, id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(id)} key={id}>
                <Typography gutterBottom variant="h6">{title}</Typography>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                <Typography gutterBottom variant="subtitle2">{message}</Typography>
                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                <img src={selectedFile} width="200px" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
    </div>
  );
};

export default Post;
