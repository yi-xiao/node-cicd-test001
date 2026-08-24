# 第一阶段: 构建依赖（利用缓存）
FROM node:20-slim AS builder
WORKDIR /app
# 关键: 先把 package.json 和 package-lock.json 拷贝到容器中, 然后执行 npm install，这样可以利用 Docker 的缓存机制
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# 第二阶段: 运行应用(镜像更小，更安全)
FROM node:20-slim
WORKDIR /app
# 关键: 只拷贝 node_modules
COPY --from=builder /app/node_modules ./node_modules
# 复制源代码
COPY index.js .

# 改用非 root 用户运行应用
USER node
EXPOSE 3000
CMD [ "node", "index.js" ]