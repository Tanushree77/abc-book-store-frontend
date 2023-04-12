import React, { useState } from 'react'
import { Card, Button, Form } from 'react-bootstrap';


export default function AddNewBook() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [book, setBook] = useState({
    book_code: '',
    book_name: '',
    book_category: '',
    writer: '',
    publisher: '',
    qty: '',
    purchase_price: '',
    sell_price: '',
  });

  const handleChange = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (newBook) => {
    try {
      const response = await fetch('http://localhost:3001/api/book/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
       
        
      });
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    }
    console.log(newBook.data)

  };
  return (
    <div>
      <h1 className="my-4">Add New Book</h1>
      {success && <p>Book added successfully!</p>}
      {error && <p>{error}</p>}
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Book Code</Form.Label>
              <Form.Control type="name" placeholder="Enter code" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Book Name</Form.Label>
              <Form.Control type="name" placeholder="name" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Book Category</Form.Label>
              <Form.Control type="name" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Writer</Form.Label>
              <Form.Control type="name" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Publisher</Form.Label>
              <Form.Control type="name" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Qty</Form.Label>
              <Form.Control type="name" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Purchase Price</Form.Label>
              <Form.Control type="name" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Sell Price</Form.Label>
              <Form.Control type="name" placeholder="name" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
    </div>
  )
}
