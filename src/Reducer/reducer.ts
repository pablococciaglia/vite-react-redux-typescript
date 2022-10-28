import { TodoItem } from './../App';
import * as actionTypes from "../actionTypes"

import { TodoAction } from '../store/Store';


const todos = (state: TodoItem = [], action: TodoAction) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state, action.payload
            ]

        case actionTypes.REMOVE_TODO:
            const newState = [...state.filter(({ timeStamp }) => timeStamp !== action.payload.timeStamp)]
            return newState

        default:
            return state
    }
}

export default todos