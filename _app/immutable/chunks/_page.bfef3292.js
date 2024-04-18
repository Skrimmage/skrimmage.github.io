import{S as dr,i as _r,s as mr,M as tr,b as ee,a as D,N as ir,g as $,f as c,c as S,k as v,m as b,n as te,x as Se,o as ie,a7 as at,$ as Zr,p as ar,aj as dt,q as rr,e as J,d as G,ah as Dr,a0 as _t,ak as mt,al as ct,t as We,j as Fe,T as Qe,A as ce,B as T,C as ve,z as k,G as j,H as Q,I as H,J as U,ai as Sr,L as wr,R as Wr,P as vt,a9 as ht,v as pt,D as yt,E as gt,F as bt,h as wt,r as Fr,u as kt,U as He,V as Ue}from"./index.fa6138d3.js";import{p as It}from"./stores.235a231b.js";import{s as Et,Q as Ae,p as qt,r as Pr,d as Le}from"./index.37fb47db.js";import{w as Ir}from"./paths.a22d66d8.js";import{I as Rt,C as Ot}from"./globalContexts.8bcf5d41.js";import{p as De}from"./profile.e7706513.js";import{L as Tt,a as vr}from"./Links.84f35586.js";import"./VennDiagram.svelte_svelte_type_style_lang.877ad66b.js";import{D as Ct}from"./DataTable.aceae097.js";import{Q as Je}from"./QueryViewer.a97d8780.js";import{c as hr,B as $r,Q as Mt,E as Nt}from"./EmptyChart.4c1e1c8e.js";import{V as cr}from"./Value.7916b08a.js";import{g as At}from"./DownloadData.355db7bc.js";import{C as pr}from"./Column.d50c8649.js";function Dt(t,e,r){return[...t].sort((i,n)=>(i[e]<n[e]?-1:1)*(r?1:-1))}const yr=Ir({}),gr=Ir({});function Vr(t,e,r){const i=t.slice();return i[51]=e[r][0],i[52]=e[r][1],i[54]=r,i}function jr(t){let e,r;return{c(){e=tr("polyline"),this.h()},l(i){e=ir(i,"polyline",{points:!0,stroke:!0,fill:!0}),$(e).forEach(c),this.h()},h(){v(e,"points",r=t[26].join(" ")),v(e,"stroke",t[16]),v(e,"fill","transparent")},m(i,n){b(i,e,n)},p(i,n){n[0]&67108864&&r!==(r=i[26].join(" "))&&v(e,"points",r),n[0]&65536&&v(e,"stroke",i[16])},d(i){i&&c(e)}}}function Hr(t){let e,r,i,n,s;return{c(){e=tr("circle"),this.h()},l(f){e=ir(f,"circle",{fill:!0,r:!0,cy:!0,cx:!0}),$(e).forEach(c),this.h()},h(){v(e,"fill",r=t[7]&&t[23][t[20]]!==null&&t[23][t[20]]==t[51]?t[5]:"transparent"),v(e,"r",i=t[21]/2),v(e,"cy",n=t[2]-t[27](t[52])),v(e,"cx",s=(parseInt(t[4])+t[21])*t[54])},m(f,l){b(f,e,l)},p(f,l){l[0]&9437345&&r!==(r=f[7]&&f[23][f[20]]!==null&&f[23][f[20]]==f[51]?f[5]:"transparent")&&v(e,"fill",r),l[0]&2097152&&i!==(i=f[21]/2)&&v(e,"r",i),l[0]&5&&n!==(n=f[2]-f[27](f[52]))&&v(e,"cy",n),l[0]&2097168&&s!==(s=(parseInt(f[4])+f[21])*f[54])&&v(e,"cx",s)},d(f){f&&c(e)}}}function Ur(t){let e,r,i,n,s,f,l,o,_,m;function d(){return t[39](t[51],t[54])}function h(){return t[40](t[51],t[54])}function w(){return t[41](t[51],t[54])}function O(){return t[42](t[51],t[54])}function y(){return t[43](t[51],t[54])}let E=t[15]=="line"&&Hr(t);return{c(){e=tr("rect"),E&&E.c(),o=ee(),this.h()},l(q){e=ir(q,"rect",{style:!0,opacity:!0,fill:!0,width:!0,height:!0,y:!0,x:!0,tabindex:!0}),$(e).forEach(c),E&&E.l(q),o=ee(),this.h()},h(){v(e,"style",r=t[8]?`transition: all ${t[8]}ms`:null),v(e,"opacity",i=t[7]&&t[23][t[20]]&&t[23][t[20]]!=t[51]?t[6]:1),v(e,"fill",n=t[15]=="line"?"transparent":t[5]),v(e,"width",t[21]),v(e,"height",s=t[15]=="line"?t[2]:t[27](t[52])),v(e,"y",f=t[15]=="line"?0:t[2]-t[27](t[52])),v(e,"x",l=(parseInt(t[4])+t[21])*t[54]),v(e,"tabindex",t[17])},m(q,N){b(q,e,N),E&&E.m(q,N),b(q,o,N),_||(m=[Se(e,"mouseover",d),Se(e,"focus",h),Se(e,"touchstart",w,{passive:!0}),Se(e,"click",O),Se(e,"keypress",y)],_=!0)},p(q,N){t=q,N[0]&256&&r!==(r=t[8]?`transition: all ${t[8]}ms`:null)&&v(e,"style",r),N[0]&9437377&&i!==(i=t[7]&&t[23][t[20]]&&t[23][t[20]]!=t[51]?t[6]:1)&&v(e,"opacity",i),N[0]&32800&&n!==(n=t[15]=="line"?"transparent":t[5])&&v(e,"fill",n),N[0]&2097152&&v(e,"width",t[21]),N[0]&32773&&s!==(s=t[15]=="line"?t[2]:t[27](t[52]))&&v(e,"height",s),N[0]&32773&&f!==(f=t[15]=="line"?0:t[2]-t[27](t[52]))&&v(e,"y",f),N[0]&2097168&&l!==(l=(parseInt(t[4])+t[21])*t[54])&&v(e,"x",l),N[0]&131072&&v(e,"tabindex",t[17]),t[15]=="line"?E?E.p(t,N):(E=Hr(t),E.c(),E.m(o.parentNode,o)):E&&(E.d(1),E=null)},d(q){q&&c(e),E&&E.d(q),q&&c(o),_=!1,Zr(m)}}}function Lr(t){let e,r;function i(f,l){return f[24][f[1]]!==null?Wt:St}let n=i(t),s=n(t);return{c(){e=J("div"),s.c(),this.h()},l(f){e=G(f,"DIV",{class:!0,style:!0});var l=$(e);s.l(l),l.forEach(c),this.h()},h(){v(e,"class","tiny-linked-charts-value"),v(e,"style",r=t[13]=="floating"?`position: absolute; transform: translateX(${t[25]}px)`:null)},m(f,l){b(f,e,l),s.m(e,null)},p(f,l){n===(n=i(f))&&s?s.p(f,l):(s.d(1),s=n(f),s&&(s.c(),s.m(e,null))),l[0]&33562624&&r!==(r=f[13]=="floating"?`position: absolute; transform: translateX(${f[25]}px)`:null)&&v(e,"style",r)},d(f){f&&c(e),s.d()}}}function St(t){let e,r;return{c(){e=new mt(!1),r=ee(),this.h()},l(i){e=ct(i,!1),r=ee(),this.h()},h(){e.a=r},m(i,n){e.m(t[10],i,n),b(i,r,n)},p(i,n){n[0]&1024&&e.p(i[10])},d(i){i&&c(r),i&&e.d()}}}function Wt(t){let e,r,i,n=(t[24][t[1]]||t[14])+"",s,f,l;return{c(){e=We(t[11]),r=D(),i=J("span"),s=We(n),f=D(),l=We(t[12])},l(o){e=Fe(o,t[11]),r=S(o),i=G(o,"SPAN",{});var _=$(i);s=Fe(_,n),_.forEach(c),f=S(o),l=Fe(o,t[12])},m(o,_){b(o,e,_),b(o,r,_),b(o,i,_),te(i,s),t[44](i),b(o,f,_),b(o,l,_)},p(o,_){_[0]&2048&&Qe(e,o[11]),_[0]&16793602&&n!==(n=(o[24][o[1]]||o[14])+"")&&Qe(s,n),_[0]&4096&&Qe(l,o[12])},d(o){o&&c(e),o&&c(r),o&&c(i),t[44](null),o&&c(f),o&&c(l)}}}function Ft(t){let e,r,i,n,s,f,l,o,_,m,d=t[15]=="line"&&jr(t),h=Object.entries(t[0]),w=[];for(let y=0;y<h.length;y+=1)w[y]=Ur(Vr(t,h,y));let O=t[9]&&(t[24][t[1]]||t[10])&&Lr(t);return{c(){e=tr("svg"),r=tr("g"),d&&d.c(),i=ee();for(let y=0;y<w.length;y+=1)w[y].c();l=D(),O&&O.c(),o=ee(),this.h()},l(y){e=ir(y,"svg",{width:!0,height:!0,viewBox:!0,preserveAspectRatio:!0});var E=$(e);r=ir(E,"g",{transform:!0});var q=$(r);d&&d.l(q),i=ee();for(let N=0;N<w.length;N+=1)w[N].l(q);q.forEach(c),E.forEach(c),l=S(y),O&&O.l(y),o=ee(),this.h()},h(){v(r,"transform",n="translate("+t[22]+", 0)"),v(e,"width",t[3]),v(e,"height",s=t[15]=="line"?t[2]+t[21]/2:t[2]),v(e,"viewBox",f="0 0 "+t[3]+" "+t[2]),v(e,"preserveAspectRatio","none")},m(y,E){b(y,e,E),te(e,r),d&&d.m(r,null),te(r,i);for(let q=0;q<w.length;q+=1)w[q].m(r,null);b(y,l,E),O&&O.m(y,E),b(y,o,E),_||(m=[Se(e,"mouseleave",t[29]),Se(e,"blur",t[29])],_=!0)},p(y,E){if(y[15]=="line"?d?d.p(y,E):(d=jr(y),d.c(),d.m(r,i)):d&&(d.d(1),d=null),E[0]&414614005){h=Object.entries(y[0]);let q;for(q=0;q<h.length;q+=1){const N=Vr(y,h,q);w[q]?w[q].p(N,E):(w[q]=Ur(N),w[q].c(),w[q].m(r,null))}for(;q<w.length;q+=1)w[q].d(1);w.length=h.length}E[0]&4194304&&n!==(n="translate("+y[22]+", 0)")&&v(r,"transform",n),E[0]&8&&v(e,"width",y[3]),E[0]&2129924&&s!==(s=y[15]=="line"?y[2]+y[21]/2:y[2])&&v(e,"height",s),E[0]&12&&f!==(f="0 0 "+y[3]+" "+y[2])&&v(e,"viewBox",f),y[9]&&(y[24][y[1]]||y[10])?O?O.p(y,E):(O=Lr(y),O.c(),O.m(o.parentNode,o)):O&&(O.d(1),O=null)},i:ie,o:ie,d(y){y&&c(e),d&&d.d(),at(w,y),y&&c(l),O&&O.d(y),y&&c(o),_=!1,Zr(m)}}}function Pt(t,e,r){let i,n,s,f,l,o,_;ar(t,yr,a=>r(23,o=a)),ar(t,gr,a=>r(24,_=a));let{uid:m=(Math.random()+1).toString(36).substring(7)}=e,{data:d={}}=e,{labels:h=[]}=e,{values:w=[]}=e,{linked:O=""}=e,{height:y=40}=e,{width:E=150}=e,{barMinWidth:q=4}=e,{grow:N=!1}=e,{align:C="right"}=e,{gap:K=1}=e,{fill:Y="#ff3e00"}=e,{fadeOpacity:x=.5}=e,{hover:Z=!0}=e,{transition:ue=0}=e,{showValue:se=!1}=e,{valueDefault:oe="&nbsp;"}=e,{valuePrepend:me=""}=e,{valueAppend:ne=""}=e,{valuePosition:ye="static"}=e,{valueUndefined:Pe=0}=e,{scaleMax:fe=0}=e,{type:re="bar"}=e,{lineColor:L=Y}=e,{tabindex:P=-1}=e,{dispatchEvents:W=!1}=e,{clickHandler:F=(a,z)=>null}=e;const V=dt();let B=0,he=[],u;function g(){return fe||(i?Math.max(...Object.values(d)):0)}function le(a){return Math.round(parseInt(y)/s*a-(re=="line"?n/2:0))||0}function pe(){return Math.max((parseInt(E)-i*parseInt(K))/i,parseInt(q))}function ge(){return C=="left"?0:parseInt(K)+parseInt(E)-(parseInt(K)+n)*i}function be(){let a=[];for(let z=0;z<Object.keys(d).length;z++)a.push([z*(n+K),y-le(Object.values(d)[z])]);return a}async function ae(a,z){Z&&(rr(yr,o[l]=a,o),await Dr(),W&&V("hover",{uid:m,key:a,index:z,linkedKey:l,value:_[m],valueElement:u,eventElement:event.target}))}async function we(){Z&&(rr(yr,o[l]=null,o),await Dr(),W&&V("blur",{uid:m,linkedKey:l,valueElement:u,eventElement:event.target}))}const ke=(a,z)=>ae(a,z),Ge=(a,z)=>ae(a,z),Ke=(a,z)=>ae(a,z),de=(a,z)=>F(a,z),ze=(a,z)=>F(a,z);function Ve(a){_t[a?"unshift":"push"](()=>{u=a,r(19,u)})}return t.$$set=a=>{"uid"in a&&r(1,m=a.uid),"data"in a&&r(0,d=a.data),"labels"in a&&r(30,h=a.labels),"values"in a&&r(31,w=a.values),"linked"in a&&r(32,O=a.linked),"height"in a&&r(2,y=a.height),"width"in a&&r(3,E=a.width),"barMinWidth"in a&&r(33,q=a.barMinWidth),"grow"in a&&r(34,N=a.grow),"align"in a&&r(35,C=a.align),"gap"in a&&r(4,K=a.gap),"fill"in a&&r(5,Y=a.fill),"fadeOpacity"in a&&r(6,x=a.fadeOpacity),"hover"in a&&r(7,Z=a.hover),"transition"in a&&r(8,ue=a.transition),"showValue"in a&&r(9,se=a.showValue),"valueDefault"in a&&r(10,oe=a.valueDefault),"valuePrepend"in a&&r(11,me=a.valuePrepend),"valueAppend"in a&&r(12,ne=a.valueAppend),"valuePosition"in a&&r(13,ye=a.valuePosition),"valueUndefined"in a&&r(14,Pe=a.valueUndefined),"scaleMax"in a&&r(36,fe=a.scaleMax),"type"in a&&r(15,re=a.type),"lineColor"in a&&r(16,L=a.lineColor),"tabindex"in a&&r(17,P=a.tabindex),"dispatchEvents"in a&&r(37,W=a.dispatchEvents),"clickHandler"in a&&r(18,F=a.clickHandler)},t.$$.update=()=>{t.$$.dirty[0]&1073741824|t.$$.dirty[1]&1&&h.length&&w.length&&r(0,d=Object.fromEntries(h.map((a,z)=>[h[z],w[z]]))),t.$$.dirty[0]&1&&r(38,i=Object.keys(d).length),t.$$.dirty[1]&140&&r(21,n=N?pe():parseInt(q)),t.$$.dirty[1]&128&&(s=g()),t.$$.dirty[1]&128&&r(22,f=i?ge():0),t.$$.dirty[1]&2&&r(20,l=O||(Math.random()+1).toString(36).substring(7)),t.$$.dirty[0]&15736849&&ye=="floating"&&r(25,B=(parseInt(K)+n)*Object.keys(d).indexOf(o[l])+f),t.$$.dirty[0]&32769&&re=="line"&&r(26,he=be()),t.$$.dirty[0]&9437187&&(o[l]?rr(gr,_[m]=d[o[l]],_):rr(gr,_[m]=null,_)),t.$$.dirty[0]&18350082|t.$$.dirty[1]&64&&W&&V("value-update",{value:_[m],uid:m,linkedKey:l,valueElement:u}),t.$$.dirty[0]&131072&&P>0&&console.warn("Tabindex should not be higher than 0")},[d,m,y,E,K,Y,x,Z,ue,se,oe,me,ne,ye,Pe,re,L,P,F,u,l,n,f,o,_,B,he,le,ae,we,h,w,O,q,N,C,fe,W,i,ke,Ge,Ke,de,ze,Ve]}class kr extends dr{constructor(e){super(),_r(this,e,Pt,Ft,mr,{uid:1,data:0,labels:30,values:31,linked:32,height:2,width:3,barMinWidth:33,grow:34,align:35,gap:4,fill:5,fadeOpacity:6,hover:7,transition:8,showValue:9,valueDefault:10,valuePrepend:11,valueAppend:12,valuePosition:13,valueUndefined:14,scaleMax:36,type:15,lineColor:16,tabindex:17,dispatchEvents:37,clickHandler:18},null,[-1,-1])}}function Vt(t){let e,r,i,n,s,f,l,o,_;s=new cr({props:{data:t[0],column:t[3],fmt:t[6]}});let m=t[5]&&Br(t),d=t[4]&&Qr(t);return{c(){e=J("p"),r=We(t[1]),i=D(),n=J("div"),j(s.$$.fragment),f=D(),m&&m.c(),l=D(),d&&d.c(),o=ee(),this.h()},l(h){e=G(h,"P",{class:!0});var w=$(e);r=Fe(w,t[1]),w.forEach(c),i=S(h),n=G(h,"DIV",{class:!0});var O=$(n);Q(s.$$.fragment,O),f=S(O),m&&m.l(O),O.forEach(c),l=S(h),d&&d.l(h),o=ee(),this.h()},h(){v(e,"class","text-sm text-gray-700"),v(n,"class","relative text-xl font-medium text-gray-700 my-0.5")},m(h,w){b(h,e,w),te(e,r),b(h,i,w),b(h,n,w),H(s,n,null),te(n,f),m&&m.m(n,null),b(h,l,w),d&&d.m(h,w),b(h,o,w),_=!0},p(h,w){(!_||w&2)&&Qe(r,h[1]);const O={};w&1&&(O.data=h[0]),w&8&&(O.column=h[3]),w&64&&(O.fmt=h[6]),s.$set(O),h[5]?m?(m.p(h,w),w&32&&k(m,1)):(m=Br(h),m.c(),k(m,1),m.m(n,null)):m&&(ce(),T(m,1,1,()=>{m=null}),ve()),h[4]?d?(d.p(h,w),w&16&&k(d,1)):(d=Qr(h),d.c(),k(d,1),d.m(o.parentNode,o)):d&&(ce(),T(d,1,1,()=>{d=null}),ve())},i(h){_||(k(s.$$.fragment,h),k(m),k(d),_=!0)},o(h){T(s.$$.fragment,h),T(m),T(d),_=!1},d(h){h&&c(e),h&&c(i),h&&c(n),U(s),m&&m.d(),h&&c(l),d&&d.d(h),h&&c(o)}}}function jt(t){let e,r;return e=new $r({props:{chartType:"Big Value",error:t[11].message}}),{c(){j(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,n){H(e,i,n),r=!0},p(i,n){const s={};n&2048&&(s.error=i[11].message),e.$set(s)},i(i){r||(k(e.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),r=!1},d(i){U(e,i)}}}function Br(t){let e=t[14](),r,i,n=e&&Ht(t);return{c(){n&&n.c(),r=ee()},l(s){n&&n.l(s),r=ee()},m(s,f){n&&n.m(s,f),b(s,r,f),i=!0},p(s,f){e&&n.p(s,f)},i(s){i||(k(n),i=!0)},o(s){T(n),i=!1},d(s){n&&n.d(s),s&&c(r)}}}function Ht(t){let e,r,i;var n=kr;function s(f){return{props:{data:f[13],type:"line",grow:!0,barMinWidth:"1",gap:"0",fill:"var(--grey-400)",align:"left",hover:!1,linked:"id",width:"75",tabindex:-1}}}return n&&(r=Sr(n,s(t))),{c(){e=J("div"),r&&j(r.$$.fragment),this.h()},l(f){e=G(f,"DIV",{"data-viz":!0,class:!0});var l=$(e);r&&Q(r.$$.fragment,l),l.forEach(c),this.h()},h(){v(e,"data-viz","BigValue"),v(e,"class","inline-block svelte-d8ixt8")},m(f,l){b(f,e,l),r&&H(r,e,null),i=!0},p(f,l){const o={};if(l&8192&&(o.data=f[13]),n!==(n=kr)){if(r){ce();const _=r;T(_.$$.fragment,1,0,()=>{U(_,1)}),ve()}n?(r=Sr(n,s(f)),j(r.$$.fragment),k(r.$$.fragment,1),H(r,e,null)):r=null}else n&&r.$set(o)},i(f){i||(r&&k(r.$$.fragment,f),i=!0)},o(f){r&&T(r.$$.fragment,f),i=!1},d(f){f&&c(e),r&&U(r)}}}function Qr(t){let e,r,i=t[10]?"&#9650;":"&#9660;",n,s,f,l,o,_,m;return s=new cr({props:{data:t[0],column:t[4],fmt:t[7]}}),{c(){e=J("p"),r=J("span"),n=D(),j(s.$$.fragment),f=D(),l=J("span"),o=We(t[2]),this.h()},l(d){e=G(d,"P",{class:!0,style:!0});var h=$(e);r=G(h,"SPAN",{class:!0});var w=$(r);w.forEach(c),n=S(h),Q(s.$$.fragment,h),f=S(h),l=G(h,"SPAN",{});var O=$(l);o=Fe(O,t[2]),O.forEach(c),h.forEach(c),this.h()},h(){v(r,"class","font-[system-ui]"),v(e,"class","text-xs font-sans"),v(e,"style",_=`color:${t[12]}`)},m(d,h){b(d,e,h),te(e,r),r.innerHTML=i,te(e,n),H(s,e,null),te(e,f),te(e,l),te(l,o),m=!0},p(d,h){(!m||h&1024)&&i!==(i=d[10]?"&#9650;":"&#9660;")&&(r.innerHTML=i);const w={};h&1&&(w.data=d[0]),h&16&&(w.column=d[4]),h&128&&(w.fmt=d[7]),s.$set(w),(!m||h&4)&&Qe(o,d[2]),(!m||h&4096&&_!==(_=`color:${d[12]}`))&&v(e,"style",_)},i(d){m||(k(s.$$.fragment,d),m=!0)},o(d){T(s.$$.fragment,d),m=!1},d(d){d&&c(e),U(s)}}}function Ut(t){let e,r,i,n,s;const f=[jt,Vt],l=[];function o(_,m){return _[11]?0:1}return r=o(t),i=l[r]=f[r](t),{c(){e=J("div"),i.c(),this.h()},l(_){e=G(_,"DIV",{class:!0,style:!0});var m=$(e);i.l(m),m.forEach(c),this.h()},h(){v(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),v(e,"style",n=`
        min-width: ${t[9]};
        max-width: ${t[8]};
    `)},m(_,m){b(_,e,m),l[r].m(e,null),s=!0},p(_,[m]){let d=r;r=o(_),r===d?l[r].p(_,m):(ce(),T(l[d],1,1,()=>{l[d]=null}),ve(),i=l[r],i?i.p(_,m):(i=l[r]=f[r](_),i.c()),k(i,1),i.m(e,null)),(!s||m&768&&n!==(n=`
        min-width: ${_[9]};
        max-width: ${_[8]};
    `))&&v(e,"style",n)},i(_){s||(k(i),s=!0)},o(_){T(i),s=!1},d(_){_&&c(e),l[r].d()}}}function Lt(t,e,r){let{data:i}=e,{value:n=null}=e,{comparison:s=null}=e,{sparkline:f=null}=e,{fmt:l=void 0}=e,{comparisonFmt:o=void 0}=e,{title:_=null}=e,{comparisonTitle:m=null}=e,{downIsGood:d=!1}=e,{maxWidth:h="none"}=e,{minWidth:w="18%"}=e,O=!0,y="var(--grey-700)",E={},q;function N(){try{if(kr)return!0}catch{return!1}return!1}return t.$$set=C=>{"data"in C&&r(0,i=C.data),"value"in C&&r(3,n=C.value),"comparison"in C&&r(4,s=C.comparison),"sparkline"in C&&r(5,f=C.sparkline),"fmt"in C&&r(6,l=C.fmt),"comparisonFmt"in C&&r(7,o=C.comparisonFmt),"title"in C&&r(1,_=C.title),"comparisonTitle"in C&&r(2,m=C.comparisonTitle),"downIsGood"in C&&r(15,d=C.downIsGood),"maxWidth"in C&&r(8,h=C.maxWidth),"minWidth"in C&&r(9,w=C.minWidth)},t.$$.update=()=>{if(t.$$.dirty&35903)try{if(r(11,q=void 0),hr(i),!n)throw new Error("value is required");Array.isArray(i)||r(0,i=[i]),hr(i,[n]);let C=At(i,"array"),K=C.find(Y=>Y.id===n);if(r(1,_=_??(K?K.title:null)),s){hr(i,[s]);let Y=C.find(x=>x.id===s);r(2,m=m??(Y?Y.title:null))}if(i&&s&&(r(10,O=i[0][s]>=0),r(12,y=O&&!d||!O&&d?"var(--green-700)":"var(--red-700)")),i&&f&&n){let Y=Dt(i,f,!0);for(let x=0;x<Y.length;x++)r(13,E[Y[x][f]]=Y[x][n],E)}}catch(C){throw r(11,q=C),console.error("\x1B[31m%s\x1B[0m",`Error in Big Value: ${q.message}`),q}},[i,_,m,n,s,f,l,o,h,w,O,q,y,E,N,d]}let Bt=class extends dr{constructor(e){super(),_r(this,e,Lt,Ut,mr,{data:0,value:3,comparison:4,sparkline:5,fmt:6,comparisonFmt:7,title:1,comparisonTitle:2,downIsGood:15,maxWidth:8,minWidth:9})}};function Qt(t){let e;const r=t[6].default,i=pt(r,t,t[7],null);return{c(){i&&i.c()},l(n){i&&i.l(n)},m(n,s){i&&i.m(n,s),e=!0},p(n,s){i&&i.p&&(!e||s&128)&&yt(i,r,n,n[7],e?bt(r,n[7],s,null):gt(n[7]),null)},i(n){e||(k(i,n),e=!0)},o(n){T(i,n),e=!1},d(n){i&&i.d(n)}}}function Jt(t){var s;let e,r;const i=[t[4],{data:(s=t[9])!=null&&s.__isQueryStore?Array.from(t[9]):t[9]}];let n={$$slots:{default:[Qt]},$$scope:{ctx:t}};for(let f=0;f<i.length;f+=1)n=wr(n,i[f]);return e=new Bt({props:n}),{c(){j(e.$$.fragment)},l(f){Q(e.$$.fragment,f)},m(f,l){H(e,f,l),r=!0},p(f,l){var _;const o=l&528?vt(i,[l&16&&ht(f[4]),l&512&&{data:(_=f[9])!=null&&_.__isQueryStore?Array.from(f[9]):f[9]}]):{};l&128&&(o.$$scope={dirty:l,ctx:f}),e.$set(o)},i(f){r||(k(e.$$.fragment,f),r=!0)},o(f){T(e.$$.fragment,f),r=!1},d(f){U(e,f)}}}function Gt(t){let e,r,i,n;return r=new $r({props:{error:t[9].error.message}}),{c(){e=J("div"),j(r.$$.fragment),this.h()},l(s){e=G(s,"DIV",{slot:!0,class:!0,style:!0});var f=$(e);Q(r.$$.fragment,f),f.forEach(c),this.h()},h(){v(e,"slot","error"),v(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),v(e,"style",i=`
				min-width: ${t[5].minWidth};
				max-width: ${t[5].maxWidth};
		`)},m(s,f){b(s,e,f),H(r,e,null),n=!0},p(s,f){const l={};f&512&&(l.error=s[9].error.message),r.$set(l),(!n||f&32&&i!==(i=`
				min-width: ${s[5].minWidth};
				max-width: ${s[5].maxWidth};
		`))&&v(e,"style",i)},i(s){n||(k(r.$$.fragment,s),n=!0)},o(s){T(r.$$.fragment,s),n=!1},d(s){s&&c(e),U(r)}}}function Kt(t){let e,r,i,n;return r=new Nt({props:{emptyMessage:t[2],emptySet:t[1],chartType:Yt,isInitial:t[3]}}),{c(){e=J("div"),j(r.$$.fragment),this.h()},l(s){e=G(s,"DIV",{slot:!0,class:!0,style:!0});var f=$(e);Q(r.$$.fragment,f),f.forEach(c),this.h()},h(){v(e,"slot","empty"),v(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),v(e,"style",i=`
				min-width: ${t[5].minWidth};
				max-width: ${t[5].maxWidth};
		`)},m(s,f){b(s,e,f),H(r,e,null),n=!0},p(s,f){const l={};f&4&&(l.emptyMessage=s[2]),f&2&&(l.emptySet=s[1]),f&8&&(l.isInitial=s[3]),r.$set(l),(!n||f&32&&i!==(i=`
				min-width: ${s[5].minWidth};
				max-width: ${s[5].maxWidth};
		`))&&v(e,"style",i)},i(s){n||(k(r.$$.fragment,s),n=!0)},o(s){T(r.$$.fragment,s),n=!1},d(s){s&&c(e),U(r)}}}function zt(t){let e,r,i=(t[5].title??" ")+"",n,s,f,l,o;return f=new cr({props:{column:t[5].value,fmt:t[5].fmt,data:t[9]}}),{c(){e=J("div"),r=J("p"),n=We(i),s=D(),j(f.$$.fragment),this.h()},l(_){e=G(_,"DIV",{class:!0,style:!0,slot:!0});var m=$(e);r=G(m,"P",{class:!0});var d=$(r);n=Fe(d,i),d.forEach(c),s=S(m),Q(f.$$.fragment,m),m.forEach(c),this.h()},h(){v(r,"class","text-sm text-gray-700"),v(e,"class","inline-block font-sans pt-2 pb-3 pr-3 pl-0 mr-3 items-center align-top"),v(e,"style",l=`
			min-width: ${t[5].minWidth};
			max-width: ${t[5].maxWidth};
		`),v(e,"slot","skeleton")},m(_,m){b(_,e,m),te(e,r),te(r,n),te(e,s),H(f,e,null),o=!0},p(_,m){(!o||m&32)&&i!==(i=(_[5].title??" ")+"")&&Qe(n,i);const d={};m&32&&(d.column=_[5].value),m&32&&(d.fmt=_[5].fmt),m&512&&(d.data=_[9]),f.$set(d),(!o||m&32&&l!==(l=`
			min-width: ${_[5].minWidth};
			max-width: ${_[5].maxWidth};
		`))&&v(e,"style",l)},i(_){o||(k(f.$$.fragment,_),o=!0)},o(_){T(f.$$.fragment,_),o=!1},d(_){_&&c(e),U(f)}}}function Xt(t){let e,r;return e=new Mt({props:{data:t[0],$$slots:{skeleton:[zt,({loaded:i})=>({9:i}),({loaded:i})=>i?512:0],empty:[Kt,({loaded:i})=>({9:i}),({loaded:i})=>i?512:0],error:[Gt,({loaded:i})=>({9:i}),({loaded:i})=>i?512:0],default:[Jt,({loaded:i})=>({9:i}),({loaded:i})=>i?512:0]},$$scope:{ctx:t}}}),{c(){j(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,n){H(e,i,n),r=!0},p(i,[n]){const s={};n&1&&(s.data=i[0]),n&702&&(s.$$scope={dirty:n,ctx:i}),e.$set(s)},i(i){r||(k(e.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),r=!1},d(i){U(e,i)}}}let Yt="Big Value";function Zt(t,e,r){let i,{$$slots:n={},$$scope:s}=e,{data:f}=e;const l=typeof f=="object"&&"__isQueryStore"in f?f.hash:void 0;let o=(f==null?void 0:f.hash)===l,{emptySet:_=void 0}=e,{emptyMessage:m=void 0}=e;return t.$$set=d=>{r(5,e=wr(wr({},e),Wr(d))),"data"in d&&r(0,f=d.data),"emptySet"in d&&r(1,_=d.emptySet),"emptyMessage"in d&&r(2,m=d.emptyMessage),"$$scope"in d&&r(7,s=d.$$scope)},t.$$.update=()=>{t.$$.dirty&1&&r(3,o=(f==null?void 0:f.hash)===l),r(4,i=Object.fromEntries(Object.entries(e).filter(([,d])=>d!==void 0)))},e=Wr(e),[f,_,m,o,i,e,n,s]}class br extends dr{constructor(e){super(),_r(this,e,Zt,Xt,mr,{data:0,emptySet:1,emptyMessage:2})}}function $t(t){var n;let e,r=(M.title??((n=M.og)==null?void 0:n.title))+"",i;return{c(){e=J("h1"),i=We(r),this.h()},l(s){e=G(s,"H1",{class:!0});var f=$(e);i=Fe(f,r),f.forEach(c),this.h()},h(){v(e,"class","title")},m(s,f){b(s,e,f),te(e,i)},p:ie,d(s){s&&c(e)}}}function xt(t){return{c(){this.h()},l(e){this.h()},h(){document.title="Evidence"},m:ie,p:ie,d:ie}}function ei(t){var f;let e,r,i,n,s;return document.title=e=M.title??((f=M.og)==null?void 0:f.title),{c(){r=D(),i=J("meta"),n=D(),s=J("meta"),this.h()},l(l){r=S(l),i=G(l,"META",{property:!0,content:!0}),n=S(l),s=G(l,"META",{name:!0,content:!0}),this.h()},h(){var l,o;v(i,"property","og:title"),v(i,"content",((l=M.og)==null?void 0:l.title)??M.title),v(s,"name","twitter:title"),v(s,"content",((o=M.og)==null?void 0:o.title)??M.title)},m(l,o){b(l,r,o),b(l,i,o),b(l,n,o),b(l,s,o)},p(l,o){var _;o&0&&e!==(e=M.title??((_=M.og)==null?void 0:_.title))&&(document.title=e)},d(l){l&&c(r),l&&c(i),l&&c(n),l&&c(s)}}}function ri(t){var s,f;let e,r,i=(M.description||((s=M.og)==null?void 0:s.description))&&ti(),n=((f=M.og)==null?void 0:f.image)&&ii();return{c(){i&&i.c(),e=D(),n&&n.c(),r=ee()},l(l){i&&i.l(l),e=S(l),n&&n.l(l),r=ee()},m(l,o){i&&i.m(l,o),b(l,e,o),n&&n.m(l,o),b(l,r,o)},p(l,o){var _,m;(M.description||(_=M.og)!=null&&_.description)&&i.p(l,o),(m=M.og)!=null&&m.image&&n.p(l,o)},d(l){i&&i.d(l),l&&c(e),n&&n.d(l),l&&c(r)}}}function ti(t){let e,r,i,n,s;return{c(){e=J("meta"),r=D(),i=J("meta"),n=D(),s=J("meta"),this.h()},l(f){e=G(f,"META",{name:!0,content:!0}),r=S(f),i=G(f,"META",{property:!0,content:!0}),n=S(f),s=G(f,"META",{name:!0,content:!0}),this.h()},h(){var f,l,o;v(e,"name","description"),v(e,"content",M.description??((f=M.og)==null?void 0:f.description)),v(i,"property","og:description"),v(i,"content",((l=M.og)==null?void 0:l.description)??M.description),v(s,"name","twitter:description"),v(s,"content",((o=M.og)==null?void 0:o.description)??M.description)},m(f,l){b(f,e,l),b(f,r,l),b(f,i,l),b(f,n,l),b(f,s,l)},p:ie,d(f){f&&c(e),f&&c(r),f&&c(i),f&&c(n),f&&c(s)}}}function ii(t){let e,r,i;return{c(){e=J("meta"),r=D(),i=J("meta"),this.h()},l(n){e=G(n,"META",{property:!0,content:!0}),r=S(n),i=G(n,"META",{name:!0,content:!0}),this.h()},h(){var n,s;v(e,"property","og:image"),v(e,"content",(n=M.og)==null?void 0:n.image),v(i,"name","twitter:image"),v(i,"content",(s=M.og)==null?void 0:s.image)},m(n,s){b(n,e,s),b(n,r,s),b(n,i,s)},p:ie,d(n){n&&c(e),n&&c(r),n&&c(i)}}}function Jr(t){let e,r;return e=new Je({props:{queryID:"drivers",queryResult:t[12]}}),{c(){j(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,n){H(e,i,n),r=!0},p(i,n){const s={};n[0]&4096&&(s.queryResult=i[12]),e.$set(s)},i(i){r||(k(e.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),r=!1},d(i){U(e,i)}}}function ni(t){let e,r,i,n,s,f;return e=new pr({props:{id:"dob",title:"Date Of Birth"}}),i=new pr({props:{id:"nationality",title:"Nationality"}}),s=new pr({props:{id:"url",title:"Wikipedia",contentType:"link",openInNewTab:"true"}}),{c(){j(e.$$.fragment),r=D(),j(i.$$.fragment),n=D(),j(s.$$.fragment)},l(l){Q(e.$$.fragment,l),r=S(l),Q(i.$$.fragment,l),n=S(l),Q(s.$$.fragment,l)},m(l,o){H(e,l,o),b(l,r,o),H(i,l,o),b(l,n,o),H(s,l,o),f=!0},p:ie,i(l){f||(k(e.$$.fragment,l),k(i.$$.fragment,l),k(s.$$.fragment,l),f=!0)},o(l){T(e.$$.fragment,l),T(i.$$.fragment,l),T(s.$$.fragment,l),f=!1},d(l){U(e,l),l&&c(r),U(i,l),l&&c(n),U(s,l)}}}function li(t){let e,r,i,n,s,f;return e=new vr({props:{dest:"/sports/F1/drivers/",text:"Drivers"}}),i=new vr({props:{dest:"/sports/F1/races/",text:"Races"}}),s=new vr({props:{dest:"/sports/F1/circuits/",text:"Circuits"}}),{c(){j(e.$$.fragment),r=D(),j(i.$$.fragment),n=D(),j(s.$$.fragment)},l(l){Q(e.$$.fragment,l),r=S(l),Q(i.$$.fragment,l),n=S(l),Q(s.$$.fragment,l)},m(l,o){H(e,l,o),b(l,r,o),H(i,l,o),b(l,n,o),H(s,l,o),f=!0},p:ie,i(l){f||(k(e.$$.fragment,l),k(i.$$.fragment,l),k(s.$$.fragment,l),f=!0)},o(l){T(e.$$.fragment,l),T(i.$$.fragment,l),T(s.$$.fragment,l),f=!1},d(l){U(e,l),l&&c(r),U(i,l),l&&c(n),U(s,l)}}}function Gr(t){let e,r;return e=new Je({props:{queryID:"results",queryResult:t[11]}}),{c(){j(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,n){H(e,i,n),r=!0},p(i,n){const s={};n[0]&2048&&(s.queryResult=i[11]),e.$set(s)},i(i){r||(k(e.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),r=!1},d(i){U(e,i)}}}function Kr(t){let e,r;return e=new Je({props:{queryID:"driver_cross_results",queryResult:t[10]}}),{c(){j(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,n){H(e,i,n),r=!0},p(i,n){const s={};n[0]&1024&&(s.queryResult=i[10]),e.$set(s)},i(i){r||(k(e.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),r=!1},d(i){U(e,i)}}}function zr(t){let e,r;return e=new Je({props:{queryID:"driver_wins",queryResult:t[9]}}),{c(){j(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,n){H(e,i,n),r=!0},p(i,n){const s={};n[0]&512&&(s.queryResult=i[9]),e.$set(s)},i(i){r||(k(e.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),r=!1},d(i){U(e,i)}}}function Xr(t){let e,r;return e=new Je({props:{queryID:"driver_podiums",queryResult:t[8]}}),{c(){j(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,n){H(e,i,n),r=!0},p(i,n){const s={};n[0]&256&&(s.queryResult=i[8]),e.$set(s)},i(i){r||(k(e.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),r=!1},d(i){U(e,i)}}}function Yr(t){let e,r;return e=new Je({props:{queryID:"driver_points",queryResult:t[7]}}),{c(){j(e.$$.fragment)},l(i){Q(e.$$.fragment,i)},m(i,n){H(e,i,n),r=!0},p(i,n){const s={};n[0]&128&&(s.queryResult=i[7]),e.$set(s)},i(i){r||(k(e.$$.fragment,i),r=!0)},o(i){T(e.$$.fragment,i),r=!1},d(i){U(e,i)}}}function si(t){var he;let e,r,i,n,s,f,l,o,_,m,d,h,w,O,y,E,q,N,C,K,Y,x,Z,ue,se,oe,me,ne=typeof M<"u"&&(M.title||((he=M.og)==null?void 0:he.title))&&M.hide_title!==!0&&$t();function ye(u,g){var le;return typeof M<"u"&&(M.title||(le=M.og)!=null&&le.title)?ei:xt}let fe=ye()(t),re=typeof M=="object"&&ri(),L=t[12]&&Jr(t);o=new cr({props:{data:t[12].filter(t[45]),column:"name"}}),m=new Ct({props:{data:t[12].filter(t[46]),$$slots:{default:[ni]},$$scope:{ctx:t}}}),h=new br({props:{data:t[9].filter(t[47]),value:"wins"}}),O=new br({props:{data:t[8].filter(t[48]),value:"podiums"}}),E=new br({props:{data:t[7].filter(t[49]),value:"points"}}),K=new Tt({props:{$$slots:{default:[li]},$$scope:{ctx:t}}});let P=t[11]&&Gr(t),W=t[10]&&Kr(t),F=t[9]&&zr(t),V=t[8]&&Xr(t),B=t[7]&&Yr(t);return{c(){ne&&ne.c(),e=D(),fe.c(),r=J("meta"),i=J("meta"),re&&re.c(),n=ee(),s=D(),L&&L.c(),f=D(),l=J("h1"),j(o.$$.fragment),_=D(),j(m.$$.fragment),d=D(),j(h.$$.fragment),w=D(),j(O.$$.fragment),y=D(),j(E.$$.fragment),q=D(),N=J("hr"),C=D(),j(K.$$.fragment),Y=D(),P&&P.c(),x=D(),W&&W.c(),Z=D(),F&&F.c(),ue=D(),V&&V.c(),se=D(),B&&B.c(),oe=ee(),this.h()},l(u){ne&&ne.l(u),e=S(u);const g=wt("svelte-1j2izld",document.head);fe.l(g),r=G(g,"META",{name:!0,content:!0}),i=G(g,"META",{name:!0,content:!0}),re&&re.l(g),n=ee(),g.forEach(c),s=S(u),L&&L.l(u),f=S(u),l=G(u,"H1",{class:!0});var le=$(l);Q(o.$$.fragment,le),le.forEach(c),_=S(u),Q(m.$$.fragment,u),d=S(u),Q(h.$$.fragment,u),w=S(u),Q(O.$$.fragment,u),y=S(u),Q(E.$$.fragment,u),q=S(u),N=G(u,"HR",{class:!0}),C=S(u),Q(K.$$.fragment,u),Y=S(u),P&&P.l(u),x=S(u),W&&W.l(u),Z=S(u),F&&F.l(u),ue=S(u),V&&V.l(u),se=S(u),B&&B.l(u),oe=ee(),this.h()},h(){v(r,"name","twitter:card"),v(r,"content","summary"),v(i,"name","twitter:site"),v(i,"content","@evidence_dev"),v(l,"class","markdown"),v(N,"class","markdown")},m(u,g){ne&&ne.m(u,g),b(u,e,g),fe.m(document.head,null),te(document.head,r),te(document.head,i),re&&re.m(document.head,null),te(document.head,n),b(u,s,g),L&&L.m(u,g),b(u,f,g),b(u,l,g),H(o,l,null),b(u,_,g),H(m,u,g),b(u,d,g),H(h,u,g),b(u,w,g),H(O,u,g),b(u,y,g),H(E,u,g),b(u,q,g),b(u,N,g),b(u,C,g),H(K,u,g),b(u,Y,g),P&&P.m(u,g),b(u,x,g),W&&W.m(u,g),b(u,Z,g),F&&F.m(u,g),b(u,ue,g),V&&V.m(u,g),b(u,se,g),B&&B.m(u,g),b(u,oe,g),me=!0},p(u,g){var ke;typeof M<"u"&&(M.title||(ke=M.og)!=null&&ke.title)&&M.hide_title!==!0&&ne.p(u,g),fe.p(u,g),typeof M=="object"&&re.p(u,g),u[12]?L?(L.p(u,g),g[0]&4096&&k(L,1)):(L=Jr(u),L.c(),k(L,1),L.m(f.parentNode,f)):L&&(ce(),T(L,1,1,()=>{L=null}),ve());const le={};g[0]&4097&&(le.data=u[12].filter(u[45])),o.$set(le);const pe={};g[0]&4097&&(pe.data=u[12].filter(u[46])),g[2]&32768&&(pe.$$scope={dirty:g,ctx:u}),m.$set(pe);const ge={};g[0]&513&&(ge.data=u[9].filter(u[47])),h.$set(ge);const be={};g[0]&257&&(be.data=u[8].filter(u[48])),O.$set(be);const ae={};g[0]&129&&(ae.data=u[7].filter(u[49])),E.$set(ae);const we={};g[2]&32768&&(we.$$scope={dirty:g,ctx:u}),K.$set(we),u[11]?P?(P.p(u,g),g[0]&2048&&k(P,1)):(P=Gr(u),P.c(),k(P,1),P.m(x.parentNode,x)):P&&(ce(),T(P,1,1,()=>{P=null}),ve()),u[10]?W?(W.p(u,g),g[0]&1024&&k(W,1)):(W=Kr(u),W.c(),k(W,1),W.m(Z.parentNode,Z)):W&&(ce(),T(W,1,1,()=>{W=null}),ve()),u[9]?F?(F.p(u,g),g[0]&512&&k(F,1)):(F=zr(u),F.c(),k(F,1),F.m(ue.parentNode,ue)):F&&(ce(),T(F,1,1,()=>{F=null}),ve()),u[8]?V?(V.p(u,g),g[0]&256&&k(V,1)):(V=Xr(u),V.c(),k(V,1),V.m(se.parentNode,se)):V&&(ce(),T(V,1,1,()=>{V=null}),ve()),u[7]?B?(B.p(u,g),g[0]&128&&k(B,1)):(B=Yr(u),B.c(),k(B,1),B.m(oe.parentNode,oe)):B&&(ce(),T(B,1,1,()=>{B=null}),ve())},i(u){me||(k(L),k(o.$$.fragment,u),k(m.$$.fragment,u),k(h.$$.fragment,u),k(O.$$.fragment,u),k(E.$$.fragment,u),k(K.$$.fragment,u),k(P),k(W),k(F),k(V),k(B),me=!0)},o(u){T(L),T(o.$$.fragment,u),T(m.$$.fragment,u),T(h.$$.fragment,u),T(O.$$.fragment,u),T(E.$$.fragment,u),T(K.$$.fragment,u),T(P),T(W),T(F),T(V),T(B),me=!1},d(u){ne&&ne.d(u),u&&c(e),fe.d(u),c(r),c(i),re&&re.d(u),c(n),u&&c(s),L&&L.d(u),u&&c(f),u&&c(l),U(o),u&&c(_),U(m,u),u&&c(d),U(h,u),u&&c(w),U(O,u),u&&c(y),U(E,u),u&&c(q),u&&c(N),u&&c(C),U(K,u),u&&c(Y),P&&P.d(u),u&&c(x),W&&W.d(u),u&&c(Z),F&&F.d(u),u&&c(ue),V&&V.d(u),u&&c(se),B&&B.d(u),u&&c(oe)}}}const M={queries:[{drivers:"all_drivers.sql"}]};function Be(t,...e){return!!e.some(r=>r==null?void 0:r.__unset)}function fi(t,e,r){var Rr,Or,Tr,Cr,Mr,Nr,Ar;let i,n,s,f,l,o,_,m,d,h,w,O,y,E,q,N,C,K,Y,x,Z,ue,se,oe,me,ne,ye,Pe,fe,re,L,P=ie,W=()=>(P(),P=Ue(Ne,p=>r(39,L=p)),Ne),F,V=ie,B=()=>(V(),V=Ue(Me,p=>r(40,F=p)),Me),he,u=ie,g=()=>(u(),u=Ue(Ce,p=>r(41,he=p)),Ce),le,pe=ie,ge=()=>(pe(),pe=Ue(Te,p=>r(42,le=p)),Te),be,ae=ie,we=()=>(ae(),ae=Ue(Oe,p=>r(43,be=p)),Oe),ke,Ge=ie,Ke=()=>(Ge(),Ge=Ue(Re,p=>r(44,ke=p)),Re),de,ze;ar(t,It,p=>r(0,de=p)),ar(t,Pr,p=>r(67,ze=p)),t.$$.on_destroy.push(()=>P()),t.$$.on_destroy.push(()=>V()),t.$$.on_destroy.push(()=>u()),t.$$.on_destroy.push(()=>pe()),t.$$.on_destroy.push(()=>ae()),t.$$.on_destroy.push(()=>Ge());let{data:Ve}=e,{data:a={},customFormattingSettings:z,__db:Ie,inputs:Er}=Ve;rr(Pr,ze="d5b4ead150f4c4938fe85b5cf3fdad1d",ze);let qr=Ir(Er);Fr(Rt,qr),kt(qr.subscribe(p=>Er=p)),Fr(Ot,{getCustomFormats:()=>z.customFormats||[]});const Ee=(p,I)=>De(Ie.query,p,{query_name:I});Et(Ee);const je=()=>{};let qe=!1;(Rr=import.meta)!=null&&Rr.hot&&(void 0).on("vite:afterUpdate",()=>{qe=!0,Ae.emptyCache()}),de.params,(Or=import.meta)!=null&&Or.hot&&(void 0).on("evidence:queryChange",({queryId:p,content:I})=>{let R=[];if(p||R.push("Malformed event: Missing queryId"),I||R.push("Malformed event: Missing content"),R.length){console.warn("Failed to update query on serverside change!",R.join(`
`));return}p==="drivers"&&r(37,i=I)});let Xe;He(()=>r(15,Xe=i));let Re;const xr=()=>{const p=()=>{let I,R;try{if(f||qe)I=void 0,R=void 0;else if(a.drivers){if(a.drivers instanceof Error)throw a.drivers;I=a.drivers}else I=De(Ie.query,i,{query_name:"drivers"})}catch(_e){I=[],R=_e}const A=Ae.create(i,Ee,"drivers",{scoreNotifier:je,initialData:I,initialError:R,noResolve:n});let X;A.loaded||(X=A.fetch()),Re&&X instanceof Promise?X.then(()=>Ke(r(1,Re=A))):Ke(r(1,Re=A))};return p(),Le(p,500)};let nr;(Tr=import.meta)!=null&&Tr.hot&&(void 0).on("evidence:queryChange",({queryId:p,content:I})=>{let R=[];if(p||R.push("Malformed event: Missing queryId"),I||R.push("Malformed event: Missing content"),R.length){console.warn("Failed to update query on serverside change!",R.join(`
`));return}p==="results"&&r(35,l=I)});let Ye;He(()=>r(17,Ye=l));let Oe;const et=()=>{const p=()=>{let I,R;try{if(m||qe)I=void 0,R=void 0;else if(a.results){if(a.results instanceof Error)throw a.results;I=a.results}else I=De(Ie.query,l,{query_name:"results"})}catch(_e){I=[],R=_e}const A=Ae.create(l,Ee,"results",{scoreNotifier:je,initialData:I,initialError:R,noResolve:o});let X;A.loaded||(X=A.fetch()),Oe&&X instanceof Promise?X.then(()=>we(r(2,Oe=A))):we(r(2,Oe=A))};return p(),Le(p,500)};let lr;(Cr=import.meta)!=null&&Cr.hot&&(void 0).on("evidence:queryChange",({queryId:p,content:I})=>{let R=[];if(p||R.push("Malformed event: Missing queryId"),I||R.push("Malformed event: Missing content"),R.length){console.warn("Failed to update query on serverside change!",R.join(`
`));return}p==="driver_cross_results"&&r(33,d=I)});let Ze;He(()=>r(19,Ze=d));let Te;const rt=()=>{const p=()=>{let I,R;try{if(O||qe)I=void 0,R=void 0;else if(a.driver_cross_results){if(a.driver_cross_results instanceof Error)throw a.driver_cross_results;I=a.driver_cross_results}else I=De(Ie.query,d,{query_name:"driver_cross_results"})}catch(_e){I=[],R=_e}const A=Ae.create(d,Ee,"driver_cross_results",{scoreNotifier:je,initialData:I,initialError:R,noResolve:h});let X;A.loaded||(X=A.fetch()),Te&&X instanceof Promise?X.then(()=>ge(r(3,Te=A))):ge(r(3,Te=A))};return p(),Le(p,500)};let sr;(Mr=import.meta)!=null&&Mr.hot&&(void 0).on("evidence:queryChange",({queryId:p,content:I})=>{let R=[];if(p||R.push("Malformed event: Missing queryId"),I||R.push("Malformed event: Missing content"),R.length){console.warn("Failed to update query on serverside change!",R.join(`
`));return}p==="driver_wins"&&r(31,y=I)});let $e;He(()=>r(21,$e=y));let Ce;const tt=()=>{const p=()=>{let I,R;try{if(N||qe)I=void 0,R=void 0;else if(a.driver_wins){if(a.driver_wins instanceof Error)throw a.driver_wins;I=a.driver_wins}else I=De(Ie.query,y,{query_name:"driver_wins"})}catch(_e){I=[],R=_e}const A=Ae.create(y,Ee,"driver_wins",{scoreNotifier:je,initialData:I,initialError:R,noResolve:E});let X;A.loaded||(X=A.fetch()),Ce&&X instanceof Promise?X.then(()=>g(r(4,Ce=A))):g(r(4,Ce=A))};return p(),Le(p,500)};let fr;(Nr=import.meta)!=null&&Nr.hot&&(void 0).on("evidence:queryChange",({queryId:p,content:I})=>{let R=[];if(p||R.push("Malformed event: Missing queryId"),I||R.push("Malformed event: Missing content"),R.length){console.warn("Failed to update query on serverside change!",R.join(`
`));return}p==="driver_podiums"&&r(29,C=I)});let xe;He(()=>r(23,xe=C));let Me;const it=()=>{const p=()=>{let I,R;try{if(x||qe)I=void 0,R=void 0;else if(a.driver_podiums){if(a.driver_podiums instanceof Error)throw a.driver_podiums;I=a.driver_podiums}else I=De(Ie.query,C,{query_name:"driver_podiums"})}catch(_e){I=[],R=_e}const A=Ae.create(C,Ee,"driver_podiums",{scoreNotifier:je,initialData:I,initialError:R,noResolve:K});let X;A.loaded||(X=A.fetch()),Me&&X instanceof Promise?X.then(()=>B(r(5,Me=A))):B(r(5,Me=A))};return p(),Le(p,500)};let ur;(Ar=import.meta)!=null&&Ar.hot&&(void 0).on("evidence:queryChange",({queryId:p,content:I})=>{let R=[];if(p||R.push("Malformed event: Missing queryId"),I||R.push("Malformed event: Missing content"),R.length){console.warn("Failed to update query on serverside change!",R.join(`
`));return}p==="driver_points"&&r(27,Z=I)});let er;He(()=>r(25,er=Z));let Ne;const nt=()=>{const p=()=>{let I,R;try{if(oe||qe)I=void 0,R=void 0;else if(a.driver_points){if(a.driver_points instanceof Error)throw a.driver_points;I=a.driver_points}else I=De(Ie.query,Z,{query_name:"driver_points"})}catch(_e){I=[],R=_e}const A=Ae.create(Z,Ee,"driver_points",{scoreNotifier:je,initialData:I,initialError:R,noResolve:ue});let X;A.loaded||(X=A.fetch()),Ne&&X instanceof Promise?X.then(()=>W(r(6,Ne=A))):W(r(6,Ne=A))};return p(),Le(p,500)};let or;const lt=p=>p.driverRef.toUpperCase()===de.params.driverRef.toUpperCase(),st=p=>p.driverRef.toUpperCase()===de.params.driverRef.toUpperCase(),ft=p=>p.driverRef===de.params.driverRef,ut=p=>p.driverRef===de.params.driverRef,ot=p=>p.driverRef===de.params.driverRef;return t.$$set=p=>{"data"in p&&r(13,Ve=p.data)},t.$$.update=()=>{t.$$.dirty[0]&8192&&r(14,{data:a={},customFormattingSettings:z,__db:Ie}=Ve,a),t.$$.dirty[0]&16384&&qt.set(Object.keys(a).length>0),t.$$.dirty[0]&1&&de.params,t.$$.dirty[0]&32768|t.$$.dirty[1]&64&&(Xe||r(15,Xe=i)),t.$$.dirty[1]&64&&r(38,s=i),t.$$.dirty[0]&32768|t.$$.dirty[1]&128&&(f=s!==Xe),t.$$.dirty[0]&65536|t.$$.dirty[1]&64&&typeof nr>"u"&&r(16,nr=xr()),t.$$.dirty[0]&65536|t.$$.dirty[1]&64&&nr(),t.$$.dirty[0]&81920,t.$$.dirty[0]&131072|t.$$.dirty[1]&16&&(Ye||r(17,Ye=l)),t.$$.dirty[1]&16&&r(36,_=l),t.$$.dirty[0]&131072|t.$$.dirty[1]&32&&(m=_!==Ye),t.$$.dirty[0]&262144|t.$$.dirty[1]&16&&typeof lr>"u"&&r(18,lr=et()),t.$$.dirty[0]&262144|t.$$.dirty[1]&16&&lr(),t.$$.dirty[0]&278528,t.$$.dirty[0]&524288|t.$$.dirty[1]&4&&(Ze||r(19,Ze=d)),t.$$.dirty[1]&4&&r(34,w=d),t.$$.dirty[0]&524288|t.$$.dirty[1]&8&&(O=w!==Ze),t.$$.dirty[0]&1048576|t.$$.dirty[1]&4&&typeof sr>"u"&&r(20,sr=rt()),t.$$.dirty[0]&1048576|t.$$.dirty[1]&4&&sr(),t.$$.dirty[0]&1064960,t.$$.dirty[0]&2097152|t.$$.dirty[1]&1&&($e||r(21,$e=y)),t.$$.dirty[1]&1&&r(32,q=y),t.$$.dirty[0]&2097152|t.$$.dirty[1]&2&&(N=q!==$e),t.$$.dirty[0]&4194304|t.$$.dirty[1]&1&&typeof fr>"u"&&r(22,fr=tt()),t.$$.dirty[0]&4194304|t.$$.dirty[1]&1&&fr(),t.$$.dirty[0]&4210688,t.$$.dirty[0]&545259520&&(xe||r(23,xe=C)),t.$$.dirty[0]&536870912&&r(30,Y=C),t.$$.dirty[0]&1082130432&&(x=Y!==xe),t.$$.dirty[0]&553648128&&typeof ur>"u"&&r(24,ur=it()),t.$$.dirty[0]&553648128&&ur(),t.$$.dirty[0]&16793600,t.$$.dirty[0]&167772160&&(er||r(25,er=Z)),t.$$.dirty[0]&134217728&&r(28,se=Z),t.$$.dirty[0]&301989888&&(oe=se!==er),t.$$.dirty[0]&201326592&&typeof or>"u"&&r(26,or=nt()),t.$$.dirty[0]&201326592&&or(),t.$$.dirty[0]&67125248,t.$$.dirty[1]&8192&&r(12,me=ke),t.$$.dirty[1]&4096&&r(11,ne=be),t.$$.dirty[1]&2048&&r(10,ye=le),t.$$.dirty[1]&1024&&r(9,Pe=he),t.$$.dirty[1]&512&&r(8,fe=F),t.$$.dirty[1]&256&&r(7,re=L)},r(37,i=`select 
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
from f1.results`,r(33,d=`select 
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
ON r.driverId = d.driverId`),h=Be`select 
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
order by wins desc`),E=Be`select 
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
order by wins desc`,r(29,C=`select 
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
order by podiums desc`),K=Be`select 
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
order by points desc`,[de,Re,Oe,Te,Ce,Me,Ne,re,fe,Pe,ye,ne,me,Ve,a,Xe,nr,Ye,lr,Ze,sr,$e,fr,xe,ur,er,or,Z,se,C,Y,y,q,d,w,l,_,i,s,L,F,he,le,be,ke,lt,st,ft,ut,ot]}class Ii extends dr{constructor(e){super(),_r(this,e,fi,si,mr,{data:13},null,[-1,-1,-1])}}export{Ii as default};
