import React, { useContext } from 'react';
import { MessContext } from '../context/MessContext';
import { Card, Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';

function ContactoList() {

  const { contacts } = useContext(MessContext);

  return (
    <>
      <Container>
        <Carousel variant='dark' className='h100 d-flex align-items-center justify-content-center'>
          {contacts.map((contacto, index) => (
            <CarouselItem key={index}>
              <Row className='justify-content-center'>
                <Col xs={12} sm={8} md={6} lg={6} xl={4}>
                  <Link to={`/contactos/${contacto.contacto}`}>
                    <Card border='success' style={{ alignItems: 'center' }} className='mx-auto'>
                      <Card.Title>{contacto.contacto}</Card.Title>
                      <Card.Img variant='bottom' src={`/${contacto.contacto}.png`} alt={contacto.contacto} />
                    </Card>
                  </Link>
                </Col>
              </Row>
            </CarouselItem>
          ))}
        </Carousel>
      </Container>
    </>
  )
}

export default ContactoList;