import{v as c,s as h}from"./index.a77e4c70.js";const e=[];function g(i,a=c){let o;const n=new Set;function r(t){if(h(i,t)&&(i=t,o)){const b=!e.length;for(const s of n)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(i))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(o=a(r)||c),t(i),()=>{n.delete(s),n.size===0&&(o(),o=null)}}return{set:r,update:l,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_z8dh10)==null?void 0:f.base)??"";var u;const z=((u=globalThis.__sveltekit_z8dh10)==null?void 0:u.assets)??d;export{z as a,d as b,g as w};
