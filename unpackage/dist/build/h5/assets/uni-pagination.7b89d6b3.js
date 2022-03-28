import{p as e,f as t,g as n,o as i,c as a,w as r,j as s,m as u,t as c,a as o,q as l,s as p,F as h,e as d,i as g}from"./vendor.8a7e56dc.js";import{_ as x,i as m}from"./index.756c4e22.js";var _={en:{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next"},es:{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"próxima"},fr:{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante"},"zh-Hans":{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页"},"zh-Hant":{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁"}};const{t:f}=e(_);var v=x({name:"UniPagination",emits:["update:modelValue","input","change"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7}},data:()=>({currentIndex:1,paperData:[]}),computed:{prevPageText(){return this.prevText||f("uni-pagination.prevText")},nextPageText(){return this.nextText||f("uni-pagination.nextText")},maxPage(){let e=1,t=Number(this.total),n=Number(this.pageSize);return t&&n&&(e=Math.ceil(t/n)),e},paper(){const e=this.currentIndex,t=this.pagerCount,n=this.total,i=this.pageSize;let a=[],r=[],s=Math.ceil(n/i);for(let c=0;c<s;c++)a.push(c+1);r.push(1);const u=a[a.length-(t+1)/2];return a.forEach(((n,i)=>{(t+1)/2>=e?n<t+1&&n>1&&r.push(n):e+2<=u?n>e-(t+1)/2&&n<e+(t+1)/2&&r.push(n):(n>e-(t+1)/2||s-t<n)&&n<a[a.length-1]&&r.push(n)})),s>t?((t+1)/2>=e?r[r.length-1]="...":e+2<=u?(r[1]="...",r[r.length-1]="..."):r[1]="...",r.push(a[a.length-1])):(t+1)/2>=e||e+2<=u||(r.shift(),r.push(a[a.length-1])),r}},watch:{current:{immediate:!0,handler(e,t){this.currentIndex=e<1?1:e}},value:{immediate:!0,handler(e){1===Number(this.current)&&(this.currentIndex=e<1?1:e)}}},methods:{selectPage(e,t){if(parseInt(e))this.currentIndex=e,this.change("current");else{let e=Math.ceil(this.total/this.pageSize);if(t<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(t>=6)return void(this.currentIndex+5>e?this.currentIndex=e:this.currentIndex+=5)}},clickLeft(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change(e){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:e,current:this.currentIndex})}}},[["render",function(e,x,_,f,v,I){const y=d,T=t(n("uni-icons"),m),b=g;return i(),a(y,{class:"uni-pagination"},{default:r((()=>[s(y,{class:"uni-pagination__total is-phone-hide"},{default:r((()=>[u("共 "+c(_.total)+" 条",1)])),_:1}),s(y,{class:o(["uni-pagination__btn",1===v.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled"]),"hover-class":1===v.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70,onClick:I.clickLeft},{default:r((()=>[!0===_.showIcon||"true"===_.showIcon?(i(),a(T,{key:0,color:"#666",size:"16",type:"left"})):(i(),a(b,{key:1,class:"uni-pagination__child-btn"},{default:r((()=>[u(c(I.prevPageText),1)])),_:1}))])),_:1},8,["class","hover-class","onClick"]),s(y,{class:"uni-pagination__num uni-pagination__num-flex-none"},{default:r((()=>[s(y,{class:"uni-pagination__num-current"},{default:r((()=>[s(b,{class:"uni-pagination__num-current-text is-pc-hide",style:{color:"#409EFF"}},{default:r((()=>[u(c(v.currentIndex),1)])),_:1}),s(b,{class:"uni-pagination__num-current-text is-pc-hide"},{default:r((()=>[u("/"+c(I.maxPage||0),1)])),_:1}),(i(!0),l(h,null,p(I.paper,((e,t)=>(i(),a(y,{key:t,class:o([{"page--active":e===v.currentIndex},"uni-pagination__num-tag tag--active is-phone-hide"]),onClick:n=>I.selectPage(e,t)},{default:r((()=>[s(b,null,{default:r((()=>[u(c(e),1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),s(y,{class:o(["uni-pagination__btn",v.currentIndex>=I.maxPage?"uni-pagination--disabled":"uni-pagination--enabled"]),"hover-class":v.currentIndex===I.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70,onClick:I.clickRight},{default:r((()=>[!0===_.showIcon||"true"===_.showIcon?(i(),a(T,{key:0,color:"#666",size:"16",type:"right"})):(i(),a(b,{key:1,class:"uni-pagination__child-btn"},{default:r((()=>[u(c(I.nextPageText),1)])),_:1}))])),_:1},8,["class","hover-class","onClick"])])),_:1})}],["__scopeId","data-v-26c50c3f"]]);export{v as _};
