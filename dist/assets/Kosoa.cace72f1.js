import{a as u}from"./axios.0a901153.js";import{_ as b,c as n,a as t,F as d,A as _,h as e,o as l,z as a}from"./index.ecb6e060.js";const m={name:"Kosoa",data(){return{maoniyote:[],makosa:[]}},methods:{async getMakosa(){const i={method:"get",url:"http://45.56.115.113:8001/api/getfeedback/",headers:{Authorization:"Token "+localStorage.getItem("token")}};let r=await u(i);this.maoniyote=r.data.result,this.makosa=this.maoniyote.filter(o=>{if(o.feedback_type=="Kosoa")return o})}},mounted(){this.getMakosa()}},p=t("div",{class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3"},[t("h1",{class:"h2"},"Wananchi Walivyo Kosoa")],-1),f={class:"table-responsive"},k={id:"tableComponent",class:"table table-bordered table-striped table-sm"},x=t("thead",null,[t("tr",null,[t("th",null,[e(" ID "),t("i",{class:"bi bi-sort-alpha-down","aria-label":"Sort Icon"})]),t("th",null,[e("Malalamiko Husika"),t("i",{class:"bi bi-sort-alpha-down","aria-label":"Sort Icon"})]),t("th",null,[e("Sekta Husika"),t("i",{class:"bi bi-sort-alpha-down","aria-label":"Sort Icon"})]),t("th",null,[e("Jimbo Husika"),t("i",{class:"bi bi-sort-alpha-down","aria-label":"Sort Icon"})])])],-1),g=["textContent"],y=["textContent"],C=["textContent"],w=["textContent"];function S(i,r,o,I,h,v){return l(),n(d,null,[p,t("div",f,[t("table",k,[x,t("tbody",null,[(l(!0),n(d,null,_(h.makosa,(s,c)=>(l(),n("tr",{key:c},[t("td",{textContent:a(c+1)},null,8,g),t("td",{textContent:a(s.maoni)},null,8,y),t("td",{textContent:a(s.sekta)},null,8,C),t("td",{textContent:a(s.jimbo)},null,8,w)]))),128))])])])],64)}const H=b(m,[["render",S]]);export{H as default};
