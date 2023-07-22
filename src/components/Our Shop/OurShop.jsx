import React from 'react'
import { Bag } from 'react-bootstrap-icons';
import './OurShop.css';
import categories1 from '../../assets/categories-01.jpg'
import categories2 from '../../assets/categories-04.jpg'
import categories3 from '../../assets/categories-03.jpg'
import categories4 from '../../assets/categories-04.jpg'
import TopGame6 from '../../assets/top-game-06.jpg'
import TopGame1 from '../../assets/top-game-01.jpg'
import TopGame2 from '../../assets/top-game-02.jpg'
import TopGame3 from '../../assets/top-game-03.jpg'
import TopGame4 from '../../assets/top-game-04.jpg'
import TopGame5 from '../../assets/top-game-05.jpg'
import trending1 from '../../assets/trending-01.jpg'
import trending2 from '../../assets/trending-03.jpg'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Row, Container,Col, } from 'react-bootstrap'
import { useEffect } from 'react';



const OurShop = () => {
    useEffect(() =>{
        document.title = "Oup Shop"
      },[])
     
     
const AllGames = [
    {
      "id": 0,
      "name": "assian creed",
      "img": categories1,
      "price": 20,
      "type": "ACTION",
      "explore": "explore"
    },
    {
      "id": 1,
      "name": "assian creed",
      "img": categories2,
      "price": 44,
      "type": "ACTION",
      "explore": "explore"
    },
    {
      "id": 2,
      "name": "assian creed",
      "img": categories3,
      "price": 55,
      "type": "ACTION",
      "explore": "explore"
    },
    {
      "id": 3,
      "name": "assian creed",
      "img": categories4,
      "price": 10,
      "type": "ACTION",
      "explore": "explore"
    },
    {
      "id": 4,
      "name": "assian creed",
      "img": TopGame1,
      "price": 30,
      "type": "RACING",
      "explore": "explore"
    },
    {
      "id": 5,
      "name": "assian creed",
      "img": TopGame2,
      "price": 20,
      "type": "RACING",
      "explore": "explore"
    },
    {
      "id": 6,
      "name": "assian creed",
      "img": TopGame3,
      "price": 100,
      "type": "RACING",
      "explore": "explore"
    },
    {
      "id": 7,
      "name": "assian creed",
      "img": TopGame4,
      "price": 80,
      "type": "RACING",
      "explore": "explore",
      "mostplayed": 2
    },
    {
      "id": 8,
      "name": "assian creed",
      "img": TopGame5,
      "price": 30,
      "type": "RACING",
      "explore": "explore",
      "mostplayed": 3
    },
    {
      "id": 9,
      "name": "assian creed",
      "img": TopGame6,
      "price": 20,
      "type": "STRATEGY",
      "explore": "explore",
      "mostplayed": 5
    },
    {
      "id": 10,
      "name": "assian creed",
      "img": trending1,
      "price": 20,
      "type": "STRATEGY",
      "explore": "explore",
      "mostplayed": 1
    },
    {
      "id": 11,
      "name": "assian creed",
      "img": trending2,
      "price": 70,
      "type": "STRATEGY",
      "explore": "explore",
      "mostplayed": 6
    },{
        "id": 12,
        "name": "assian creed",
        "img": trending2,
        "price": 70,
        "type": "STRATEGY",
        "explore": "explore",
        "mostplayed": 6
      }
  ];  

  const filterData = AllGames.slice(0,4);

  const filterData1 = AllGames.slice(4,8);

  const filterData2 = AllGames.slice(9,13);
//   console.log(filterData)

  return (
    <>  
    <section className=''>
        <Container >
            <Row >
                <Col className='ourShopHeadin'>
                <h3 >Our Shop</h3>
                <span className='breedcrumb'>
                    <a href="/">Home</a>
                    {">"} Our Shop
                </span>
                </Col>
            </Row>
        </Container>
    </section>

    <Container>
    <Tabs
      defaultActiveKey="SHOW ALL"
      id="uncontrolled-tab-example"
      className="mb-3 NavandTab"
    >
        <Tab eventKey="SHOW ALL" title="SHOW ALL" >
        <Row xs={1} md={2} lg={4}>
        {
         AllGames.map((elem,ind) =>{
            return (
                <>
                 <Col className='OurShopMain'>
                  <div className='position-relative '>
                  <img src={elem.img} alt=""  className='OurShopImg'/>
                  <span className='OurShopImgSpan bg-danger position-absolute top-50 end-0 translate-middle text-light'>{ <em>$ {elem.price + 10}</em> } $ {elem.price}</span>
                  </div>
                  
                  <div className='OurShopTxt'>
                    <div >
                    <span>{elem.type}</span>
                      <h4>{elem.name}</h4>
                    </div>
                    <div className='OurShopTxtImg'>
                    <a  className='OurShopTxtImgA' href="###"><Bag/></a>
                    </div>
                     
                  </div>   
                  </Col> 
                  </>
            )
        })
        }
        </Row>
        </Tab>

      <Tab eventKey="ADVENTURE" title="ADVENTURE" id='2'>
      <Row xs={1} md={2} lg={4}>
        {
         filterData.map((elem,ind) =>{
            return (
                <>
                 <Col className='OurShopMain'>
                  <div className='position-relative '>
                  <img src={elem.img} alt=""  className='OurShopImg'/>
                  <span className='OurShopImgSpan bg-danger position-absolute top-50 end-0 translate-middle text-light'>{ <em>$ {elem.price + 10}</em> } $ {elem.price}</span>
                  </div>
                  
                  <div className='OurShopTxt'>
                    <div >
                    <span>{elem.type}</span>
                      <h4>{elem.name}</h4>
                    </div>
                    <div className='OurShopTxtImg'>
                    <a  className='OurShopTxtImgA' href="###"><Bag/></a>
                    </div>
                     
                  </div>   
                  </Col> 
                  </>
            )
        })
        }
        </Row>
      </Tab>

      <Tab eventKey="STRATEGY" title="STRATEGY" >
      <Row xs={1} md={2} lg={4}>
        {
         filterData2.map((elem,ind) =>{
            return (
                <>
                 <Col className='OurShopMain'>
                  <div className='position-relative '>
                  <img src={elem.img} alt=""  className='OurShopImg'/>
                  <span className='OurShopImgSpan bg-danger position-absolute top-50 end-0 translate-middle text-light'>{ <em>$ {elem.price + 10}</em> } $ {elem.price}</span>
                  </div>
                  
                  <div className='OurShopTxt'>
                    <div >
                    <span>{elem.type}</span>
                      <h4>{elem.name}</h4>
                    </div>
                    <div className='OurShopTxtImg'>
                    <a  className='OurShopTxtImgA' href="###"><Bag/></a>
                    </div>
                     
                  </div>   
                  </Col> 
                  </>
            )
        })
        }
        </Row>
      </Tab>

      <Tab eventKey="RACING" title="RACING" >
      <Row xs={1} md={2} lg={4}>
        {
         filterData1.map((elem,ind) =>{
            return (
                <>
                 <Col className='OurShopMain'>
                  <div className='position-relative '>
                  <img src={elem.img} alt=""  className='OurShopImg'/>
                  <span className='OurShopImgSpan bg-danger position-absolute top-50 end-0 translate-middle text-light'>{ <em>$ {elem.price + 10}</em> } $ {elem.price}</span>
                  </div>
                  
                  <div className='OurShopTxt'>
                    <div >
                    <span>{elem.type}</span>
                      <h4>{elem.name}</h4>
                    </div>
                    <div className='OurShopTxtImg'>
                    <a  className='OurShopTxtImgA' href="###"><Bag/></a>
                    </div>
                     
                  </div>   
                  </Col> 
                  </>
            )
        })
        }
        </Row>
      </Tab>
    </Tabs>
            

    </Container>

    <Container>
    <div>
            <ul className="pagination">
              <li>
                <a href="/shop"> {"<"}</a>
              </li>
              <li>
                <a href="/shop"> {"1"}</a>
              </li>
              <li>
                <a href="/shop" className="is_active">
                  {"2"}
                </a>
              </li>
              <li>
                <a href="/shop"> {"3"}</a>
              </li>
              <li>
                <a href="/shop"> {">"}</a>
              </li>
            </ul>
          </div>
            
    </Container>    

    </>
    
  )
}

export default OurShop






