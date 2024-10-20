# Connectverse - MERN Stack Application
Connectverse is a social media platform built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) that enables users to register, log in, and manage their accounts securely.
## Features
- User registration and authentication
- JWT-based secure sessions
- Responsive design
- "Remember Me" functionality for login
## Technology Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
## Setup Instructions
### Prerequisites
- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community) (ensure it is running)
### Clone the Repository
```bash
git clone https://github.com/<your-username>/Connectverse.git
cd Connectverse
Install Dependencies
Backend
->cd .\backend\ 
->npm install
Frontend
->cd .\frontend\
->npm install
Running the Application
Start the Backend Server
->cd .\backend\ 
->npm start
Start the Frontend Application
->cd .\frontend\
->npm start
Access the application at http://localhost:3000
API Endpoints
->POST /api/auth/signup: Registers a new user
->POST /api/auth/login: Authenticates a user
