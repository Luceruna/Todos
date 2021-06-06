let todoId = 0

export const addTodo = text => ({
    type: 'AddTodo',
    id: todoId++,
    text
})

export const toggleTodo = id => ({
    type: 'ToggleTodo',
    id
})

export const setVisibleFilter = filter => ({
    type: 'SetVisibleFilter',
    filter
})