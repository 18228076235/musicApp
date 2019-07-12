import * as actionTypes from '../constants/actionTypes'

export interface IuserLogin {
    type: actionTypes.USER_LOGIN
}
// export const login =()=>{
//     return (dispatch)=>{
//         dispatch({
//             type: actionTypes.USER_LOGIN,
//             data:{
//                 id: 1,
//                 username: 'coke',
//                 age: 23
//             }
//         })
//     }
// }

export function login():IuserLogin{
    return {
        type: actionTypes.USER_LOGIN,
    }
}