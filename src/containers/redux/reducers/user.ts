import * as actionTypes from '../constants/actionTypes'
import { IuserLogin } from '../actions/user'

export interface IUser {
  user:{
    id: string
    username: string
    age: number
  }
}

export interface IState {
  user: IUser
}

const initState = {
  user: {
    id: '',
    username: '',
    age: 0
  }
}

export const user = (state: IUser = initState, action: IuserLogin) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        user: state
      }
    default:
      return state
  }
}
