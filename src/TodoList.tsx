import React from "react";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListType = {
    title: string
    tasks: Array<TaskType>
}

function TodoList(props: TodoListType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => {
                        return (
                            <li key={t.id}><input type="checkbox" checked={t.isDone}/><span>{t.title}</span></li>
                        )
                    })
                }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default TodoList