// filepath: week-2-express-js/src/server.js
const app = require('./app');
const config = require('./config');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});