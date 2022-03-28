var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,r=(e,r)=>{for(var n in r||(r={}))t.call(r,n)&&o(e,n,r[n]);if(a)for(var n of a(r))l.call(r,n)&&o(e,n,r[n]);return e};import{V as n,al as s,am as i,E as u,M as m,G as d,f as p,g as f,o as c,c as b,w as h,j as y,m as v,t as D,ak as _,N as g,D as j,e as V}from"./vendor.8a7e56dc.js";import{_ as O}from"./uni-easyinput.9b1df50f.js";import{_ as k,a as w,b as x}from"./index.756c4e22.js";import{v as C}from"./opendb-app-list.be57fa91.js";const I=n.database();I.command;function $(e){let a={};for(let t in C)e.includes(t)&&(a[t]=C[t]);return a}var q=k({data(){let e={appid:"",name:"",description:"",create_date:null};return{formData:e,formOptions:{},rules:r({},$(Object.keys(e)))}},onReady(){this.$refs.form.setRules(this.rules)},methods:{submit(){s({mask:!0}),this.$refs.form.validate().then((e=>{this.submitForm(e)})).catch((()=>{i()}))},submitForm(e){I.collection("opendb-app-list").add(e).then((e=>{u({title:"新增成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>m()),500)})).catch((e=>{d({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{i()}))}}},[["render",function(e,a,t,l,o,r){const n=p(f("uni-easyinput"),O),s=p(f("uni-forms-item"),w),i=_,u=g,m=j,d=V,k=p(f("uni-forms"),x);return c(),b(d,{class:"uni-container"},{default:h((()=>[y(k,{ref:"form",value:o.formData,validateTrigger:"bind"},{default:h((()=>[y(s,{name:"appid",label:"AppID",required:""},{default:h((()=>[y(n,{placeholder:"应用AppID",modelValue:o.formData.appid,"onUpdate:modelValue":a[0]||(a[0]=e=>o.formData.appid=e)},null,8,["modelValue"])])),_:1}),y(s,{name:"name",label:"应用名称",required:""},{default:h((()=>[y(n,{placeholder:"应用名称",modelValue:o.formData.name,"onUpdate:modelValue":a[1]||(a[1]=e=>o.formData.name=e)},null,8,["modelValue"])])),_:1}),y(s,{name:"description",label:"应用描述",required:""},{default:h((()=>[y(i,{placeholder:"应用描述",onInput:a[2]||(a[2]=a=>e.binddata("description",a.detail.value)),class:"uni-textarea-border",modelValue:o.formData.description,"onUpdate:modelValue":a[3]||(a[3]=e=>o.formData.description=e)},null,8,["modelValue"])])),_:1}),y(d,{class:"uni-button-group"},{default:h((()=>[y(u,{type:"primary",class:"uni-button",style:{width:"100px"},onClick:r.submit},{default:h((()=>[v(D(e.$t("common.button.submit")),1)])),_:1},8,["onClick"]),y(m,{"open-type":"navigateBack",style:{"margin-left":"15px"}},{default:h((()=>[y(u,{class:"uni-button",style:{width:"100px"}},{default:h((()=>[v(D(e.$t("common.button.back")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["value"])])),_:1})}]]);export{q as default};
