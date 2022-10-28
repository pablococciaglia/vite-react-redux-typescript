import { TodoItem } from './../App';

import { TodoAction } from '../store/Store';


const todos = (state: TodoItem = [], action: TodoAction) => {
    switch (action.type) {
        case 'ADD_TODO':
            action.payload
            return [
                ...state, action.payload
            ]
        default:
            return state
    }
}

export default todos