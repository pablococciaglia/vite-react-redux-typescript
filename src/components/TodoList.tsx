import { FC, ReactElement } from "react"
import { TodoItem } from "../App"

type TodoListProps = {
    list: TodoItem
}
const TodoList: FC<TodoListProps> = ({ list }): ReactElement => {
    return (
        <ul>
            {list.map((item) => (<li key={item.timeStamp.toString()}>{item.todo}</li>))}
        </ul>
    )
}

export default TodoList