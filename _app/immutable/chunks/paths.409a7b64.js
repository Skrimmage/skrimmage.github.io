import{w as b,s as h}from"./index.c3cfe2ef.js";const e=[];function d(o,a=b){let n;const i=new Set;function r(t){if(h(o,t)&&(o=t,n)){const c=!e.length;for(const s of i)s[1](),e.push(s,o);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(o))}function _(t,c=b){const s=[t,c];return i.add(s),i.size===1&&(n=a(r)||b),t(o),()=>{i.delete(s),i.size===0&&(n(),n=null)}}return{set:r,update:l,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_hmvc8o)==null?void 0:f.base)??"";var u;const m=((u=globalThis.__sveltekit_hmvc8o)==null?void 0:u.assets)??p;export{m as a,p as b,d as w};
