import{S as le,i as ae,s as re,a1 as oe,b as H,m as k,a2 as se,z as y,B as T,f as m,t as L,e as w,j as N,d as v,g as E,k as I,n as g,o as A,A as R,a3 as W,C as q,G as M,a as O,H as C,c as j,w as G,I as B,x as ne,J as P,a4 as z}from"../chunks/index.fa6138d3.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.69ec4ecf.js";import"../chunks/index.bca1a4ed.js";import"../chunks/paths.6977d179.js";import{I as U,D as ce,T as ie,A as fe,b as ue,c as _e,_ as he}from"../chunks/Icon.12882af5.js";function Y(h,e,l){const t=h.slice();return t[8]=e[l][0],t[9]=e[l][1],t}function x(h,e,l){const t=h.slice();return t[12]=e[l][0],t[13]=e[l][1],t}function K(h,e,l){const t=h.slice();return t[16]=e[l],t}function me(h){let e,l,t=h[19].message+"",a;return{c(){e=L(`An error was encountered while loading project schema.

	`),l=w("pre"),a=L(t),this.h()},l(c){e=N(c,`An error was encountered while loading project schema.

	`),l=v(c,"PRE",{class:!0});var _=E(l);a=N(_,t),_.forEach(m),this.h()},h(){I(l,"class","px-4 py-2 bg-red-800 text-white")},m(c,_){k(c,e,_),k(c,l,_),g(l,a)},p:A,i:A,o:A,d(c){c&&m(e),c&&m(l)}}}function pe(h){let e,l,t,a=[],c=new Map,_,s=Object.entries(h[7]);const n=r=>r[8];for(let r=0;r<s.length;r+=1){let o=Y(h,s,r),p=n(o);c.set(p,a[r]=te(p,o))}return{c(){e=w("section"),l=w("div"),t=w("ul");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=v(r,"SECTION",{});var o=E(e);l=v(o,"DIV",{});var p=E(l);t=v(p,"UL",{class:!0});var f=E(t);for(let b=0;b<a.length;b+=1)a[b].l(f);f.forEach(m),p.forEach(m),o.forEach(m),this.h()},h(){I(t,"class","list-none m-0 p-0 flex flex-col gap-1 mb-1")},m(r,o){k(r,e,o),g(e,l),g(l,t);for(let p=0;p<a.length;p+=1)a[p].m(t,null);_=!0},p(r,o){o&7&&(s=Object.entries(r[7]),R(),a=W(a,o,n,1,r,s,c,t,z,te,null,Y),q())},i(r){if(!_){for(let o=0;o<s.length;o+=1)y(a[o]);_=!0}},o(r){for(let o=0;o<a.length;o+=1)T(a[o]);_=!1},d(r){r&&m(e);for(let o=0;o<a.length;o+=1)a[o].d()}}}function Q(h){let e,l=[],t=new Map,a,c,_=Object.entries(h[9]);const s=n=>n[12];for(let n=0;n<_.length;n+=1){let r=x(h,_,n),o=s(r);t.set(o,l[n]=ee(o,r))}return{c(){e=w("ul");for(let n=0;n<l.length;n+=1)l[n].c();a=O(),this.h()},l(n){e=v(n,"UL",{class:!0});var r=E(e);for(let o=0;o<l.length;o+=1)l[o].l(r);a=j(r),r.forEach(m),this.h()},h(){I(e,"class","list-none m-0 flex flex-col gap-1")},m(n,r){k(n,e,r);for(let o=0;o<l.length;o+=1)l[o].m(e,null);g(e,a),c=!0},p(n,r){r&5&&(_=Object.entries(n[9]),R(),l=W(l,r,s,1,n,_,t,e,z,ee,a,x),q())},i(n){if(!c){for(let r=0;r<_.length;r+=1)y(l[r]);c=!0}},o(n){for(let r=0;r<l.length;r+=1)T(l[r]);c=!1},d(n){n&&m(e);for(let r=0;r<l.length;r+=1)l[r].d()}}}function X(h){let e,l=[],t=new Map,a,c=h[13].columns;const _=s=>s[16].column_name;for(let s=0;s<c.length;s+=1){let n=K(h,c,s),r=_(n);t.set(r,l[s]=Z(r,n))}return{c(){e=w("ul");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=v(s,"UL",{class:!0});var n=E(e);for(let r=0;r<l.length;r+=1)l[r].l(n);n.forEach(m),this.h()},h(){I(e,"class","list-none m-0 flex flex-col gap-1")},m(s,n){k(s,e,n);for(let r=0;r<l.length;r+=1)l[r].m(e,null);a=!0},p(s,n){n&4&&(c=s[13].columns,R(),l=W(l,n,_,1,s,c,t,e,z,Z,null,K),q())},i(s){if(!a){for(let n=0;n<c.length;n+=1)y(l[n]);a=!0}},o(s){for(let n=0;n<l.length;n+=1)T(l[n]);a=!1},d(s){s&&m(e);for(let n=0;n<l.length;n+=1)l[n].d()}}}function de(h){let e,l;return e=new U({props:{src:fe,class:"text-gray-700 w-5 h-5"}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){B(e,t,a),l=!0},p:A,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function be(h){let e,l;return e=new U({props:{src:ue,class:"text-gray-700 w-5 h-5"}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){B(e,t,a),l=!0},p:A,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function ge(h){let e,l;return e=new U({props:{src:_e,class:"text-gray-700 w-5 h-5"}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){B(e,t,a),l=!0},p:A,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function ke(h){let e,l;return e=new U({props:{src:he,class:"text-gray-700 w-5 h-5"}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){B(e,t,a),l=!0},p:A,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function Z(h,e){let l,t,a,c,_,s,n,r=e[16].column_name+"",o,p,f=e[16].data_type+"",b,i;const u=[ke,ge,be,de],d=[];function S($,D){return $[16].data_type==="INT"||$[16].data_type==="BIGINT"||$[16].data_type==="SMALLINT"||$[16].data_type==="TINYINT"||$[16].data_type==="DOUBLE"?0:$[16].data_type==="DATE"||$[16].data_type==="DATETIME"||$[16].data_type==="TIMESTAMP"?1:$[16].data_type==="BOOLEAN"?2:3}return a=S(e),c=d[a]=u[a](e),{key:h,first:null,c(){l=w("li"),t=w("div"),c.c(),_=O(),s=w("div"),n=w("b"),o=L(r),p=L("  "),b=L(f),this.h()},l($){l=v($,"LI",{class:!0});var D=E(l);t=v(D,"DIV",{class:!0});var V=E(t);c.l(V),_=j(V),s=v(V,"DIV",{class:!0});var F=E(s);n=v(F,"B",{});var J=E(n);o=N(J,r),J.forEach(m),p=N(F,"  "),b=N(F,f),F.forEach(m),V.forEach(m),D.forEach(m),this.h()},h(){I(s,"class","pl-2 lowercase"),I(t,"class","flex px-2 py-1 rounded w-full hover:bg-blue-50"),I(l,"class","font-mono text-sm ml-6 rounded flex flex-row"),this.first=l},m($,D){k($,l,D),g(l,t),d[a].m(t,null),g(t,_),g(t,s),g(s,n),g(n,o),g(s,p),g(s,b),i=!0},p($,D){e=$,c.p(e,D)},i($){i||(y(c),i=!0)},o($){T(c),i=!1},d($){$&&m(l),d[a].d()}}}function ee(h,e){let l,t,a,c,_=e[12]+"",s,n,r,o,p,f;a=new U({props:{src:ie,class:"text-gray-700 w-5 h-5 mr-1"}});function b(){return e[5](e[13])}let i=e[0]===e[13]&&X(e);return{key:h,first:null,c(){l=w("li"),t=w("button"),M(a.$$.fragment),c=O(),s=L(_),n=O(),i&&i.c(),r=H(),this.h()},l(u){l=v(u,"LI",{class:!0});var d=E(l);t=v(d,"BUTTON",{class:!0});var S=E(t);C(a.$$.fragment,S),c=j(S),s=N(S,_),S.forEach(m),d.forEach(m),n=j(u),i&&i.l(u),r=H(),this.h()},h(){I(t,"class","bg-gray-200 px-2 py-1 rounded flex w-full hover:bg-blue-200"),G(t,"bg-blue-200",e[0]===e[13]),I(l,"class","font-mono m-0 text-sm font-bold ml-3"),this.first=l},m(u,d){k(u,l,d),g(l,t),B(a,t,null),g(t,c),g(t,s),k(u,n,d),i&&i.m(u,d),k(u,r,d),o=!0,p||(f=ne(t,"click",b),p=!0)},p(u,d){e=u,(!o||d&5)&&G(t,"bg-blue-200",e[0]===e[13]),e[0]===e[13]?i?(i.p(e,d),d&1&&y(i,1)):(i=X(e),i.c(),y(i,1),i.m(r.parentNode,r)):i&&(R(),T(i,1,1,()=>{i=null}),q())},i(u){o||(y(a.$$.fragment,u),y(i),o=!0)},o(u){T(a.$$.fragment,u),T(i),o=!1},d(u){u&&m(l),P(a),u&&m(n),i&&i.d(u),u&&m(r),p=!1,f()}}}function te(h,e){let l,t,a,c,_=e[8]+"",s,n,r,o,p,f;a=new U({props:{src:ce,class:"text-white w-5 h-5 mr-1"}});function b(){return e[4](e[8])}let i=e[1]===e[8]&&Q(e);return{key:h,first:null,c(){l=w("li"),t=w("button"),M(a.$$.fragment),c=O(),s=L(_),n=O(),i&&i.c(),r=H(),this.h()},l(u){l=v(u,"LI",{class:!0});var d=E(l);t=v(d,"BUTTON",{class:!0});var S=E(t);C(a.$$.fragment,S),c=j(S),s=N(S,_),S.forEach(m),d.forEach(m),n=j(u),i&&i.l(u),r=H(),this.h()},h(){I(t,"class","bg-gray-500 px-2 py-1 rounded font-bold flex w-full hover:bg-blue-500"),G(t,"bg-blue-500",e[1]===e[8]),I(l,"class","font-mono m-0 text-sm text-white"),this.first=l},m(u,d){k(u,l,d),g(l,t),B(a,t,null),g(t,c),g(t,s),k(u,n,d),i&&i.m(u,d),k(u,r,d),o=!0,p||(f=ne(t,"click",b),p=!0)},p(u,d){e=u,(!o||d&6)&&G(t,"bg-blue-500",e[1]===e[8]),e[1]===e[8]?i?(i.p(e,d),d&2&&y(i,1)):(i=Q(e),i.c(),y(i,1),i.m(r.parentNode,r)):i&&(R(),T(i,1,1,()=>{i=null}),q())},i(u){o||(y(a.$$.fragment,u),y(i),o=!0)},o(u){T(a.$$.fragment,u),T(i),o=!1},d(u){u&&m(l),P(a),u&&m(n),i&&i.d(u),u&&m(r),p=!1,f()}}}function $e(h){let e;return{c(){e=L("Loading Schema Information...")},l(l){e=N(l,"Loading Schema Information...")},m(l,t){k(l,e,t)},p:A,i:A,o:A,d(l){l&&m(e)}}}function ye(h){let e,l,t={ctx:h,current:null,token:null,hasCatch:!0,pending:$e,then:pe,catch:me,value:7,error:19,blocks:[,,,]};return oe(h[2](),t),{c(){e=H(),t.block.c()},l(a){e=H(),t.block.l(a)},m(a,c){k(a,e,c),t.block.m(a,t.anchor=c),t.mount=()=>e.parentNode,t.anchor=e,l=!0},p(a,[c]){h=a,se(t,h,c)},i(a){l||(y(t.block),l=!0)},o(a){for(let c=0;c<3;c+=1){const _=t.blocks[c];T(_)}l=!1},d(a){a&&m(e),t.block.d(a),t.token=null,t=null}}}function we(h,e,l){let{data:t}=e,{__db:a}=t;async function c(){const o=await a.query("SELECT * FROM information_schema.tables WHERE table_catalog = 'memory' AND table_name != 'stats'"),p={};return await Promise.all(o.map(async f=>{const b=await a.query(`SELECT * FROM information_schema.columns WHERE table_name = '${f.table_name}' AND table_schema = '${f.table_schema}'`);p[f.table_schema]||(p[f.table_schema]={}),p[f.table_schema][f.table_name]={table:f,columns:b}})),p}let _="",s="";const n=o=>{l(1,s=s===o?"":o),l(0,_="")},r=o=>{l(0,_=_===o?"":o)};return h.$$set=o=>{"data"in o&&l(3,t=o.data)},[_,s,c,t,n,r]}class ve extends le{constructor(e){super(),ae(this,e,we,ye,re,{data:3})}}function Ee(h){let e,l,t,a,c,_,s,n,r,o,p;return o=new ve({props:{data:h[0]}}),{c(){e=w("h1"),l=L("Project Schema"),t=O(),a=w("p"),c=L("This page details the tables and columns that are currently loaded in your project."),_=O(),s=w("h2"),n=L("Sources"),r=O(),M(o.$$.fragment),this.h()},l(f){e=v(f,"H1",{class:!0});var b=E(e);l=N(b,"Project Schema"),b.forEach(m),t=j(f),a=v(f,"P",{class:!0});var i=E(a);c=N(i,"This page details the tables and columns that are currently loaded in your project."),i.forEach(m),_=j(f),s=v(f,"H2",{class:!0});var u=E(s);n=N(u,"Sources"),u.forEach(m),r=j(f),C(o.$$.fragment,f),this.h()},h(){I(e,"class","markdown"),I(a,"class","markdown"),I(s,"class","markdown")},m(f,b){k(f,e,b),g(e,l),k(f,t,b),k(f,a,b),g(a,c),k(f,_,b),k(f,s,b),g(s,n),k(f,r,b),B(o,f,b),p=!0},p(f,[b]){const i={};b&1&&(i.data=f[0]),o.$set(i)},i(f){p||(y(o.$$.fragment,f),p=!0)},o(f){T(o.$$.fragment,f),p=!1},d(f){f&&m(e),f&&m(t),f&&m(a),f&&m(_),f&&m(s),f&&m(r),P(o,f)}}}function Te(h,e,l){let{data:t}=e;return h.$$set=a=>{"data"in a&&l(0,t=a.data)},[t]}class Oe extends le{constructor(e){super(),ae(this,e,Te,Ee,re,{data:0})}}export{Oe as component};
