import React, { useState, useEffect } from 'react';
import './App.css';

import Post from './components/Post'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    await fetch('http://jsonplaceholder.typicode.com/users/1/posts')
    .then((res) => res.json())
    .then((data) => setPosts(data))
    .catch((err) => {
      console.log(err)
    })
  }


  console.log(posts);

  return (
    <div className="App">
      <h3>CRUD App using JsonPlaceholder</h3>
      <div>
        {
          posts.map((post) => (
            <Post id={post.id} key={post.id} title={post.title} body={post.body} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
