

import { Col, Container, Row } from 'react-bootstrap'
import './global.css';
import Order from './components/Order'

function App() {
  

  return (
    
<div className='container'>

<Container fluid  >
      
      <Row >
        <Col></Col>
        <Col md={6} lg={6}> 
        <h2 className='mb-5 mt-3 '>Purchase Orders</h2>
        <Order/>
        </Col>
        <Col></Col>
      </Row>

    </Container>
    </div>

  )
}

export default App