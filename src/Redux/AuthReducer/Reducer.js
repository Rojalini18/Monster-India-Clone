import {ADD_SIGNUP_DATA,SET_AUTH,REMOVE_AUTH,SET_USER} from "./action"

const initState = {
    signup_data:JSON.parse(localStorage.getItem("signup_data")) || [],
  auth: false,
  user_data:JSON.parse(localStorage.getItem("user_data")) || {},
}

export const AuthReducer = (state = initState , {type,payload})=>{
    switch (type) {

        case ADD_SIGNUP_DATA:{
            let data = JSON.parse(localStorage.getItem("signup_data")) || []
            data = [...data,payload]
            localStorage.setItem("signup_data",JSON.stringify(data))
            return{
                ...state,
                signup_data:data
            }
        }
    
        case SET_AUTH:{
            return {
                ...state,
                auth:true
            }
        }
    
    
        case REMOVE_AUTH:{
            return {
                ...state,
                auth:false
            }
        }
            
        case SET_USER:{
            console.log(payload)
            localStorage.setItem("user_data",JSON.stringify(payload))
            
            return {
                ...state,
                user_data:payload
            }
        }
        default :
        return state
    }
}