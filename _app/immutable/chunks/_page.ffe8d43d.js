import{S as ae,i as ne,s as le,a as q,e as P,b as Y,t as ie,G as R,c as E,h as oe,d as U,f as p,g as fe,j as ue,H as M,k as H,m as y,n as j,I as N,z as b,B as k,C as me,J as A,p as B,q as _e,r as J,u as ce,U as pe,o as Q,A as $e,V as de}from"./index.fa6138d3.js";import{p as ye}from"./stores.39965980.js";import{s as be,Q as W,p as ke,r as Z,d as we}from"./index.73c40649.js";import{w as ge}from"./paths.30008be9.js";import{I as he,C as qe}from"./globalContexts.8bcf5d41.js";import{p as ee}from"./profile.e7706513.js";import{L as Ee,a as z}from"./Links.7a0e4412.js";import"./VennDiagram.svelte_svelte_type_style_lang.5dab9295.js";import{D as Ce}from"./DataTable.7c16b523.js";import{Q as Te}from"./QueryViewer.03eeda19.js";import{C as K}from"./Column.0c5bf2da.js";function Fe(n){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:Q,p:Q,d:Q}}function te(n){let a,s;return a=new Te({props:{queryID:"all_races",queryResult:n[1]}}),{c(){R(a.$$.fragment)},l(r){M(a.$$.fragment,r)},m(r,f){N(a,r,f),s=!0},p(r,f){const i={};f&2&&(i.queryResult=r[1]),a.$set(i)},i(r){s||(b(a.$$.fragment,r),s=!0)},o(r){k(a.$$.fragment,r),s=!1},d(r){A(a,r)}}}function Re(n){let a,s,r,f,i,u;return a=new K({props:{id:"name",title:"Name"}}),r=new K({props:{id:"date",title:"Date"}}),i=new K({props:{id:"url",title:"Wikipedia",contentType:"link",openInNewTab:"true"}}),{c(){R(a.$$.fragment),s=q(),R(r.$$.fragment),f=q(),R(i.$$.fragment)},l(e){M(a.$$.fragment,e),s=E(e),M(r.$$.fragment,e),f=E(e),M(i.$$.fragment,e)},m(e,m){N(a,e,m),y(e,s,m),N(r,e,m),y(e,f,m),N(i,e,m),u=!0},p:Q,i(e){u||(b(a.$$.fragment,e),b(r.$$.fragment,e),b(i.$$.fragment,e),u=!0)},o(e){k(a.$$.fragment,e),k(r.$$.fragment,e),k(i.$$.fragment,e),u=!1},d(e){A(a,e),e&&p(s),A(r,e),e&&p(f),A(i,e)}}}function Me(n){let a,s,r,f,i,u;return a=new z({props:{dest:"/sports/F1/drivers/",text:"Drivers"}}),r=new z({props:{dest:"/sports/F1/races/",text:"Races"}}),i=new z({props:{dest:"/sports/F1/circuits/",text:"Circuits"}}),{c(){R(a.$$.fragment),s=q(),R(r.$$.fragment),f=q(),R(i.$$.fragment)},l(e){M(a.$$.fragment,e),s=E(e),M(r.$$.fragment,e),f=E(e),M(i.$$.fragment,e)},m(e,m){N(a,e,m),y(e,s,m),N(r,e,m),y(e,f,m),N(i,e,m),u=!0},p:Q,i(e){u||(b(a.$$.fragment,e),b(r.$$.fragment,e),b(i.$$.fragment,e),u=!0)},o(e){k(a.$$.fragment,e),k(r.$$.fragment,e),k(i.$$.fragment,e),u=!1},d(e){A(a,e),e&&p(s),A(r,e),e&&p(f),A(i,e)}}}function Ne(n){let a,s,r,f,i,u,e,m,w,$,C,T,F,c,D;function v(t,l){return Fe}let I=v()(n),o=n[1]&&te(n);return $=new Ce({props:{data:n[1],search:"true",link:"race_link",rows:"20",$$slots:{default:[Re]},$$scope:{ctx:n}}}),c=new Ee({props:{$$slots:{default:[Me]},$$scope:{ctx:n}}}),{c(){a=q(),I.c(),s=P("meta"),r=P("meta"),f=Y(),i=q(),u=P("h2"),e=ie("All Races"),m=q(),o&&o.c(),w=q(),R($.$$.fragment),C=q(),T=P("hr"),F=q(),R(c.$$.fragment),this.h()},l(t){a=E(t);const l=oe("svelte-1j2izld",document.head);I.l(l),s=U(l,"META",{name:!0,content:!0}),r=U(l,"META",{name:!0,content:!0}),f=Y(),l.forEach(p),i=E(t),u=U(t,"H2",{class:!0});var d=fe(u);e=ue(d,"All Races"),d.forEach(p),m=E(t),o&&o.l(t),w=E(t),M($.$$.fragment,t),C=E(t),T=U(t,"HR",{class:!0}),F=E(t),M(c.$$.fragment,t),this.h()},h(){H(s,"name","twitter:card"),H(s,"content","summary"),H(r,"name","twitter:site"),H(r,"content","@evidence_dev"),H(u,"class","markdown"),H(T,"class","markdown")},m(t,l){y(t,a,l),I.m(document.head,null),j(document.head,s),j(document.head,r),j(document.head,f),y(t,i,l),y(t,u,l),j(u,e),y(t,m,l),o&&o.m(t,l),y(t,w,l),N($,t,l),y(t,C,l),y(t,T,l),y(t,F,l),N(c,t,l),D=!0},p(t,[l]){I.p(t,l),t[1]?o?(o.p(t,l),l&2&&b(o,1)):(o=te(t),o.c(),b(o,1),o.m(w.parentNode,w)):o&&($e(),k(o,1,1,()=>{o=null}),me());const d={};l&2&&(d.data=t[1]),l&4194304&&(d.$$scope={dirty:l,ctx:t}),$.$set(d);const g={};l&4194304&&(g.$$scope={dirty:l,ctx:t}),c.$set(g)},i(t){D||(b(o),b($.$$.fragment,t),b(c.$$.fragment,t),D=!0)},o(t){k(o),k($.$$.fragment,t),k(c.$$.fragment,t),D=!1},d(t){t&&p(a),I.d(t),p(s),p(r),p(f),t&&p(i),t&&p(u),t&&p(m),o&&o.d(t),t&&p(w),A($,t),t&&p(C),t&&p(T),t&&p(F),A(c,t)}}}function Ae(n,...a){return!!a.some(s=>s==null?void 0:s.__unset)}function Ie(n,a,s){var V,X;let r,f,i,u,e,m,w=Q,$=()=>(w(),w=de(g,_=>s(8,m=_)),g),C,T;B(n,ye,_=>s(9,C=_)),B(n,Z,_=>s(17,T=_)),n.$$.on_destroy.push(()=>w());let{data:F}=a,{data:c={},customFormattingSettings:D,__db:v,inputs:G}=F;_e(Z,T="d0e42fc68cb28f9dee425a9b8f386bbc",T);let I=ge(G);J(he,I),ce(I.subscribe(_=>G=_)),J(qe,{getCustomFormats:()=>D.customFormats||[]});const o=(_,h)=>ee(v.query,_,{query_name:h});be(o);const t=()=>{};let l=!1;(V=import.meta)!=null&&V.hot&&(void 0).on("vite:afterUpdate",()=>{l=!0,W.emptyCache()}),C.params,(X=import.meta)!=null&&X.hot&&(void 0).on("evidence:queryChange",({queryId:_,content:h})=>{let S=[];if(_||S.push("Malformed event: Missing queryId"),h||S.push("Malformed event: Missing content"),S.length){console.warn("Failed to update query on serverside change!",S.join(`
`));return}_==="all_races"&&s(6,r=h)});let d;pe(()=>s(4,d=r));let g;const re=()=>{const _=()=>{let h,S;try{if(u||l)h=void 0,S=void 0;else if(c.all_races){if(c.all_races instanceof Error)throw c.all_races;h=c.all_races}else h=ee(v.query,r,{query_name:"all_races"})}catch(se){h=[],S=se}const L=W.create(r,o,"all_races",{scoreNotifier:t,initialData:h,initialError:S,noResolve:f});let x;L.loaded||(x=L.fetch()),g&&x instanceof Promise?x.then(()=>$(s(0,g=L))):$(s(0,g=L))};return _(),we(_,500)};let O;return n.$$set=_=>{"data"in _&&s(2,F=_.data)},n.$$.update=()=>{n.$$.dirty&4&&s(3,{data:c={},customFormattingSettings:D,__db:v}=F,c),n.$$.dirty&8&&ke.set(Object.keys(c).length>0),n.$$.dirty&512&&C.params,n.$$.dirty&80&&(d||s(4,d=r)),n.$$.dirty&64&&s(7,i=r),n.$$.dirty&144&&(u=i!==d),n.$$.dirty&96&&typeof O>"u"&&s(5,O=re()),n.$$.dirty&96&&O(),n.$$.dirty&40,n.$$.dirty&256&&s(1,e=m)},s(6,r=`select *,
'/sports/F1/races/' || year || '_' || REPLACE(name, ' ', '_') as race_link
from f1.races
order by date;`),f=Ae`select *,
'/sports/F1/races/' || year || '_' || REPLACE(name, ' ', '_') as race_link
from f1.races
order by date;`,[g,e,F,c,d,O,r,i,m,C]}class xe extends ae{constructor(a){super(),ne(this,a,Ie,Ne,le,{data:2})}}export{xe as default};