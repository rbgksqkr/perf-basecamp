(self.webpackChunkfrontend_performance_basecamp=self.webpackChunkfrontend_performance_basecamp||[]).push([[526],{908:(e,t,s)=>{var n=s(972).k5;e.exports.z=function(e){return n({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}},850:(e,t,s)=>{var n=s(972).k5;e.exports.R=function(e){return n({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M448 224a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96 168h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V400c0-4.4-3.6-8-8-8z"}}]})(e)}},742:(e,t,s)=>{var n=s(972).k5;e.exports.f=function(e){return n({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]})(e)}},972:(e,t,s)=>{"use strict";s.d(t,{k5:()=>l});var n=s(540),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(r),a=function(){return a=Object.assign||function(e){for(var t,s=1,n=arguments.length;s<n;s++)for(var r in t=arguments[s])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a.apply(this,arguments)},c=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]])}return s};function o(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),o(e.child))}))}function l(e){return function(t){return n.createElement(h,a({attr:a({},e.attr)},t),o(e.child))}}function h(e){var t=function(t){var s,r=e.attr,i=e.size,o=e.title,l=c(e,["attr","size","title"]),h=i||t.size||"1em";return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:s,style:a(a({color:e.color||t.color},t.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(r)}},526:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>W});var n=s(848),r=s(540);class i extends Error{constructor(e,t){super(t),this.status=e,this.name="ApiError"}}const a=e=>{return t=void 0,s=void 0,r=function*(){const t=yield fetch(e.toString());if(!t.ok)throw new i(t.status,`HTTP error! status: ${t.status}`);return t.json()},new((n=void 0)||(n=Promise))((function(e,i){function a(e){try{o(r.next(e))}catch(e){i(e)}}function c(e){try{o(r.throw(e))}catch(e){i(e)}}function o(t){var s;t.done?e(t.value):(s=t.value,s instanceof n?s:new n((function(e){e(s)}))).then(a,c)}o((r=r.apply(t,s||[])).next())}));var t,s,n,r},c=(e,t)=>{const s=new URL(e.toString());return Object.entries(t).forEach((([e,t])=>{s.searchParams.append(e,t)})),s};var o=function(e,t,s,n){return new(s||(s=Promise))((function(r,i){function a(e){try{o(n.next(e))}catch(e){i(e)}}function c(e){try{o(n.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,c)}o((n=n.apply(e,t||[])).next())}))};const l="DfuvBpsBPHZea61if0FF47zhrBMtHc6O",h="https://api.giphy.com/v1/gifs",u=e=>o(void 0,void 0,void 0,(function*(){try{return(yield a(e)).data.map((({id:e,title:t,images:s})=>({id:e,title:null!=t?t:"",imageUrl:s.original.url})))}catch(e){throw e instanceof i?console.error(`API Error: ${e.status} - ${e.message}`):console.error("Unexpected error:",e),e}})),d=(e,t)=>o(void 0,void 0,void 0,(function*(){const s=c(new URL(`${h}/search`),{api_key:l,q:e,limit:"16",offset:""+16*t,rating:"g",lang:"en"});return u(s)}));var m=function(e,t,s,n){return new(s||(s=Promise))((function(r,i){function a(e){try{o(n.next(e))}catch(e){i(e)}}function c(e){try{o(n.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,c)}o((n=n.apply(e,t||[])).next())}))};const g="BEFORE_SEARCH",p="FOUND",f="NO_RESULT",y="ERROR",j=()=>{const[e,t]=(0,r.useState)(g),[s,n]=(0,r.useState)(0),[i,a]=(0,r.useState)([]),[j,x]=(0,r.useState)(""),[v,b]=(0,r.useState)(null),w=e=>{t(y),b(e instanceof Error?e.message:"An unknown error occurred")};return(0,r.useEffect)((()=>{m(void 0,void 0,void 0,(function*(){if(e===g)try{const e=yield o(void 0,void 0,void 0,(function*(){const e=c(new URL(`${h}/trending`),{api_key:l,limit:"16",rating:"g"});return u(e)}));a(e)}catch(e){w(e)}}))}),[]),{status:e,searchKeyword:j,gifList:i,errorMessage:v,searchByKeyword:()=>m(void 0,void 0,void 0,(function*(){t("LOADING"),n(0),a([]),b(null);try{const e=yield d(j,0);if(0===e.length)return void t(f);a(e),t(p)}catch(e){w(e)}})),updateSearchKeyword:e=>{x(e.target.value)},loadMore:()=>m(void 0,void 0,void 0,(function*(){const e=s+1;try{const t=yield d(j,e);a((e=>[...e,...t])),n(e)}catch(e){w(e)}}))}};var x=s(742);const v=({searchKeyword:e,onEnter:t,onChange:s,onSearch:r})=>(0,n.jsxs)("section",Object.assign({className:"_yRyLCVW_8BrXNu2Ae1I"},{children:[(0,n.jsx)("h3",Object.assign({className:"tmllUNaCFiCyJ_2LTNUL"},{children:"- find the best gif now -"})),(0,n.jsxs)("div",Object.assign({className:"p1yl5o1LGzbcgKpLvnzP"},{children:[(0,n.jsx)("input",{className:"XZuzNzJP7hkmuiygaxt6",type:"text",value:e,onKeyUp:t,onChange:s}),(0,n.jsx)("button",Object.assign({className:"_HPJ5AEs_c3uawxix3Uk",type:"button",onClick:r},{children:(0,n.jsx)(x.f,{color:"white",size:"2rem"})}))]}))]})),b="bMX5kwo8awW0wG6uP_MM",w=({status:e})=>{switch(e){case f:return(0,n.jsxs)("h3",Object.assign({className:b},{children:[(0,n.jsx)("span",{children:"Nothing"}),"🥲"]}));case g:return(0,n.jsxs)("h3",Object.assign({className:b},{children:["🔥 ",(0,n.jsx)("span",{children:"Trending Now"})," 🔥"]}));case y:return(0,n.jsxs)("h3",Object.assign({className:b},{children:[(0,n.jsx)("span",{children:"Something Went Wrong"}),"🥲"]}));default:return(0,n.jsx)("h3",Object.assign({className:b},{children:(0,n.jsx)("span",{children:"We Found..."})}))}},N=({imageUrl:e="",title:t=""})=>(0,n.jsxs)("div",Object.assign({className:"d9Kx4D_C6coYB4Bq3Y_D"},{children:[(0,n.jsx)("img",{className:"_qDfMSZFh0Sj5QB2_372",src:e}),(0,n.jsxs)("div",Object.assign({className:"jmVam4uDiwDe9X0kov9s"},{children:[(0,n.jsx)("div",{className:"bESWa5xgNgk178EbWGcc"}),(0,n.jsx)("h4",Object.assign({className:"x8ChTAzHTz86NM8umGRm"},{children:t}))]}))]})),O=({status:e,gifList:t,loadMore:s})=>{const r=()=>(0,n.jsx)("div",Object.assign({className:"Sk1D0Qs59YRDsSi_PLe_"},{children:t.map((e=>(0,n.jsx)(N,{imageUrl:e.imageUrl,title:e.title},e.id)))}));return(0,n.jsxs)("section",Object.assign({className:"de2qwsei5MNiz7eV4rNm"},{children:[(0,n.jsx)(w,{status:e}),(()=>{switch(e){case p:return(0,n.jsxs)(n.Fragment,{children:[r(),(0,n.jsx)("button",Object.assign({className:"qrKiKyOk1oFYBTmViAam",onClick:s},{children:"load more"}))]});case g:return r();default:return(0,n.jsx)(n.Fragment,{})}})()]}))};var U=s(850),k=s(908),C=s(726),S=s.n(C);const P=({artist:e})=>{const{name:t,profileUrl:s,profileImageUrl:r}=e;return(0,n.jsxs)("li",Object.assign({className:"WS5RuQ_x18SikZHTRyke"},{children:[(0,n.jsx)("img",{className:"XNLKxvyVOVu8lOJJSdAt",src:r}),(0,n.jsx)("p",{children:(0,n.jsx)("a",Object.assign({className:"mdtZcvbaOpN76XOUKbzG",href:s},{children:t}))})]}))},z=({artists:e})=>(0,n.jsx)("ul",{children:e.map(((e,t)=>(0,n.jsx)(P,{artist:e},t)))}),L=[{name:"Pola Lucas",profileUrl:"https://giphy.com/polalucas",profileImageUrl:"https://media4.giphy.com/media/gwWAA4PYJLTtyOHkUD/giphy.gif"},{name:"Yizr",profileUrl:"https://giphy.com/yizr",profileImageUrl:"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjE3YWc2Ym02aWxrMDVweDRkNHRiZjdtejhxZTNuNGxlYWZqOWx4YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UJnRqJWD0KrbW/giphy.webp"},{name:"YUNGSUNG",profileUrl:"https://giphy.com/yungsung",profileImageUrl:"https://media0.giphy.com/media/lgnOH6bhb1QpUm2k6w/giphy.gif"},{name:"Kev Lavery",profileUrl:"https://giphy.com/kevlavery",profileImageUrl:"https://media1.giphy.com/media/ZPLluhRJiGwSttn7i2/giphy.gif"},{name:"Lorna Mills",profileUrl:"https://giphy.com/lornamills",profileImageUrl:"https://media1.giphy.com/media/l0Iyn1gGtCPa3x41a/200.gif"}],E=Array.from({length:100},((e,t)=>L[t%L.length])),_=()=>E,M={floatingButton:"jQBPp9XzUlR0s47cyMvy",selectedItemContainer:"bI_mJt1zrVbU9rgQ8O9a",showSheet:"_xMBJVElyMLYg2be4I3S",sheetTitleContainer:"p259JqbBpFGYE_NkFPXj",sheetContentsContainer:"_4uL_W0scH3KiWMUSa8z"},I=S().bind(M),R=()=>{const e=_(),[t,s]=(0,r.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",Object.assign({type:"button",className:M.floatingButton,onClick:()=>s(!0)},{children:(0,n.jsx)(U.R,{color:"white",size:"24px"})})),(0,n.jsxs)("section",Object.assign({className:I("selectedItemContainer",{showSheet:t})},{children:[(0,n.jsxs)("div",Object.assign({className:M.sheetTitleContainer},{children:[(0,n.jsx)("h4",{children:"What's all this? "}),(0,n.jsx)("button",Object.assign({type:"button",onClick:()=>s(!1)},{children:(0,n.jsx)(k.z,{size:"24px"})}))]})),(0,n.jsxs)("div",Object.assign({className:M.sheetContentsContainer},{children:[(0,n.jsx)("img",{src:"https://media0.giphy.com/media/3oKIPdiPGxPI7Dze7u/giphy.gif?cid=ecf05e475f5bct6ci09g3pgn43nf6bausx33fj7f96f6ig92&rid=giphy.gif&ct=g"}),(0,n.jsx)("p",{children:"'memegle' is powered by GIPHY, the top source for the best & newest GIFs & Animated Stickers online. You can find any gif uploaded on GIPHY here."}),(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:"https://giphy.com/static/img/artistdirectory_1040.gif"}),(0,n.jsxs)("p",{children:["If you want more, you are always welcome to contribute as an artist. Please refer to the guideline ",(0,n.jsx)("a",Object.assign({href:"https://support.giphy.com/hc/en-us/articles/360019977552-How-to-Upload"},{children:"here"}))," and upload your work!"]}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:"Here are some artists you can refer to."}),(0,n.jsx)("br",{}),(0,n.jsx)("section",{children:(0,n.jsx)(z,{artists:e})})]}))]}))]})},W=()=>{const{status:e,searchKeyword:t,gifList:s,searchByKeyword:r,updateSearchKeyword:i,loadMore:a}=j();return(0,n.jsxs)("div",Object.assign({className:"OXPtcxG6dhJUUZLVn9IN"},{children:[(0,n.jsx)(v,{searchKeyword:t,onEnter:e=>{"Enter"===e.key&&r()},onChange:i,onSearch:r}),(0,n.jsx)(O,{status:e,gifList:s,loadMore:a}),(0,n.jsx)(R,{})]}))}}}]);