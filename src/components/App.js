import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import DeleteTodo from '../containers/DeleteTodo'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <DeleteTodo />
    </div>
);

export default App