import{A as o,S as a}from"./route-block.b1cafca1.js";import{a as s}from"./index.36d4ce84.js";class c extends o{constructor(){const e=["creator","title","content","createdAt"];super(e)}}class p extends a{constructor(){super("/",new c,s)}async create(e){try{const{data:t}=await this._api.post("/note/create",{title:e.apiData().title,content:e.apiData().content});return Promise.resolve(t)}catch(t){return Promise.reject(t)}}async all(){try{const e=await this._api.get("/note/list");return Promise.resolve(e.data)}catch(e){return Promise.reject(e)}}async getNote(e){console.log("[SERVICE] get");try{const{data:t}=await this._api.get(`/note/${e}/`);return Promise.resolve(t)}catch(t){return t.response&&t.response.status,t.response?Promise.reject(t.response):Promise.reject(t)}}async update(e){try{const t=await this._api.post(`/note/update/${e._id}/`,{title:e.title,content:e.contnent});return Promise.resolve(t.data)}catch(t){return Promise.reject(t)}}}export{p as N,c as a};
