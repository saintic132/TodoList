import React, {useReducer} from 'react';
import './App.css';
import {v1} from "uuid";
import TodoList, {TaskType} from "./TodoList";
import {AddItemForm} from "./AddItemForm";
import {AppBar, Container, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {
    AddTodolistAC,
    ChangeTodolistFilterAC,
    ChangeTodolistTitleAC,
    RemoveTodolistAC,
    todolistsReducer
} from "./state/todolists-reducer";
import {
    addTaskAC,
    changeTaskStatusAC,
    changeTitleAC,
    removeTaskFromTodolistAC,
    taskReducer
} from "./state/task-reducer";


export type FilterType = 'all' | 'active' | 'completed'
export type TodolistsType = {
    id: string
    title: string
    filter: FilterType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithReducer() {

    let td1 = v1()
    let td2 = v1()

    let [todolists, dispatchToTodolist] = useReducer(todolistsReducer, [
        {id: td1, title: 'What to learn', filter: 'all'},
        {id: td2, title: 'What to buy', filter: 'all'}
    ]);

    let [tasks, dispatchToTasks] = useReducer(taskReducer, {
        [td1]: [{id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'CSS', isDone: true},
            {id: v1(), title: 'React', isDone: false}
        ],
        [td2]: [{id: v1(), title: 'Bread', isDone: true},
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Books', isDone: false}
        ]
    });

    const addNewTodolist = (title: string) => {
        let action = AddTodolistAC(title)
        dispatchToTodolist(action)
        dispatchToTasks(action)
    }

    const changeStatusTodoList = (id: string, fl: FilterType) => {
        dispatchToTodolist(ChangeTodolistFilterAC(id, fl))
    }

    const removeTodoLists = (idTd: string) => {
        let action = RemoveTodolistAC(idTd)
        dispatchToTodolist(action)
        dispatchToTasks(action)
    }

    const addNewTask = (id: string, newTitle: string, newStatus: boolean) => {
        dispatchToTasks(addTaskAC(newTitle, id, newStatus))
    }
    const removeTaskFromTasks = (idTd: string, id: string) => {
        dispatchToTasks(removeTaskFromTodolistAC(id, idTd))
    }
    const changeStatusTask = (idTd: string, id: string, status: boolean) => {
        dispatchToTasks(changeTaskStatusAC(id, status, idTd))
    }
    const changeTitleForTask = (idTd: string, value: string, id?: string) => {
        if (id !== "undefined") {
            if (typeof id === "string") {
                dispatchToTasks(changeTitleAC(id, value, idTd))
            }
        }
        if (id === "undefined") {
            dispatchToTodolist(ChangeTodolistTitleAC(idTd, value))
        }
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        TodoList
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '10px'}}
                >
                    <AddItemForm
                        addItem={addNewTodolist}
                        todolistsTitle={todolists.map(el => el.title)}
                    />
                </Grid>
                <Grid container spacing={2}
                      rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}
                >
                    {
                        todolists.map(t => {

                            let filteredTasks = tasks[t.id]
                            if (t.filter === 'active') {
                                filteredTasks = filteredTasks.filter(el => !el.isDone)
                            }
                            if (t.filter === 'completed') {
                                filteredTasks = filteredTasks.filter(el => el.isDone)
                            }

                            return (
                                <Grid>
                                    <TodoList
                                        key={t.id}
                                        id={t.id}
                                        title={t.title}
                                        tasks={filteredTasks}
                                        filter={t.filter}
                                        removeTaskFromTasks={removeTaskFromTasks}
                                        addNewTask={addNewTask}
                                        changeStatusTask={changeStatusTask}
                                        changeStatusTodoList={changeStatusTodoList}
                                        removeTodoLists={removeTodoLists}
                                        changeTitleForTask={changeTitleForTask}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default AppWithReducer;