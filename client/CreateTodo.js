import React, {Component} from 'react'
import axios from 'axios'
import TodoForm from './TodoForm'

export default class CreateTodo extends Component {
  constructor() {
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
      const res = await axios.post('/api/todos/', this.state)
      this.props.addTodo(res.data)
      this.setState({
        taskName: '',
        assignee: ''
      })
    } catch (error) {
      this.setState({
        error: 'Unable to perform action: ' + error.message
      })
    }

  }

  render () {
    return (
      <TodoForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        {...this.state}
      />
    )
  }
}
