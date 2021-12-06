import React, {useState} from "react";
import {FilterType} from "./App";
import s from './TodoList.module.css'

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: string) => void
    filter: FilterType
    setFilter: (el: FilterType) => void
    addTask: (title: string, isDone: boolean) => void
    changeStatusForTask: (id: string, status: boolean) => void
}

function TodoList(props: TodoListType) {

    let [inputValue, setInputValue] = useState('');
    let [inputCheckStatusValue, setInputCheckStatusValue] = useState<boolean>(false);
    let [error, setError] = useState<string | null>(null);
    let [doubleTaskError, setDoubleTaskError] = useState<string | null>(null);


    const addNewTask = () => {
        if (inputValue.trim()) {
            let findDoubleTask = props.tasks.find(el => el.title === inputValue)
            if (findDoubleTask) {
                setDoubleTaskError('Already have that task')
            } else {
                props.addTask(inputValue, inputCheckStatusValue)
                setInputValue('')
                setInputCheckStatusValue(false)
                setDoubleTaskError(null)
            }
        } else {
            setError('Enter the text')
        }
    }
    const HandlerInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setDoubleTaskError(null)
        setInputValue(e.currentTarget.value)
    }
    const HandlerCheckInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputCheckStatusValue(e.currentTarget.checked)
    }
    const changeFilterForAll = () => {
        props.setFilter('all')
    }
    const changeFilterForActive = () => {
        props.setFilter('active')
    }
    const changeFilterForCompleted = () => {
        props.setFilter('completed')
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={inputValue} onChange={HandlerInputValue}
                       className={error ? s.borderColorForError : '' || doubleTaskError ? s.borderColorForError && s.textForDoubleTask : ''}/>
                <input type="checkbox" className={s.checkBoxForNewInput} checked={inputCheckStatusValue}
                       onChange={HandlerCheckInputValue}/>
                <button onClick={addNewTask}>+</button>
                {error && <div className={s.colorForError}>{error}</div>}
                {doubleTaskError && <div className={s.colorForError}>{doubleTaskError}</div>}
            </div>
            <ul>
                {
                    props.tasks.map(el => {

                        const HandlerChangeStatusForOldTasks = (e: React.ChangeEvent<HTMLInputElement>) => {
                            props.changeStatusForTask(el.id, e.currentTarget.checked)
                        }
                        const HandlerForRemoveTask = () => {
                            props.removeTasks(el.id)
                        }

                        return (
                            <li key={el.id} className={el.isDone ? s.completedTask : ''}>
                                <input type="checkbox" checked={el.isDone} onChange={HandlerChangeStatusForOldTasks}/>
                                <span>{el.title}</span>
                                <button onClick={HandlerForRemoveTask}>X</button>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button className={props.filter === 'all' ? s.filterForTasks : ''} onClick={changeFilterForAll}>All
                </button>
                <button className={props.filter === 'active' ? s.filterForTasks : ''}
                        onClick={changeFilterForActive}>Active
                </button>
                <button className={props.filter === 'completed' ? s.filterForTasks : ''}
                        onClick={changeFilterForCompleted}>Completed
                </button>
            </div>
        </div>
    )
}

export default TodoList