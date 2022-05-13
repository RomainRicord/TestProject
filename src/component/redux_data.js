import { createSlice, configureStore } from '@reduxjs/toolkit'

import userReducer from '../features/user'
import passwordReducer from '../features/password'
import passwordconfirmedReducer from '../features/passwordconfirmed'

export default configureStore({
    reducer: {
        user:userReducer,
        password:passwordReducer,
        passwordconfirmed:passwordconfirmedReducer
    },
})