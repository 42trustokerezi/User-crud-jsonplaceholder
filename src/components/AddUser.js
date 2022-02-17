import React from 'react'

const AddUser = ({onAdd}) => {

const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3>Add Post</h3>
            <input placeholder="name" name="name" />
            <input placeholder="email" name="email" />
            <button onSubmit={handleSubmit}>Add</button>
        </form>
    </div>
  )
}

export default AddUser