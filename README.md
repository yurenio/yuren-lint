# yuren-lint

## config

提供了以下第三方代码风格检查库的配置：

- [htmllint](#htmllint)
- [csslint](#csslint)
- [eslint](#eslint)
- [lesshint](#lesshint)
- [coffeelint](#coffeelint)

## editor

推荐你使用 [VSCode](https://code.visualstudio.com/) 进行开发，若使用其他编辑器，请自行搜索相应插件。

### .editorconfig

请将配置文件 `.editorconfig` 置于项目根目录。

- 若你使用 [IntelliJ IDEA](https://www.jetbrains.com/idea/) / [PyCharm](https://www.jetbrains.com/pycharm/) / [RubyMine](https://www.jetbrains.com/ruby/) / [WebStorm](https://www.jetbrains.com/webstorm/) / [Visual Studio](https://www.visualstudio.com/) 其中的任意一种 IDE，它们将会主动读取配置文件中的配置
- 若你使用 [JetBrains](https://www.jetbrains.com/) 所提供的任意一款 IDE，需安装插件 [EditorConfig](https://plugins.jetbrains.com/plugin/7294-editorconfig)
- 若你使用 [VSCode](https://code.visualstudio.com/) ，需安装插件 [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- 若你使用 [Atom](https://atom.io/) ，需安装插件 [EditorConfig](https://atom.io/packages/editorconfig)
- 若你使用 [Sublime](https://www.sublimetext.com/) ，需安装插件 [Editor​Config](https://packagecontrol.io/packages/EditorConfig)

相关配置请查看 [EditorConfig](http://editorconfig.org/)

### htmllint

请将配置文件 `.htmllintrc` 置于项目根目录。

- 若你使用 [VSCode](https://code.visualstudio.com/) ，请使用 `gulp html`
- 若你使用 [Atom](https://atom.io/) ，请使用 `gulp html`
- 若你使用 [Sublime](https://www.sublimetext.com/) ，需安装插件 [SublimeLinter-contrib-htmllint](https://packagecontrol.io/packages/SublimeLinter-contrib-htmllint)

相关配置请查看 [HTMLHint](http://htmlhint.com/)
