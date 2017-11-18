# Contributing

## Git Commit 规范（base: AngularJS）

格式：`<type>(<scope>): <subject>`

### type

- feat：新 Feature
- fix：修复 Bug
- docs：只更新了文档
- style：代码风格（不影响代码的变更）
- refactor：重构（既没有修复 Bug 也没有新 Feature 的代码变更）
- perf：性能优化（以性能优化为目的的代码变更）
- test：测试（添加确实的测试或更正现有的测试）
- chore：例行工作（对构建过程或辅助工具及第三方库的变更）

### scope

指定提交更改的位置，当更改影响不止一个范围时，用 `*`

- readme: README.md
- contributing: CONTRIBUTING.md
- gitignore: .gitignore
- src: src finder and index.html
- license: LICENSE
- npm: package.json
- gulp: gulpfile.js
- less: less and lesshint
- coffee: CoffeeScript and coffeelint
- editor: .editorconfig

### subject

- 使用英文，不要使用中文
- 使用现在时的祈使语气，即应使用 change 而不是 changed 和 changes
- 首字母小写
- 句末不要使用句点（.）

更多参考：[Developing AngularJS](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md)
