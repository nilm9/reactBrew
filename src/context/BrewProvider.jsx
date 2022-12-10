import React from 'react'
import { Context } from 'react'

const BrewProvider = ({children}) => {
    
  return (
    <BrewProvider.Provider>
        {children}
    </BrewProvider.Provider>
  )
}

export default BrewProvider