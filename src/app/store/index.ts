import { configureStore } from '@reduxjs/toolkit'
import drinksReducer from './reducer'

const store = configureStore({
  reducer: {
    drinks: drinksReducer,
  },
})

export{ store }
