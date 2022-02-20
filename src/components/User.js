import React, {useState} from 'react'
import './user.css'

const User = ({id, name, email, onEdit, onDelete}) => {
    const [isEdit, setIsEdit] = useState(false)

    const handleEdit = () => {
      setIsEdit(!isEdit)
    }

    const handleDelete = () => {
        onDelete(id)
    }

    const handleEditSubmit = (e) => {
      e.preventDefault();
      onEdit(id, e.target.name.value, e.target.email.value)
      setIsEdit(!isEdit);
    }

  return (
        <div>
          {isEdit ? (
            <form onSubmit={handleEditSubmit}>
              <input placeholder="Name" name="name" defaultValue={name} />
              <input placeholder="Email" name="email" defaultValue={email} />
              <button className="save-btn" onSubmit={handleEditSubmit}>Save</button>
            </form>
          ): (
            <div className="list">
              <span>{name}</span>
              <span>{email}</span>
              <span>
                  <button  onClick={handleEdit} className="primary">edit</button>
                  <button className="danger" onClick={handleDelete}>delete</button>
            </span>
            </div>
          )}
        </div>
  )
}

export default User