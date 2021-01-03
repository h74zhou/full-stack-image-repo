import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './styles';

import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';

const Post = ({ post, setcurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      ></CardMedia>
      <Typography className={classes.title} variant='h5'>
        {post.title}
      </Typography>
      <CardContent style={{ paddingTop: 0 }}>
        <Typography variant='body2' color='textSecondary' component='p'>
          By: {post.creator}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant='body1' color='textPrimary' component='p'>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size='small'
          color='primary'
          onClick={() => setcurrentId(post._id)}
        >
          <EditIcon fontSize='small' />
          &nbsp; Edit &nbsp;
          {post.likeCount}
        </Button>
        <Button
          size='small'
          color='primary'
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
