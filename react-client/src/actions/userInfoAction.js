export const setUserInfo = userInfo => {
    return ({
        type: 'SET_USER_INFO',
        id: userInfo.id
        ,firstName: userInfo.firstName
        ,lastName: userInfo.lastName
        ,email: userInfo.email
        ,userName: userInfo.userName
        ,password: userInfo.password
        ,passwordConfirm: userInfo.passwordConfirm
    })
}