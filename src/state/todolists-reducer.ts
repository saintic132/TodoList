import {v1} from "uuid";
import {td1, td2} from "./task-reducer";
import {FilterType} from "../AppWithRedux";

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

export type ActionsTodolistsType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistTitleActionType | ChangeTodolistFilterActionType

export type TodolistsType = {
    id: string
    title: string
    filter: FilterType
}
const initialTodolistState: TodolistsType[] = [
    {id: td1, title: 'What to learn', filter: 'all'},
    {id: td2, title: 'What to buy', filter: 'all'}
]

export const todolistsReducer = (state: Array<TodolistsType> = initialTodolistState, action: ActionsTodolistsType): Array<TodolistsType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(el => el.id !== action.id)
        case 'ADD-TODOLIST':
            return [{id: action.id, title: action.title, filter: "all"}, ...state]
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
            return state
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