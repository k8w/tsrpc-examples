# TSRPC + Cocos Multiplayer Demo

[中文](README.md) | **English**

Github: https://github.com/k8w/tsrpc-examples/tree/main/examples/cocos-creator-multiplayer

## Introduction

- Multiplayer real-time matchmaking game demo developed by [TSRPC](https://tsrpc.cn) and [Cocos Creator](https://www.cocos.com/)
- Separate logic and presentation architecture, frame synchronization and state synchronization, multiplexing state computation logic on front and back ends
- Fast-paced and conflicting synchronization strategies: prediction + reconcilation + interpolation in the field, 100~200 ms delay without perception

**Play Now:** https://tsrpc.cn/fight/index.html
**Video:** https://user-images.githubusercontent.com/1681689/144695691-c8c556dd-68c4-44bf-8a38-5c37e203dbda.mp4

## Launch

### Launch the backend first

```shell
cd backend

### Install dependencies
npm install

# Start local services
npm run dev
```

### Start the front-end again

1. first install the NPM dependencies
    ```shell
    cd frontend

    ### Install the dependencies
    npm install
    ```
2. Then open the frontend project (`frontend` directory) with Cocos Creator version 3.5.2 or above

**Note:** The frontend project needs `npm install` before opening Cocos, if it reports an error, you can close Cocos and restart it to try.

Scan QR code by Wechat to join our group:

![](README_assets/wechat.png)