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
export function removeTodoAction(timeStamp: Date) {
    const action: {
        type: string;
        payload: {
            timeStamp: Date;
        };
    } = {
        type: actionTypes.REMOVE_TODO,
        payload: { timeStamp },
    }
    return action
}