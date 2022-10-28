import reducer from '../Reducer'
import { createStore, Store } from "redux"
import { TodoItem } from '../App'
export type TodoAction = {
    type: string
    payload: {
        todo: string;
        timeStamp: Date
    }
}

type DispatchType = (args: TodoAction) => TodoAction

const store: Store<TodoItem, TodoAction> & {
    dispatch: DispatchType
} = createStore(reducer)

export default store
