import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from "uuid";

export type FilterType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML', isDone: false},
        {id: v1(), title: 'CSS', isDone: false},
        {id: v1(), title: 'React', isDone: true}
    ]);
    let [filter, setFilter] = useState<FilterType>('all');

    const removeTasks = (id: string) => {
        let task = tasks.filter(el => el.id !== id)
        setTasks([...task])
    }
    const addTask = (title: string, isDone: boolean) => {
        let newTask = {id: v1(), title: title, isDone: isDone}
        setTasks([newTask, ...tasks])
    }
    const changeStatusForTask = (id: string, status: boolean) => {
       let task = tasks.find(el => el.id === id)
        if (task) {
            task.isDone = status
        }
        setTasks([...tasks])
    }

    let filterTasks = tasks
    if (filter === 'active') {
        filterTasks = filterTasks.filter(el => !el.isDone)
    }
    if (filter === 'completed') {
        filterTasks = filterTasks.filter(el => el.isDone)
    }

    return (
        <div className="App">
            <TodoList
                title='What to learn'
                tasks={filterTasks}
                removeTasks={removeTasks}
                filter={filter}
                setFilter={setFilter}
                addTask={addTask}
                changeStatusForTask={changeStatusForTask}
            />
        </div>
    );
}

export default App;


