require('dotenv').config();

const app = require('./App');

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
