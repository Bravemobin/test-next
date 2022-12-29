import React from 'react'

type PageProps = {
    params: {
        todoId: string;
    }
}

const fetchTodo = async (todoId: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    const todo = await res.json()
    return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
    const todo = await fetchTodo(todoId)
    return (
        <div>
            <p>
                #{todo.id}: {todo.title}
            </p>
            <p>By User: {todo.userId}</p>
        </div>
    )
}

export default TodoPage