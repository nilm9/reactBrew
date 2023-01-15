import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap"
import useCategory from "../hooks/useCategory"
import useBrew from "../hooks/useBrew"

const FormBrew = () => {

  const {getBrew} = useBrew()

  const [alert, setAlert] = useState('')
  const [search, setSearch] = useState({
    name:'',
    category:''

  })

  const handleSubmit = e => {
    e.preventDefault()
    if(Object.values(search).includes('')){

      setAlert('There are empty fields')
      setTimeout(() => {
        setAlert('')
      }, 2000);
    }
    getBrew(search)
    

  }

  const {category }= useCategory();
  return (
    <Form onSubmit={handleSubmit}> 
      <Row>
       <Col md={6} >
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name"> Brew's name </Form.Label>
            <Form.Control id="name" type="text" placeholder="Ex: Tequila, Vodka, etc" name="name" value={search.name} onChange={e => setSearch({
              ...search,
              [e.target.name] : e.target.value
            })}/>
          </Form.Group>
       </Col> 
       <Col md={6}>
        <Form.Group className="mb-3">
              <Form.Label htmlFor="category"> Brew's category  </Form.Label>
              <Form.Select name="category" id="category" value={search.category} onChange={e => setSearch({
              ...search,
              [e.target.name] : e.target.value
            })}  >
                <option>- Select the category -</option>
                {category.map(type => (
                  <option key={type.strCategory } value={type.strCategory}>
                    {type.strCategory}
                  </option>
                ))}
              </Form.Select>
          </Form.Group>
          {alert && <Alert variant="danger" className="text-center">{alert}</Alert> }
       </Col> 
      </Row>
      <Row>
        <Col md={3} >
          <Button 
          variant="dark" 
          className="text-uppercase w-100" 
          type="submit" >Search brews</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default FormBrew