import{S as B,i as J,s as V,a as E,e as p,b as H,t as N,c as T,h as W,d as _,f as c,g as S,j as O,k as n,m as f,n as b,o as x,p as X,q as Z,r as Y,u as $}from"./index.fa6138d3.js";import{p as tt}from"./stores.9315061c.js";import{s as et,Q as it,p as rt,r as g}from"./index.bca1a4ed.js";import{w as at}from"./paths.6977d179.js";import{I as ot,C as st}from"./globalContexts.8bcf5d41.js";import{p as lt}from"./profile.e7706513.js";function ct(d){let a,s=l.title+"",i;return{c(){a=p("h1"),i=N(s),this.h()},l(e){a=_(e,"H1",{class:!0});var o=S(a);i=O(o,s),o.forEach(c),this.h()},h(){n(a,"class","title")},m(e,o){f(e,a,o),b(a,i)},p:x,d(e){e&&c(a)}}}function nt(d){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:x,p:x,d:x}}function mt(d){let a,s,i,e,o;return document.title=a=l.title,{c(){s=E(),i=p("meta"),e=E(),o=p("meta"),this.h()},l(t){s=T(t),i=_(t,"META",{property:!0,content:!0}),e=T(t),o=_(t,"META",{name:!0,content:!0}),this.h()},h(){var t,r;n(i,"property","og:title"),n(i,"content",((t=l.og)==null?void 0:t.title)??l.title),n(o,"name","twitter:title"),n(o,"content",((r=l.og)==null?void 0:r.title)??l.title)},m(t,r){f(t,s,r),f(t,i,r),f(t,e,r),f(t,o,r)},p(t,r){r&0&&a!==(a=l.title)&&(document.title=a)},d(t){t&&c(s),t&&c(i),t&&c(e),t&&c(o)}}}function ut(d){var o,t;let a,s,i=(l.description||((o=l.og)==null?void 0:o.description))&&ft(),e=((t=l.og)==null?void 0:t.image)&&pt();return{c(){i&&i.c(),a=E(),e&&e.c(),s=H()},l(r){i&&i.l(r),a=T(r),e&&e.l(r),s=H()},m(r,m){i&&i.m(r,m),f(r,a,m),e&&e.m(r,m),f(r,s,m)},p(r,m){var A,v;(l.description||(A=l.og)!=null&&A.description)&&i.p(r,m),(v=l.og)!=null&&v.image&&e.p(r,m)},d(r){i&&i.d(r),r&&c(a),e&&e.d(r),r&&c(s)}}}function ft(d){let a,s,i,e,o;return{c(){a=p("meta"),s=E(),i=p("meta"),e=E(),o=p("meta"),this.h()},l(t){a=_(t,"META",{name:!0,content:!0}),s=T(t),i=_(t,"META",{property:!0,content:!0}),e=T(t),o=_(t,"META",{name:!0,content:!0}),this.h()},h(){var t,r,m;n(a,"name","description"),n(a,"content",l.description??((t=l.og)==null?void 0:t.description)),n(i,"property","og:description"),n(i,"content",((r=l.og)==null?void 0:r.description)??l.description),n(o,"name","twitter:description"),n(o,"content",((m=l.og)==null?void 0:m.description)??l.description)},m(t,r){f(t,a,r),f(t,s,r),f(t,i,r),f(t,e,r),f(t,o,r)},p:x,d(t){t&&c(a),t&&c(s),t&&c(i),t&&c(e),t&&c(o)}}}function pt(d){let a,s,i;return{c(){a=p("meta"),s=E(),i=p("meta"),this.h()},l(e){a=_(e,"META",{property:!0,content:!0}),s=T(e),i=_(e,"META",{name:!0,content:!0}),this.h()},h(){var e,o;n(a,"property","og:image"),n(a,"content",(e=l.og)==null?void 0:e.image),n(i,"name","twitter:image"),n(i,"content",(o=l.og)==null?void 0:o.image)},m(e,o){f(e,a,o),f(e,s,o),f(e,i,o)},p:x,d(e){e&&c(a),e&&c(s),e&&c(i)}}}function _t(d){let a,s,i,e,o,t,r,m,A,v,C,k,y,j,I,F,P,w=typeof l<"u"&&l.title&&l.hide_title!==!0&&ct();function z(u,h){return typeof l<"u"&&l.title?mt:nt}let q=z()(d),M=typeof l=="object"&&ut();return{c(){w&&w.c(),a=E(),q.c(),s=p("meta"),i=p("meta"),M&&M.c(),e=H(),o=E(),t=p("ul"),r=p("li"),m=p("a"),A=N("Sports Analytics Articles"),v=E(),C=p("li"),k=p("a"),y=N("Data"),j=E(),I=p("li"),F=p("a"),P=N("Programmer Libraries"),this.h()},l(u){w&&w.l(u),a=T(u);const h=W("svelte-1j2izld",document.head);q.l(h),s=_(h,"META",{name:!0,content:!0}),i=_(h,"META",{name:!0,content:!0}),M&&M.l(h),e=H(),h.forEach(c),o=T(u),t=_(u,"UL",{class:!0});var L=S(t);r=_(L,"LI",{class:!0});var Q=S(r);m=_(Q,"A",{href:!0,class:!0});var U=S(m);A=O(U,"Sports Analytics Articles"),U.forEach(c),Q.forEach(c),v=T(L),C=_(L,"LI",{class:!0});var D=S(C);k=_(D,"A",{href:!0,class:!0});var G=S(k);y=O(G,"Data"),G.forEach(c),D.forEach(c),j=T(L),I=_(L,"LI",{class:!0});var K=S(I);F=_(K,"A",{href:!0,class:!0});var R=S(F);P=O(R,"Programmer Libraries"),R.forEach(c),K.forEach(c),L.forEach(c),this.h()},h(){n(s,"name","twitter:card"),n(s,"content","summary"),n(i,"name","twitter:site"),n(i,"content","@evidence_dev"),n(m,"href","/resources/articles"),n(m,"class","markdown"),n(r,"class","markdown"),n(k,"href","/resources/data"),n(k,"class","markdown"),n(C,"class","markdown"),n(F,"href","/resources/libraries"),n(F,"class","markdown"),n(I,"class","markdown"),n(t,"class","markdown")},m(u,h){w&&w.m(u,h),f(u,a,h),q.m(document.head,null),b(document.head,s),b(document.head,i),M&&M.m(document.head,null),b(document.head,e),f(u,o,h),f(u,t,h),b(t,r),b(r,m),b(m,A),b(t,v),b(t,C),b(C,k),b(k,y),b(t,j),b(t,I),b(I,F),b(F,P)},p(u,[h]){typeof l<"u"&&l.title&&l.hide_title!==!0&&w.p(u,h),q.p(u,h),typeof l=="object"&&M.p(u,h)},i:x,o:x,d(u){w&&w.d(u),u&&c(a),q.d(u),c(s),c(i),M&&M.d(u),c(e),u&&c(o),u&&c(t)}}}const l={title:"Skrimmage - Resources"};function dt(d,a,s){var k;let i,e;X(d,tt,y=>s(2,i=y)),X(d,g,y=>s(8,e=y));let{data:o}=a,{data:t={},customFormattingSettings:r,__db:m,inputs:A}=o;Z(g,e="99e912a437a5f6bb24332b3308c69481",e);let v=at(A);return Y(ot,v),$(v.subscribe(y=>A=y)),Y(st,{getCustomFormats:()=>r.customFormats||[]}),et((y,j)=>lt(m.query,y,{query_name:j})),(k=import.meta)!=null&&k.hot&&(void 0).on("vite:afterUpdate",()=>{it.emptyCache()}),i.params,d.$$set=y=>{"data"in y&&s(0,o=y.data)},d.$$.update=()=>{d.$$.dirty&1&&s(1,{data:t={},customFormattingSettings:r,__db:m}=o,t),d.$$.dirty&2&&rt.set(Object.keys(t).length>0),d.$$.dirty&4&&i.params},[o,t,i]}class vt extends B{constructor(a){super(),J(this,a,dt,_t,V,{data:0})}}export{vt as default};
