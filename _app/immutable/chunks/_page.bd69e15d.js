import{S as R,i as V,s as z,d as E,e as $,f as T,K as F,j as C,k as G,l as O,m as p,n as K,L as H,p as b,r as v,v as Q,M as I,t as g,b as q,N as U,O as P,x as j,y as D,z as L,A as X,P as Y,w as S}from"./index.b1cc14d6.js";import{p as B}from"./stores.ba2acd3e.js";import{p as M,r as N}from"./inferColumnTypes.b29b4717.js";import{C as J}from"./globalContexts.09a53420.js";import"./ecStat.140e6e58.js";import"./paths.e2a3e3cc.js";import{Q as W}from"./checkInputs.1ecf43d2.js";import{V as Z}from"./Value.c83d4480.js";function x(s){return{c(){this.h()},l(n){this.h()},h(){document.title="Evidence"},m:S,p:S,d:S}}function A(s){let n,o;return n=new W({props:{pageQueries:s[0].evidencemeta.queries,queryID:"races",queryResult:s[0].races}}),{c(){F(n.$$.fragment)},l(t){H(n.$$.fragment,t)},m(t,c){I(n,t,c),o=!0},p(t,c){const l={};c&1&&(l.pageQueries=t[0].evidencemeta.queries),c&1&&(l.queryResult=t[0].races),n.$set(l)},i(t){o||(g(n.$$.fragment,t),o=!0)},o(t){q(n.$$.fragment,t),o=!1},d(t){P(n,t)}}}function ee(s){let n,o,t,c,l,i,m,h,f,y;function u(e,a){return x}let _=u()(s);m=new Z({props:{data:s[1].filter(s[4]),column:"name_year"}});let r=s[0].races&&A(s);return{c(){n=E(),_.c(),o=$("meta"),t=$("meta"),c=T(),l=E(),i=$("h1"),F(m.$$.fragment),h=E(),r&&r.c(),f=T(),this.h()},l(e){n=C(e);const a=G("svelte-1j2izld",document.head);_.l(a),o=O(a,"META",{name:!0,content:!0}),t=O(a,"META",{name:!0,content:!0}),c=T(),a.forEach(p),l=C(e),i=O(e,"H1",{class:!0});var d=K(i);H(m.$$.fragment,d),d.forEach(p),h=C(e),r&&r.l(e),f=T(),this.h()},h(){b(o,"name","twitter:card"),b(o,"content","summary"),b(t,"name","twitter:site"),b(t,"content","@evidence_dev"),b(i,"class","markdown")},m(e,a){v(e,n,a),_.m(document.head,null),Q(document.head,o),Q(document.head,t),Q(document.head,c),v(e,l,a),v(e,i,a),I(m,i,null),v(e,h,a),r&&r.m(e,a),v(e,f,a),y=!0},p(e,[a]){_.p(e,a);const d={};a&6&&(d.data=e[1].filter(e[4])),m.$set(d),e[0].races?r?(r.p(e,a),a&1&&g(r,1)):(r=A(e),r.c(),g(r,1),r.m(f.parentNode,f)):r&&(Y(),q(r,1,1,()=>{r=null}),U())},i(e){y||(g(m.$$.fragment,e),g(r),y=!0)},o(e){q(m.$$.fragment,e),q(r),y=!1},d(e){e&&p(n),_.d(e),p(o),p(t),p(c),e&&p(l),e&&p(i),P(m),e&&p(h),r&&r.d(e),e&&p(f)}}}function te(s,n,o){let t,c;j(s,N,u=>o(6,t=u)),j(s,B,u=>o(2,c=u));let{data:l}=n,{data:i={},customFormattingSettings:m}=l;D(N,t="d200decf47a51d92b634382dd2afac62",t),L(J,{getCustomFormats:()=>m.customFormats||[]});const h=function(u){var _,r;let k=(_=u.evidencemeta)==null?void 0:_.queries;if(k)for(let e=0;e<k.length;e++){let a=u[k[e].id],d=(r=u.evidencemeta)==null?void 0:r.queries[e].columnTypes;for(let w=0;w<a.length;w++)d&&Object.defineProperty(a[w],"_evidenceColumnTypes",{enumerable:!1,value:d})}};X(()=>{h(i)});let{races:f}=i;const y=u=>u.year_race_name===c.params.year_race_name;return s.$$set=u=>{"data"in u&&o(3,l=u.data)},s.$$.update=()=>{s.$$.dirty&8&&o(0,{data:i={},customFormattingSettings:m}=l,i),s.$$.dirty&1&&(Object.keys(i).length>0?M.set(!0):M.set(!1)),s.$$.dirty&1&&o(1,{races:f}=i,f)},[i,f,c,l,y]}class le extends R{constructor(n){super(),V(this,n,te,ee,z,{data:3})}}export{le as default};
