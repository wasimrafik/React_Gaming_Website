import React from 'react'
import Card from 'react-bootstrap/Card';
import featuredImg1 from "../../assets/featured-01.png"
import featuredImg2 from "../../assets/featured-02.png"
import featuredImg3 from "../../assets/featured-03.png"
import featuredImg4 from "../../assets/featured-04.png"
import './MainHome.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CardSec1 = () => {

  const featuredCard = [
    { title: "Free Storage", img: featuredImg1 },
    { title: "User more", img: featuredImg2 },
    { title: "Reply ready", img: featuredImg3 },
    { title: "easy layout", img: featuredImg4 },
  ];


    return (
<Container >
      <Row xs={1} md={2} lg={4}>
          {
            featuredCard.map((elem,ind) => {
              return(
                <Col key={ind}>
                  <div>
                    <Card className='cardSec1'>
         
                    <Card.Body className='cardSec1Body'>
                      <div className='feature'>
                        <Card.Img variant="top" src={elem.img} className='featureimg' />
                      </div>
         
                        <Card.Text className='featureText'>
                          {elem.title}
                          </Card.Text>
                          </Card.Body>
                        </Card>
                          </div>
                 </Col>
              )
            })
          }
      </Row>
    </Container>
      );
}

export default CardSec1
