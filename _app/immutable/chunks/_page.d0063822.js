import{S as z,i as D,s as G,d as v,e as M,f as Q,K as w,j as h,k as K,l as N,m as p,L as T,n as U,p as F,r as k,v as A,M as q,t as d,b as g,N as X,O as E,x as R,y as Y,z as B,A as J,w as S,P as W}from"./index.ca99e618.js";import{p as Z}from"./stores.fdac2c68.js";import{p as I,r as P}from"./inferColumnTypes.5e991933.js";import{C as x}from"./globalContexts.09a53420.js";import{L as ee,a as H}from"./Links.11092d91.js";import"./ecStat.058e4904.js";import"./paths.7b6e2fe5.js";import{Q as te}from"./QueryViewer.f42434a3.js";import{V as re}from"./Value.0995cb50.js";function se(u){return{c(){this.h()},l(s){this.h()},h(){document.title="Evidence"},m:S,p:S,d:S}}function ae(u){let s,i,r,l,m,o;return s=new H({props:{dest:"/sports/F1/drivers/",text:"Drivers"}}),r=new H({props:{dest:"/sports/F1/races/",text:"Races"}}),m=new H({props:{dest:"/sports/F1/circuits/",text:"Circuits"}}),{c(){w(s.$$.fragment),i=v(),w(r.$$.fragment),l=v(),w(m.$$.fragment)},l(t){T(s.$$.fragment,t),i=h(t),T(r.$$.fragment,t),l=h(t),T(m.$$.fragment,t)},m(t,c){q(s,t,c),k(t,i,c),q(r,t,c),k(t,l,c),q(m,t,c),o=!0},p:S,i(t){o||(d(s.$$.fragment,t),d(r.$$.fragment,t),d(m.$$.fragment,t),o=!0)},o(t){g(s.$$.fragment,t),g(r.$$.fragment,t),g(m.$$.fragment,t),o=!1},d(t){E(s,t),t&&p(i),E(r,t),t&&p(l),E(m,t)}}}function V(u){let s,i;return s=new te({props:{pageQueries:u[0].evidencemeta.queries,queryID:"races",queryResult:u[0].races}}),{c(){w(s.$$.fragment)},l(r){T(s.$$.fragment,r)},m(r,l){q(s,r,l),i=!0},p(r,l){const m={};l&1&&(m.pageQueries=r[0].evidencemeta.queries),l&1&&(m.queryResult=r[0].races),s.$set(m)},i(r){i||(d(s.$$.fragment,r),i=!0)},o(r){g(s.$$.fragment,r),i=!1},d(r){E(s,r)}}}function ne(u){let s,i,r,l,m,o,t,c,_,b,f,y;function O(e,a){return se}let $=O()(u);o=new ee({props:{$$slots:{default:[ae]},$$scope:{ctx:u}}}),_=new re({props:{data:u[1].filter(u[4]),column:"name_year"}});let n=u[0].races&&V(u);return{c(){s=v(),$.c(),i=M("meta"),r=M("meta"),l=Q(),m=v(),w(o.$$.fragment),t=v(),c=M("h1"),w(_.$$.fragment),b=v(),n&&n.c(),f=Q(),this.h()},l(e){s=h(e);const a=K("svelte-1j2izld",document.head);$.l(a),i=N(a,"META",{name:!0,content:!0}),r=N(a,"META",{name:!0,content:!0}),l=Q(),a.forEach(p),m=h(e),T(o.$$.fragment,e),t=h(e),c=N(e,"H1",{class:!0});var C=U(c);T(_.$$.fragment,C),C.forEach(p),b=h(e),n&&n.l(e),f=Q(),this.h()},h(){F(i,"name","twitter:card"),F(i,"content","summary"),F(r,"name","twitter:site"),F(r,"content","@evidence_dev"),F(c,"class","markdown")},m(e,a){k(e,s,a),$.m(document.head,null),A(document.head,i),A(document.head,r),A(document.head,l),k(e,m,a),q(o,e,a),k(e,t,a),k(e,c,a),q(_,c,null),k(e,b,a),n&&n.m(e,a),k(e,f,a),y=!0},p(e,[a]){$.p(e,a);const C={};a&256&&(C.$$scope={dirty:a,ctx:e}),o.$set(C);const L={};a&6&&(L.data=e[1].filter(e[4])),_.$set(L),e[0].races?n?(n.p(e,a),a&1&&d(n,1)):(n=V(e),n.c(),d(n,1),n.m(f.parentNode,f)):n&&(W(),g(n,1,1,()=>{n=null}),X())},i(e){y||(d(o.$$.fragment,e),d(_.$$.fragment,e),d(n),y=!0)},o(e){g(o.$$.fragment,e),g(_.$$.fragment,e),g(n),y=!1},d(e){e&&p(s),$.d(e),p(i),p(r),p(l),e&&p(m),E(o,e),e&&p(t),e&&p(c),E(_),e&&p(b),n&&n.d(e),e&&p(f)}}}function ie(u,s,i){let r,l;R(u,P,f=>i(6,r=f)),R(u,Z,f=>i(2,l=f));let{data:m}=s,{data:o={},customFormattingSettings:t}=m;Y(P,r="d200decf47a51d92b634382dd2afac62",r),B(x,{getCustomFormats:()=>t.customFormats||[]});const c=function(f){var O,j;let y=(O=f.evidencemeta)==null?void 0:O.queries;if(y)for(let $=0;$<y.length;$++){let n=f[y[$].id],e=(j=f.evidencemeta)==null?void 0:j.queries[$].columnTypes;for(let a=0;a<n.length;a++)e&&Object.defineProperty(n[a],"_evidenceColumnTypes",{enumerable:!1,value:e})}};J(()=>{c(o)});let{races:_}=o;const b=f=>f.year_race_name===l.params.year_race_name;return u.$$set=f=>{"data"in f&&i(3,m=f.data)},u.$$.update=()=>{u.$$.dirty&8&&i(0,{data:o={},customFormattingSettings:t}=m,o),u.$$.dirty&1&&(Object.keys(o).length>0?I.set(!0):I.set(!1)),u.$$.dirty&1&&i(1,{races:_}=o,_)},[o,_,l,m,b]}class de extends z{constructor(s){super(),D(this,s,ie,ne,G,{data:3})}}export{de as default};
