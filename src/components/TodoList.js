import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

class TodoList extends Component {
    static PropTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired).isRequired,
        onTodoClick: PropTypes.func.isRequired
    }

    render() {
        const { todos, onTodoClick } = this.props

        return (
            <ul>
                { todos.map(todo => <Todo key = { todo.id } { ...todo } onClick = { () => onTodoClick(todo.id) } />) }
            </ul>
        )
    }
}

export default TodoList