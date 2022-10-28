import * as actionTypes from "../actionTypes"
import { TodoAction } from "../store/Store";

export function addTodoAction(todo: {
    todo: string;
    timeStamp: Date
}
) {
    const action: TodoAction = {
        type: actionTypes.ADD_TODO,
        payload: todo,
    }
    return action
}