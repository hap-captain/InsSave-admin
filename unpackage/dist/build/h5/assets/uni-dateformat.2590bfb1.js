import{o as e,c as t,w as r,m as a,t as s,i as h}from"./vendor.8a7e56dc.js";import{_ as f,l as o}from"./index.756c4e22.js";var d=f({name:"uniDateformat",props:{date:{type:[Object,String,Number],default:()=>"-"},locale:{type:String,default:"zh"},threshold:{type:Array,default:()=>[0,0]},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:()=>({refreshMark:0}),computed:{dateShow(){return this.refreshMark,o(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler(){this.setAutoRefresh()},immediate:!0}},methods:{refresh(){this.refreshMark++},setAutoRefresh(){clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((()=>{this.refresh()}),parseInt(this.refreshRate)))}}},[["render",function(f,o,d,i,l,n){const m=h;return e(),t(m,null,{default:r((()=>[a(s(n.dateShow),1)])),_:1})}]]);export{d as _};
