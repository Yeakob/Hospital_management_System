import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography,ButtonBase } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';


const Post = ({ post, setCurrentId }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();

 const openPost=()=>
 { 
  navigate(`/posts/${post._id}`)
    
 }

  return (
    <Card className={classes.card} 
    raised elevation={10}
    style={
      post.message.search('critical')> 0
        ? {backgroundColor: 'salmon'}
        :  post.message.search('mid')> 0 ? {backgroundColor: 'powderblue'}:{backgroundColor: '#F0F3F8'} }
        >
      <CardMedia  className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <Typography style={{fontWeight:"bold",textAligne:"centre",padding:"10px",cursor : "pointer"}} className={classes.title} gutterBottom variant="h5" component="h2" onClick={openPost}>{post.title}</Typography>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `${tag}`)}</Typography>
      </div>
     
      
     
      <CardActions className={classes.cardActions}>
        <Button style={{backgroundColor:"ButtonShadow"}} size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>{post.likeCount} Time Visited</Button>
        <Button size="small" style={{color:"red"}} onClick={() => dispatch(deletePost(post._id))}><DeleteIcon style={{color:"red"}} fontSize="small" /> Delete</Button>
      </CardActions>
     
    </Card>
  );
};

export default Post;
