import {TodolistsType} from "../App";

type ActionType = {
    type: string
    id: string
    [key: string]: any
}


export const todolistsReducer = (state: Array<TodolistsType>, action: ActionType): Array<TodolistsType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return [...state.filter(el => el.id !== action.id)]
        default:
            throw new Error("I don't understand this type")
    }
}