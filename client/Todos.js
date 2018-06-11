import React, {Component} from 'react'
import axios from 'axios'
import Todo from './Todo'
import CreateTodo from './CreateTodo'

export default class Todos extends Component {
  constructor () {
    super()
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  async componentDidMount () {
    const res = await axios.get('/api/todos')
    this.setState({todos: res.data})
  }

  addTodo (todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  async removeTodo (todoId){
    const res = await axios.delete(`/api/todos/${todoId}`)
    const todos = this.state.todos.filter(todo => todoId !== todo.id)
    this.setState({todos})
  }

  render () {
    return (
      <div id='todos'>
        <CreateTodo addTodo={this.addTodo} />
        {
          this.state.todos.map(todo => <Todo todo={todo} key={todo.id} removeTodo={this.removeTodo} />)
        }
      </div>
    )
  }
}
