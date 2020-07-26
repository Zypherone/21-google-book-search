import React from "react";
import Book from 'components/Book'


function ResultsWrapper(props) {
    return (props.results.length === 0) ? (
        <div>
           <div id="ResultsWrapper">
               <h1> Search Results </h1>
           </div>
           <hr />
        </div>
    ) : (
        <div id="ResultsWrapper">
            <h1> Search Results </h1>
            <hr />
            {props.results.map((book) => {
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
                );
            })}
        </div>
    );
};

export default ResultsWrapper;