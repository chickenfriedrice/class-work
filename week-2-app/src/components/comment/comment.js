import React from 'react';

import './comment.css'


export const Comment = (props) => (
  <div>
    <b>{props.owner}</b> {props.text} 
  </div>
);
