<template>
	<view class="uni-container">
	  <uni-forms ref="form"  validateTrigger="bind">
	    <uni-forms-item name="role_id" label="救援工作证号" required>
	      <uni-easyinput placeholder="救援人员唯一标识，不可修改，不允许重复" v-model="peopleId" trim="both"></uni-easyinput>
	    </uni-forms-item>
	   <uni-forms-item name="role_name" label="姓名" required>
	      <uni-easyinput placeholder="救援队员的姓名" v-model="name" trim="both"></uni-easyinput>
	    </uni-forms-item>
		<uni-forms-item name="role_name" label="负责区域" required>
		   <uni-easyinput placeholder="救援队员负责的区域" v-model="address" trim="both"></uni-easyinput>
		 </uni-forms-item>
		 <uni-forms-item name="mobile" label="手机号" required>
		 	<uni-easyinput  :clearable="false"  v-model="phone" placeholder="请输入手机号" />
		 </uni-forms-item>
		 <uni-forms-item name="mobile" label="职位" required>
		 	<uni-easyinput  :clearable="false" v-model="type" placeholder="职位" />
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
				 peopleId:'',
				 name:'',
				 address:'',
				 phone:'',
				 type:''
			 }
		 },
		 methods:{
			 submit()
			 {
				 db.collection('peopleList')
				 .add({
						peopleId:this.peopleId,
						name:this.name,
						address:this.address,
						phone:this.phone,
						type:this.type
				 })
				 .then( res =>{
					uni.showToast({
						title:"添加成功",
						duration:2000
					})
				 })
				 setTimeout(
				 function(){
					 uni.navigateTo({
					 	url:"peoplePage"
					 })
				 },2000)
			 }
		 }
	 }
</script>

<style>
</style>
