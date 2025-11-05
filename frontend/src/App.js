import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ViewStudents from './ViewStudents';
import AddStudent from './AddStudent';

function App() {
  // This 'page' state controls which component to show
  const [page, setPage] = useState('view');

  return (
    // This div gives the whole app the light gray background
    <div className="App bg-light min-vh-100">
      
      {/*
        'sticky-top' makes the navbar stay at the top.
        'shadow-sm' adds a subtle shadow.
      */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">
            {/* Here's our navbar icon */}
            <i className="bi bi-person-video3 me-2"></i> 
            Student Management
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* 'ms-auto' pushes the links to the right */}
            <Nav className="ms-auto"> 
              <Nav.Link 
                href="#view" 
                onClick={() => setPage('view')}
                active={page === 'view'}
              >
                <i className="bi bi-table me-1"></i>
                View Students
              </Nav.Link>
              <Nav.Link 
                href="#add" 
                onClick={() => setPage('add')}
                active={page === 'add'}
              >
                <i className="bi bi-person-plus-fill me-1"></i>
                Add Student
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* This Container centers our "pages" and adds padding */}
      <Container className="mt-4">
        {page === 'view' && (
          <ViewStudents />
        )}
        {page === 'add' && (
          <AddStudent onStudentAdded={() => setPage('view')} />
        )}
      </Container>
    </div>
  );
}

export default App;