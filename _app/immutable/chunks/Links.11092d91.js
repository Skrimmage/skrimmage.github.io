import{S as N,i as R,s as S,R as w,x as C,T as A,y as K,c as j,e as k,d as g,l as p,n as v,m as h,j as x,p as E,r as I,v as d,u as q,g as y,a as z,t as D,b as J,G as M,z as P,h as G,o as O,J as V}from"./index.ca99e618.js";import{w as B}from"./paths.7b6e2fe5.js";function F(i,s,e){let a,{dest:_}=s,{text:f}=s;const o=w("LINK_REGISTRATION");return C(i,o,t=>e(3,a=t)),A(()=>{K(o,a.links=[...a.links,{dest:_,text:f}],a)}),i.$$set=t=>{"dest"in t&&e(1,_=t.dest),"text"in t&&e(2,f=t.text)},[o,_,f]}class Y extends N{constructor(s){super(),R(this,s,F,null,S,{dest:1,text:2})}}function T(i,s,e){const a=i.slice();return a[4]=s[e],a[6]=e,a}function H(i){let s;return{c(){s=G("|")},l(e){s=O(e,"|")},m(e,a){I(e,s,a)},d(e){e&&h(s)}}}function L(i){let s,e,a=i[4].text+"",_,f,o,t=i[6]>0&&H();return{c(){t&&t.c(),s=g(),e=k("a"),_=G(a),f=g(),this.h()},l(c){t&&t.l(c),s=x(c),e=p(c,"A",{href:!0});var n=v(e);_=O(n,a),f=x(n),n.forEach(h),this.h()},h(){E(e,"href",o=i[4].dest)},m(c,n){t&&t.m(c,n),I(c,s,n),I(c,e,n),d(e,_),d(e,f)},p(c,n){n&1&&a!==(a=c[4].text+"")&&V(_,a),n&1&&o!==(o=c[4].dest)&&E(e,"href",o)},d(c){t&&t.d(c),c&&h(s),c&&h(e)}}}function Q(i){let s,e,a,_,f,o=i[0].links,t=[];for(let l=0;l<o.length;l+=1)t[l]=L(T(i,o,l));const c=i[3].default,n=j(c,i,i[2],null);return{c(){s=k("section"),e=k("p");for(let l=0;l<t.length;l+=1)t[l].c();a=g(),_=k("div"),n&&n.c(),this.h()},l(l){s=p(l,"SECTION",{class:!0});var u=v(s);e=p(u,"P",{});var r=v(e);for(let b=0;b<t.length;b+=1)t[b].l(r);r.forEach(h),a=x(u),_=p(u,"DIV",{});var m=v(_);n&&n.l(m),m.forEach(h),u.forEach(h),this.h()},h(){E(s,"class","text-center")},m(l,u){I(l,s,u),d(s,e);for(let r=0;r<t.length;r+=1)t[r].m(e,null);d(s,a),d(s,_),n&&n.m(_,null),f=!0},p(l,[u]){if(u&1){o=l[0].links;let r;for(r=0;r<o.length;r+=1){const m=T(l,o,r);t[r]?t[r].p(m,u):(t[r]=L(m),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=o.length}n&&n.p&&(!f||u&4)&&q(n,c,l,l[2],f?z(c,l[2],u,null):y(l[2]),null)},i(l){f||(D(n,l),f=!0)},o(l){J(n,l),f=!1},d(l){l&&h(s),M(t,l),n&&n.d(l)}}}function U(i,s,e){let a,{$$slots:_={},$$scope:f}=s;const o=B({links:[]});return C(i,o,t=>e(0,a=t)),A(()=>{}),P("LINK_REGISTRATION",o),i.$$set=t=>{"$$scope"in t&&e(2,f=t.$$scope)},[a,o,f,_]}class Z extends N{constructor(s){super(),R(this,s,U,Q,S,{})}}export{Z as L,Y as a};
