import{_ as g,B as h,c as f,e as t,f as a,r as e,o as l,h as i,x as k,y,z}from"./index.3ba19c61.js";import{a as x}from"./axios.0a901153.js";const w={components:{BTable:h},data(){return{loading:!0,items:[],maoniyote:[],fields:[{key:"serialNumber",label:"#"},{key:"maoni",label:"Pongezi",sortable:!0},{key:"sekta",label:"Sekta",sortable:!0},{key:"jimbo",label:"Jimbo",sortable:!0}]}},methods:{async getPongezi(){this.loading=!0;const s={method:"get",url:"http://45.56.115.113:8001/api/getfeedback/",headers:{Authorization:"Token "+localStorage.getItem("token")}};let r=await x(s);this.maoniyote=r.data.result,localStorage.setItem("maoniAmount",this.maoniyote.length),this.items=this.maoniyote.filter(o=>{if(o.feedback_type=="Pongezi")return o}),this.loading=!1,console.log(this.pongezi)}},mounted(){this.getPongezi()}};function P(s,r,o,S,n,v){const c=e("b-card-title"),d=e("b-card-header"),m=e("b-card-text"),_=e("b-spinner"),b=e("b-table"),u=e("b-card");return l(),f("div",null,[t(u,{class:"mb-3"},{default:a(()=>[t(d,null,{default:a(()=>[t(c,{class:"text-center"},{default:a(()=>[i("SMS za Pongezi ")]),_:1})]),_:1}),t(m,null,{default:a(()=>[i("Jumbe za kupongeza jitihada za serikali kutoka kwa wananchi wa mkoa wako")]),_:1}),n.loading?(l(),k(_,{key:0,variant:"primary",label:"Loading..."})):y("",!0),t(b,{"head-variant":"light",bordered:"",striped:"",hover:"",items:n.items,fields:n.fields,outlined:""},{"cell(serialNumber)":a(p=>[i(z(p.index+1),1)]),_:1},8,["items","fields"])]),_:1})])}const C=g(w,[["render",P]]);export{C as default};