// app/server.js
const app = require('./index');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});