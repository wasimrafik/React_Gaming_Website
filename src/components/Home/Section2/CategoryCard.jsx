import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryImg1 from '../../../assets/categories-01.jpg'
import CategoryImg2 from '../../../assets/categories-05.jpg'
import CategoryImg3 from '../../../assets/categories-03.jpg'
import CategoryImg4 from '../../../assets/categories-04.jpg'
import CategoryImg5 from '../../../assets/categories-05.jpg'
import '../MainHome.css'

const CategoryCard = () => {
  const CategoryCard = [
    {
      title: "Action",
      img: CategoryImg1,
    },
    {
      title: "Action",
      img: CategoryImg2,
    },
    {
      title: "Action",
      img: CategoryImg3,
    },
    {
      title: "Action",
      img: CategoryImg4,
    },
    {
      title: "Action",
      img: CategoryImg5,
    },
  ];
  return (
    <div>
      <Container className='HomeSec2'>
      <Row>
        <Col>
            <div className='CategoryTopText '>
              <h6>CATEGORIES</h6>
              <h2>Top Categories</h2>
            </div>
        </Col>
      </Row>


      <Row xs={1} md={2} lg={5}>
        {
          CategoryCard.map((elem,ind) => {
              return(
                <Col >
                <div className='CategoryImgText'>
                <h4>{elem.title}</h4> 
                  <div className='position-relative'>
                    <a href="##">
                    <img src={elem.img} alt=""  className='CategoryImg'/>
                    </a>
                  
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

export default CategoryCard