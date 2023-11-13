import{S as Y,i as B,s as J,d,e as v,f as x,h,K as M,j as y,k as Z,l as E,m as u,n as V,o as W,L as A,p as k,r as p,v as D,M as F,t as w,b as C,N as ee,O as g,x as te,y as ie,z as re,A as fe,w as H,P as ne}from"./index.ca99e618.js";import"./paths.0fa0af0a.js";import{p as G,r as K}from"./inferColumnTypes.39cd523d.js";import{C as se}from"./globalContexts.09a53420.js";import{L as le,a as P}from"./Links.71633fb6.js";import"./ecStat.952a904b.js";import{Q as me}from"./QueryViewer.6a958d9b.js";import{D as ue,C as I}from"./DataTable.5f8b7c91.js";function oe($){let i,m=o.title+"",t;return{c(){i=v("h1"),t=h(m),this.h()},l(r){i=E(r,"H1",{class:!0});var n=V(i);t=W(n,m),n.forEach(u),this.h()},h(){k(i,"class","title")},m(r,n){p(r,i,n),D(i,t)},p:H,d(r){r&&u(i)}}}function ce($){return{c(){this.h()},l(i){this.h()},h(){document.title="Evidence"},m:H,p:H,d:H}}function ae($){let i,m,t,r,n;return document.title=i=o.title,{c(){m=d(),t=v("meta"),r=d(),n=v("meta"),this.h()},l(f){m=y(f),t=E(f,"META",{property:!0,content:!0}),r=y(f),n=E(f,"META",{name:!0,content:!0}),this.h()},h(){var f,e;k(t,"property","og:title"),k(t,"content",((f=o.og)==null?void 0:f.title)??o.title),k(n,"name","twitter:title"),k(n,"content",((e=o.og)==null?void 0:e.title)??o.title)},m(f,e){p(f,m,e),p(f,t,e),p(f,r,e),p(f,n,e)},p(f,e){e&0&&i!==(i=o.title)&&(document.title=i)},d(f){f&&u(m),f&&u(t),f&&u(r),f&&u(n)}}}function pe($){var n,f;let i,m,t=(o.description||((n=o.og)==null?void 0:n.description))&&$e(),r=((f=o.og)==null?void 0:f.image)&&_e();return{c(){t&&t.c(),i=d(),r&&r.c(),m=x()},l(e){t&&t.l(e),i=y(e),r&&r.l(e),m=x()},m(e,a){t&&t.m(e,a),p(e,i,a),r&&r.m(e,a),p(e,m,a)},p(e,a){var l,_;(o.description||(l=o.og)!=null&&l.description)&&t.p(e,a),(_=o.og)!=null&&_.image&&r.p(e,a)},d(e){t&&t.d(e),e&&u(i),r&&r.d(e),e&&u(m)}}}function $e($){let i,m,t,r,n;return{c(){i=v("meta"),m=d(),t=v("meta"),r=d(),n=v("meta"),this.h()},l(f){i=E(f,"META",{name:!0,content:!0}),m=y(f),t=E(f,"META",{property:!0,content:!0}),r=y(f),n=E(f,"META",{name:!0,content:!0}),this.h()},h(){var f,e,a;k(i,"name","description"),k(i,"content",o.description??((f=o.og)==null?void 0:f.description)),k(t,"property","og:description"),k(t,"content",((e=o.og)==null?void 0:e.description)??o.description),k(n,"name","twitter:description"),k(n,"content",((a=o.og)==null?void 0:a.description)??o.description)},m(f,e){p(f,i,e),p(f,m,e),p(f,t,e),p(f,r,e),p(f,n,e)},p:H,d(f){f&&u(i),f&&u(m),f&&u(t),f&&u(r),f&&u(n)}}}function _e($){let i,m,t;return{c(){i=v("meta"),m=d(),t=v("meta"),this.h()},l(r){i=E(r,"META",{property:!0,content:!0}),m=y(r),t=E(r,"META",{name:!0,content:!0}),this.h()},h(){var r,n;k(i,"property","og:image"),k(i,"content",(r=o.og)==null?void 0:r.image),k(t,"name","twitter:image"),k(t,"content",(n=o.og)==null?void 0:n.image)},m(r,n){p(r,i,n),p(r,m,n),p(r,t,n)},p:H,d(r){r&&u(i),r&&u(m),r&&u(t)}}}function U($){let i,m;return i=new me({props:{pageQueries:$[0].evidencemeta.queries,queryID:"circuits",queryResult:$[0].circuits}}),{c(){M(i.$$.fragment)},l(t){A(i.$$.fragment,t)},m(t,r){F(i,t,r),m=!0},p(t,r){const n={};r&1&&(n.pageQueries=t[0].evidencemeta.queries),r&1&&(n.queryResult=t[0].circuits),i.$set(n)},i(t){m||(w(i.$$.fragment,t),m=!0)},o(t){C(i.$$.fragment,t),m=!1},d(t){g(i,t)}}}function ke($){let i,m,t,r,n,f,e,a;return i=new I({props:{id:"name",title:"Name"}}),t=new I({props:{id:"location",title:"Location"}}),n=new I({props:{id:"country",title:"Country"}}),e=new I({props:{id:"url",title:"Wikipedia",contentType:"link",openInNewTab:"true"}}),{c(){M(i.$$.fragment),m=d(),M(t.$$.fragment),r=d(),M(n.$$.fragment),f=d(),M(e.$$.fragment)},l(l){A(i.$$.fragment,l),m=y(l),A(t.$$.fragment,l),r=y(l),A(n.$$.fragment,l),f=y(l),A(e.$$.fragment,l)},m(l,_){F(i,l,_),p(l,m,_),F(t,l,_),p(l,r,_),F(n,l,_),p(l,f,_),F(e,l,_),a=!0},p:H,i(l){a||(w(i.$$.fragment,l),w(t.$$.fragment,l),w(n.$$.fragment,l),w(e.$$.fragment,l),a=!0)},o(l){C(i.$$.fragment,l),C(t.$$.fragment,l),C(n.$$.fragment,l),C(e.$$.fragment,l),a=!1},d(l){g(i,l),l&&u(m),g(t,l),l&&u(r),g(n,l),l&&u(f),g(e,l)}}}function be($){let i,m,t,r,n,f;return i=new P({props:{dest:"/sports/F1/drivers/",text:"Drivers"}}),t=new P({props:{dest:"/sports/F1/races/",text:"Races"}}),n=new P({props:{dest:"/sports/F1/circuits/",text:"Circuits"}}),{c(){M(i.$$.fragment),m=d(),M(t.$$.fragment),r=d(),M(n.$$.fragment)},l(e){A(i.$$.fragment,e),m=y(e),A(t.$$.fragment,e),r=y(e),A(n.$$.fragment,e)},m(e,a){F(i,e,a),p(e,m,a),F(t,e,a),p(e,r,a),F(n,e,a),f=!0},p:H,i(e){f||(w(i.$$.fragment,e),w(t.$$.fragment,e),w(n.$$.fragment,e),f=!0)},o(e){C(i.$$.fragment,e),C(t.$$.fragment,e),C(n.$$.fragment,e),f=!1},d(e){g(i,e),e&&u(m),g(t,e),e&&u(r),g(n,e)}}}function de($){let i,m,t,r,n,f,e,a,l,_,O,N,j,q,Q,T=typeof o<"u"&&o.title&&o.hide_title!==!0&&oe();function X(s,c){return typeof o<"u"&&o.title?ae:ce}let R=X()($),L=typeof o=="object"&&pe(),b=$[0].circuits&&U($);return _=new ue({props:{data:$[1],search:"true",link:"circuit_link",$$slots:{default:[ke]},$$scope:{ctx:$}}}),q=new le({props:{$$slots:{default:[be]},$$scope:{ctx:$}}}),{c(){T&&T.c(),i=d(),R.c(),m=v("meta"),t=v("meta"),L&&L.c(),r=x(),n=d(),b&&b.c(),f=d(),e=v("h2"),a=h("List of Circuits"),l=d(),M(_.$$.fragment),O=d(),N=v("hr"),j=d(),M(q.$$.fragment),this.h()},l(s){T&&T.l(s),i=y(s);const c=Z("svelte-1j2izld",document.head);R.l(c),m=E(c,"META",{name:!0,content:!0}),t=E(c,"META",{name:!0,content:!0}),L&&L.l(c),r=x(),c.forEach(u),n=y(s),b&&b.l(s),f=y(s),e=E(s,"H2",{class:!0});var S=V(e);a=W(S,"List of Circuits"),S.forEach(u),l=y(s),A(_.$$.fragment,s),O=y(s),N=E(s,"HR",{class:!0}),j=y(s),A(q.$$.fragment,s),this.h()},h(){k(m,"name","twitter:card"),k(m,"content","summary"),k(t,"name","twitter:site"),k(t,"content","@evidence_dev"),k(e,"class","markdown"),k(N,"class","markdown")},m(s,c){T&&T.m(s,c),p(s,i,c),R.m(document.head,null),D(document.head,m),D(document.head,t),L&&L.m(document.head,null),D(document.head,r),p(s,n,c),b&&b.m(s,c),p(s,f,c),p(s,e,c),D(e,a),p(s,l,c),F(_,s,c),p(s,O,c),p(s,N,c),p(s,j,c),F(q,s,c),Q=!0},p(s,[c]){typeof o<"u"&&o.title&&o.hide_title!==!0&&T.p(s,c),R.p(s,c),typeof o=="object"&&L.p(s,c),s[0].circuits?b?(b.p(s,c),c&1&&w(b,1)):(b=U(s),b.c(),w(b,1),b.m(f.parentNode,f)):b&&(ne(),C(b,1,1,()=>{b=null}),ee());const S={};c&2&&(S.data=s[1]),c&64&&(S.$$scope={dirty:c,ctx:s}),_.$set(S);const z={};c&64&&(z.$$scope={dirty:c,ctx:s}),q.$set(z)},i(s){Q||(w(b),w(_.$$.fragment,s),w(q.$$.fragment,s),Q=!0)},o(s){C(b),C(_.$$.fragment,s),C(q.$$.fragment,s),Q=!1},d(s){T&&T.d(s),s&&u(i),R.d(s),u(m),u(t),L&&L.d(s),u(r),s&&u(n),b&&b.d(s),s&&u(f),s&&u(e),s&&u(l),g(_,s),s&&u(O),s&&u(N),s&&u(j),g(q,s)}}}const o={title:"F1 Circuits",sources:[{circuits:"f1/circuits.sql"}]};function ye($,i,m){let t;te($,K,l=>m(4,t=l));let{data:r}=i,{data:n={},customFormattingSettings:f}=r;ie(K,t="cfc2f25c5b2a0f317736913045d83941",t),re(se,{getCustomFormats:()=>f.customFormats||[]});const e=function(l){var O,N;let _=(O=l.evidencemeta)==null?void 0:O.queries;if(_)for(let j=0;j<_.length;j++){let q=l[_[j].id],Q=(N=l.evidencemeta)==null?void 0:N.queries[j].columnTypes;for(let T=0;T<q.length;T++)Q&&Object.defineProperty(q[T],"_evidenceColumnTypes",{enumerable:!1,value:Q})}};fe(()=>{e(n)});let{circuits:a}=n;return $.$$set=l=>{"data"in l&&m(2,r=l.data)},$.$$.update=()=>{$.$$.dirty&4&&m(0,{data:n={},customFormattingSettings:f}=r,n),$.$$.dirty&1&&(Object.keys(n).length>0?G.set(!0):G.set(!1)),$.$$.dirty&1&&m(1,{circuits:a}=n,a)},[n,a,r]}class ge extends Y{constructor(i){super(),B(this,i,ye,de,J,{data:2})}}export{ge as default};
