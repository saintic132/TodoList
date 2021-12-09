import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import TodoList from "./TodoList";

export type FilterType = 'all' | 'active' | 'completed'
type TodolistsType = {
    id: string
    title: string
    filter: FilterType
}

function App() {

    let td1 = v1()
    let td2 = v1()

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: td1, title: 'What to learn', filter: 'all'},
        {id: td2, title: 'What to buy', filter: 'all'}
    ]);

    let [tasks, setTasks] = useState({
        [td1]: [{id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'CSS', isDone: true},
            {id: v1(), title: 'React', isDone: false}
        ],
        [td2]: [{id: v1(), title: 'Bread', isDone: true},
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Books', isDone: false}
        ]
    });

    const changeStatusTodoList = () => {

    }

    const addNewTask = (newTitle: string, newStatus: boolean) => {
        let newTask = {id: v1(), title: newTitle, isDone: newStatus}
        setTasks([newTask, ...tasks])
    }
    const removeTaskFromTasks = (id: string) => {
        let task = tasks.filter(el => el.id !== id)
        setTasks([...task])
    }
    const changeStatusTask = (id: string, status: boolean) => {
        let task = tasks.find(el => el.id === id)
        if (task) {
            task.isDone = status
            setTasks([...tasks])
        }
    }


    return (
        <div>
            {
                todolists.map(t => {

                    let filteredTasks = tasks
                    if (t.filter === 'active') {
                        filteredTasks = filteredTasks.filter(el => !el.isDone)
                    }
                    if (t.filter === 'completed') {
                        filteredTasks = filteredTasks.filter(el => el.isDone)
                    }

                    return (
                        <TodoList
                            id={t.id}
                            title={t.title}
                            tasks={filteredTasks}
                            removeTaskFromTasks={removeTaskFromTasks}
                            addNewTask={addNewTask}
                            changeStatusTask={changeStatusTask}
                        />
                    )
                })
            }
        </div>

    );
}

export default App;