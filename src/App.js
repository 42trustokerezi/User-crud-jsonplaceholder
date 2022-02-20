import React, { useState, useEffect } from 'react';
import './App.css';
import AddUser from './components/AddUser';

import User from './components/User'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => {
      console.log(err)
    })
  }

  const onAdd  = async (name, email) => {
    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
    .then((res) => {
      if(res.status !== 201){
        return
      }else{
        return res.json()
      }
    })
    .then((data) => {
      setUsers((users) => [...users, data]);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const onEdit = async (id, name, email) => {
    await fetch (`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: name,
        email: email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then((res) => {
      if (res.status !== 200) {
        return;
      }else {
        return res.json();
      }
    })
    .then((data) => {
      const updatedUsers = users.map((user) => {
        if(user.id === id) {
          user.name = name;
          user.email = email;
        }

        return user;
      });

      setUsers((users) => updatedUsers);
    })
    .catch((err) => console.log(err))
  }

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
    .then((res) => {
      if(res.status !== 200){
        return
      }else{
        setUsers(users.filter((user) => {
          return user.id !== id;
        }))
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }


  console.log(users);

  return (
    <div className="App">
      <h3>CRUD App using JsonPlaceholder</h3>
      <br />
      <AddUser onAdd={onAdd} />
      <div>
        {
          users.map((user) => (
            <div className="container">
              <User id={user.id} key={user.id} name={user.name} email={user.email} onEdit={onEdit} onDelete={onDelete} />
            </div>
            
          ))
        }
      </div>
    </div>
  );
}

export default App;
