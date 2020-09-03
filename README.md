目录结构
.
├── .git-ftp-include	// 用于最后指定需要部署的文件或文件夹
├── .gitattributes	// 用于统一文件内编码的换行符
├── .github
│   └── workflows
│       └── nodejs.yml	// Github Actions的配置文件
├── .gitignore	// 忽略上传到Github的文件或目录
├── LICENSE	// 许可证文件
├── README.md	// Github项目展示文件
├── docs	// VuePress项目根目录
│   ├── .vuepress	// 存放配置文件的文件夹
│   │   ├── config.js	// 整个工程的配置文件
│   │   ├── dist	// 最后生成的文件目录
│   │   ├── public	// 媒体文件夹（主要是图片）
│   │   └── styles	// 网页样式文件夹（里面空的，没有用）
│   ├── README.md	// 网页首页文件
│   └── views	// 存放markdown文件的文件夹（可以不要直接把markdown文件放在docs里面）
│       └── frontEnd	// 分类目录（也可以不要分类目录直接放在views里面）
├── package.json	// 指定依赖，项目脚本，Node.js项目描述文件
├── yarn-error.log	// 记录构建失败的日志文件
└── yarn.lock	// 变更依赖时自动生成和更新


### reco_luan's blog [website](https://www.recoluan.com)
