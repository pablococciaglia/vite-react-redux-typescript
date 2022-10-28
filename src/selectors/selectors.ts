import { TodoItem } from "../App";


export const getTodoList = (state: any) => {
    console.log(state)
    return state.todos.present
}