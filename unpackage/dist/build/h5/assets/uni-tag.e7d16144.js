import{o as t,c as e,w as a,r as i,m as s,t as l,a as n,n as r,d as o,i as d}from"./vendor.8a7e56dc.js";import{_ as u}from"./index.756c4e22.js";var c=u({name:"UniTag",emits:["click"],props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1},customStyle:{type:String,default:""}},computed:{classes(){const{type:t,disabled:e,inverted:a,circle:i,mark:s,size:l,isTrue:n}=this;return["uni-tag--"+t,n(e)?"uni-tag--disabled":"",n(a)?t+"-uni-tag--inverted":"",n(i)?"uni-tag--circle":"",n(s)?"uni-tag--mark":"","uni-tag--"+l,n(a)?"uni-tag-text--"+t:"","small"===l?"uni-tag-text--small":""].join(" ")}},methods:{isTrue:t=>!0===t||"true"===t,onClick(){this.isTrue(this.disabled)||this.$emit("click")}}},[["render",function(u,c,g,m,p,y){const f=d;return g.text?(t(),e(f,{key:0,class:n(["uni-tag",y.classes]),style:r(g.customStyle),onClick:y.onClick},{default:a((()=>[i(u.$slots,"default",{},void 0,!0),s(l(g.text),1),i(u.$slots,"right",{},void 0,!0)])),_:3},8,["class","style","onClick"])):o("",!0)}],["__scopeId","data-v-1ea63180"]]);export{c as _};