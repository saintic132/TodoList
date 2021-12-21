import React, {useState} from "react";
import {TextField} from "@material-ui/core";

type EditableSpanType = {
    title: string
    onChangeHandlerForTaskTitle: (value: string) => void
}

function EditableSpan(props: EditableSpanType) {

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
    const onChangeHandlerValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        activeModeForEdit ?
            <TextField
                id="filled-basic"
                value={title}
                onBlur={disableActivateModeHandler}
                autoFocus
                onChange={onChangeHandlerValue}
            /> :
            <span onDoubleClick={activateModeHandler}>{props.title}</span>
    )
}

export default EditableSpan