import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Auth route working'
  });
});

router.post('/register', (req, res) => {
  res.json({
    success: true,
    message: 'Register endpoint'
  });
});

router.post('/login', (req, res) => {
  res.json({
    success: true,
    message: 'Login endpoint'
  });
});

export default router;
