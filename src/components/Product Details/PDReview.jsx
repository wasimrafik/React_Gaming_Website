import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const PDReview = () => {
  return (
    <>
  <Tabs 
      defaultActiveKey="Description"
      id="uncontrolled-tab-example"
      className="mb-3 PDReview"
    >
      <Tab eventKey="Description" title="Description">
        <p className='PDTextP'>You can search for more templates on Google Search using keywords such as "templatemo digital marketing", "templatemo one-page", "templatemo gallery", etc. Please tell your friends about our website. If you need a variety of HTML templates, you may visit Tooplate and Too CSS websites.</p>
        <p className='PDTextP'>Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.</p>
      </Tab>
      <Tab eventKey="profile" title="Reviews (3)">
          <p className='PDTextP'>Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen.</p>
          <p className='PDTextP'>Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.</p>
      </Tab>
    </Tabs>
    </>
  )
}

export default PDReview