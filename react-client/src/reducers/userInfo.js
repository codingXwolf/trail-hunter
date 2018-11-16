const userInfoData = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_INFO' : {
            return [...state, {
                id: action.id
                ,firstName: action.firstName
                ,lastName: action.lastName
                ,email: action.email
                ,userName: action.userName
                ,password: action.password
                ,passwordConfirm: action.passwordConfirm
            }]
        }
        default:
            return state;
    }
}

export default userInfoData;