Student Management System
This is a full-stack app for managing a student list, built with React and Bootstrap. The backend is Node.js with a MySQL database.

It's a simple dashboard where you can see all the students in a table and add new students using a form.

Tech Used:
Frontend: React, React-Bootstrap, Bootstrap 5

Backend: Node.js & Express

Database: MySQL

How to Run It
You need to have two terminals open at the same time.

1. Database Setup (Do this only once)
Make sure your MySQL server is running (from XAMPP or Workbench).

Create a new, empty database. Name it student_system_db.

Go into that database and run the database_setup.sql file (it's in this project) to create the students table.

2. Run the Backend (Terminal 1)
Go into the /backend folder. cd backend

Install the packages (only once). npm install

Important: Make sure your .env file is in this backend folder and has your MySQL password.

Start the server. node server.js

It should say Connected to MySQL database!. Keep this running.

3. Run the Frontend (Terminal 2)
Open a new terminal and go into the /frontend folder. cd frontend

Install the packages (only once). This includes React and Bootstrap. npm install react-bootstrap bootstrap

Start the React app. npm start

This will automatically open the app in your browser.