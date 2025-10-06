// 导入依赖
const express = require('express');
const cors = require('cors');
const app = express();

// 解决跨域（允许所有前端域名访问，测试用）
app.use(cors());

// 解析 JSON 格式的请求体（用于处理 POST 请求）
app.use(express.json());

// 1. 测试接口：GET 请求，返回简单数据
app.get('/api/hello', (req, res) => {
  res.json({ 
    success: true, 
    message: '前后端连接成功！', 
    data: { name: 'Railway 测试', time: new Date().toLocaleString() } 
  });
});

// 2. 示例接口：POST 请求，接收前端数据并返回
app.post('/api/submit', (req, res) => {
  const { username, age } = req.body; // 获取前端提交的数据
  res.json({
    success: true,
    received: { username, age },
    message: `收到数据：${username}，年龄 ${age}`
  });
});

// 启动服务（Railway 会自动分配端口，无需硬编码）
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`服务器运行在端口：${port}`);
});