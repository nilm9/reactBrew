import { Button, Form, Row, Col } from "react-bootstrap"
import useCategory from "../hooks/useCategory"

const FormBrew = () => {

  const {category, handleChangeCategory }= useCategory();
  return (
    <Form>
      <Row>
       <Col md={6} >
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name"> Brew's name </Form.Label>
            <Form.Control id="name" type="text" placeholder="Ex: Tequila, Vodka, etc" name="name" />
          </Form.Group>
       </Col> 
       <Col md={6}>
        <Form.Group className="mb-3">
              <Form.Label htmlFor="category"> Brew's category  </Form.Label>
              <Form.Select name="category" id="category" onChange={handleChangeCategory} >
                <option>- Select the category -</option>
                {category.map(type => (
                  <option key={type.strCategory } value={type.strCategory}>
                    {type.strCategory}
                  </option>
                ))}
              </Form.Select>
          </Form.Group>
       </Col> 

      </Row>
    </Form>
  )
}

export default FormBrew