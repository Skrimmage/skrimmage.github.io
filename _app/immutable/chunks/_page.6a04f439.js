import{S as W,i as X,s as Y,d as T,e as v,f as F,K as M,j as g,k as B,l as w,m as a,n as L,L as A,p as y,r as d,v as H,M as j,t as E,b as h,N as J,O as N,x as V,y as Z,z as x,A as ee,h as te,o as ie,w as R,P as re}from"./index.b1cc14d6.js";import{p as ne}from"./stores.ba2acd3e.js";import{p as z,r as G}from"./inferColumnTypes.b29b4717.js";import{C as le}from"./globalContexts.09a53420.js";import"./ecStat.140e6e58.js";import"./paths.e2a3e3cc.js";import{Q as oe}from"./checkInputs.1ecf43d2.js";import{V as fe}from"./Value.c83d4480.js";import{D as se,C as U}from"./DataTable.28db7164.js";function ue(c){var r;let i,s=(u.title??((r=u.og)==null?void 0:r.title))+"",e;return{c(){i=v("h1"),e=te(s),this.h()},l(n){i=w(n,"H1",{class:!0});var l=L(i);e=ie(l,s),l.forEach(a),this.h()},h(){y(i,"class","title")},m(n,l){d(n,i,l),H(i,e)},p:R,d(n){n&&a(i)}}}function me(c){return{c(){this.h()},l(i){this.h()},h(){document.title="Evidence"},m:R,p:R,d:R}}function ae(c){var l;let i,s,e,r,n;return document.title=i=u.title??((l=u.og)==null?void 0:l.title),{c(){s=T(),e=v("meta"),r=T(),n=v("meta"),this.h()},l(t){s=g(t),e=w(t,"META",{property:!0,content:!0}),r=g(t),n=w(t,"META",{name:!0,content:!0}),this.h()},h(){var t,m;y(e,"property","og:title"),y(e,"content",((t=u.og)==null?void 0:t.title)??u.title),y(n,"name","twitter:title"),y(n,"content",((m=u.og)==null?void 0:m.title)??u.title)},m(t,m){d(t,s,m),d(t,e,m),d(t,r,m),d(t,n,m)},p(t,m){var f;m&0&&i!==(i=u.title??((f=u.og)==null?void 0:f.title))&&(document.title=i)},d(t){t&&a(s),t&&a(e),t&&a(r),t&&a(n)}}}function ce(c){var n,l;let i,s,e=(u.description||((n=u.og)==null?void 0:n.description))&&pe(),r=((l=u.og)==null?void 0:l.image)&&_e();return{c(){e&&e.c(),i=T(),r&&r.c(),s=F()},l(t){e&&e.l(t),i=g(t),r&&r.l(t),s=F()},m(t,m){e&&e.m(t,m),d(t,i,m),r&&r.m(t,m),d(t,s,m)},p(t,m){var f,b;(u.description||(f=u.og)!=null&&f.description)&&e.p(t,m),(b=u.og)!=null&&b.image&&r.p(t,m)},d(t){e&&e.d(t),t&&a(i),r&&r.d(t),t&&a(s)}}}function pe(c){let i,s,e,r,n;return{c(){i=v("meta"),s=T(),e=v("meta"),r=T(),n=v("meta"),this.h()},l(l){i=w(l,"META",{name:!0,content:!0}),s=g(l),e=w(l,"META",{property:!0,content:!0}),r=g(l),n=w(l,"META",{name:!0,content:!0}),this.h()},h(){var l,t,m;y(i,"name","description"),y(i,"content",u.description??((l=u.og)==null?void 0:l.description)),y(e,"property","og:description"),y(e,"content",((t=u.og)==null?void 0:t.description)??u.description),y(n,"name","twitter:description"),y(n,"content",((m=u.og)==null?void 0:m.description)??u.description)},m(l,t){d(l,i,t),d(l,s,t),d(l,e,t),d(l,r,t),d(l,n,t)},p:R,d(l){l&&a(i),l&&a(s),l&&a(e),l&&a(r),l&&a(n)}}}function _e(c){let i,s,e;return{c(){i=v("meta"),s=T(),e=v("meta"),this.h()},l(r){i=w(r,"META",{property:!0,content:!0}),s=g(r),e=w(r,"META",{name:!0,content:!0}),this.h()},h(){var r,n;y(i,"property","og:image"),y(i,"content",(r=u.og)==null?void 0:r.image),y(e,"name","twitter:image"),y(e,"content",(n=u.og)==null?void 0:n.image)},m(r,n){d(r,i,n),d(r,s,n),d(r,e,n)},p:R,d(r){r&&a(i),r&&a(s),r&&a(e)}}}function K(c){let i,s;return i=new oe({props:{pageQueries:c[0].evidencemeta.queries,queryID:"circuits",queryResult:c[0].circuits}}),{c(){M(i.$$.fragment)},l(e){A(i.$$.fragment,e)},m(e,r){j(i,e,r),s=!0},p(e,r){const n={};r&1&&(n.pageQueries=e[0].evidencemeta.queries),r&1&&(n.queryResult=e[0].circuits),i.$set(n)},i(e){s||(E(i.$$.fragment,e),s=!0)},o(e){h(i.$$.fragment,e),s=!1},d(e){N(i,e)}}}function $e(c){let i,s,e,r,n,l,t,m;return i=new U({props:{id:"name",title:"Name"}}),e=new U({props:{id:"location",title:"Location"}}),n=new U({props:{id:"country",title:"Country"}}),t=new U({props:{id:"url",title:"Wikipedia",contentType:"link",openInNewTab:"true"}}),{c(){M(i.$$.fragment),s=T(),M(e.$$.fragment),r=T(),M(n.$$.fragment),l=T(),M(t.$$.fragment)},l(f){A(i.$$.fragment,f),s=g(f),A(e.$$.fragment,f),r=g(f),A(n.$$.fragment,f),l=g(f),A(t.$$.fragment,f)},m(f,b){j(i,f,b),d(f,s,b),j(e,f,b),d(f,r,b),j(n,f,b),d(f,l,b),j(t,f,b),m=!0},p:R,i(f){m||(E(i.$$.fragment,f),E(e.$$.fragment,f),E(n.$$.fragment,f),E(t.$$.fragment,f),m=!0)},o(f){h(i.$$.fragment,f),h(e.$$.fragment,f),h(n.$$.fragment,f),h(t.$$.fragment,f),m=!1},d(f){N(i,f),f&&a(s),N(e,f),f&&a(r),N(n,f),f&&a(l),N(t,f)}}}function de(c){var S;let i,s,e,r,n,l,t,m,f,b,O,_=typeof u<"u"&&(u.title||((S=u.og)==null?void 0:S.title))&&u.hide_title!==!0&&ue();function Q(o,p){var q;return typeof u<"u"&&(u.title||(q=u.og)!=null&&q.title)?ae:me}let C=Q()(c),k=typeof u=="object"&&ce(),$=c[0].circuits&&K(c);return m=new fe({props:{data:c[1].filter(c[4]),column:"name"}}),b=new se({props:{data:c[1].filter(c[5]),$$slots:{default:[$e]},$$scope:{ctx:c}}}),{c(){_&&_.c(),i=T(),C.c(),s=v("meta"),e=v("meta"),k&&k.c(),r=F(),n=T(),$&&$.c(),l=T(),t=v("h1"),M(m.$$.fragment),f=T(),M(b.$$.fragment),this.h()},l(o){_&&_.l(o),i=g(o);const p=B("svelte-1j2izld",document.head);C.l(p),s=w(p,"META",{name:!0,content:!0}),e=w(p,"META",{name:!0,content:!0}),k&&k.l(p),r=F(),p.forEach(a),n=g(o),$&&$.l(o),l=g(o),t=w(o,"H1",{class:!0});var q=L(t);A(m.$$.fragment,q),q.forEach(a),f=g(o),A(b.$$.fragment,o),this.h()},h(){y(s,"name","twitter:card"),y(s,"content","summary"),y(e,"name","twitter:site"),y(e,"content","@evidence_dev"),y(t,"class","markdown")},m(o,p){_&&_.m(o,p),d(o,i,p),C.m(document.head,null),H(document.head,s),H(document.head,e),k&&k.m(document.head,null),H(document.head,r),d(o,n,p),$&&$.m(o,p),d(o,l,p),d(o,t,p),j(m,t,null),d(o,f,p),j(b,o,p),O=!0},p(o,[p]){var P;typeof u<"u"&&(u.title||(P=u.og)!=null&&P.title)&&u.hide_title!==!0&&_.p(o,p),C.p(o,p),typeof u=="object"&&k.p(o,p),o[0].circuits?$?($.p(o,p),p&1&&E($,1)):($=K(o),$.c(),E($,1),$.m(l.parentNode,l)):$&&(re(),h($,1,1,()=>{$=null}),J());const q={};p&6&&(q.data=o[1].filter(o[4])),m.$set(q);const D={};p&6&&(D.data=o[1].filter(o[5])),p&512&&(D.$$scope={dirty:p,ctx:o}),b.$set(D)},i(o){O||(E($),E(m.$$.fragment,o),E(b.$$.fragment,o),O=!0)},o(o){h($),h(m.$$.fragment,o),h(b.$$.fragment,o),O=!1},d(o){_&&_.d(o),o&&a(i),C.d(o),a(s),a(e),k&&k.d(o),a(r),o&&a(n),$&&$.d(o),o&&a(l),o&&a(t),N(m),o&&a(f),N(b,o)}}}const u={sources:[{circuits:"f1/circuits.sql"}]};function be(c,i,s){let e,r;V(c,G,_=>s(7,e=_)),V(c,ne,_=>s(2,r=_));let{data:n}=i,{data:l={},customFormattingSettings:t}=n;Z(G,e="5185e0f518fc0d666f02a200ba95960c",e),x(le,{getCustomFormats:()=>t.customFormats||[]});const m=function(_){var I,C;let Q=(I=_.evidencemeta)==null?void 0:I.queries;if(Q)for(let k=0;k<Q.length;k++){let $=_[Q[k].id],S=(C=_.evidencemeta)==null?void 0:C.queries[k].columnTypes;for(let o=0;o<$.length;o++)S&&Object.defineProperty($[o],"_evidenceColumnTypes",{enumerable:!1,value:S})}};ee(()=>{m(l)});let{circuits:f}=l;const b=_=>_.circuitRef.toUpperCase()===r.params.circuitRef.toUpperCase(),O=_=>_.circuitRef.toUpperCase()===r.params.circuitRef.toUpperCase();return c.$$set=_=>{"data"in _&&s(3,n=_.data)},c.$$.update=()=>{c.$$.dirty&8&&s(0,{data:l={},customFormattingSettings:t}=n,l),c.$$.dirty&1&&(Object.keys(l).length>0?z.set(!0):z.set(!1)),c.$$.dirty&1&&s(1,{circuits:f}=l,f)},[l,f,r,n,b,O]}class qe extends W{constructor(i){super(),X(this,i,be,de,Y,{data:3})}}export{qe as default};
