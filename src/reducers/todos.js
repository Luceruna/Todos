const todos = (state = [], action) => {
    switch (action.type) {
        case 'AddTodo':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'ToggleTodo':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        default:
            return state
    }
}

export default todos