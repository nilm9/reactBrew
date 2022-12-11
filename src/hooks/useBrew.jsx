import React from 'react'
import { useContext } from 'react'
import BrewContext from '../context/BrewProvider'

const useBrew = () => {
  return useContext(BrewContext)
}

export default useBrew