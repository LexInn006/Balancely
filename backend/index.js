require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');  
app.use('/api/auth', authRoutes);     

app.get('/', (req, res) => {
  res.json({ message: 'Balancely API is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});