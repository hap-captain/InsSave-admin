var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,n=(e,n)=>{for(var s in n||(n={}))t.call(n,s)&&l(e,s,n[s]);if(a)for(var s of a(n))o.call(n,s)&&l(e,s,n[s]);return e};import{V as s,al as r,am as i,E as d,M as m,G as u,f as p,g as c,o as f,c as b,w as h,j as y,m as D,t as g,ak as v,N as _,D as j,e as V}from"./vendor.8a7e56dc.js";import{_ as O}from"./uni-easyinput.9b1df50f.js";import{_ as k,a as w,b as x}from"./index.756c4e22.js";import{v as I}from"./opendb-app-list.be57fa91.js";const C=s.database();C.command;function $(e){let a={};for(let t in I)e.includes(t)&&(a[t]=I[t]);return a}var q=k({data(){let e={appid:"",name:"",description:"",create_date:null};return{formData:e,formOptions:{},rules:n({},$(Object.keys(e)))}},onLoad(e){if(e.id){const a=e.id;this.formDataId=a,this.getDetail(a)}},onReady(){this.$refs.form.setRules(this.rules)},methods:{submit(){r({mask:!0}),this.$refs.form.validate().then((e=>{this.submitForm(e)})).catch((()=>{i()}))},submitForm(e){C.collection("opendb-app-list").doc(this.formDataId).update(e).then((e=>{d({title:"修改成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>m()),500)})).catch((e=>{u({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{i()}))},getDetail(e){r({mask:!0}),C.collection("opendb-app-list").doc(e).field("appid,name,description,create_date").get().then((e=>{const a=e.result.data[0];a&&(this.formData=a)})).catch((e=>{u({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{i()}))}}},[["render",function(e,a,t,o,l,n){const s=p(c("uni-easyinput"),O),r=p(c("uni-forms-item"),w),i=v,d=_,m=j,u=V,k=p(c("uni-forms"),x);return f(),b(u,{class:"uni-container"},{default:h((()=>[y(k,{ref:"form",value:l.formData,validateTrigger:"bind"},{default:h((()=>[y(r,{name:"appid",label:"AppID",required:""},{default:h((()=>[y(s,{disabled:!0,placeholder:"应用AppID",modelValue:l.formData.appid,"onUpdate:modelValue":a[0]||(a[0]=e=>l.formData.appid=e)},null,8,["modelValue"])])),_:1}),y(r,{name:"name",label:"应用名称",required:""},{default:h((()=>[y(s,{disabled:!0,placeholder:"应用名称",modelValue:l.formData.name,"onUpdate:modelValue":a[1]||(a[1]=e=>l.formData.name=e)},null,8,["modelValue"])])),_:1}),y(r,{name:"description",label:"应用描述",required:""},{default:h((()=>[y(i,{placeholder:"应用描述",onInput:a[2]||(a[2]=a=>e.binddata("description",a.detail.value)),class:"uni-textarea-border",modelValue:l.formData.description,"onUpdate:modelValue":a[3]||(a[3]=e=>l.formData.description=e)},null,8,["modelValue"])])),_:1}),y(u,{class:"uni-button-group"},{default:h((()=>[y(d,{type:"primary",class:"uni-button",style:{width:"100px"},onClick:n.submit},{default:h((()=>[D(g(e.$t("common.button.submit")),1)])),_:1},8,["onClick"]),y(m,{"open-type":"navigateBack",style:{"margin-left":"15px"}},{default:h((()=>[y(d,{class:"uni-button",style:{width:"100px"}},{default:h((()=>[D(g(e.$t("common.button.back")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["value"])])),_:1})}]]);export{q as default};
