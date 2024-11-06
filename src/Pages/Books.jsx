import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd'; // Import Card and Button from antd

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('http://localhost:8800/books');
        setBooks(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      
      // Update the state to remove the deleted book
      setBooks(books.filter(book => book.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Kofi's Book Shop</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}> {/* To display cards in grid */}
        {books.map((book) => (
          <Card
            key={book.id}
            hoverable
            cover={book.cover && <img src={book.cover} alt={book.title} />}
            style={{ width: 240 }} // Adjust card width
          >
            <Card.Meta title={book.title} description={book.desc} />
            
            {/* Centering price and buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
              <p>{book.price}</p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}> {/* Flex container for buttons */}
                {/* Delete Button with red color */}
                <Button
                  type="primary"
                  danger
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </Button>

                {/* Update Button with custom color */}
                <Button
                  type="primary"
                  style={{
                    backgroundColor: '#52c41a',
                    borderColor: '#52c41a',
                  }}
                >
                    <Link to={`/updata/${book.id}`} >Update</Link>
                 
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button type="primary" style={{ marginTop: '20px' }}>
        <Link to="/add" style={{ color: '#fff' }}>Add New Book</Link>
      </Button>
    </div>
  );
}

export default Books;
