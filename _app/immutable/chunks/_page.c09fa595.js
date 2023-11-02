import{S as V,i as z,s as G,d as E,e as $,f as T,J as H,j as C,k as K,l as O,m as p,n as P,K as A,p as b,q as v,r as Q,L as I,t as g,b as q,M as U,N as R,w as j,x as D,y as J,z as L,O as X,v as S}from"./index.5c7e9c86.js";import{p as Y}from"./stores.af36f81b.js";import{p as M,r as N}from"./inferColumnTypes.b7590180.js";import{C as B}from"./globalContexts.09a53420.js";import"./ecStat.040219d2.js";import"./paths.b217a74b.js";import{Q as W}from"./checkInputs.fba08303.js";import{V as Z}from"./Value.cbb7856e.js";function x(s){return{c(){this.h()},l(n){this.h()},h(){document.title="Evidence"},m:S,p:S,d:S}}function F(s){let n,o;return n=new W({props:{pageQueries:s[0].evidencemeta.queries,queryID:"races",queryResult:s[0].races}}),{c(){H(n.$$.fragment)},l(t){A(n.$$.fragment,t)},m(t,u){I(n,t,u),o=!0},p(t,u){const l={};u&1&&(l.pageQueries=t[0].evidencemeta.queries),u&1&&(l.queryResult=t[0].races),n.$set(l)},i(t){o||(g(n.$$.fragment,t),o=!0)},o(t){q(n.$$.fragment,t),o=!1},d(t){R(n,t)}}}function ee(s){let n,o,t,u,l,i,m,h,f,y;function c(e,a){return x}let _=c()(s);m=new Z({props:{data:s[1].filter(s[4]),column:"name_year"}});let r=s[0].races&&F(s);return{c(){n=E(),_.c(),o=$("meta"),t=$("meta"),u=T(),l=E(),i=$("h1"),H(m.$$.fragment),h=E(),r&&r.c(),f=T(),this.h()},l(e){n=C(e);const a=K("svelte-1j2izld",document.head);_.l(a),o=O(a,"META",{name:!0,content:!0}),t=O(a,"META",{name:!0,content:!0}),u=T(),a.forEach(p),l=C(e),i=O(e,"H1",{class:!0});var d=P(i);A(m.$$.fragment,d),d.forEach(p),h=C(e),r&&r.l(e),f=T(),this.h()},h(){b(o,"name","twitter:card"),b(o,"content","summary"),b(t,"name","twitter:site"),b(t,"content","@evidence_dev"),b(i,"class","markdown")},m(e,a){v(e,n,a),_.m(document.head,null),Q(document.head,o),Q(document.head,t),Q(document.head,u),v(e,l,a),v(e,i,a),I(m,i,null),v(e,h,a),r&&r.m(e,a),v(e,f,a),y=!0},p(e,[a]){_.p(e,a);const d={};a&6&&(d.data=e[1].filter(e[4])),m.$set(d),e[0].races?r?(r.p(e,a),a&1&&g(r,1)):(r=F(e),r.c(),g(r,1),r.m(f.parentNode,f)):r&&(X(),q(r,1,1,()=>{r=null}),U())},i(e){y||(g(m.$$.fragment,e),g(r),y=!0)},o(e){q(m.$$.fragment,e),q(r),y=!1},d(e){e&&p(n),_.d(e),p(o),p(t),p(u),e&&p(l),e&&p(i),R(m),e&&p(h),r&&r.d(e),e&&p(f)}}}function te(s,n,o){let t,u;j(s,N,c=>o(6,t=c)),j(s,Y,c=>o(2,u=c));let{data:l}=n,{data:i={},customFormattingSettings:m}=l;D(N,t="94c87e86cd7d5229b522db63315cbd4e",t),J(B,{getCustomFormats:()=>m.customFormats||[]});const h=function(c){var _,r;let k=(_=c.evidencemeta)==null?void 0:_.queries;if(k)for(let e=0;e<k.length;e++){let a=c[k[e].id],d=(r=c.evidencemeta)==null?void 0:r.queries[e].columnTypes;for(let w=0;w<a.length;w++)d&&Object.defineProperty(a[w],"_evidenceColumnTypes",{enumerable:!1,value:d})}};L(()=>{h(i)});let{races:f}=i;const y=c=>c.year_race_name===u.params.year_race_name;return s.$$set=c=>{"data"in c&&o(3,l=c.data)},s.$$.update=()=>{s.$$.dirty&8&&o(0,{data:i={},customFormattingSettings:m}=l,i),s.$$.dirty&1&&(Object.keys(i).length>0?M.set(!0):M.set(!1)),s.$$.dirty&1&&o(1,{races:f}=i,f)},[i,f,u,l,y]}class le extends V{constructor(n){super(),z(this,n,te,ee,G,{data:3})}}export{le as default};
