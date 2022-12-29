import Link from 'next/link'
import React from 'react'
import { Todo } from '../../typing'

const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todosList: Todo[] = await res.json()
    return todosList
}

async function TodosList() {

    const todos = await fetchTodos()
    return (
        <>
            {todos.map((todo) => (
                <p key={todo.id}>
                    <Link href={`/todos/${todo.id}`}>Todo : {todo.id}</Link>
                </p>
            ))}
        </>
    )
}

export default TodosList