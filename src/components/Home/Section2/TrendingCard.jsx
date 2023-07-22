import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Bag } from 'react-bootstrap-icons';
import TreadingImg1 from '../../../assets/trending-01.jpg'
import TreadingImg2 from '../../../assets/trending-02.jpg'
import TreadingImg3 from '../../../assets/trending-03.jpg'
import TreadingImg4 from '../../../assets/trending-04.jpg'
import '../MainHome.css'



const HomeSec1 = () => {

  const TrandingCard = [
    {
      title: "Action",
      Name: "Assian creed",
      price: 20,
      img: TreadingImg1,
      shopImg: Bag,
    },
    {
      title: "Action",
      Name: "Assian creed",
      price: 44,
      img: TreadingImg2,
      shopImg: Bag,
    },
    {
      title: "Action",
      Name: "Assian creed",
      price: 55,
      img: TreadingImg3,
      shopImg: Bag,
    },
    {
      title: "Action",
      Name: "Assian creed",
      price: 32,
      img: TreadingImg4,
      shopImg: Bag,
    },
  ];


  return (
    <div md={1} lg={2}>
      <Container>
      <Row>
        <Col>
            <div className='TrandingTopText1'>
              <h6>TRENDING</h6>
              <h2>Trending Games</h2>
            </div>
        </Col>

        <Col className='TrandingTopTextCol'> 
            <div className='TrandingTopText position-relative top-50 start-50 translate-middle text-light'>
              <a href="##">VIEW ALL</a>
            </div>
        </Col>
      </Row>
      

      <Row xs={1} md={2} lg={4}>

      {
      TrandingCard.map((elem,ind) => {
        return (
          <Col>
          <div className='Tranding'>
            <div className='position-relative '>
            <img src={elem.img} alt=""  className='Trandingimg'/>
            <span className='trandingSpan bg-danger position-absolute top-50 end-0 translate-middle text-light'><em>$ {elem.price + 10}</em> ${elem.price}</span>
            </div>
            
            <div className='TrandingText'>
              <div >
              <span>{elem.title}</span>
                <h4>{elem.Name}</h4>
              </div>
              <div className='TrandingTextImg'>
              <a  className='TrandingTextImgA' href="###"><Bag/></a>
              </div>
               
            </div>
            
          </div>
          </Col>
          
        )

      })

      }

      </Row>
    </Container>
    </div>
  )
}

export default HomeSec1