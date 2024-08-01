import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Получаем текущий каталог
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, '../CoinBase/public')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../CoinBase/public'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({ url: `/${req.file.filename}` });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});