import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import TodoList from "./TodoList";

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
    ]);

    return (
        <div className="App">
            <TodoList />
        </div>
    );
}

export default App;