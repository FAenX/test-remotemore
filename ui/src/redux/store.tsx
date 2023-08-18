import { configureStore } from '@reduxjs/toolkit'
import ph from "./reducers/reducers"


export const store = configureStore({
    reducer: {
        ph: ph,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch