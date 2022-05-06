import React, {ChangeEvent, useCallback, useMemo} from "react";
import s from './TodoList.module.css'
import {AddItemForm} from "./AddItemForm";
import EditableSpan from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from '@material-ui/icons';
import {useDispatch, useSelector} from "react-redux";
import {ActionsRootType, AppRootStateType} from "./state/store";
import {
    ChangeTodolistFilterAC,
    ChangeTodolistTitleAC,
    RemoveTodolistAC,
    TodolistsType
} from "./state/todolists-reducer";
import {Dispatch} from "redux";
import {addTaskAC, changeTaskStatusAC, changeTitleAC, removeTaskFromTodolistAC} from "./state/task-reducer";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListType = {
    id: string
}

function TodoList(props: TodoListType) {

    const tasks = useSelector<AppRootStateType, TaskType[]>(state => state.tasks[props.id])
    const todolists = useSelector<AppRootStateType, TodolistsType>(state => state.todolists.filter(td => td.id === props.id)[0])

    const dispatch = useDispatch<Dispatch<ActionsRootType>>()

    const todolistId = todolists.id

    let filteredTasks = tasks
    if (todolists.filter === 'active') {
        filteredTasks = filteredTasks.filter(el => !el.isDone)
    }
    if (todolists.filter === 'completed') {
        filteredTasks = filteredTasks.filter(el => el.isDone)
    }

    const addTask = useCallback((title: string, st: boolean) => {
        dispatch(addTaskAC(title, todolistId, st))
    }, [dispatch, todolistId])

    const onClickSetFilterToAll = () => {
        dispatch(ChangeTodolistFilterAC(todolistId, 'all'))
    }
    const onClickSetFilterToActive = () => {
        dispatch(ChangeTodolistFilterAC(todolistId, 'active'))
    }
    const onClickSetFilterToCompleted = () => {
        dispatch(ChangeTodolistFilterAC(todolistId, 'completed'))
    }
    const onClickHandlerRemoveTodoList = () => {
        dispatch(RemoveTodolistAC(todolistId))
    }
    const onChangeHandlerForTdTitle = (value: string) => {
        dispatch(ChangeTodolistTitleAC(todolistId, value))
    }

    let filteredTaskForError = useMemo(() => {
        return tasks.map(el => el.title)
    }, [tasks])

    return (
        <div className={s.styleForTodolist}>
            <h3>
                <EditableSpan
                    title={todolists.title}
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
                tasksTitle={filteredTaskForError}
                addItem={addTask}
                checkbox
            />

            <ul>
                {
                    filteredTasks.map(t => {

                        const onClickRemoveTaskFromTodolist = () => {
                            dispatch(removeTaskFromTodolistAC(t.id, todolistId))
                        }
                        const onClickChangeStatusForTask = (e: ChangeEvent<HTMLInputElement>) => {
                            dispatch(changeTaskStatusAC(t.id, e.currentTarget.checked, todolistId))
                        }

                        const onChangeHandlerForTaskTitle = (value: string) => {
                            dispatch(changeTitleAC(t.id, value, todolistId))
                        }

                        return (
                            <li
                                key={t.id}
                                className={t.isDone ? s.completedTask : ''}>
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
                    variant={todolists.filter === 'all' ? 'contained' : 'text'}
                    onClick={onClickSetFilterToAll}
                >All
                </Button>
                <Button
                    style={{
                        transform: "scale(1)",
                        fontSize: '10px',
                    }}
                    color={"primary"}
                    variant={todolists.filter === 'active' ? 'contained' : 'text'}
                    onClick={onClickSetFilterToActive}
                >Active
                </Button>
                <Button
                    style={{
                        transform: "scale(1)",
                        fontSize: '10px',
                    }}
                    color={"secondary"}
                    variant={todolists.filter === 'completed' ? 'contained' : 'text'}
                    onClick={onClickSetFilterToCompleted}
                >Completed
                </Button>
            </div>
        </div>
    )
}

export default TodoList

