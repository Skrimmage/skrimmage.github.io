import{w as c,s as p}from"./index.8c4f0ada.js";const e=[];function g(o,a=c){let n;const i=new Set;function r(t){if(p(o,t)&&(o=t,n)){const b=!e.length;for(const s of i)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(o))}function _(t,b=c){const s=[t,b];return i.add(s),i.size===1&&(n=a(r)||c),t(o),()=>{i.delete(s),i.size===0&&(n(),n=null)}}return{set:r,update:l,subscribe:_}}var u;const d=((u=globalThis.__sveltekit_1pbutdo)==null?void 0:u.base)??"";var f;const q=((f=globalThis.__sveltekit_1pbutdo)==null?void 0:f.assets)??d;export{q as a,d as b,g as w};
