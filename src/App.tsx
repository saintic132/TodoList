import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import TodoList from "./TodoList";
import {AddItemForm} from "./AddItemForm";

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

    const changeStatusTodoList = (id: string, fl: FilterType) => {
        let tdFind = todolists.find(el => el.id === id)
        if (tdFind) {
            tdFind.filter = fl
            setTodolists([...todolists])
        }
    }

    const removeTodoLists = (idTd: string) => {
        let findTd = todolists.filter(el => el.id !== idTd)
        setTodolists([...findTd])
        delete tasks[idTd]
        setTasks({...tasks})
    }

    const addNewTask = (id: string, newTitle: string, newStatus: boolean) => {
        let newTask = {id: v1(), title: newTitle, isDone: newStatus}
        tasks[id] = [newTask, ...tasks[id]]
        setTasks({...tasks})
    }
    const removeTaskFromTasks = (idTd: string ,id: string) => {
        tasks[idTd] = tasks[idTd].filter(el => el.id !== id)
        setTasks({...tasks})
    }
    const changeStatusTask = (idTd: string, id: string, status: boolean) => {
        let task = tasks[idTd].find(el => el.id === id)
        if (task) {
            task.isDone = status
            setTasks({...tasks})
        }
    }

    return (

        <div>
            <AddItemForm  addNewTask={() => {}} id={'ssss'} tasks={tasks[td1]}/>
            {
                todolists.map(t => {

                    let filteredTasks = tasks[t.id]
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
                            filter={t.filter}
                            removeTaskFromTasks={removeTaskFromTasks}
                            addNewTask={addNewTask}
                            changeStatusTask={changeStatusTask}
                            changeStatusTodoList={changeStatusTodoList}
                            removeTodoLists={removeTodoLists}
                        />
                    )
                })
            }
</div>
    );
}

export default App;