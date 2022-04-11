import React, {ChangeEvent} from "react";
import s from './TodoList.module.css'
import {FilterType} from "./App";
import {AddItemForm} from "./AddItemForm";
import EditableSpan from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
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
    changeTitleForTask: (idTd: string, value: string, id?: string | undefined) => void
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
                                    style={{
                                        transform: "scale(0.75)",
                                    }}
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
                <Button
                    style={{
                        transform: "scale(1)",
                        fontSize: '10px'
                    }}
                    variant={props.filter === 'all' ? 'contained' : 'text'}
                    onClick={onClickSetFilterToAll}
                >All
                </Button>
                <Button
                    style={{
                        transform: "scale(1)",
                        fontSize: '10px',
                    }}
                    color={"primary"}
                    variant={props.filter === 'active' ? 'contained' : 'text'}
                    onClick={onClickSetFilterToActive}
                >Active
                </Button>
                <Button
                    style={{
                        transform: "scale(1)",
                        fontSize: '10px',
                    }}
                    color={"secondary"}
                    variant={props.filter === 'completed' ? 'contained' : 'text'}
                    onClick={onClickSetFilterToCompleted}
                >Completed
                </Button>
            </div>
        </div>
    )
}

export default TodoList

