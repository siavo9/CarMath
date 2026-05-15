const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Car Math running at http://localhost:${PORT}`);
});
