import React from 'react'
import "./addUser.css"

const AddUser = ({onAdd}) => {
  

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value,e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
}
  return (
    <div className="container">
        <form onSubmit={handleOnSubmit}>
            <h3>Add User</h3>
            <input placeholder="name" name="name" />
            <input placeholder="email" name="email" />
            <button className="add-btn" onSubmit={handleOnSubmit}>Add</button>
        </form>
    </div>
  )
}

export default AddUser