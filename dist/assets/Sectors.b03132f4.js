import{a as d}from"./axios.0a901153.js";import{_ as h,c as s,a as t,F as a,A as p,h as l,o,x as r}from"./index.289d69ef.js";const u={name:"Sectors",data(){return{sectors:[]}},methods:{getSectors(){d.get("http://45.56.115.113:8001/api/sectors/").then(e=>{this.sectors=e.data.sectors,localStorage.setItem("sectorAmount",this.sectors.length)}).catch(function(e){console.log(e)}).then(function(){})}},mounted(){this.getSectors()}},_=t("div",{class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3"},[t("h1",{class:"h2"},"Sekta Mbalimbali")],-1),b={class:"table-responsive"},m={id:"tableComponent",class:"table table-bordered table-striped table-sm"},f=t("thead",null,[t("tr",null,[t("th",null,[l(" ID "),t("i",{class:"bi bi-sort-alpha-down","aria-label":"Sort Icon"})]),t("th",null,[l("Jina la Sektor "),t("i",{class:"bi bi-sort-alpha-down","aria-label":"Sort Icon"})])])],-1),x=["textContent"],S=["textContent"];function g(e,w,C,k,c,y){return o(),s(a,null,[_,t("div",b,[t("table",m,[f,t("tbody",null,[(o(!0),s(a,null,p(c.sectors,(n,i)=>(o(),s("tr",{key:i},[t("td",{textContent:r(n.id)},null,8,x),t("td",{textContent:r(n.jina)},null,8,S)]))),128))])])])],64)}const B=h(u,[["render",g]]);export{B as default};