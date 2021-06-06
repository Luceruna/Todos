import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'ShowAll':
            return todos
        case 'ShowCompleted':
            return todos.filter(t => t.completed)
        case 'ShowActive':
            return todos.filter(t => !t.completed)
        default:
            return todos
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.viewFilter)
})

const mapDispatchToProps = dispatch => ({
    onTodoClick: id => { dispatch(toggleTodo(id)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)