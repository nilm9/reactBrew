import React, { createContext, useEffect, useState } from 'react'
import { Context } from 'react'
import axios from 'axios'
const BrewContext = createContext()

const BrewProvider = ({children}) => {

  const [brews, setBrews] = useState([])


  const getBrew = async search => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`

      const {data} = await axios(url)
      setBrews(data.drinks);


    } catch (error) {
      console.error(error);
    }
  
  }
    
  return (
    <BrewContext.Provider value={{getBrew, brews}}>
        {children}
    </BrewContext.Provider>
  )
}
export {
  BrewProvider
}

export default BrewContext