import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import initialStateType from '../../features/types/initialState'

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s`

const initialState: initialStateType = {
  drinks: [],
  isLoading: false
}

export const getDrinks = createAsyncThunk(
  'drinks/search',
  async (query: string = '') => {
    const {data} = await axios.get(`${url}=${query}`)
    return data
  }
)

export const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getDrinks.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getDrinks.fulfilled, (state, action) => {
        state.isLoading = false
        state.drinks = action.payload
      })
  },
})

export const selectDrinks = (state: any) => state.drinks.drinks
export const selectIsLoading = (state: any) => state.drinks.isLoading

export default drinksSlice.reducer