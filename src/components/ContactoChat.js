import React, { useContext } from 'react';
import { MessContext } from '../context/MessContext';
import { useParams } from 'react-router';
import { Container, Image, ListGroup, ListGroupItem } from 'react-bootstrap';

function ContactoChat() {

  const { nombre } = useParams();
  const { contacts } = useContext(MessContext);

  const contact = contacts.find((c) => c.contacto === nombre);

  if (!contact) {
    return <h2>No encontrado el contacto.</h2>
  }

  const mensajesOrdenados = [...contact.mensajes].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  return (
    <>
      
      <Container className='p-3'>
        <h4 className='px-3 py-3 bg-success'>
          <Image src={`/${contact.contacto}.png`} roundedCircle style={{ maxHeight: '60px', marginRight:'20px'}} alt={contact.contacto}/>
          {contact.contacto}
        </h4>
        <ListGroup>
          {mensajesOrdenados.map((mensaje, index) => {
            const esEmisor = mensaje.emisor === contact.contacto;
            return (
              <ListGroupItem key={index} className={esEmisor ? "text-start border-0" : "text-end border-0"}>
                <p><Image src={`/${mensaje.emisor}.png`} rounded style={{maxHeight: '25px', marginInline: '10px'}} alt={mensaje.emisor}/>{mensaje.contenido}</p>
                <small>{new Date(mensaje.timestamp).toLocaleString()} - {mensaje.estado}</small>
                <hr style={{ border: "1px dashed green", width: "100%" }} />
              </ListGroupItem>
            )
          })}
        </ListGroup>
      </Container>

    </>
  )
}

export default ContactoChat;