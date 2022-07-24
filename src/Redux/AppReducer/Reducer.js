import { GET_DATA_SUCCESS, GET_TOTAL_SUCCESS } from "./actionTypes"

const initState = {
    jobsData : [],
    total_price : localStorage.getItem("total_price") || 0
}

export const AppReducer = (state = initState , {type,payload})=>{
    console.log(payload)
    switch (type){
        case GET_DATA_SUCCESS:{
            return {
                ...state,
                jobsData:payload
            }
        }
        case GET_TOTAL_SUCCESS:{
            let total = localStorage.getItem("total_price")
            total = +total
            if(payload){
                total = +payload
            }
            
            return {
                ...state,
                total_price:total
            }
        }
        default:
            return state
    }
}