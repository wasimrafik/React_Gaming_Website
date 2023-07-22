import React from 'react'
import { Row, Container,Col, } from 'react-bootstrap'
import './PD.css';
import { useEffect } from 'react';
const PDHeading = () => {
  useEffect(() =>{
    document.title = "Product Details"
  },[])
  return (
    <>
        <section className='bgIMGPD'>
        <Container >
            <Row >
                <Col className='productheading'>
                <h3 >MODERN WARFARE<sup>®</sup> II</h3>
                <span className='breedcrumb'>
                    <a className='anchorPD' href="/">Home</a>
                    {">"} 
                    <a className='anchorPD' href="/shop">Shop</a>
                    {">"} 
                    <span className='span2'>Assasin Creed </span> 
                </span>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default PDHeading