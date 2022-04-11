import {FilterType, TodolistsType} from "../App";
import {v1} from "uuid";

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}

export type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
    id: string
}

type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}

type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: FilterType
}

type ActionsType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistTitleActionType | ChangeTodolistFilterActionType


export const todolistsReducer = (state: Array<TodolistsType>, action: ActionsType): Array<TodolistsType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(el => el.id !== action.id)
        case 'ADD-TODOLIST':
            return [...state, {id: action.id, title: action.title, filter: "all"}]
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

export const RemoveTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return { type: 'REMOVE-TODOLIST', id: todolistId} as const
}

export const AddTodolistAC = (title: string): AddTodolistActionType => {
    return { type: 'ADD-TODOLIST', title: title, id: v1()} as const
}

export const ChangeTodolistTitleAC = (todolistId: string, title: string): ChangeTodolistTitleActionType => {
    return { type: 'CHANGE-TODOLIST-TITLE', id: todolistId, title: title} as const
}

export const ChangeTodolistFilterAC = (todolistId: string, filter: FilterType): ChangeTodolistFilterActionType => {
    return { type: 'CHANGE-TODOLIST-FILTER', id: todolistId, filter: filter} as const
}