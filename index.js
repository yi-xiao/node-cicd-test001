const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});


app.get('/', (req, res) => {
    res.send('Hello from CI/CD pipeline!');
    console.log('Hello from CI/CD pipeline!');
});

app.get('/k8s-test', (req, res) => {
    res.send('Test for k8s deployment!');
    console.log('Test for k8s deployment!');
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});