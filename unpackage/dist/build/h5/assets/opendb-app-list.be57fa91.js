const e={appid:{rules:[{required:!0},{format:"string"}],label:"AppID"},name:{rules:[{required:!0},{format:"string"}],label:"应用名称"},description:{rules:[{required:!0},{format:"string"}],label:"应用描述"},create_date:{rules:[{format:"timestamp"}],label:"创建时间"}},t={};function a(e,t){let a={};for(let r in e){let{type:l,value:s}=e[r];switch(l){case"search":"string"==typeof s&&s.length&&(a[r]=new RegExp(s));break;case"select":if(s.length){let e=[];for(let a of s)e.push(t.eq(a));a[r]=t.or(e)}break;case"range":if(s.length){let e=s[0],l=s[1];a[r]=t.and([t.gte(e),t.lte(l)])}break;case"date":if(s.length){let[e,l]=s,n=new Date(e),i=new Date(l);a[r]=t.and([t.gte(n),t.lte(i)])}break;case"timestamp":if(s.length){let[e,l]=s;a[r]=t.and([t.gte(e),t.lte(l)])}}}return a}export{t as e,a as f,e as v};
