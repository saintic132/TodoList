import React, {useState} from "react";
import s from "./TodoList.module.css";

type AddItemFormType = {
    tasksTitle?: Array<string>
    todolistsTitle?: Array<string>
    checkbox?: boolean
    addItem: (title: string, st: boolean) => void
}


export function AddItemForm(props: AddItemFormType) {
debugger
    let [inputNewValue, setInputNewValue] = useState<string>('');
    let [newStatusValue, setNewStatusValue] = useState<boolean>(false);
    let [inputError, setInputError] = useState<string | null>(null);
    let [errorDouble, setErrorDouble] = useState<string | null>(null);

    const addTask = () => {
        if (inputNewValue.trim() !== '') {
            if (props.checkbox) {
                let doubleTask = props.tasksTitle?.find(el => el === inputNewValue)
                if (doubleTask) {
                    setErrorDouble('Already have this task')
                } else {
                    props.addItem(inputNewValue.trim(), newStatusValue)
                    setInputNewValue('')
                    setNewStatusValue(false)
                    setErrorDouble(null)
                    setInputError(null)
                }
            }
            if (!props.checkbox) {
                let doubleTd = props.todolistsTitle?.find(el => el === inputNewValue)
                    if (doubleTd) {
                        setErrorDouble('Already have this Todolist')
                    } else {
                        props.addItem(inputNewValue.trim(), newStatusValue)
                        setInputNewValue('')
                        setErrorDouble(null)
                        setInputError(null)
                }
            }
        } else {
            setInputError('Enter the value')
        }
    }

    const onChangeHandlerInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputError(null)
        setErrorDouble(null)
        setInputNewValue('')
        setInputNewValue(e.currentTarget.value)
    }
    const onClickHandlerChangeNewStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewStatusValue(e.currentTarget.checked)
    }

    return (
        <div>
            <input className={inputError || errorDouble ? s.borderColorForError : ''} value={inputNewValue}
                   onChange={onChangeHandlerInputValue}/>
            {props.checkbox && <input className={s.checkBoxForNewInput} type="checkbox" checked={newStatusValue}
                                      onChange={onClickHandlerChangeNewStatus}/>}
            <button onClick={addTask}>+</button>
            {inputError && <div className={s.colorForError}>{inputError}</div>}
            {errorDouble && <div className={s.colorForError}>{errorDouble}</div>}
        </div>
    )
}