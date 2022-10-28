import { FC, ReactElement } from "react"
import { useSelector } from 'react-redux'
import { TodoItem } from "../App"
import { getTodoList } from "../selectors/selectors"

const TodoList: FC = (): ReactElement => {

    const list: TodoItem = useSelector(getTodoList)
    console.log(useSelector(state => state))

    return (
        <ul>
            {list.map((item) => (<li key={item.timeStamp.toString()}>{item.todo}</li>))}
        </ul>
    )
}

export default TodoList