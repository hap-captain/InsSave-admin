<template>
    <view>
        <view class="uni-header">
            <view class="uni-group hide-on-phone">
				<view class="" @click="getData(1,0)">
					<view class="uni-title">全部事件</view>
					<view class="line" v-if="bar==0"></view>
				</view>
				<view class="" @click="getData(1,1,'待处理')">
					<view class="uni-title">待处理</view>
					<view class="line" v-if="bar==1"></view>
				</view>
				<view class="" @click="getData(1,2,'处理中')">
					<view class="uni-title">处理中</view>
					<view class="line" v-if="bar==2"></view>
				</view>
				<view class="" @click="getData(1,3,'已完成')">
					<view class="uni-title">已完成</view>
					<view class="line" v-if="bar==3"></view>
				</view>
                
            </view>
            <view class="uni-group">
				<input class="uni-search" type="text" v-model="searchVal" @confirm="search" :placeholder="$t('common.placeholder.query')" />
				<button class="uni-button" type="default" size="mini" @click="search">{{$t('common.button.search')}}</button>
            </view>
        </view>
        <view class="uni-container">
            <uni-table :loading="loading" border stripe type="selection" :emptyText="$t('common.empty')" @selection-change="selectionChange">
                <uni-tr>
                    <uni-th width="150" align="center">日期</uni-th>
                    <uni-th width="150" align="center">事件类型</uni-th>
                    <uni-th align="center">经纬坐标</uni-th>
                    <uni-th width="204" align="center">求救者</uni-th>
					<uni-th width="204" align="center">救援负责人</uni-th>
					<uni-th width="204" align="center">所在区域</uni-th>
					<uni-th width="100" align="center">现场采集</uni-th>
					<uni-th width="204" align="center">状态</uni-th>
					<uni-th width="204" align="center">操作</uni-th>
                </uni-tr>
                <uni-tr v-for="(item ,index) in tableData" :key="index">
                    <uni-td>{{item.date}}</uni-td>
                    <uni-td>
                        <view class="name">{{item.type}}</view>
                    </uni-td>
                    <uni-td>{{item.latitude}},{{item.longitude}}</uni-td>
					<uni-td>{{item.name}}</uni-td>
					<uni-td>{{item.saverName}}</uni-td>
					<uni-td>{{item.address}}</uni-td>
					<uni-td style="color: red;"><a :href="item.video">查看</a></uni-td>
					<uni-td>{{item.status}}</uni-td>
                    <uni-td>
                        <view class="uni-group">
                            <button class="uni-button" size="mini" type="primary" @click="toDetailPage(item._id)">查看</button>
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
    export default {
        data() {
            return {
                searchVal: '',
                tableData: [],
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
            this.getData(1,0)
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
                this.getData(e.current)
            },
            // 搜索
            search() {
                this.getData(1, this.searchVal)
            },
            // 获取数据
            getData(pageCurrent,bar,status) {
				this.bar=bar;
                this.loading = true
                this.pageCurrent = pageCurrent
				const db = uniCloud.database();
				db.collection('mathList')
				.where({
					status:status
				})
				.get()
				.then(res => {
					this.tableData = res.result.data
					this.total = res.result.data.length
					this.loading = false
				})
            },
			toDetailPage(id)
			{
				uni.navigateTo({
					url:"detailPage/detailPage?id=" +id
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
