import{a8 as Ie,A as nt,s as fe,i as ne,j as le,k as H,h as I,q as ae,e as Le,F as Ee,ac as ot,d as Y,t as re,m as rt,af as he,aB as it,x as W,g as R,l as x,aC as at,aD as lt,am as Q,X as st,ay as Ne,ag as dt,H as A,Y as ut,I as L,$ as pe,L as ve,K as ce,aE as ct,n as ft,P as Be,aA as Ve,v as ht,T as pt,aq as vt,aF as mt,z as bt,a9 as wt,C as gt}from"./app-157886d0.js";import{m as yt}from"./map-8aed02cb.js";import{a as O,o as F,g as Se,X as xt}from"./Scrollbar-c5491e1b.js";import{i as $t,b as St,f as me}from"./utils-05640b2a.js";import{u as Mt}from"./use-false-until-truthy-d7567e0e.js";import{i as Ce,r as be,c as se}from"./resolve-slot-528fc9db.js";import{u as zt}from"./use-merged-state-6df72ce6.js";function Et(e,t=[],n){const o={};return t.forEach(r=>{o[r]=e[r]}),Object.assign(o,n)}function Te(e,t="default",n=void 0){const o=e[t];if(!o)return Ie("getFirstSlotVNode",`slot[${t}] is empty`),null;const r=nt(o(n));return r.length===1?r[0]:(Ie("getFirstSlotVNode",`slot[${t}] should have exactly one child`),null)}let we;function Bt(){return we===void 0&&(we=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),we}let ee,ie;const It=()=>{var e,t;ee=$t?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,ie=!1,ee!==void 0?ee.then(()=>{ie=!0}):ie=!0};It();function Ct(e){if(ie)return;let t=!1;fe(()=>{ie||ee==null||ee.then(()=>{t||e()})}),ne(()=>{t=!0})}const bn=le("n-internal-select-menu"),Tt=le("n-internal-select-menu-body"),He=le("n-modal-body"),We=le("n-drawer-body"),Xe=le("n-popover-body"),Ze="__disabled__";function te(e){const t=H(He,null),n=H(We,null),o=H(Xe,null),r=H(Tt,null),s=I();if(typeof document<"u"){s.value=document.fullscreenElement;const c=()=>{s.value=document.fullscreenElement};fe(()=>{O("fullscreenchange",document,c)}),ne(()=>{F("fullscreenchange",document,c)})}return ae(()=>{var c;const{to:l}=e;return l!==void 0?l===!1?Ze:l===!0?s.value||"body":l:t!=null&&t.value?(c=t.value.$el)!==null&&c!==void 0?c:t.value:n!=null&&n.value?n.value:o!=null&&o.value?o.value:r!=null&&r.value?r.value:l??(s.value||"body")})}te.tdkey=Ze;te.propTo={type:[String,Object,Boolean],default:void 0};function Me(e,t,n="default"){const o=t[n];if(o===void 0)throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);return o()}function ze(e,t=!0,n=[]){return e.forEach(o=>{if(o!==null){if(typeof o!="object"){(typeof o=="string"||typeof o=="number")&&n.push(Le(String(o)));return}if(Array.isArray(o)){ze(o,t,n);return}if(o.type===Ee){if(o.children===null)return;Array.isArray(o.children)&&ze(o.children,t,n)}else o.type!==ot&&n.push(o)}}),n}function Ae(e,t,n="default"){const o=t[n];if(o===void 0)throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);const r=ze(o());if(r.length===1)return r[0];throw new Error(`[vueuc/${e}]: slot[${n}] should have exactly one child.`)}let V=null;function Ye(){if(V===null&&(V=document.getElementById("v-binder-view-measurer"),V===null)){V=document.createElement("div"),V.id="v-binder-view-measurer";const{style:e}=V;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(V)}return V.getBoundingClientRect()}function At(e,t){const n=Ye();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function ge(e){const t=e.getBoundingClientRect(),n=Ye();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function Ft(e){return e.nodeType===9?null:e.parentNode}function Ke(e){if(e===null)return null;const t=Ft(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:o,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+r+o))return t}return Ke(t)}const kt=Y({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;re("VBinder",(t=rt())===null||t===void 0?void 0:t.proxy);const n=H("VBinder",null),o=I(null),r=i=>{o.value=i,n&&e.syncTargetWithParent&&n.setTargetRef(i)};let s=[];const c=()=>{let i=o.value;for(;i=Ke(i),i!==null;)s.push(i);for(const y of s)O("scroll",y,S,!0)},l=()=>{for(const i of s)F("scroll",i,S,!0);s=[]},a=new Set,b=i=>{a.size===0&&c(),a.has(i)||a.add(i)},w=i=>{a.has(i)&&a.delete(i),a.size===0&&l()},S=()=>{St(d)},d=()=>{a.forEach(i=>i())},h=new Set,g=i=>{h.size===0&&O("resize",window,u),h.has(i)||h.add(i)},p=i=>{h.has(i)&&h.delete(i),h.size===0&&F("resize",window,u)},u=()=>{h.forEach(i=>i())};return ne(()=>{F("resize",window,u),l()}),{targetRef:o,setTargetRef:r,addScrollListener:b,removeScrollListener:w,addResizeListener:g,removeResizeListener:p}},render(){return Me("binder",this.$slots)}}),Ot=kt,_t=Y({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=H("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?he(Ae("follower",this.$slots),[[t]]):Ae("follower",this.$slots)}}),q="@@mmoContext",Pt={mounted(e,{value:t}){e[q]={handler:void 0},typeof t=="function"&&(e[q].handler=t,O("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[q];typeof t=="function"?n.handler?n.handler!==t&&(F("mousemoveoutside",e,n.handler),n.handler=t,O("mousemoveoutside",e,t)):(e[q].handler=t,O("mousemoveoutside",e,t)):n.handler&&(F("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[q];t&&F("mousemoveoutside",e,t),e[q].handler=void 0}},Dt=Pt,J="@@coContext",jt={mounted(e,{value:t,modifiers:n}){e[J]={handler:void 0},typeof t=="function"&&(e[J].handler=t,O("clickoutside",e,t,{capture:n.capture}))},updated(e,{value:t,modifiers:n}){const o=e[J];typeof t=="function"?o.handler?o.handler!==t&&(F("clickoutside",e,o.handler,{capture:n.capture}),o.handler=t,O("clickoutside",e,t,{capture:n.capture})):(e[J].handler=t,O("clickoutside",e,t,{capture:n.capture})):o.handler&&(F("clickoutside",e,o.handler,{capture:n.capture}),o.handler=void 0)},unmounted(e,{modifiers:t}){const{handler:n}=e[J];n&&F("clickoutside",e,n,{capture:t.capture}),e[J].handler=void 0}},Fe=jt;function Lt(e,t){console.error(`[vdirs/${e}]: ${t}`)}class Nt{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(t,n){const{elementZIndex:o}=this;if(n!==void 0){t.style.zIndex=`${n}`,o.delete(t);return}const{nextZIndex:r}=this;o.has(t)&&o.get(t)+1===this.nextZIndex||(t.style.zIndex=`${r}`,o.set(t,r),this.nextZIndex=r+1,this.squashState())}unregister(t,n){const{elementZIndex:o}=this;o.has(t)?o.delete(t):n===void 0&&Lt("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:t}=this;t||(this.nextZIndex=2e3),this.nextZIndex-t>2500&&this.rearrange()}rearrange(){const t=Array.from(this.elementZIndex.entries());t.sort((n,o)=>n[1]-o[1]),this.nextZIndex=2e3,t.forEach(n=>{const o=n[0],r=this.nextZIndex++;`${r}`!==o.style.zIndex&&(o.style.zIndex=`${r}`)})}}const ye=new Nt,G="@@ziContext",Vt={mounted(e,t){const{value:n={}}=t,{zIndex:o,enabled:r}=n;e[G]={enabled:!!r,initialized:!1},r&&(ye.ensureZIndex(e,o),e[G].initialized=!0)},updated(e,t){const{value:n={}}=t,{zIndex:o,enabled:r}=n,s=e[G].enabled;r&&!s&&(ye.ensureZIndex(e,o),e[G].initialized=!0),e[G].enabled=!!r},unmounted(e,t){if(!e[G].initialized)return;const{value:n={}}=t,{zIndex:o}=n;ye.unregister(e,o)}},Ue=Vt,{c:de}=it(),Ht="vueuc-style";function ke(e){return typeof e=="string"?document.querySelector(e):e()}const Wt=Y({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(e){return{showTeleport:Mt(W(e,"show")),mergedTo:R(()=>{const{to:t}=e;return t??"body"})}},render(){return this.showTeleport?this.disabled?Me("lazy-teleport",this.$slots):x(at,{disabled:this.disabled,to:this.mergedTo},Me("lazy-teleport",this.$slots)):null}}),ue={top:"bottom",bottom:"top",left:"right",right:"left"},Oe={start:"end",center:"center",end:"start"},xe={top:"height",bottom:"height",left:"width",right:"width"},Xt={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Zt={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},Yt={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},_e={top:!0,bottom:!1,left:!0,right:!1},Pe={top:"end",bottom:"start",left:"end",right:"start"};function Kt(e,t,n,o,r,s){if(!r||s)return{placement:e,top:0,left:0};const[c,l]=e.split("-");let a=l??"center",b={top:0,left:0};const w=(h,g,p)=>{let u=0,i=0;const y=n[h]-t[g]-t[h];return y>0&&o&&(p?i=_e[g]?y:-y:u=_e[g]?y:-y),{left:u,top:i}},S=c==="left"||c==="right";if(a!=="center"){const h=Yt[e],g=ue[h],p=xe[h];if(n[p]>t[p]){if(t[h]+t[p]<n[p]){const u=(n[p]-t[p])/2;t[h]<u||t[g]<u?t[h]<t[g]?(a=Oe[l],b=w(p,g,S)):b=w(p,h,S):a="center"}}else n[p]<t[p]&&t[g]<0&&t[h]>t[g]&&(a=Oe[l])}else{const h=c==="bottom"||c==="top"?"left":"top",g=ue[h],p=xe[h],u=(n[p]-t[p])/2;(t[h]<u||t[g]<u)&&(t[h]>t[g]?(a=Pe[h],b=w(p,h,S)):(a=Pe[g],b=w(p,g,S)))}let d=c;return t[c]<n[xe[c]]&&t[c]<t[ue[c]]&&(d=ue[c]),{placement:a!=="center"?`${d}-${a}`:d,left:b.left,top:b.top}}function Ut(e,t){return t?Zt[e]:Xt[e]}function qt(e,t,n,o,r,s){if(s)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+n.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+n.width/2+r)}px`,transform:"translateX(-50%)"}}}const Jt=de([de(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),de(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[de("> *",{pointerEvents:"all"})])]),Gt=Y({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=H("VBinder"),n=ae(()=>e.enabled!==void 0?e.enabled:e.show),o=I(null),r=I(null),s=()=>{const{syncTrigger:d}=e;d.includes("scroll")&&t.addScrollListener(a),d.includes("resize")&&t.addResizeListener(a)},c=()=>{t.removeScrollListener(a),t.removeResizeListener(a)};fe(()=>{n.value&&(a(),s())});const l=lt();Jt.mount({id:"vueuc/binder",head:!0,anchorMetaName:Ht,ssr:l}),ne(()=>{c()}),Ct(()=>{n.value&&a()});const a=()=>{if(!n.value)return;const d=o.value;if(d===null)return;const h=t.targetRef,{x:g,y:p,overlap:u}=e,i=g!==void 0&&p!==void 0?At(g,p):ge(h);d.style.setProperty("--v-target-width",`${Math.round(i.width)}px`),d.style.setProperty("--v-target-height",`${Math.round(i.height)}px`);const{width:y,minWidth:C,placement:_,internalShift:X,flip:Z}=e;d.setAttribute("v-placement",_),u?d.setAttribute("v-overlap",""):d.removeAttribute("v-overlap");const{style:v}=d;y==="target"?v.width=`${i.width}px`:y!==void 0?v.width=y:v.width="",C==="target"?v.minWidth=`${i.width}px`:C!==void 0?v.minWidth=C:v.minWidth="";const z=ge(d),E=ge(r.value),{left:m,top:N,placement:P}=Kt(_,i,z,X,Z,u),k=Ut(P,u),{left:f,top:$,transform:B}=qt(P,E,i,N,m,u);d.setAttribute("v-placement",P),d.style.setProperty("--v-offset-left",`${Math.round(m)}px`),d.style.setProperty("--v-offset-top",`${Math.round(N)}px`),d.style.transform=`translateX(${f}) translateY(${$}) ${B}`,d.style.setProperty("--v-transform-origin",k),d.style.transformOrigin=k};Q(n,d=>{d?(s(),b()):c()});const b=()=>{st().then(a).catch(d=>console.error(d))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(d=>{Q(W(e,d),a)}),["teleportDisabled"].forEach(d=>{Q(W(e,d),b)}),Q(W(e,"syncTrigger"),d=>{d.includes("resize")?t.addResizeListener(a):t.removeResizeListener(a),d.includes("scroll")?t.addScrollListener(a):t.removeScrollListener(a)});const w=Ne(),S=ae(()=>{const{to:d}=e;if(d!==void 0)return d;w.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:r,followerRef:o,mergedTo:S,syncPosition:a}},render(){return x(Wt,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=x("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[x("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?he(n,[[Ue,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});function qe(e){return e instanceof HTMLElement}function Je(e){for(let t=0;t<e.childNodes.length;t++){const n=e.childNodes[t];if(qe(n)&&(Qe(n)||Je(n)))return!0}return!1}function Ge(e){for(let t=e.childNodes.length-1;t>=0;t--){const n=e.childNodes[t];if(qe(n)&&(Qe(n)||Ge(n)))return!0}return!1}function Qe(e){if(!Qt(e))return!1;try{e.focus({preventScroll:!0})}catch{}return document.activeElement===e}function Qt(e){if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return e.type!=="hidden"&&e.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let oe=[];const Rt=Y({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const t=dt(),n=I(null),o=I(null);let r=!1,s=!1;const c=typeof document>"u"?null:document.activeElement;function l(){return oe[oe.length-1]===t}function a(u){var i;u.code==="Escape"&&l()&&((i=e.onEsc)===null||i===void 0||i.call(e,u))}fe(()=>{Q(()=>e.active,u=>{u?(S(),O("keydown",document,a)):(F("keydown",document,a),r&&d())},{immediate:!0})}),ne(()=>{F("keydown",document,a),r&&d()});function b(u){if(!s&&l()){const i=w();if(i===null||i.contains(Se(u)))return;h("first")}}function w(){const u=n.value;if(u===null)return null;let i=u;for(;i=i.nextSibling,!(i===null||i instanceof Element&&i.tagName==="DIV"););return i}function S(){var u;if(!e.disabled){if(oe.push(t),e.autoFocus){const{initialFocusTo:i}=e;i===void 0?h("first"):(u=ke(i))===null||u===void 0||u.focus({preventScroll:!0})}r=!0,document.addEventListener("focus",b,!0)}}function d(){var u;if(e.disabled||(document.removeEventListener("focus",b,!0),oe=oe.filter(y=>y!==t),l()))return;const{finalFocusTo:i}=e;i!==void 0?(u=ke(i))===null||u===void 0||u.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&c instanceof HTMLElement&&(s=!0,c.focus({preventScroll:!0}),s=!1)}function h(u){if(l()&&e.active){const i=n.value,y=o.value;if(i!==null&&y!==null){const C=w();if(C==null||C===y){s=!0,i.focus({preventScroll:!0}),s=!1;return}s=!0;const _=u==="first"?Je(C):Ge(C);s=!1,_||(s=!0,i.focus({preventScroll:!0}),s=!1)}}}function g(u){if(s)return;const i=w();i!==null&&(u.relatedTarget!==null&&i.contains(u.relatedTarget)?h("last"):h("first"))}function p(u){s||(u.relatedTarget!==null&&u.relatedTarget===n.value?h("last"):h("first"))}return{focusableStartRef:n,focusableEndRef:o,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:g,handleEndFocus:p}},render(){const{default:e}=this.$slots;if(e===void 0)return null;if(this.disabled)return e();const{active:t,focusableStyle:n}=this;return x(Ee,null,[x("div",{"aria-hidden":"true",tabindex:t?"0":"-1",ref:"focusableStartRef",style:n,onFocus:this.handleStartFocus}),e(),x("div",{"aria-hidden":"true",style:n,ref:"focusableEndRef",tabindex:t?"0":"-1",onFocus:this.handleEndFocus})])}}),{cubicBezierEaseIn:De,cubicBezierEaseOut:je}=ut;function wn({transformOrigin:e="inherit",duration:t=".2s",enterScale:n=".9",originalTransform:o="",originalTransition:r=""}={}){return[A("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${t} ${De}, transform ${t} ${De} ${r&&","+r}`}),A("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${t} ${je}, transform ${t} ${je} ${r&&","+r}`}),A("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${o} scale(${n})`}),A("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${o} scale(1)`})]}const $e={top:"bottom",bottom:"top",left:"right",right:"left"},M="var(--n-arrow-height) * 1.414",en=A([L("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[A(">",[L("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),pe("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[pe("scrollable",[pe("show-header-or-footer","padding: var(--n-padding);")])]),ve("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ve("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ce("scrollable, show-header-or-footer",[ve("content",`
 padding: var(--n-padding);
 `)])]),L("popover-shared",`
 transform-origin: inherit;
 `,[L("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[L("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${M});
 height: calc(${M});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),A("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),A("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),A("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),A("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),T("top-start",`
 top: calc(${M} / -2);
 left: calc(${j("top-start")} - var(--v-offset-left));
 `),T("top",`
 top: calc(${M} / -2);
 transform: translateX(calc(${M} / -2)) rotate(45deg);
 left: 50%;
 `),T("top-end",`
 top: calc(${M} / -2);
 right: calc(${j("top-end")} + var(--v-offset-left));
 `),T("bottom-start",`
 bottom: calc(${M} / -2);
 left: calc(${j("bottom-start")} - var(--v-offset-left));
 `),T("bottom",`
 bottom: calc(${M} / -2);
 transform: translateX(calc(${M} / -2)) rotate(45deg);
 left: 50%;
 `),T("bottom-end",`
 bottom: calc(${M} / -2);
 right: calc(${j("bottom-end")} + var(--v-offset-left));
 `),T("left-start",`
 left: calc(${M} / -2);
 top: calc(${j("left-start")} - var(--v-offset-top));
 `),T("left",`
 left: calc(${M} / -2);
 transform: translateY(calc(${M} / -2)) rotate(45deg);
 top: 50%;
 `),T("left-end",`
 left: calc(${M} / -2);
 bottom: calc(${j("left-end")} + var(--v-offset-top));
 `),T("right-start",`
 right: calc(${M} / -2);
 top: calc(${j("right-start")} - var(--v-offset-top));
 `),T("right",`
 right: calc(${M} / -2);
 transform: translateY(calc(${M} / -2)) rotate(45deg);
 top: 50%;
 `),T("right-end",`
 right: calc(${M} / -2);
 bottom: calc(${j("right-end")} + var(--v-offset-top));
 `),...yt({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),o=n?"width":"height";return e.map(r=>{const s=r.split("-")[1]==="end",l=`calc((${`var(--v-target-${o}, 0px)`} - ${M}) / 2)`,a=j(r);return A(`[v-placement="${r}"] >`,[L("popover-shared",[ce("center-arrow",[L("popover-arrow",`${t}: calc(max(${l}, ${a}) ${s?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function j(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function T(e,t){const n=e.split("-")[0],o=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return A(`[v-placement="${e}"] >`,[L("popover-shared",`
 margin-${$e[n]}: var(--n-space);
 `,[ce("show-arrow",`
 margin-${$e[n]}: var(--n-space-arrow);
 `),ce("overlap",`
 margin: 0;
 `),ct("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${$e[n]}: auto;
 ${o}
 `,[L("popover-arrow",t)])])])}const Re=Object.assign(Object.assign({},Be.props),{to:te.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),tn=({arrowStyle:e,clsPrefix:t})=>x("div",{key:"__popover-arrow__",class:`${t}-popover-arrow-wrapper`},x("div",{class:`${t}-popover-arrow`,style:e})),nn=Y({name:"PopoverBody",inheritAttrs:!1,props:Re,setup(e,{slots:t,attrs:n}){const{namespaceRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:s}=ft(e),c=Be("Popover","-popover",en,mt,e,r),l=I(null),a=H("NPopover"),b=I(null),w=I(e.show),S=I(!1);Ve(()=>{const{show:v}=e;v&&!Bt()&&!e.internalDeactivateImmediately&&(S.value=!0)});const d=R(()=>{const{trigger:v,onClickoutside:z}=e,E=[],{positionManuallyRef:{value:m}}=a;return m||(v==="click"&&!z&&E.push([Fe,_,void 0,{capture:!0}]),v==="hover"&&E.push([Dt,C])),z&&E.push([Fe,_,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&S.value)&&E.push([ht,e.show]),E}),h=R(()=>{const v=e.width==="trigger"?void 0:me(e.width),z=[];v&&z.push({width:v});const{maxWidth:E,minWidth:m}=e;return E&&z.push({maxWidth:me(E)}),m&&z.push({maxWidth:me(m)}),s||z.push(g.value),z}),g=R(()=>{const{common:{cubicBezierEaseInOut:v,cubicBezierEaseIn:z,cubicBezierEaseOut:E},self:{space:m,spaceArrow:N,padding:P,fontSize:k,textColor:f,dividerColor:$,color:B,boxShadow:K,borderRadius:U,arrowHeight:D,arrowOffset:et,arrowOffsetVertical:tt}}=c.value;return{"--n-box-shadow":K,"--n-bezier":v,"--n-bezier-ease-in":z,"--n-bezier-ease-out":E,"--n-font-size":k,"--n-text-color":f,"--n-color":B,"--n-divider-color":$,"--n-border-radius":U,"--n-arrow-height":D,"--n-arrow-offset":et,"--n-arrow-offset-vertical":tt,"--n-padding":P,"--n-space":m,"--n-space-arrow":N}}),p=s?pt("popover",void 0,g,e):void 0;a.setBodyInstance({syncPosition:u}),ne(()=>{a.setBodyInstance(null)}),Q(W(e,"show"),v=>{e.animated||(v?w.value=!0:w.value=!1)});function u(){var v;(v=l.value)===null||v===void 0||v.syncPosition()}function i(v){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&a.handleMouseEnter(v)}function y(v){e.trigger==="hover"&&e.keepAliveOnHover&&a.handleMouseLeave(v)}function C(v){e.trigger==="hover"&&!X().contains(Se(v))&&a.handleMouseMoveOutside(v)}function _(v){(e.trigger==="click"&&!X().contains(Se(v))||e.onClickoutside)&&a.handleClickOutside(v)}function X(){return a.getTriggerElement()}re(Xe,b),re(We,null),re(He,null);function Z(){if(p==null||p.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&S.value))return null;let z;const E=a.internalRenderBodyRef.value,{value:m}=r;if(E)z=E([`${m}-popover-shared`,p==null?void 0:p.themeClass.value,e.overlap&&`${m}-popover-shared--overlap`,e.showArrow&&`${m}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${m}-popover-shared--center-arrow`],b,h.value,i,y);else{const{value:N}=a.extraClassRef,{internalTrapFocus:P}=e,k=!Ce(t.header)||!Ce(t.footer),f=()=>{var $;const B=k?x(Ee,null,be(t.header,D=>D?x("div",{class:`${m}-popover__header`,style:e.headerStyle},D):null),be(t.default,D=>D?x("div",{class:`${m}-popover__content`,style:e.contentStyle},t):null),be(t.footer,D=>D?x("div",{class:`${m}-popover__footer`,style:e.footerStyle},D):null)):e.scrollable?($=t.default)===null||$===void 0?void 0:$.call(t):x("div",{class:`${m}-popover__content`,style:e.contentStyle},t),K=e.scrollable?x(xt,{contentClass:k?void 0:`${m}-popover__content`,contentStyle:k?void 0:e.contentStyle},{default:()=>B}):B,U=e.showArrow?tn({arrowStyle:e.arrowStyle,clsPrefix:m}):null;return[K,U]};z=x("div",bt({class:[`${m}-popover`,`${m}-popover-shared`,p==null?void 0:p.themeClass.value,N.map($=>`${m}-${$}`),{[`${m}-popover--scrollable`]:e.scrollable,[`${m}-popover--show-header-or-footer`]:k,[`${m}-popover--raw`]:e.raw,[`${m}-popover-shared--overlap`]:e.overlap,[`${m}-popover-shared--show-arrow`]:e.showArrow,[`${m}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:b,style:h.value,onKeydown:a.handleKeydown,onMouseenter:i,onMouseleave:y},n),P?x(Rt,{active:e.show,autoFocus:!0},{default:f}):f())}return he(z,d.value)}return{displayed:S,namespace:o,isMounted:a.isMountedRef,zIndex:a.zIndexRef,followerRef:l,adjustedTo:te(e),followerEnabled:w,renderContentNode:Z}},render(){return x(Gt,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===te.tdkey},{default:()=>this.animated?x(vt,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),on=Object.keys(Re),rn={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function an(e,t,n){rn[t].forEach(o=>{e.props?e.props=Object.assign({},e.props):e.props={};const r=e.props[o],s=n[o];r?e.props[o]=(...c)=>{r(...c),s(...c)}:e.props[o]=s})}const ln=Le("").type,sn={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:te.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},dn=Object.assign(Object.assign(Object.assign({},Be.props),sn),{internalOnAfterLeave:Function,internalRenderBody:Function}),gn=Y({name:"Popover",inheritAttrs:!1,props:dn,__popover__:!0,setup(e){const t=Ne(),n=I(null),o=R(()=>e.show),r=I(e.defaultShow),s=zt(o,r),c=ae(()=>e.disabled?!1:s.value),l=()=>{if(e.disabled)return!0;const{getDisabled:f}=e;return!!(f!=null&&f())},a=()=>l()?!1:s.value,b=wt(e,["arrow","showArrow"]),w=R(()=>e.overlap?!1:b.value);let S=null;const d=I(null),h=I(null),g=ae(()=>e.x!==void 0&&e.y!==void 0);function p(f){const{"onUpdate:show":$,onUpdateShow:B,onShow:K,onHide:U}=e;r.value=f,$&&se($,f),B&&se(B,f),f&&K&&se(K,!0),f&&U&&se(U,!1)}function u(){S&&S.syncPosition()}function i(){const{value:f}=d;f&&(window.clearTimeout(f),d.value=null)}function y(){const{value:f}=h;f&&(window.clearTimeout(f),h.value=null)}function C(){const f=l();if(e.trigger==="focus"&&!f){if(a())return;p(!0)}}function _(){const f=l();if(e.trigger==="focus"&&!f){if(!a())return;p(!1)}}function X(){const f=l();if(e.trigger==="hover"&&!f){if(y(),d.value!==null||a())return;const $=()=>{p(!0),d.value=null},{delay:B}=e;B===0?$():d.value=window.setTimeout($,B)}}function Z(){const f=l();if(e.trigger==="hover"&&!f){if(i(),h.value!==null||!a())return;const $=()=>{p(!1),h.value=null},{duration:B}=e;B===0?$():h.value=window.setTimeout($,B)}}function v(){Z()}function z(f){var $;a()&&(e.trigger==="click"&&(i(),y(),p(!1)),($=e.onClickoutside)===null||$===void 0||$.call(e,f))}function E(){if(e.trigger==="click"&&!l()){i(),y();const f=!a();p(f)}}function m(f){e.internalTrapFocus&&f.key==="Escape"&&(i(),y(),p(!1))}function N(f){r.value=f}function P(){var f;return(f=n.value)===null||f===void 0?void 0:f.targetRef}function k(f){S=f}return re("NPopover",{getTriggerElement:P,handleKeydown:m,handleMouseEnter:X,handleMouseLeave:Z,handleClickOutside:z,handleMouseMoveOutside:v,setBodyInstance:k,positionManuallyRef:g,isMountedRef:t,zIndexRef:W(e,"zIndex"),extraClassRef:W(e,"internalExtraClass"),internalRenderBodyRef:W(e,"internalRenderBody")}),Ve(()=>{s.value&&l()&&p(!1)}),{binderInstRef:n,positionManually:g,mergedShowConsideringDisabledProp:c,uncontrolledShow:r,mergedShowArrow:w,getMergedShow:a,setShow:N,handleClick:E,handleMouseEnter:X,handleMouseLeave:Z,handleFocus:C,handleBlur:_,syncPosition:u}},render(){var e;const{positionManually:t,$slots:n}=this;let o,r=!1;if(!t&&(n.activator?o=Te(n,"activator"):o=Te(n,"trigger"),o)){o=gt(o),o=o.type===ln?x("span",[o]):o;const s={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=o.type)===null||e===void 0)&&e.__popover__)r=!0,o.props||(o.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),o.props.internalSyncTargetWithParent=!0,o.props.internalInheritedEventHandlers?o.props.internalInheritedEventHandlers=[s,...o.props.internalInheritedEventHandlers]:o.props.internalInheritedEventHandlers=[s];else{const{internalInheritedEventHandlers:c}=this,l=[s,...c],a={onBlur:b=>{l.forEach(w=>{w.onBlur(b)})},onFocus:b=>{l.forEach(w=>{w.onFocus(b)})},onClick:b=>{l.forEach(w=>{w.onClick(b)})},onMouseenter:b=>{l.forEach(w=>{w.onMouseenter(b)})},onMouseleave:b=>{l.forEach(w=>{w.onMouseleave(b)})}};an(o,c?"nested":t?"manual":this.trigger,a)}}return x(Ot,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const s=this.getMergedShow();return[this.internalTrapFocus&&s?he(x("div",{style:{position:"fixed",inset:0}}),[[Ue,{enabled:s,zIndex:this.zIndex}]]):null,t?null:x(_t,null,{default:()=>o}),x(nn,Et(this.$props,on,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:s})),{default:()=>{var c,l;return(l=(c=this.$slots).default)===null||l===void 0?void 0:l.call(c)},header:()=>{var c,l;return(l=(c=this.$slots).header)===null||l===void 0?void 0:l.call(c)},footer:()=>{var c,l;return(l=(c=this.$slots).footer)===null||l===void 0?void 0:l.call(c)}})]}})}});export{Wt as L,gn as N,Ot as V,_t as a,Gt as b,sn as c,We as d,Ht as e,wn as f,de as g,Tt as h,bn as i,Fe as j,Et as k,He as m,Xe as p,tn as r,te as u,Ue as z};
