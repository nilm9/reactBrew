import React from 'react'
import { useState, createContext, useEffect } from 'react'
import axios from 'axios';



const CategoryContext = createContext();




const CategoryProvider = ({children}) => {

    const [category, setCategory] = useState({})

    const handleChangeCategory = () =>{
        setCategory(e.target.value)
    }

    const getCategories = async () =>{
        try {
            const url =`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`      
            const { data} = await axios(url)
            console.log(data.drinks);
            setCategory(data.drinks)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getCategories()
    }, []);



  return (
    <CategoryContext.Provider value={{category, handleChangeCategory}}>
        {children}
    </CategoryContext.Provider>
  

    )

}
export {
    CategoryProvider
}

export default CategoryContext