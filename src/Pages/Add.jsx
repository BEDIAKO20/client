import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd'; // Import Ant Design components

function Add() {
  const [books, setBooks] = useState({
    title: '',
    desc: '',
    price: null,
    cover: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    try {
      await axios.post('http://localhost:8800/books', books);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1>Add New Book</h1>
      <Form layout="vertical" onFinish={handleClick}> {/* onFinish handles the form submission */}
        <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter the title' }]}>
          <Input placeholder="Title" name="title" onChange={handleChange} />
        </Form.Item>

        <Form.Item label="Description" name="desc" rules={[{ required: true, message: 'Please enter the description' }]}>
          <Input placeholder="Description" name="desc" onChange={handleChange} />
        </Form.Item>

        <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please enter the price' }]}>
          <Input type="number" placeholder="Price" name="price" onChange={handleChange} />
        </Form.Item>

        <Form.Item label="Cover Image URL" name="cover">
          <Input placeholder="Cover Image URL" name="cover" onChange={handleChange} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            ADD
          </Button>
        </Form.Item>
      </Form>
      {/* pm i express mysql nodemon    */}
    </div>
  );
}

export default Add;
