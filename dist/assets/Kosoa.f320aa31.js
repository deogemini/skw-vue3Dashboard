import{_ as k,B as h,c as f,e as t,f as o,r as e,o as l,h as n,x as g,y,z as x}from"./index.3ba19c61.js";import{a as z}from"./axios.0a901153.js";const w={components:{BTable:h},data(){return{loading:!0,items:[],maoniyote:[],fields:[{key:"serialNumber",label:"#"},{key:"maoni",label:"Kukosoa",sortable:!0},{key:"sekta",label:"Sekta",sortable:!0},{key:"jimbo",label:"Jimbo",sortable:!0}]}},methods:{async getPongezi(){this.loading=!0;const r={method:"get",url:"http://45.56.115.113:8001/api/getfeedback/",headers:{Authorization:"Token "+localStorage.getItem("token")}};let i=await z(r);this.maoniyote=i.data.result,localStorage.setItem("maoniAmount",this.maoniyote.length),this.items=this.maoniyote.filter(a=>{if(a.feedback_type=="Kosoa")return a}),this.loading=!1,console.log(this.pongezi)}},mounted(){this.getPongezi()}};function S(r,i,a,v,s,B){const c=e("b-card-title"),d=e("b-card-header"),m=e("b-card-text"),_=e("b-spinner"),u=e("b-table"),b=e("b-card");return l(),f("div",null,[t(b,{class:"mb-3"},{default:o(()=>[t(d,null,{default:o(()=>[t(c,{class:"text-center"},{default:o(()=>[n("SMS za Kukosoa ")]),_:1})]),_:1}),t(m,null,{default:o(()=>[n("Jumbe za kuikosoa serikali kutoka kwa wananchi wa mkoa wako")]),_:1}),s.loading?(l(),g(_,{key:0,variant:"primary",label:"Loading..."})):y("",!0),t(u,{"head-variant":"light",bordered:"",striped:"",hover:"",items:s.items,fields:s.fields,outlined:""},{"cell(serialNumber)":o(p=>[n(x(p.index+1),1)]),_:1},8,["items","fields"])]),_:1})])}const C=k(w,[["render",S]]);export{C as default};
