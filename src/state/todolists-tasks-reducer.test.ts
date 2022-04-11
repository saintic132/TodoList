import {StartTaskType} from "./task-reducer.test";
import {AddTodolistAC, RemoveTodolistAC, todolistsReducer, TodolistsType} from "./todolists-reducer";
import {taskReducer} from "./task-reducer";


test('TodolistId and TaskId should be equal', () => {

    const StartTodolist: Array<TodolistsType> = []
    const StartTasks: StartTaskType = {}

    const action = AddTodolistAC('New Todolist')

    const EndTodoList = todolistsReducer(StartTodolist, action)
    const EndTasks = taskReducer(StartTasks, action)

    const keys = Object.keys(EndTasks)
    const keyIdTask = keys[0]
    const EndTodoListId = EndTodoList[0].id

    expect(keyIdTask).toBe(action.id)
    expect(EndTodoListId).toBe(action.id)
})
test('property with todolistId should be deleted', () => {
    const startState: StartTaskType = {
        "todolistId1": [
            { id: "1", title: "CSS", isDone: false },
            { id: "2", title: "JS", isDone: true },
            { id: "3", title: "React", isDone: false }
        ],
        "todolistId2": [
            { id: "1", title: "bread", isDone: false },
            { id: "2", title: "milk", isDone: true },
            { id: "3", title: "tea", isDone: false }
        ]
    };

    const action = RemoveTodolistAC("todolistId2");

    const endState = taskReducer(startState, action)


    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).not.toBeDefined();
});
