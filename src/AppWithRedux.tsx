import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import {AddItemForm} from "./AddItemForm";
import {AppBar, Container, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {
    AddTodolistAC,
    TodolistsType
} from "./state/todolists-reducer";
import {useDispatch, useSelector} from "react-redux";
import {ActionsRootType, AppRootStateType} from "./state/store";
import {Dispatch} from "redux";


export type FilterType = 'all' | 'active' | 'completed'


function AppWithRedux() {

    const todolists = useSelector<AppRootStateType, TodolistsType[]>(state => state.todolists)
    const dispatch = useDispatch<Dispatch<ActionsRootType>>()

    const addNewTodolist = (title: string) => {
        let action = AddTodolistAC(title)
        dispatch(action)
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

                            return (
                                <Grid>
                                    <TodoList
                                        key={t.id}
                                        id={t.id}
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

export default AppWithRedux;