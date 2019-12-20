

# 为m3k6贡献代码  
  
## 提交信息指南  
  
### 提交信息格式  
每个提交消息由应此三项组成： **header**，**body**，**footer**。  
**header**以**type**，**scope**，**subject**的形式描述。  
  
例)  
```  
<type>(<scope>): <subject>  
<空白行>  
<body>  
<空白行>
<footer>  
```  
  
**header** 为必选项。 **scope** 请在必要时候，适当的描述。  
  
提交信息请以100个字符换行。(为了方便查看)  
  
  
```  
docs(changelog): update change log to beta.5  
```  
- `docs`为**header** ，即提交变更的标题头。
- 括号中的`changelog`为**scope** ，即提交变更的内容范围。
- `update change log to beta.5` 为**subject**，即提交变更的摘要主题。
第一个英文单词应该为动词，后续为此动作的内容主题。

```  
fix(release): need to depend on latest rxjs and zone.js  
  
使用package.json中的版本号为发布时的版本号 
```  
  
### Revert  
RevertCommit的时候、信息请以 `revert: ` 为开始。  
如果要撤销恢复到之前的提交版本，它应以`revert:`为开始，然后在`header`中写撤销的标题。 接着`body`中描述： `This reverts commit <hash>.`。  
  
### Type  
请使用以下的类型。  
  
* **build**: 影响构建系统或外部依赖项的修改（例如：gulp，broccoli，npm）  
* **ci**: CI配置文件和脚本的修改（例如：Travis，Circle，BrowserStack，SauceLabs）  
* **docs**: 仅更改文档  
* **feat**: 新功能  
* **fix**: 修复错误  
* **perf**: 改进性能的代码修改  
* **refactor**: 既不是修复错误也不添加功能的代码更改  
* **style**: 不影响代码含义的更改（空格，格式，缺少分号等）  
* **test**: 添加缺少的测试或更正现有测试  
  
### Scope  
对于范围,请使用 `lower-case` 格式指定模块名称。  
  
```text  
例) 
- `BitmexSpy` => `bitmex-spy`  
- `Utils` => `utils` 
```  
  
### subject  
请提供有关该主题的简要说明。  
  
* 动词请使用现在时态: "change" 而不是 "changed" 或 "changes"  
* 第一个字母请不要大写  
* 结尾不要使用句号  
  
### body  
与主题相同，使用现在时态。  
  
### footer  
  
在页脚中包含 **破坏性的变化** 的信息，以及由于此提交而**关闭**的Issue引用。

### WIP

WIP（Work In Progress）：意思是此Pull Request还在进行中。
未完成的PR可以使用此标记，以避免被别人误合并。

```text  
例)
- `docs(changelog): update change log to beta.5` 
应改为:
- `[WIP]docs(changelog): update change log to beta.5`
```  
