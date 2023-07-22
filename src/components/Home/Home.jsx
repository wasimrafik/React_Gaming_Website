import React, { useEffect } from 'react'
import './MainHome.css'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import mainImg from "../../assets/banner-image.jpg";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


import Col from 'react-bootstrap/Col';

const Home = () => {
  useEffect(() =>{
    document.title = "Home Page"
  },[])
  
  return (
    <>

      <div className='MainBanner'>
      <div className='container'>
        <Container>
      <Row className="justify-content-md-center">
        <Col>
          <div className='MainDivText'>
            <h6 className='text1'>Welcome to lugx</h6>

            <h2 className='text2'>BEST GAMING SITE EVER!</h2>
            
            <p className='text3'>LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.</p>
          </div>
          <div className='searchTextDiv'>
          <InputGroup className="mb-3 searchText">
        <Form.Control
          placeholder="Type Something"
          aria-describedby="basic-addon2"
        />
        <Button className='searchbtn' variant="outline-secondary" id="button-addon2">
        Search
        </Button>
      </InputGroup>
          </div>
        </Col>
        <Col  xs lg="5">
          <div className="hero-img text-end position-relative ms-auto">
            <img className="imgBanner" src={mainImg} alt="Banner Img" />
            <span className="tool bg-danger position-absolute top-100 start-50 translate-middle translate-start text-light">-40%</span>
            <span className="price rounded-pill bg-primary position-absolute text-light fw-bold fs-4">22$</span>
          </div>

        </Col>
      </Row>
    </Container>
      </div>
      </div>
      

    
    </>
  )
}

export default Home