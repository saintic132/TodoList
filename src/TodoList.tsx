import React, {ChangeEvent} from "react";
import s from './TodoList.module.css'
import {FilterType} from "./App";
import {AddItemForm} from "./AddItemForm";
import EditableSpan from "./EditableSpan";
import {Checkbox, IconButton} from "@material-ui/core";
import {Delete} from '@material-ui/icons';

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
    removeTaskFromTasks: (idTd: string, id: string) => void
    addNewTask: (id: string, newTitle: string, newStatus: boolean) => void
    changeStatusTask: (idTd: string, id: string, status: boolean) => void
    changeStatusTodoList: (id: string, fl: FilterType) => void
    removeTodoLists: (idTd: string) => void
    changeTitleForTask: (idTd: string, value: string, id?: string) => void
}

function TodoList(props: TodoListType) {

    const addTask = (title: string, st: boolean) => {
        props.addNewTask(props.id, title, st)
    }

    const onClickSetFilterToAll = () => {
        props.changeStatusTodoList(props.id, 'all')
    }
    const onClickSetFilterToActive = () => {
        props.changeStatusTodoList(props.id, 'active')
    }
    const onClickSetFilterToCompleted = () => {
        props.changeStatusTodoList(props.id, 'completed')
    }
    const onClickHandlerRemoveTodoList = () => {
        props.removeTodoLists(props.id)
    }

    const onChangeHandlerForTdTitle = (value: string) => {
        props.changeTitleForTask(props.id, value)
    }

    return (
        <div className={s.styleForTodolist}>
            <h3>
                <EditableSpan
                    title={props.title}
                    onChangeHandlerForTaskTitle={onChangeHandlerForTdTitle}
                />
                <IconButton aria-label="delete" size="small">
                    <Delete
                        className={s.marginToRemoveButton}
                        fontSize="inherit"
                        onClick={onClickHandlerRemoveTodoList}
                    />
                </IconButton>
            </h3>

            <AddItemForm
                tasksTitle={props.tasks.map(el => el.title)}
                addItem={addTask}
                checkbox
            />

            <ul>
                {
                    props.tasks.map(t => {

                        const onClickRemoveTaskFromTodolist = () => {
                            props.removeTaskFromTasks(props.id, t.id)
                        }
                        const onClickChangeStatusForTask = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeStatusTask(props.id, t.id, e.currentTarget.checked)
                        }

                        const onChangeHandlerForTaskTitle = (value: string) => {
                            props.changeTitleForTask(props.id, value, t.id)
                        }

                        return (
                            <li key={t.id} className={t.isDone ? s.completedTask : ''}>
                                <Checkbox
                                    checked={t.isDone}
                                    onChange={onClickChangeStatusForTask}
                                    inputProps={{'aria-label': 'controlled'}}
                                />
                                <EditableSpan
                                    title={t.title}
                                    onChangeHandlerForTaskTitle={onChangeHandlerForTaskTitle}
                                />
                                <IconButton aria-label="delete" size="small">
                                    <Delete
                                        style={{
                                            transform: "scale(1)",
                                        }}
                                        className={s.marginToRemoveButton}
                                        fontSize="inherit"
                                        onClick={onClickRemoveTaskFromTodolist}
                                    />
                                </IconButton>

                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button className={props.filter === 'all' ? s.filterForTasks : ''} onClick={onClickSetFilterToAll}>All
                </button>
                <button className={props.filter === 'active' ? s.filterForTasks : ''}
                        onClick={onClickSetFilterToActive}>Active
                </button>
                <button className={props.filter === 'completed' ? s.filterForTasks : ''}
                        onClick={onClickSetFilterToCompleted}>Completed
                </button>
            </div>
        </div>
    )
}

export default TodoList

