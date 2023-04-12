import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';

function BookList( ) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function BookList() {
      try {
        const response = await fetch('http://localhost:3001/api/book');
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    }
    BookList();
  }, []);

    // const books=[
    //     { id: 1, book_code: 'B001', book_name: 'Turbo C', book_category: 'Programming',writer:'AB',purchase_price:'250',qty:'40' },
      
    //   ]
      
  return (
    <Container>
      <h1 className="my-4">Book List</h1>
    
         <Table striped bordered hover>
         <thead>
           <tr>
             <th>Book Code</th>
             <th>Book Name</th>
             <th>Book Category</th>
             <th>Writer</th>
             <th>Purchase Price</th>
              <th>Qty</th>

           </tr>
         </thead>
         <tbody>
         {books && books.map(book => (
             <tr key={book.id}>
              <td>{book.book_code}</td>
               <td>{book.book_name}</td>
               <td>{book.book_category}</td>
               <td>{book.writer}</td>
               <td>{book.purchase_price}</td>
               <td>{book.qty}</td>
             </tr>
           ))}
         </tbody>
       </Table>
    </Container>
  );
}

export default BookList;
