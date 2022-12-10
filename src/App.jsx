import { useState } from 'react'
import { Container } from 'react-bootstrap'
import FormBrew from './components/FormBrew'
import { CategoryProvider } from './context/CategoryProvider'
function App() {

  return (
    <CategoryProvider>
    <header className="py-5">
      <h1>Brew Browser</h1>
    </header>

    <Container className='mt-5'>
      <FormBrew/>
    </Container>
    </CategoryProvider>

  )
}

export default App
