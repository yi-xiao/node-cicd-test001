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

// ❌ 故障触发器：让事件循环阻塞 15 秒（模拟死循环或 CPU 密集型任务）
app.get('/crash', (req, res) => {
  console.log('💥 Crash endpoint triggered! Blocking event loop...');
  const start = Date.now();
  // 同步阻塞 15 秒（模拟死循环）
  while (Date.now() - start < 15000) {
    // 什么都不做，只是占用 CPU
  }
  res.send('Recovered from crash! (This should not be reachable under normal probe config)');
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});