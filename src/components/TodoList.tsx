import { FC, ReactElement } from "react"
import { useSelector } from 'react-redux'
import { TodoItem } from "../App"
import { getTodoList } from "../selectors/selectors"
import { useDispatch } from 'react-redux'
import { removeTodoAction } from "../actions/action"
import './TodoList.css'

const TodoList: FC = (): ReactElement => {
    const dispatch = useDispatch()
    const list: TodoItem = useSelector(getTodoList)
    const deleteItem = (timeStamp: Date) => {
        dispatch(removeTodoAction(timeStamp))
    }

    return (
        <ul>
            {list.map((item) => (

                <li key={item.timeStamp.toString()} >
                    <div
                        className="delete-button"
                        onClick={() => deleteItem(item.timeStamp)}
                    >X</div>
                    {item.todo}
                </li>

            ))}
        </ul>
    )
}

export default TodoList