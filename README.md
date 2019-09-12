# RET_CMS

This is a CMS System with React, Eggjs and Typescript

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## usage

run backend

```bash
$ cd ~/backend
$ npm i
## 启动mongodb
$ npm run docker-run
$ npm run dev
```

这时我们能够尝试的链接一下 mongodb，以下是链接参数

-   host: loaclhost
-   port:27018
-   user: root
-   password: 123456

## requirement

-   [ ] 1. 用户

    -   [ ] 1.  登录
    -   [ ] 2. 注册
    -   [ ] 3. 验证码(阿里云)
    -   [ ] 4. 关注

-   [ ] 2. 文章

    -   [ ] 1. 增删改查
    -   [ ] 2. 评论
    -   [ ] 3. 点赞

-   [ ] 3. 问答

    -   [ ] 1. 增删改查
    -   [ ] 2. 回复
    -   [ ] 3. 顶踩

## specification

### Tslint + Husky

before commit 触发 pre-commit 对代码进行规范性验证，如果验证不通过可以 "npm run lint-fix" 命令进行修正。

### Prettier + Formatter

保存文件时候将文件及时格式化处理

### commit-message-formatter

> <type>(<scope>): <subject>

-   type:

    -   feat：新功能（feature）
    -   fix：修补 bug
    -   docs：文档（documentation）
    -   style： 格式（不影响代码运行的变动）
    -   refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
    -   test：增加测试
    -   chore：构建过程或辅助工具的变动
    -   conf：修改配置

-   scope：

用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

-   subject：

1. 如果是英文使用动词原形
2. 不以标点符号结尾
3. 注意简明扼要，但是能够便于 review

### Test

使用单元测试和 e2e 测试

### Statistics

百度统计 + google 统计

### 埋点

[TODO:可能需要其他的统计方式]

### Error

1. 全局捕获。使用 window.onerror

2. 主动上报。try/catch

3. sentry(免费够用)

4. 错误通知机制

### Deployment

PM2 部署 or k8s+docker

代码变更

-   提交代码变更到远程版本库
-   程序通过测试
-   提升 package.json 中的版本
-   生成 CHANGELOG
-   提交 package.json 和 CHANGELOG.md 文件
-   打上 Tag
-   推送

### Database

Mongodb + Redis

### Payment

alipay + wxpay + paypal
