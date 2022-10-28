import { TodoItem } from "../App";


export const getTodoList = (state: { todos: TodoItem }) => {
    return state.todos
}