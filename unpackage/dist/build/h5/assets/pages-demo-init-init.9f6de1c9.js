var e=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(s,a,r)=>a in s?e(s,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[a]=r,t=(e,s)=>{for(var a in s||(s={}))o.call(s,a)&&n(e,a,s[a]);if(r)for(var a of r(s))i.call(s,a)&&n(e,a,s[a]);return e};import{C as l,K as d,G as u,S as c,X as p,f as m,g,o as f,c as h,w,j as b,m as P,a as y,e as _,I as C,i as v,N as k}from"./vendor.8a7e56dc.js";import{_ as M,c as O,a as j,b as A}from"./index.756c4e22.js";var L,x;var N=M({data:()=>({showPassword:!0,showPasswordAgain:!0,loading:!1,errorMessage:"",formData:{username:"admin",password:""},passwordConfirmation:"",rules:{username:{rules:[{required:!0,errorMessage:"请输入账户"},{minLength:3,maxLength:30,errorMessage:"账户长度在{minLength}到{maxLength}个字符"}]},password:{rules:[{required:!0,errorMessage:"请输入密码"},{minLength:6,errorMessage:"密码长度大于{minLength}个字符"}]},passwordConfirmation:{rules:[{required:!0,errorMessage:"请输入确认密码"},{minLength:6,errorMessage:"密码长度最小{minLength}个字符"}]}}}),mounted(){},computed:t({},l("app",["appName","appid"])),methods:(L=t({},d({setToken(e,s){e("user/SET_TOKEN",s)}})),x={register(e){this.loading=!0,this.$request("registerAdmin",e,{functionName:"uni-id-cf"}).then((e=>{u({title:"提示",content:e.code?e.message:"创建成功",showCancel:!1,success:e=>{e.confirm&&c({url:"/pages/login/login"})}})})).catch((e=>{})).finally((e=>{this.loading=!1}))},submit(e){if(this.loading)return;const{errors:s,value:a}=e.detail;s||(a.password===a.passwordConfirmation?(a.appName=this.appName,a.appid=this.appid,this.register(a)):this.errorMessage="两次输入密码不相同")},confirmForm(e,s){this.binddata(e,s),this.submitForm()},submitForm(){this.errorMessage="",this.$refs.form.submit()},back(){p({url:O.login.url})},changePassword:function(){this.showPassword=!this.showPassword},changePasswordAgain:function(){this.showPasswordAgain=!this.showPasswordAgain}},s(L,a(x)))},[["render",function(e,s,a,r,o,i){const n=_,t=C,l=m(g("uni-forms-item"),j),d=v,u=k,c=m(g("uni-forms"),A);return f(),h(n,{class:"login-box"},{default:w((()=>[b(n,{class:"uni-header"},{default:w((()=>[b(n,{class:"uni-group"},{default:w((()=>[b(n,{class:"uni-title"},{default:w((()=>[P("创建超级管理员")])),_:1})])),_:1})])),_:1}),b(n,{class:"uni-container"},{default:w((()=>[b(c,{ref:"form",validateTrigger:"bind",rules:o.rules,onSubmit:i.submit},{default:w((()=>[b(l,{"left-icon":"person",name:"username",labelWidth:"35"},{default:w((()=>[b(t,{ref:"usernameInput",class:"uni-input-border",type:"text",placeholder:"账户",onBlur:s[0]||(s[0]=s=>e.binddata("username",s.detail.value))},null,512)])),_:1}),b(l,{"left-icon":"locked",name:"password",labelWidth:"35"},{default:w((()=>[b(t,{class:"uni-input-border",password:o.showPassword,placeholder:"密码",onBlur:s[1]||(s[1]=s=>e.binddata("password",s.detail.value))},null,8,["password"]),b(d,{class:y(["uni-icon-password-eye pointer",[o.showPassword?"":"uni-eye-active"]]),onClick:i.changePassword},{default:w((()=>[P("")])),_:1},8,["class","onClick"])])),_:1}),b(l,{"left-icon":"locked",name:"passwordConfirmation",labelWidth:"35",errorMessage:o.errorMessage},{default:w((()=>[b(t,{ref:"passwordInput",onConfirm:s[2]||(s[2]=e=>i.confirmForm("passwordConfirmation",e.detail.value)),onBlur:s[3]||(s[3]=s=>e.binddata("passwordConfirmation",s.detail.value)),class:"uni-input-border",password:o.showPasswordAgain,placeholder:"确认密码"},null,8,["password"]),b(d,{class:y(["uni-icon-password-eye pointer",[o.showPasswordAgain?"":"uni-eye-active"]]),onClick:i.changePasswordAgain},{default:w((()=>[P("")])),_:1},8,["class","onClick"])])),_:1},8,["errorMessage"]),b(n,{class:"uni-group",style:{"margin-top":"30px"}},{default:w((()=>[b(u,{class:"uni-button",type:"primary",loading:o.loading,disabled:o.loading,onClick:i.submitForm},{default:w((()=>[P("创建")])),_:1},8,["loading","disabled","onClick"]),b(u,{class:"uni-button",type:"default",onClick:i.back},{default:w((()=>[P("返回")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["rules","onSubmit"])])),_:1})])),_:1})}],["__scopeId","data-v-7c0a7b82"]]);export{N as default};
