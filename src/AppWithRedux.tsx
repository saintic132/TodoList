import React, {useCallback, useMemo} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {AddItemForm} from "./AddItemForm";
import {AppBar, Container, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {
    AddTodolistAC,
    TodolistsType
} from "./state/todolists-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";


export type FilterType = 'all' | 'active' | 'completed'


function AppWithRedux() {

    console.log('App called')

    const todolists = useSelector<AppRootStateType, TodolistsType[]>(state => state.todolists)
    const dispatch = useDispatch()

    const addNewTodolist = useCallback((title: string) => {
        let action = AddTodolistAC(title)
        dispatch(action)
    }, [dispatch])

    let filteredTodolistsForError = useMemo(() => {
        return todolists.map(el => el.title)
    }, [todolists])

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
                        todolistsTitle={filteredTodolistsForError}
                    />
                </Grid>
                <Grid container spacing={2}
                      rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}
                >
                    {
                        todolists.map(t => {

                            return (
                                <Grid
                                key={t.id}
                                >
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