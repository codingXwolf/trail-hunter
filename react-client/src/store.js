import { createStore } from 'redux';

function reducer(state, action) {
    if(!state) {
        return {
            firstName: null
        }
    }

    if(action.type === 'SET_FIRST_NAME') {
        return {
            ...state,
            firstName: action.firstName
        };
    }
}

export default createStore(reducer)