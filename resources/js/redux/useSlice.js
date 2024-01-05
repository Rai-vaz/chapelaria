import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    // nome do reducer
    name: 'user',
    // estado inicial do reducer
    initialState:{
        user: '',
        isLogged: false,
    },
    // action
    reducers:{
        changeUser(state, {payload}){
            return {...state, isLogged: true, user: payload}
        },
        logout(state){
            return {...state, isLogged: false, user: ''}
        }
    }
})

// exportando as actions
export const {changeUser, logout} = slice.actions;

// exportando o estado do reducer user
export const selectUser = state => state.user;

{/*exportando o reducer user e suas propriedades */}
export default slice.reducer;