import {StartTaskType} from "./task-reducer.test";
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";

type FirstActionType = ReturnType<typeof removeTaskFromTodolistAC>
type SecondActionType = ReturnType<typeof addTaskAC>
type ThirdActionType = ReturnType<typeof changeTaskStatusAC>
type FourActionType = ReturnType<typeof changeTitleAC>

type ActionsType = FirstActionType | SecondActionType | ThirdActionType | FourActionType | AddTodolistActionType | RemoveTodolistActionType


export const taskReducer = (state: StartTaskType, action: ActionsType): StartTaskType => {
    switch (action.type) {
        case 'REMOVE-TASK-FROM-TODOLIST':
            return {
                ...state,
                [action.tdId]: state[action.tdId].filter(el => el.id !== action.taskId)
            };
        case 'ADD-NEW-TASK-FOR-TODOLIST':
            return {
                ...state,
                [action.tdId]: [{id: '0', title: action.newTask, isDone: false}, ...state[action.tdId]]
            }
        case 'CHANGE-TASK-STATUS':
            return {
                ...state,
                [action.tdId]:
                    state[action.tdId].map(el => el.id === action.taskId
                        ? {...el, isDone: action.status}
                        : el
                    )
            }
        case 'CHANGE-TASK-TITLE':
            return {
                ...state,
                [action.tdId]:
                    state[action.tdId].map(el => el.id === action.taskId
                        ? {...el, title: action.title}
                        : el
                    )
            }
        case 'ADD-TODOLIST':
            return {
                ...state,
                [action.id] : []
            }
        case 'REMOVE-TODOLIST':
            let newTasks = {...state}
            delete newTasks[action.id]
            return newTasks
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskFromTodolistAC = (taskId: string, tdId: string) => ({
    type: 'REMOVE-TASK-FROM-TODOLIST',
    taskId,
    tdId
} as const)

export const addTaskAC = (newTask: string, tdId: string) => ({
    type: 'ADD-NEW-TASK-FOR-TODOLIST',
    newTask,
    tdId
} as const)

export const changeTaskStatusAC = (taskId: string, status: boolean, tdId: string) => ({
    type: 'CHANGE-TASK-STATUS',
    taskId,
    status,
    tdId
} as const)
export const changeTitleAC = (taskId: string, title: string, tdId: string) => ({
    type: 'CHANGE-TASK-TITLE',
    taskId,
    title,
    tdId
} as const)

// export const addTaskAC = (newTask: string, tdId: string) => ({type: 'ADD-NEW-TASK-FOR-TODOLIST',newTask,tdId} as const)
// export const addTaskAC = (newTask: string, tdId: string) => ({type: 'ADD-NEW-TASK-FOR-TODOLIST',newTask,tdId} as const)
