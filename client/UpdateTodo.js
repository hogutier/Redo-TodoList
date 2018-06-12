import React, {Component} from 'react'
import axios from 'axios';
import TodoForm from './TodoForm'

export default class UpdateTodo extends Component {
  constructor () {
    super()
    this.state = {
      taskName: '',
      assignee: '',
      error: ''
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
    try {
      const res = await axios.put(`/api/todos/${this.props.todo.id}`, this.state)
      this.props.updateTodo(res.data)
      this.setState({
        taskName: '',
        assignee: ''
      })
    } catch (error) {
      this.setState({
        error
      })
    }

  }

  componentWillReceiveProps (nextProps){
    this.setState({
      taskName: nextProps.todo.taskName,
      assignee: nextProps.todo.assignee
    })
  }

  render () {
    return (
      <TodoForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        taskName={this.state.taskName}
        assignee={this.state.assignee}
        error={this.state.error}
      />
    )
  }
}
