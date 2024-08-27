# Simple CRUD Backend

This project is a simple CRUD (Create, Read, Update, Delete) backend API built using Node.js, Express, and MongoDB. It provides basic functionalities to create, read, update, and delete products stored in a MongoDB database.

## Features

- **Create**: Add new products to the database.
- **Read**: Retrieve a list of all products or a specific product by ID.
- **Update**: Modify details of an existing product.
- **Delete**: Remove a product from the database.

## Tech Stack

- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database for storing product data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.

## Installation

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd simple-crud-backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up MongoDB**:
   - Ensure you have a MongoDB Atlas account or a local MongoDB server running.
   - Update the MongoDB connection string in `index.js` with your credentials.

4. **Run the server**:
    ```bash
    npm run dev
    ```

    The server will start on `http://localhost:3000`.

## API Endpoints

- **GET** `/api/products`: Retrieve all products.
- **GET** `/api/products/:id`: Retrieve a product by ID.
- **POST** `/api/products`: Create a new product.
- **PUT** `/api/products/:id`: Update a product by ID.
- **DELETE** `/api/products/:id`: Delete a product by ID.

## Example Product Schema

```javascript
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
});

module.exports = mongoose.model('Product', productSchema);
