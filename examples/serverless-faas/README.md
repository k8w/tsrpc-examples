Serverless 云函数支持示例
===

演示了示例项目中的留言板，同时支持阿里云函数计算（FC），腾讯云云函数（SCF），和原生 NodeJS 部署的支持。

主要方式是在后端项目中区分为 3 个不同的入口点：

- `index.ts`：NodeJS 原生部署入口点
- `aliyun-fc.ts`：阿里云函数计算 FC 入口点
    
- `txcloud-scf.ts`：腾讯云云函数 SCF 入口点

## 部署方式

### 阿里云

1. 创建 HTTP 函数，`npm run build` 然后将 `dist` 目录下的代码上传到阿里云根目录
1. 在 Web IDE 终端执行命令：
    ```shell
    npm i
    ```
1. 配置 **函数入口** 为 `aliyun-fc.handler`
1. 配置 **初始化函数** 为 `aliyun-fc.initializer`
1. 修改前端项目下 `client.ts` 中的后端地址，测试运行

### 腾讯云

1. 创建 Event 函数，`npm run build` 然后将 `dist` 目录上传到腾讯云，并更名为 `src` 目录
1. 在 Web IDE 终端执行命令：
    ```shell
    cd src
    npm i
    ```
1. 配置 **执行函数** 为 `txcloud-scf.handler`
1. 修改前端项目下 `client.ts` 中的后端地址，测试运行