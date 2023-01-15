import React from 'react'
import useBrew from '../hooks/useBrew'
import { Row } from 'react-bootstrap';
import Brew from './Brew';

const BrewsList = () => {
  const {brews} = useBrew();
  return (
    <Row className='mt-5'>
      {brews.map(brew => (
        <Brew key={brew.idDrink} brew={brew}/>  
    
      ))}
    </Row>
   
  )
}

export default BrewsList