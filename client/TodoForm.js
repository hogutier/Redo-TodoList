import React from 'react'

const TodoForm = (props) => {
  const {handleSubmit, handleChange, taskName, assignee, error} = props
  const isEmpty = !taskName || !assignee
  const validateTask = taskName ? 'hide' : 'warning'
  const validateAssignee = assignee ? 'hide' : 'warning'

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor='taskName'>Task Name:
       <span className={validateTask}>Field is required!</span>
    </label>
    <input type='text' name='taskName' onChange={handleChange} value={taskName} />

    <label htmlFor='assignee'>Assign To:
    <span className={validateAssignee}>Field is required!</span>
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
