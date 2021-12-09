import React, {useState} from "react";
import s from './TodoList.module.css'
import {FilterType} from "./App";

type TaskType = {
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

    let [inputNewValue, setInputNewValue] = useState('');
    let [newStatusValue, setNewStatusValue] = useState<boolean>(false);
    let [inputError, setInputError] = useState<string | null>('');
    let [errorDoubleTask, setErrorDoubleTask] = useState<string | null>('');

    const addTask = () => {
        if (inputNewValue.trim()) {
            let doubleTask = props.tasks.find(el => el.title === inputNewValue)
            if (doubleTask) {
                setErrorDoubleTask('Already have this task')
            } else {
                props.addNewTask(props.id, inputNewValue, newStatusValue)
                setInputNewValue('')
                setNewStatusValue(false)
                setErrorDoubleTask(null)
            }
        } else {
            setInputError('Enter the value')
        }
    }
    const onClickSetFilterToAll = () => {
        props.changeStatusTodoList(props.id,'all')
    }
    const onClickSetFilterToActive = () => {
        props.changeStatusTodoList(props.id,'active')
    }
    const onClickSetFilterToCompleted = () => {
        props.changeStatusTodoList(props.id,'completed')
    }
    const onChangeHandlerInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputError(null)
        setErrorDoubleTask(null)
        setInputNewValue(e.currentTarget.value)
    }
    const onClickHandlerChangeNewStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewStatusValue(e.currentTarget.checked)
    }
    const onClickHandlerRemoveTodoList = () => {
        props.removeTodoLists(props.id)
    }

    return (
        <div className={s.styleForTodolist}>
            <h3>{props.title}
            <button className={s.marginToRemoveButton} onClick={onClickHandlerRemoveTodoList}>x</button>
            </h3>
            <div>
                <input className={inputError || errorDoubleTask ? s.borderColorForError : ''} value={inputNewValue} onChange={onChangeHandlerInputValue}/>
                <input className={s.checkBoxForNewInput} type="checkbox" checked={newStatusValue}
                       onChange={onClickHandlerChangeNewStatus}/>
                <button onClick={addTask}>+</button>
                {inputError && <div className={s.colorForError}>{inputError}</div>}
                {errorDoubleTask && <div className={s.colorForError}>{errorDoubleTask}</div>}
            </div>
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