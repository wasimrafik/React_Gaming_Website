import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import SingleGame from "../../assets/single-game.jpg"


const PDExplain = () => {
  return (
    
    <>
      <Container className='PDEImg'>
      <Row>
        <Col >
          <div >
            <img src={SingleGame} alt="Img" />
          </div>
        </Col>
        <Col >
            <div className='SingleImgText'>
                <h4>Call of Duty®: Modern Warfare® II</h4>
                <span className='price'><em>$29</em>$22</span>
                <p>LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.</p>
                <form>
                  <input type="nunmber" name='name' placeholder='1'/>
                  <button type='submit'> ADD TO CART</button>
                </form>
                <ul>
                  <li>
                    <span className='ulliSpan'>Game ID:</span>
                    COD MMII
                  </li>
                  <li>
                    <span className='ulliSpan'>Genre:</span>
                    Action, Team, Single
                  </li>
                  <li>
                    <span className='ulliSpan'>Multi-tags:</span>
                    War, Battle, Royal
                  </li>
                </ul>
            </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default PDExplain