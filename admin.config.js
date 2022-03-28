export default {
	login: {
		url: '/pages/login/login' // 登录页面路径
	},
	index: {
		url: '/pages/index/index' // 登录后跳转的第一个页面
	},
	error: {
		url: '/pages/error/404' // 404 Not Found 错误页面路径
	},
	navBar: { // 顶部导航
		logo: '/static/logo.png', // 左侧 Logo
		links: [
			// {
			// 	text: '中文简体',
			// 	lang: 'zh-Hans'
			// },
			// {
			// 	text: '中文繁體',
			// 	lang: 'zh-Hant'
			// },
			// {
			// 	text: 'English',
			// 	lang: 'en'
			// }, 
			{ // 右侧链接
				text: 'topwindow.text.doc',
				url: 'https://uniapp.dcloud.net.cn/uniCloud/admin'
			}, 
			{
				text: 'topwindow.text.plugin',
				url: 'https://ext.dcloud.net.cn/?cat1=7&cat2=74'
			},
			],
		debug: {
			enable: process.env.NODE_ENV !== 'production', //是否显示错误信息
			engine: [{ // 搜索引擎配置（每条错误信息后，会自动生成搜索链接，点击后跳转至搜索引擎）
				name: '百度',
				url: 'https://www.baidu.com/baidu?wd=ERR_MSG'
			}, {
				name: '谷歌',
				url: 'https://www.google.com/search?q=ERR_MSG'
			}]
		}
	},
	sideBar: { // 左侧菜单
		// 配置静态菜单列表（放置在用户被授权的菜单列表下边）
		staticMenu: [
			{
			menu_id: "index",
			text: '首页',
			icon: 'uni-icons-home',
			value: '/pages/index/index'
		},
		{
			menu_id: "mathList",
			text: '事件受理',
			icon: 'uni-icons-list',
			value: '/pages/mathList/mathList'
			
		},
		{
			menu_id: "saveMap",
			text: '救援地图',
			icon: 'uni-icons-location',
			value: '/pages/saveMap/saveMap'		
		},
		{
			menu_id: "demo",
			text: '系统管理',
			icon: 'uni-icons-list',
			url: "",
			children: [
				{
					menu_id: "system_user",
					text: '用户管理',
					icon: 'uni-icons-star',
					value: '/pages/system/user/list',
				},
				{
				menu_id: "peoplePage",
				text: '人员列表',
				icon: 'uni-icons-star',
				value: '/pages/controlPage/peoplePage/peoplePage',
			},
			{
				menu_id: "carPage",
				text: '车辆信息',
				icon: 'uni-icons-map',
				value:  '/pages/controlPage/carPage/carPage',
			}
			]
		},
		]
	}
}
