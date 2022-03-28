<template>
    <view>
        <view class="uni-header">
            <view class="uni-group hide-on-phone">
				<view class="" @click="getTeamMemberData(1,0,'救援队员')">
					<view class="uni-title">救援队员 </view>
					<view class="line" v-if="bar==0"></view>
				</view>
				<view class="" @click="getTeamMemberData(1,1,'队长')">
					<view class="uni-title">队长 </view>
					<view class="line" v-if="bar==1"></view>
				</view>
				<view class="" @click="getTeamMemberData(1,2,'总指挥')">
					<view class="uni-title">总指挥 </view>
					<view class="line" v-if="bar==2"></view>
				</view>
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
					<uni-th width="204" align="center">队员名称</uni-th>
					<uni-th width="100" align="center">负责区域</uni-th>
					<uni-th width="204" align="center">联系方式</uni-th>
					<uni-th width="204" align="center">操作</uni-th>
                </uni-tr>
                <uni-tr v-for="(item ,index) in teamMemberData" :key="index">
					<uni-td>{{item.name}}</uni-td>
					<uni-td >{{item.address}}</uni-td>
					<uni-td>{{item.phone}}</uni-td>
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
                teamMemberData: [],
                // 每页数据量
                pageSize: 10,
                // 当前页
                pageCurrent: 1,
                // 数据总量
                total: 0,
                loading: false,
				bar:0
            }
        },
        onLoad() {
            this.selectedIndexs = []
            this.getTeamMemberData(1,0,'救援队员')
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
                this.getTeamMemberData(e.current)
            },
            // 搜索
            search() {
                this.searchData(1, this.searchVal)
            },
			addPeople()
			{
				uni.navigateTo({
					url:"addPeople"
				})
			},
			edit(id)
			{
				uni.navigateTo({
					url:"editPeople?id=" +id
				})
			},
			dele(id)
			{
				uni.showModal({
					 title: '提示',
					    content: '你确定要删除这条记录吗？',
					    success: function (res) {
					        if (res.confirm) {
					            db.collection('peopleList')
					            .doc(id)
					            .remove()
					            .then(res =>{
					            	uni.showToast({
					            		 title: '删除成功！',
					            		 duration: 2000
					            	})
					            	setTimeout(this.getTeamMemberData(),2000);
					            })
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
				});
			},
            // 获取数据
            getTeamMemberData(pageCurrent, bar, type) {
				
				this.bar = bar;
                this.loading = true
                this.pageCurrent = pageCurrent
				db.collection('peopleList')
				.where({
					type:type,
					
				})
				.get()
				.then(res => {
					this.teamMemberData = res.result.data
					this.total = res.result.data.length
					this.loading = false
				})
            },
			searchData(pageCurrent,value)
			{
				this.loading = true
				this.pageCurrent = pageCurrent
				db.collection('peopleList')
				.where({
					name:value
				})
				.get()
				.then(res => {
					this.teamMemberData = res.result.data
					this.total = res.result.data.length
					this.loading = false
				})
			}
    },
	}
</script>

<style>
	.line{
		width: 45px;
		height: 4px;
		border-radius: 20px;
		background-color: #007AFF;
	}
	/* #ifndef H5 */
	page {
		padding-top: 85px;
	}
	/* #endif */
</style>
