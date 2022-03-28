<template>
	<view class="page-box">
		<view class="box">
			<view class="top-left">
				<view class="title">
					基本信息
				</view>
				<view>
					<text>地点名称：</text>{{data.address}}
				</view>
				<view>
					<text>求救类型：</text>{{data.type}}
				</view>
				<view>
					<text>现场视频：</text>
					<video :src="data.video"></video>
				</view>
				<view>
					<text>求救者信息：</text>
					<p>姓名：{{data.name}} 联系方式：{{data.phone}} 血型：{{data.bloom}}</p>
				</view>
			</view>
			<view class="top-right">
				<view class="title">
					救援位置
				</view>
				<view class="">
					 <map 
					    :latitude="latitude" 
					    :longitude="longitude" 
					    >
					</map>
				</view>
			</view>
		</view>
		<view class="box">
			<view class="card">
				<view class="card-title">
					应答上报
				</view>
				<view class="content-box">
					<view>
						<text>求救时间：</text>{{data.date}}
					</view>
					<view>
						<text>事件类型：</text>{{data.type}}
					</view>
					<view>
						<text>初步处理:</text>
						<textarea value="" placeholder="输入处理建议" />
					</view>
					<view class="bottom-btn" v-if="!data.sept1">
						<button type="primary" @click="changData(1)">确定应答</button>
					</view>
					<view class="status-view" v-else>
						已完成
					</view>
				</view>
			</view>
			<view class="card" v-if="data.sept1">
				<view class="card-title">
					处理意见
				</view>
				<view class="content-box">
					<view>
						<text>应答时间：</text>{{data.date}}
					</view>
					<view>
						<text>处理人：</text>{{data.saverName}}
					</view>
					<view>
						<text>处理意见:</text>
						<textarea value="" placeholder="输入处理建议" />
					</view>
					<view>
						<text>处理状态：</text>
						<text style="color: red;">{{data.sept2? '已通过' : '未确定'}}</text>
					</view>
					<view class="bottom-btn" v-if="!data.sept2">
						<button type="primary" @click="changData(2)">确定</button>
					</view>
					<view class="status-view" v-else>
						已完成
					</view>
				</view>
			</view>
			<view class="card" v-if="data.sept2">
				<view class="card-title">
					路径规划
				</view>
				<view class="content-box">
					<view class="" v-if="data.sept3">
						<!-- <map 
						 show-location
						    :latitude="latidute" 
						    :longitude="longitude" 
						    >
						</map> -->
						<image src="/static/map.jpg" mode=""></image>
					</view>
					<view class="bottom-btn" v-else>
						<button type="primary" @click="changData(3)">生成路径</button>
					</view>
				</view>
			</view>
			<view class="card" v-if="data.sept3">
				<view class="card-title">
					路径选择
				</view>
				<view class="content-box">
					<view class="route-btn">
						<button type="default" style="background-color: #18BC37;" @click="route='路径1'">路径1（推荐）</button>
						<button type="default"  @click="route='路径2'">路径2</button>
						<button type="default"  @click="route='路径3'">路径3</button>
					</view>
					<view>
						<text>已选择的路径：</text>
						<text style="color: orange;">{{route}}</text>
					</view>
					<view class="bottom-btn" v-if="!data.sept4">
						<button type="primary" @click="changData(4)">确定</button>
					</view>
					<view class="status-view" v-else>
						已完成
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database();
	
	export default {
		data() {
			return {
				data:{},
				latitude:'',
				longitude:'',
				id:'',
				route:''
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getData(options.id);
		},
		methods: {
		getData(id){
			db.collection('mathList').doc(id).get()
			.then(res => {
				this.data = res.result.data[0];
				console.log(res.result.data[0])
				this.latitude = res.result.data[0].latitude;
				this.longitude = res.result.data[0].longitude;
			})
		},
	    changData(index)
		{
			var that = this;
			if(index == 1)
			{
				db.collection('mathList')
				.doc(this.id)
				.update({
					sept1:true,
					status:'处理中'
				})
				.then(res=>{
					uni.showToast({
						title:"已应答",
						duration:2000
					})
					that.getData(that.id);
				})
				
			}
			else if(index == 2)
			{
				db.collection('mathList')
				.doc(this.id)
				.update({
					sept2:true
				})
				.then(res=>{
					uni.showToast({
						title:"已确定",
						duration:2000
					})
					that.getData(that.id);
				})
			}
			else if(index == 3)
			{
				db.collection('mathList')
				.doc(this.id)
				.update({
					sept3:true
				})
				.then(res=>{
					uni.showToast({
						title:"已经规划",
						duration:2000
					})
					that.getData(that.id);
				})
			}
			else if(index == 4)
			{
				db.collection('mathList')
				.doc(this.id)
				.update({
					sept4:true,
					status:'已完成'
				})
				.then(res=>{
					uni.showToast({
						title:"已确定",
						duration:2000
					})
					that.getData(that.id);
				})
			}
		},
		Drawroute()
		{
			const key = 'IK4BZ-CNDR3-OBN3K-3JUEO-34NSF-WCFS5'; //使用在腾讯位置服务申请的key
		    const referer = '应驰救援'; //调用插件的app的名称
		    const location = JSON.stringify({
		      latitude: this.latitude,
		      longitude: this.longitude
		    });
		    const category = '';
		}
		}
	}
</script>

<style >
 @import url("detailPage.css");
</style>
