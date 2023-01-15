import { useState } from 'react'
import { Container } from 'react-bootstrap'
import FormBrew from './components/FormBrew'
import { CategoryProvider } from './context/CategoryProvider'
import { BrewProvider } from './context/BrewProvider'
import BrewsList from './components/BrewsList'
import ModalBrew from './components/ModalBrew'
function App() {

  return (
    <CategoryProvider>
      <BrewProvider>
        <header className="py-5">
          <h1>Brew Browser</h1>
        </header>

        <Container className='mt-5'>
          <FormBrew/>
          <BrewsList/>
          <ModalBrew/>
        </Container>

      </BrewProvider>
    </CategoryProvider>

  )
}

export default App
