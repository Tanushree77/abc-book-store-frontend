import React from 'react'
import { Card, Button, Form } from 'react-bootstrap';
import AddNewBook from './books/AddNewBook';
import HomeNavbar from './HomeNavbar';
import BookList from './books/BookList.';


export default function Home() {
  return (
    <>
    <HomeNavbar />
    {/* <header> */}
   <div className='row m-2'>
   <div className='col'>
   <AddNewBook/>
   </div>
   
   <div className='col'>
   <BookList />
   </div>
   </div>
      {/* </header> */}
      </>
   
    //   <Card style={{ width: '18rem' }}>
    //     <Card.Title>Book Setup</Card.Title>
    //     <Card.Body>
       
    //     </Card.Body>
    //   </Card>
  )
}
