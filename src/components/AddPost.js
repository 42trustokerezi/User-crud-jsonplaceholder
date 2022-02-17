import React from 'react'

const AddPost = ({onAdd}) => {

const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.title.value, e.target.body.value);
    e.target.title.value = "";
    e.target.body.value = "";
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3>Add Post</h3>
            <input placeholder="title" name="title" />
            <textarea placeholder="content" name="body" />
            <button onSubmit={handleSubmit}>Add</button>
        </form>
    </div>
  )
}

export default AddPost