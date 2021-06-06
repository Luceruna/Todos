import React from 'react'
import AddTodo from '../containers/AddTodo'
import ViewTodo from '../containers/ViewTodo'
import Footer from './Footer'

const App = () => (
    <div>
        <AddTodo />
        <ViewTodo />
        <Footer />
    </div>
)

export default App