import{_ as u,B as p,c as f,e as t,f as a,r as e,o as r,h as n,x as h,y as g,z as k}from"./index.3ba19c61.js";import{a as x}from"./axios.0a901153.js";const S={name:"Sectors",components:{BTable:p},data(){return{loading:!0,items:[],fields:[{key:"serialNumber",label:"#"},{key:"jina",label:"Jina la Sekta",sortable:!0}]}},methods:{getSectors(){x.get("http://45.56.115.113:8001/api/sectors/").then(o=>{this.items=o.data.sectors,localStorage.setItem("sectorAmount",this.items.length)}).catch(function(o){console.log(o)}).then(function(){}),this.loading=!1}},mounted(){this.getSectors()}};function y(o,v,z,B,s,N){const c=e("b-card-title"),i=e("b-card-header"),l=e("b-card-text"),d=e("b-spinner"),m=e("b-table"),_=e("b-card");return r(),f("div",null,[t(_,{class:"mb-3"},{default:a(()=>[t(i,null,{default:a(()=>[t(c,{class:"text-center"},{default:a(()=>[n("Sekta Mbalimbali")]),_:1})]),_:1}),t(l,null,{default:a(()=>[n("Sekta za huduma za kijamii zilizosajiliwa kwenye mfumo wa SKW")]),_:1}),s.loading?(r(),h(d,{key:0,variant:"primary",label:"Loading..."})):g("",!0),t(m,{"head-variant":"light",bordered:"",striped:"",hover:"",items:s.items,fields:s.fields,outlined:""},{"cell(serialNumber)":a(b=>[n(k(b.index+1),1)]),_:1},8,["items","fields"])]),_:1})])}const C=u(S,[["render",y]]);export{C as default};
