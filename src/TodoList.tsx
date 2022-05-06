import React, {memo, useCallback, useMemo} from "react";
import s from './TodoList.module.css'
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, IconButton} from "@material-ui/core";
import {Delete} from '@material-ui/icons';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    ChangeTodolistFilterAC,
    ChangeTodolistTitleAC,
    RemoveTodolistAC,
    TodolistsType
} from "./state/todolists-reducer";
import {addTaskAC} from "./state/task-reducer";
import {Task} from "./Task";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListType = {
    id: string
}

export const TodoList = memo((props: TodoListType) => {

    console.log('TodoList called')

    const tasks = useSelector<AppRootStateType, TaskType[]>(state => state.tasks[props.id])
    const todolists = useSelector<AppRootStateType, TodolistsType>(state => state.todolists.filter(td => td.id === props.id)[0])

    const dispatch = useDispatch()

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

    const onClickSetFilterToAll = useCallback(() => {
        dispatch(ChangeTodolistFilterAC(todolistId, 'all'))
    }, [dispatch, todolistId])

    const onClickSetFilterToActive = useCallback(() => {
        dispatch(ChangeTodolistFilterAC(todolistId, 'active'))
    }, [dispatch, todolistId])

    const onClickSetFilterToCompleted = useCallback(() => {
        dispatch(ChangeTodolistFilterAC(todolistId, 'completed'))
    }, [dispatch, todolistId])

    const onClickHandlerRemoveTodoList = useCallback(() => {
        dispatch(RemoveTodolistAC(todolistId))
    }, [dispatch, todolistId])

    const onChangeHandlerForTdTitle = useCallback((value: string) => {
        dispatch(ChangeTodolistTitleAC(todolistId, value))
    }, [dispatch, todolistId])

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
                        return (
                            <Task
                                key={t.id}
                                task={t}
                                todolistId={todolistId}
                            />
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
})

