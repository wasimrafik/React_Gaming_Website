import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopGameImg1 from '../../../assets/top-game-01.jpg'
import TopGameImg2 from '../../../assets/top-game-02.jpg'
import TopGameImg3 from '../../../assets/top-game-03.jpg'
import TopGameImg4 from '../../../assets/top-game-04.jpg'
import TopGameImg5 from '../../../assets/top-game-05.jpg'
import TopGameImg6 from '../../../assets/top-game-06.jpg'
import '../MainHome.css'


const TopGameCard = () => {

  const TopgamesCard = [
    {
      title: "Action",
      Name: "Assian creed",
      img: TopGameImg1,
      Explore: "Explore",
    },
    {
      title: "Action",
      Name: "Assian creed",
      img: TopGameImg2,
      Explore: "Explore",
    },
    {
      title: "Action",
      Name: "Assian creed",
      img: TopGameImg3,
      Explore: "Explore",
    },
    {
      title: "Action",
      Name: "Assian creed",
      img: TopGameImg4,
      Explore: "Explore",
    },
    {
      title: "Action",
      Name: "Assian creed",
      img: TopGameImg5,
      Explore: "Explore",
    },
    {
      title: "Action",
      Name: "Assian creed",
      img: TopGameImg6,
      Explore: "Explore",
    },
  ];



  return (
    <div>
      <Container className='HomeSec2'>
      <Row>
        <Col>
            <div className='TopGameText1'>
              <h6>TOP GAMES</h6>
              <h2>Most Played</h2>
            </div>
        </Col>

        <Col className='TopGameTextCol'> 
            <div className='TopGameText position-relative top-50 start-50 translate-middle text-light'>
              <a href="##">VIEW ALL</a>
            </div>
        </Col>
      </Row>

      <Row xs={1} md={2} lg={6}>
      {TopgamesCard.map((elem,ind) => {
          return (
            <Col className='TopGameCol'>
            <div className='TopGame1'>
              <div className='position-relative'>
              <img src={elem.img} alt=""  className='TopGameimg'/>
              </div>

              <div className='TopGameText2'>
                <span>{elem.title}</span>
                  <h4>{elem.Name}</h4>              
              </div>
              
              <div className='TopGameLink'>
                <a  className='' href="###">{elem.Explore}</a>
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

export default TopGameCard