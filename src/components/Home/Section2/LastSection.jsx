import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const LastSection = () => {
  return (

    <Container className="cta">
      <Row md={1} lg={2}>
        <Col lg={5} className="align-self-end">
          <div className="shop">
            <Row>
              <Col>
                <div className="ctaItem">
                  <h6>Our Shop</h6>
                  <h2>
                    Go pre-order buy & get Best <em>prices</em> For you!
                  </h2>
                  <p>
                    Lorem ipsum dolor consectetur adipiscing, sed do eiusmod
                    tempor incididunt.
                  </p>
                  <div className="main-button">
                    <a href="/home">Shop now</a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={5}>
          <div className="subscribe">
            <Row md={1} lg={2}>
              <Col lg={12}>
                <div className="ctaItem1">
                  <h6>newsletter</h6>
                  <h2>
                    get Up to $100 off just buy <em>subscribe</em>{" "}
                    newletter!
                  </h2>
                  <form action="#">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="your email.."
                    />
                    <button type="submit" className="ctaformbtn">
                      Subscribe now
                    </button>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>

  )
}

export default LastSection