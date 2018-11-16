import { combineReducers } from 'redux';
import  { ADD_TRAIL, COMPLETE_TRAIL, SET_VISIBILITY_FILTER, VisibilityFilter } from '../actions/trailListAction';
const { SHOW_ALL } = VisibilityFilter;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function trailList(state = [], action) {
    switch (action.type) {
        case ADD_TRAIL:
            return [...state, {
                text: action.text,
                completed: false
            }];
        case COMPLETE_TRAIL:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

const trailListReducer = combineReducers({
    visibilityFilter,
    trailList
});

export default trailListReducer;