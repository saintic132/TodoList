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
    filter: FilterType
    setFilter: (fl: FilterType) => void
    addNewTask: (title: string, newStatus: boolean) => void
    changeStatusTask: (id: string, status: boolean) => void
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
                props.addNewTask(inputNewValue, newStatusValue)
                setInputNewValue('')
                setNewStatusValue(false)
                setErrorDoubleTask(null)
            }
        } else {
            setInputError('Enter value')
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
        setInputError(null)
        setErrorDoubleTask(null)
        setInputNewValue(e.currentTarget.value)
    }
    const onClickHandlerChangeNewStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewStatusValue(e.currentTarget.checked)
    }

    return (
        <div>
            <h3>{props.title}</h3>
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
                            props.removeTaskFromTasks(t.id)
                        }
                        const onClickChangeStatusForTask = (e: React.MouseEvent<HTMLInputElement>) => {
                            props.changeStatusTask(t.id, e.currentTarget.checked)
                        }


                        return (
                            <li key={t.id}>
                                <input type="checkbox" checked={t.isDone} onClick={onClickChangeStatusForTask}/>
                                <span>{t.title}</span>
                                <button className={s.marginToRemoveTaskButton}
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