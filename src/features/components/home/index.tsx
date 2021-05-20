import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDrinks, selectIsLoading, getDrinks } from './../../../app/store/reducer';
import drink from './../../types/drink';

const Home: React.FC = () => {
  const drinks: drink[] = useSelector(selectDrinks)
  const isLoading: boolean = useSelector(selectIsLoading)
  const dispatch = useDispatch()
  const [queryText, setQueryText] = useState<string>('')

  useEffect(() => {
    dispatch(getDrinks(queryText))
  },[getDrinks])

  console.log(drinks)
  return isLoading ? <h1>Loading</h1> : <h1>Hello</h1>
}

export default Home