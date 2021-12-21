import React, {useState} from "react";
import s from "./TodoList.module.css";
import {Button, Checkbox} from "@material-ui/core";

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
        debugger
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
                    setErrorDouble(null)
                    setInputError(null)
                    props.addItem(inputNewValue.trim(), true)
                    setInputNewValue('')
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
            {props.checkbox && <Checkbox
                className={s.checkBoxForNewInput}
                checked={newStatusValue}
                onChange={onClickHandlerChangeNewStatus}
                inputProps={{ 'aria-label': 'controlled' }}
            />}
            <Button
                style={{
                    transform: "scale(0.75)",
                }}
                onClick={addTask}
                variant="contained"
                color="primary">+</Button>
            {inputError && <div className={s.colorForError}>{inputError}</div>}
            {errorDouble && <div className={s.colorForError}>{errorDouble}</div>}
        </div>
    )
}