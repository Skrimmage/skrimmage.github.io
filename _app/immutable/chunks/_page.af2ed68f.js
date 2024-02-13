import{S as g,i as B,s as J,d as v,e as p,f as P,h as F,j as T,k as V,l as d,m as c,n as S,o as H,p as n,r as f,v as h,w as j,x as W,y as Z,z as $,A as ee}from"./index.bcaf0f15.js";import"./paths.a4c8fce2.js";import{p as K,r as X}from"./inferColumnTypes.e7e215d0.js";import{C as te}from"./globalContexts.09a53420.js";function ie(b){let l,s=a.title+"",i;return{c(){l=p("h1"),i=F(s),this.h()},l(t){l=d(t,"H1",{class:!0});var o=S(l);i=H(o,s),o.forEach(c),this.h()},h(){n(l,"class","title")},m(t,o){f(t,l,o),h(l,i)},p:j,d(t){t&&c(l)}}}function re(b){return{c(){this.h()},l(l){this.h()},h(){document.title="Evidence"},m:j,p:j,d:j}}function le(b){let l,s,i,t,o;return document.title=l=a.title,{c(){s=v(),i=p("meta"),t=v(),o=p("meta"),this.h()},l(e){s=T(e),i=d(e,"META",{property:!0,content:!0}),t=T(e),o=d(e,"META",{name:!0,content:!0}),this.h()},h(){var e,r;n(i,"property","og:title"),n(i,"content",((e=a.og)==null?void 0:e.title)??a.title),n(o,"name","twitter:title"),n(o,"content",((r=a.og)==null?void 0:r.title)??a.title)},m(e,r){f(e,s,r),f(e,i,r),f(e,t,r),f(e,o,r)},p(e,r){r&0&&l!==(l=a.title)&&(document.title=l)},d(e){e&&c(s),e&&c(i),e&&c(t),e&&c(o)}}}function oe(b){var o,e;let l,s,i=(a.description||((o=a.og)==null?void 0:o.description))&&se(),t=((e=a.og)==null?void 0:e.image)&&ae();return{c(){i&&i.c(),l=v(),t&&t.c(),s=P()},l(r){i&&i.l(r),l=T(r),t&&t.l(r),s=P()},m(r,m){i&&i.m(r,m),f(r,l,m),t&&t.m(r,m),f(r,s,m)},p(r,m){var k,A;(a.description||(k=a.og)!=null&&k.description)&&i.p(r,m),(A=a.og)!=null&&A.image&&t.p(r,m)},d(r){i&&i.d(r),r&&c(l),t&&t.d(r),r&&c(s)}}}function se(b){let l,s,i,t,o;return{c(){l=p("meta"),s=v(),i=p("meta"),t=v(),o=p("meta"),this.h()},l(e){l=d(e,"META",{name:!0,content:!0}),s=T(e),i=d(e,"META",{property:!0,content:!0}),t=T(e),o=d(e,"META",{name:!0,content:!0}),this.h()},h(){var e,r,m;n(l,"name","description"),n(l,"content",a.description??((e=a.og)==null?void 0:e.description)),n(i,"property","og:description"),n(i,"content",((r=a.og)==null?void 0:r.description)??a.description),n(o,"name","twitter:description"),n(o,"content",((m=a.og)==null?void 0:m.description)??a.description)},m(e,r){f(e,l,r),f(e,s,r),f(e,i,r),f(e,t,r),f(e,o,r)},p:j,d(e){e&&c(l),e&&c(s),e&&c(i),e&&c(t),e&&c(o)}}}function ae(b){let l,s,i;return{c(){l=p("meta"),s=v(),i=p("meta"),this.h()},l(t){l=d(t,"META",{property:!0,content:!0}),s=T(t),i=d(t,"META",{name:!0,content:!0}),this.h()},h(){var t,o;n(l,"property","og:image"),n(l,"content",(t=a.og)==null?void 0:t.image),n(i,"name","twitter:image"),n(i,"content",(o=a.og)==null?void 0:o.image)},m(t,o){f(t,l,o),f(t,s,o),f(t,i,o)},p:j,d(t){t&&c(l),t&&c(s),t&&c(i)}}}function ce(b){let l,s,i,t,o,e,r,m,k,A,w,y,L,I,E,C,N,x=typeof a<"u"&&a.title&&a.hide_title!==!0&&ie();function Y(u,_){return typeof a<"u"&&a.title?le:re}let q=Y()(b),M=typeof a=="object"&&oe();return{c(){x&&x.c(),l=v(),q.c(),s=p("meta"),i=p("meta"),M&&M.c(),t=P(),o=v(),e=p("ul"),r=p("li"),m=p("a"),k=F("Sports Analytics Articles"),A=v(),w=p("li"),y=p("a"),L=F("Data"),I=v(),E=p("li"),C=p("a"),N=F("Programmer Libraries"),this.h()},l(u){x&&x.l(u),l=T(u);const _=V("svelte-1j2izld",document.head);q.l(_),s=d(_,"META",{name:!0,content:!0}),i=d(_,"META",{name:!0,content:!0}),M&&M.l(_),t=P(),_.forEach(c),o=T(u),e=d(u,"UL",{class:!0});var O=S(e);r=d(O,"LI",{class:!0});var U=S(r);m=d(U,"A",{href:!0,class:!0});var z=S(m);k=H(z,"Sports Analytics Articles"),z.forEach(c),U.forEach(c),A=T(O),w=d(O,"LI",{class:!0});var D=S(w);y=d(D,"A",{href:!0,class:!0});var G=S(y);L=H(G,"Data"),G.forEach(c),D.forEach(c),I=T(O),E=d(O,"LI",{class:!0});var Q=S(E);C=d(Q,"A",{href:!0,class:!0});var R=S(C);N=H(R,"Programmer Libraries"),R.forEach(c),Q.forEach(c),O.forEach(c),this.h()},h(){n(s,"name","twitter:card"),n(s,"content","summary"),n(i,"name","twitter:site"),n(i,"content","@evidence_dev"),n(m,"href","/resources/articles"),n(m,"class","markdown"),n(r,"class","markdown"),n(y,"href","/resources/data"),n(y,"class","markdown"),n(w,"class","markdown"),n(C,"href","/resources/libraries"),n(C,"class","markdown"),n(E,"class","markdown"),n(e,"class","markdown")},m(u,_){x&&x.m(u,_),f(u,l,_),q.m(document.head,null),h(document.head,s),h(document.head,i),M&&M.m(document.head,null),h(document.head,t),f(u,o,_),f(u,e,_),h(e,r),h(r,m),h(m,k),h(e,A),h(e,w),h(w,y),h(y,L),h(e,I),h(e,E),h(E,C),h(C,N)},p(u,[_]){typeof a<"u"&&a.title&&a.hide_title!==!0&&x.p(u,_),q.p(u,_),typeof a=="object"&&M.p(u,_)},i:j,o:j,d(u){x&&x.d(u),u&&c(l),q.d(u),c(s),c(i),M&&M.d(u),c(t),u&&c(o),u&&c(e)}}}const a={title:"Skrimmage - Resources"};function ne(b,l,s){let i;W(b,X,m=>s(3,i=m));let{data:t}=l,{data:o={},customFormattingSettings:e}=t;Z(X,i="99e912a437a5f6bb24332b3308c69481",i),$(te,{getCustomFormats:()=>e.customFormats||[]});const r=function(m){var A,w;let k=(A=m.evidencemeta)==null?void 0:A.queries;if(k)for(let y=0;y<k.length;y++){let L=m[k[y].id],I=(w=m.evidencemeta)==null?void 0:w.queries[y].columnTypes;for(let E=0;E<L.length;E++)I&&Object.defineProperty(L[E],"_evidenceColumnTypes",{enumerable:!1,value:I})}};return ee(()=>{r(o)}),b.$$set=m=>{"data"in m&&s(0,t=m.data)},b.$$.update=()=>{b.$$.dirty&1&&s(1,{data:o={},customFormattingSettings:e}=t,o),b.$$.dirty&2&&(Object.keys(o).length>0?K.set(!0):K.set(!1))},[t,o]}class _e extends g{constructor(l){super(),B(this,l,ne,ce,J,{data:0})}}export{_e as default};