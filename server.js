import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleSendEmail } from './server/sendEmail.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  try {
    const result = await handleSendEmail(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error('Email API Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Serve static frontend files from dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
