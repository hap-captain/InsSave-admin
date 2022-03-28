<template>
	<view class="map-box">
		<map 
		scale="11"
		show-compass="true"
		@markertap="inDetail"
		    :latitude="latitude" 
		    :longitude="longitude" 
			:markers="markers"
		    >
		</map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 23.025154,
				longitude: 113.096947,
				markers:[
					{
						id:1,
						title:'火灾',
						latitude: 23.025154,
						longitude: 113.096947,
						iconPath:"/static/Local.png",
						width:50,
						height:50,
						label:{
							content:'火灾',
							bgColor:'white',
							padding:10,
							borderRadius:6.,
							anchorX:-30,
							anchorY:-80
						}
					},
					{
						id:2,
						title:'交通事故',
						latitude: 23.021154,
						longitude: 113.011947,
						iconPath:"/static/Local.png",
						width:50,
						height:50,
						label:{
							content:'交通事故',
							bgColor:'white',
							padding:10,
							borderRadius:6.,
							anchorX:-30,
							anchorY:-80
						}
					},
					{
						id:2,
						title:'交通事故',
						latitude: 23.200054,
						longitude: 113.031947,
						iconPath:"/static/Local.png",
						width:50,
						height:50,
						label:{
							content:'交通事故',
							bgColor:'white',
							padding:10,
							borderRadius:6.,
							anchorX:-30,
							anchorY:-80
						}
					}
				]
			}
		},
		methods: {
			inDetail(e)
			{
				console.log(e.detail.markerId)
				uni.navigateTo({
					url:'../mathList/detailPage/detailPage?id='+"61e13d6c037cc300010e8a38"
				})
			}
		}
	}
</script>

<style>
	@import url("saveMap.css");
</style>
