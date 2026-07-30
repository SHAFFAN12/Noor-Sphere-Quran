import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { handleSendEmail } from './server/sendEmail.js';

dotenv.config();

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

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
