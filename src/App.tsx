import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import TodoList from "./TodoList";

export type FilterType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
    ]);

    let [filter, setFilter] = useState<FilterType>('all');

    let filteredTasks = tasks
    if (filter === 'active') {
        filteredTasks = filteredTasks.filter(el => !el.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = filteredTasks.filter(el => el.isDone)
    }

    const addNewTask = (newTitle: string, newStatus: boolean) => {
        let newTask = {id: v1(), title: newTitle, isDone: newStatus}
        setTasks([newTask, ...tasks])
    }

    const removeTaskFromTasks = (id: string) => {
        let task = tasks.filter(el => el.id !== id)
        setTasks([...task])
    }

    return (
        <TodoList
            title='What to learn'
            tasks={filteredTasks}
            removeTaskFromTasks={removeTaskFromTasks}
            setFilter={setFilter}
            addNewTask={addNewTask}
        />
    );
}

export default App;