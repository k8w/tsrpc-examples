# TSRPC + Cocos 多人实时对战 Demo

## 介绍

- 采用 [TSRPC](https://tsrpc.cn) 和 [Cocos Creator](https://www.cocos.com/) 开发的多人实时对战游戏 Demo
- 逻辑和表现分离的架构，在前后端复用状态计算逻辑
- 快节奏有冲突的同步策略：预测 + 和解 + 插值 的落地运用展示，100~200 ms 延迟也无感知

## 启动

先启动后端：

```shell
cd backend

# 安装依赖
npm install

# 启动本地服务
npm run dev
```

再启动前端：

1. 首先安装 NPM 依赖
    ```shell
    cd frontend

    # 安装依赖
    npm install
    ```
2. 然后用 Cocos Creator 3.3.2 以上版本打开前端项目（`frontend` 目录）

## 效果预览

https://user-images.githubusercontent.com/1681689/144695691-c8c556dd-68c4-44bf-8a38-5c37e203dbda.mp4