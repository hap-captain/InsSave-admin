# insSave-admin

> 基于 uni-app，uniCloud，Echarts 的 admin 管理管理后台。 

### 目录结构 
```javascript
├── cloudfunctions              # 云函数
├── common
│   │── uni.css                 # 公共样式
│   └── uni-icons.css           # icon样式
├── components                  # 自定义组件
├── js_sdk                      # js sdk
├── pages                       # 页面
├── static
├── store                       # vuex
├── windows
│   │── component               # 项目中使用的组件
│   │── leftWindow.vue          # 左侧窗口（菜单栏）
│   └── topWindow.vue           # 顶部窗口（导航栏）
├── admin.config.js             # 系统配置（配置导航，菜单等）
├── App.vue
├── main.js
├── mainfest.json
├── pages.json
├── postcss.config.js           # postcss 配置（浏览器兼容性）
└── uni.scss					# uni-app内置的常用样式变量
```

 
### 运行
1. 下载[HBuilder X](https://www.dcloud.io/hbuilderx.html)
2. 使用HBuilder X 打开项目
3. 获取AppID  
打开manifest.json 文件 点击重新获取按钮
![获取AppID](https://i.bmp.ovh/imgs/2022/03/0aeb35cd94a1fd9f.png)
4. 右键 uniCloud目录 绑定云服务空间
![绑定云服务空间](https://s3.bmp.ovh/imgs/2022/03/a7cedeccf2145398.png)
[如何申请云服务空间？](https://unicloud.dcloud.net.cn/home)
5. 右键 uniCloud -> cloudfunctions 上传所有所有云函数、公共模块及action

### 参考资料
+ [uni-admin](https://uniapp.dcloud.io/uniCloud/admin.html)  
+ [unCloud](https://uniapp.dcloud.io/uniCloud/)
