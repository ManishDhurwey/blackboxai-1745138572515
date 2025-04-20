# MERN Ecommerce Website with AWS Hosting

## Overview
This is a MERN stack ecommerce website with backend API built using Express and MongoDB, and frontend built with React and Tailwind CSS. The project is designed for deployment on AWS hosting services.

## Features
- Product listing, product details
- Shopping cart with quantity management
- Checkout form to place orders
- Backend API with product and order management
- AWS hosting ready (frontend on S3 + CloudFront, backend on Elastic Beanstalk or EC2)

## Project Structure
- `backend/`: Express server, MongoDB models, API routes
- `frontend/`: React app with Tailwind CSS and components

## Prerequisites
- Node.js and npm installed
- MongoDB URI (e.g., MongoDB Atlas)
- AWS account for hosting

## Setup and Running Locally

### Backend
1. Navigate to the backend folder:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install express mongoose cors dotenv
   ```
3. Create a `.env` file in `backend/` with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the backend server:
   ```
   node server.js
   ```

### Frontend
1. Navigate to the frontend folder:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React app:
   ```
   npm start
   ```
4. The app will be available at `http://localhost:3000`

## AWS Hosting Deployment

### Frontend (React App)
1. Build the React app:
   ```
   npm run build
   ```
2. Deploy the contents of the `build/` folder to an AWS S3 bucket configured for static website hosting.
3. Optionally, use AWS CloudFront for CDN and HTTPS.

### Backend (Express API)
1. Package the backend code.
2. Deploy to AWS Elastic Beanstalk or EC2 instance.
3. Configure environment variables on AWS for MongoDB URI and PORT.
4. Ensure the backend API is accessible publicly.

## Notes
- Update API URLs in frontend if backend is hosted on a different domain.
- Secure AWS credentials and environment variables properly.

## License
MIT License
