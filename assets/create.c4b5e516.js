import{f as h,A as m,g as k,j as y,k as b,l as e,y as c,z as r,q as x,s as w,o as N}from"./vendor.f9f2987e.js";import{_ as S,b as u,u as g}from"./route-block.b1cafca1.js";import{N as C,a as B}from"./note.e6cafeda.js";import"./index.36d4ce84.js";const i=a=>(x("data-v-0258aef4"),a=a(),w(),a),I=i(()=>e("br",null,null,-1)),T=i(()=>e("br",null,null,-1)),d=h({setup(a){m();const n=k(),p=g(),_=new C,t=y(new B),v=async()=>{try{const s=await _.create(t.value);p.success("Successfully created"),console.log("DATA",s),n.push({path:`/note/${s._id}`})}catch{alert("Error while creating note")}},f=()=>{n.push({path:"/"})};return(s,o)=>(N(),b("div",null,[e("div",{class:"header"},[e("div",{class:"back-btn btn",onClick:f},"\u1438"),e("div",{class:"save-btn btn",onClick:v},"Create")]),I,T,e("div",null,[c(e("textarea",{class:"title-textarea","onUpdate:modelValue":o[0]||(o[0]=l=>t.value.state.title=l),placeholder:"Title",spellcheck:"false"},null,512),[[r,t.value.state.title]]),c(e("textarea",{class:"content-textarea","onUpdate:modelValue":o[1]||(o[1]=l=>t.value.state.content=l),placeholder:"Type something...",spellcheck:"false"},null,512),[[r,t.value.state.content]])])]))}});typeof u=="function"&&u(d);var M=S(d,[["__scopeId","data-v-0258aef4"]]);export{M as default};
