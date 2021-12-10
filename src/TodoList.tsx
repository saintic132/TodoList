import React from "react";
import s from './TodoList.module.css'
import {FilterType} from "./App";
import {AddItemForm} from "./AddItemForm";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListType = {
    id: string
    title: string
    tasks: Array<TaskType>
    filter: FilterType
    removeTaskFromTasks: (idTd: string ,id: string) => void
    addNewTask: (id: string, newTitle: string, newStatus: boolean) => void
    changeStatusTask: (idTd: string, id: string, status: boolean)  => void
    changeStatusTodoList: (id: string, fl: FilterType) => void
    removeTodoLists: (idTd: string) => void
}

function TodoList(props: TodoListType) {

    const onClickSetFilterToAll = () => {
        props.changeStatusTodoList(props.id,'all')
    }
    const onClickSetFilterToActive = () => {
        props.changeStatusTodoList(props.id,'active')
    }
    const onClickSetFilterToCompleted = () => {
        props.changeStatusTodoList(props.id,'completed')
    }
    const onClickHandlerRemoveTodoList = () => {
        props.removeTodoLists(props.id)
    }

    return (
        <div className={s.styleForTodolist}>
            <h3>{props.title}
            <button className={s.marginToRemoveButton} onClick={onClickHandlerRemoveTodoList}>x</button>
            </h3>

            <AddItemForm
                id={props.id}
                tasks={props.tasks}
                addNewTask={props.addNewTask}
                checkbox
            />

            <ul>
                {
                    props.tasks.map(t => {

                        const onClickRemoveTaskFromTodolist = () => {
                            props.removeTaskFromTasks(props.id, t.id)
                        }
                        const onClickChangeStatusForTask = (e: React.MouseEvent<HTMLInputElement>) => {
                            props.changeStatusTask(props.id, t.id, e.currentTarget.checked)
                        }


                        return (
                            <li key={t.id} className={t.isDone ? s.completedTask : ''}>
                                <input type="checkbox" checked={t.isDone} onClick={onClickChangeStatusForTask}/>
                                <span>{t.title}</span>
                                <button className={s.marginToRemoveButton}
                                        onClick={onClickRemoveTaskFromTodolist}>x
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button className={props.filter=== 'all' ? s.filterForTasks : ''} onClick={onClickSetFilterToAll}>All</button>
                <button className={props.filter=== 'active' ? s.filterForTasks : ''} onClick={onClickSetFilterToActive}>Active</button>
                <button className={props.filter=== 'completed' ? s.filterForTasks : ''} onClick={onClickSetFilterToCompleted}>Completed</button>
            </div>
        </div>
    )
}

export default TodoList

