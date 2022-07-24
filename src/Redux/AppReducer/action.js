import { GET_DATA_SUCCESS, GET_TOTAL_SUCCESS } from "./actionTypes"

export const getData = (data)=>dispatch=>{
    console.log(data)
    dispatch({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}

export const getTotal = (payload)=>dispatch=>{
    dispatch({
        type:GET_TOTAL_SUCCESS,
        payload:payload
    })
}