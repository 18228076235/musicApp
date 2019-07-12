import * as actionTypes from '../constants/actionTypes'

export const changeHeaderType=(title: string)=>{
    return (dispatch)=>{
        dispatch({
            type: actionTypes.CHANGE_HEADER_TYPE,
            title
        })
    }
}
