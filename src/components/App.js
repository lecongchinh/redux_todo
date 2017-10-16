import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import DeleteTodo from '../containers/DeleteTodo'
import EditTodo from '../containers/EditTodo'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <DeleteTodo />
        <EditTodo/>
    </div>
);

export default App