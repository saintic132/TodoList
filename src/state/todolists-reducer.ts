import {TodolistsType} from "../App";
import {v1} from "uuid";

type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}

type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
}

type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}

type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    filter: string
}


export const todolistsReducer = (state: Array<TodolistsType>, action: ActionType): Array<TodolistsType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return [...state.filter(el => el.id !== action.id)]
        case 'ADD-TODOLIST':
            return [...state, {id: v1(), title: action.title, filter: "all"}]
        case 'CHANGE-TODOLIST-TITLE':
            let findTodoList = state.find(el => el.id === action.id)
            if (findTodoList) {
                findTodoList.title = action.title
            }
            return [...state]
        case 'CHANGE-TODOLIST-FILTER':
            let findTask = state.find(el => el.id === action.id)
            if (findTask) {
                findTask.filter = action.filter
            }
            return [...state]
        default:
            throw new Error("I don't understand this type")
    }
}