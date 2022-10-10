import React from 'react'
import { Card } from 'react-bootstrap'
import VINEETA from "../../Assets/Group 36.png"
const Carousel = () => {
  return (
    <>
   <section className='Card'> <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={VINEETA} />
    <Card.Body border="secondary">
      <Card.Title className='card-text'>VINEETA SINGH</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </section>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={VINEETA} />
    <Card.Body>
      <Card.Title className='card-text'>VINEETA SINGH</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </>
  )
}

export default Carousel