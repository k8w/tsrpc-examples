# TSRPC + Cocos 多人实时对战 Demo

## 介绍

- 采用 [TSRPC](https://tsrpc.cn) 和 [Cocos Creator](https://www.cocos.com/) 开发的多人实时对战游戏 Demo
- 逻辑和表现分离的架构，帧同步和状态同步并用，前后端复用状态计算逻辑
- 快节奏有冲突的同步策略：预测 + 和解 + 插值 的落地运用展示，100~200 ms 延迟也无感知

**体验地址**
https://tsrpc.cn/fight/index.html
(可浏览器多开体验多人效果)

**在线教程**
https://1drv.ms/p/s!AviSVsaYsolWnh7DCp2Y8g_NtDbA?e=67ZqqS

<img src="README_assets/1.jpg" style="width: 300px; margin: 10px" /> <img src="README_assets/2.jpg" style="width: 300px; margin: 10px" /> <img src="README_assets/3.jpg" style="width: 300px; margin: 10px" /> <img src="README_assets/4.jpg" style="width: 300px; margin: 10px" /> <img src="README_assets/5.jpg" style="width: 300px; margin: 10px" />

## 启动

### 先启动后端

```shell
cd backend

# 安装依赖
npm install

# 启动本地服务
npm run dev
```

### 再启动前端

1. 首先安装 NPM 依赖
    ```shell
    cd frontend

    # 安装依赖
    npm install
    ```
2. 然后用 Cocos Creator 3.3.2 以上版本打开前端项目（`frontend` 目录）

**注意：前端项目需要先 `npm install` 后再打开 Cocos，如果报错，可以关闭 Cocos 后重启试一下。**

## 微信交流群

欢迎加入 TSRPC 和 TypeScript 全栈开发学习交流群：

（请注明来意）

![](README_assets/wechat.png)

## 效果预览

https://user-images.githubusercontent.com/1681689/144695691-c8c556dd-68c4-44bf-8a38-5c37e203dbda.mp4