export const ADD_TRAIL = 'ADD_TRAIL';
export const COMPLETE_TRAIL = 'COMPLETE_TRAIL';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilter = {
    SHOW_ALL: 'SHOW_ALL'
    , SHOW_COMPLETED: 'SHOW_COMPLETED'
    , SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTrail(text) {
    return { type: ADD_TRAIL, text };
}

export function completeTrail(index) {
    return { type: COMPLETE_TRAIL, index };
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
}

