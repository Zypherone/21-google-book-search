import React from "react";
import { Card, Button, Row, Container } from 'react-bootstrap';


function Book(props) {
  const {title, description, id, image, author, link} = props;
  const action = props.deleteBook ? 'delete' : 'save';

  return (
    <>
      <Card id={id + "Card"} border="secondary">
        <Card.Body>    
          <Card.Img src={image} alt={"Image of " + title} variant="left" />
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>by {author}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button variant="secondary" href={link} target="_blank" rel="noopener noreferrer" className="mr-2">View Detail</Button>
            {action === 'delete' ? (
            <Button className="btn btn-danger" id={id} onClick={(event) => { props.deleteBook(event.target.id) }}>Remove</Button>
            ) : (
            <Button className="btn btn-danger" id={id} onClick={(event) => { props.saveBook(event.target.id) }}>Save</Button>
            )}
          </Card.Footer>
      </Card>
      <br />
    </>
  );
};

export default Book