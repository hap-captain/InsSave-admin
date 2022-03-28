var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,r=(e,r)=>{for(var n in r||(r={}))t.call(r,n)&&l(e,n,r[n]);if(a)for(var n of a(r))o.call(r,n)&&l(e,n,r[n]);return e};import{V as n,al as s,am as m,E as i,M as u,G as d,f as c,g as f,o as p,c as b,w as h,j as _,m as y,t as v,N as D,D as V,e as j}from"./vendor.8a7e56dc.js";import{_ as x}from"./uni-easyinput.9b1df50f.js";import{_ as g,a as O,b as k}from"./index.756c4e22.js";import{_ as w}from"./uni-data-checkbox.9cd6b092.js";import{v as C}from"./uni-id-roles.26b50b24.js";const U=n.database();U.command;function $(e){let a={};for(let t in C)e.includes(t)&&(a[t]=C[t]);return a}var E=g({data(){let e={role_id:"",role_name:"",permission:[],comment:"",create_date:null};return{formData:e,formOptions:{},rules:r({},$(Object.keys(e)))}},onReady(){this.$refs.form.setRules(this.rules)},methods:{submit(){s({mask:!0}),this.$refs.form.validate().then((e=>{this.submitForm(e)})).catch((()=>{m()}))},submitForm(e){U.collection("uni-id-roles").add(e).then((e=>{i({title:"新增成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>u()),500)})).catch((e=>{d({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{m()}))}}},[["render",function(e,a,t,o,l,r){const n=c(f("uni-easyinput"),x),s=c(f("uni-forms-item"),O),m=c(f("uni-data-checkbox"),w),i=D,u=V,d=j,g=c(f("uni-forms"),k);return p(),b(d,{class:"uni-container"},{default:h((()=>[_(g,{ref:"form",value:l.formData,validateTrigger:"bind"},{default:h((()=>[_(s,{name:"role_id",label:"唯一ID",required:""},{default:h((()=>[_(n,{placeholder:"角色唯一标识，不可修改，不允许重复",modelValue:l.formData.role_id,"onUpdate:modelValue":a[0]||(a[0]=e=>l.formData.role_id=e),trim:"both"},null,8,["modelValue"])])),_:1}),_(s,{name:"role_name",label:"名称",required:""},{default:h((()=>[_(n,{placeholder:"角色名称",modelValue:l.formData.role_name,"onUpdate:modelValue":a[1]||(a[1]=e=>l.formData.role_name=e),trim:"both"},null,8,["modelValue"])])),_:1}),_(s,{name:"permission",label:"权限",class:"flex-center-x"},{default:h((()=>[_(m,{multiple:!0,modelValue:l.formData.permission,"onUpdate:modelValue":a[2]||(a[2]=e=>l.formData.permission=e),collection:"uni-id-permissions",field:"permission_name as text, permission_id as value"},null,8,["modelValue"])])),_:1}),_(s,{name:"comment",label:"备注"},{default:h((()=>[_(n,{type:"textarea",placeholder:"备注",modelValue:l.formData.comment,"onUpdate:modelValue":a[3]||(a[3]=e=>l.formData.comment=e),trim:"both"},null,8,["modelValue"])])),_:1}),_(d,{class:"uni-button-group"},{default:h((()=>[_(i,{type:"primary",class:"uni-button",style:{width:"100px"},onClick:r.submit},{default:h((()=>[y(v(e.$t("common.button.submit")),1)])),_:1},8,["onClick"]),_(u,{"open-type":"navigateBack",style:{"margin-left":"15px"}},{default:h((()=>[_(i,{class:"uni-button",style:{width:"100px"}},{default:h((()=>[y(v(e.$t("common.button.back")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["value"])])),_:1})}]]);export{E as default};
