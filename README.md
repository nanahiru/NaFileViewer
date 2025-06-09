# NaFileViewer

spring boot + vue3实现的在线文件预览器。

目前实现了文件夹/图片/视频的预览，持续更新中...

文件结构

```tex
├─front  前端
│  └─fileviewer
│      ├─public 
│      │  └─icons
│      └─src
│          ├─api 后端api请求函数库
│          ├─assets
│          ├─components  公用组件
│          │  └─file
│          ├─directives 
│          ├─router 路由
│          ├─store  状态管理
│          ├─utils
│          └─views 视图
├─src 后端
│  ├─main
│  │  ├─java
│  │  │  └─org
│  │  │      └─nanahiru
│  │  │          └─nafileviewer
│  │  │              ├─annotaion 自定义注解
│  │  │              ├─config 配置类
│  │  │              ├─controller 供前端调用的控制器
│  │  │              ├─core 核心包
│  │  │              │  └─resourcehandles 文件处理的实现
│  │  │              ├─interceptor 资源/鉴权等拦截器
│  │  │              ├─model
│  │  │              └─util
│  │  └─resources
│  │      ├─META-INF
│  │      ├─static 打包后的前端资源
│  │      │  ├─assets
│  │      │  └─icons
│  │      └─templates
```



## application.yml的配置

```yaml
project:
  root-path: "d:/" 		   # 实际根目录
  cache-path: "e://.cache" # 视频预览图，视频切片，图片缩略图等资源的缓存地址
  env: prod				   # 当前环境，dev时不会开启用户验证
  users:				   # 用户列表
    admin: "123456"		   # username : password
```



## 关于视频处理

视频解码实现了两个类：

org.nanahiru.nafileviewer.core.resourcehandles.FFmpegCommandVideoHandler (默认) 调用FFmpeg命令进行视频处理。需要安装ffmpeg并配置环境变量

org.nanahiru.nafileviewer.core.resourcehandles.FFmpegCommandVideoHandler 使用JavaCV调用FFmpeg库进行处理。需要在pom.xml导入运行平台的包或导入JavaCV全平台包（不推荐）



## 关于用户授权认证

使用HTTP Basic进行认证。主流浏览器都支持该方式，未授权访问会弹出一个原生的用户名与密码输入框。
org.nanahiru.nafileviewer.interceptor.BasicAuthInterceptor实现了认证逻辑。

⚠️ 目前所有用户列表全明文保存在了application.yml的project.users里面。

⚠️ 未配置https的情况下，用户名和密码仅经过了base64编码就在网络进行传输
