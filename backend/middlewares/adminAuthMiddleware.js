// authMiddleware.js
const jwt = require('jsonwebtoken');

// Middleware to verify user authentication
exports.authenticateUser = (req, res, next) => {
  const token = req.header('x-access-token');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    if (!decoded.isAdmin) throw new Error("only admin can access!");
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error });
  }
};
