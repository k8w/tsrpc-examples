TSRPC 分布式房间管理架构示例
===

![Group 7](https://user-images.githubusercontent.com/1681689/166127423-734e1fc4-4489-4b7c-98e1-2409172c24f7.png)

MGOBE 即将停止运营，本项目提供的是一个轻量级的替代方案。

[TSRPC](https://tsrpc.cn) 是专为 TypeScript 设计的 RPC 框架，如果还没有了解过，建议先阅读这篇文章：[《2 天做了个多人实时对战，200ms 延迟竟然也能丝滑流畅？》](https://mp.weixin.qq.com/s/V1YWPF5LmY-l1L5LF2nR3A)

实现了单点服务后，如何将其扩展为一个支持开房间、随机匹配等功能，并且分布式、可扩展的架构呢？

## 特性

**演示地址: https://tsrpc.cn/room-management/index.html**

1. 支持开房间、随机匹配
2. 房间逻辑抽离为单独的 Class，方便自定义
3. 支持分布式部署和水平扩展
4. 相比传统三层架构，结构难度和上手门槛都更低

## 启动

### 后端

后端在 **同一个项目下** 拆分为 2 个服务：
- MatchServer：房间管理服务（开房间、随机匹配），HTTP
- RoomServer：房间服务（运行实际房间逻辑），WebSocket

MatchServer 和 RoomServer 为一对多的关系，保持长连接 RPC

```shell
# 启动 MatchServer
npm run dev:match

# 启动 RoomServer
npm run dev:room

# 再启动一个 RoomServer （测试分布式）
npm run dev:room2
```

### 前端

- 需要 Cocos Creator 3.4.2 以上版本
- 先 `npm install`，再打开 Cocos Creator
- 如果 `npm install` 之后打开 Cocos 依然报错，尝试大清理重启：
    - 关闭 Cocos Creator
    - 删除 `library` `temp` 目录
    - 重启 Cocos Creator

## 实现思路

![1](https://user-images.githubusercontent.com/1681689/165915071-6556cf8a-1292-4db4-acff-e0bec3ac358c.png)
![2](https://user-images.githubusercontent.com/1681689/165915078-e7ef32fd-43d0-4bb5-aa05-825a8dce613f.png)
![3](https://user-images.githubusercontent.com/1681689/165915082-9fca98e6-1907-4f60-b32d-8b06890dc8cf.png)
![4](https://user-images.githubusercontent.com/1681689/165915090-e278fdda-8379-4c79-b622-9e276d9e91dc.png)

## 加群交流

![image](https://user-images.githubusercontent.com/1681689/165915560-cbe2520a-b654-472b-828e-e42252d5e32f.png)

## 版权声明

本项目使用了以下模型：
- https://sketchfab.com/3d-models/proportional-low-poly-man-free-download-0bfd0e2b49a348a4b64b20cc8196e3b3  （作者：Robin Butler）