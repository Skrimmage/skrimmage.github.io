import{S as me,i as le,s as ue,a as k,e as E,b as B,t as se,G as A,c as w,h as ae,d as q,f as a,g as ne,j as fe,H as F,k as y,m as c,n as G,I as N,z as h,B as C,C as pe,J as I,p as W,q as _e,r as Z,u as ce,U as de,o as S,A as $e,V as ye}from"./index.fa6138d3.js";import{p as be}from"./stores.39965980.js";import{s as ve,Q as ee,p as ke,r as te,d as we}from"./index.73c40649.js";import{w as Te}from"./paths.30008be9.js";import{I as he,C as Ee}from"./globalContexts.8bcf5d41.js";import{p as re}from"./profile.e7706513.js";import{L as qe,a as X}from"./Links.7a0e4412.js";import"./VennDiagram.svelte_svelte_type_style_lang.5dab9295.js";import{D as Ce}from"./DataTable.7c16b523.js";import{Q as Me}from"./QueryViewer.03eeda19.js";import{C as z}from"./Column.0c5bf2da.js";function ge(u){let r,i=p.title+"",t;return{c(){r=E("h1"),t=se(i),this.h()},l(n){r=q(n,"H1",{class:!0});var o=ne(r);t=fe(o,i),o.forEach(a),this.h()},h(){y(r,"class","title")},m(n,o){c(n,r,o),G(r,t)},p:S,d(n){n&&a(r)}}}function Ae(u){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:S,p:S,d:S}}function Fe(u){let r,i,t,n,o;return document.title=r=p.title,{c(){i=k(),t=E("meta"),n=k(),o=E("meta"),this.h()},l(f){i=w(f),t=q(f,"META",{property:!0,content:!0}),n=w(f),o=q(f,"META",{name:!0,content:!0}),this.h()},h(){var f,e;y(t,"property","og:title"),y(t,"content",((f=p.og)==null?void 0:f.title)??p.title),y(o,"name","twitter:title"),y(o,"content",((e=p.og)==null?void 0:e.title)??p.title)},m(f,e){c(f,i,e),c(f,t,e),c(f,n,e),c(f,o,e)},p(f,e){e&0&&r!==(r=p.title)&&(document.title=r)},d(f){f&&a(i),f&&a(t),f&&a(n),f&&a(o)}}}function Ne(u){var o,f;let r,i,t=(p.description||((o=p.og)==null?void 0:o.description))&&Ie(),n=((f=p.og)==null?void 0:f.image)&&Re();return{c(){t&&t.c(),r=k(),n&&n.c(),i=B()},l(e){t&&t.l(e),r=w(e),n&&n.l(e),i=B()},m(e,_){t&&t.m(e,_),c(e,r,_),n&&n.m(e,_),c(e,i,_)},p(e,_){var m,d;(p.description||(m=p.og)!=null&&m.description)&&t.p(e,_),(d=p.og)!=null&&d.image&&n.p(e,_)},d(e){t&&t.d(e),e&&a(r),n&&n.d(e),e&&a(i)}}}function Ie(u){let r,i,t,n,o;return{c(){r=E("meta"),i=k(),t=E("meta"),n=k(),o=E("meta"),this.h()},l(f){r=q(f,"META",{name:!0,content:!0}),i=w(f),t=q(f,"META",{property:!0,content:!0}),n=w(f),o=q(f,"META",{name:!0,content:!0}),this.h()},h(){var f,e,_;y(r,"name","description"),y(r,"content",p.description??((f=p.og)==null?void 0:f.description)),y(t,"property","og:description"),y(t,"content",((e=p.og)==null?void 0:e.description)??p.description),y(o,"name","twitter:description"),y(o,"content",((_=p.og)==null?void 0:_.description)??p.description)},m(f,e){c(f,r,e),c(f,i,e),c(f,t,e),c(f,n,e),c(f,o,e)},p:S,d(f){f&&a(r),f&&a(i),f&&a(t),f&&a(n),f&&a(o)}}}function Re(u){let r,i,t;return{c(){r=E("meta"),i=k(),t=E("meta"),this.h()},l(n){r=q(n,"META",{property:!0,content:!0}),i=w(n),t=q(n,"META",{name:!0,content:!0}),this.h()},h(){var n,o;y(r,"property","og:image"),y(r,"content",(n=p.og)==null?void 0:n.image),y(t,"name","twitter:image"),y(t,"content",(o=p.og)==null?void 0:o.image)},m(n,o){c(n,r,o),c(n,i,o),c(n,t,o)},p:S,d(n){n&&a(r),n&&a(i),n&&a(t)}}}function ie(u){let r,i;return r=new Me({props:{queryID:"drivers",queryResult:u[1]}}),{c(){A(r.$$.fragment)},l(t){F(r.$$.fragment,t)},m(t,n){N(r,t,n),i=!0},p(t,n){const o={};n&2&&(o.queryResult=t[1]),r.$set(o)},i(t){i||(h(r.$$.fragment,t),i=!0)},o(t){C(r.$$.fragment,t),i=!1},d(t){I(r,t)}}}function De(u){let r,i,t,n,o,f,e,_;return r=new z({props:{id:"name",title:"Name"}}),t=new z({props:{id:"dob",title:"Date Of Birth"}}),o=new z({props:{id:"nationality",title:"Nationality"}}),e=new z({props:{id:"url",title:"Wikipedia",contentType:"link",openInNewTab:"true"}}),{c(){A(r.$$.fragment),i=k(),A(t.$$.fragment),n=k(),A(o.$$.fragment),f=k(),A(e.$$.fragment)},l(m){F(r.$$.fragment,m),i=w(m),F(t.$$.fragment,m),n=w(m),F(o.$$.fragment,m),f=w(m),F(e.$$.fragment,m)},m(m,d){N(r,m,d),c(m,i,d),N(t,m,d),c(m,n,d),N(o,m,d),c(m,f,d),N(e,m,d),_=!0},p:S,i(m){_||(h(r.$$.fragment,m),h(t.$$.fragment,m),h(o.$$.fragment,m),h(e.$$.fragment,m),_=!0)},o(m){C(r.$$.fragment,m),C(t.$$.fragment,m),C(o.$$.fragment,m),C(e.$$.fragment,m),_=!1},d(m){I(r,m),m&&a(i),I(t,m),m&&a(n),I(o,m),m&&a(f),I(e,m)}}}function Oe(u){let r,i,t,n,o,f;return r=new X({props:{dest:"/sports/F1/drivers/",text:"Drivers"}}),t=new X({props:{dest:"/sports/F1/races/",text:"Races"}}),o=new X({props:{dest:"/sports/F1/circuits/",text:"Circuits"}}),{c(){A(r.$$.fragment),i=k(),A(t.$$.fragment),n=k(),A(o.$$.fragment)},l(e){F(r.$$.fragment,e),i=w(e),F(t.$$.fragment,e),n=w(e),F(o.$$.fragment,e)},m(e,_){N(r,e,_),c(e,i,_),N(t,e,_),c(e,n,_),N(o,e,_),f=!0},p:S,i(e){f||(h(r.$$.fragment,e),h(t.$$.fragment,e),h(o.$$.fragment,e),f=!0)},o(e){C(r.$$.fragment,e),C(t.$$.fragment,e),C(o.$$.fragment,e),f=!1},d(e){I(r,e),e&&a(i),I(t,e),e&&a(n),I(o,e)}}}function Se(u){let r,i,t,n,o,f,e,_,m,d,R,D,O,v,x,T=typeof p<"u"&&p.title&&p.hide_title!==!0&&ge();function P(s,l){return typeof p<"u"&&p.title?Fe:Ae}let H=P()(u),M=typeof p=="object"&&Ne(),$=u[1]&&ie(u);return d=new Ce({props:{data:u[1],search:"true",link:"driver_link",$$slots:{default:[De]},$$scope:{ctx:u}}}),v=new qe({props:{$$slots:{default:[Oe]},$$scope:{ctx:u}}}),{c(){T&&T.c(),r=k(),H.c(),i=E("meta"),t=E("meta"),M&&M.c(),n=B(),o=k(),$&&$.c(),f=k(),e=E("h2"),_=se("List of drivers"),m=k(),A(d.$$.fragment),R=k(),D=E("hr"),O=k(),A(v.$$.fragment),this.h()},l(s){T&&T.l(s),r=w(s);const l=ae("svelte-1j2izld",document.head);H.l(l),i=q(l,"META",{name:!0,content:!0}),t=q(l,"META",{name:!0,content:!0}),M&&M.l(l),n=B(),l.forEach(a),o=w(s),$&&$.l(s),f=w(s),e=q(s,"H2",{class:!0});var j=ne(e);_=fe(j,"List of drivers"),j.forEach(a),m=w(s),F(d.$$.fragment,s),R=w(s),D=q(s,"HR",{class:!0}),O=w(s),F(v.$$.fragment,s),this.h()},h(){y(i,"name","twitter:card"),y(i,"content","summary"),y(t,"name","twitter:site"),y(t,"content","@evidence_dev"),y(e,"class","markdown"),y(D,"class","markdown")},m(s,l){T&&T.m(s,l),c(s,r,l),H.m(document.head,null),G(document.head,i),G(document.head,t),M&&M.m(document.head,null),G(document.head,n),c(s,o,l),$&&$.m(s,l),c(s,f,l),c(s,e,l),G(e,_),c(s,m,l),N(d,s,l),c(s,R,l),c(s,D,l),c(s,O,l),N(v,s,l),x=!0},p(s,[l]){typeof p<"u"&&p.title&&p.hide_title!==!0&&T.p(s,l),H.p(s,l),typeof p=="object"&&M.p(s,l),s[1]?$?($.p(s,l),l&2&&h($,1)):($=ie(s),$.c(),h($,1),$.m(f.parentNode,f)):$&&($e(),C($,1,1,()=>{$=null}),pe());const j={};l&2&&(j.data=s[1]),l&4194304&&(j.$$scope={dirty:l,ctx:s}),d.$set(j);const L={};l&4194304&&(L.$$scope={dirty:l,ctx:s}),v.$set(L)},i(s){x||(h($),h(d.$$.fragment,s),h(v.$$.fragment,s),x=!0)},o(s){C($),C(d.$$.fragment,s),C(v.$$.fragment,s),x=!1},d(s){T&&T.d(s),s&&a(r),H.d(s),a(i),a(t),M&&M.d(s),a(n),s&&a(o),$&&$.d(s),s&&a(f),s&&a(e),s&&a(m),I(d,s),s&&a(R),s&&a(D),s&&a(O),I(v,s)}}}const p={title:"F1 Drivers",hide_title:!0,queries:[{drivers:"all_drivers.sql"}]};function He(u,...r){return!!r.some(i=>i==null?void 0:i.__unset)}function je(u,r,i){var Y,J;let t,n,o,f,e,_,m=S,d=()=>(m(),m=ye(l,b=>i(8,_=b)),l),R,D;W(u,be,b=>i(9,R=b)),W(u,te,b=>i(17,D=b)),u.$$.on_destroy.push(()=>m());let{data:O}=r,{data:v={},customFormattingSettings:x,__db:T,inputs:P}=O;_e(te,D="dc91213e2b824c326e07074768d669d6",D);let K=Te(P);Z(he,K),ce(K.subscribe(b=>P=b)),Z(Ee,{getCustomFormats:()=>x.customFormats||[]});const H=(b,g)=>re(T.query,b,{query_name:g});ve(H);const M=()=>{};let $=!1;(Y=import.meta)!=null&&Y.hot&&(void 0).on("vite:afterUpdate",()=>{$=!0,ee.emptyCache()}),R.params,(J=import.meta)!=null&&J.hot&&(void 0).on("evidence:queryChange",({queryId:b,content:g})=>{let Q=[];if(b||Q.push("Malformed event: Missing queryId"),g||Q.push("Malformed event: Missing content"),Q.length){console.warn("Failed to update query on serverside change!",Q.join(`
`));return}b==="drivers"&&i(6,t=g)});let s;de(()=>i(4,s=t));let l;const j=()=>{const b=()=>{let g,Q;try{if(f||$)g=void 0,Q=void 0;else if(v.drivers){if(v.drivers instanceof Error)throw v.drivers;g=v.drivers}else g=re(T.query,t,{query_name:"drivers"})}catch(oe){g=[],Q=oe}const U=ee.create(t,H,"drivers",{scoreNotifier:M,initialData:g,initialError:Q,noResolve:n});let V;U.loaded||(V=U.fetch()),l&&V instanceof Promise?V.then(()=>d(i(0,l=U))):d(i(0,l=U))};return b(),we(b,500)};let L;return u.$$set=b=>{"data"in b&&i(2,O=b.data)},u.$$.update=()=>{u.$$.dirty&4&&i(3,{data:v={},customFormattingSettings:x,__db:T}=O,v),u.$$.dirty&8&&ke.set(Object.keys(v).length>0),u.$$.dirty&512&&R.params,u.$$.dirty&80&&(s||i(4,s=t)),u.$$.dirty&64&&i(7,o=t),u.$$.dirty&144&&(f=o!==s),u.$$.dirty&96&&typeof L>"u"&&i(5,L=j()),u.$$.dirty&96&&L(),u.$$.dirty&40,u.$$.dirty&256&&i(1,e=_)},i(6,t=`select 
    CONCAT(forename, ' ', surname) as name,
    driverId,
    dob,
    nationality,
    url,
    driverRef,
    './' || driverRef as driver_link
from f1.drivers`),n=He`select 
    CONCAT(forename, ' ', surname) as name,
    driverId,
    dob,
    nationality,
    url,
    driverRef,
    './' || driverRef as driver_link
from f1.drivers`,[l,e,O,v,s,L,t,o,_,R]}class Ye extends me{constructor(r){super(),le(this,r,je,Se,ue,{data:2})}}export{Ye as default};