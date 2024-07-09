import{S as ct,i as ot,s as lt,a as w,e as h,b as K,t as st,G as A,c as T,h as mt,d as C,f as m,g as nt,j as ut,H as I,k as y,m as _,n as G,I as R,z as q,B as g,C as at,J as N,p as W,q as pt,r as Z,u as _t,U as $t,o as j,A as dt,V as yt}from"./index.fa6138d3.js";import{p as bt}from"./stores.0eeef45c.js";import{s as kt,Q as tt,p as wt,r as et,d as Tt}from"./index.25f46f1b.js";import{w as Et}from"./paths.27fa875e.js";import{I as qt,C as ht}from"./globalContexts.8bcf5d41.js";import{p as it}from"./profile.e7706513.js";import{L as Ct,a as Y}from"./Links.49f50e94.js";import"./VennDiagram.svelte_svelte_type_style_lang.73dabf7e.js";import{D as gt}from"./DataTable.e97b200c.js";import{Q as Mt}from"./QueryViewer.2f3b8776.js";import{C as z}from"./Column.381479d0.js";function Ft(l){let i,r=a.title+"",e;return{c(){i=h("h1"),e=st(r),this.h()},l(n){i=C(n,"H1",{class:!0});var f=nt(i);e=ut(f,r),f.forEach(m),this.h()},h(){y(i,"class","title")},m(n,f){_(n,i,f),G(i,e)},p:j,d(n){n&&m(i)}}}function At(l){return{c(){this.h()},l(i){this.h()},h(){document.title="Evidence"},m:j,p:j,d:j}}function It(l){let i,r,e,n,f;return document.title=i=a.title,{c(){r=w(),e=h("meta"),n=w(),f=h("meta"),this.h()},l(u){r=T(u),e=C(u,"META",{property:!0,content:!0}),n=T(u),f=C(u,"META",{name:!0,content:!0}),this.h()},h(){var u,t;y(e,"property","og:title"),y(e,"content",((u=a.og)==null?void 0:u.title)??a.title),y(f,"name","twitter:title"),y(f,"content",((t=a.og)==null?void 0:t.title)??a.title)},m(u,t){_(u,r,t),_(u,e,t),_(u,n,t),_(u,f,t)},p(u,t){t&0&&i!==(i=a.title)&&(document.title=i)},d(u){u&&m(r),u&&m(e),u&&m(n),u&&m(f)}}}function Rt(l){var f,u;let i,r,e=(a.description||((f=a.og)==null?void 0:f.description))&&Nt(),n=((u=a.og)==null?void 0:u.image)&&vt();return{c(){e&&e.c(),i=w(),n&&n.c(),r=K()},l(t){e&&e.l(t),i=T(t),n&&n.l(t),r=K()},m(t,p){e&&e.m(t,p),_(t,i,p),n&&n.m(t,p),_(t,r,p)},p(t,p){var c,$;(a.description||(c=a.og)!=null&&c.description)&&e.p(t,p),($=a.og)!=null&&$.image&&n.p(t,p)},d(t){e&&e.d(t),t&&m(i),n&&n.d(t),t&&m(r)}}}function Nt(l){let i,r,e,n,f;return{c(){i=h("meta"),r=w(),e=h("meta"),n=w(),f=h("meta"),this.h()},l(u){i=C(u,"META",{name:!0,content:!0}),r=T(u),e=C(u,"META",{property:!0,content:!0}),n=T(u),f=C(u,"META",{name:!0,content:!0}),this.h()},h(){var u,t,p;y(i,"name","description"),y(i,"content",a.description??((u=a.og)==null?void 0:u.description)),y(e,"property","og:description"),y(e,"content",((t=a.og)==null?void 0:t.description)??a.description),y(f,"name","twitter:description"),y(f,"content",((p=a.og)==null?void 0:p.description)??a.description)},m(u,t){_(u,i,t),_(u,r,t),_(u,e,t),_(u,n,t),_(u,f,t)},p:j,d(u){u&&m(i),u&&m(r),u&&m(e),u&&m(n),u&&m(f)}}}function vt(l){let i,r,e;return{c(){i=h("meta"),r=w(),e=h("meta"),this.h()},l(n){i=C(n,"META",{property:!0,content:!0}),r=T(n),e=C(n,"META",{name:!0,content:!0}),this.h()},h(){var n,f;y(i,"property","og:image"),y(i,"content",(n=a.og)==null?void 0:n.image),y(e,"name","twitter:image"),y(e,"content",(f=a.og)==null?void 0:f.image)},m(n,f){_(n,i,f),_(n,r,f),_(n,e,f)},p:j,d(n){n&&m(i),n&&m(r),n&&m(e)}}}function rt(l){let i,r;return i=new Mt({props:{queryID:"circuits",queryResult:l[1]}}),{c(){A(i.$$.fragment)},l(e){I(i.$$.fragment,e)},m(e,n){R(i,e,n),r=!0},p(e,n){const f={};n&2&&(f.queryResult=e[1]),i.$set(f)},i(e){r||(q(i.$$.fragment,e),r=!0)},o(e){g(i.$$.fragment,e),r=!1},d(e){N(i,e)}}}function St(l){let i,r,e,n,f,u,t,p;return i=new z({props:{id:"name",title:"Name"}}),e=new z({props:{id:"location",title:"Location"}}),f=new z({props:{id:"country",title:"Country"}}),t=new z({props:{id:"url",title:"Wikipedia",contentType:"link",openInNewTab:"true"}}),{c(){A(i.$$.fragment),r=w(),A(e.$$.fragment),n=w(),A(f.$$.fragment),u=w(),A(t.$$.fragment)},l(c){I(i.$$.fragment,c),r=T(c),I(e.$$.fragment,c),n=T(c),I(f.$$.fragment,c),u=T(c),I(t.$$.fragment,c)},m(c,$){R(i,c,$),_(c,r,$),R(e,c,$),_(c,n,$),R(f,c,$),_(c,u,$),R(t,c,$),p=!0},p:j,i(c){p||(q(i.$$.fragment,c),q(e.$$.fragment,c),q(f.$$.fragment,c),q(t.$$.fragment,c),p=!0)},o(c){g(i.$$.fragment,c),g(e.$$.fragment,c),g(f.$$.fragment,c),g(t.$$.fragment,c),p=!1},d(c){N(i,c),c&&m(r),N(e,c),c&&m(n),N(f,c),c&&m(u),N(t,c)}}}function Ht(l){let i,r,e,n,f,u;return i=new Y({props:{dest:"/sports/F1/drivers/",text:"Drivers"}}),e=new Y({props:{dest:"/sports/F1/races/",text:"Races"}}),f=new Y({props:{dest:"/sports/F1/circuits/",text:"Circuits"}}),{c(){A(i.$$.fragment),r=w(),A(e.$$.fragment),n=w(),A(f.$$.fragment)},l(t){I(i.$$.fragment,t),r=T(t),I(e.$$.fragment,t),n=T(t),I(f.$$.fragment,t)},m(t,p){R(i,t,p),_(t,r,p),R(e,t,p),_(t,n,p),R(f,t,p),u=!0},p:j,i(t){u||(q(i.$$.fragment,t),q(e.$$.fragment,t),q(f.$$.fragment,t),u=!0)},o(t){g(i.$$.fragment,t),g(e.$$.fragment,t),g(f.$$.fragment,t),u=!1},d(t){N(i,t),t&&m(r),N(e,t),t&&m(n),N(f,t)}}}function jt(l){let i,r,e,n,f,u,t,p,c,$,v,S,H,k,x,E=typeof a<"u"&&a.title&&a.hide_title!==!0&&Ft();function P(s,o){return typeof a<"u"&&a.title?It:At}let D=P()(l),M=typeof a=="object"&&Rt(),d=l[1]&&rt(l);return $=new gt({props:{data:l[1],search:"true",link:"circuit_link",$$slots:{default:[St]},$$scope:{ctx:l}}}),k=new Ct({props:{$$slots:{default:[Ht]},$$scope:{ctx:l}}}),{c(){E&&E.c(),i=w(),D.c(),r=h("meta"),e=h("meta"),M&&M.c(),n=K(),f=w(),d&&d.c(),u=w(),t=h("h2"),p=st("List of Circuits"),c=w(),A($.$$.fragment),v=w(),S=h("hr"),H=w(),A(k.$$.fragment),this.h()},l(s){E&&E.l(s),i=T(s);const o=mt("svelte-1j2izld",document.head);D.l(o),r=C(o,"META",{name:!0,content:!0}),e=C(o,"META",{name:!0,content:!0}),M&&M.l(o),n=K(),o.forEach(m),f=T(s),d&&d.l(s),u=T(s),t=C(s,"H2",{class:!0});var L=nt(t);p=ut(L,"List of Circuits"),L.forEach(m),c=T(s),I($.$$.fragment,s),v=T(s),S=C(s,"HR",{class:!0}),H=T(s),I(k.$$.fragment,s),this.h()},h(){y(r,"name","twitter:card"),y(r,"content","summary"),y(e,"name","twitter:site"),y(e,"content","@evidence_dev"),y(t,"class","markdown"),y(S,"class","markdown")},m(s,o){E&&E.m(s,o),_(s,i,o),D.m(document.head,null),G(document.head,r),G(document.head,e),M&&M.m(document.head,null),G(document.head,n),_(s,f,o),d&&d.m(s,o),_(s,u,o),_(s,t,o),G(t,p),_(s,c,o),R($,s,o),_(s,v,o),_(s,S,o),_(s,H,o),R(k,s,o),x=!0},p(s,[o]){typeof a<"u"&&a.title&&a.hide_title!==!0&&E.p(s,o),D.p(s,o),typeof a=="object"&&M.p(s,o),s[1]?d?(d.p(s,o),o&2&&q(d,1)):(d=rt(s),d.c(),q(d,1),d.m(u.parentNode,u)):d&&(dt(),g(d,1,1,()=>{d=null}),at());const L={};o&2&&(L.data=s[1]),o&4194304&&(L.$$scope={dirty:o,ctx:s}),$.$set(L);const O={};o&4194304&&(O.$$scope={dirty:o,ctx:s}),k.$set(O)},i(s){x||(q(d),q($.$$.fragment,s),q(k.$$.fragment,s),x=!0)},o(s){g(d),g($.$$.fragment,s),g(k.$$.fragment,s),x=!1},d(s){E&&E.d(s),s&&m(i),D.d(s),m(r),m(e),M&&M.d(s),m(n),s&&m(f),d&&d.d(s),s&&m(u),s&&m(t),s&&m(c),N($,s),s&&m(v),s&&m(S),s&&m(H),N(k,s)}}}const a={title:"F1 Circuits",queries:[{circuits:"all_circuits.sql"}]};function Dt(l,...i){return!!i.some(r=>r==null?void 0:r.__unset)}function Lt(l,i,r){var B,J;let e,n,f,u,t,p,c=j,$=()=>(c(),c=yt(o,b=>r(8,p=b)),o),v,S;W(l,bt,b=>r(9,v=b)),W(l,et,b=>r(17,S=b)),l.$$.on_destroy.push(()=>c());let{data:H}=i,{data:k={},customFormattingSettings:x,__db:E,inputs:P}=H;pt(et,S="cfc2f25c5b2a0f317736913045d83941",S);let V=Et(P);Z(qt,V),_t(V.subscribe(b=>P=b)),Z(ht,{getCustomFormats:()=>x.customFormats||[]});const D=(b,F)=>it(E.query,b,{query_name:F});kt(D);const M=()=>{};let d=!1;(B=import.meta)!=null&&B.hot&&(void 0).on("vite:afterUpdate",()=>{d=!0,tt.emptyCache()}),v.params,(J=import.meta)!=null&&J.hot&&(void 0).on("evidence:queryChange",({queryId:b,content:F})=>{let Q=[];if(b||Q.push("Malformed event: Missing queryId"),F||Q.push("Malformed event: Missing content"),Q.length){console.warn("Failed to update query on serverside change!",Q.join(`
`));return}b==="circuits"&&r(6,e=F)});let s;$t(()=>r(4,s=e));let o;const L=()=>{const b=()=>{let F,Q;try{if(u||d)F=void 0,Q=void 0;else if(k.circuits){if(k.circuits instanceof Error)throw k.circuits;F=k.circuits}else F=it(E.query,e,{query_name:"circuits"})}catch(ft){F=[],Q=ft}const U=tt.create(e,D,"circuits",{scoreNotifier:M,initialData:F,initialError:Q,noResolve:n});let X;U.loaded||(X=U.fetch()),o&&X instanceof Promise?X.then(()=>$(r(0,o=U))):$(r(0,o=U))};return b(),Tt(b,500)};let O;return l.$$set=b=>{"data"in b&&r(2,H=b.data)},l.$$.update=()=>{l.$$.dirty&4&&r(3,{data:k={},customFormattingSettings:x,__db:E}=H,k),l.$$.dirty&8&&wt.set(Object.keys(k).length>0),l.$$.dirty&512&&v.params,l.$$.dirty&80&&(s||r(4,s=e)),l.$$.dirty&64&&r(7,f=e),l.$$.dirty&144&&(u=f!==s),l.$$.dirty&96&&typeof O>"u"&&r(5,O=L()),l.$$.dirty&96&&O(),l.$$.dirty&40,l.$$.dirty&256&&r(1,t=p)},r(6,e=`select 
    circuitId,
    circuitRef,
    name,
    location,
    country,
    lat,
    lng,
    alt,
    url,
    './' || circuitRef as circuit_link
from f1.circuits;`),n=Dt`select 
    circuitId,
    circuitRef,
    name,
    location,
    country,
    lat,
    lng,
    alt,
    url,
    './' || circuitRef as circuit_link
from f1.circuits;`,[o,t,H,k,s,O,e,f,p,v]}class Bt extends ct{constructor(i){super(),ot(this,i,Lt,jt,lt,{data:2})}}export{Bt as default};