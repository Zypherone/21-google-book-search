import React from "react";
import { Container } from "react-bootstrap";
import Book from 'components/Book'


function Results(props) {
  return (
    <Container as="Main">
      <h2>Search Results</h2>
      {(props.results.length !== 0) ? (
        props.results.map((book) => {
          return (
            <Book
              key={book.id}
              id={book.id}
              image={book.image}
              title={book.title}
              author={book.authors}
              description={book.description}
              link={book.link}
              saveBook={props.saveBook}
            />
          )
        })
      ) : (
        <p>No Results</p>
      )}
    </Container>
  );
};

export default Results;