import React from 'react';
import {Post} from '../post';
import './timeline.css'

const posts =[
  {
  avatar: 'https://svasc.net/wp-content/uploads/2016/03/Dog_icon2.png',
  owner: 'vika',
  location: 'Toronto, ON',
  imageUrl: 'https://news.nationalgeographic.com/content/dam/news/photos/000/755/75552.jpg',
  comments:[
    {
      owner:'yazan',
      text:'i like your photo'
    },
    {
      owner:'alex',
      text:'awesome'
    }
    ,{
      owner:'john',
      text:'love this cat'
    }
  ]
},
{
  avatar:"https://svasc.net/wp-content/uploads/2016/03/Dog_icon2.png",
  owner: "vika",
  location:"Toronto, ON",
  imageUrl: "https://s-ec.bstatic.com/images/hotel/max1024x768/779/77996139.jpg",
  comments:[
    {
      owner:'yazan',
      text:'i like your photo'
    },
    {
      owner:'alex',
      text:'awesome'
    }
    ,{
      owner:'john',
      text:'love this cat'
    }
  ]
},
{
  avatar:"https://svasc.net/wp-content/uploads/2016/03/Dog_icon2.png",
  owner: "vika",
  location:"Toronto, ON",
  imageUrl: "https://img.taste.com.au/6PZ8t6W5/taste/2016/11/chocolate-zucchini-spelt-cakes-95628-1.jpeg",
  comments:[
    {
      owner:'yazan',
      text:'i like your photo'
    },
    {
      owner:'alex',
      text:'awesome'
    }
    ,{
      owner:'john',
      text:'love this cat'
    }
  ]
}
]

// const photos = [
//   <div className="timeline__post">
//   <Post
//   avatar="https://svasc.net/wp-content/uploads/2016/03/Dog_icon2.png"
//   owner="vika"
//   location="Toronto, ON"
//   imageUrl = "https://news.nationalgeographic.com/content/dam/news/photos/000/755/75552.jpg" />
// </div>,
// <div className="timeline__post">
// <Post
// avatar="https://svasc.net/wp-content/uploads/2016/03/Dog_icon2.png"
// owner="vika"
// location="Toronto, ON"
// imageUrl = "https://s-ec.bstatic.com/images/hotel/max1024x768/779/77996139.jpg" />
// </div>,
// <div className="timeline__post">
// <Post
// avatar="https://svasc.net/wp-content/uploads/2016/03/Dog_icon2.png"
// owner="vika"
// location="Toronto, ON"
// imageUrl = "https://img.taste.com.au/6PZ8t6W5/taste/2016/11/chocolate-zucchini-spelt-cakes-95628-1.jpeg" />
// </div>
// ];

export const Timeline = () => (
  <div className="timeline">
  <div className="timeline__post-container">

    {posts.map(post =>(
      <div className="timeline__post">
      <Post
      avatar={post.avatar}
      owner={post.owner}
      location={post.location}
      imageUrl = {post.imageUrl}
      comments = {post.comments}
     />
    </div>
    ))}

    </div>
  </div>
);
