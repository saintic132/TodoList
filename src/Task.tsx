import React, {ChangeEvent, useCallback} from 'react';
import {changeTaskStatusAC, changeTitleAC, removeTaskFromTodolistAC} from "./state/task-reducer";
import s from "./TodoList.module.css";
import {Checkbox, IconButton} from "@material-ui/core";
import EditableSpan from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {TaskType} from "./TodoList";
import {useDispatch} from "react-redux";

type TaskPropsType = {
    task: TaskType
    todolistId: string
};

export const Task = (props: TaskPropsType) => {

    let dispatch = useDispatch()

    const onClickRemoveTaskFromTodolist = useCallback(() => {
        dispatch(removeTaskFromTodolistAC(props.task.id, props.todolistId))
    }, [dispatch, props.task.id, props.todolistId])

    const onClickChangeStatusForTask = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTaskStatusAC(props.task.id, e.currentTarget.checked, props.todolistId))
    },[dispatch, props.task.id, props.todolistId] )

    const onChangeHandlerForTaskTitle = useCallback((value: string) => {
        dispatch(changeTitleAC(props.task.id, value, props.todolistId))
    },[dispatch, props.task.id, props.todolistId] )

    return (
        <div>
            <li
                key={props.task.id}
                className={props.task.isDone ? s.completedTask : ''}>
                <Checkbox
                    style={{
                        transform: "scale(0.75)",
                    }}
                    checked={props.task.isDone}
                    onChange={onClickChangeStatusForTask}
                    inputProps={{'aria-label': 'controlled'}}
                />
                <EditableSpan
                    title={props.task.title}
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
        </div>
    )
}