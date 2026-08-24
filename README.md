# CI/CD Test Project

这是一个用于演示 CI/CD 流程的 Node.js 示例项目，包含一个简单的 Express 服务和一个健康检查接口。

## 项目简介

该项目用于展示：

- Node.js 应用的基本启动方式
- 使用 GitHub / GitLab / Jenkins 等 CI 工具进行自动化构建
- 在 CI 流程中执行测试步骤
- 通过健康检查接口验证应用是否正常运行

## 项目结构

```text
node-cicd-test001/
├── index.js
├── package.json
├── .gitignore
├── README.md
└── node_modules/   (安装依赖后生成，通常由 .gitignore 忽略)
```

## 功能说明

### 主页

访问根路径 `/`，返回：

```text
Hello from CI/CD pipeline!
```

### 健康检查

访问 `/health`，返回 HTTP 200 状态和 `OK`。

这通常用于：

- Docker 容器健康检查
- Kubernetes readiness / liveness probe
- CI/CD 部署前验证

## 本地运行

1. 安装依赖：

```bash
npm install
```

2. 启动应用：

```bash
npm start
```

3. 访问：

```bash
http://localhost:3000/
http://localhost:3000/health
```

## 测试

当前项目还没有完整测试用例，示例脚本可使用：

```bash
npm test
```

建议在 CI 中保留一个真实的测试命令，例如：

```json
"scripts": {
  "test": "node -e \"console.log('Test passed')\""
}
```

或者在后续接入真实测试框架后替换成：

```json
"scripts": {
  "test": "npm run lint && node --test"
}
```

## CI/CD 说明

这是一个典型的 CI/CD 入门项目，适合用于练习：

- 拉取代码
- 安装依赖
- 运行测试
- 构建应用
- 部署到目标环境

在 CI 流程中，关键原则是：

- 测试失败时返回非 0 退出码
- 测试通过时正常退出，退出码为 0
- 不要在测试脚本中故意写 `exit 1`，除非你想明确制造失败

## 依赖

```json
{
  "express": "^5.2.1"
}
```

## 备注

- `.gitignore` 中已忽略 `node_modules/`，避免依赖目录被提交到仓库。
- 这个项目适合作为 CI/CD 学习、练习和演示的入门模板。

## 扩展建议

后续可以继续扩展：

- 增加单元测试
- 引入 ESLint
- 添加 Dockerfile
- 配置 GitHub Actions / GitLab CI / Jenkins
- 实现自动部署到云平台
