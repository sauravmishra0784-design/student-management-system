Student Management System

This is a simple web app to keep track of student details for a college project. It uses HTML and CSS for the front end, and a Node.js server with a MySQL database for the back end.

How to Run This Project

Follow these steps to get the project working on your computer.

Step 1: Set up the Database

Start your XAMPP Control Panel and make sure Apache and MySQL are running.

Go to http://localhost/phpmyadmin in your browser.

Click on the "SQL" tab.

Open the database_setup.sql file from this project, copy all the code inside it, and paste it into the SQL box.

Click the "Go" button. This will create the student_system database and the students table.

Step 2: Start the Backend Server

Open a terminal (like CMD or the one in VS Code).

Go into the /backend folder of this project.

Run the command below to download the code the server needs. You only have to do this once.

npm install


Heads up! Check the server.js file to make sure the database password is correct for your XAMPP setup. Most of the time, the password is blank ('').

Now, start the server by running:

node server.js


The terminal should say Server running on http://localhost:3001. Keep this terminal open!

Step 3: View the Website

Open the /frontend folder in VS Code.

Right-click on the view-students.html file.

Choose "Open with Live Server".

Your browser will open the website, and it should now be working correctly.