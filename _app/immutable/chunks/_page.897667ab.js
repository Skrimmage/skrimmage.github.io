import{S as K,i as U,s as V,d as y,e as j,f as L,h as W,K as T,j as w,k as X,l as D,m as $,n as Y,o as x,L as g,p as A,r as _,v as H,M as q,t as d,b,N as B,O as C,x as J,y as Z,z as ee,A as te,w as S,P as re}from"./index.bcaf0f15.js";import"./paths.a4c8fce2.js";import{p as P,r as z}from"./inferColumnTypes.e7e215d0.js";import{C as se}from"./globalContexts.09a53420.js";import{L as ae,a as M}from"./Links.f93b64e1.js";import"./ecStat.2871719d.js";import{Q as ne}from"./QueryViewer.a0f457e6.js";import{D as le,C as h}from"./DataTable.77efee7f.js";function me(i){return{c(){this.h()},l(s){this.h()},h(){document.title="Evidence"},m:S,p:S,d:S}}function G(i){let s,n;return s=new ne({props:{pageQueries:i[0].evidencemeta.queries,queryID:"all_races",queryResult:i[0].all_races}}),{c(){T(s.$$.fragment)},l(r){g(s.$$.fragment,r)},m(r,m){q(s,r,m),n=!0},p(r,m){const a={};m&1&&(a.pageQueries=r[0].evidencemeta.queries),m&1&&(a.queryResult=r[0].all_races),s.$set(a)},i(r){n||(d(s.$$.fragment,r),n=!0)},o(r){b(s.$$.fragment,r),n=!1},d(r){C(s,r)}}}function ie(i){let s,n,r,m,a,f;return s=new h({props:{id:"name",title:"Name"}}),r=new h({props:{id:"date",title:"Date"}}),a=new h({props:{id:"url",title:"Wikipedia",contentType:"link",openInNewTab:"true"}}),{c(){T(s.$$.fragment),n=y(),T(r.$$.fragment),m=y(),T(a.$$.fragment)},l(e){g(s.$$.fragment,e),n=w(e),g(r.$$.fragment,e),m=w(e),g(a.$$.fragment,e)},m(e,u){q(s,e,u),_(e,n,u),q(r,e,u),_(e,m,u),q(a,e,u),f=!0},p:S,i(e){f||(d(s.$$.fragment,e),d(r.$$.fragment,e),d(a.$$.fragment,e),f=!0)},o(e){b(s.$$.fragment,e),b(r.$$.fragment,e),b(a.$$.fragment,e),f=!1},d(e){C(s,e),e&&$(n),C(r,e),e&&$(m),C(a,e)}}}function fe(i){let s,n,r,m,a,f;return s=new M({props:{dest:"/sports/F1/drivers/",text:"Drivers"}}),r=new M({props:{dest:"/sports/F1/races/",text:"Races"}}),a=new M({props:{dest:"/sports/F1/circuits/",text:"Circuits"}}),{c(){T(s.$$.fragment),n=y(),T(r.$$.fragment),m=y(),T(a.$$.fragment)},l(e){g(s.$$.fragment,e),n=w(e),g(r.$$.fragment,e),m=w(e),g(a.$$.fragment,e)},m(e,u){q(s,e,u),_(e,n,u),q(r,e,u),_(e,m,u),q(a,e,u),f=!0},p:S,i(e){f||(d(s.$$.fragment,e),d(r.$$.fragment,e),d(a.$$.fragment,e),f=!0)},o(e){b(s.$$.fragment,e),b(r.$$.fragment,e),b(a.$$.fragment,e),f=!1},d(e){C(s,e),e&&$(n),C(r,e),e&&$(m),C(a,e)}}}function ue(i){let s,n,r,m,a,f,e,u,p,c,F,E,v,k,N;function O(t,l){return me}let Q=O()(i),o=i[0].all_races&&G(i);return c=new le({props:{data:i[1],search:"true",link:"race_link",rows:"20",$$slots:{default:[ie]},$$scope:{ctx:i}}}),k=new ae({props:{$$slots:{default:[fe]},$$scope:{ctx:i}}}),{c(){s=y(),Q.c(),n=j("meta"),r=j("meta"),m=L(),a=y(),f=j("h2"),e=W("All Races"),u=y(),o&&o.c(),p=y(),T(c.$$.fragment),F=y(),E=j("hr"),v=y(),T(k.$$.fragment),this.h()},l(t){s=w(t);const l=X("svelte-1j2izld",document.head);Q.l(l),n=D(l,"META",{name:!0,content:!0}),r=D(l,"META",{name:!0,content:!0}),m=L(),l.forEach($),a=w(t),f=D(t,"H2",{class:!0});var R=Y(f);e=x(R,"All Races"),R.forEach($),u=w(t),o&&o.l(t),p=w(t),g(c.$$.fragment,t),F=w(t),E=D(t,"HR",{class:!0}),v=w(t),g(k.$$.fragment,t),this.h()},h(){A(n,"name","twitter:card"),A(n,"content","summary"),A(r,"name","twitter:site"),A(r,"content","@evidence_dev"),A(f,"class","markdown"),A(E,"class","markdown")},m(t,l){_(t,s,l),Q.m(document.head,null),H(document.head,n),H(document.head,r),H(document.head,m),_(t,a,l),_(t,f,l),H(f,e),_(t,u,l),o&&o.m(t,l),_(t,p,l),q(c,t,l),_(t,F,l),_(t,E,l),_(t,v,l),q(k,t,l),N=!0},p(t,[l]){Q.p(t,l),t[0].all_races?o?(o.p(t,l),l&1&&d(o,1)):(o=G(t),o.c(),d(o,1),o.m(p.parentNode,p)):o&&(re(),b(o,1,1,()=>{o=null}),B());const R={};l&2&&(R.data=t[1]),l&64&&(R.$$scope={dirty:l,ctx:t}),c.$set(R);const I={};l&64&&(I.$$scope={dirty:l,ctx:t}),k.$set(I)},i(t){N||(d(o),d(c.$$.fragment,t),d(k.$$.fragment,t),N=!0)},o(t){b(o),b(c.$$.fragment,t),b(k.$$.fragment,t),N=!1},d(t){t&&$(s),Q.d(t),$(n),$(r),$(m),t&&$(a),t&&$(f),t&&$(u),o&&o.d(t),t&&$(p),C(c,t),t&&$(F),t&&$(E),t&&$(v),C(k,t)}}}function oe(i,s,n){let r;J(i,z,p=>n(4,r=p));let{data:m}=s,{data:a={},customFormattingSettings:f}=m;Z(z,r="d0e42fc68cb28f9dee425a9b8f386bbc",r),ee(se,{getCustomFormats:()=>f.customFormats||[]});const e=function(p){var F,E;let c=(F=p.evidencemeta)==null?void 0:F.queries;if(c)for(let v=0;v<c.length;v++){let k=p[c[v].id],N=(E=p.evidencemeta)==null?void 0:E.queries[v].columnTypes;for(let O=0;O<k.length;O++)N&&Object.defineProperty(k[O],"_evidenceColumnTypes",{enumerable:!1,value:N})}};te(()=>{e(a)});let{all_races:u}=a;return i.$$set=p=>{"data"in p&&n(2,m=p.data)},i.$$.update=()=>{i.$$.dirty&4&&n(0,{data:a={},customFormattingSettings:f}=m,a),i.$$.dirty&1&&(Object.keys(a).length>0?P.set(!0):P.set(!1)),i.$$.dirty&1&&n(1,{all_races:u}=a,u)},[a,u,m]}class ve extends K{constructor(s){super(),U(this,s,oe,ue,V,{data:2})}}export{ve as default};