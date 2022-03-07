/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var s=function(){return s=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},s.apply(this,arguments)},M=function(){function i(t){this.options=t,this.listeners={}}return i.prototype.on=function(t,e){var n=this.listeners[t]||[];this.listeners[t]=n.concat([e])},i.prototype.triggerEvent=function(t,e){var n=this,a=this.listeners[t]||[];a.forEach(function(o){return o({target:n,event:e})})},i}(),m;(function(i){i[i.Add=0]="Add",i[i.Remove=1]="Remove"})(m||(m={}));var P=function(){function i(){this.notifications=[]}return i.prototype.push=function(t){this.notifications.push(t),this.updateFn(t,m.Add,this.notifications)},i.prototype.splice=function(t,e){var n=this.notifications.splice(t,e)[0];return this.updateFn(n,m.Remove,this.notifications),n},i.prototype.indexOf=function(t){return this.notifications.indexOf(t)},i.prototype.onUpdate=function(t){this.updateFn=t},i}(),u;(function(i){i.Dismiss="dismiss",i.Click="click"})(u||(u={}));var T={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:!0,position:{x:"right",y:"bottom"},dismissible:!1},F=function(){function i(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var t=document.createDocumentFragment(),e=this._createHTMLElement({tagName:"div",className:"notyf"});t.appendChild(e),document.body.appendChild(t),this.container=e,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer()}return i.prototype.on=function(t,e){var n;this.events=s(s({},this.events),(n={},n[t]=e,n))},i.prototype.update=function(t,e){e===m.Add?this.addNotification(t):e===m.Remove&&this.removeNotification(t)},i.prototype.removeNotification=function(t){var e=this,n=this._popRenderedNotification(t),a;if(!!n){a=n.node,a.classList.add("notyf__toast--disappear");var o;a.addEventListener(this.animationEndEventName,o=function(r){r.target===a&&(a.removeEventListener(e.animationEndEventName,o),e.container.removeChild(a))})}},i.prototype.addNotification=function(t){var e=this._renderNotification(t);this.notifications.push({notification:t,node:e}),this._announce(t.options.message||"Notification")},i.prototype._renderNotification=function(t){var e,n=this._buildNotificationCard(t),a=t.options.className;return a&&(e=n.classList).add.apply(e,a.split(" ")),this.container.appendChild(n),n},i.prototype._popRenderedNotification=function(t){for(var e=-1,n=0;n<this.notifications.length&&e<0;n++)this.notifications[n].notification===t&&(e=n);if(e!==-1)return this.notifications.splice(e,1)[0]},i.prototype.getXPosition=function(t){var e;return((e=t==null?void 0:t.position)===null||e===void 0?void 0:e.x)||"right"},i.prototype.getYPosition=function(t){var e;return((e=t==null?void 0:t.position)===null||e===void 0?void 0:e.y)||"bottom"},i.prototype.adjustContainerAlignment=function(t){var e=this.X_POSITION_FLEX_MAP[this.getXPosition(t)],n=this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],a=this.container.style;a.setProperty("justify-content",n),a.setProperty("align-items",e)},i.prototype._buildNotificationCard=function(t){var e=this,n=t.options,a=n.icon;this.adjustContainerAlignment(n);var o=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),r=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),l=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),h=this._createHTMLElement({tagName:"div",className:"notyf__message"});h.innerHTML=n.message||"";var y=n.background||n.backgroundColor;if(a){var N=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if((typeof a=="string"||a instanceof String)&&(N.innerHTML=new String(a).valueOf()),typeof a=="object"){var _=a.tagName,L=_===void 0?"i":_,w=a.className,O=a.text,b=a.color,E=b===void 0?y:b,C=this._createHTMLElement({tagName:L,className:w,text:O});E&&(C.style.color=E),N.appendChild(C)}l.appendChild(N)}if(l.appendChild(h),o.appendChild(l),y&&(n.ripple?(r.style.background=y,o.appendChild(r)):o.style.background=y),n.dismissible){var x=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),k=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});x.appendChild(k),l.appendChild(x),o.classList.add("notyf__toast--dismissible"),k.addEventListener("click",function(g){var v,d;(d=(v=e.events)[u.Dismiss])===null||d===void 0||d.call(v,{target:t,event:g}),g.stopPropagation()})}o.addEventListener("click",function(g){var v,d;return(d=(v=e.events)[u.Click])===null||d===void 0?void 0:d.call(v,{target:t,event:g})});var A=this.getYPosition(n)==="top"?"upper":"lower";return o.classList.add("notyf__toast--"+A),o},i.prototype._createHTMLElement=function(t){var e=t.tagName,n=t.className,a=t.text,o=document.createElement(e);return n&&(o.className=n),o.textContent=a||null,o},i.prototype._createA11yContainer=function(){var t=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t},i.prototype._announce=function(t){var e=this;this.a11yContainer.textContent="",setTimeout(function(){e.a11yContainer.textContent=t},100)},i.prototype._getAnimationEndEventName=function(){var t=document.createElement("_fake"),e={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"},n;for(n in e)if(t.style[n]!==void 0)return e[n];return"animationend"},i}(),H=function(){function i(t){var e=this;this.dismiss=this._removeNotification,this.notifications=new P,this.view=new F;var n=this.registerTypes(t);this.options=s(s({},T),t),this.options.types=n,this.notifications.onUpdate(function(a,o){return e.view.update(a,o)}),this.view.on(u.Dismiss,function(a){var o=a.target,r=a.event;e._removeNotification(o),o.triggerEvent(u.Dismiss,r)}),this.view.on(u.Click,function(a){var o=a.target,r=a.event;return o.triggerEvent(u.Click,r)})}return i.prototype.error=function(t){var e=this.normalizeOptions("error",t);return this.open(e)},i.prototype.success=function(t){var e=this.normalizeOptions("success",t);return this.open(e)},i.prototype.open=function(t){var e=this.options.types.find(function(o){var r=o.type;return r===t.type})||{},n=s(s({},e),t);this.assignProps(["ripple","position","dismissible"],n);var a=new M(n);return this._pushNotification(a),a},i.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},i.prototype.assignProps=function(t,e){var n=this;t.forEach(function(a){e[a]=e[a]==null?n.options[a]:e[a]})},i.prototype._pushNotification=function(t){var e=this;this.notifications.push(t);var n=t.options.duration!==void 0?t.options.duration:this.options.duration;n&&setTimeout(function(){return e._removeNotification(t)},n)},i.prototype._removeNotification=function(t){var e=this.notifications.indexOf(t);e!==-1&&this.notifications.splice(e,1)},i.prototype.normalizeOptions=function(t,e){var n={type:t};return typeof e=="string"?n.message=e:typeof e=="object"&&(n=s(s({},n),e)),n},i.prototype.registerTypes=function(t){var e=(t&&t.types||[]).slice(),n=T.types.map(function(a){var o=-1;e.forEach(function(l,h){l.type===a.type&&(o=h)});var r=o!==-1?e.splice(o,1)[0]:{};return s(s({},a),r)});return n.concat(e)},i}();const f={primary:"var(--primary)",primaryMedium:"#b4e4ce",primaryLight:"#f7fcfa",secondary:"#ff227d",accent:"#797bf2",accentMedium:"#d4b3ff",accentLight:"#b8ccff",success:"var(--success)",info:"var(--info)",warning:"var(--warning)",danger:"var(--danger)",purple:"#8269B2",blue:"#37C3FF",green:"#93E088",yellow:"#FFD66E",orange:"#FFA981",lightText:"#a2a5b9",fadeGrey:"#ededed"},c=2e3,p=new H({duration:c,position:{x:"right",y:"bottom"},types:[{type:"warning",background:f.warning,icon:{className:"fas fa-hand-paper",tagName:"i",text:""}},{type:"info",background:f.info,icon:{className:"fas fa-info-circle",tagName:"i",text:""}},{type:"primary",background:f.primary,icon:{className:"fas fa-car-crash",tagName:"i",text:""}},{type:"accent",background:f.accent,icon:{className:"fas fa-car-crash",tagName:"i",text:""}},{type:"purple",background:f.purple,icon:{className:"fas fa-check",tagName:"i",text:""}},{type:"blue",background:f.blue,icon:{className:"fas fa-check",tagName:"i",text:""}},{type:"green",background:f.green,icon:{className:"fas fa-check",tagName:"i",text:""}},{type:"orange",background:f.orange,icon:{className:"fas fa-check",tagName:"i",text:""}}]});function I(){return{success:(i,t)=>{p.success({message:i,duration:t||c})},error:(i,t)=>{p.error({message:i,duration:t||c})},info:(i,t)=>{p.open({type:"info",message:i,duration:t||c})},warning:(i,t)=>{p.open({type:"warning",message:i,duration:t||c})},primary:(i,t)=>{p.open({type:"primary",message:i,duration:t||c})},purple:(i,t)=>{p.open({type:"purple",message:i,duration:t||c})},blue:(i,t)=>{p.open({type:"blue",message:i,duration:t||c})},green:(i,t)=>{p.open({type:"green",message:i,duration:t||c})},orange:(i,t)=>{p.open({type:"orange",message:i,duration:t||c})}}}export{I as u};
