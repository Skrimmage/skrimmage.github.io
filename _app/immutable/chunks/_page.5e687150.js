import{S as de,i as ye,s as ke,d as v,e as h,f as ee,h as M,K as F,j as E,k as be,l as w,m,n as H,o as q,L as K,p as n,r as p,v as b,M as L,t as P,b as I,N as he,O as z,x as we,y as ve,z as Ee,A as Te,w as G,P as Ae}from"./index.bcaf0f15.js";import"./paths.b93d6863.js";import{p as ce,r as pe}from"./inferColumnTypes.67c1368a.js";import{C as Me}from"./globalContexts.09a53420.js";import"./ecStat.5ec27988.js";import{Q as qe}from"./QueryViewer.f5ca48a4.js";import{D as Ce,C as V}from"./DataTable.55e78c01.js";function Pe($){let i,f=u.title+"",e;return{c(){i=h("h1"),e=M(f),this.h()},l(t){i=w(t,"H1",{class:!0});var s=H(i);e=q(s,f),s.forEach(m),this.h()},h(){n(i,"class","title")},m(t,s){p(t,i,s),b(i,e)},p:G,d(t){t&&m(i)}}}function Se($){return{c(){this.h()},l(i){this.h()},h(){document.title="Evidence"},m:G,p:G,d:G}}function je($){let i,f,e,t,s;return document.title=i=u.title,{c(){f=v(),e=h("meta"),t=v(),s=h("meta"),this.h()},l(l){f=E(l),e=w(l,"META",{property:!0,content:!0}),t=E(l),s=w(l,"META",{name:!0,content:!0}),this.h()},h(){var l,o;n(e,"property","og:title"),n(e,"content",((l=u.og)==null?void 0:l.title)??u.title),n(s,"name","twitter:title"),n(s,"content",((o=u.og)==null?void 0:o.title)??u.title)},m(l,o){p(l,f,o),p(l,e,o),p(l,t,o),p(l,s,o)},p(l,o){o&0&&i!==(i=u.title)&&(document.title=i)},d(l){l&&m(f),l&&m(e),l&&m(t),l&&m(s)}}}function Ne($){var s,l;let i,f,e=(u.description||((s=u.og)==null?void 0:s.description))&&He(),t=((l=u.og)==null?void 0:l.image)&&Ie();return{c(){e&&e.c(),i=v(),t&&t.c(),f=ee()},l(o){e&&e.l(o),i=E(o),t&&t.l(o),f=ee()},m(o,d){e&&e.m(o,d),p(o,i,d),t&&t.m(o,d),p(o,f,d)},p(o,d){var _,T;(u.description||(_=u.og)!=null&&_.description)&&e.p(o,d),(T=u.og)!=null&&T.image&&t.p(o,d)},d(o){e&&e.d(o),o&&m(i),t&&t.d(o),o&&m(f)}}}function He($){let i,f,e,t,s;return{c(){i=h("meta"),f=v(),e=h("meta"),t=v(),s=h("meta"),this.h()},l(l){i=w(l,"META",{name:!0,content:!0}),f=E(l),e=w(l,"META",{property:!0,content:!0}),t=E(l),s=w(l,"META",{name:!0,content:!0}),this.h()},h(){var l,o,d;n(i,"name","description"),n(i,"content",u.description??((l=u.og)==null?void 0:l.description)),n(e,"property","og:description"),n(e,"content",((o=u.og)==null?void 0:o.description)??u.description),n(s,"name","twitter:description"),n(s,"content",((d=u.og)==null?void 0:d.description)??u.description)},m(l,o){p(l,i,o),p(l,f,o),p(l,e,o),p(l,t,o),p(l,s,o)},p:G,d(l){l&&m(i),l&&m(f),l&&m(e),l&&m(t),l&&m(s)}}}function Ie($){let i,f,e;return{c(){i=h("meta"),f=v(),e=h("meta"),this.h()},l(t){i=w(t,"META",{property:!0,content:!0}),f=E(t),e=w(t,"META",{name:!0,content:!0}),this.h()},h(){var t,s;n(i,"property","og:image"),n(i,"content",(t=u.og)==null?void 0:t.image),n(e,"name","twitter:image"),n(e,"content",(s=u.og)==null?void 0:s.image)},m(t,s){p(t,i,s),p(t,f,s),p(t,e,s)},p:G,d(t){t&&m(i),t&&m(f),t&&m(e)}}}function _e($){let i,f;return i=new qe({props:{pageQueries:$[0].evidencemeta.queries,queryID:"metahockey",queryResult:$[0].metahockey}}),{c(){F(i.$$.fragment)},l(e){K(i.$$.fragment,e)},m(e,t){L(i,e,t),f=!0},p(e,t){const s={};t&1&&(s.pageQueries=e[0].evidencemeta.queries),t&1&&(s.queryResult=e[0].metahockey),i.$set(s)},i(e){f||(P(i.$$.fragment,e),f=!0)},o(e){I(i.$$.fragment,e),f=!1},d(e){z(i,e)}}}function Oe($){let i,f,e,t,s,l,o,d,_,T;return i=new V({props:{id:"Title",wrap:"true"}}),e=new V({props:{id:"Author",title:"Primary Author(s)",wrap:"true"}}),s=new V({props:{id:"Year"}}),o=new V({props:{id:"Source"}}),_=new V({props:{id:"Keywords",wrap:"true"}}),{c(){F(i.$$.fragment),f=v(),F(e.$$.fragment),t=v(),F(s.$$.fragment),l=v(),F(o.$$.fragment),d=v(),F(_.$$.fragment)},l(a){K(i.$$.fragment,a),f=E(a),K(e.$$.fragment,a),t=E(a),K(s.$$.fragment,a),l=E(a),K(o.$$.fragment,a),d=E(a),K(_.$$.fragment,a)},m(a,y){L(i,a,y),p(a,f,y),L(e,a,y),p(a,t,y),L(s,a,y),p(a,l,y),L(o,a,y),p(a,d,y),L(_,a,y),T=!0},p:G,i(a){T||(P(i.$$.fragment,a),P(e.$$.fragment,a),P(s.$$.fragment,a),P(o.$$.fragment,a),P(_.$$.fragment,a),T=!0)},o(a){I(i.$$.fragment,a),I(e.$$.fragment,a),I(s.$$.fragment,a),I(o.$$.fragment,a),I(_.$$.fragment,a),T=!1},d(a){z(i,a),a&&m(f),z(e,a),a&&m(t),z(s,a),a&&m(l),z(o,a),a&&m(d),z(_,a)}}}function Qe($){let i,f,e,t,s,l,o,d,_,T,a,y,O,U,g,A,te,X,S,re,Q,ie,le,B,R,J,D,Y,oe,W,j=typeof u<"u"&&u.title&&u.hide_title!==!0&&Pe();function $e(r,c){return typeof u<"u"&&u.title?je:Se}let x=$e()($),N=typeof u=="object"&&Ne(),k=$[0].metahockey&&_e($);return R=new Ce({props:{data:$[1],search:"true",rowShading:"true",rowLines:"false",rows:"10",link:"Link",openInNewTab:"true",$$slots:{default:[Oe]},$$scope:{ctx:$}}}),{c(){j&&j.c(),i=v(),x.c(),f=h("meta"),e=h("meta"),N&&N.c(),t=ee(),s=v(),k&&k.c(),l=v(),o=h("p"),d=M("If you have suggestions for articles to add to this repository, please open a "),_=h("a"),T=M("Pull Request"),a=M(", or "),y=h("a"),O=M("drop me an email"),U=M("."),g=v(),A=h("h2"),te=M("Hockey Articles"),X=v(),S=h("p"),re=M("These articles are provided from the "),Q=h("a"),ie=M("Metahockey"),le=M(" archive."),B=v(),F(R.$$.fragment),J=v(),D=h("p"),Y=h("em"),oe=M("Note: Click the row to navigate to the article."),this.h()},l(r){j&&j.l(r),i=E(r);const c=be("svelte-1j2izld",document.head);x.l(c),f=w(c,"META",{name:!0,content:!0}),e=w(c,"META",{name:!0,content:!0}),N&&N.l(c),t=ee(),c.forEach(m),s=E(r),k&&k.l(r),l=E(r),o=w(r,"P",{class:!0});var C=H(o);d=q(C,"If you have suggestions for articles to add to this repository, please open a "),_=w(C,"A",{href:!0,rel:!0,class:!0});var se=H(_);T=q(se,"Pull Request"),se.forEach(m),a=q(C,", or "),y=w(C,"A",{href:!0,class:!0});var ae=H(y);O=q(ae,"drop me an email"),ae.forEach(m),U=q(C,"."),C.forEach(m),g=E(r),A=w(r,"H2",{class:!0});var fe=H(A);te=q(fe,"Hockey Articles"),fe.forEach(m),X=E(r),S=w(r,"P",{class:!0});var Z=H(S);re=q(Z,"These articles are provided from the "),Q=w(Z,"A",{href:!0,rel:!0,class:!0});var me=H(Q);ie=q(me,"Metahockey"),me.forEach(m),le=q(Z," archive."),Z.forEach(m),B=E(r),K(R.$$.fragment,r),J=E(r),D=w(r,"P",{class:!0});var ne=H(D);Y=w(ne,"EM",{class:!0});var ue=H(Y);oe=q(ue,"Note: Click the row to navigate to the article."),ue.forEach(m),ne.forEach(m),this.h()},h(){n(f,"name","twitter:card"),n(f,"content","summary"),n(e,"name","twitter:site"),n(e,"content","@evidence_dev"),n(_,"href","https://github.com/Skrimmage/Data-Platform/tree/main/frontend/sources/articles"),n(_,"rel","nofollow"),n(_,"class","markdown"),n(y,"href","mailto:danny@skrimmage.com?subject=Articles"),n(y,"class","markdown"),n(o,"class","markdown"),n(A,"class","markdown"),n(Q,"href","https://metahockey.vercel.app/"),n(Q,"rel","nofollow"),n(Q,"class","markdown"),n(S,"class","markdown"),n(Y,"class","markdown"),n(D,"class","markdown")},m(r,c){j&&j.m(r,c),p(r,i,c),x.m(document.head,null),b(document.head,f),b(document.head,e),N&&N.m(document.head,null),b(document.head,t),p(r,s,c),k&&k.m(r,c),p(r,l,c),p(r,o,c),b(o,d),b(o,_),b(_,T),b(o,a),b(o,y),b(y,O),b(o,U),p(r,g,c),p(r,A,c),b(A,te),p(r,X,c),p(r,S,c),b(S,re),b(S,Q),b(Q,ie),b(S,le),p(r,B,c),L(R,r,c),p(r,J,c),p(r,D,c),b(D,Y),b(Y,oe),W=!0},p(r,[c]){typeof u<"u"&&u.title&&u.hide_title!==!0&&j.p(r,c),x.p(r,c),typeof u=="object"&&N.p(r,c),r[0].metahockey?k?(k.p(r,c),c&1&&P(k,1)):(k=_e(r),k.c(),P(k,1),k.m(l.parentNode,l)):k&&(Ae(),I(k,1,1,()=>{k=null}),he());const C={};c&2&&(C.data=r[1]),c&64&&(C.$$scope={dirty:c,ctx:r}),R.$set(C)},i(r){W||(P(k),P(R.$$.fragment,r),W=!0)},o(r){I(k),I(R.$$.fragment,r),W=!1},d(r){j&&j.d(r),r&&m(i),x.d(r),m(f),m(e),N&&N.d(r),m(t),r&&m(s),k&&k.d(r),r&&m(l),r&&m(o),r&&m(g),r&&m(A),r&&m(X),r&&m(S),r&&m(B),z(R,r),r&&m(J),r&&m(D)}}}const u={title:"Sports Analytics Articles"};function Re($,i,f){let e;we($,pe,_=>f(4,e=_));let{data:t}=i,{data:s={},customFormattingSettings:l}=t;ve(pe,e="4990f5b7b021b0296bd7d6b24fbd5bb6",e),Ee(Me,{getCustomFormats:()=>l.customFormats||[]});const o=function(_){var a,y;let T=(a=_.evidencemeta)==null?void 0:a.queries;if(T)for(let O=0;O<T.length;O++){let U=_[T[O].id],g=(y=_.evidencemeta)==null?void 0:y.queries[O].columnTypes;for(let A=0;A<U.length;A++)g&&Object.defineProperty(U[A],"_evidenceColumnTypes",{enumerable:!1,value:g})}};Te(()=>{o(s)});let{metahockey:d}=s;return $.$$set=_=>{"data"in _&&f(2,t=_.data)},$.$$.update=()=>{$.$$.dirty&4&&f(0,{data:s={},customFormattingSettings:l}=t,s),$.$$.dirty&1&&(Object.keys(s).length>0?ce.set(!0):ce.set(!1)),$.$$.dirty&1&&f(1,{metahockey:d}=s,d)},[s,d,t]}class Ye extends de{constructor(i){super(),ye(this,i,Re,Qe,ke,{data:2})}}export{Ye as default};
