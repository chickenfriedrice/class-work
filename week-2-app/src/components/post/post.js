import React from 'react';
import './post.css';
import {Comment} from '../comment';

export const Post = (props) => (
  <div className="post">
  <div className="post__header">
    <div>
      <img className="post__avatar" src={props.avatar}/>
      <b>{props.owner}</b>
    </div> <div>{props.location}</div></div>
  <img className="post__img" src={props.imageUrl}/>
  <div className="post__comments">
    {props.comments.map(comment => (
      <Comment owner={comment.owner} text={comment.text}/>
    ))}
  </div>
  </div>
);
