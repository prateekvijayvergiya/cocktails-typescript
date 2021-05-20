import { configureStore } from '@reduxjs/toolkit'
import drinksReducer from './reducer'

const store = configureStore({
  reducer: {
    counter: drinksReducer,
  },
})

export{ store }
