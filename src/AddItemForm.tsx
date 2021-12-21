import React, {useState} from "react";
import s from "./TodoList.module.css";
import {Button, Checkbox, TextField} from "@material-ui/core";

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

    const onBlurInputElement = () => {
        setInputError(null)
    }

    return (
        <div>
            <TextField
                id="outlined-basic"
                label={props.checkbox ? 'Task' : 'TodoList'}
                variant="outlined"
                value={inputNewValue}
                onChange={onChangeHandlerInputValue}
                error={!!inputError || !!errorDouble}
                helperText={inputError || errorDouble}
                onBlur={onBlurInputElement}
            />
            {props.checkbox && <Checkbox
                className={s.checkBoxForNewInput}
                checked={newStatusValue}
                onChange={onClickHandlerChangeNewStatus}
                inputProps={{'aria-label': 'controlled'}}
            />}
            <Button
                style={{
                    transform: "scale(0.75)",
                    maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'
                }}
                onClick={addTask}
                variant="contained"
                color="primary">+</Button>
        </div>
    )
}