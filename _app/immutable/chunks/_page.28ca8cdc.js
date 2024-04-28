import{S as zt,i as Jt,s as Zt,a as w,e as s,b as Ue,t as h,c as E,h as $t,d as r,f as l,g as n,j as _,k as t,m as k,n as e,o as P,p as Vt,q as el,r as Wt,u as tl}from"./index.fa6138d3.js";import{p as ll}from"./stores.aec5ed3f.js";import{s as al,Q as sl,p as rl,r as Xt}from"./index.88a05492.js";import{w as il}from"./paths.b9402b61.js";import{I as ol,C as cl}from"./globalContexts.8bcf5d41.js";import{p as nl}from"./profile.e7706513.js";function ul(L){let u,m=p.title+"",o;return{c(){u=s("h1"),o=h(m),this.h()},l(i){u=r(i,"H1",{class:!0});var d=n(u);o=_(d,m),d.forEach(l),this.h()},h(){t(u,"class","title")},m(i,d){k(i,u,d),e(u,o)},p:P,d(i){i&&l(u)}}}function fl(L){return{c(){this.h()},l(u){this.h()},h(){document.title="Evidence"},m:P,p:P,d:P}}function dl(L){let u,m,o,i,d;return document.title=u=p.title,{c(){m=w(),o=s("meta"),i=w(),d=s("meta"),this.h()},l(a){m=E(a),o=r(a,"META",{property:!0,content:!0}),i=E(a),d=r(a,"META",{name:!0,content:!0}),this.h()},h(){var a,c;t(o,"property","og:title"),t(o,"content",((a=p.og)==null?void 0:a.title)??p.title),t(d,"name","twitter:title"),t(d,"content",((c=p.og)==null?void 0:c.title)??p.title)},m(a,c){k(a,m,c),k(a,o,c),k(a,i,c),k(a,d,c)},p(a,c){c&0&&u!==(u=p.title)&&(document.title=u)},d(a){a&&l(m),a&&l(o),a&&l(i),a&&l(d)}}}function ml(L){var d,a;let u,m,o=(p.description||((d=p.og)==null?void 0:d.description))&&hl(),i=((a=p.og)==null?void 0:a.image)&&_l();return{c(){o&&o.c(),u=w(),i&&i.c(),m=Ue()},l(c){o&&o.l(c),u=E(c),i&&i.l(c),m=Ue()},m(c,b){o&&o.m(c,b),k(c,u,b),i&&i.m(c,b),k(c,m,b)},p(c,b){var I,y;(p.description||(I=p.og)!=null&&I.description)&&o.p(c,b),(y=p.og)!=null&&y.image&&i.p(c,b)},d(c){o&&o.d(c),c&&l(u),i&&i.d(c),c&&l(m)}}}function hl(L){let u,m,o,i,d;return{c(){u=s("meta"),m=w(),o=s("meta"),i=w(),d=s("meta"),this.h()},l(a){u=r(a,"META",{name:!0,content:!0}),m=E(a),o=r(a,"META",{property:!0,content:!0}),i=E(a),d=r(a,"META",{name:!0,content:!0}),this.h()},h(){var a,c,b;t(u,"name","description"),t(u,"content",p.description??((a=p.og)==null?void 0:a.description)),t(o,"property","og:description"),t(o,"content",((c=p.og)==null?void 0:c.description)??p.description),t(d,"name","twitter:description"),t(d,"content",((b=p.og)==null?void 0:b.description)??p.description)},m(a,c){k(a,u,c),k(a,m,c),k(a,o,c),k(a,i,c),k(a,d,c)},p:P,d(a){a&&l(u),a&&l(m),a&&l(o),a&&l(i),a&&l(d)}}}function _l(L){let u,m,o;return{c(){u=s("meta"),m=w(),o=s("meta"),this.h()},l(i){u=r(i,"META",{property:!0,content:!0}),m=E(i),o=r(i,"META",{name:!0,content:!0}),this.h()},h(){var i,d;t(u,"property","og:image"),t(u,"content",(i=p.og)==null?void 0:i.image),t(o,"name","twitter:image"),t(o,"content",(d=p.og)==null?void 0:d.image)},m(i,d){k(i,u,d),k(i,m,d),k(i,o,d)},p:P,d(i){i&&l(u),i&&l(m),i&&l(o)}}}function pl(L){let u,m,o,i,d,a,c,b,I,y,Ee,T,A,ne,D,q,Se,U,ue,Fe,Me,fe,Ce,ge,B,xe,Q,Ne,be,R,j,He,g,O,Pe,x,G,De,K,qe,Be,V,Qe,W,Re,je,N,Oe,X,Ge,Ke,Le,Y,z,Ve,S,J,Z,We,F,H,Xe,$,Ye,ze,Je,de,ee,Ze,$e,me,te,et,tt,le,ae,lt,he,se,re,at,st,rt,ie,it,_e,oe,ce,ot,ct,M=typeof p<"u"&&p.title&&p.hide_title!==!0&&ul();function Yt(f,v){return typeof p<"u"&&p.title?dl:fl}let we=Yt()(L),C=typeof p=="object"&&ml();return{c(){M&&M.c(),u=w(),we.c(),m=s("meta"),o=s("meta"),C&&C.c(),i=Ue(),d=w(),a=s("ul"),c=s("li"),b=h("2024/02/22"),I=s("ul"),y=s("li"),Ee=h("Updating to "),T=s("a"),A=h("Universal SQL"),ne=w(),D=s("ul"),q=s("li"),Se=h("2023/11/13"),U=s("ul"),ue=s("li"),Fe=h("Lots of Front-end improvements, including components and partials that will make scaling easier"),Me=w(),fe=s("li"),Ce=h("DuckDB as the core DB, CSV still works, which is ideal for managing smaller datasets like articles and authors"),ge=w(),B=s("li"),xe=h("Added Metahockey archive of "),Q=s("a"),Ne=h("Articles"),be=w(),R=s("ul"),j=s("li"),He=h("2023/11/06"),g=s("ul"),O=s("li"),Pe=h("Updating Structure of the pages, including the Resources folder"),x=s("ul"),G=s("li"),De=h("Adding "),K=s("a"),qe=h("Articles"),Be=w(),V=s("li"),Qe=h("Adding "),W=s("a"),Re=h("Libraries"),je=w(),N=s("li"),Oe=h("Individual leagues are under the "),X=s("a"),Ge=h("Sports"),Ke=h(" folder. This will reduce the number of items in the sidebar."),Le=w(),Y=s("ul"),z=s("li"),Ve=h("2023/11/03"),S=s("ul"),J=s("li"),Z=s("a"),We=h("F1"),F=s("ul"),H=s("li"),Xe=h("Basic "),$=s("a"),Ye=h("driver"),ze=h(" info (Wins, Podiums, Points)"),Je=w(),de=s("li"),ee=s("a"),Ze=h("Races"),$e=w(),me=s("li"),te=s("a"),et=h("Circuits"),tt=w(),le=s("li"),ae=s("a"),lt=h("NHL"),he=s("ul"),se=s("li"),re=s("a"),at=h("Teams"),st=h(" to be listed"),rt=w(),ie=s("li"),it=h("Site info"),_e=s("ul"),oe=s("li"),ce=s("a"),ot=h("About Page"),ct=h(" created with stack info"),this.h()},l(f){M&&M.l(f),u=E(f);const v=$t("svelte-1j2izld",document.head);we.l(v),m=r(v,"META",{name:!0,content:!0}),o=r(v,"META",{name:!0,content:!0}),C&&C.l(v),i=Ue(),v.forEach(l),d=E(f),a=r(f,"UL",{class:!0});var At=n(a);c=r(At,"LI",{class:!0});var nt=n(c);b=_(nt,"2024/02/22"),I=r(nt,"UL",{class:!0});var yt=n(I);y=r(yt,"LI",{class:!0});var ut=n(y);Ee=_(ut,"Updating to "),T=r(ut,"A",{href:!0,rel:!0,class:!0});var It=n(T);A=_(It,"Universal SQL"),It.forEach(l),ut.forEach(l),yt.forEach(l),nt.forEach(l),At.forEach(l),ne=E(f),D=r(f,"UL",{class:!0});var Tt=n(D);q=r(Tt,"LI",{class:!0});var ft=n(q);Se=_(ft,"2023/11/13"),U=r(ft,"UL",{class:!0});var pe=n(U);ue=r(pe,"LI",{class:!0});var Ut=n(ue);Fe=_(Ut,"Lots of Front-end improvements, including components and partials that will make scaling easier"),Ut.forEach(l),Me=E(pe),fe=r(pe,"LI",{class:!0});var St=n(fe);Ce=_(St,"DuckDB as the core DB, CSV still works, which is ideal for managing smaller datasets like articles and authors"),St.forEach(l),ge=E(pe),B=r(pe,"LI",{class:!0});var dt=n(B);xe=_(dt,"Added Metahockey archive of "),Q=r(dt,"A",{href:!0,class:!0});var Ft=n(Q);Ne=_(Ft,"Articles"),Ft.forEach(l),dt.forEach(l),pe.forEach(l),ft.forEach(l),Tt.forEach(l),be=E(f),R=r(f,"UL",{class:!0});var Mt=n(R);j=r(Mt,"LI",{class:!0});var mt=n(j);He=_(mt,"2023/11/06"),g=r(mt,"UL",{class:!0});var Ae=n(g);O=r(Ae,"LI",{class:!0});var ht=n(O);Pe=_(ht,"Updating Structure of the pages, including the Resources folder"),x=r(ht,"UL",{class:!0});var ye=n(x);G=r(ye,"LI",{class:!0});var _t=n(G);De=_(_t,"Adding "),K=r(_t,"A",{href:!0,class:!0});var Ct=n(K);qe=_(Ct,"Articles"),Ct.forEach(l),_t.forEach(l),Be=E(ye),V=r(ye,"LI",{class:!0});var pt=n(V);Qe=_(pt,"Adding "),W=r(pt,"A",{href:!0,class:!0});var gt=n(W);Re=_(gt,"Libraries"),gt.forEach(l),pt.forEach(l),ye.forEach(l),ht.forEach(l),je=E(Ae),N=r(Ae,"LI",{class:!0});var Ie=n(N);Oe=_(Ie,"Individual leagues are under the "),X=r(Ie,"A",{href:!0,class:!0});var xt=n(X);Ge=_(xt,"Sports"),xt.forEach(l),Ke=_(Ie," folder. This will reduce the number of items in the sidebar."),Ie.forEach(l),Ae.forEach(l),mt.forEach(l),Mt.forEach(l),Le=E(f),Y=r(f,"UL",{class:!0});var Nt=n(Y);z=r(Nt,"LI",{class:!0});var kt=n(z);Ve=_(kt,"2023/11/03"),S=r(kt,"UL",{class:!0});var ke=n(S);J=r(ke,"LI",{class:!0});var vt=n(J);Z=r(vt,"A",{href:!0,class:!0});var Ht=n(Z);We=_(Ht,"F1"),Ht.forEach(l),F=r(vt,"UL",{class:!0});var ve=n(F);H=r(ve,"LI",{class:!0});var Te=n(H);Xe=_(Te,"Basic "),$=r(Te,"A",{href:!0,class:!0});var Pt=n($);Ye=_(Pt,"driver"),Pt.forEach(l),ze=_(Te," info (Wins, Podiums, Points)"),Te.forEach(l),Je=E(ve),de=r(ve,"LI",{class:!0});var Dt=n(de);ee=r(Dt,"A",{href:!0,class:!0});var qt=n(ee);Ze=_(qt,"Races"),qt.forEach(l),Dt.forEach(l),$e=E(ve),me=r(ve,"LI",{class:!0});var Bt=n(me);te=r(Bt,"A",{href:!0,class:!0});var Qt=n(te);et=_(Qt,"Circuits"),Qt.forEach(l),Bt.forEach(l),ve.forEach(l),vt.forEach(l),tt=E(ke),le=r(ke,"LI",{class:!0});var wt=n(le);ae=r(wt,"A",{href:!0,class:!0});var Rt=n(ae);lt=_(Rt,"NHL"),Rt.forEach(l),he=r(wt,"UL",{class:!0});var jt=n(he);se=r(jt,"LI",{class:!0});var Et=n(se);re=r(Et,"A",{href:!0,class:!0});var Ot=n(re);at=_(Ot,"Teams"),Ot.forEach(l),st=_(Et," to be listed"),Et.forEach(l),jt.forEach(l),wt.forEach(l),rt=E(ke),ie=r(ke,"LI",{class:!0});var bt=n(ie);it=_(bt,"Site info"),_e=r(bt,"UL",{class:!0});var Gt=n(_e);oe=r(Gt,"LI",{class:!0});var Lt=n(oe);ce=r(Lt,"A",{href:!0,class:!0});var Kt=n(ce);ot=_(Kt,"About Page"),Kt.forEach(l),ct=_(Lt," created with stack info"),Lt.forEach(l),Gt.forEach(l),bt.forEach(l),ke.forEach(l),kt.forEach(l),Nt.forEach(l),this.h()},h(){t(m,"name","twitter:card"),t(m,"content","summary"),t(o,"name","twitter:site"),t(o,"content","@evidence_dev"),t(T,"href","https://evidence.dev/blog/why-we-built-usql/"),t(T,"rel","nofollow"),t(T,"class","markdown"),t(y,"class","markdown"),t(I,"class","markdown"),t(c,"class","markdown"),t(a,"class","markdown"),t(ue,"class","markdown"),t(fe,"class","markdown"),t(Q,"href","/resources/articles/"),t(Q,"class","markdown"),t(B,"class","markdown"),t(U,"class","markdown"),t(q,"class","markdown"),t(D,"class","markdown"),t(K,"href","/resources/articles/"),t(K,"class","markdown"),t(G,"class","markdown"),t(W,"href","/resources/libraries/"),t(W,"class","markdown"),t(V,"class","markdown"),t(x,"class","markdown"),t(O,"class","markdown"),t(X,"href","/sports"),t(X,"class","markdown"),t(N,"class","markdown"),t(g,"class","markdown"),t(j,"class","markdown"),t(R,"class","markdown"),t(Z,"href","/sports/F1"),t(Z,"class","markdown"),t($,"href","/sports/F1/drivers"),t($,"class","markdown"),t(H,"class","markdown"),t(ee,"href","/sports/F1/races"),t(ee,"class","markdown"),t(de,"class","markdown"),t(te,"href","/sports/F1/circuits"),t(te,"class","markdown"),t(me,"class","markdown"),t(F,"class","markdown"),t(J,"class","markdown"),t(ae,"href","/sports/NHL"),t(ae,"class","markdown"),t(re,"href","/sports/NHL/teams"),t(re,"class","markdown"),t(se,"class","markdown"),t(he,"class","markdown"),t(le,"class","markdown"),t(ce,"href","/about"),t(ce,"class","markdown"),t(oe,"class","markdown"),t(_e,"class","markdown"),t(ie,"class","markdown"),t(S,"class","markdown"),t(z,"class","markdown"),t(Y,"class","markdown")},m(f,v){M&&M.m(f,v),k(f,u,v),we.m(document.head,null),e(document.head,m),e(document.head,o),C&&C.m(document.head,null),e(document.head,i),k(f,d,v),k(f,a,v),e(a,c),e(c,b),e(c,I),e(I,y),e(y,Ee),e(y,T),e(T,A),k(f,ne,v),k(f,D,v),e(D,q),e(q,Se),e(q,U),e(U,ue),e(ue,Fe),e(U,Me),e(U,fe),e(fe,Ce),e(U,ge),e(U,B),e(B,xe),e(B,Q),e(Q,Ne),k(f,be,v),k(f,R,v),e(R,j),e(j,He),e(j,g),e(g,O),e(O,Pe),e(O,x),e(x,G),e(G,De),e(G,K),e(K,qe),e(x,Be),e(x,V),e(V,Qe),e(V,W),e(W,Re),e(g,je),e(g,N),e(N,Oe),e(N,X),e(X,Ge),e(N,Ke),k(f,Le,v),k(f,Y,v),e(Y,z),e(z,Ve),e(z,S),e(S,J),e(J,Z),e(Z,We),e(J,F),e(F,H),e(H,Xe),e(H,$),e($,Ye),e(H,ze),e(F,Je),e(F,de),e(de,ee),e(ee,Ze),e(F,$e),e(F,me),e(me,te),e(te,et),e(S,tt),e(S,le),e(le,ae),e(ae,lt),e(le,he),e(he,se),e(se,re),e(re,at),e(se,st),e(S,rt),e(S,ie),e(ie,it),e(ie,_e),e(_e,oe),e(oe,ce),e(ce,ot),e(oe,ct)},p(f,[v]){typeof p<"u"&&p.title&&p.hide_title!==!0&&M.p(f,v),we.p(f,v),typeof p=="object"&&C.p(f,v)},i:P,o:P,d(f){M&&M.d(f),f&&l(u),we.d(f),l(m),l(o),C&&C.d(f),l(i),f&&l(d),f&&l(a),f&&l(ne),f&&l(D),f&&l(be),f&&l(R),f&&l(Le),f&&l(Y)}}}const p={title:"Recent Updates"};function kl(L,u,m){var T;let o,i;Vt(L,ll,A=>m(2,o=A)),Vt(L,Xt,A=>m(8,i=A));let{data:d}=u,{data:a={},customFormattingSettings:c,__db:b,inputs:I}=d;el(Xt,i="751fd4ca0b5cd3fbdaaf59c6c6b6f0ac",i);let y=il(I);return Wt(ol,y),tl(y.subscribe(A=>I=A)),Wt(cl,{getCustomFormats:()=>c.customFormats||[]}),al((A,ne)=>nl(b.query,A,{query_name:ne})),(T=import.meta)!=null&&T.hot&&(void 0).on("vite:afterUpdate",()=>{sl.emptyCache()}),o.params,L.$$set=A=>{"data"in A&&m(0,d=A.data)},L.$$.update=()=>{L.$$.dirty&1&&m(1,{data:a={},customFormattingSettings:c,__db:b}=d,a),L.$$.dirty&2&&rl.set(Object.keys(a).length>0),L.$$.dirty&4&&o.params},[d,a,o]}class Il extends zt{constructor(u){super(),Jt(this,u,kl,pl,Zt,{data:0})}}export{Il as default};