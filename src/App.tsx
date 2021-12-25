import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import TodoList, {TaskType} from "./TodoList";
import {AddItemForm} from "./AddItemForm";
import {AppBar, Container, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';



export type FilterType = 'all' | 'active' | 'completed'
type TodolistsType = {
    id: string
    title: string
    filter: FilterType
}

type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {

    let td1 = v1()
    let td2 = v1()

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: td1, title: 'What to learn', filter: 'all'},
        {id: td2, title: 'What to buy', filter: 'all'}
    ]);

    const addNewTodolist = (title: string) => {
        debugger
        let todolist: TodolistsType = {id: v1(), title: title, filter: 'all'}
        setTodolists([todolist, ...todolists])
        setTasks({...tasks, [todolist.id]: []})
    }

    const changeStatusTodoList = (id: string, fl: FilterType) => {
        let tdFind = todolists.find(el => el.id === id)
        if (tdFind) {
            tdFind.filter = fl
            setTodolists([...todolists])
        }
    }

    const removeTodoLists = (idTd: string) => {
        let findTd = todolists.filter(el => el.id !== idTd)
        setTodolists([...findTd])
        delete tasks[idTd]
        setTasks({...tasks})
    }

    let [tasks, setTasks] = useState<TasksStateType>({
        [td1]: [{id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'CSS', isDone: true},
            {id: v1(), title: 'React', isDone: false}
        ],
        [td2]: [{id: v1(), title: 'Bread', isDone: true},
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Books', isDone: false}
        ]
    });

    const addNewTask = (id: string, newTitle: string, newStatus: boolean) => {
        let newTask = {id: v1(), title: newTitle, isDone: newStatus}
        tasks[id] = [newTask, ...tasks[id]]
        setTasks({...tasks})
    }
    const removeTaskFromTasks = (idTd: string, id: string) => {
        tasks[idTd] = tasks[idTd].filter(el => el.id !== id)
        setTasks({...tasks})
    }
    const changeStatusTask = (idTd: string, id: string, status: boolean) => {
        let task = tasks[idTd].find(el => el.id === id)
        if (task) {
            task.isDone = status
            setTasks({...tasks})
        }
    }
    const changeTitleForTask = (idTd: string, value: string, id?: string) => {
        if (id !== "undefined") {
            let td = tasks[idTd].find(el => el.id === id)
            if (td) {
                td.title = value
                setTasks({...tasks})
            }
        }
        if (id === "undefined") {
            let td = todolists.find(el => el.id === idTd)
            if (td) {
                td.title = value
                setTasks({...tasks})
            }
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

                      export default App;