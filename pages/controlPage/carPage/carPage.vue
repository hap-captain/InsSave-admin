<template>
    <view>
        <view class="uni-header">
            <view class="uni-group hide-on-phone">
                <view class="uni-title">车辆信息</view>
            </view>
            <view class="uni-group">
				<input class="uni-search" type="text" v-model="searchVal" @confirm="search" :placeholder="$t('common.placeholder.query')" />
				<button class="uni-button" type="default" size="mini" @click="search">{{$t('common.button.search')}}</button>
				 <button class="uni-button" size="mini" type="primary" @click="addPeople">添加</button>
            </view>
        </view>
        <view class="uni-container">
            <uni-table :loading="loading" border stripe type="selection" :emptyText="$t('common.empty')" @selection-change="selectionChange">
                <uni-tr>
					<uni-th width="204" align="center">车辆编号</uni-th>
					<uni-th width="100" align="center">车辆描述</uni-th>
					<uni-th width="204" align="center">可参与救援类型</uni-th>
					<uni-th width="204" align="center">车辆状态</uni-th>
					<uni-th width="204" align="center">操作</uni-th>
                </uni-tr>
                <uni-tr v-for="(item ,index) in carData" :key="index">
					<uni-td>{{item.carId}}</uni-td>
					<uni-td >{{item.describe}}</uni-td>
					<uni-td >{{item.type}}</uni-td>
					<uni-td>{{item.status}}</uni-td>
                    <uni-td>
                        <view class="uni-group">
                            <button class="uni-button" size="mini" type="primary" @click="edit(item._id)">编辑</button>
							<button class="uni-button" size="mini" type="primary" style="background-color: red;" @click="dele(item._id)">删除</button>
                        </view>
                    </uni-td>
                </uni-tr>
            </uni-table>
            <view class="uni-pagination-box">
                <uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" />
            </view>
        </view>
		<!-- #ifndef H5 -->
		<fix-window />
		<!-- #endif -->
    </view>
</template>

<script>
	const db = uniCloud.database();
    export default {
        data() {
            return {
                searchVal: '',
                carData: [],
                // 每页数据量
                pageSize: 10,
                // 当前页
                pageCurrent: 1,
                // 数据总量
                total: 0,
                loading: false,
            }
        },
        onLoad() {
            this.selectedIndexs = []
            this.getCarData(1)
        },
		
        methods: {
            // 多选处理
            selectedItems() {
                return this.selectedIndexs.map(i => this.tableData[i])
            },
            // 多选
            selectionChange(e) {
                console.log(e.detail.index);
                this.selectedIndexs = e.detail.index
            },
            //批量删除
            delTable() {
                console.log(this.selectedItems());
            },
            // 分页触发
            change(e) {
                this.getCarData(e.current)
            },
            // 搜索
            search() {
                this.getCarData(1, this.searchVal)
            },
			addPeople()
			{
				uni.navigateTo({
					url:"addCar"
				})
			},
			edit(id)
			{
				uni.navigateTo({
					url:"editCar?id=" +id
				})
			},
			dele(id)
			{
				uni.showModal({
					 title: '提示',
					    content: '你确定要删除这条记录吗？',
					    success: function (res) {
					        if (res.confirm) {
					            db.collection('carList')
					            .doc(id)
					            .remove()
					            .then(res =>{
					            	uni.showToast({
					            		 title: '删除成功！',
					            		 duration: 2000
					            	})
					            	setTimeout(this.getCarData(),2000);
					            })
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
				});
			},
            // 获取数据
            getCarData(pageCurrent, value) {
                this.loading = true
                this.pageCurrent = pageCurrent
				db.collection('carList')
				.where({
					carId:value
				})
				.get()
				.then(res => {
					this.carData = res.result.data
					this.total = res.result.data.length
					this.loading = false
				})
            },
			
    },
	}
</script>

<style>
	/* #ifndef H5 */
	page {
		padding-top: 85px;
	}
	/* #endif */
</style>
