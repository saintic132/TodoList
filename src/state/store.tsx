import {combineReducers, createStore, Store} from "redux";
import {ActionsTasksType, taskReducer} from "./task-reducer";
import {ActionsTodolistsType, todolistsReducer} from "./todolists-reducer";

export type ActionsRootType = ActionsTasksType | ActionsTodolistsType
const rootReducer = combineReducers({
    tasks: taskReducer,
    todolists: todolistsReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store: Store<AppRootStateType, ActionsRootType> = createStore(rootReducer)