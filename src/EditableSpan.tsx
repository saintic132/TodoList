import React, {useState, KeyboardEvent, memo} from "react";
import {TextField} from "@material-ui/core";

type EditableSpanType = {
    title: string
    onChangeHandlerForTaskTitle: (value: string) => void
}

const EditableSpan = memo((props: EditableSpanType) => {

    let [activeModeForEdit, setActiveModeForEdit] = useState<boolean>(false);
    let [title, setTitle] = useState('');

    const activateModeHandler = () => {
        setActiveModeForEdit(true)
        setTitle(props.title)
    }
    const disableActivateModeHandler = () => {
        setActiveModeForEdit(false)
        props.onChangeHandlerForTaskTitle(title)
    }
    const onChangeHandlerValueByKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            setActiveModeForEdit(false)
            props.onChangeHandlerForTaskTitle(title)
        }
    }
    const onChangeHandlerValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

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

export default EditableSpan