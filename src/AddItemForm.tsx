import React, {useState} from "react";
import s from "./TodoList.module.css";

type AddItemFormType = {
    id: string
    tasks?: Array<string>
    addNewTask: (title: string, st: boolean) => void
    checkbox? : boolean
}


export function AddItemForm(props: AddItemFormType) {

    let [inputNewValue, setInputNewValue] = useState('');
    let [newStatusValue, setNewStatusValue] = useState<boolean>(false);
    let [inputError, setInputError] = useState<string | null>('');
    let [errorDoubleTask, setErrorDoubleTask] = useState<string | null>('');

    const addTask = () => {
        if (inputNewValue.trim() && props.tasks) {
            let doubleTask = props.tasks.find(el => el === inputNewValue)
            if (doubleTask) {
                setErrorDoubleTask('Already have this task')
            } else {
                props.addNewTask(inputNewValue, newStatusValue)
                setInputNewValue('')
                setNewStatusValue(false)
                setErrorDoubleTask(null)
            }
        } else {
            setInputError('Enter the value')
        }
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
            <input className={inputError || errorDoubleTask ? s.borderColorForError : ''} value={inputNewValue}
                   onChange={onChangeHandlerInputValue}/>
            {props.checkbox && <input className={s.checkBoxForNewInput} type="checkbox" checked={newStatusValue}
                    onChange={onClickHandlerChangeNewStatus}/>}
            <button onClick={addTask}>+</button>
            {inputError && <div className={s.colorForError}>{inputError}</div>}
            {errorDoubleTask && <div className={s.colorForError}>{errorDoubleTask}</div>}
        </div>
    )
}