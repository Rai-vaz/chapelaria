import { configureStore } from "@reduxjs/toolkit";
import userReducer from './useSlice'

// nesse arquivo damos nome aos nossos reducer e passamos seu dados para todos os componentes
//por meio do componente Provider e propriedade store que deve englobar o componente App
export default configureStore({
    reducer:{
        user: userReducer,
    }
})