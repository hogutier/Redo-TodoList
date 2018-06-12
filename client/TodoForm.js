import React from 'react'

const TodoForm = (props) => {
  const {handleSubmit, handleChange, taskName, assignee, error, warningMessage} = props
  const isEmpty = !taskName || !assignee

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor='taskName'>
      Task Name:
      {
        !taskName && warningMessage && <span className='warning'>Field is required!</span>
      }
    </label>
    <input type='text' name='taskName' onChange={handleChange} value={taskName} />

    <label htmlFor='assignee'>
      Assign To:
      {
        !assignee && warningMessage && <span className='warning'>Field is required!</span>
      }
    </label>
    <input type='text' name='assignee' onChange={handleChange} value={assignee} />

    <button type='submit' disabled={isEmpty}>Submit</button>
    {
      error && <div className='error'>{error}</div>
    }
  </form>
  )
}

export default TodoForm
