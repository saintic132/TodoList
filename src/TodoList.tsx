import React, {useState} from "react";
import s from './TodoList.module.css'
import {FilterType} from "./App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListType = {
    title: string
    tasks: Array<TaskType>
    removeTaskFromTasks: (id: string) => void
    setFilter: (fl: FilterType) => void
    addNewTask: (title: string) => void
}

function TodoList(props: TodoListType) {

    let [inputNewValue, setInputNewValue] = useState('');

    const addTask = () => {
        if (inputNewValue.trim()) {
            props.addNewTask(inputNewValue)
            setInputNewValue('')
        }
    }

    const onClickSetFilterToAll = () => {
        props.setFilter('all')
    }
    const onClickSetFilterToActive = () => {
        props.setFilter('active')
    }
    const onClickSetFilterToCompleted = () => {
        props.setFilter('completed')
    }
    const onChangeHandlerInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputNewValue(e.currentTarget.value)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={inputNewValue} onChange={onChangeHandlerInputValue}/>
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => {

                        const onClickRemoveTaskFromTodolist = () => {
                            props.removeTaskFromTasks(t.id)
                        }

                        return (
                            <li key={t.id}>
                                <input type="checkbox" checked={t.isDone}/>
                                <span>{t.title}</span>
                                <button className={s.marginToRemoveTaskButton} onClick={onClickRemoveTaskFromTodolist}>x</button>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button onClick={onClickSetFilterToAll}>All</button>
                <button onClick={onClickSetFilterToActive}>Active</button>
                <button onClick={onClickSetFilterToCompleted}>Completed</button>
            </div>
        </div>
    )
}

export default TodoList