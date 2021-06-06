import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Todo extends Component {
    static PropTypes = {
        onClick: PropTypes.func.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }

    render() {
        const { onClick, completed, text } = this.props

        return (
            <li onClick = { onClick }
                style = { { textDecoration: completed ? 'line-through' : 'none' } }        
            >
                { text }
            </li>
        )
    }
}

export default Todo