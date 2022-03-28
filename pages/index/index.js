import {
		version
	} from '../../package.json'

	export default {
		data() {
			return {
				adminVersion: version,
				date:''
			}
		},
		watch: {

		},
		onLoad() {
			this.getDate();
		},
		methods:{
			getDate()
			{
				let time = new Date();
				this.date = time.getFullYear() + '年' +
				(time.getMonth()+1) + '月' +
				time.getDate() + '日' +
				time.getHours() + ':' +
				time.getMinutes() +':' +
				time.getSeconds();
				
				
			}
		}
	}