import React, {Component} from 'react'
import axios from 'axios'

export default class CreateTodo extends Component {
  constructor() {
    super()
    this.state = {
      taskName: '',
      assignee: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit (event){
    event.preventDefault()
    const res = await axios.post('/api/todos/', this.state)
    this.props.addTodo(res.data)
    this.setState({
      taskName: '',
      assignee: ''
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='taskName'>Task Name</label>
        <input type='text' name='taskName' onChange={this.handleChange} value={this.state.taskName} />

        <label htmlFor='assignee'>Assign To:</label>
        <input type='text' name='assignee' onChange={this.handleChange} value={this.state.assignee} />

        <button type='submit'>Submit</button>
      </form>
    )
  }
}
