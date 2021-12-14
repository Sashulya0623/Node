# 笔记

## npm init
此命令作用就是帮助我们快速创建 package.json 配置文件
> 如果使用 npm init --yes  则文件夹名称不能为『中文』, 也不能使用『大写』
> 使用 npm init --yes  一步到位初始化文件夹

## package.json 
此文件为 npm 包的配置文件

## vscode 左侧刷新文件列表
如果遇到创建或者安装完毕之后, 看不到新的文件列表, 就可以点击一下刷新按钮

## node_modules 
存放的 npm 下载的『工具包』

> 很少使用 HTML 直接引入 node_modules 当中的内容

## npm 使用步骤
1. 定位到一个文件夹下(新建 或者 已经存在的)
2. 启动命令行 将工作目录定位到第一步的文件中的
3. 运行 `npm init` (只需要运行一次)
4. 运行 `npm i 包名` 安装工具包
   
> 安装需要联网才行
## 注意运行命令的位置
package.json 所在的文件夹运行, 项目的根目录

## 安装 
### -S
会将安装的包的信息,记录在 package.json 中的 dependencies 属性
```
dependencies  生产依赖
```

### -D
会将安装的包的信息,记录在 package.json 中的 devDependencies 属性
```
devDependencies    开发依赖
```

## 开发依赖于生产依赖

## 全局安装
1. 不会影响当前项目的内容
2. 在任意的命令行位置都可以执行『全局安装』
3. 使用方式都在在命令行下使用封装的命令
4. `npm root -g` 查看全局安装的目录的位置

## 环境变量 Path 的配置
此电脑 -> 右键 -> 属性 -> 高级系统设置 -> 环境变量 -> 双击 Path -> 点击新建 -> 将 QQ 的安装的路径添加至 input 框中 -> 确定 -> 确定 -> 确定 

> 一定要重启 cmd 命令行才能生效

## nodeJS运行的常见错误
```
error: Cannot find module 'chalk' 
```
没有找到模块 `chalk`

## node_modules 目录是不能进入 Git 仓库的

## cnpm 安装时一定要加 -S 选项

## 接触过的包管理工具
* npm
* cnpm
* yarn
* cyarn
* bower

## 
