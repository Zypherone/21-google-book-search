import React from "react";
import API from "utils/API";
import { Row, Col } from 'react-bootstrap'
import SavedBooks from "components/SavedBooks";

class SaveBooks extends React.Component {
  state = {
    results: []
  };

  getBooks = () => {
    API.getBooks()
      .then((data) => {
        console.log(data)
        return this.setState({ results: data.data });
      })
      .catch(err => console.log(err));
  };

  removeBook = (id) => {
    API.deleteBook(id)
      .then(() => { this.getBooks() })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getBooks();
  };

  render() {
    const { results } = this.state;
    return (
      <>
        <Row>
          <Col>
            <SavedBooks saved={results} removeBook={this.removeBook} />
          </Col>
        </Row>
      </>
    );
  };
};

export default SaveBooks;