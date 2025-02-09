import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Define upload directory inside "backend"
const uploadDir = path.join(process.cwd(), 'backend', 'uploads');

// Ensure "uploads/" directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, uploadDir); // Use absolute path
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname)); // Ensures unique filenames
  },
});

// File filter to accept only images
const fileFilter = (req, file, callback) => {
  if (file.mimetype.startsWith('image/')) {
    callback(null, true);
  } else {
    callback(new Error('Only images are allowed!'), false);
  }
};

// Create multer instance
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export default upload;
