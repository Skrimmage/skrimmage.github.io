import{w as c,s as d}from"./index.bcaf0f15.js";const t=[];function g(i,a=c){let o;const n=new Set;function r(e){if(d(i,e)&&(i=e,o)){const b=!t.length;for(const s of n)s[1](),t.push(s,i);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function l(e){r(e(i))}function _(e,b=c){const s=[e,b];return n.add(s),n.size===1&&(o=a(r)||c),e(i),()=>{n.delete(s),n.size===0&&(o(),o=null)}}return{set:r,update:l,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_eze2yd)==null?void 0:f.base)??"";var u;const z=((u=globalThis.__sveltekit_eze2yd)==null?void 0:u.assets)??h;export{z as a,h as b,g as w};
