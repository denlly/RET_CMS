# lint && commit

## lint 和 Husky

项目在功能上增加 tslint 功能，能够通过 "npm run lint" 进行检查，但是实际开发中经常会忘了 lint 后在提交，因此我们需要一个自动检查的方式，比如可以在 commit 之前对项目进行 lint 检查。

## 安装 husky

```js
$ npm i -D husky
```

在 package.json 中增加 husky 的配置

```json
{
    "husky": {
        "hooks": {
            "pre-push": "",
            "pre-commit": "npm run lint"
        }
    }
}
```

可以在 terminal 中检查输出，判断是否生效

## commit message check

在使用 'git commit -m "something"' 命令时候我们会对 something 部分进行简单的校验，以符合规范。

### 安装 commitlint

```bash

npm i -D commitlint  @commitlint/cli @commitlint/config-conventional

echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js

```

package.json

```file
{
    "husky": {
        "hooks": {
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
    }
}
```

测试方法就是 commit （git commit -m "something message"）一个格式不正确的 message 是不是能够拦截。在提交一个正确的是否能正确提交。

[commitlint org](https://commitlint.js.org/#/guides-local-setup?id=install-commitlint)
