import React from 'react'
import './Footer.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer>
        <Row xs={1} md={1}>
            <Col>
                <p className='footer'>Copyright © 2048 LUGX Gaming Company. All rights reserved.    Design: Wasim Jagrala</p>
            </Col>
        </Row>
    </footer>
  )
}

export default Footer


