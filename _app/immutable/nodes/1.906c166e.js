import{S as R,i as z,s as J,e as h,d as D,K as j,l as b,n as $,j as S,L as B,m as u,p as v,r as y,v as p,M as O,Y as oe,t as k,P as K,b as E,N as L,O as q,h as w,o as C,Z as ce,_ as G,c as ne,u as le,g as ae,a as ie,z as fe,U as X,J as H,Q as ue,R as pe,W as x,w as U,f as M,x as de}from"../chunks/index.bcaf0f15.js";import{p as _e}from"../chunks/stores.3954504c.js";import{f as ee}from"../chunks/ecStat.95472e69.js";import{C as me,a as he,b as be}from"../chunks/index.aae872a8.js";import{I as Q}from"../chunks/Icon.325ba2cc.js";import{w as $e}from"../chunks/paths.535f2334.js";import"../chunks/inferColumnTypes.e8dc56fc.js";function te(c){let e,r,t,l;return{c(){e=h("p"),r=w("Copied to clipboard"),this.h()},l(a){e=b(a,"P",{class:!0});var n=$(e);r=C(n,"Copied to clipboard"),n.forEach(u),this.h()},h(){v(e,"class","absolute -bottom-14 right-0 text-sm bg-white/80 w-[17ch] text-center font-sans p-2 border border-gray-950 rounded")},m(a,n){y(a,e,n),p(e,r),l=!0},i(a){l||(ce(()=>{t||(t=G(e,ee,{duration:250},!0)),t.run(1)}),l=!0)},o(a){t||(t=G(e,ee,{duration:250},!1)),t.run(0),l=!1},d(a){a&&u(e),a&&t&&t.end()}}}function ve(c){let e,r,t,l,a,n,i,s=c[0]&&te();return l=new Q({props:{src:me,class:"w-4 h-4"}}),{c(){e=h("div"),s&&s.c(),r=D(),t=h("button"),j(l.$$.fragment),this.h()},l(o){e=b(o,"DIV",{class:!0});var f=$(e);s&&s.l(f),r=S(f),t=b(f,"BUTTON",{class:!0,title:!0});var _=$(t);B(l.$$.fragment,_),_.forEach(u),f.forEach(u),this.h()},h(){v(t,"class","bg-white/80 border border-gray-950 rounded p-2 hover:bg-gray-200/80 active:bg-gray-400/80"),v(t,"title","Copy to Clipboard"),v(e,"class","relative")},m(o,f){y(o,e,f),s&&s.m(e,null),p(e,r),p(e,t),O(l,t,null),a=!0,n||(i=oe(t,"click",c[1]),n=!0)},p(o,[f]){o[0]?s?f&1&&k(s,1):(s=te(),s.c(),k(s,1),s.m(e,r)):s&&(K(),E(s,1,1,()=>{s=null}),L())},i(o){a||(k(s),k(l.$$.fragment,o),a=!0)},o(o){E(s),E(l.$$.fragment,o),a=!1},d(o){o&&u(e),s&&s.d(),q(l),n=!1,i()}}}function ge(c,e,r){let{textToCopy:t=""}=e,l=!1;const a=()=>{navigator.clipboard.writeText(t),r(0,l=!0),setTimeout(()=>r(0,l=!1),1e3)};return c.$$set=n=>{"textToCopy"in n&&r(2,t=n.textToCopy)},[l,a,t]}class ke extends R{constructor(e){super(),z(this,e,ge,ve,J,{textToCopy:2})}}function ye(c){let e,r,t;const l=c[1].default,a=ne(l,c,c[0],null);return{c(){e=h("div"),r=h("div"),a&&a.c(),this.h()},l(n){e=b(n,"DIV",{class:!0});var i=$(e);r=b(i,"DIV",{class:!0});var s=$(r);a&&a.l(s),s.forEach(u),i.forEach(u),this.h()},h(){v(r,"class","overflow-hidden divide-y rounded"),v(e,"class","my-6 divide-y border border-neutral-200 rounded")},m(n,i){y(n,e,i),p(e,r),a&&a.m(r,null),t=!0},p(n,[i]){a&&a.p&&(!t||i&1)&&le(a,l,n,n[0],t?ie(l,n[0],i,null):ae(n[0]),null)},i(n){t||(k(a,n),t=!0)},o(n){E(a,n),t=!1},d(n){n&&u(e),a&&a.d(n)}}}function Ee(c,e,r){let{$$slots:t={},$$scope:l}=e;const a=$e(-1);function n(i){a.update(s=>s===i?-1:i)}return fe("accordion",{setActiveItem:n,activeItem:a}),c.$$set=i=>{"$$scope"in i&&r(0,l=i.$$scope)},[l,t]}class we extends R{constructor(e){super(),z(this,e,Ee,ye,J,{})}}function Ce(c){let e,r;return e=new Q({props:{src:he,class:"text-gray-600 w-6 h-6"}}),{c(){j(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,l){O(e,t,l),r=!0},p:U,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function Te(c){let e,r;return e=new Q({props:{src:be,class:"text-gray-600 w-6 h-6"}}),{c(){j(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,l){O(e,t,l),r=!0},p:U,i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function Ie(c){let e,r,t,l,a,n,i,s,o,f,_,A,g;const T=[Te,Ce],d=[];function F(m,I){return m[5]?0:1}n=F(c),i=d[n]=T[n](c);const V=c[8].default,P=ne(V,c,c[7],null);return{c(){e=h("div"),r=h("button"),t=h("h3"),l=w(c[0]),a=D(),i.c(),s=D(),o=h("div"),f=h("div"),P&&P.c(),this.h()},l(m){e=b(m,"DIV",{class:!0});var I=$(e);r=b(I,"BUTTON",{class:!0});var N=$(r);t=b(N,"H3",{class:!0});var W=$(t);l=C(W,c[0]),W.forEach(u),a=S(N),i.l(N),N.forEach(u),s=S(I),o=b(I,"DIV",{class:!0,style:!0});var Y=$(o);f=b(Y,"DIV",{class:!0});var Z=$(f);P&&P.l(Z),Z.forEach(u),Y.forEach(u),I.forEach(u),this.h()},h(){v(t,"class","text-lg my-3"),v(r,"class","flex justify-between items-center w-full box-border px-4 bg-white border-none cursor-pointer transition ease-in-out duration-300 hover:bg-gray-100 focus:outline-none"),v(f,"class","p-5"),v(o,"class","text-base overflow-auto transition-all duration-300 ease-in-out"),X(o,"height",c[4]+"px"),v(e,"class","accordion-item")},m(m,I){y(m,e,I),p(e,r),p(r,t),p(t,l),p(r,a),d[n].m(r,null),p(e,s),p(e,o),p(o,f),P&&P.m(f,null),c[10](o),c[11](e),_=!0,A||(g=oe(r,"click",c[9]),A=!0)},p(m,[I]){(!_||I&1)&&H(l,m[0]);let N=n;n=F(m),n===N?d[n].p(m,I):(K(),E(d[N],1,1,()=>{d[N]=null}),L(),i=d[n],i?i.p(m,I):(i=d[n]=T[n](m),i.c()),k(i,1),i.m(r,null)),P&&P.p&&(!_||I&128)&&le(P,V,m,m[7],_?ie(V,m[7],I,null):ae(m[7]),null),(!_||I&16)&&X(o,"height",m[4]+"px")},i(m){_||(k(i),k(P,m),_=!0)},o(m){E(i),E(P,m),_=!1},d(m){m&&u(e),d[n].d(),P&&P.d(m),c[10](null),c[11](null),A=!1,g()}}}function Pe(c,e,r){let{$$slots:t={},$$scope:l}=e,{title:a=""}=e;const n=ue("accordion");let i,s,o,f=0,_=!1;n.activeItem.subscribe(d=>{r(5,_=d===i),_?r(4,f=o.scrollHeight):r(4,f=0)}),pe(()=>{const d=Array.from(document.querySelectorAll(".accordion-item"));r(1,i=d.indexOf(s))});const A=()=>n.setActiveItem(i);function g(d){x[d?"unshift":"push"](()=>{o=d,r(3,o)})}function T(d){x[d?"unshift":"push"](()=>{s=d,r(2,s)})}return c.$$set=d=>{"title"in d&&r(0,a=d.title),"$$scope"in d&&r(7,l=d.$$scope)},[a,i,s,o,f,_,n,l,t,A,g,T]}class Ae extends R{constructor(e){super(),z(this,e,Pe,Ie,J,{title:0})}}function Ne(c){let e,r,t,l,a,n=c[0].status+"",i;return{c(){e=h("h1"),r=w("Unknown Error Encountered"),t=D(),l=h("span"),a=w("HTTP "),i=w(n),this.h()},l(s){e=b(s,"H1",{});var o=$(e);r=C(o,"Unknown Error Encountered"),o.forEach(u),t=S(s),l=b(s,"SPAN",{class:!0});var f=$(l);a=C(f,"HTTP "),i=C(f,n),f.forEach(u),this.h()},h(){v(l,"class","font-mono text-base")},m(s,o){y(s,e,o),p(e,r),y(s,t,o),y(s,l,o),p(l,a),p(l,i)},p(s,o){o&1&&n!==(n=s[0].status+"")&&H(i,n)},i:U,o:U,d(s){s&&u(e),s&&u(t),s&&u(l)}}}function De(c){let e,r,t,l,a,n,i=c[0].error.message&&se(c),s=(c[0].error.stack||c[0].error.cause)&&re(c);return{c(){e=h("h1"),r=w("Application Error"),t=D(),i&&i.c(),l=D(),s&&s.c(),a=M(),this.h()},l(o){e=b(o,"H1",{class:!0});var f=$(e);r=C(f,"Application Error"),f.forEach(u),t=S(o),i&&i.l(o),l=S(o),s&&s.l(o),a=M(),this.h()},h(){v(e,"class","mt-0 mb-8 py-0")},m(o,f){y(o,e,f),p(e,r),y(o,t,f),i&&i.m(o,f),y(o,l,f),s&&s.m(o,f),y(o,a,f),n=!0},p(o,f){o[0].error.message?i?i.p(o,f):(i=se(o),i.c(),i.m(l.parentNode,l)):i&&(i.d(1),i=null),o[0].error.stack||o[0].error.cause?s?(s.p(o,f),f&1&&k(s,1)):(s=re(o),s.c(),k(s,1),s.m(a.parentNode,a)):s&&(K(),E(s,1,1,()=>{s=null}),L())},i(o){n||(k(s),n=!0)},o(o){E(s),n=!1},d(o){o&&u(e),o&&u(t),i&&i.d(o),o&&u(l),s&&s.d(o),o&&u(a)}}}function Se(c){let e,r,t,l,a,n=c[0].status+"",i,s,o,f=c[0].url.pathname+"",_,A;return{c(){e=h("h1"),r=w("Page Not Found"),t=D(),l=h("p"),a=h("span"),i=w(n),s=w(`: The page
		`),o=h("span"),_=w(f),A=w(" can't be found in the project."),this.h()},l(g){e=b(g,"H1",{class:!0});var T=$(e);r=C(T,"Page Not Found"),T.forEach(u),t=S(g),l=b(g,"P",{});var d=$(l);a=b(d,"SPAN",{class:!0});var F=$(a);i=C(F,n),F.forEach(u),s=C(d,`: The page
		`),o=b(d,"SPAN",{class:!0});var V=$(o);_=C(V,f),V.forEach(u),A=C(d," can't be found in the project."),d.forEach(u),this.h()},h(){v(e,"class","mt-0 mb-8 py-0"),v(a,"class","font-mono text-base"),v(o,"class","font-mono text-base bg-gray-200")},m(g,T){y(g,e,T),p(e,r),y(g,t,T),y(g,l,T),p(l,a),p(a,i),p(l,s),p(l,o),p(o,_),p(l,A)},p(g,T){T&1&&n!==(n=g[0].status+"")&&H(i,n),T&1&&f!==(f=g[0].url.pathname+"")&&H(_,f)},i:U,o:U,d(g){g&&u(e),g&&u(t),g&&u(l)}}}function se(c){let e,r,t=c[0].status+"",l,a,n=c[0].error.message+"",i;return{c(){e=h("p"),r=h("span"),l=w(t),a=w(":"),i=w(n),this.h()},l(s){e=b(s,"P",{class:!0});var o=$(e);r=b(o,"SPAN",{class:!0});var f=$(r);l=C(f,t),f.forEach(u),a=C(o,":"),i=C(o,n),o.forEach(u),this.h()},h(){v(r,"class","font-mono text-base"),v(e,"class","font-mono text-sm bg-gray-200 px-2 py-2")},m(s,o){y(s,e,o),p(e,r),p(r,l),p(e,a),p(e,i)},p(s,o){o&1&&t!==(t=s[0].status+"")&&H(l,t),o&1&&n!==(n=s[0].error.message+"")&&H(i,n)},d(s){s&&u(e)}}}function re(c){let e,r;return e=new we({props:{$$slots:{default:[Ve]},$$scope:{ctx:c}}}),{c(){j(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,l){O(e,t,l),r=!0},p(t,l){const a={};l&10&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function He(c){let e,r,t,l,a,n,i;return t=new ke({props:{textToCopy:c[1]}}),{c(){e=h("div"),r=h("span"),j(t.$$.fragment),l=D(),a=h("pre"),n=w(c[1]),this.h()},l(s){e=b(s,"DIV",{class:!0});var o=$(e);r=b(o,"SPAN",{class:!0});var f=$(r);B(t.$$.fragment,f),f.forEach(u),l=S(o),a=b(o,"PRE",{class:!0});var _=$(a);n=C(_,c[1]),_.forEach(u),o.forEach(u),this.h()},h(){v(r,"class","absolute top-2 right-2"),v(a,"class","font-mono text-sm bg-gray-200 px-2 py-2 overflow-auto"),v(e,"class","relative")},m(s,o){y(s,e,o),p(e,r),O(t,r,null),p(e,l),p(e,a),p(a,n),i=!0},p(s,o){const f={};o&2&&(f.textToCopy=s[1]),t.$set(f),(!i||o&2)&&H(n,s[1])},i(s){i||(k(t.$$.fragment,s),i=!0)},o(s){E(t.$$.fragment,s),i=!1},d(s){s&&u(e),q(t)}}}function Ve(c){let e,r;return e=new Ae({props:{title:"Error Details",$$slots:{default:[He]},$$scope:{ctx:c}}}),{c(){j(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,l){O(e,t,l),r=!0},p(t,l){const a={};l&10&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function Ue(c){let e,r,t,l;const a=[Se,De,Ne],n=[];function i(s,o){return s[0].status===404?0:s[0].status===500?1:2}return e=i(c),r=n[e]=a[e](c),{c(){r.c(),t=M()},l(s){r.l(s),t=M()},m(s,o){n[e].m(s,o),y(s,t,o),l=!0},p(s,[o]){let f=e;e=i(s),e===f?n[e].p(s,o):(K(),E(n[f],1,1,()=>{n[f]=null}),L(),r=n[e],r?r.p(s,o):(r=n[e]=a[e](s),r.c()),k(r,1),r.m(t.parentNode,t))},i(s){l||(k(r),l=!0)},o(s){E(r),l=!1},d(s){n[e].d(s),s&&u(t)}}}function je(c,e,r){let t,l;de(c,_e,n=>r(0,l=n));const a=n=>{let i="";return n.stack&&(i+=n.stack),n.cause&&(i+=`

Caused By:
	`,i+=a(n.cause).split(`
`).join(`
	`)),i};return c.$$.update=()=>{c.$$.dirty&1&&r(1,t=a(l.error))},[l,t]}class Je extends R{constructor(e){super(),z(this,e,je,Ue,J,{})}}export{Je as component};