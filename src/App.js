import React, { useState, useEffect } from 'react';
import './App.css';
import AddPost from './components/AddPost';

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

  const onAdd  = async (title, body) => {
    await fetch('http://jsonplaceholder.typicode.com/users/1/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
    .then((res) => {
      if(res.status != 201){
        return
      }else{
        return res.json()
      }
    })
    .then((data) => {
      setPosts((posts) => [...posts, data]);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const onDelete = async (id) => {
    await fetch(`http://jsonplaceholder.typicode.com/users/1/posts/${id}`, {
      method: 'DELETE',
    })
  }


  console.log(posts);

  return (
    <div className="App">
      <h3>CRUD App using JsonPlaceholder</h3>
      <br />
      <AddPost onAdd={onAdd} />
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
