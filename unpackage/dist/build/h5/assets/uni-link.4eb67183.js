import{as as e,o as t,q as i,r as n,m as s,t as o,a as r,n as a,c as l,w as d,i as h}from"./vendor.8a7e56dc.js";import{_ as u}from"./index.756c4e22.js";var f=u({name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created(){this._isH5=null},methods:{isMail(){return this.href.startsWith("mailto:")},isTel(){return this.href.startsWith("tel:")},openURL(){window.open(this.href)},makePhoneCall(t){e({phoneNumber:t})}}},[["render",function(e,u,f,p,c,w){const S=h;return w.isShowA?(t(),i("a",{key:0,class:r(["uni-link",{"uni-link--withline":!0===f.showUnderLine||"true"===f.showUnderLine}]),href:f.href,style:a({color:f.color,fontSize:f.fontSize+"px"}),download:f.download},[n(e.$slots,"default",{},(()=>[s(o(f.text),1)]),!0)],14,["href","download"])):(t(),l(S,{key:1,class:r(["uni-link",{"uni-link--withline":!0===f.showUnderLine||"true"===f.showUnderLine}]),style:a({color:f.color,fontSize:f.fontSize+"px"}),onClick:w.openURL},{default:d((()=>[n(e.$slots,"default",{},(()=>[s(o(f.text),1)]),!0)])),_:3},8,["class","style","onClick"]))}],["__scopeId","data-v-a80ee6d2"]]);export{f as _};