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

    const removeTaskFromTasks = (id: string) => {
        let task = tasks.filter(el => el.id !== id)
        setTasks([...task])
    }

    return (
        <TodoList
            title='What to learn'
            tasks={tasks}
            removeTaskFromTasks={removeTaskFromTasks}
        />
    );
}

export default App;