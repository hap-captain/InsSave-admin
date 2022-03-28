<template>
	<view class="uni-container">
	  <uni-forms ref="form"  validateTrigger="bind">
	    <uni-forms-item name="role_id" label="车辆编号" required>
	      <uni-easyinput placeholder="车辆唯一标识，不可修改，不允许重复" v-model="carId" trim="both"></uni-easyinput>
	    </uni-forms-item>
	   <uni-forms-item name="role_name" label="车辆描述" required>
	      <uni-easyinput placeholder="如火灾救援专用车辆" v-model="describe" trim="both"></uni-easyinput>
	    </uni-forms-item>
		<uni-forms-item name="role_name" label="可参与救援类型" required>
		   <uni-easyinput placeholder="如火灾,物理伤害" v-model="type" trim="both"></uni-easyinput>
		 </uni-forms-item>
		 <uni-forms-item name="mobile" label="车辆状态" required>
		 	<uni-easyinput  :clearable="false"  v-model="status" placeholder="如状态良好,空闲" />
		 </uni-forms-item>
	    <uni-forms-item name="comment" label="备注">
	      <uni-easyinput type="textarea" placeholder="备注"  trim="both"></uni-easyinput>
	    </uni-forms-item>
	    <view class="uni-button-group">
	      <button type="primary" class="uni-button" style="width: 100px;" @click="submit">{{$t('common.button.submit')}}</button>
	      <navigator open-type="navigateBack" style="margin-left: 15px;">
	          <button class="uni-button" style="width: 100px;">{{$t('common.button.back')}}</button>
	      </navigator>
	    </view>
	  </uni-forms>
	</view>
</template>

<script>
	const db = uniCloud.database();
	
	 export default {
		 data()
		 {
			 return{
				 carId:'',
				 describe:'',
				 type:'',
				 status:''
			 }
		 },
		 onLoad(options) {
			 this.id = options.id;
			 this.getData(this.id);
		 },
		 methods:{
			 getData(id)
			 {
				db.collection('carList')
				.doc(id)
				.get()
				.then(res => {
					this.carId = res.result.data[0].carId,
					this.describe = res.result.data[0].describe,
					this.type = res.result.data[0].type,
					this.status = res.result.data[0].status
				}) 
			 },
			 submit()
			 {
				 db.collection('carList')
				 .doc(this.id)
				 .update({
						carId:this.carId,
						describe:this.describe,
						type:this.type,
						status:this.status
				 })
				 .then( res =>{
					uni.showToast({
						title:"修改成功",
						duration:2000
					})
				 })
				 setTimeout(
				 function(){
					uni.navigateTo({
						url:"carPage"
				 	})
				 },2000)
			 }
		 }
	 }
</script>

<style>
</style>
