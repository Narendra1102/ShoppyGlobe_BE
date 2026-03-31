# 🛒 ShoppyGlobe REST API

A complete E-commerce Backend REST API built using Node.js, Express.js, MongoDB, and JWT Authentication.

This project implements product management, user authentication, and cart functionality following REST principles.

---

## 📌 Features

### 🔐 Authentication
- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Token Generation
- Protected Routes using Middleware

### 📦 Product Management
- Get All Products
- Get Product by ID

### 🛒 Cart Management (Protected)
- Add Product to Cart
- Update Cart Item Quantity
- Remove Item from Cart

### 🗄 Database
- MongoDB Atlas
- Mongoose ODM
- Proper Schema Design

### 🧪 API Testing
- Tested using ThunderClient
- Proper HTTP Status Codes
- Error Handling Middleware

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- nodemon

---

## 📁 Project Structure

```
Shoppyglobe-API/
│
│
├── controller/
│   ├── user.controller.js
│   ├── product.controller.js
│   └── cart.controller.js
│
├── middleware/
│   └── verify.js
│
├── model/
│   ├── user.model.js
│   ├── product.model.js
│   └── cart.model.js
│
├── routes/
│   ├── user.route.js
│   ├── product.route.js
│   └── cart.route.js
│
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Narendra1102/Shoppyglobe-API
cd "Shoppyglobe API"
```

### 2️⃣ Install Dependencies

```bash
npm init -y
```


```
PORT=3000
```


### 4️⃣ Run the Server

```bash
npm start
```

If successful, you will see:

```
Connected to MongoDB Atlas 
Server running on port 3000
```

---

## 📬 API Endpoints

---

### 🔐 Authentication Routes

#### ➤ Register User

POST `/register`

Request Body:
```json
{
  "name": "Narendra Reddy Venna",
  "email": "narendra@123",
  "password": "123"
}
```

---

#### ➤ Login User

POST `/login`

Request Body:
```json
{
  "email": "narendra@123",
  "password": "123"
}
```

Response:
```json
{
  "token": "JWT_TOKEN_HERE"
}
```

---

### 📦 Product Routes

#### ➤ Get All Products

GET `/products`

---

#### ➤ Get Product by ID

GET `/products/:id`

Example:
```
GET /products/65f3e21abc1234567890
```

---

### 🛒 Cart Routes (Protected)

Requires JWT Token in header:

```
Authorization: JWT <your_token>
```

---

#### ➤ Add to Cart

POST `/cart`

```json
{
  "user": "USER_ID" ,
  "product": "PRODUCT_ID",
  "quantity": 3
}
```

---

#### ➤ Update Cart Item

PUT `/cart/:id`

```json
{
  "quantity": 5
}
```

---

#### ➤ Delete Cart Item

DELETE `/cart/:id`

---

## 🗄 Database Collections

- users
- products
- carts

---

## 🛡 Error Handling

- 400 → Bad Request
- 401 → Unauthorized
- 403 → Forbidden
- 404 → Not Found
- 409 → Conflict
- 500 → Server Error



Global error handling middleware implemented.

---

## 🧪 Testing

Tested using:
- ThunderClient
- MongoDB Atlas


## Screenshots

https://drive.google.com/file/d/1p4fHDRLFtftISYYZSUDTtZ5UvU_BPT2Y/view



## 👨‍💻 Author

Narendra Reddy Venna
GitHub: https://github.com/Narendra1102
