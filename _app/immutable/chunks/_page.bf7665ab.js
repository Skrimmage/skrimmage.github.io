import{S as dr,i as _r,s as mr,M as tr,b as x,a as D,N as ir,g as ee,f as c,c as F,k as h,m as w,n as te,x as Fe,o as ie,a7 as ot,$ as Zr,p as ar,aj as at,q as rr,e as K,d as z,ah as Ar,a0 as dt,ak as _t,al as mt,t as Pe,j as Se,T as Qe,A as ce,B as C,C as ve,z as E,G as U,H as Q,I as L,J as B,ai as Dr,L as br,R as Fr,P as ct,a9 as vt,v as ht,D as pt,E as yt,F as gt,h as bt,r as Pr,u as wt,U as Ve,V as Ue}from"./index.fa6138d3.js";import{p as kt}from"./stores.9315061c.js";import{s as It,Q as Ae,p as Et,r as Sr,d as Le}from"./index.bca1a4ed.js";import{w as kr}from"./paths.6977d179.js";import{I as qt,C as Rt}from"./globalContexts.8bcf5d41.js";import{p as De}from"./profile.e7706513.js";import{L as Ot,a as vr}from"./Links.413b8364.js";import"./VennDiagram.svelte_svelte_type_style_lang.69ec4ecf.js";import{E as Tt,D as Ct}from"./DataTable.029d04f3.js";import{Q as Je}from"./QueryViewer.05fc22f1.js";import{c as jr,Q as Nt}from"./checkInputs.267d5cff.js";import{V as cr}from"./Value.fdc6fe52.js";import{g as Mt}from"./DownloadData.0c856e95.js";import{C as hr}from"./Column.4ad75ece.js";function At(t,e,r){return[...t].sort((i,n)=>(i[e]<n[e]?-1:1)*(r?1:-1))}const pr=kr({}),yr=kr({});function Wr(t,e,r){const i=t.slice();return i[51]=e[r][0],i[52]=e[r][1],i[54]=r,i}function Hr(t){let e,r;return{c(){e=tr("polyline"),this.h()},l(i){e=ir(i,"polyline",{points:!0,stroke:!0,fill:!0}),ee(e).forEach(c),this.h()},h(){h(e,"points",r=t[26].join(" ")),h(e,"stroke",t[16]),h(e,"fill","transparent")},m(i,n){w(i,e,n)},p(i,n){n[0]&67108864&&r!==(r=i[26].join(" "))&&h(e,"points",r),n[0]&65536&&h(e,"stroke",i[16])},d(i){i&&c(e)}}}function Vr(t){let e,r,i,n,s;return{c(){e=tr("circle"),this.h()},l(f){e=ir(f,"circle",{fill:!0,r:!0,cy:!0,cx:!0}),ee(e).forEach(c),this.h()},h(){h(e,"fill",r=t[7]&&t[23][t[20]]!==null&&t[23][t[20]]==t[51]?t[5]:"transparent"),h(e,"r",i=t[21]/2),h(e,"cy",n=t[2]-t[27](t[52])),h(e,"cx",s=(parseInt(t[4])+t[21])*t[54])},m(f,l){w(f,e,l)},p(f,l){l[0]&9437345&&r!==(r=f[7]&&f[23][f[20]]!==null&&f[23][f[20]]==f[51]?f[5]:"transparent")&&h(e,"fill",r),l[0]&2097152&&i!==(i=f[21]/2)&&h(e,"r",i),l[0]&5&&n!==(n=f[2]-f[27](f[52]))&&h(e,"cy",n),l[0]&2097168&&s!==(s=(parseInt(f[4])+f[21])*f[54])&&h(e,"cx",s)},d(f){f&&c(e)}}}function Ur(t){let e,r,i,n,s,f,l,o,d,m;function _(){return t[39](t[51],t[54])}function v(){return t[40](t[51],t[54])}function b(){return t[41](t[51],t[54])}function R(){return t[42](t[51],t[54])}function y(){return t[43](t[51],t[54])}let I=t[15]=="line"&&Vr(t);return{c(){e=tr("rect"),I&&I.c(),o=x(),this.h()},l(O){e=ir(O,"rect",{style:!0,opacity:!0,fill:!0,width:!0,height:!0,y:!0,x:!0,tabindex:!0}),ee(e).forEach(c),I&&I.l(O),o=x(),this.h()},h(){h(e,"style",r=t[8]?`transition: all ${t[8]}ms`:null),h(e,"opacity",i=t[7]&&t[23][t[20]]&&t[23][t[20]]!=t[51]?t[6]:1),h(e,"fill",n=t[15]=="line"?"transparent":t[5]),h(e,"width",t[21]),h(e,"height",s=t[15]=="line"?t[2]:t[27](t[52])),h(e,"y",f=t[15]=="line"?0:t[2]-t[27](t[52])),h(e,"x",l=(parseInt(t[4])+t[21])*t[54]),h(e,"tabindex",t[17])},m(O,M){w(O,e,M),I&&I.m(O,M),w(O,o,M),d||(m=[Fe(e,"mouseover",_),Fe(e,"focus",v),Fe(e,"touchstart",b,{passive:!0}),Fe(e,"click",R),Fe(e,"keypress",y)],d=!0)},p(O,M){t=O,M[0]&256&&r!==(r=t[8]?`transition: all ${t[8]}ms`:null)&&h(e,"style",r),M[0]&9437377&&i!==(i=t[7]&&t[23][t[20]]&&t[23][t[20]]!=t[51]?t[6]:1)&&h(e,"opacity",i),M[0]&32800&&n!==(n=t[15]=="line"?"transparent":t[5])&&h(e,"fill",n),M[0]&2097152&&h(e,"width",t[21]),M[0]&32773&&s!==(s=t[15]=="line"?t[2]:t[27](t[52]))&&h(e,"height",s),M[0]&32773&&f!==(f=t[15]=="line"?0:t[2]-t[27](t[52]))&&h(e,"y",f),M[0]&2097168&&l!==(l=(parseInt(t[4])+t[21])*t[54])&&h(e,"x",l),M[0]&131072&&h(e,"tabindex",t[17]),t[15]=="line"?I?I.p(t,M):(I=Vr(t),I.c(),I.m(o.parentNode,o)):I&&(I.d(1),I=null)},d(O){O&&c(e),I&&I.d(O),O&&c(o),d=!1,Zr(m)}}}function Lr(t){let e,r;function i(f,l){return f[24][f[1]]!==null?Ft:Dt}let n=i(t),s=n(t);return{c(){e=K("div"),s.c(),this.h()},l(f){e=z(f,"DIV",{class:!0,style:!0});var l=ee(e);s.l(l),l.forEach(c),this.h()},h(){h(e,"class","tiny-linked-charts-value"),h(e,"style",r=t[13]=="floating"?`position: absolute; transform: translateX(${t[25]}px)`:null)},m(f,l){w(f,e,l),s.m(e,null)},p(f,l){n===(n=i(f))&&s?s.p(f,l):(s.d(1),s=n(f),s&&(s.c(),s.m(e,null))),l[0]&33562624&&r!==(r=f[13]=="floating"?`position: absolute; transform: translateX(${f[25]}px)`:null)&&h(e,"style",r)},d(f){f&&c(e),s.d()}}}function Dt(t){let e,r;return{c(){e=new _t(!1),r=x(),this.h()},l(i){e=mt(i,!1),r=x(),this.h()},h(){e.a=r},m(i,n){e.m(t[10],i,n),w(i,r,n)},p(i,n){n[0]&1024&&e.p(i[10])},d(i){i&&c(r),i&&e.d()}}}function Ft(t){let e,r,i,n=(t[24][t[1]]||t[14])+"",s,f,l;return{c(){e=Pe(t[11]),r=D(),i=K("span"),s=Pe(n),f=D(),l=Pe(t[12])},l(o){e=Se(o,t[11]),r=F(o),i=z(o,"SPAN",{});var d=ee(i);s=Se(d,n),d.forEach(c),f=F(o),l=Se(o,t[12])},m(o,d){w(o,e,d),w(o,r,d),w(o,i,d),te(i,s),t[44](i),w(o,f,d),w(o,l,d)},p(o,d){d[0]&2048&&Qe(e,o[11]),d[0]&16793602&&n!==(n=(o[24][o[1]]||o[14])+"")&&Qe(s,n),d[0]&4096&&Qe(l,o[12])},d(o){o&&c(e),o&&c(r),o&&c(i),t[44](null),o&&c(f),o&&c(l)}}}function Pt(t){let e,r,i,n,s,f,l,o,d,m,_=t[15]=="line"&&Hr(t),v=Object.entries(t[0]),b=[];for(let y=0;y<v.length;y+=1)b[y]=Ur(Wr(t,v,y));let R=t[9]&&(t[24][t[1]]||t[10])&&Lr(t);return{c(){e=tr("svg"),r=tr("g"),_&&_.c(),i=x();for(let y=0;y<b.length;y+=1)b[y].c();l=D(),R&&R.c(),o=x(),this.h()},l(y){e=ir(y,"svg",{width:!0,height:!0,viewBox:!0,preserveAspectRatio:!0});var I=ee(e);r=ir(I,"g",{transform:!0});var O=ee(r);_&&_.l(O),i=x();for(let M=0;M<b.length;M+=1)b[M].l(O);O.forEach(c),I.forEach(c),l=F(y),R&&R.l(y),o=x(),this.h()},h(){h(r,"transform",n="translate("+t[22]+", 0)"),h(e,"width",t[3]),h(e,"height",s=t[15]=="line"?t[2]+t[21]/2:t[2]),h(e,"viewBox",f="0 0 "+t[3]+" "+t[2]),h(e,"preserveAspectRatio","none")},m(y,I){w(y,e,I),te(e,r),_&&_.m(r,null),te(r,i);for(let O=0;O<b.length;O+=1)b[O].m(r,null);w(y,l,I),R&&R.m(y,I),w(y,o,I),d||(m=[Fe(e,"mouseleave",t[29]),Fe(e,"blur",t[29])],d=!0)},p(y,I){if(y[15]=="line"?_?_.p(y,I):(_=Hr(y),_.c(),_.m(r,i)):_&&(_.d(1),_=null),I[0]&414614005){v=Object.entries(y[0]);let O;for(O=0;O<v.length;O+=1){const M=Wr(y,v,O);b[O]?b[O].p(M,I):(b[O]=Ur(M),b[O].c(),b[O].m(r,null))}for(;O<b.length;O+=1)b[O].d(1);b.length=v.length}I[0]&4194304&&n!==(n="translate("+y[22]+", 0)")&&h(r,"transform",n),I[0]&8&&h(e,"width",y[3]),I[0]&2129924&&s!==(s=y[15]=="line"?y[2]+y[21]/2:y[2])&&h(e,"height",s),I[0]&12&&f!==(f="0 0 "+y[3]+" "+y[2])&&h(e,"viewBox",f),y[9]&&(y[24][y[1]]||y[10])?R?R.p(y,I):(R=Lr(y),R.c(),R.m(o.parentNode,o)):R&&(R.d(1),R=null)},i:ie,o:ie,d(y){y&&c(e),_&&_.d(),ot(b,y),y&&c(l),R&&R.d(y),y&&c(o),d=!1,Zr(m)}}}function St(t,e,r){let i,n,s,f,l,o,d;ar(t,pr,a=>r(23,o=a)),ar(t,yr,a=>r(24,d=a));let{uid:m=(Math.random()+1).toString(36).substring(7)}=e,{data:_={}}=e,{labels:v=[]}=e,{values:b=[]}=e,{linked:R=""}=e,{height:y=40}=e,{width:I=150}=e,{barMinWidth:O=4}=e,{grow:M=!1}=e,{align:T="right"}=e,{gap:X=1}=e,{fill:Y="#ff3e00"}=e,{fadeOpacity:$=.5}=e,{hover:Z=!0}=e,{transition:ue=0}=e,{showValue:se=!1}=e,{valueDefault:oe="&nbsp;"}=e,{valuePrepend:me=""}=e,{valueAppend:ne=""}=e,{valuePosition:ye="static"}=e,{valueUndefined:je=0}=e,{scaleMax:fe=0}=e,{type:re="bar"}=e,{lineColor:H=Y}=e,{tabindex:j=-1}=e,{dispatchEvents:P=!1}=e,{clickHandler:S=(a,J)=>null}=e;const W=at();let V=0,he=[],u;function g(){return fe||(i?Math.max(...Object.values(_)):0)}function le(a){return Math.round(parseInt(y)/s*a-(re=="line"?n/2:0))||0}function pe(){return Math.max((parseInt(I)-i*parseInt(X))/i,parseInt(O))}function ge(){return T=="left"?0:parseInt(X)+parseInt(I)-(parseInt(X)+n)*i}function be(){let a=[];for(let J=0;J<Object.keys(_).length;J++)a.push([J*(n+X),y-le(Object.values(_)[J])]);return a}async function ae(a,J){Z&&(rr(pr,o[l]=a,o),await Ar(),P&&W("hover",{uid:m,key:a,index:J,linkedKey:l,value:d[m],valueElement:u,eventElement:event.target}))}async function we(){Z&&(rr(pr,o[l]=null,o),await Ar(),P&&W("blur",{uid:m,linkedKey:l,valueElement:u,eventElement:event.target}))}const ke=(a,J)=>ae(a,J),Ge=(a,J)=>ae(a,J),Ke=(a,J)=>ae(a,J),de=(a,J)=>S(a,J),ze=(a,J)=>S(a,J);function We(a){dt[a?"unshift":"push"](()=>{u=a,r(19,u)})}return t.$$set=a=>{"uid"in a&&r(1,m=a.uid),"data"in a&&r(0,_=a.data),"labels"in a&&r(30,v=a.labels),"values"in a&&r(31,b=a.values),"linked"in a&&r(32,R=a.linked),"height"in a&&r(2,y=a.height),"width"in a&&r(3,I=a.width),"barMinWidth"in a&&r(33,O=a.barMinWidth),"grow"in a&&r(34,M=a.grow),"align"in a&&r(35,T=a.align),"gap"in a&&r(4,X=a.gap),"fill"in a&&r(5,Y=a.fill),"fadeOpacity"in a&&r(6,$=a.fadeOpacity),"hover"in a&&r(7,Z=a.hover),"transition"in a&&r(8,ue=a.transition),"showValue"in a&&r(9,se=a.showValue),"valueDefault"in a&&r(10,oe=a.valueDefault),"valuePrepend"in a&&r(11,me=a.valuePrepend),"valueAppend"in a&&r(12,ne=a.valueAppend),"valuePosition"in a&&r(13,ye=a.valuePosition),"valueUndefined"in a&&r(14,je=a.valueUndefined),"scaleMax"in a&&r(36,fe=a.scaleMax),"type"in a&&r(15,re=a.type),"lineColor"in a&&r(16,H=a.lineColor),"tabindex"in a&&r(17,j=a.tabindex),"dispatchEvents"in a&&r(37,P=a.dispatchEvents),"clickHandler"in a&&r(18,S=a.clickHandler)},t.$$.update=()=>{t.$$.dirty[0]&1073741824|t.$$.dirty[1]&1&&v.length&&b.length&&r(0,_=Object.fromEntries(v.map((a,J)=>[v[J],b[J]]))),t.$$.dirty[0]&1&&r(38,i=Object.keys(_).length),t.$$.dirty[1]&140&&r(21,n=M?pe():parseInt(O)),t.$$.dirty[1]&128&&(s=g()),t.$$.dirty[1]&128&&r(22,f=i?ge():0),t.$$.dirty[1]&2&&r(20,l=R||(Math.random()+1).toString(36).substring(7)),t.$$.dirty[0]&15736849&&ye=="floating"&&r(25,V=(parseInt(X)+n)*Object.keys(_).indexOf(o[l])+f),t.$$.dirty[0]&32769&&re=="line"&&r(26,he=be()),t.$$.dirty[0]&9437187&&(o[l]?rr(yr,d[m]=_[o[l]],d):rr(yr,d[m]=null,d)),t.$$.dirty[0]&18350082|t.$$.dirty[1]&64&&P&&W("value-update",{value:d[m],uid:m,linkedKey:l,valueElement:u}),t.$$.dirty[0]&131072&&j>0&&console.warn("Tabindex should not be higher than 0")},[_,m,y,I,X,Y,$,Z,ue,se,oe,me,ne,ye,je,re,H,j,S,u,l,n,f,o,d,V,he,le,ae,we,v,b,R,O,M,T,fe,P,i,ke,Ge,Ke,de,ze,We]}class wr extends dr{constructor(e){super(),_r(this,e,St,Pt,mr,{uid:1,data:0,labels:30,values:31,linked:32,height:2,width:3,barMinWidth:33,grow:34,align:35,gap:4,fill:5,fadeOpacity:6,hover:7,transition:8,showValue:9,valueDefault:10,valuePrepend:11,valueAppend:12,valuePosition:13,valueUndefined:14,scaleMax:36,type:15,lineColor:16,tabindex:17,dispatchEvents:37,clickHandler:18},null,[-1,-1])}}function jt(t){let e,r,i,n,s,f,l,o,d;s=new cr({props:{data:t[0],column:t[3],fmt:t[6]}});let m=t[5]&&Br(t),_=t[4]&&Qr(t);return{c(){e=K("p"),r=Pe(t[1]),i=D(),n=K("div"),U(s.$$.fragment),f=D(),m&&m.c(),l=D(),_&&_.c(),o=x(),this.h()},l(v){e=z(v,"P",{class:!0});var b=ee(e);r=Se(b,t[1]),b.forEach(c),i=F(v),n=z(v,"DIV",{class:!0});var R=ee(n);Q(s.$$.fragment,R),f=F(R),m&&m.l(R),R.forEach(c),l=F(v),_&&_.l(v),o=x(),this.h()},h(){h(e,"class","text-sm text-gray-700"),h(n,"class","relative text-xl font-medium text-gray-700 my-0.5")},m(v,b){w(v,e,b),te(e,r),w(v,i,b),w(v,n,b),L(s,n,null),te(n,f),m&&m.m(n,null),w(v,l,b),_&&_.m(v,b),w(v,o,b),d=!0},p(v,b){(!d||b&2)&&Qe(r,v[1]);const R={};b&1&&(R.data=v[0]),b&8&&(R.column=v[3]),b&64&&(R.fmt=v[6]),s.$set(R),v[5]?m?(m.p(v,b),b&32&&E(m,1)):(m=Br(v),m.c(),E(m,1),m.m(n,null)):m&&(ce(),C(m,1,1,()=>{m=null}),ve()),v[4]?_?(_.p(v,b),b&16&&E(_,1)):(_=Qr(v),_.c(),E(_,1),_.m(o.parentNode,o)):_&&(ce(),C(_,1,1,()=>{_=null}),ve())},i(v){d||(E(s.$$.fragment,v),E(m),E(_),d=!0)},o(v){C(s.$$.fragment,v),C(m),C(_),d=!1},d(v){v&&c(e),v&&c(i),v&&c(n),B(s),m&&m.d(),v&&c(l),_&&_.d(v),v&&c(o)}}}function Wt(t){let e,r;return e=new Tt({props:{chartType:"Big Value",error:t[11].message}}),{c(){U(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,n){L(e,i,n),r=!0},p(i,n){const s={};n&2048&&(s.error=i[11].message),e.$set(s)},i(i){r||(E(e.$$.fragment,i),r=!0)},o(i){C(e.$$.fragment,i),r=!1},d(i){B(e,i)}}}function Br(t){let e=t[14](),r,i,n=e&&Ht(t);return{c(){n&&n.c(),r=x()},l(s){n&&n.l(s),r=x()},m(s,f){n&&n.m(s,f),w(s,r,f),i=!0},p(s,f){e&&n.p(s,f)},i(s){i||(E(n),i=!0)},o(s){C(n),i=!1},d(s){n&&n.d(s),s&&c(r)}}}function Ht(t){let e,r,i;var n=wr;function s(f){return{props:{data:f[13],type:"line",grow:!0,barMinWidth:"1",gap:"0",fill:"var(--grey-400)",align:"left",hover:!1,linked:"id",width:"75",tabindex:-1}}}return n&&(r=Dr(n,s(t))),{c(){e=K("div"),r&&U(r.$$.fragment),this.h()},l(f){e=z(f,"DIV",{"data-viz":!0,class:!0});var l=ee(e);r&&Q(r.$$.fragment,l),l.forEach(c),this.h()},h(){h(e,"data-viz","BigValue"),h(e,"class","inline-block svelte-d8ixt8")},m(f,l){w(f,e,l),r&&L(r,e,null),i=!0},p(f,l){const o={};if(l&8192&&(o.data=f[13]),n!==(n=wr)){if(r){ce();const d=r;C(d.$$.fragment,1,0,()=>{B(d,1)}),ve()}n?(r=Dr(n,s(f)),U(r.$$.fragment),E(r.$$.fragment,1),L(r,e,null)):r=null}else n&&r.$set(o)},i(f){i||(r&&E(r.$$.fragment,f),i=!0)},o(f){r&&C(r.$$.fragment,f),i=!1},d(f){f&&c(e),r&&B(r)}}}function Qr(t){let e,r,i=t[10]?"&#9650;":"&#9660;",n,s,f,l,o,d,m;return s=new cr({props:{data:t[0],column:t[4],fmt:t[7]}}),{c(){e=K("p"),r=K("span"),n=D(),U(s.$$.fragment),f=D(),l=K("span"),o=Pe(t[2]),this.h()},l(_){e=z(_,"P",{class:!0,style:!0});var v=ee(e);r=z(v,"SPAN",{class:!0});var b=ee(r);b.forEach(c),n=F(v),Q(s.$$.fragment,v),f=F(v),l=z(v,"SPAN",{});var R=ee(l);o=Se(R,t[2]),R.forEach(c),v.forEach(c),this.h()},h(){h(r,"class","font-[system-ui]"),h(e,"class","text-xs font-sans"),h(e,"style",d=`color:${t[12]}`)},m(_,v){w(_,e,v),te(e,r),r.innerHTML=i,te(e,n),L(s,e,null),te(e,f),te(e,l),te(l,o),m=!0},p(_,v){(!m||v&1024)&&i!==(i=_[10]?"&#9650;":"&#9660;")&&(r.innerHTML=i);const b={};v&1&&(b.data=_[0]),v&16&&(b.column=_[4]),v&128&&(b.fmt=_[7]),s.$set(b),(!m||v&4)&&Qe(o,_[2]),(!m||v&4096&&d!==(d=`color:${_[12]}`))&&h(e,"style",d)},i(_){m||(E(s.$$.fragment,_),m=!0)},o(_){C(s.$$.fragment,_),m=!1},d(_){_&&c(e),B(s)}}}function Vt(t){let e,r,i,n,s;const f=[Wt,jt],l=[];function o(d,m){return d[11]?0:1}return r=o(t),i=l[r]=f[r](t),{c(){e=K("div"),i.c(),this.h()},l(d){e=z(d,"DIV",{class:!0,style:!0});var m=ee(e);i.l(m),m.forEach(c),this.h()},h(){h(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),h(e,"style",n=`
        min-width: ${t[9]};
        max-width: ${t[8]};
    `)},m(d,m){w(d,e,m),l[r].m(e,null),s=!0},p(d,[m]){let _=r;r=o(d),r===_?l[r].p(d,m):(ce(),C(l[_],1,1,()=>{l[_]=null}),ve(),i=l[r],i?i.p(d,m):(i=l[r]=f[r](d),i.c()),E(i,1),i.m(e,null)),(!s||m&768&&n!==(n=`
        min-width: ${d[9]};
        max-width: ${d[8]};
    `))&&h(e,"style",n)},i(d){s||(E(i),s=!0)},o(d){C(i),s=!1},d(d){d&&c(e),l[r].d()}}}function Ut(t,e,r){let{data:i}=e,{value:n=null}=e,{comparison:s=null}=e,{sparkline:f=null}=e,{fmt:l=void 0}=e,{comparisonFmt:o=void 0}=e,{title:d=null}=e,{comparisonTitle:m=null}=e,{downIsGood:_=!1}=e,{maxWidth:v="none"}=e,{minWidth:b="18%"}=e,R=!0,y="var(--grey-700)",I={},O;function M(){try{if(wr)return!0}catch{return!1}return!1}return t.$$set=T=>{"data"in T&&r(0,i=T.data),"value"in T&&r(3,n=T.value),"comparison"in T&&r(4,s=T.comparison),"sparkline"in T&&r(5,f=T.sparkline),"fmt"in T&&r(6,l=T.fmt),"comparisonFmt"in T&&r(7,o=T.comparisonFmt),"title"in T&&r(1,d=T.title),"comparisonTitle"in T&&r(2,m=T.comparisonTitle),"downIsGood"in T&&r(15,_=T.downIsGood),"maxWidth"in T&&r(8,v=T.maxWidth),"minWidth"in T&&r(9,b=T.minWidth)},t.$$.update=()=>{if(t.$$.dirty&35903)try{if(r(11,O=void 0),!n)throw new Error("value is required");Array.isArray(i)||r(0,i=[i]),jr(i,[n]);let T=Mt(i,"array"),X=T.find(Y=>Y.id===n);if(r(1,d=d??(X?X.title:null)),s){jr(i,[s]);let Y=T.find($=>$.id===s);r(2,m=m??(Y?Y.title:null))}if(i&&s&&(r(10,R=i[0][s]>=0),r(12,y=R&&!_||!R&&_?"var(--green-700)":"var(--red-700)")),i&&f&&n){let Y=At(i,f,!0);for(let $=0;$<Y.length;$++)r(13,I[Y[$][f]]=Y[$][n],I)}}catch(T){throw r(11,O=T),O}},[i,d,m,n,s,f,l,o,v,b,R,O,y,I,M,_]}let Lt=class extends dr{constructor(e){super(),_r(this,e,Ut,Vt,mr,{data:0,value:3,comparison:4,sparkline:5,fmt:6,comparisonFmt:7,title:1,comparisonTitle:2,downIsGood:15,maxWidth:8,minWidth:9})}};function Bt(t){let e;const r=t[3].default,i=ht(r,t,t[4],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,s){i&&i.m(n,s),e=!0},p(n,s){i&&i.p&&(!e||s&16)&&pt(i,r,n,n[4],e?gt(r,n[4],s,null):yt(n[4]),null)},i(n){e||(E(i,n),e=!0)},o(n){C(i,n),e=!1},d(n){i&&i.d(n)}}}function Qt(t){var s;let e,r;const i=[t[1],{data:(s=t[5])!=null&&s.__isQueryStore?Array.from(t[5]):t[5]}];let n={$$slots:{default:[Bt]},$$scope:{ctx:t}};for(let f=0;f<i.length;f+=1)n=br(n,i[f]);return e=new Lt({props:n}),{c(){U(e.$$.fragment)},l(f){Q(e.$$.fragment,f)},m(f,l){L(e,f,l),r=!0},p(f,l){var d;const o=l&34?ct(i,[l&2&&vt(f[1]),l&32&&{data:(d=f[5])!=null&&d.__isQueryStore?Array.from(f[5]):f[5]}]):{};l&16&&(o.$$scope={dirty:l,ctx:f}),e.$set(o)},i(f){r||(E(e.$$.fragment,f),r=!0)},o(f){C(e.$$.fragment,f),r=!1},d(f){B(e,f)}}}function Jt(t){let e,r,i=(t[2].title??" ")+"",n,s,f,l,o;return f=new cr({props:{column:t[2].value,fmt:t[2].fmt,data:t[5]}}),{c(){e=K("div"),r=K("p"),n=Pe(i),s=D(),U(f.$$.fragment),this.h()},l(d){e=z(d,"DIV",{class:!0,style:!0,slot:!0});var m=ee(e);r=z(m,"P",{class:!0});var _=ee(r);n=Se(_,i),_.forEach(c),s=F(m),Q(f.$$.fragment,m),m.forEach(c),this.h()},h(){h(r,"class","text-sm text-gray-700"),h(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),h(e,"style",l=`
			min-width: ${t[2].minWidth};
			max-width: ${t[2].maxWidth};
		`),h(e,"slot","skeleton")},m(d,m){w(d,e,m),te(e,r),te(r,n),te(e,s),L(f,e,null),o=!0},p(d,m){(!o||m&4)&&i!==(i=(d[2].title??" ")+"")&&Qe(n,i);const _={};m&4&&(_.column=d[2].value),m&4&&(_.fmt=d[2].fmt),m&32&&(_.data=d[5]),f.$set(_),(!o||m&4&&l!==(l=`
			min-width: ${d[2].minWidth};
			max-width: ${d[2].maxWidth};
		`))&&h(e,"style",l)},i(d){o||(E(f.$$.fragment,d),o=!0)},o(d){C(f.$$.fragment,d),o=!1},d(d){d&&c(e),B(f)}}}function Gt(t){let e,r;return e=new Nt({props:{data:t[0],$$slots:{skeleton:[Jt,({loaded:i})=>({5:i}),({loaded:i})=>i?32:0],default:[Qt,({loaded:i})=>({5:i}),({loaded:i})=>i?32:0]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,n){L(e,i,n),r=!0},p(i,[n]){const s={};n&1&&(s.data=i[0]),n&54&&(s.$$scope={dirty:n,ctx:i}),e.$set(s)},i(i){r||(E(e.$$.fragment,i),r=!0)},o(i){C(e.$$.fragment,i),r=!1},d(i){B(e,i)}}}function Kt(t,e,r){let i,{$$slots:n={},$$scope:s}=e,{data:f}=e;return t.$$set=l=>{r(2,e=br(br({},e),Fr(l))),"data"in l&&r(0,f=l.data),"$$scope"in l&&r(4,s=l.$$scope)},t.$$.update=()=>{r(1,i=Object.fromEntries(Object.entries(e).filter(([,l])=>l!==void 0)))},e=Fr(e),[f,i,e,n,s]}class gr extends dr{constructor(e){super(),_r(this,e,Kt,Gt,mr,{data:0})}}function zt(t){var n;let e,r=(N.title??((n=N.og)==null?void 0:n.title))+"",i;return{c(){e=K("h1"),i=Pe(r),this.h()},l(s){e=z(s,"H1",{class:!0});var f=ee(e);i=Se(f,r),f.forEach(c),this.h()},h(){h(e,"class","title")},m(s,f){w(s,e,f),te(e,i)},p:ie,d(s){s&&c(e)}}}function Xt(t){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:ie,p:ie,d:ie}}function Yt(t){var f;let e,r,i,n,s;return document.title=e=N.title??((f=N.og)==null?void 0:f.title),{c(){r=D(),i=K("meta"),n=D(),s=K("meta"),this.h()},l(l){r=F(l),i=z(l,"META",{property:!0,content:!0}),n=F(l),s=z(l,"META",{name:!0,content:!0}),this.h()},h(){var l,o;h(i,"property","og:title"),h(i,"content",((l=N.og)==null?void 0:l.title)??N.title),h(s,"name","twitter:title"),h(s,"content",((o=N.og)==null?void 0:o.title)??N.title)},m(l,o){w(l,r,o),w(l,i,o),w(l,n,o),w(l,s,o)},p(l,o){var d;o&0&&e!==(e=N.title??((d=N.og)==null?void 0:d.title))&&(document.title=e)},d(l){l&&c(r),l&&c(i),l&&c(n),l&&c(s)}}}function Zt(t){var s,f;let e,r,i=(N.description||((s=N.og)==null?void 0:s.description))&&$t(),n=((f=N.og)==null?void 0:f.image)&&xt();return{c(){i&&i.c(),e=D(),n&&n.c(),r=x()},l(l){i&&i.l(l),e=F(l),n&&n.l(l),r=x()},m(l,o){i&&i.m(l,o),w(l,e,o),n&&n.m(l,o),w(l,r,o)},p(l,o){var d,m;(N.description||(d=N.og)!=null&&d.description)&&i.p(l,o),(m=N.og)!=null&&m.image&&n.p(l,o)},d(l){i&&i.d(l),l&&c(e),n&&n.d(l),l&&c(r)}}}function $t(t){let e,r,i,n,s;return{c(){e=K("meta"),r=D(),i=K("meta"),n=D(),s=K("meta"),this.h()},l(f){e=z(f,"META",{name:!0,content:!0}),r=F(f),i=z(f,"META",{property:!0,content:!0}),n=F(f),s=z(f,"META",{name:!0,content:!0}),this.h()},h(){var f,l,o;h(e,"name","description"),h(e,"content",N.description??((f=N.og)==null?void 0:f.description)),h(i,"property","og:description"),h(i,"content",((l=N.og)==null?void 0:l.description)??N.description),h(s,"name","twitter:description"),h(s,"content",((o=N.og)==null?void 0:o.description)??N.description)},m(f,l){w(f,e,l),w(f,r,l),w(f,i,l),w(f,n,l),w(f,s,l)},p:ie,d(f){f&&c(e),f&&c(r),f&&c(i),f&&c(n),f&&c(s)}}}function xt(t){let e,r,i;return{c(){e=K("meta"),r=D(),i=K("meta"),this.h()},l(n){e=z(n,"META",{property:!0,content:!0}),r=F(n),i=z(n,"META",{name:!0,content:!0}),this.h()},h(){var n,s;h(e,"property","og:image"),h(e,"content",(n=N.og)==null?void 0:n.image),h(i,"name","twitter:image"),h(i,"content",(s=N.og)==null?void 0:s.image)},m(n,s){w(n,e,s),w(n,r,s),w(n,i,s)},p:ie,d(n){n&&c(e),n&&c(r),n&&c(i)}}}function Jr(t){let e,r;return e=new Je({props:{queryID:"drivers",queryResult:t[12]}}),{c(){U(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,n){L(e,i,n),r=!0},p(i,n){const s={};n[0]&4096&&(s.queryResult=i[12]),e.$set(s)},i(i){r||(E(e.$$.fragment,i),r=!0)},o(i){C(e.$$.fragment,i),r=!1},d(i){B(e,i)}}}function ei(t){let e,r,i,n,s,f;return e=new hr({props:{id:"dob",title:"Date Of Birth"}}),i=new hr({props:{id:"nationality",title:"Nationality"}}),s=new hr({props:{id:"url",title:"Wikipedia",contentType:"link",openInNewTab:"true"}}),{c(){U(e.$$.fragment),r=D(),U(i.$$.fragment),n=D(),U(s.$$.fragment)},l(l){Q(e.$$.fragment,l),r=F(l),Q(i.$$.fragment,l),n=F(l),Q(s.$$.fragment,l)},m(l,o){L(e,l,o),w(l,r,o),L(i,l,o),w(l,n,o),L(s,l,o),f=!0},p:ie,i(l){f||(E(e.$$.fragment,l),E(i.$$.fragment,l),E(s.$$.fragment,l),f=!0)},o(l){C(e.$$.fragment,l),C(i.$$.fragment,l),C(s.$$.fragment,l),f=!1},d(l){B(e,l),l&&c(r),B(i,l),l&&c(n),B(s,l)}}}function ri(t){let e,r,i,n,s,f;return e=new vr({props:{dest:"/sports/F1/drivers/",text:"Drivers"}}),i=new vr({props:{dest:"/sports/F1/races/",text:"Races"}}),s=new vr({props:{dest:"/sports/F1/circuits/",text:"Circuits"}}),{c(){U(e.$$.fragment),r=D(),U(i.$$.fragment),n=D(),U(s.$$.fragment)},l(l){Q(e.$$.fragment,l),r=F(l),Q(i.$$.fragment,l),n=F(l),Q(s.$$.fragment,l)},m(l,o){L(e,l,o),w(l,r,o),L(i,l,o),w(l,n,o),L(s,l,o),f=!0},p:ie,i(l){f||(E(e.$$.fragment,l),E(i.$$.fragment,l),E(s.$$.fragment,l),f=!0)},o(l){C(e.$$.fragment,l),C(i.$$.fragment,l),C(s.$$.fragment,l),f=!1},d(l){B(e,l),l&&c(r),B(i,l),l&&c(n),B(s,l)}}}function Gr(t){let e,r;return e=new Je({props:{queryID:"results",queryResult:t[11]}}),{c(){U(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,n){L(e,i,n),r=!0},p(i,n){const s={};n[0]&2048&&(s.queryResult=i[11]),e.$set(s)},i(i){r||(E(e.$$.fragment,i),r=!0)},o(i){C(e.$$.fragment,i),r=!1},d(i){B(e,i)}}}function Kr(t){let e,r;return e=new Je({props:{queryID:"driver_cross_results",queryResult:t[10]}}),{c(){U(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,n){L(e,i,n),r=!0},p(i,n){const s={};n[0]&1024&&(s.queryResult=i[10]),e.$set(s)},i(i){r||(E(e.$$.fragment,i),r=!0)},o(i){C(e.$$.fragment,i),r=!1},d(i){B(e,i)}}}function zr(t){let e,r;return e=new Je({props:{queryID:"driver_wins",queryResult:t[9]}}),{c(){U(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,n){L(e,i,n),r=!0},p(i,n){const s={};n[0]&512&&(s.queryResult=i[9]),e.$set(s)},i(i){r||(E(e.$$.fragment,i),r=!0)},o(i){C(e.$$.fragment,i),r=!1},d(i){B(e,i)}}}function Xr(t){let e,r;return e=new Je({props:{queryID:"driver_podiums",queryResult:t[8]}}),{c(){U(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,n){L(e,i,n),r=!0},p(i,n){const s={};n[0]&256&&(s.queryResult=i[8]),e.$set(s)},i(i){r||(E(e.$$.fragment,i),r=!0)},o(i){C(e.$$.fragment,i),r=!1},d(i){B(e,i)}}}function Yr(t){let e,r;return e=new Je({props:{queryID:"driver_points",queryResult:t[7]}}),{c(){U(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,n){L(e,i,n),r=!0},p(i,n){const s={};n[0]&128&&(s.queryResult=i[7]),e.$set(s)},i(i){r||(E(e.$$.fragment,i),r=!0)},o(i){C(e.$$.fragment,i),r=!1},d(i){B(e,i)}}}function ti(t){var he;let e,r,i,n,s,f,l,o,d,m,_,v,b,R,y,I,O,M,T,X,Y,$,Z,ue,se,oe,me,ne=typeof N<"u"&&(N.title||((he=N.og)==null?void 0:he.title))&&N.hide_title!==!0&&zt();function ye(u,g){var le;return typeof N<"u"&&(N.title||(le=N.og)!=null&&le.title)?Yt:Xt}let fe=ye()(t),re=typeof N=="object"&&Zt(),H=t[12]&&Jr(t);o=new cr({props:{data:t[12].filter(t[45]),column:"name"}}),m=new Ct({props:{data:t[12].filter(t[46]),$$slots:{default:[ei]},$$scope:{ctx:t}}}),v=new gr({props:{data:t[9].filter(t[47]),value:"wins"}}),R=new gr({props:{data:t[8].filter(t[48]),value:"podiums"}}),I=new gr({props:{data:t[7].filter(t[49]),value:"points"}}),X=new Ot({props:{$$slots:{default:[ri]},$$scope:{ctx:t}}});let j=t[11]&&Gr(t),P=t[10]&&Kr(t),S=t[9]&&zr(t),W=t[8]&&Xr(t),V=t[7]&&Yr(t);return{c(){ne&&ne.c(),e=D(),fe.c(),r=K("meta"),i=K("meta"),re&&re.c(),n=x(),s=D(),H&&H.c(),f=D(),l=K("h1"),U(o.$$.fragment),d=D(),U(m.$$.fragment),_=D(),U(v.$$.fragment),b=D(),U(R.$$.fragment),y=D(),U(I.$$.fragment),O=D(),M=K("hr"),T=D(),U(X.$$.fragment),Y=D(),j&&j.c(),$=D(),P&&P.c(),Z=D(),S&&S.c(),ue=D(),W&&W.c(),se=D(),V&&V.c(),oe=x(),this.h()},l(u){ne&&ne.l(u),e=F(u);const g=bt("svelte-1j2izld",document.head);fe.l(g),r=z(g,"META",{name:!0,content:!0}),i=z(g,"META",{name:!0,content:!0}),re&&re.l(g),n=x(),g.forEach(c),s=F(u),H&&H.l(u),f=F(u),l=z(u,"H1",{class:!0});var le=ee(l);Q(o.$$.fragment,le),le.forEach(c),d=F(u),Q(m.$$.fragment,u),_=F(u),Q(v.$$.fragment,u),b=F(u),Q(R.$$.fragment,u),y=F(u),Q(I.$$.fragment,u),O=F(u),M=z(u,"HR",{class:!0}),T=F(u),Q(X.$$.fragment,u),Y=F(u),j&&j.l(u),$=F(u),P&&P.l(u),Z=F(u),S&&S.l(u),ue=F(u),W&&W.l(u),se=F(u),V&&V.l(u),oe=x(),this.h()},h(){h(r,"name","twitter:card"),h(r,"content","summary"),h(i,"name","twitter:site"),h(i,"content","@evidence_dev"),h(l,"class","markdown"),h(M,"class","markdown")},m(u,g){ne&&ne.m(u,g),w(u,e,g),fe.m(document.head,null),te(document.head,r),te(document.head,i),re&&re.m(document.head,null),te(document.head,n),w(u,s,g),H&&H.m(u,g),w(u,f,g),w(u,l,g),L(o,l,null),w(u,d,g),L(m,u,g),w(u,_,g),L(v,u,g),w(u,b,g),L(R,u,g),w(u,y,g),L(I,u,g),w(u,O,g),w(u,M,g),w(u,T,g),L(X,u,g),w(u,Y,g),j&&j.m(u,g),w(u,$,g),P&&P.m(u,g),w(u,Z,g),S&&S.m(u,g),w(u,ue,g),W&&W.m(u,g),w(u,se,g),V&&V.m(u,g),w(u,oe,g),me=!0},p(u,g){var ke;typeof N<"u"&&(N.title||(ke=N.og)!=null&&ke.title)&&N.hide_title!==!0&&ne.p(u,g),fe.p(u,g),typeof N=="object"&&re.p(u,g),u[12]?H?(H.p(u,g),g[0]&4096&&E(H,1)):(H=Jr(u),H.c(),E(H,1),H.m(f.parentNode,f)):H&&(ce(),C(H,1,1,()=>{H=null}),ve());const le={};g[0]&4097&&(le.data=u[12].filter(u[45])),o.$set(le);const pe={};g[0]&4097&&(pe.data=u[12].filter(u[46])),g[2]&32768&&(pe.$$scope={dirty:g,ctx:u}),m.$set(pe);const ge={};g[0]&513&&(ge.data=u[9].filter(u[47])),v.$set(ge);const be={};g[0]&257&&(be.data=u[8].filter(u[48])),R.$set(be);const ae={};g[0]&129&&(ae.data=u[7].filter(u[49])),I.$set(ae);const we={};g[2]&32768&&(we.$$scope={dirty:g,ctx:u}),X.$set(we),u[11]?j?(j.p(u,g),g[0]&2048&&E(j,1)):(j=Gr(u),j.c(),E(j,1),j.m($.parentNode,$)):j&&(ce(),C(j,1,1,()=>{j=null}),ve()),u[10]?P?(P.p(u,g),g[0]&1024&&E(P,1)):(P=Kr(u),P.c(),E(P,1),P.m(Z.parentNode,Z)):P&&(ce(),C(P,1,1,()=>{P=null}),ve()),u[9]?S?(S.p(u,g),g[0]&512&&E(S,1)):(S=zr(u),S.c(),E(S,1),S.m(ue.parentNode,ue)):S&&(ce(),C(S,1,1,()=>{S=null}),ve()),u[8]?W?(W.p(u,g),g[0]&256&&E(W,1)):(W=Xr(u),W.c(),E(W,1),W.m(se.parentNode,se)):W&&(ce(),C(W,1,1,()=>{W=null}),ve()),u[7]?V?(V.p(u,g),g[0]&128&&E(V,1)):(V=Yr(u),V.c(),E(V,1),V.m(oe.parentNode,oe)):V&&(ce(),C(V,1,1,()=>{V=null}),ve())},i(u){me||(E(H),E(o.$$.fragment,u),E(m.$$.fragment,u),E(v.$$.fragment,u),E(R.$$.fragment,u),E(I.$$.fragment,u),E(X.$$.fragment,u),E(j),E(P),E(S),E(W),E(V),me=!0)},o(u){C(H),C(o.$$.fragment,u),C(m.$$.fragment,u),C(v.$$.fragment,u),C(R.$$.fragment,u),C(I.$$.fragment,u),C(X.$$.fragment,u),C(j),C(P),C(S),C(W),C(V),me=!1},d(u){ne&&ne.d(u),u&&c(e),fe.d(u),c(r),c(i),re&&re.d(u),c(n),u&&c(s),H&&H.d(u),u&&c(f),u&&c(l),B(o),u&&c(d),B(m,u),u&&c(_),B(v,u),u&&c(b),B(R,u),u&&c(y),B(I,u),u&&c(O),u&&c(M),u&&c(T),B(X,u),u&&c(Y),j&&j.d(u),u&&c($),P&&P.d(u),u&&c(Z),S&&S.d(u),u&&c(ue),W&&W.d(u),u&&c(se),V&&V.d(u),u&&c(oe)}}}const N={queries:[{drivers:"all_drivers.sql"}]};function Be(t,...e){return!!e.some(r=>r==null?void 0:r.__unset)}function ii(t,e,r){var qr,Rr,Or,Tr,Cr,Nr,Mr;let i,n,s,f,l,o,d,m,_,v,b,R,y,I,O,M,T,X,Y,$,Z,ue,se,oe,me,ne,ye,je,fe,re,H,j=ie,P=()=>(j(),j=Ue(Me,p=>r(39,H=p)),Me),S,W=ie,V=()=>(W(),W=Ue(Ne,p=>r(40,S=p)),Ne),he,u=ie,g=()=>(u(),u=Ue(Ce,p=>r(41,he=p)),Ce),le,pe=ie,ge=()=>(pe(),pe=Ue(Te,p=>r(42,le=p)),Te),be,ae=ie,we=()=>(ae(),ae=Ue(Oe,p=>r(43,be=p)),Oe),ke,Ge=ie,Ke=()=>(Ge(),Ge=Ue(Re,p=>r(44,ke=p)),Re),de,ze;ar(t,kt,p=>r(0,de=p)),ar(t,Sr,p=>r(67,ze=p)),t.$$.on_destroy.push(()=>j()),t.$$.on_destroy.push(()=>W()),t.$$.on_destroy.push(()=>u()),t.$$.on_destroy.push(()=>pe()),t.$$.on_destroy.push(()=>ae()),t.$$.on_destroy.push(()=>Ge());let{data:We}=e,{data:a={},customFormattingSettings:J,__db:Ie,inputs:Ir}=We;rr(Sr,ze="d5b4ead150f4c4938fe85b5cf3fdad1d",ze);let Er=kr(Ir);Pr(qt,Er),wt(Er.subscribe(p=>Ir=p)),Pr(Rt,{getCustomFormats:()=>J.customFormats||[]});const Ee=(p,k)=>De(Ie.query,p,{query_name:k});It(Ee);const He=()=>{};let qe=!1;(qr=import.meta)!=null&&qr.hot&&(void 0).on("vite:afterUpdate",()=>{qe=!0,Ae.emptyCache()}),de.params,(Rr=import.meta)!=null&&Rr.hot&&(void 0).on("evidence:queryChange",({queryId:p,content:k})=>{let q=[];if(p||q.push("Malformed event: Missing queryId"),k||q.push("Malformed event: Missing content"),q.length){console.warn("Failed to update query on serverside change!",q.join(`
`));return}p==="drivers"&&r(37,i=k)});let Xe;Ve(()=>r(15,Xe=i));let Re;const $r=()=>{const p=()=>{let k,q;try{if(f||qe)k=void 0,q=void 0;else if(a.drivers){if(a.drivers instanceof Error)throw a.drivers;k=a.drivers}else k=De(Ie.query,i,{query_name:"drivers"})}catch(_e){k=[],q=_e}const A=Ae.create(i,Ee,"drivers",{scoreNotifier:He,initialData:k,initialError:q,noResolve:n});let G;A.loaded||(G=A.fetch()),Re&&G instanceof Promise?G.then(()=>Ke(r(1,Re=A))):Ke(r(1,Re=A))};return p(),Le(p,500)};let nr;(Or=import.meta)!=null&&Or.hot&&(void 0).on("evidence:queryChange",({queryId:p,content:k})=>{let q=[];if(p||q.push("Malformed event: Missing queryId"),k||q.push("Malformed event: Missing content"),q.length){console.warn("Failed to update query on serverside change!",q.join(`
`));return}p==="results"&&r(35,l=k)});let Ye;Ve(()=>r(17,Ye=l));let Oe;const xr=()=>{const p=()=>{let k,q;try{if(m||qe)k=void 0,q=void 0;else if(a.results){if(a.results instanceof Error)throw a.results;k=a.results}else k=De(Ie.query,l,{query_name:"results"})}catch(_e){k=[],q=_e}const A=Ae.create(l,Ee,"results",{scoreNotifier:He,initialData:k,initialError:q,noResolve:o});let G;A.loaded||(G=A.fetch()),Oe&&G instanceof Promise?G.then(()=>we(r(2,Oe=A))):we(r(2,Oe=A))};return p(),Le(p,500)};let lr;(Tr=import.meta)!=null&&Tr.hot&&(void 0).on("evidence:queryChange",({queryId:p,content:k})=>{let q=[];if(p||q.push("Malformed event: Missing queryId"),k||q.push("Malformed event: Missing content"),q.length){console.warn("Failed to update query on serverside change!",q.join(`
`));return}p==="driver_cross_results"&&r(33,_=k)});let Ze;Ve(()=>r(19,Ze=_));let Te;const et=()=>{const p=()=>{let k,q;try{if(R||qe)k=void 0,q=void 0;else if(a.driver_cross_results){if(a.driver_cross_results instanceof Error)throw a.driver_cross_results;k=a.driver_cross_results}else k=De(Ie.query,_,{query_name:"driver_cross_results"})}catch(_e){k=[],q=_e}const A=Ae.create(_,Ee,"driver_cross_results",{scoreNotifier:He,initialData:k,initialError:q,noResolve:v});let G;A.loaded||(G=A.fetch()),Te&&G instanceof Promise?G.then(()=>ge(r(3,Te=A))):ge(r(3,Te=A))};return p(),Le(p,500)};let sr;(Cr=import.meta)!=null&&Cr.hot&&(void 0).on("evidence:queryChange",({queryId:p,content:k})=>{let q=[];if(p||q.push("Malformed event: Missing queryId"),k||q.push("Malformed event: Missing content"),q.length){console.warn("Failed to update query on serverside change!",q.join(`
`));return}p==="driver_wins"&&r(31,y=k)});let $e;Ve(()=>r(21,$e=y));let Ce;const rt=()=>{const p=()=>{let k,q;try{if(M||qe)k=void 0,q=void 0;else if(a.driver_wins){if(a.driver_wins instanceof Error)throw a.driver_wins;k=a.driver_wins}else k=De(Ie.query,y,{query_name:"driver_wins"})}catch(_e){k=[],q=_e}const A=Ae.create(y,Ee,"driver_wins",{scoreNotifier:He,initialData:k,initialError:q,noResolve:I});let G;A.loaded||(G=A.fetch()),Ce&&G instanceof Promise?G.then(()=>g(r(4,Ce=A))):g(r(4,Ce=A))};return p(),Le(p,500)};let fr;(Nr=import.meta)!=null&&Nr.hot&&(void 0).on("evidence:queryChange",({queryId:p,content:k})=>{let q=[];if(p||q.push("Malformed event: Missing queryId"),k||q.push("Malformed event: Missing content"),q.length){console.warn("Failed to update query on serverside change!",q.join(`
`));return}p==="driver_podiums"&&r(29,T=k)});let xe;Ve(()=>r(23,xe=T));let Ne;const tt=()=>{const p=()=>{let k,q;try{if($||qe)k=void 0,q=void 0;else if(a.driver_podiums){if(a.driver_podiums instanceof Error)throw a.driver_podiums;k=a.driver_podiums}else k=De(Ie.query,T,{query_name:"driver_podiums"})}catch(_e){k=[],q=_e}const A=Ae.create(T,Ee,"driver_podiums",{scoreNotifier:He,initialData:k,initialError:q,noResolve:X});let G;A.loaded||(G=A.fetch()),Ne&&G instanceof Promise?G.then(()=>V(r(5,Ne=A))):V(r(5,Ne=A))};return p(),Le(p,500)};let ur;(Mr=import.meta)!=null&&Mr.hot&&(void 0).on("evidence:queryChange",({queryId:p,content:k})=>{let q=[];if(p||q.push("Malformed event: Missing queryId"),k||q.push("Malformed event: Missing content"),q.length){console.warn("Failed to update query on serverside change!",q.join(`
`));return}p==="driver_points"&&r(27,Z=k)});let er;Ve(()=>r(25,er=Z));let Me;const it=()=>{const p=()=>{let k,q;try{if(oe||qe)k=void 0,q=void 0;else if(a.driver_points){if(a.driver_points instanceof Error)throw a.driver_points;k=a.driver_points}else k=De(Ie.query,Z,{query_name:"driver_points"})}catch(_e){k=[],q=_e}const A=Ae.create(Z,Ee,"driver_points",{scoreNotifier:He,initialData:k,initialError:q,noResolve:ue});let G;A.loaded||(G=A.fetch()),Me&&G instanceof Promise?G.then(()=>P(r(6,Me=A))):P(r(6,Me=A))};return p(),Le(p,500)};let or;const nt=p=>p.driverRef.toUpperCase()===de.params.driverRef.toUpperCase(),lt=p=>p.driverRef.toUpperCase()===de.params.driverRef.toUpperCase(),st=p=>p.driverRef===de.params.driverRef,ft=p=>p.driverRef===de.params.driverRef,ut=p=>p.driverRef===de.params.driverRef;return t.$$set=p=>{"data"in p&&r(13,We=p.data)},t.$$.update=()=>{t.$$.dirty[0]&8192&&r(14,{data:a={},customFormattingSettings:J,__db:Ie}=We,a),t.$$.dirty[0]&16384&&Et.set(Object.keys(a).length>0),t.$$.dirty[0]&1&&de.params,t.$$.dirty[0]&32768|t.$$.dirty[1]&64&&(Xe||r(15,Xe=i)),t.$$.dirty[1]&64&&r(38,s=i),t.$$.dirty[0]&32768|t.$$.dirty[1]&128&&(f=s!==Xe),t.$$.dirty[0]&65536|t.$$.dirty[1]&64&&typeof nr>"u"&&r(16,nr=$r()),t.$$.dirty[0]&65536|t.$$.dirty[1]&64&&nr(),t.$$.dirty[0]&81920,t.$$.dirty[0]&131072|t.$$.dirty[1]&16&&(Ye||r(17,Ye=l)),t.$$.dirty[1]&16&&r(36,d=l),t.$$.dirty[0]&131072|t.$$.dirty[1]&32&&(m=d!==Ye),t.$$.dirty[0]&262144|t.$$.dirty[1]&16&&typeof lr>"u"&&r(18,lr=xr()),t.$$.dirty[0]&262144|t.$$.dirty[1]&16&&lr(),t.$$.dirty[0]&278528,t.$$.dirty[0]&524288|t.$$.dirty[1]&4&&(Ze||r(19,Ze=_)),t.$$.dirty[1]&4&&r(34,b=_),t.$$.dirty[0]&524288|t.$$.dirty[1]&8&&(R=b!==Ze),t.$$.dirty[0]&1048576|t.$$.dirty[1]&4&&typeof sr>"u"&&r(20,sr=et()),t.$$.dirty[0]&1048576|t.$$.dirty[1]&4&&sr(),t.$$.dirty[0]&1064960,t.$$.dirty[0]&2097152|t.$$.dirty[1]&1&&($e||r(21,$e=y)),t.$$.dirty[1]&1&&r(32,O=y),t.$$.dirty[0]&2097152|t.$$.dirty[1]&2&&(M=O!==$e),t.$$.dirty[0]&4194304|t.$$.dirty[1]&1&&typeof fr>"u"&&r(22,fr=rt()),t.$$.dirty[0]&4194304|t.$$.dirty[1]&1&&fr(),t.$$.dirty[0]&4210688,t.$$.dirty[0]&545259520&&(xe||r(23,xe=T)),t.$$.dirty[0]&536870912&&r(30,Y=T),t.$$.dirty[0]&1082130432&&($=Y!==xe),t.$$.dirty[0]&553648128&&typeof ur>"u"&&r(24,ur=tt()),t.$$.dirty[0]&553648128&&ur(),t.$$.dirty[0]&16793600,t.$$.dirty[0]&167772160&&(er||r(25,er=Z)),t.$$.dirty[0]&134217728&&r(28,se=Z),t.$$.dirty[0]&301989888&&(oe=se!==er),t.$$.dirty[0]&201326592&&typeof or>"u"&&r(26,or=it()),t.$$.dirty[0]&201326592&&or(),t.$$.dirty[0]&67125248,t.$$.dirty[1]&8192&&r(12,me=ke),t.$$.dirty[1]&4096&&r(11,ne=be),t.$$.dirty[1]&2048&&r(10,ye=le),t.$$.dirty[1]&1024&&r(9,je=he),t.$$.dirty[1]&512&&r(8,fe=S),t.$$.dirty[1]&256&&r(7,re=H)},r(37,i=`select 
    CONCAT(forename, ' ', surname) as name,
    driverId,
    dob,
    nationality,
    url,
    driverRef,
    './' || driverRef as driver_link
from f1.drivers`),n=Be`select 
    CONCAT(forename, ' ', surname) as name,
    driverId,
    dob,
    nationality,
    url,
    driverRef,
    './' || driverRef as driver_link
from f1.drivers`,r(35,l=`select 
  *
from f1.results`),o=Be`select 
  *
from f1.results`,r(33,_=`select 
  d.driverId,
  d.driverRef,
  r.positionOrder,
  r.points
from (select 
    CONCAT(forename, ' ', surname) as name,
    driverId,
    dob,
    nationality,
    url,
    driverRef,
    './' || driverRef as driver_link
from f1.drivers) d
LEFT OUTER JOIN (select 
  *
from f1.results) r
ON r.driverId = d.driverId`),v=Be`select 
  d.driverId,
  d.driverRef,
  r.positionOrder,
  r.points
from (select 
    CONCAT(forename, ' ', surname) as name,
    driverId,
    dob,
    nationality,
    url,
    driverRef,
    './' || driverRef as driver_link
from f1.drivers) d
LEFT OUTER JOIN (select 
  *
from f1.results) r
ON r.driverId = d.driverId`,r(31,y=`select 
  sum(CASE WHEN positionOrder = 1 then 1 else 0 END) as wins,
  driverId,
  driverRef
from (select 
  d.driverId,
  d.driverRef,
  r.positionOrder,
  r.points
from (select 
    CONCAT(forename, ' ', surname) as name,
    driverId,
    dob,
    nationality,
    url,
    driverRef,
    './' || driverRef as driver_link
from f1.drivers) d
LEFT OUTER JOIN (select 
  *
from f1.results) r
ON r.driverId = d.driverId) 
group by driverId, driverRef
order by wins desc`),I=Be`select 
  sum(CASE WHEN positionOrder = 1 then 1 else 0 END) as wins,
  driverId,
  driverRef
from (select 
  d.driverId,
  d.driverRef,
  r.positionOrder,
  r.points
from (select 
    CONCAT(forename, ' ', surname) as name,
    driverId,
    dob,
    nationality,
    url,
    driverRef,
    './' || driverRef as driver_link
from f1.drivers) d
LEFT OUTER JOIN (select 
  *
from f1.results) r
ON r.driverId = d.driverId) 
group by driverId, driverRef
order by wins desc`,r(29,T=`select 
  sum(CASE WHEN positionOrder <= 3 then 1 else 0 END) as podiums,
  driverId,
  driverRef
from (select 
  d.driverId,
  d.driverRef,
  r.positionOrder,
  r.points
from (select 
    CONCAT(forename, ' ', surname) as name,
    driverId,
    dob,
    nationality,
    url,
    driverRef,
    './' || driverRef as driver_link
from f1.drivers) d
LEFT OUTER JOIN (select 
  *
from f1.results) r
ON r.driverId = d.driverId) 
group by driverId, driverRef
order by podiums desc`),X=Be`select 
  sum(CASE WHEN positionOrder <= 3 then 1 else 0 END) as podiums,
  driverId,
  driverRef
from (select 
  d.driverId,
  d.driverRef,
  r.positionOrder,
  r.points
from (select 
    CONCAT(forename, ' ', surname) as name,
    driverId,
    dob,
    nationality,
    url,
    driverRef,
    './' || driverRef as driver_link
from f1.drivers) d
LEFT OUTER JOIN (select 
  *
from f1.results) r
ON r.driverId = d.driverId) 
group by driverId, driverRef
order by podiums desc`,r(27,Z=`select 
  sum(CAST(points as decimal)) as points,
  driverId,
  driverRef
from (select 
  d.driverId,
  d.driverRef,
  r.positionOrder,
  r.points
from (select 
    CONCAT(forename, ' ', surname) as name,
    driverId,
    dob,
    nationality,
    url,
    driverRef,
    './' || driverRef as driver_link
from f1.drivers) d
LEFT OUTER JOIN (select 
  *
from f1.results) r
ON r.driverId = d.driverId) 
group by driverId, driverRef
order by points desc`),ue=Be`select 
  sum(CAST(points as decimal)) as points,
  driverId,
  driverRef
from (select 
  d.driverId,
  d.driverRef,
  r.positionOrder,
  r.points
from (select 
    CONCAT(forename, ' ', surname) as name,
    driverId,
    dob,
    nationality,
    url,
    driverRef,
    './' || driverRef as driver_link
from f1.drivers) d
LEFT OUTER JOIN (select 
  *
from f1.results) r
ON r.driverId = d.driverId) 
group by driverId, driverRef
order by points desc`,[de,Re,Oe,Te,Ce,Ne,Me,re,fe,je,ye,ne,me,We,a,Xe,nr,Ye,lr,Ze,sr,$e,fr,xe,ur,er,or,Z,se,T,Y,y,O,_,b,l,d,i,s,H,S,he,le,be,ke,nt,lt,st,ft,ut]}class gi extends dr{constructor(e){super(),_r(this,e,ii,ti,mr,{data:13},null,[-1,-1,-1])}}export{gi as default};
