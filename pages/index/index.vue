<link rel="stylesheet" type="text/css" href="index.css">
<template>
	<scroll-view style="padding: 15px;box-sizing: border-box;">
	<!-- 	{{ $t("index.text.prompt") }} -->
		<!-- <text style="color: #666; font-size: 15px;">（ v{{adminVersion}}, {{ $t("index.text.vesion") }}）</text> -->
		<view id="app">
			<view class="show-date">
				<text class="dateTitle">今日：</text>
				<text>{{date}}</text>
			</view>
			
			<view class="math-list">
				<view class="title-tag">
					收到事件
				</view>
				<view class="list-box">
					<view class="listItem">
						<image src="../../static/planing.png" mode=""></image>
						<view class="">
							<p>2</p>
							<p>待处理</p>
						</view>
					</view>
					<view class="listItem">
						<image src="../../static/flish.png" mode=""></image>
						<view class="">
							<p>3</p>
							<p>处理中</p>
						</view>
					</view>
					<view class="listItem">
						<image src="../../static/success.png" mode=""></image>
						<view class="">
							<p>32</p>
							<p>已处理</p>
						</view>
					</view>
					
				</view>
			</view>
			
			<view class="num-list">
				<view class="title-tag">
					事件统计
				</view>
				<view class="list-box">
					<view class="num-item">
						<view class="">
							<p>接受救援总数</p>
							<p>56个</p>
						</view>
						<image src="../../static/graph.png" mode=""></image>
					</view>
					<view class="num-item">
						<view class="">
							<p>已处理救援总数</p>
							<p>55个</p>
						</view>
						<image src="../../static/graph.png" mode=""></image>
					</view>
					<view class="num-item">
						<view class="">
							<p>已完成救援总数</p>
							<p>236个</p>
						</view>
						<image src="../../static/graph.png" mode=""></image>
					</view>
					
				</view>
			</view>			
			
			<view class="pic-list">
				<view class="title-tag">
					各地区事件数量
				</view>
				<view class="listPic">
					<image src="../../static/listPic.png" mode="widthFix"></image>
				</view>
			
			</view>
			
			<view class="pic-list">
				<view class="title-tag">
					事件类型数量
				</view>
				<view class="type-num">
					<text>7300</text>事件总数
					<view class="list-bar">
						<view class="list-item" style="width: 35%;background-color: #8330e1;border-top-left-radius: 5px; border-bottom-left-radius: 5px;"></view>
						<view class="list-item" style="width: 10%;background-color: #ff5500;"></view>
						<view class="list-item" style="width: 20%;background-color: #00ce00;"></view>
						<view class="list-item" style="width: 31%;background-color: #00007f;"></view>
						<view class="list-item" style="width: 4%;background-color: #e7e714;border-top-right-radius: 5px; border-bottom-right-radius: 5px;"></view>
					</view>
					<view class="list-es">
						<view class="list-color" style="background-color: #8330e1;"></view>
						<view class="list-text">交通事故<text>6445</text></view>
					</view>
					<view class="list-es">
						<view class="list-color" style="background-color: #ff5500;"></view>
						<view class="list-text">食物中毒<text>3228</text></view>
					</view>
					<view class="list-es">
						<view class="list-color" style="background-color: #00ce00;"></view>
						<view class="list-text">溺水<text>1891</text></view>
					</view>
					<view class="list-es">
						<view class="list-color" style="background-color: #00007f;"></view>
						<view class="list-text">触电<text>987</text></view>
					</view>
					<view class="list-es">
						<view class="list-color" style="background-color: #e7e714;"></view>
						<view class="list-text">火灾<text>450</text></view>
					</view>
				</view>
			</view>
		</view>
		
		
		<!-- #ifndef H5 -->
		<fix-window />
		<!-- #endif -->
	</scroll-view>
</template>

<script>
	import {
		version
	} from '../../package.json'

	export default {
		data() {
			return {
				adminVersion: version,
				date:'',
				
				
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
	
</script>

<style>
	@import url("index.css");
	/* #ifndef H5 */
	page {
		padding-top: 85px;
	}
	/* #endif */
</style>


