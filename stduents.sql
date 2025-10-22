CREATE DATABASE student_system;

USE student_system;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    class VARCHAR(50)
);

CREATE TABLE attendance (
    att_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    att_date DATE NOT NULL,
    status ENUM('Present', 'Absent') NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);