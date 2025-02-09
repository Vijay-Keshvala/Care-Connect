import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import cloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';

// App config
const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Ensure Cloudinary is properly configured
console.log("Cloudinary Config Loaded:", cloudinary.config());

// API Endpoints
app.use('/api/admin', adminRouter); // localhost:4000/api/admin

app.get('/', (req, res) => {
    res.send("API Running");
});

app.listen(port, () => console.log("Server Started on Port", port));

// Debugging Cloudinary Credentials
console.log("Cloudinary Credentials:", {
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_SECRET_KEY: process.env.CLOUDINARY_SECRET_KEY
});
