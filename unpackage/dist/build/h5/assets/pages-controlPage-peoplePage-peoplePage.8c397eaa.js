import{V as e,S as a,G as t,E as l,f as n,g as s,o as i,c as o,w as d,j as c,m as r,d as u,t as h,q as m,s as g,F as p,e as f,I as _,N as b}from"./vendor.8a7e56dc.js";import{_ as C,d as y,e as k,f as D,h as x}from"./index.756c4e22.js";import{_ as M}from"./uni-pagination.7b89d6b3.js";const T=e.database();var w=C({data:()=>({searchVal:"",teamMemberData:[],pageSize:10,pageCurrent:1,total:0,loading:!1,bar:0}),onLoad(){this.selectedIndexs=[],this.getTeamMemberData(1,0,"救援队员")},methods:{selectedItems(){return this.selectedIndexs.map((e=>this.tableData[e]))},selectionChange(e){console.log(e.detail.index),this.selectedIndexs=e.detail.index},delTable(){console.log(this.selectedItems())},change(e){this.getTeamMemberData(e.current)},search(){this.searchData(1,this.searchVal)},addPeople(){a({url:"addPeople"})},edit(e){a({url:"editPeople?id="+e})},dele(e){t({title:"提示",content:"你确定要删除这条记录吗？",success:function(a){a.confirm?T.collection("peopleList").doc(e).remove().then((e=>{l({title:"删除成功！",duration:2e3}),setTimeout(this.getTeamMemberData(),2e3)})):a.cancel&&console.log("用户点击取消")}})},getTeamMemberData(e,a,t){this.bar=a,this.loading=!0,this.pageCurrent=e,T.collection("peopleList").where({type:t}).get().then((e=>{this.teamMemberData=e.result.data,this.total=e.result.data.length,this.loading=!1}))},searchData(e,a){this.loading=!0,this.pageCurrent=e,T.collection("peopleList").where({name:a}).get().then((e=>{this.teamMemberData=e.result.data,this.total=e.result.data.length,this.loading=!1}))}}},[["render",function(e,a,t,l,C,T){const w=f,z=_,V=b,I=n(s("uni-th"),y),S=n(s("uni-tr"),k),j=n(s("uni-td"),D),v=n(s("uni-table"),x),L=n(s("uni-pagination"),M);return i(),o(w,null,{default:d((()=>[c(w,{class:"uni-header"},{default:d((()=>[c(w,{class:"uni-group hide-on-phone"},{default:d((()=>[c(w,{class:"",onClick:a[0]||(a[0]=e=>T.getTeamMemberData(1,0,"救援队员"))},{default:d((()=>[c(w,{class:"uni-title"},{default:d((()=>[r("救援队员 ")])),_:1}),0==C.bar?(i(),o(w,{key:0,class:"line"})):u("",!0)])),_:1}),c(w,{class:"",onClick:a[1]||(a[1]=e=>T.getTeamMemberData(1,1,"队长"))},{default:d((()=>[c(w,{class:"uni-title"},{default:d((()=>[r("队长 ")])),_:1}),1==C.bar?(i(),o(w,{key:0,class:"line"})):u("",!0)])),_:1}),c(w,{class:"",onClick:a[2]||(a[2]=e=>T.getTeamMemberData(1,2,"总指挥"))},{default:d((()=>[c(w,{class:"uni-title"},{default:d((()=>[r("总指挥 ")])),_:1}),2==C.bar?(i(),o(w,{key:0,class:"line"})):u("",!0)])),_:1})])),_:1}),c(w,{class:"uni-group"},{default:d((()=>[c(z,{class:"uni-search",type:"text",modelValue:C.searchVal,"onUpdate:modelValue":a[3]||(a[3]=e=>C.searchVal=e),onConfirm:T.search,placeholder:e.$t("common.placeholder.query")},null,8,["modelValue","onConfirm","placeholder"]),c(V,{class:"uni-button",type:"default",size:"mini",onClick:T.search},{default:d((()=>[r(h(e.$t("common.button.search")),1)])),_:1},8,["onClick"]),c(V,{class:"uni-button",size:"mini",type:"primary",onClick:T.addPeople},{default:d((()=>[r("添加")])),_:1},8,["onClick"])])),_:1})])),_:1}),c(w,{class:"uni-container"},{default:d((()=>[c(v,{loading:C.loading,border:"",stripe:"",type:"selection",emptyText:e.$t("common.empty"),onSelectionChange:T.selectionChange},{default:d((()=>[c(S,null,{default:d((()=>[c(I,{width:"204",align:"center"},{default:d((()=>[r("队员名称")])),_:1}),c(I,{width:"100",align:"center"},{default:d((()=>[r("负责区域")])),_:1}),c(I,{width:"204",align:"center"},{default:d((()=>[r("联系方式")])),_:1}),c(I,{width:"204",align:"center"},{default:d((()=>[r("操作")])),_:1})])),_:1}),(i(!0),m(p,null,g(C.teamMemberData,((e,a)=>(i(),o(S,{key:a},{default:d((()=>[c(j,null,{default:d((()=>[r(h(e.name),1)])),_:2},1024),c(j,null,{default:d((()=>[r(h(e.address),1)])),_:2},1024),c(j,null,{default:d((()=>[r(h(e.phone),1)])),_:2},1024),c(j,null,{default:d((()=>[c(w,{class:"uni-group"},{default:d((()=>[c(V,{class:"uni-button",size:"mini",type:"primary",onClick:a=>T.edit(e._id)},{default:d((()=>[r("编辑")])),_:2},1032,["onClick"]),c(V,{class:"uni-button",size:"mini",type:"primary",style:{"background-color":"red"},onClick:a=>T.dele(e._id)},{default:d((()=>[r("删除")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["loading","emptyText","onSelectionChange"]),c(w,{class:"uni-pagination-box"},{default:d((()=>[c(L,{"show-icon":"","page-size":C.pageSize,current:C.pageCurrent,total:C.total,onChange:T.change},null,8,["page-size","current","total","onChange"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-ac5741b8"]]);export{w as default};