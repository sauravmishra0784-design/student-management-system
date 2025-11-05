import React, { useState } from 'react';
import { Form, Button, Alert, Card, Col, Row } from 'react-bootstrap';

function AddStudent({ onStudentAdded }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [className, setClassName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!firstName || !lastName || !email || !className) {
        setError('All fields are required.');
        return;
    }

    const newStudent = { 
        first_name: firstName, 
        last_name: lastName, 
        email: email, 
        class_name: className 
    };

    fetch('http://localhost:3000/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStudent)
    })
    .then(response => {
        if (response.ok) {
            onStudentAdded(); // This will switch back to the 'view' page
        } else {
            setError('Failed to add student.');
        }
    })
    .catch(error => {
        console.error("Error adding student:", error);
        setError('Failed to add student.');
    });
  };

  return (
    <>
      {/* This is the new page header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">
          <i className="bi bi-person-plus-fill me-2"></i>
          Add New Student
        </h2>
      </div>

      {/*
        This Bootstrap Row/Col centers the form
        and makes it not-too-wide on large screens.
      */}
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow">
            <Card.Body>
              
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control 
                          type="text" 
                          placeholder="Enter first name"
                          value={firstName}
                          onChange={e => setFirstName(e.target.value)} 
                      />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="lastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control 
                          type="text" 
                          placeholder="Enter last name" 
                          value={lastName}
                          onChange={e => setLastName(e.target.value)}
                      />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control 
                          type="email" 
                          placeholder="Enter email"
                          value={email}
                          onChange={e => setEmail(e.target.value)} 
                      />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="className">
                      <Form.Label>Class Name</Form.Label>
                      <Form.Control 
                          type="text" 
                          placeholder="e.g., B.Sc. IT"
                          value={className}
                          onChange={e => setClassName(e.target.value)}
                      />
                  </Form.Group>

                  {/*
                    'w-100' makes the button full-width.
                  */}
                  <Button variant="primary" type="submit" className="w-100 d-flex align-items-center justify-content-center">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      Add Student
                  </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default AddStudent;