import{V as e,E as a,S as l,f as t,g as o,o as d,c as n,w as u,j as s,m,t as r,N as i,D as p,e as c}from"./vendor.8a7e56dc.js";import{_ as b}from"./uni-easyinput.9b1df50f.js";import{_ as f,a as h,b as _}from"./index.756c4e22.js";const V=e.database();var y=f({data:()=>({peopleId:"",name:"",address:"",phone:"",type:""}),methods:{submit(){V.collection("peopleList").add({peopleId:this.peopleId,name:this.name,address:this.address,phone:this.phone,type:this.type}).then((e=>{a({title:"添加成功",duration:2e3})})),setTimeout((function(){l({url:"peoplePage"})}),2e3)}}},[["render",function(e,a,l,f,V,y){const g=t(o("uni-easyinput"),b),x=t(o("uni-forms-item"),h),q=i,I=p,U=c,j=t(o("uni-forms"),_);return d(),n(U,{class:"uni-container"},{default:u((()=>[s(j,{ref:"form",validateTrigger:"bind"},{default:u((()=>[s(x,{name:"role_id",label:"救援工作证号",required:""},{default:u((()=>[s(g,{placeholder:"救援人员唯一标识，不可修改，不允许重复",modelValue:V.peopleId,"onUpdate:modelValue":a[0]||(a[0]=e=>V.peopleId=e),trim:"both"},null,8,["modelValue"])])),_:1}),s(x,{name:"role_name",label:"姓名",required:""},{default:u((()=>[s(g,{placeholder:"救援队员的姓名",modelValue:V.name,"onUpdate:modelValue":a[1]||(a[1]=e=>V.name=e),trim:"both"},null,8,["modelValue"])])),_:1}),s(x,{name:"role_name",label:"负责区域",required:""},{default:u((()=>[s(g,{placeholder:"救援队员负责的区域",modelValue:V.address,"onUpdate:modelValue":a[2]||(a[2]=e=>V.address=e),trim:"both"},null,8,["modelValue"])])),_:1}),s(x,{name:"mobile",label:"手机号",required:""},{default:u((()=>[s(g,{clearable:!1,modelValue:V.phone,"onUpdate:modelValue":a[3]||(a[3]=e=>V.phone=e),placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1}),s(x,{name:"mobile",label:"职位",required:""},{default:u((()=>[s(g,{clearable:!1,modelValue:V.type,"onUpdate:modelValue":a[4]||(a[4]=e=>V.type=e),placeholder:"职位"},null,8,["modelValue"])])),_:1}),s(x,{name:"comment",label:"备注"},{default:u((()=>[s(g,{type:"textarea",placeholder:"备注",trim:"both"})])),_:1}),s(U,{class:"uni-button-group"},{default:u((()=>[s(q,{type:"primary",class:"uni-button",style:{width:"100px"},onClick:y.submit},{default:u((()=>[m(r(e.$t("common.button.submit")),1)])),_:1},8,["onClick"]),s(I,{"open-type":"navigateBack",style:{"margin-left":"15px"}},{default:u((()=>[s(q,{class:"uni-button",style:{width:"100px"}},{default:u((()=>[m(r(e.$t("common.button.back")),1)])),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1})}]]);export{y as default};