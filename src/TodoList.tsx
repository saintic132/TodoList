import React from "react";
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
}

function TodoList(props: TodoListType) {

    const onClickSetFilterToAll = () => {
        props.setFilter('all')
    }
    const onClickSetFilterToActive = () => {
        props.setFilter('active')
    }
    const onClickSetFilterToCompleted = () => {
        props.setFilter('completed')
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
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