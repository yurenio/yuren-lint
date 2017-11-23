# YurenFE

## Work-flow

### Config

修改配置文件为你需要的内容

```text
.editorconfig
.eslintrc
.gitignore
.htmllintrc
.lesshintrc
coffeelint.json
CONTRIBUTING.md
csslintrc.json
LICENSE
package.json
```

### Env

请确保你安装了 [Node.js](https://nodejs.org/zh-cn/) 环境，我们会需要使用其中的 [npm](https://www.npmjs.com/) 。

执行以下命令安装所需的第三方库：

```bash
npm install
```

若有报错，可以用 `-g` 参数对报错的库进行安装：

```bash
npm install -g libname
```

若有权限问题，请在上述命令前添加 `sudo` 后再执行。

若安装速度较慢，可以使用 [cnpm](https://npm.taobao.org/) 。

### Coding

编写你的代码。

在之后的步骤中，我们会对以下语言或文件类型进行处理：

```text
HTML
CSS
JavaScript
Less
CoffeeScript
```

### Build

首先，你需要编辑 `gulpfile.js` 文件，配置你的源代码目录与编译后文件的存放目录，并指定其中的部分 task 组成名为 `default` 的 task。

你也可以在其中编写自己的 gulp task。

然后，执行名为 `default` 的 task：

```bash
gulp
```

你也可以单独执行其他 task：

```bash
gulp taskname
```

### commit & push
