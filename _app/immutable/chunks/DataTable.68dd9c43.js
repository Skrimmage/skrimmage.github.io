import{S as De,i as Ve,s as Me,f as ee,r as D,P as be,b as N,N as ke,t as v,m,K as fe,L as ue,M as ce,w as Ie,O as de,e as E,h as $,d as J,l as S,n as L,o as x,j as W,p as b,a3 as K,v as k,J as _e,Q as Sl,x as kl,a4 as Ge,Y as he,$ as He,z as Cl,a5 as pl,c as Nl,U as F,u as Il,g as Ll,a as Dl,Z as Vl,_ as qe,G as Le,W as Ml,a6 as Ul,a7 as Pl,a8 as ye,a9 as vl,q as Ke}from"./index.bcaf0f15.js";import{p as wl,s as Oe,c as Bl}from"./checkInputs.29b04e93.js";import{w as Al}from"./paths.9ffbe8c1.js";import{s as Qe}from"./ecStat.748e41db.js";import{g as Fl,D as yl}from"./QueryViewer.f356caf9.js";import{c as Rl,f as ve,g as Te}from"./Prismjs.91c8c657.js";import{I as Ne}from"./Icon.325ba2cc.js";import{a as Gl,b as Ol,S as Hl,c as jl,d as ql,e as Kl,f as Ql}from"./index.aae872a8.js";function zl(n){let e,t;return e=new Ne({props:{src:Gl,class:"w-3 h-3 inline mb-0.5"}}),{c(){fe(e.$$.fragment)},l(l){ue(e.$$.fragment,l)},m(l,r){ce(e,l,r),t=!0},p:Ie,i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){de(e,l)}}}function Jl(n){let e,t;return e=new Ne({props:{src:Ol,class:"w-3 h-3 inline mb-0.5"}}),{c(){fe(e.$$.fragment)},l(l){ue(e.$$.fragment,l)},m(l,r){ce(e,l,r),t=!0},p:Ie,i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){de(e,l)}}}function Wl(n){let e,t,l,r;const i=[Jl,zl],o=[];function a(s,u){return s[0]?0:1}return e=a(n),t=o[e]=i[e](n),{c(){t.c(),l=ee()},l(s){t.l(s),l=ee()},m(s,u){o[e].m(s,u),D(s,l,u),r=!0},p(s,[u]){let d=e;e=a(s),e===d?o[e].p(s,u):(be(),N(o[d],1,1,()=>{o[d]=null}),ke(),t=o[e],t?t.p(s,u):(t=o[e]=i[e](s),t.c()),v(t,1),t.m(l.parentNode,l))},i(s){r||(v(t),r=!0)},o(s){N(t),r=!1},d(s){o[e].d(s),s&&m(l)}}}function Yl(n,e,t){let{ascending:l}=e;return n.$$set=r=>{"ascending"in r&&t(0,l=r.ascending)},[l]}class Tl extends De{constructor(e){super(),Ve(this,e,Yl,Wl,Me,{ascending:0})}}function Zl(n){let e,t,l;return{c(){e=E("br"),t=E("a"),l=$("View environment variables →"),this.h()},l(r){e=S(r,"BR",{}),t=S(r,"A",{class:!0,href:!0});var i=L(t);l=x(i,"View environment variables →"),i.forEach(m),this.h()},h(){b(t,"class","credentials-link svelte-1no0yro"),b(t,"href","https://docs.evidence.dev/cli/#environment-variables")},m(r,i){D(r,e,i),D(r,t,i),k(t,l)},d(r){r&&m(e),r&&m(t)}}}function Xl(n){let e,t,l,r,i,o,a,s;function u(h,T){if(h[0]===$l)return Zl}let d=u(n),f=d&&d(n);return{c(){e=E("div"),t=E("div"),l=E("div"),r=$(n[1]),i=J(),o=E("div"),a=$(n[0]),s=J(),f&&f.c(),this.h()},l(h){e=S(h,"DIV",{width:!0,class:!0});var T=L(e);t=S(T,"DIV",{class:!0});var Z=L(t);l=S(Z,"DIV",{class:!0});var C=L(l);r=x(C,n[1]),C.forEach(m),i=W(Z),o=S(Z,"DIV",{class:!0});var U=L(o);a=x(U,n[0]),s=W(U),f&&f.l(U),U.forEach(m),Z.forEach(m),T.forEach(m),this.h()},h(){b(l,"class","font-bold text-center text-lg"),b(o,"class","text-center [word-wrap:break-work] text-xs"),K(o,"w-[7.8em]",n[1].includes("Value")),b(t,"class","m-auto w-full"),b(e,"width","100%"),b(e,"class","grid grid-rows-auto box-content grid-cols-1 justify-center bg-red-50 text-grey-700 font-ui font-normal rounded border border-red-200 min-h-[150px] py-5 px-8 my-5 print:break-inside-avoid")},m(h,T){D(h,e,T),k(e,t),k(t,l),k(l,r),k(t,i),k(t,o),k(o,a),k(o,s),f&&f.m(o,null)},p(h,[T]){T&2&&_e(r,h[1]),T&1&&_e(a,h[0]),d!==(d=u(h))&&(f&&f.d(1),f=d&&d(h),f&&(f.c(),f.m(o,null))),T&2&&K(o,"w-[7.8em]",h[1].includes("Value"))},i:Ie,o:Ie,d(h){h&&m(e),f&&f.d()}}}const $l="SQL Error: Missing database connection; set the EVIDENCE_DATABASE environment variable.";function xl(n,e,t){let{error:l}=e,{chartType:r}=e;return n.$$set=i=>{"error"in i&&t(0,l=i.error),"chartType"in i&&t(1,r=i.chartType)},[l,r]}class et extends De{constructor(e){super(),Ve(this,e,xl,Xl,Me,{error:0,chartType:1})}}function lt(n,e,t){let l,r,i=Sl(wl);kl(n,i,_=>t(20,r=_));let o,{id:a}=e;function s(){try{if(!Object.keys(r.data[0]).includes(a))throw o="Error in table: "+a+" does not exist in the dataset",new Error(o)}catch(_){if(o=_.message,Oe)throw o}}let{title:u=void 0}=e,{align:d=void 0}=e;d==="centre"&&(d="center");let{wrap:f=!1}=e;f=f==="true"||f===!0;let{contentType:h=void 0}=e,{height:T=void 0}=e,{width:Z=void 0}=e,{alt:C=void 0}=e,{openInNewTab:U=!1}=e;U=U==="true"||U===!0;let{linkLabel:X=void 0}=e,{fmt:Q=void 0}=e,{colorMax:ie=void 0}=e,{colorMin:Y=void 0}=e,{scaleColor:B="green"}=e,se={green:"hsla(129, 33%, 57%,",red:"hsla(0, 56%, 56%,",blue:"hsla(198, 56%, 56%,"}[B],{downIsGood:ne=!1}=e;ne=ne==="true"||ne===!0;let{showValue:A=!0}=e;A=A==="true"||A===!0;let{deltaSymbol:V=!0}=e;V=V==="true"||V===!0;const R=()=>{i.update(_=>{const G=_.columns.findIndex(P=>P.id===a);return G===-1?_.columns.push(l):_.columns=[..._.columns.slice(0,G),l,..._.columns.slice(G+1)],_})};return n.$$set=_=>{"id"in _&&t(7,a=_.id),"title"in _&&t(8,u=_.title),"align"in _&&t(1,d=_.align),"wrap"in _&&t(2,f=_.wrap),"contentType"in _&&t(9,h=_.contentType),"height"in _&&t(10,T=_.height),"width"in _&&t(11,Z=_.width),"alt"in _&&t(12,C=_.alt),"openInNewTab"in _&&t(3,U=_.openInNewTab),"linkLabel"in _&&t(13,X=_.linkLabel),"fmt"in _&&t(14,Q=_.fmt),"colorMax"in _&&t(15,ie=_.colorMax),"colorMin"in _&&t(16,Y=_.colorMin),"scaleColor"in _&&t(17,B=_.scaleColor),"downIsGood"in _&&t(4,ne=_.downIsGood),"showValue"in _&&t(5,A=_.showValue),"deltaSymbol"in _&&t(6,V=_.deltaSymbol)},n.$$.update=()=>{n.$$.dirty&131070&&t(18,l={id:a,title:u,align:d,wrap:f,contentType:h,height:T,width:Z,alt:C,openInNewTab:U,linkLabel:X,fmt:Q,downIsGood:ne,deltaSymbol:V,showValue:A,colorMax:ie,colorMin:Y,useColor:se}),n.$$.dirty&262144&&R()},s(),[i,d,f,U,ne,A,V,a,u,h,T,Z,C,X,Q,ie,Y,B,l]}class Ot extends De{constructor(e){super(),Ve(this,e,lt,null,Me,{id:7,title:8,align:1,wrap:2,contentType:9,height:10,width:11,alt:12,openInNewTab:3,linkLabel:13,fmt:14,colorMax:15,colorMin:16,scaleColor:17,downIsGood:4,showValue:5,deltaSymbol:6})}}function tt(n){let e,t,l,r,i,o,a,s;return i=new Ne({props:{src:Hl,class:"pl-0.5"}}),{c(){e=E("div"),t=E("input"),l=J(),r=E("div"),fe(i.$$.fragment),this.h()},l(u){e=S(u,"DIV",{class:!0});var d=L(e);t=S(d,"INPUT",{class:!0,type:!0,placeholder:!0}),l=W(d),r=S(d,"DIV",{class:!0});var f=L(r);ue(i.$$.fragment,f),f.forEach(m),d.forEach(m),this.h()},h(){b(t,"class","search-bar svelte-cnwsl9"),b(t,"type","text"),b(t,"placeholder",n[1]),b(r,"class","search-icon svelte-cnwsl9"),b(e,"class","search-container svelte-cnwsl9")},m(u,d){D(u,e,d),k(e,t),Ge(t,n[0]),k(e,l),k(e,r),ce(i,r,null),o=!0,a||(s=[he(t,"input",n[3]),he(t,"keyup",n[4])],a=!0)},p(u,[d]){(!o||d&2)&&b(t,"placeholder",u[1]),d&1&&t.value!==u[0]&&Ge(t,u[0])},i(u){o||(v(i.$$.fragment,u),o=!0)},o(u){N(i.$$.fragment,u),o=!1},d(u){u&&m(e),de(i),a=!1,He(s)}}}function nt(n,e,t){let{placeholder:l="Search"}=e,{value:r}=e,{searchFunction:i}=e;function o(){r=this.value,t(0,r)}const a=()=>i(r);return n.$$set=s=>{"placeholder"in s&&t(1,l=s.placeholder),"value"in s&&t(0,r=s.value),"searchFunction"in s&&t(2,i=s.searchFunction)},[r,l,i,o,a]}class rt extends De{constructor(e){super(),Ve(this,e,nt,tt,Me,{placeholder:1,value:0,searchFunction:2})}}function ot(n){let e;return{c(){e=ee()},l(t){e=ee()},m(t,l){D(t,e,l)},p(t,[l]){},i:Ie,o:Ie,d(t){t&&m(e)}}}function it(n,e,t){let{data:l}=e,{link:r}=e;const i=o=>o[r];return n.$$set=o=>{"data"in o&&t(0,l=o.data),"link"in o&&t(1,r=o.link)},[l,r,i]}class El extends De{constructor(e){super(),Ve(this,e,it,ot,Me,{data:0,link:1})}}function ze(n,e,t){const l=n.slice();return l[52]=e[t],l[54]=t,l}function Je(n,e,t){const l=n.slice();return l[55]=e[t],l}function We(n,e,t){const l=n.slice();l[55]=e[t];const r=l[55].colorMin??l[32](l[55]).columnUnitSummary.min;l[56]=r;const i=l[55].colorMax??l[32](l[55]).columnUnitSummary.max;l[57]=i;const o=l[57]-l[56]!==0&&!isNaN(l[57])&&!isNaN(l[56]);return l[58]=o,l}function st(n){const e=n.slice(),t=e[32]({id:e[55].linkLabel});return e[61]=t,e}function Ye(n,e,t){const l=n.slice();return l[55]=e[t],l}function Ze(n,e,t){const l=n.slice();return l[55]=e[t],l}function Xe(n,e,t){const l=n.slice();return l[55]=e[t],l}function at(n){let e,t;return e=new et({props:{error:n[12],chartType:"Data Table"}}),{c(){fe(e.$$.fragment)},l(l){ue(e.$$.fragment,l)},m(l,r){ce(e,l,r),t=!0},p(l,r){const i={};r[0]&4096&&(i.error=l[12]),e.$set(i)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){de(e,l)}}}function ft(n){let e,t,l,r,i,o,a,s,u,d,f,h,T,Z,C,U,X,Q,ie,Y,B,re,se;const ne=n[40].default,A=Nl(ne,n,n[39],null);let V=n[8]&&$e(n),R=n[20].columns.filter(ml),_=[];for(let c=0;c<R.length;c+=1)_[c]=xe(Xe(n,R,c));const G=c=>N(_[c],1,1,()=>{_[c]=null});let P=n[2]&&el(n),I=n[1]&&ll(n);const ae=[ct,ut],le=[];function te(c,w){return c[20].columns.length>0?0:1}f=te(n),h=le[f]=ae[f](n);let j=n[18],O=[];for(let c=0;c<j.length;c+=1)O[c]=dl(ze(n,j,c));const me=[St,Et],oe=[];function H(c,w){return c[11]&&c[24]>1?0:1}return C=H(n),U=oe[C]=me[C](n),{c(){A&&A.c(),e=J(),V&&V.c(),t=J();for(let c=0;c<_.length;c+=1)_[c].c();l=J(),r=E("div"),P&&P.c(),i=J(),o=E("div"),a=E("table"),s=E("thead"),u=E("tr"),I&&I.c(),d=J(),h.c(),T=J();for(let c=0;c<O.length;c+=1)O[c].c();Z=J(),U.c(),X=J(),Q=E("div"),ie=$("No Results"),this.h()},l(c){A&&A.l(c),e=W(c),V&&V.l(c),t=W(c);for(let pe=0;pe<_.length;pe+=1)_[pe].l(c);l=W(c),r=S(c,"DIV",{class:!0,style:!0});var w=L(r);P&&P.l(w),i=W(w),o=S(w,"DIV",{class:!0});var M=L(o);a=S(M,"TABLE",{class:!0});var y=L(a);s=S(y,"THEAD",{class:!0});var p=L(s);u=S(p,"TR",{class:!0});var z=L(u);I&&I.l(z),d=W(z),h.l(z),z.forEach(m),p.forEach(m),T=W(y);for(let pe=0;pe<O.length;pe+=1)O[pe].l(y);y.forEach(m),M.forEach(m),Z=W(w),U.l(w),X=W(w),Q=S(w,"DIV",{class:!0});var Ee=L(Q);ie=x(Ee,"No Results"),Ee.forEach(m),w.forEach(m),this.h()},h(){b(u,"class","svelte-kd019o"),b(s,"class","svelte-kd019o"),b(a,"class","svelte-kd019o"),b(o,"class","container svelte-kd019o"),b(Q,"class","noresults svelte-kd019o"),K(Q,"shownoresults",n[22]),b(r,"class","table-container svelte-kd019o"),F(r,"margin-top",Nt),F(r,"margin-bottom",It),F(r,"padding-bottom",Lt)},m(c,w){A&&A.m(c,w),D(c,e,w),V&&V.m(c,w),D(c,t,w);for(let M=0;M<_.length;M+=1)_[M].m(c,w);D(c,l,w),D(c,r,w),P&&P.m(r,null),k(r,i),k(r,o),k(o,a),k(a,s),k(s,u),I&&I.m(u,null),k(u,d),le[f].m(u,null),k(a,T);for(let M=0;M<O.length;M+=1)O[M].m(a,null);k(r,Z),oe[C].m(r,null),k(r,X),k(r,Q),k(Q,ie),B=!0,re||(se=[he(r,"mouseenter",n[50]),he(r,"mouseleave",n[51])],re=!0)},p(c,w){if(A&&A.p&&(!B||w[1]&256)&&Il(A,ne,c,c[39],B?Dl(ne,c[39],w,null):Ll(c[39]),null),c[8]?V?(V.p(c,w),w[0]&256&&v(V,1)):(V=$e(c),V.c(),v(V,1),V.m(t.parentNode,t)):V&&(be(),N(V,1,1,()=>{V=null}),ke()),w[0]&1048577){R=c[20].columns.filter(ml);let p;for(p=0;p<R.length;p+=1){const z=Xe(c,R,p);_[p]?(_[p].p(z,w),v(_[p],1)):(_[p]=xe(z),_[p].c(),v(_[p],1),_[p].m(l.parentNode,l))}for(be(),p=R.length;p<_.length;p+=1)G(p);ke()}c[2]?P?(P.p(c,w),w[0]&4&&v(P,1)):(P=el(c),P.c(),v(P,1),P.m(r,i)):P&&(be(),N(P,1,1,()=>{P=null}),ke()),c[1]?I?I.p(c,w):(I=ll(c),I.c(),I.m(u,d)):I&&(I.d(1),I=null);let M=f;if(f=te(c),f===M?le[f].p(c,w):(be(),N(le[M],1,1,()=>{le[M]=null}),ke(),h=le[f],h?h.p(c,w):(h=le[f]=ae[f](c),h.c()),v(h,1),h.m(u,null)),w[0]&1335650|w[1]&3){j=c[18];let p;for(p=0;p<j.length;p+=1){const z=ze(c,j,p);O[p]?O[p].p(z,w):(O[p]=dl(z),O[p].c(),O[p].m(a,null))}for(;p<O.length;p+=1)O[p].d(1);O.length=j.length}let y=C;C=H(c),C===y?oe[C].p(c,w):(be(),N(oe[y],1,1,()=>{oe[y]=null}),ke(),U=oe[C],U?U.p(c,w):(U=oe[C]=me[C](c),U.c()),v(U,1),U.m(r,X)),(!B||w[0]&4194304)&&K(Q,"shownoresults",c[22])},i(c){if(!B){v(A,c),v(V);for(let w=0;w<R.length;w+=1)v(_[w]);v(P),v(h),v(U),c&&Vl(()=>{Y||(Y=qe(r,Qe,{},!0)),Y.run(1)}),B=!0}},o(c){N(A,c),N(V),_=_.filter(Boolean);for(let w=0;w<_.length;w+=1)N(_[w]);N(P),N(h),N(U),c&&(Y||(Y=qe(r,Qe,{},!1)),Y.run(0)),B=!1},d(c){A&&A.d(c),c&&m(e),V&&V.d(c),c&&m(t),Le(_,c),c&&m(l),c&&m(r),P&&P.d(),I&&I.d(),le[f].d(),Le(O,c),oe[C].d(),c&&Y&&Y.end(),re=!1,He(se)}}}function $e(n){let e,t;return e=new El({props:{data:n[0],link:n[8]}}),{c(){fe(e.$$.fragment)},l(l){ue(e.$$.fragment,l)},m(l,r){ce(e,l,r),t=!0},p(l,r){const i={};r[0]&1&&(i.data=l[0]),r[0]&256&&(i.link=l[8]),e.$set(i)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){de(e,l)}}}function xe(n){let e,t;return e=new El({props:{data:n[0],link:n[55].id}}),{c(){fe(e.$$.fragment)},l(l){ue(e.$$.fragment,l)},m(l,r){ce(e,l,r),t=!0},p(l,r){const i={};r[0]&1&&(i.data=l[0]),r[0]&1048576&&(i.link=l[55].id),e.$set(i)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){de(e,l)}}}function el(n){let e,t,l;function r(o){n[41](o)}let i={searchFunction:n[29]};return n[16]!==void 0&&(i.value=n[16]),e=new rt({props:i}),Ml.push(()=>Ul(e,"value",r,n[16])),{c(){fe(e.$$.fragment)},l(o){ue(e.$$.fragment,o)},m(o,a){ce(e,o,a),l=!0},p(o,a){const s={};a[0]&536870912&&(s.searchFunction=o[29]),!t&&a[0]&65536&&(t=!0,s.value=o[16],Pl(()=>t=!1)),e.$set(s)},i(o){l||(v(e.$$.fragment,o),l=!0)},o(o){N(e.$$.fragment,o),l=!1},d(o){de(e,o)}}}function ll(n){let e;return{c(){e=E("th"),this.h()},l(t){e=S(t,"TH",{class:!0,style:!0}),L(e).forEach(m),this.h()},h(){b(e,"class","index svelte-kd019o"),F(e,"width","2%"),F(e,"background-color",n[9])},m(t,l){D(t,e,l)},p(t,l){l[0]&512&&F(e,"background-color",t[9])},d(t){t&&m(e)}}}function ut(n){let e,t,l=n[13].filter(gl),r=[];for(let o=0;o<l.length;o+=1)r[o]=nl(Ye(n,l,o));const i=o=>N(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=ee()},l(o){for(let a=0;a<r.length;a+=1)r[a].l(o);e=ee()},m(o,a){for(let s=0;s<r.length;s+=1)r[s].m(o,a);D(o,e,a),t=!0},p(o,a){if(a[0]&665224){l=o[13].filter(gl);let s;for(s=0;s<l.length;s+=1){const u=Ye(o,l,s);r[s]?(r[s].p(u,a),v(r[s],1)):(r[s]=nl(u),r[s].c(),v(r[s],1),r[s].m(e.parentNode,e))}for(be(),s=l.length;s<r.length;s+=1)i(s);ke()}},i(o){if(!t){for(let a=0;a<l.length;a+=1)v(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)N(r[a]);t=!1},d(o){Le(r,o),o&&m(e)}}}function ct(n){let e,t,l=n[20].columns,r=[];for(let o=0;o<l.length;o+=1)r[o]=ol(Ze(n,l,o));const i=o=>N(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=ee()},l(o){for(let a=0;a<r.length;a+=1)r[a].l(o);e=ee()},m(o,a){for(let s=0;s<r.length;s+=1)r[s].m(o,a);D(o,e,a),t=!0},p(o,a){if(a[0]&1705608|a[1]&2){l=o[20].columns;let s;for(s=0;s<l.length;s+=1){const u=Ze(o,l,s);r[s]?(r[s].p(u,a),v(r[s],1)):(r[s]=ol(u),r[s].c(),v(r[s],1),r[s].m(e.parentNode,e))}for(be(),s=l.length;s<r.length;s+=1)i(s);ke()}},i(o){if(!t){for(let a=0;a<l.length;a+=1)v(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)N(r[a]);t=!1},d(o){Le(r,o),o&&m(e)}}}function tl(n){let e,t;return e=new Tl({props:{ascending:n[17].ascending}}),{c(){fe(e.$$.fragment)},l(l){ue(e.$$.fragment,l)},m(l,r){ce(e,l,r),t=!0},p(l,r){const i={};r[0]&131072&&(i.ascending=l[17].ascending),e.$set(i)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){de(e,l)}}}function nl(n){let e,t,l=(n[7]?n[55].title:n[55].id)+"",r,i,o,a,s,u,d,f=n[17].col===n[55].id&&tl(n);return{c(){e=E("th"),t=E("span"),r=$(l),i=J(),f&&f.c(),o=J(),this.h()},l(h){e=S(h,"TH",{class:!0,style:!0});var T=L(e);t=S(T,"SPAN",{class:!0});var Z=L(t);r=x(Z,l),Z.forEach(m),i=W(T),f&&f.l(T),o=W(T),T.forEach(m),this.h()},h(){b(t,"class","col-header svelte-kd019o"),b(e,"class",a=ye(n[55].type)+" svelte-kd019o"),F(e,"color",n[10]),F(e,"background-color",n[9]),F(e,"cursor",n[3]?"pointer":"auto")},m(h,T){D(h,e,T),k(e,t),k(t,r),k(e,i),f&&f.m(e,null),k(e,o),s=!0,u||(d=he(e,"click",function(){vl(n[3]?n[19](n[55].id):"")&&(n[3]?n[19](n[55].id):"").apply(this,arguments)}),u=!0)},p(h,T){n=h,(!s||T[0]&8320)&&l!==(l=(n[7]?n[55].title:n[55].id)+"")&&_e(r,l),n[17].col===n[55].id?f?(f.p(n,T),T[0]&139264&&v(f,1)):(f=tl(n),f.c(),v(f,1),f.m(e,o)):f&&(be(),N(f,1,1,()=>{f=null}),ke()),(!s||T[0]&8192&&a!==(a=ye(n[55].type)+" svelte-kd019o"))&&b(e,"class",a),(!s||T[0]&1024)&&F(e,"color",n[10]),(!s||T[0]&512)&&F(e,"background-color",n[9]),(!s||T[0]&8)&&F(e,"cursor",n[3]?"pointer":"auto")},i(h){s||(v(f),s=!0)},o(h){N(f),s=!1},d(h){h&&m(e),f&&f.d(),u=!1,d()}}}function rl(n){let e,t;return e=new Tl({props:{ascending:n[17].ascending}}),{c(){fe(e.$$.fragment)},l(l){ue(e.$$.fragment,l)},m(l,r){ce(e,l,r),t=!0},p(l,r){const i={};r[0]&131072&&(i.ascending=l[17].ascending),e.$set(i)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){de(e,l)}}}function ol(n){let e,t=(n[55].title?n[55].title:n[7]?n[32](n[55]).title:n[32](n[55]).id)+"",l,r,i,o,a,s,u,d=n[17].col===n[55].id&&rl(n);return{c(){e=E("th"),l=$(t),r=J(),d&&d.c(),i=J(),this.h()},l(f){e=S(f,"TH",{class:!0,style:!0});var h=L(e);l=x(h,t),r=W(h),d&&d.l(h),i=W(h),h.forEach(m),this.h()},h(){b(e,"class",o=ye(n[32](n[55]).type)+" svelte-kd019o"),F(e,"text-align",n[55].align),F(e,"color",n[10]),F(e,"background-color",n[9]),F(e,"cursor",n[3]?"pointer":"auto")},m(f,h){D(f,e,h),k(e,l),k(e,r),d&&d.m(e,null),k(e,i),a=!0,s||(u=he(e,"click",function(){vl(n[3]?n[19](n[55].id):"")&&(n[3]?n[19](n[55].id):"").apply(this,arguments)}),s=!0)},p(f,h){n=f,(!a||h[0]&1048704)&&t!==(t=(n[55].title?n[55].title:n[7]?n[32](n[55]).title:n[32](n[55]).id)+"")&&_e(l,t),n[17].col===n[55].id?d?(d.p(n,h),h[0]&1179648&&v(d,1)):(d=rl(n),d.c(),v(d,1),d.m(e,i)):d&&(be(),N(d,1,1,()=>{d=null}),ke()),(!a||h[0]&1048576&&o!==(o=ye(n[32](n[55]).type)+" svelte-kd019o"))&&b(e,"class",o),(!a||h[0]&1048576)&&F(e,"text-align",n[55].align),(!a||h[0]&1024)&&F(e,"color",n[10]),(!a||h[0]&512)&&F(e,"background-color",n[9]),(!a||h[0]&8)&&F(e,"cursor",n[3]?"pointer":"auto")},i(f){a||(v(d),a=!0)},o(f){N(d),a=!1},d(f){f&&m(e),d&&d.d(),s=!1,u()}}}function il(n){let e;function t(i,o){return i[54]===0?_t:dt}let r=t(n)(n);return{c(){e=E("td"),r.c(),this.h()},l(i){e=S(i,"TD",{class:!0,style:!0});var o=L(e);r.l(o),o.forEach(m),this.h()},h(){b(e,"class","index svelte-kd019o"),F(e,"width","2%"),K(e,"row-lines",n[6])},m(i,o){D(i,e,o),r.m(e,null)},p(i,o){r.p(i,o),o[0]&64&&K(e,"row-lines",i[6])},d(i){i&&m(e),r.d()}}}function dt(n){let e=(n[14]+n[54]+1).toLocaleString()+"",t;return{c(){t=$(e)},l(l){t=x(l,e)},m(l,r){D(l,t,r)},p(l,r){r[0]&16384&&e!==(e=(l[14]+l[54]+1).toLocaleString()+"")&&_e(t,e)},d(l){l&&m(t)}}}function _t(n){let e=(n[14]+n[54]+1).toLocaleString()+"",t;return{c(){t=$(e)},l(l){t=x(l,e)},m(l,r){D(l,t,r)},p(l,r){r[0]&16384&&e!==(e=(l[14]+l[54]+1).toLocaleString()+"")&&_e(t,e)},d(l){l&&m(t)}}}function ht(n){let e,t=n[13].filter(bl),l=[];for(let r=0;r<t.length;r+=1)l[r]=sl(Je(n,t,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=ee()},l(r){for(let i=0;i<l.length;i+=1)l[i].l(r);e=ee()},m(r,i){for(let o=0;o<l.length;o+=1)l[o].m(r,i);D(r,e,i)},p(r,i){if(i[0]&270400){t=r[13].filter(bl);let o;for(o=0;o<t.length;o+=1){const a=Je(r,t,o);l[o]?l[o].p(a,i):(l[o]=sl(a),l[o].c(),l[o].m(e.parentNode,e))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}},d(r){Le(l,r),r&&m(e)}}}function mt(n){let e,t=n[20].columns,l=[];for(let r=0;r<t.length;r+=1)l[r]=cl(We(n,t,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=ee()},l(r){for(let i=0;i<l.length;i+=1)l[i].l(r);e=ee()},m(r,i){for(let o=0;o<l.length;o+=1)l[o].m(r,i);D(r,e,i)},p(r,i){if(i[0]&1310784|i[1]&2){t=r[20].columns;let o;for(o=0;o<t.length;o+=1){const a=We(r,t,o);l[o]?l[o].p(a,i):(l[o]=cl(a),l[o].c(),l[o].m(e.parentNode,e))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}},d(r){Le(l,r),r&&m(e)}}}function sl(n){let e,t=ve(n[52][n[55].id],n[55].format,n[55].columnUnitSummary)+"",l,r;return{c(){e=E("td"),l=$(t),this.h()},l(i){e=S(i,"TD",{class:!0});var o=L(e);l=x(o,t),o.forEach(m),this.h()},h(){b(e,"class",r=ye(n[55].type)+" svelte-kd019o"),K(e,"row-lines",n[6])},m(i,o){D(i,e,o),k(e,l)},p(i,o){o[0]&270336&&t!==(t=ve(i[52][i[55].id],i[55].format,i[55].columnUnitSummary)+"")&&_e(l,t),o[0]&8192&&r!==(r=ye(i[55].type)+" svelte-kd019o")&&b(e,"class",r),o[0]&8256&&K(e,"row-lines",i[6])},d(i){i&&m(e)}}}function gt(n){let e=ve(n[52][n[55].id],n[55].fmt?Te(n[55].fmt,n[32](n[55]).format.valueType):n[32](n[55]).format,n[32](n[55]).columnUnitSummary)+"",t;return{c(){t=$(e)},l(l){t=x(l,e)},m(l,r){D(l,t,r)},p(l,r){r[0]&1310720&&e!==(e=ve(l[52][l[55].id],l[55].fmt?Te(l[55].fmt,l[32](l[55]).format.valueType):l[32](l[55]).format,l[32](l[55]).columnUnitSummary)+"")&&_e(t,e)},d(l){l&&m(t)}}}function bt(n){let e,t,l,r=n[55].showValue&&al(n);return{c(){e=E("div"),t=E("div"),r&&r.c(),this.h()},l(i){e=S(i,"DIV",{class:!0,style:!0});var o=L(e);t=S(o,"DIV",{style:!0,class:!0});var a=L(t);r&&r.l(a),a.forEach(m),o.forEach(m),this.h()},h(){F(t,"text-align",n[55].align??"right"),b(t,"class","svelte-kd019o"),b(e,"class","m-0 text-xs font-medium font-ui svelte-kd019o"),b(e,"style",l=`color:${n[52][n[55].id]>=0&&!n[55].downIsGood||n[52][n[55].id]<0&&n[55].downIsGood?"var(--green-700)":"var(--red-700)"}`)},m(i,o){D(i,e,o),k(e,t),r&&r.m(t,null)},p(i,o){i[55].showValue?r?r.p(i,o):(r=al(i),r.c(),r.m(t,null)):r&&(r.d(1),r=null),o[0]&1048576&&F(t,"text-align",i[55].align??"right"),o[0]&1310720&&l!==(l=`color:${i[52][i[55].id]>=0&&!i[55].downIsGood||i[52][i[55].id]<0&&i[55].downIsGood?"var(--green-700)":"var(--red-700)"}`)&&b(e,"style",l)},d(i){i&&m(e),r&&r.d()}}}function kt(n){let e;function t(i,o){return i[55].linkLabel!=null?wt:vt}let l=t(n),r=l(n);return{c(){r.c(),e=ee()},l(i){r.l(i),e=ee()},m(i,o){r.m(i,o),D(i,e,o)},p(i,o){l===(l=t(i))&&r?r.p(i,o):(r.d(1),r=l(i),r&&(r.c(),r.m(e.parentNode,e)))},d(i){r.d(i),i&&m(e)}}}function pt(n){let e,t,l;return{c(){e=E("img"),this.h()},l(r){e=S(r,"IMG",{src:!0,alt:!0,style:!0,class:!0}),this.h()},h(){Ke(e.src,t=n[52][n[55].id])||b(e,"src",t),b(e,"alt",l=n[55].alt?n[52][n[55].alt]:n[52][n[55].id].replace(/^(.*[/])/g,"").replace(/[.][^.]+$/g,"")),F(e,"margin","0.5em auto 0.5em auto"),F(e,"height",n[55].height),F(e,"width",n[55].width),b(e,"class","svelte-kd019o")},m(r,i){D(r,e,i)},p(r,i){i[0]&1310720&&!Ke(e.src,t=r[52][r[55].id])&&b(e,"src",t),i[0]&1310720&&l!==(l=r[55].alt?r[52][r[55].alt]:r[52][r[55].id].replace(/^(.*[/])/g,"").replace(/[.][^.]+$/g,""))&&b(e,"alt",l),i[0]&1048576&&F(e,"height",r[55].height),i[0]&1048576&&F(e,"width",r[55].width)},d(r){r&&m(e)}}}function al(n){let e,t=ve(n[52][n[55].id],n[55].fmt?Te(n[55].fmt,n[32](n[55]).format.valueType):n[32](n[55]).format,n[32](n[55]).columnUnitSummary)+"",l,r,i,o=n[55].deltaSymbol&&fl(n);return{c(){e=E("span"),l=$(t),r=J(),o&&o.c(),i=ee(),this.h()},l(a){e=S(a,"SPAN",{class:!0});var s=L(e);l=x(s,t),s.forEach(m),r=W(a),o&&o.l(a),i=ee(),this.h()},h(){b(e,"class","svelte-kd019o")},m(a,s){D(a,e,s),k(e,l),D(a,r,s),o&&o.m(a,s),D(a,i,s)},p(a,s){s[0]&1310720&&t!==(t=ve(a[52][a[55].id],a[55].fmt?Te(a[55].fmt,a[32](a[55]).format.valueType):a[32](a[55]).format,a[32](a[55]).columnUnitSummary)+"")&&_e(l,t),a[55].deltaSymbol?o?o.p(a,s):(o=fl(a),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},d(a){a&&m(e),a&&m(r),o&&o.d(a),a&&m(i)}}}function fl(n){let e,t=n[52][n[55].id]>=0?"&#9650;":"&#9660;";return{c(){e=E("span"),this.h()},l(l){e=S(l,"SPAN",{class:!0});var r=L(e);r.forEach(m),this.h()},h(){b(e,"class","font-[system-ui] svelte-kd019o")},m(l,r){D(l,e,r),e.innerHTML=t},p(l,r){r[0]&1310720&&t!==(t=l[52][l[55].id]>=0?"&#9650;":"&#9660;")&&(e.innerHTML=t)},d(l){l&&m(e)}}}function vt(n){let e=ve(n[52][n[55].id],n[55].fmt?Te(n[55].fmt,n[32](n[55]).format.valueType):n[32](n[55]).format,n[32](n[55]).columnUnitSummary)+"",t;return{c(){t=$(e)},l(l){t=x(l,e)},m(l,r){D(l,t,r)},p(l,r){r[0]&1310720&&e!==(e=ve(l[52][l[55].id],l[55].fmt?Te(l[55].fmt,l[32](l[55]).format.valueType):l[32](l[55]).format,l[32](l[55]).columnUnitSummary)+"")&&_e(t,e)},d(l){l&&m(t)}}}function wt(n){let e;function t(o,a){return o[52][o[55].linkLabel]!=null?ul:o[55].linkLabel in o[52]?Tt:yt}function l(o,a){return a===ul?st(o):o}let r=t(n),i=r(l(n,r));return{c(){i.c(),e=ee()},l(o){i.l(o),e=ee()},m(o,a){i.m(o,a),D(o,e,a)},p(o,a){r===(r=t(o))&&i?i.p(l(o,r),a):(i.d(1),i=r(l(o,r)),i&&(i.c(),i.m(e.parentNode,e)))},d(o){i.d(o),o&&m(e)}}}function yt(n){let e=n[55].linkLabel+"",t;return{c(){t=$(e)},l(l){t=x(l,e)},m(l,r){D(l,t,r)},p(l,r){r[0]&1048576&&e!==(e=l[55].linkLabel+"")&&_e(t,e)},d(l){l&&m(t)}}}function Tt(n){let e;return{c(){e=$("-")},l(t){e=x(t,"-")},m(t,l){D(t,e,l)},p:Ie,d(t){t&&m(e)}}}function ul(n){let e,t=ve(n[52][n[55].linkLabel],n[55].fmt?Te(n[55].fmt,n[61].format.valueType):n[61].format,n[61].columnUnitSummary)+"",l,r,i;return{c(){e=E("a"),l=$(t),this.h()},l(o){e=S(o,"A",{href:!0,target:!0,class:!0});var a=L(e);l=x(a,t),a.forEach(m),this.h()},h(){b(e,"href",r=n[52][n[55].id]),b(e,"target",i=n[55].openInNewTab?"_blank":""),b(e,"class","text-blue-600 hover:text-blue-700 transition-colors duration-200 svelte-kd019o")},m(o,a){D(o,e,a),k(e,l)},p(o,a){a[0]&1310720&&t!==(t=ve(o[52][o[55].linkLabel],o[55].fmt?Te(o[55].fmt,o[61].format.valueType):o[61].format,o[61].columnUnitSummary)+"")&&_e(l,t),a[0]&1310720&&r!==(r=o[52][o[55].id])&&b(e,"href",r),a[0]&1048576&&i!==(i=o[55].openInNewTab?"_blank":"")&&b(e,"target",i)},d(o){o&&m(e)}}}function cl(n){let e,t,l,r;function i(s,u){return s[55].contentType==="image"&&s[52][s[55].id]!==void 0?pt:s[55].contentType==="link"&&s[52][s[55].id]!==void 0?kt:s[55].contentType==="delta"&&s[52][s[55].id]!==void 0?bt:gt}let o=i(n),a=o(n);return{c(){e=E("td"),a.c(),t=J(),this.h()},l(s){e=S(s,"TD",{class:!0,style:!0});var u=L(e);a.l(u),t=W(u),u.forEach(m),this.h()},h(){b(e,"class",l=ye(n[32](n[55]).type)+" svelte-kd019o"),b(e,"style",r="text-align: "+n[55].align+"; height: "+n[55].height+"; width: "+n[55].width+"; white-space: "+(n[55].wrap?"normal":"nowrap")+"; "+(n[55].contentType==="colorscale"&&n[58]?` background-color: ${n[55].useColor} ${(n[52][n[55].id]-n[56])/(n[57]-n[56])})`:"")),K(e,"row-lines",n[6])},m(s,u){D(s,e,u),a.m(e,null),k(e,t)},p(s,u){o===(o=i(s))&&a?a.p(s,u):(a.d(1),a=o(s),a&&(a.c(),a.m(e,t))),u[0]&1048576&&l!==(l=ye(s[32](s[55]).type)+" svelte-kd019o")&&b(e,"class",l),u[0]&1310720&&r!==(r="text-align: "+s[55].align+"; height: "+s[55].height+"; width: "+s[55].width+"; white-space: "+(s[55].wrap?"normal":"nowrap")+"; "+(s[55].contentType==="colorscale"&&s[58]?` background-color: ${s[55].useColor} ${(s[52][s[55].id]-s[56])/(s[57]-s[56])})`:""))&&b(e,"style",r),u[0]&1048640&&K(e,"row-lines",s[6])},d(s){s&&m(e),a.d()}}}function dl(n){let e,t,l,r,i,o=n[1]&&il(n);function a(f,h){return f[20].columns.length>0?mt:ht}let s=a(n),u=s(n);function d(){return n[42](n[52])}return{c(){e=E("tr"),o&&o.c(),t=J(),u.c(),l=J(),this.h()},l(f){e=S(f,"TR",{class:!0});var h=L(e);o&&o.l(h),t=W(h),u.l(h),l=W(h),h.forEach(m),this.h()},h(){b(e,"class","svelte-kd019o"),K(e,"shaded-row",n[5]&&n[54]%2===0),K(e,"row-link",n[8]!=null)},m(f,h){D(f,e,h),o&&o.m(e,null),k(e,t),u.m(e,null),k(e,l),r||(i=he(e,"click",d),r=!0)},p(f,h){n=f,n[1]?o?o.p(n,h):(o=il(n),o.c(),o.m(e,t)):o&&(o.d(1),o=null),s===(s=a(n))&&u?u.p(n,h):(u.d(1),u=s(n),u&&(u.c(),u.m(e,l))),h[0]&32&&K(e,"shaded-row",n[5]&&n[54]%2===0),h[0]&256&&K(e,"row-link",n[8]!=null)},d(f){f&&m(e),o&&o.d(),u.d(),r=!1,i()}}}function Et(n){let e,t,l=n[4]&&_l(n);return{c(){e=E("div"),l&&l.c(),this.h()},l(r){e=S(r,"DIV",{class:!0});var i=L(e);l&&l.l(i),i.forEach(m),this.h()},h(){b(e,"class","table-footer svelte-kd019o")},m(r,i){D(r,e,i),l&&l.m(e,null),t=!0},p(r,i){r[4]?l?(l.p(r,i),i[0]&16&&v(l,1)):(l=_l(r),l.c(),v(l,1),l.m(e,null)):l&&(be(),N(l,1,1,()=>{l=null}),ke())},i(r){t||(v(l),t=!0)},o(r){N(l),t=!1},d(r){r&&m(e),l&&l.d()}}}function St(n){let e,t,l,r,i,o,a,s,u,d,f,h,T,Z,C,U,X,Q=n[24].toLocaleString()+"",ie,Y,B,re=n[26].toLocaleString()+"",se,ne,A=n[23].toLocaleString()+"",V,R,_,G,P,I,ae,le,te,j,O,me,oe,H,c,w;i=new Ne({props:{src:jl}}),d=new Ne({props:{src:ql,class:"h-[0.83em]"}}),I=new Ne({props:{src:Kl,class:"h-[0.83em]"}}),O=new Ne({props:{src:Ql}});let M=n[4]&&hl(n);return{c(){e=E("div"),t=E("div"),l=E("button"),r=E("div"),fe(i.$$.fragment),a=J(),s=E("button"),u=E("div"),fe(d.$$.fragment),h=J(),T=E("span"),Z=$("Page "),C=E("input"),U=$(`
						/
						`),X=E("span"),ie=$(Q),Y=J(),B=E("span"),se=$(re),ne=$(" of "),V=$(A),R=$(" records"),_=J(),G=E("button"),P=E("div"),fe(I.$$.fragment),le=J(),te=E("button"),j=E("div"),fe(O.$$.fragment),oe=J(),M&&M.c(),this.h()},l(y){e=S(y,"DIV",{class:!0});var p=L(e);t=S(p,"DIV",{class:!0});var z=L(t);l=S(z,"BUTTON",{"aria-label":!0,class:!0});var Ee=L(l);r=S(Ee,"DIV",{class:!0});var pe=L(r);ue(i.$$.fragment,pe),pe.forEach(m),Ee.forEach(m),a=W(z),s=S(z,"BUTTON",{"aria-label":!0,class:!0});var Ue=L(s);u=S(Ue,"DIV",{class:!0});var Pe=L(u);ue(d.$$.fragment,Pe),Pe.forEach(m),Ue.forEach(m),h=W(z),T=S(z,"SPAN",{class:!0});var Se=L(T);Z=x(Se,"Page "),C=S(Se,"INPUT",{class:!0,type:!0,placeholder:!0}),U=x(Se,`
						/
						`),X=S(Se,"SPAN",{class:!0,style:!0});var Be=L(X);ie=x(Be,Q),Be.forEach(m),Se.forEach(m),Y=W(z),B=S(z,"SPAN",{class:!0});var Ce=L(B);se=x(Ce,re),ne=x(Ce," of "),V=x(Ce,A),R=x(Ce," records"),Ce.forEach(m),_=W(z),G=S(z,"BUTTON",{"aria-label":!0,class:!0});var Ae=L(G);P=S(Ae,"DIV",{class:!0});var Fe=L(P);ue(I.$$.fragment,Fe),Fe.forEach(m),Ae.forEach(m),le=W(z),te=S(z,"BUTTON",{"aria-label":!0,class:!0});var g=L(te);j=S(g,"DIV",{class:!0});var q=L(j);ue(O.$$.fragment,q),q.forEach(m),g.forEach(m),z.forEach(m),oe=W(p),M&&M.l(p),p.forEach(m),this.h()},h(){b(r,"class","page-icon flex items-center svelte-kd019o"),b(l,"aria-label","first-page"),b(l,"class","page-changer svelte-kd019o"),l.disabled=o=n[25]===1,K(l,"hovering",n[21]),b(u,"class","page-icon h-[0.83em] flex items-center svelte-kd019o"),b(s,"aria-label","previous-page"),b(s,"class","page-changer svelte-kd019o"),s.disabled=f=n[25]===1,K(s,"hovering",n[21]),b(C,"class","page-input svelte-kd019o"),b(C,"type","number"),b(C,"placeholder",n[25]),K(C,"hovering",n[21]),K(C,"error",n[15]>n[24]),b(X,"class","page-count svelte-kd019o"),F(X,"margin-left","4px"),b(T,"class","page-count svelte-kd019o"),b(B,"class","print-page-count svelte-kd019o"),b(P,"class","page-icon h-[0.83em] flex items-center svelte-kd019o"),b(G,"aria-label","next-page"),b(G,"class","page-changer svelte-kd019o"),G.disabled=ae=n[25]===n[24],K(G,"hovering",n[21]),b(j,"class","page-icon flex items-center svelte-kd019o"),b(te,"aria-label","last-page"),b(te,"class","page-changer svelte-kd019o"),te.disabled=me=n[25]===n[24],K(te,"hovering",n[21]),b(t,"class","page-labels svelte-kd019o"),b(e,"class","pagination svelte-kd019o")},m(y,p){D(y,e,p),k(e,t),k(t,l),k(l,r),ce(i,r,null),k(t,a),k(t,s),k(s,u),ce(d,u,null),k(t,h),k(t,T),k(T,Z),k(T,C),Ge(C,n[15]),k(T,U),k(T,X),k(X,ie),k(t,Y),k(t,B),k(B,se),k(B,ne),k(B,V),k(B,R),k(t,_),k(t,G),k(G,P),ce(I,P,null),k(t,le),k(t,te),k(te,j),ce(O,j,null),k(e,oe),M&&M.m(e,null),H=!0,c||(w=[he(l,"click",n[43]),he(s,"click",n[44]),he(C,"input",n[45]),he(C,"keyup",n[46]),he(C,"change",n[47]),he(G,"click",n[48]),he(te,"click",n[49])],c=!0)},p(y,p){(!H||p[0]&33554432&&o!==(o=y[25]===1))&&(l.disabled=o),(!H||p[0]&2097152)&&K(l,"hovering",y[21]),(!H||p[0]&33554432&&f!==(f=y[25]===1))&&(s.disabled=f),(!H||p[0]&2097152)&&K(s,"hovering",y[21]),(!H||p[0]&33554432)&&b(C,"placeholder",y[25]),p[0]&32768&&pl(C.value)!==y[15]&&Ge(C,y[15]),(!H||p[0]&2097152)&&K(C,"hovering",y[21]),(!H||p[0]&16809984)&&K(C,"error",y[15]>y[24]),(!H||p[0]&16777216)&&Q!==(Q=y[24].toLocaleString()+"")&&_e(ie,Q),(!H||p[0]&67108864)&&re!==(re=y[26].toLocaleString()+"")&&_e(se,re),(!H||p[0]&8388608)&&A!==(A=y[23].toLocaleString()+"")&&_e(V,A),(!H||p[0]&50331648&&ae!==(ae=y[25]===y[24]))&&(G.disabled=ae),(!H||p[0]&2097152)&&K(G,"hovering",y[21]),(!H||p[0]&50331648&&me!==(me=y[25]===y[24]))&&(te.disabled=me),(!H||p[0]&2097152)&&K(te,"hovering",y[21]),y[4]?M?(M.p(y,p),p[0]&16&&v(M,1)):(M=hl(y),M.c(),v(M,1),M.m(e,null)):M&&(be(),N(M,1,1,()=>{M=null}),ke())},i(y){H||(v(i.$$.fragment,y),v(d.$$.fragment,y),v(I.$$.fragment,y),v(O.$$.fragment,y),v(M),H=!0)},o(y){N(i.$$.fragment,y),N(d.$$.fragment,y),N(I.$$.fragment,y),N(O.$$.fragment,y),N(M),H=!1},d(y){y&&m(e),de(i),de(d),de(I),de(O),M&&M.d(),c=!1,He(w)}}}function _l(n){let e,t;return e=new yl({props:{class:"download-button",data:n[27],display:n[21]}}),{c(){fe(e.$$.fragment)},l(l){ue(e.$$.fragment,l)},m(l,r){ce(e,l,r),t=!0},p(l,r){const i={};r[0]&134217728&&(i.data=l[27]),r[0]&2097152&&(i.display=l[21]),e.$set(i)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){de(e,l)}}}function hl(n){let e,t;return e=new yl({props:{class:"download-button",data:n[27],display:n[21]}}),{c(){fe(e.$$.fragment)},l(l){ue(e.$$.fragment,l)},m(l,r){ce(e,l,r),t=!0},p(l,r){const i={};r[0]&134217728&&(i.data=l[27]),r[0]&2097152&&(i.display=l[21]),e.$set(i)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){de(e,l)}}}function Ct(n){let e,t,l,r;const i=[ft,at],o=[];function a(s,u){return s[12]===void 0?0:1}return e=a(n),t=o[e]=i[e](n),{c(){t.c(),l=ee()},l(s){t.l(s),l=ee()},m(s,u){o[e].m(s,u),D(s,l,u),r=!0},p(s,u){let d=e;e=a(s),e===d?o[e].p(s,u):(be(),N(o[d],1,1,()=>{o[d]=null}),ke(),t=o[e],t?t.p(s,u):(t=o[e]=i[e](s),t.c()),v(t,1),t.m(l.parentNode,l))},i(s){r||(v(t),r=!0)},o(s){N(t),r=!1},d(s){o[e].d(s),s&&m(l)}}}let Nt="1.5em",It="1em",Lt="0em";function Dt(n,e){return n.map(t=>{var l={};return e.forEach(r=>l[r]=t[r]),l})}const ml=n=>n.contentType==="link",gl=n=>n.show===!0,bl=n=>n.show===!0;function Vt(n,e,t){let l,r,i,o,{$$slots:a={},$$scope:s}=e,u=Al({});kl(n,u,g=>t(20,o=g)),Cl(wl,u);let{data:d}=e,{rows:f=10}=e;f=Number.parseInt(f);let h,{rowNumbers:T=!1}=e;T=T==="true"||T===!0;let Z=!1,{search:C=!1}=e;C=C==="true"||C===!0;let{sortable:U=!0}=e;U=U==="true"||U===!0;let{downloadable:X=!0}=e;X=X==="true"||X===!0;let{link:Q=void 0}=e;function ie(g){Q&&(window.location=g)}let{showLinkCol:Y=!1}=e;Y=Y==="true"||Y===!0;let B;u.update(g=>({...g,data:d,columns:[]}));let{rowShading:re=!1}=e;re=re==="true"||re===!0;let{rowLines:se=!0}=e;se=se==="true"||se===!0;let{headerColor:ne}=e,{headerFontColor:A="var(--grey-900)"}=e,{formatColumnTitles:V=!0}=e;V=V==="true"||V===!0;let R,_=0,G=null,P="",I,ae,le,te=!1,j={col:null,ascending:null},O,me=I,oe,H=1,c,w=0;function M(g){const q=R.filter(ge=>ge.id===g.id);if(q===void 0||q.length!==1){if(t(12,B=g.id===void 0?new Error('please add an "id" property to all the <Column ... />'):new Error(`column with id: "${g.id}" not found`)),Oe)throw B;return console.warn(B.message),""}return q[0]}let y;function p(g){P=g,t(16,P)}const z=g=>ie(g[Q]),Ee=()=>i(0),pe=()=>i(H-2);function Ue(){G=pl(this.value),t(15,G),t(0,d),t(13,R),t(36,ae),t(37,le),t(35,I),t(33,f),t(14,_),t(38,c),t(34,Y),t(8,Q),t(12,B),t(17,j)}const Pe=()=>i((G??1)-1),Se=()=>i((G??1)-1),Be=()=>i(H),Ce=()=>i(oe-1),Ae=()=>t(21,Z=!0),Fe=()=>t(21,Z=!1);return n.$$set=g=>{"data"in g&&t(0,d=g.data),"rows"in g&&t(33,f=g.rows),"rowNumbers"in g&&t(1,T=g.rowNumbers),"search"in g&&t(2,C=g.search),"sortable"in g&&t(3,U=g.sortable),"downloadable"in g&&t(4,X=g.downloadable),"link"in g&&t(8,Q=g.link),"showLinkCol"in g&&t(34,Y=g.showLinkCol),"rowShading"in g&&t(5,re=g.rowShading),"rowLines"in g&&t(6,se=g.rowLines),"headerColor"in g&&t(9,ne=g.headerColor),"headerFontColor"in g&&t(10,A=g.headerFontColor),"formatColumnTitles"in g&&t(7,V=g.formatColumnTitles),"$$scope"in g&&t(39,s=g.$$scope)},n.$$.update=()=>{if(n.$$.dirty[0]&12545|n.$$.dirty[1]&8)try{t(12,B=void 0),Bl(d),t(13,R=Fl(d,"array"));let g=R.filter(q=>q.type==="date");if(g=g.map(q=>q.id),g.length>0)for(let q=0;q<g.length;q++)t(0,d=Rl(d,g[q]));for(let q=0;q<R.length;q++)t(13,R[q].show=!(Y===!1&&R[q].id===Q),R)}catch(g){if(t(12,B=g.message),Oe)throw B}n.$$.dirty[0]&1|n.$$.dirty[1]&4&&t(11,h=d.length>f),n.$$.dirty[0]&1&&t(35,I=d),n.$$.dirty[0]&8193|n.$$.dirty[1]&112&&t(29,l=g=>{if(g!==""){t(35,I=[]),t(14,_=0),t(15,G=null);for(let q=0;q<d.length;q++){t(36,ae=d[q]);for(let ge=0;ge<R.length;ge++)if(R[ge].type==="date"&&ae[R[ge].id]!=null?t(37,le=ae[R[ge].id].toISOString()):t(37,le=(ae[R[ge].id]??"").toString().toLowerCase()),le.indexOf(g.toLowerCase())!=-1&&le!=null){I.push(ae);break}}t(22,te=I.length===0)}else t(35,I=d),t(22,te=!1),t(14,_=0),t(15,G=null)}),n.$$.dirty[0]&131073|n.$$.dirty[1]&16&&t(19,r=g=>{j.col==g?t(17,j.ascending=!j.ascending,j):(t(17,j.col=g,j),t(17,j.ascending=!0,j));const q=j.ascending?1:-1,ge=we=>we==null||typeof we=="number"&&isNaN(we),je=(we,Re)=>ge(we[g])&&!ge(Re[g])||we[g]<Re[g]?-1*q:ge(Re[g])&&!ge(we[g])||we[g]>Re[g]?1*q:0;d.sort(je),t(35,I=I.sort(je))}),n.$$.dirty[0]&1&&t(17,j={col:null,ascending:null}),n.$$.dirty[1]&16&&t(23,O=I.length),n.$$.dirty[0]&49152|n.$$.dirty[1]&148&&t(28,i=g=>{t(14,_=g*f),t(38,c=_+f),t(25,H=Math.ceil(c/f)),G&&t(15,G=Math.ceil(c/f)),t(23,O=I.length),t(18,me=I.slice(_,_+f))}),n.$$.dirty[0]&16384|n.$$.dirty[1]&4&&t(25,H=Math.ceil((_+f)/f)),n.$$.dirty[0]&280576|n.$$.dirty[1]&20&&(h?(t(24,oe=Math.ceil(I.length/f)),t(18,me=I.slice(_,_+f)),t(26,w=me.length)):(t(25,H=1),t(18,me=I))),n.$$.dirty[0]&1048577&&t(27,y=o.columns.length>0?Dt(d,o.columns.map(g=>g.id)):d)},[d,T,C,U,X,re,se,V,Q,ne,A,h,B,R,_,G,P,j,me,r,o,Z,te,O,oe,H,w,y,i,l,u,ie,M,f,Y,I,ae,le,c,s,a,p,z,Ee,pe,Ue,Pe,Se,Be,Ce,Ae,Fe]}class Ht extends De{constructor(e){super(),Ve(this,e,Vt,Ct,Me,{data:0,rows:33,rowNumbers:1,search:2,sortable:3,downloadable:4,link:8,showLinkCol:34,rowShading:5,rowLines:6,headerColor:9,headerFontColor:10,formatColumnTitles:7},null,[-1,-1,-1])}}export{Ot as C,Ht as D,et as E};