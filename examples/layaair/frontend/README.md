# Laya Air

测试于 LayaAir 2.12.0

1. 使用请前先 `npm install`。
2. 由于 Laya 本身不支持 NPM，所以 `npm install` 的作用仅仅是获取代码提示（类型定义）。
3. `tsrpc-browser` 打包为单个文件 `src/tsrpc_browser/index.js`，请从该文件中引用 `HttpClient`、`WsClient` 等。

示例，见 `Main.ts` 头部。