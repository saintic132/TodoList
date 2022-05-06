import React, {useState, KeyboardEvent, memo, useCallback} from "react";
import {TextField} from "@material-ui/core";

type EditableSpanType = {
    title: string
    onChangeHandlerForTaskTitle: (value: string) => void
}

export const EditableSpan = memo((props: EditableSpanType) => {

    console.log('EditableSpan form called')


    let [activeModeForEdit, setActiveModeForEdit] = useState<boolean>(false);
    let [title, setTitle] = useState('');

    const activateModeHandler = useCallback(() => {
        setActiveModeForEdit(true)
        setTitle(props.title)
    }, [props.title])

    const disableActivateModeHandler = useCallback(() => {
        setActiveModeForEdit(false)
        props.onChangeHandlerForTaskTitle(title)
    }, [props.onChangeHandlerForTaskTitle, title])

    const onChangeHandlerValueByKeyPress = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            setActiveModeForEdit(false)
            props.onChangeHandlerForTaskTitle(title)
        }
    }, [props.onChangeHandlerForTaskTitle, title])

    const onChangeHandlerValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }, [title])

    return (
        activeModeForEdit ?
            <TextField
                id="filled-basic"
                value={title}
                onBlur={disableActivateModeHandler}
                onKeyPress={onChangeHandlerValueByKeyPress}
                autoFocus
                onChange={onChangeHandlerValue}
            /> :
            <span onDoubleClick={activateModeHandler}>{props.title}</span>
    )
})