import React, { useState, useEffect } from 'react';
import { Table, Spinner, Card } from 'react-bootstrap';

function ViewStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // This runs once when the component loads
  useEffect(() => {
    loadStudents();
  }, []);

  // Get all students from our backend
  const loadStudents = () => {
    fetch('http://localhost:3000/api/students')
        .then(response => response.json())
        .then(data => {
            setStudents(data);
            setLoading(false); // Hide the spinner
        })
        .catch(error => {
            console.error("Error loading students:", error);
            setLoading(false);
        });
  };

  // Show a spinner while loading
  if (loading) {
    return (
        <div className="text-center mt-5">
            <Spinner animation="border" variant="primary" />
        </div>
    );
  }

  return (
    <>
      {/* This is the new page header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">
          <i className="bi bi-people-fill me-2"></i>
          Student List
        </h2>
      </div>

      {/* We use a 'shadow' for a better "pop" */}
      <Card className="shadow">
        <Card.Body>
          {/* This is the Bootstrap Table */}
          <Table striped bordered hover responsive>
              <thead className="table-dark">
                  <tr>
                      <th>ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Class</th>
                  </tr>
              </thead>
              <tbody>
                  {students.map(student => (
                      <tr key={student.id}>
                          <td>{student.id}</td>
                          <td>{student.first_name}</td>
                          <td>{student.last_name}</td>
                          <td>{student.email}</td>
                          <td>{student.class_name}</td>
                      </tr>
                  ))}
              </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}

export default ViewStudents;