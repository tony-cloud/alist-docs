import{at as pe,au as D,l as r,d as $,y as qe,P as Z,av as Je,h as M,g as me,j as we,H as V,I as y,aw as se,$ as Qe,x as xe,ax as et,am as tt,i as be,k as Ce,n as Oe,T as ot,ay as rt,af as le,aq as Y,F as ue,ai as I,v as it,az as nt,s as ce,aA as de,t as at}from"./app-157886d0.js";import{N as st,c as lt,f as ut,L as ct,z as dt}from"./Popover-37ff0082.js";import{u as ft,a as X,o as H}from"./Scrollbar-c5491e1b.js";import{a as ht}from"./arrayReduce-865b0d3f.js";import{b as vt}from"./utils-05640b2a.js";function gt(e){return function(a){return e==null?void 0:e[a]}}var pt={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},mt=gt(pt);const wt=mt;var xt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,bt="\\u0300-\\u036f",Ct="\\ufe20-\\ufe2f",Ot="\\u20d0-\\u20ff",St=bt+Ct+Ot,Mt="["+St+"]",Rt=RegExp(Mt,"g");function Lt(e){return e=pe(e),e&&e.replace(xt,wt).replace(Rt,"")}var Pt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function yt(e){return e.match(Pt)||[]}var It=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function kt(e){return It.test(e)}var Se="\\ud800-\\udfff",zt="\\u0300-\\u036f",Tt="\\ufe20-\\ufe2f",At="\\u20d0-\\u20ff",Et=zt+Tt+At,Me="\\u2700-\\u27bf",Re="a-z\\xdf-\\xf6\\xf8-\\xff",Ht="\\xac\\xb1\\xd7\\xf7",jt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Dt="\\u2000-\\u206f",$t=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Le="A-Z\\xc0-\\xd6\\xd8-\\xde",Zt="\\ufe0e\\ufe0f",Pe=Ht+jt+Dt+$t,ye="['’]",fe="["+Pe+"]",_t="["+Et+"]",Ie="\\d+",Nt="["+Me+"]",ke="["+Re+"]",ze="[^"+Se+Pe+Ie+Me+Re+Le+"]",Bt="\\ud83c[\\udffb-\\udfff]",Wt="(?:"+_t+"|"+Bt+")",Ut="[^"+Se+"]",Te="(?:\\ud83c[\\udde6-\\uddff]){2}",Ae="[\\ud800-\\udbff][\\udc00-\\udfff]",E="["+Le+"]",Vt="\\u200d",he="(?:"+ke+"|"+ze+")",Yt="(?:"+E+"|"+ze+")",ve="(?:"+ye+"(?:d|ll|m|re|s|t|ve))?",ge="(?:"+ye+"(?:D|LL|M|RE|S|T|VE))?",Ee=Wt+"?",He="["+Zt+"]?",Xt="(?:"+Vt+"(?:"+[Ut,Te,Ae].join("|")+")"+He+Ee+")*",Ft="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Gt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Kt=He+Ee+Xt,qt="(?:"+[Nt,Te,Ae].join("|")+")"+Kt,Jt=RegExp([E+"?"+ke+"+"+ve+"(?="+[fe,E,"$"].join("|")+")",Yt+"+"+ge+"(?="+[fe,E+he,"$"].join("|")+")",E+"?"+he+"+"+ve,E+"+"+ge,Gt,Ft,Ie,qt].join("|"),"g");function Qt(e){return e.match(Jt)||[]}function eo(e,a,n){return e=pe(e),a=n?void 0:a,a===void 0?kt(e)?Qt(e):yt(e):e.match(a)||[]}var to="['’]",oo=RegExp(to,"g");function ro(e){return function(a){return ht(eo(Lt(a).replace(oo,"")),e,"")}}var io=ro(function(e,a,n){return e+(n?"-":"")+a.toLowerCase()});const no=io,ao=D("rotateClockwise",r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),r("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),so=D("rotateClockwise",r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),r("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),lo=D("zoomIn",r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),r("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),uo=D("zoomOut",r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),r("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),co=$({name:"ResizeSmall",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r("g",{fill:"none"},r("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}}),F=qe&&"loading"in document.createElement("img"),fo=(e={})=>{var a;const{root:n=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(a=e.threshold)!==null&&a!==void 0?a:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof n=="string"?document.querySelector(n):n)||document.documentElement})}},G=new WeakMap,K=new WeakMap,q=new WeakMap,ho=(e,a,n)=>{if(!e)return()=>{};const u=fo(a),{root:s}=u.options;let v;const b=G.get(s);b?v=b:(v=new Map,G.set(s,v));let g,h;v.has(u.hash)?(h=v.get(u.hash),h[1].has(e)||(g=h[0],h[1].add(e),g.observe(e))):(g=new IntersectionObserver(p=>{p.forEach(k=>{if(k.isIntersecting){const R=K.get(k.target),L=q.get(k.target);R&&R(),L&&(L.value=!0)}})},u.options),g.observe(e),h=[g,new Set([e])],v.set(u.hash,h));let l=!1;const c=()=>{l||(K.delete(e),q.delete(e),l=!0,h[1].has(e)&&(h[0].unobserve(e),h[1].delete(e)),h[1].size<=0&&v.delete(u.hash),v.size||G.delete(s))};return K.set(e,c),q.set(e,n),c},vo=Object.assign(Object.assign({},lt),Z.props),go=$({name:"Tooltip",props:vo,__popover__:!0,setup(e){const a=Z("Tooltip","-tooltip",void 0,Je,e),n=M(null);return Object.assign(Object.assign({},{syncPosition(){n.value.syncPosition()},setShow(s){n.value.setShow(s)}}),{popoverRef:n,mergedTheme:a,popoverThemeOverrides:me(()=>a.value.self)})},render(){const{mergedTheme:e,internalExtraClass:a}=this;return r(st,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:a.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),je=Object.assign(Object.assign({},Z.props),{showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean}),De=we("n-image"),po=r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"})),mo=r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"})),wo=r("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"})),xo=V([V("body >",[y("image-container","position: fixed;")]),y("image-preview-container",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `),y("image-preview-overlay",`
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `,[se()]),y("image-preview-toolbar",`
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[y("base-icon",`
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `),se()]),y("image-preview-wrapper",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `,[ut()]),y("image-preview",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `),y("image",`
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `,[Qe("preview-disabled",`
 cursor: pointer;
 `),V("img",`
 border-radius: inherit;
 `)])]),j=32,bo=$({name:"ImagePreview",props:Object.assign(Object.assign({},je),{onNext:Function,onPrev:Function,clsPrefix:{type:String,required:!0}}),setup(e){const a=Z("Image","-image",xo,et,e,xe(e,"clsPrefix"));let n=null;const u=M(null),s=M(null),v=M(void 0),b=M(!1),g=M(!1),{localeRef:h}=ft("Image");function l(){const{value:t}=s;if(!n||!t)return;const{style:i}=t,o=n.getBoundingClientRect(),d=o.left+o.width/2,f=o.top+o.height/2;i.transformOrigin=`${d}px ${f}px`}function c(t){var i,o;switch(t.key){case" ":t.preventDefault();break;case"ArrowLeft":(i=e.onPrev)===null||i===void 0||i.call(e);break;case"ArrowRight":(o=e.onNext)===null||o===void 0||o.call(e);break;case"Escape":ie();break}}tt(b,t=>{t?X("keydown",document,c):H("keydown",document,c)}),be(()=>{H("keydown",document,c)});let p=0,k=0,R=0,L=0,_=0,N=0,J=0,Q=0,B=!1;function ee(t){const{clientX:i,clientY:o}=t;R=i-p,L=o-k,vt(O)}function $e(t){const{mouseUpClientX:i,mouseUpClientY:o,mouseDownClientX:d,mouseDownClientY:f}=t,x=d-i,C=f-o,S=`vertical${C>0?"Top":"Bottom"}`,P=`horizontal${x>0?"Left":"Right"}`;return{moveVerticalDirection:S,moveHorizontalDirection:P,deltaHorizontal:x,deltaVertical:C}}function te(t){const{value:i}=u;if(!i)return{offsetX:0,offsetY:0};const o=i.getBoundingClientRect(),{moveVerticalDirection:d,moveHorizontalDirection:f,deltaHorizontal:x,deltaVertical:C}=t||{};let S=0,P=0;return o.width<=window.innerWidth?S=0:o.left>0?S=(o.width-window.innerWidth)/2:o.right<window.innerWidth?S=-(o.width-window.innerWidth)/2:f==="horizontalRight"?S=Math.min((o.width-window.innerWidth)/2,_-(x??0)):S=Math.max(-((o.width-window.innerWidth)/2),_-(x??0)),o.height<=window.innerHeight?P=0:o.top>0?P=(o.height-window.innerHeight)/2:o.bottom<window.innerHeight?P=-(o.height-window.innerHeight)/2:d==="verticalBottom"?P=Math.min((o.height-window.innerHeight)/2,N-(C??0)):P=Math.max(-((o.height-window.innerHeight)/2),N-(C??0)),{offsetX:S,offsetY:P}}function oe(t){H("mousemove",document,ee),H("mouseup",document,oe);const{clientX:i,clientY:o}=t;B=!1;const d=$e({mouseUpClientX:i,mouseUpClientY:o,mouseDownClientX:J,mouseDownClientY:Q}),f=te(d);R=f.offsetX,L=f.offsetY,O()}const m=Ce(De,null);function Ze(t){var i,o;if((o=(i=m==null?void 0:m.previewedImgPropsRef.value)===null||i===void 0?void 0:i.onMousedown)===null||o===void 0||o.call(i,t),t.button!==0)return;const{clientX:d,clientY:f}=t;B=!0,p=d-R,k=f-L,_=R,N=L,J=d,Q=f,O(),X("mousemove",document,ee),X("mouseup",document,oe)}function _e(t){var i,o;(o=(i=m==null?void 0:m.previewedImgPropsRef.value)===null||i===void 0?void 0:i.onDblclick)===null||o===void 0||o.call(i,t);const d=re();w=w===d?1:d,O()}const W=1.5;let z=0,w=1,T=0;function U(){w=1,z=0}function Ne(){var t;U(),T=0,(t=e.onPrev)===null||t===void 0||t.call(e)}function Be(){var t;U(),T=0,(t=e.onNext)===null||t===void 0||t.call(e)}function We(){T-=90,O()}function Ue(){T+=90,O()}function Ve(){const{value:t}=u;if(!t)return 1;const{innerWidth:i,innerHeight:o}=window,d=Math.max(1,t.naturalHeight/(o-j)),f=Math.max(1,t.naturalWidth/(i-j));return Math.max(3,d*2,f*2)}function re(){const{value:t}=u;if(!t)return 1;const{innerWidth:i,innerHeight:o}=window,d=t.naturalHeight/(o-j),f=t.naturalWidth/(i-j);return d<1&&f<1?1:Math.max(d,f)}function Ye(){const t=Ve();w<t&&(z+=1,w=Math.min(t,Math.pow(W,z)),O())}function Xe(){if(w>.5){const t=w;z-=1,w=Math.max(.5,Math.pow(W,z));const i=t-w;O(!1);const o=te();w+=i,O(!1),w-=i,R=o.offsetX,L=o.offsetY,O()}}function O(t=!0){var i;const{value:o}=u;if(!o)return;const{style:d}=o,f=nt((i=m==null?void 0:m.previewedImgPropsRef.value)===null||i===void 0?void 0:i.style);let x="";if(typeof f=="string")x=f+";";else for(const S in f)x+=`${no(S)}: ${f[S]};`;const C=`transform-origin: center; transform: translateX(${R}px) translateY(${L}px) rotate(${T}deg) scale(${w});`;B?d.cssText=x+"cursor: grabbing; transition: none;"+C:d.cssText=x+"cursor: grab;"+C+(t?"":"transition: none;"),t||o.offsetHeight}function ie(){b.value=!b.value,g.value=!0}function Fe(){w=re(),z=Math.ceil(Math.log(w)/Math.log(W)),R=0,L=0,O()}const Ge={setPreviewSrc:t=>{v.value=t},setThumbnailEl:t=>{n=t},toggleShow:ie};function Ke(t,i){if(e.showToolbarTooltip){const{value:o}=a;return r(go,{to:!1,theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>h.value[i],trigger:()=>t})}else return t}const ne=me(()=>{const{common:{cubicBezierEaseInOut:t},self:{toolbarIconColor:i,toolbarBorderRadius:o,toolbarBoxShadow:d,toolbarColor:f}}=a.value;return{"--n-bezier":t,"--n-toolbar-icon-color":i,"--n-toolbar-color":f,"--n-toolbar-border-radius":o,"--n-toolbar-box-shadow":d}}),{inlineThemeDisabled:ae}=Oe(),A=ae?ot("image-preview",void 0,ne,e):void 0;return Object.assign({previewRef:u,previewWrapperRef:s,previewSrc:v,show:b,appear:rt(),displayed:g,previewedImgProps:m==null?void 0:m.previewedImgPropsRef,handleWheel(t){t.preventDefault()},handlePreviewMousedown:Ze,handlePreviewDblclick:_e,syncTransformOrigin:l,handleAfterLeave:()=>{U(),T=0,g.value=!1},handleDragStart:t=>{var i,o;(o=(i=m==null?void 0:m.previewedImgPropsRef.value)===null||i===void 0?void 0:i.onDragstart)===null||o===void 0||o.call(i,t),t.preventDefault()},zoomIn:Ye,zoomOut:Xe,rotateCounterclockwise:We,rotateClockwise:Ue,handleSwitchPrev:Ne,handleSwitchNext:Be,withTooltip:Ke,resizeToOrignalImageSize:Fe,cssVars:ae?void 0:ne,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender},Ge)},render(){var e,a;const{clsPrefix:n}=this;return r(ue,null,(a=(e=this.$slots).default)===null||a===void 0?void 0:a.call(e),r(ct,{show:this.show},{default:()=>{var u;return this.show||this.displayed?((u=this.onRender)===null||u===void 0||u.call(this),le(r("div",{class:[`${n}-image-preview-container`,this.themeClass],style:this.cssVars,onWheel:this.handleWheel},r(Y,{name:"fade-in-transition",appear:this.appear},{default:()=>this.show?r("div",{class:`${n}-image-preview-overlay`,onClick:this.toggleShow}):null}),this.showToolbar?r(Y,{name:"fade-in-transition",appear:this.appear},{default:()=>{if(!this.show)return null;const{withTooltip:s}=this;return r("div",{class:`${n}-image-preview-toolbar`},this.onPrev?r(ue,null,s(r(I,{clsPrefix:n,onClick:this.handleSwitchPrev},{default:()=>po}),"tipPrevious"),s(r(I,{clsPrefix:n,onClick:this.handleSwitchNext},{default:()=>mo}),"tipNext")):null,s(r(I,{clsPrefix:n,onClick:this.rotateCounterclockwise},{default:()=>r(so,null)}),"tipCounterclockwise"),s(r(I,{clsPrefix:n,onClick:this.rotateClockwise},{default:()=>r(ao,null)}),"tipClockwise"),s(r(I,{clsPrefix:n,onClick:this.resizeToOrignalImageSize},{default:()=>r(co,null)}),"tipOriginalSize"),s(r(I,{clsPrefix:n,onClick:this.zoomOut},{default:()=>r(uo,null)}),"tipZoomOut"),s(r(I,{clsPrefix:n,onClick:this.zoomIn},{default:()=>r(lo,null)}),"tipZoomIn"),s(r(I,{clsPrefix:n,onClick:this.toggleShow},{default:()=>wo}),"tipClose"))}}):null,r(Y,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:s={}}=this;return le(r("div",{class:`${n}-image-preview-wrapper`,ref:"previewWrapperRef"},r("img",Object.assign({},s,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:[`${n}-image-preview`,s.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[it,this.show]])}})),[[dt,{enabled:this.show}]])):null}}))}}),Co=we("n-image-group"),Oo=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},je),yo=$({name:"Image",props:Oo,inheritAttrs:!1,setup(e){const a=M(null),n=M(!1),u=M(null),s=Ce(Co,null),{mergedClsPrefixRef:v}=s||Oe(e),b={click:()=>{if(e.previewDisabled||n.value)return;const l=e.previewSrc||e.src;if(s){s.setPreviewSrc(l),s.setThumbnailEl(a.value),s.toggleShow();return}const{value:c}=u;c&&(c.setPreviewSrc(l),c.setThumbnailEl(a.value),c.toggleShow())}},g=M(!e.lazy);ce(()=>{var l;(l=a.value)===null||l===void 0||l.setAttribute("data-group-id",(s==null?void 0:s.groupId)||"")}),ce(()=>{if(F)return;let l;const c=de(()=>{l==null||l(),l=void 0,e.lazy&&(l=ho(a.value,e.intersectionObserverOptions,g))});be(()=>{c(),l==null||l()})}),de(()=>{var l;e.src,(l=e.imgProps)===null||l===void 0||l.src,n.value=!1});const h=M(!1);return at(De,{previewedImgPropsRef:xe(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:v,groupId:s==null?void 0:s.groupId,previewInstRef:u,imageRef:a,showError:n,shouldStartLoading:g,loaded:h,mergedOnClick:l=>{var c,p;b.click(),(p=(c=e.imgProps)===null||c===void 0?void 0:c.onClick)===null||p===void 0||p.call(c,l)},mergedOnError:l=>{if(!g.value)return;n.value=!0;const{onError:c,imgProps:{onError:p}={}}=e;c==null||c(l),p==null||p(l)},mergedOnLoad:l=>{const{onLoad:c,imgProps:{onLoad:p}={}}=e;c==null||c(l),p==null||p(l),h.value=!0}},b)},render(){var e,a;const{mergedClsPrefix:n,imgProps:u={},loaded:s,$attrs:v,lazy:b}=this,g=(a=(e=this.$slots).placeholder)===null||a===void 0?void 0:a.call(e),h=this.src||u.src||"",l=r("img",Object.assign(Object.assign({},u),{ref:"imageRef",width:this.width||u.width,height:this.height||u.height,src:F?h:this.showError?this.fallbackSrc:this.shouldStartLoading?h:void 0,alt:this.alt||u.alt,"aria-label":this.alt||u.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:F&&b&&!this.intersectionObserverOptions?"lazy":"eager",style:[u.style||"",g&&!s?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return r("div",Object.assign({},v,{role:"none",class:[v.class,`${n}-image`,(this.previewDisabled||this.showError)&&`${n}-image--preview-disabled`]}),this.groupId?l:r(bo,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:n,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},{default:()=>l}),!s&&g)}});export{yo as N};
