import React, { useEffect } from 'react'
import { Row, Container,Col, } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Iframe from "react-iframe";
import './Contact.css'

const Contact = () => {
    useEffect(() =>{
        document.title = "Contact US"
    })
    const url = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15068.861338003615!2d72.8521856!3d19.2294449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d42c95bdf9%3A0x5a3374a957943f4b!2sTryCatch%20Classes%20%7C%20Full%20Stack%20Web%20Development%20%7C%20Data%20Science%20Python%20Alteryx%20%7C%20Software%20Testing%20%7C%20Android%20IOS%20Flutter%20Training!5e0!3m2!1sen!2sin!4v1689953860388!5m2!1sen!2sin"
  return (
    <>
        <section className='bgIMG'>
        <Container >
            <Row >
                <Col className='ourShopHeadin'>
                <h3 >Our Shop</h3>
                <span className='breedcrumb'>
                    <a href="/">Home</a>
                    {">"} Contact Us
                </span>
                </Col>
            </Row>
        </Container>
    </section>

    <Container className='ContactUsRow'>
            <Row >
                <Col className=''>
                <Card className='ContactUsCard'>
                    <Card.Body>
                        <div>
                        <h6>CONTACT US</h6>
                        <h2>Say Hello!</h2>
                        </div>
                        
                        <p>LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.</p>

                        <ul>
                            <li>
                                <span>Address</span>
                                Sunny Isles Beach, FL 33160, United States
                            </li>
                            <li>
                                <span>Phone</span>
                                +123 456 7890
                            </li>
                            <li>
                                <span>Email</span>
                                lugx@contact.com
                            </li>
                        </ul>
                    </Card.Body>
    </Card>
                </Col>

                <Col className=''>
                        <Card style={{ width: '40rem' }} className='ContactUsCardIframe'>
                        <Card.Body>
                            <div>
                                <Iframe url={url} />
                            </div>
                            <form id="contact-form" action="">
                      <Row xs={1} md={2} lg={5}>
                        <Col className="col-lg-6">
                          <fieldset>
                            <input
                              type="name"
                              name="name"
                              id="name"
                              placeholder="Your Name..."
                              required=""
                            />
                          </fieldset>
                        </Col>
                        <Col className="col-lg-6">
                          <fieldset>
                            <input
                              type="surname"
                              name="surname"
                              id="surname"
                              placeholder="Your Surname..."
                              required=""
                            />
                          </fieldset>
                        </Col>
                        <Col className="col-lg-6">
                          <fieldset>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              pattern="[^ @]*@[^ @]*"
                              placeholder="Your E-mail..."
                              required=""
                            />
                          </fieldset>
                        </Col>
                        <Col className="col-lg-6">
                          <fieldset>
                            <input
                              type="subject"
                              name="subject"
                              id="subject"
                              placeholder="Subject..."
                            />
                          </fieldset>
                        </Col>
                        <Col className="col-lg-12">
                          <fieldset>
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Your Message"
                            ></textarea>
                          </fieldset>
                        </Col>
                        
                      </Row>
                    </form>
                    
                        </Card.Body>
                        </Card>
                        <Col className="col-lg-12">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="orange-button"
                            >
                              Send Message Now
                            </button>
                          </fieldset>
                        </Col>
                </Col>
            </Row>
        </Container>

    </>
  )
}

export default Contact