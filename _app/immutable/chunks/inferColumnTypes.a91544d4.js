import{w as he}from"./paths.47424a37.js";const Pe=!1,Ge=Pe,Le=he(Ge);Le.subscribe(s=>localStorage.setItem("showQueries",s));const qe=he(!0),Ue=he("");var Ve=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Be(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ve={exports:{}};(function(s){var b={},g=function(_){_.version="0.11.2";function E(r){for(var e="",a=r.length-1;a>=0;)e+=r.charAt(a--);return e}function v(r,e){for(var a="";a.length<e;)a+=r;return a}function R(r,e){var a=""+r;return a.length>=e?a:v("0",e-a.length)+a}function G(r,e){var a=""+r;return a.length>=e?a:v(" ",e-a.length)+a}function S(r,e){var a=""+r;return a.length>=e?a:a+v(" ",e-a.length)}function j(r,e){var a=""+Math.round(r);return a.length>=e?a:v("0",e-a.length)+a}function ae(r,e){var a=""+r;return a.length>=e?a:v("0",e-a.length)+a}var ge=Math.pow(2,32);function X(r,e){if(r>ge||r<-ge)return j(r,e);var a=Math.round(r);return ae(a,e)}function te(r,e){return e=e||0,r.length>=7+e&&(r.charCodeAt(e)|32)===103&&(r.charCodeAt(e+1)|32)===101&&(r.charCodeAt(e+2)|32)===110&&(r.charCodeAt(e+3)|32)===101&&(r.charCodeAt(e+4)|32)===114&&(r.charCodeAt(e+5)|32)===97&&(r.charCodeAt(e+6)|32)===108}var me=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]],ie=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]];function be(r){r[0]="General",r[1]="0",r[2]="0.00",r[3]="#,##0",r[4]="#,##0.00",r[9]="0%",r[10]="0.00%",r[11]="0.00E+00",r[12]="# ?/?",r[13]="# ??/??",r[14]="m/d/yy",r[15]="d-mmm-yy",r[16]="d-mmm",r[17]="mmm-yy",r[18]="h:mm AM/PM",r[19]="h:mm:ss AM/PM",r[20]="h:mm",r[21]="h:mm:ss",r[22]="m/d/yy h:mm",r[37]="#,##0 ;(#,##0)",r[38]="#,##0 ;[Red](#,##0)",r[39]="#,##0.00;(#,##0.00)",r[40]="#,##0.00;[Red](#,##0.00)",r[45]="mm:ss",r[46]="[h]:mm:ss",r[47]="mmss.0",r[48]="##0.0E+0",r[49]="@",r[56]='"上午/下午 "hh"時"mm"分"ss"秒 "'}var z={};be(z);var P=[],C=0;for(C=5;C<=8;++C)P[C]=32+C;for(C=23;C<=26;++C)P[C]=0;for(C=27;C<=31;++C)P[C]=14;for(C=50;C<=58;++C)P[C]=14;for(C=59;C<=62;++C)P[C]=C-58;for(C=67;C<=68;++C)P[C]=C-58;for(C=72;C<=75;++C)P[C]=C-58;for(C=67;C<=68;++C)P[C]=C-57;for(C=76;C<=78;++C)P[C]=C-56;for(C=79;C<=81;++C)P[C]=C-34;var N=[];N[5]=N[63]='"$"#,##0_);\\("$"#,##0\\)',N[6]=N[64]='"$"#,##0_);[Red]\\("$"#,##0\\)',N[7]=N[65]='"$"#,##0.00_);\\("$"#,##0.00\\)',N[8]=N[66]='"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',N[41]='_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',N[42]='_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',N[43]='_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',N[44]='_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)';function ne(r,e,a){for(var d=r<0?-1:1,n=r*d,m=0,u=1,h=0,x=1,f=0,T=0,w=Math.floor(n);f<e&&(w=Math.floor(n),h=w*u+m,T=w*f+x,!(n-w<5e-8));)n=1/(n-w),m=u,u=h,x=f,f=T;if(T>e&&(f>e?(T=x,h=m):(T=f,h=u)),!a)return[0,d*h,T];var L=Math.floor(d*h/T);return[L,d*h-L*T,T]}function Z(r,e,a){if(r>2958465||r<0)return null;var d=r|0,n=Math.floor(86400*(r-d)),m=0,u=[],h={D:d,T:n,u:86400*(r-d)-n,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(h.u)<1e-6&&(h.u=0),e&&e.date1904&&(d+=1462),h.u>.9999&&(h.u=0,++n==86400&&(h.T=n=0,++d,++h.D)),d===60)u=a?[1317,10,29]:[1900,2,29],m=3;else if(d===0)u=a?[1317,8,29]:[1900,1,0],m=6;else{d>60&&--d;var x=new Date(1900,0,1);x.setDate(x.getDate()+d-1),u=[x.getFullYear(),x.getMonth()+1,x.getDate()],m=x.getDay(),d<60&&(m=(m+6)%7),a&&(m=Ne(x,u))}return h.y=u[0],h.m=u[1],h.d=u[2],h.S=n%60,n=Math.floor(n/60),h.M=n%60,n=Math.floor(n/60),h.H=n,h.q=m,h}_.parse_date_code=Z;var pe=new Date(1899,11,31,0,0,0),Oe=pe.getTime(),Fe=new Date(1900,2,1,0,0,0);function Ce(r,e){var a=r.getTime();return e?a-=1262304e5:r>=Fe&&(a+=864e5),(a-(Oe+(r.getTimezoneOffset()-pe.getTimezoneOffset())*6e4))/864e5}function Re(r){return r.toString(10)}_._general_int=Re;var ye=function(){var e=/(?:\.0*|(\.\d*[1-9])0+)$/;function a(f){return f.indexOf(".")==-1?f:f.replace(e,"$1")}var d=/(?:\.0*|(\.\d*[1-9])0+)[Ee]/,n=/(E[+-])(\d)$/;function m(f){return f.indexOf("E")==-1?f:f.replace(d,"$1E").replace(n,"$10$2")}function u(f){var T=f<0?12:11,w=a(f.toFixed(12));return w.length<=T||(w=f.toPrecision(10),w.length<=T)?w:f.toExponential(5)}function h(f){var T=a(f.toFixed(11));return T.length>(f<0?12:11)||T==="0"||T==="-0"?f.toPrecision(6):T}function x(f){var T=Math.floor(Math.log(Math.abs(f))*Math.LOG10E),w;return T>=-4&&T<=-1?w=f.toPrecision(10+T):Math.abs(T)<=9?w=u(f):T===10?w=f.toFixed(10).substr(0,12):w=h(f),a(m(w.toUpperCase()))}return x}();_._general_num=ye;function ue(r,e){switch(typeof r){case"string":return r;case"boolean":return r?"TRUE":"FALSE";case"number":return(r|0)===r?r.toString(10):ye(r);case"undefined":return"";case"object":if(r==null)return"";if(r instanceof Date)return Ee(14,Ce(r,e&&e.date1904),e)}throw new Error("unsupported value in General format: "+r)}_._general=ue;function Ne(r,e){e[0]-=581;var a=r.getDay();return r<60&&(a=(a+6)%7),a}function De(r,e,a,d){var n="",m=0,u=0,h=a.y,x,f=0;switch(r){case 98:h=a.y+543;case 121:switch(e.length){case 1:case 2:x=h%100,f=2;break;default:x=h%1e4,f=4;break}break;case 109:switch(e.length){case 1:case 2:x=a.m,f=e.length;break;case 3:return ie[a.m-1][1];case 5:return ie[a.m-1][0];default:return ie[a.m-1][2]}break;case 100:switch(e.length){case 1:case 2:x=a.d,f=e.length;break;case 3:return me[a.q][0];default:return me[a.q][1]}break;case 104:switch(e.length){case 1:case 2:x=1+(a.H+11)%12,f=e.length;break;default:throw"bad hour format: "+e}break;case 72:switch(e.length){case 1:case 2:x=a.H,f=e.length;break;default:throw"bad hour format: "+e}break;case 77:switch(e.length){case 1:case 2:x=a.M,f=e.length;break;default:throw"bad minute format: "+e}break;case 115:if(e!="s"&&e!="ss"&&e!=".0"&&e!=".00"&&e!=".000")throw"bad second format: "+e;return a.u===0&&(e=="s"||e=="ss")?R(a.S,e.length):(d>=2?u=d===3?1e3:100:u=d===1?10:1,m=Math.round(u*(a.S+a.u)),m>=60*u&&(m=0),e==="s"?m===0?"0":""+m/u:(n=R(m,2+d),e==="ss"?n.substr(0,2):"."+n.substr(2,e.length-1)));case 90:switch(e){case"[h]":case"[hh]":x=a.D*24+a.H;break;case"[m]":case"[mm]":x=(a.D*24+a.H)*60+a.M;break;case"[s]":case"[ss]":x=((a.D*24+a.H)*60+a.M)*60+Math.round(a.S+a.u);break;default:throw"bad abstime format: "+e}f=e.length===3?1:2;break;case 101:x=h,f=1;break}var T=f>0?R(x,f):"";return T}function W(r){var e=3;if(r.length<=e)return r;for(var a=r.length%e,d=r.substr(0,a);a!=r.length;a+=e)d+=(d.length>0?",":"")+r.substr(a,e);return d}var H=function(){var e=/%/g;function a(c,t,o){var p=t.replace(e,""),l=t.length-p.length;return H(c,p,o*Math.pow(10,2*l))+v("%",l)}function d(c,t,o){for(var p=t.length-1;t.charCodeAt(p-1)===44;)--p;return H(c,t.substr(0,p),o/Math.pow(10,3*(t.length-p)))}function n(c,t){var o,p=c.indexOf("E")-c.indexOf(".")-1;if(c.match(/^#+0.0E\+0$/)){if(t==0)return"0.0E+0";if(t<0)return"-"+n(c,-t);var l=c.indexOf(".");l===-1&&(l=c.indexOf("E"));var i=Math.floor(Math.log(t)*Math.LOG10E)%l;if(i<0&&(i+=l),o=(t/Math.pow(10,i)).toPrecision(p+1+(l+i)%l),o.indexOf("e")===-1){var M=Math.floor(Math.log(t)*Math.LOG10E);for(o.indexOf(".")===-1?o=o.charAt(0)+"."+o.substr(1)+"E+"+(M-o.length+i):o+="E+"+(M-i);o.substr(0,2)==="0.";)o=o.charAt(0)+o.substr(2,l)+"."+o.substr(2+l),o=o.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.");o=o.replace(/\+-/,"-")}o=o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(I,O,F,k){return O+F+k.substr(0,(l+i)%l)+"."+k.substr(i)+"E"})}else o=t.toExponential(p);return c.match(/E\+00$/)&&o.match(/e[+-]\d$/)&&(o=o.substr(0,o.length-1)+"0"+o.charAt(o.length-1)),c.match(/E\-/)&&o.match(/e\+/)&&(o=o.replace(/e\+/,"e")),o.replace("e","E")}var m=/# (\?+)( ?)\/( ?)(\d+)/;function u(c,t,o){var p=parseInt(c[4],10),l=Math.round(t*p),i=Math.floor(l/p),M=l-i*p,I=p;return o+(i===0?"":""+i)+" "+(M===0?v(" ",c[1].length+1+c[4].length):G(M,c[1].length)+c[2]+"/"+c[3]+R(I,c[4].length))}function h(c,t,o){return o+(t===0?"":""+t)+v(" ",c[1].length+2+c[4].length)}var x=/^#*0*\.([0#]+)/,f=/\).*[0#]/,T=/\(###\) ###\\?-####/;function w(c){for(var t="",o,p=0;p!=c.length;++p)switch(o=c.charCodeAt(p)){case 35:break;case 63:t+=" ";break;case 48:t+="0";break;default:t+=String.fromCharCode(o)}return t}function L(c,t){var o=Math.pow(10,t);return""+Math.round(c*o)/o}function K(c,t){var o=c-Math.floor(c),p=Math.pow(10,t);return t<(""+Math.round(o*p)).length?0:Math.round(o*p)}function se(c,t){return t<(""+Math.round((c-Math.floor(c))*Math.pow(10,t))).length?1:0}function B(c){return c<2147483647&&c>-2147483648?""+(c>=0?c|0:c-1|0):""+Math.floor(c)}function $(c,t,o){if(c.charCodeAt(0)===40&&!t.match(f)){var p=t.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return o>=0?$("n",p,o):"("+$("n",p,-o)+")"}if(t.charCodeAt(t.length-1)===44)return d(c,t,o);if(t.indexOf("%")!==-1)return a(c,t,o);if(t.indexOf("E")!==-1)return n(t,o);if(t.charCodeAt(0)===36)return"$"+$(c,t.substr(t.charAt(1)==" "?2:1),o);var l,i,M,I,O=Math.abs(o),F=o<0?"-":"";if(t.match(/^00+$/))return F+X(O,t.length);if(t.match(/^[#?]+$/))return l=X(o,0),l==="0"&&(l=""),l.length>t.length?l:w(t.substr(0,t.length-l.length))+l;if(i=t.match(m))return u(i,O,F);if(t.match(/^#+0+$/))return F+X(O,t.length-t.indexOf("0"));if(i=t.match(x))return l=L(o,i[1].length).replace(/^([^\.]+)$/,"$1."+w(i[1])).replace(/\.$/,"."+w(i[1])).replace(/\.(\d*)$/,function(D,ee){return"."+ee+v("0",w(i[1]).length-ee.length)}),t.indexOf("0.")!==-1?l:l.replace(/^0\./,".");if(t=t.replace(/^#+([0.])/,"$1"),i=t.match(/^(0*)\.(#*)$/))return F+L(O,i[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,i[1].length?"0.":".");if(i=t.match(/^#{1,3},##0(\.?)$/))return F+W(X(O,0));if(i=t.match(/^#,##0\.([#0]*0)$/))return o<0?"-"+$(c,t,-o):W(""+(Math.floor(o)+se(o,i[1].length)))+"."+R(K(o,i[1].length),i[1].length);if(i=t.match(/^#,#*,#0/))return $(c,t.replace(/^#,#*,/,""),o);if(i=t.match(/^([0#]+)(\\?-([0#]+))+$/))return l=E($(c,t.replace(/[\\-]/g,""),o)),M=0,E(E(t.replace(/\\/g,"")).replace(/[0#]/g,function(D){return M<l.length?l.charAt(M++):D==="0"?"0":""}));if(t.match(T))return l=$(c,"##########",o),"("+l.substr(0,3)+") "+l.substr(3,3)+"-"+l.substr(6);var k="";if(i=t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return M=Math.min(i[4].length,7),I=ne(O,Math.pow(10,M)-1,!1),l=""+F,k=H("n",i[1],I[1]),k.charAt(k.length-1)==" "&&(k=k.substr(0,k.length-1)+"0"),l+=k+i[2]+"/"+i[3],k=S(I[2],M),k.length<i[4].length&&(k=w(i[4].substr(i[4].length-k.length))+k),l+=k,l;if(i=t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return M=Math.min(Math.max(i[1].length,i[4].length),7),I=ne(O,Math.pow(10,M)-1,!0),F+(I[0]||(I[1]?"":"0"))+" "+(I[1]?G(I[1],M)+i[2]+"/"+i[3]+S(I[2],M):v(" ",2*M+1+i[2].length+i[3].length));if(i=t.match(/^[#0?]+$/))return l=X(o,0),t.length<=l.length?l:w(t.substr(0,t.length-l.length))+l;if(i=t.match(/^([#0?]+)\.([#0]+)$/)){l=""+o.toFixed(Math.min(i[2].length,10)).replace(/([^0])0+$/,"$1"),M=l.indexOf(".");var U=t.indexOf(".")-M,ce=t.length-l.length-U;return w(t.substr(0,U)+l+t.substr(t.length-ce))}if(i=t.match(/^00,000\.([#0]*0)$/))return M=K(o,i[1].length),o<0?"-"+$(c,t,-o):W(B(o)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(D){return"00,"+(D.length<3?R(0,3-D.length):"")+D})+"."+R(M,i[1].length);switch(t){case"###,##0.00":return $(c,"#,##0.00",o);case"###,###":case"##,###":case"#,###":var V=W(X(O,0));return V!=="0"?F+V:"";case"###,###.00":return $(c,"###,##0.00",o).replace(/^0\./,".");case"#,###.00":return $(c,"#,##0.00",o).replace(/^0\./,".")}throw new Error("unsupported format |"+t+"|")}function q(c,t,o){for(var p=t.length-1;t.charCodeAt(p-1)===44;)--p;return H(c,t.substr(0,p),o/Math.pow(10,3*(t.length-p)))}function oe(c,t,o){var p=t.replace(e,""),l=t.length-p.length;return H(c,p,o*Math.pow(10,2*l))+v("%",l)}function J(c,t){var o,p=c.indexOf("E")-c.indexOf(".")-1;if(c.match(/^#+0.0E\+0$/)){if(t==0)return"0.0E+0";if(t<0)return"-"+J(c,-t);var l=c.indexOf(".");l===-1&&(l=c.indexOf("E"));var i=Math.floor(Math.log(t)*Math.LOG10E)%l;if(i<0&&(i+=l),o=(t/Math.pow(10,i)).toPrecision(p+1+(l+i)%l),!o.match(/[Ee]/)){var M=Math.floor(Math.log(t)*Math.LOG10E);o.indexOf(".")===-1?o=o.charAt(0)+"."+o.substr(1)+"E+"+(M-o.length+i):o+="E+"+(M-i),o=o.replace(/\+-/,"-")}o=o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(I,O,F,k){return O+F+k.substr(0,(l+i)%l)+"."+k.substr(i)+"E"})}else o=t.toExponential(p);return c.match(/E\+00$/)&&o.match(/e[+-]\d$/)&&(o=o.substr(0,o.length-1)+"0"+o.charAt(o.length-1)),c.match(/E\-/)&&o.match(/e\+/)&&(o=o.replace(/e\+/,"e")),o.replace("e","E")}function y(c,t,o){if(c.charCodeAt(0)===40&&!t.match(f)){var p=t.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return o>=0?y("n",p,o):"("+y("n",p,-o)+")"}if(t.charCodeAt(t.length-1)===44)return q(c,t,o);if(t.indexOf("%")!==-1)return oe(c,t,o);if(t.indexOf("E")!==-1)return J(t,o);if(t.charCodeAt(0)===36)return"$"+y(c,t.substr(t.charAt(1)==" "?2:1),o);var l,i,M,I,O=Math.abs(o),F=o<0?"-":"";if(t.match(/^00+$/))return F+R(O,t.length);if(t.match(/^[#?]+$/))return l=""+o,o===0&&(l=""),l.length>t.length?l:w(t.substr(0,t.length-l.length))+l;if(i=t.match(m))return h(i,O,F);if(t.match(/^#+0+$/))return F+R(O,t.length-t.indexOf("0"));if(i=t.match(x))return l=(""+o).replace(/^([^\.]+)$/,"$1."+w(i[1])).replace(/\.$/,"."+w(i[1])),l=l.replace(/\.(\d*)$/,function(D,ee){return"."+ee+v("0",w(i[1]).length-ee.length)}),t.indexOf("0.")!==-1?l:l.replace(/^0\./,".");if(t=t.replace(/^#+([0.])/,"$1"),i=t.match(/^(0*)\.(#*)$/))return F+(""+O).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,i[1].length?"0.":".");if(i=t.match(/^#{1,3},##0(\.?)$/))return F+W(""+O);if(i=t.match(/^#,##0\.([#0]*0)$/))return o<0?"-"+y(c,t,-o):W(""+o)+"."+v("0",i[1].length);if(i=t.match(/^#,#*,#0/))return y(c,t.replace(/^#,#*,/,""),o);if(i=t.match(/^([0#]+)(\\?-([0#]+))+$/))return l=E(y(c,t.replace(/[\\-]/g,""),o)),M=0,E(E(t.replace(/\\/g,"")).replace(/[0#]/g,function(D){return M<l.length?l.charAt(M++):D==="0"?"0":""}));if(t.match(T))return l=y(c,"##########",o),"("+l.substr(0,3)+") "+l.substr(3,3)+"-"+l.substr(6);var k="";if(i=t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return M=Math.min(i[4].length,7),I=ne(O,Math.pow(10,M)-1,!1),l=""+F,k=H("n",i[1],I[1]),k.charAt(k.length-1)==" "&&(k=k.substr(0,k.length-1)+"0"),l+=k+i[2]+"/"+i[3],k=S(I[2],M),k.length<i[4].length&&(k=w(i[4].substr(i[4].length-k.length))+k),l+=k,l;if(i=t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return M=Math.min(Math.max(i[1].length,i[4].length),7),I=ne(O,Math.pow(10,M)-1,!0),F+(I[0]||(I[1]?"":"0"))+" "+(I[1]?G(I[1],M)+i[2]+"/"+i[3]+S(I[2],M):v(" ",2*M+1+i[2].length+i[3].length));if(i=t.match(/^[#0?]+$/))return l=""+o,t.length<=l.length?l:w(t.substr(0,t.length-l.length))+l;if(i=t.match(/^([#0]+)\.([#0]+)$/)){l=""+o.toFixed(Math.min(i[2].length,10)).replace(/([^0])0+$/,"$1"),M=l.indexOf(".");var U=t.indexOf(".")-M,ce=t.length-l.length-U;return w(t.substr(0,U)+l+t.substr(t.length-ce))}if(i=t.match(/^00,000\.([#0]*0)$/))return o<0?"-"+y(c,t,-o):W(""+o).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(D){return"00,"+(D.length<3?R(0,3-D.length):"")+D})+"."+R(0,i[1].length);switch(t){case"###,###":case"##,###":case"#,###":var V=W(""+O);return V!=="0"?F+V:"";default:if(t.match(/\.[0#?]*$/))return y(c,t.slice(0,t.lastIndexOf(".")),o)+w(t.slice(t.lastIndexOf(".")))}throw new Error("unsupported format |"+t+"|")}return function(t,o,p){return(p|0)===p?y(t,o,p):$(t,o,p)}}();function _e(r){for(var e=[],a=!1,d=0,n=0;d<r.length;++d)switch(r.charCodeAt(d)){case 34:a=!a;break;case 95:case 42:case 92:++d;break;case 59:e[e.length]=r.substr(n,d-n),n=d+1}if(e[e.length]=r.substr(n),a===!0)throw new Error("Format |"+r+"| unterminated string ");return e}_._split=_e;var xe=/\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;function Te(r){for(var e=0,a="",d="";e<r.length;)switch(a=r.charAt(e)){case"G":te(r,e)&&(e+=6),e++;break;case'"':for(;r.charCodeAt(++e)!==34&&e<r.length;);++e;break;case"\\":e+=2;break;case"_":e+=2;break;case"@":++e;break;case"B":case"b":if(r.charAt(e+1)==="1"||r.charAt(e+1)==="2")return!0;case"M":case"D":case"Y":case"H":case"S":case"E":case"m":case"d":case"y":case"h":case"s":case"e":case"g":return!0;case"A":case"a":case"上":if(r.substr(e,3).toUpperCase()==="A/P"||r.substr(e,5).toUpperCase()==="AM/PM"||r.substr(e,5).toUpperCase()==="上午/下午")return!0;++e;break;case"[":for(d=a;r.charAt(e++)!=="]"&&e<r.length;)d+=r.charAt(e);if(d.match(xe))return!0;break;case".":case"0":case"#":for(;e<r.length&&("0#?.,E+-%".indexOf(a=r.charAt(++e))>-1||a=="\\"&&r.charAt(e+1)=="-"&&"0#".indexOf(r.charAt(e+2))>-1););break;case"?":for(;r.charAt(++e)===a;);break;case"*":++e,(r.charAt(e)==" "||r.charAt(e)=="*")&&++e;break;case"(":case")":++e;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;e<r.length&&"0123456789".indexOf(r.charAt(++e))>-1;);break;case" ":++e;break;default:++e;break}return!1}_.is_date=Te;function Me(r,e,a,d){for(var n=[],m="",u=0,h="",x="t",f,T,w,L="H";u<r.length;)switch(h=r.charAt(u)){case"G":if(!te(r,u))throw new Error("unrecognized character "+h+" in "+r);n[n.length]={t:"G",v:"General"},u+=7;break;case'"':for(m="";(w=r.charCodeAt(++u))!==34&&u<r.length;)m+=String.fromCharCode(w);n[n.length]={t:"t",v:m},++u;break;case"\\":var K=r.charAt(++u),se=K==="("||K===")"?K:"t";n[n.length]={t:se,v:K},++u;break;case"_":n[n.length]={t:"t",v:" "},u+=2;break;case"@":n[n.length]={t:"T",v:e},++u;break;case"B":case"b":if(r.charAt(u+1)==="1"||r.charAt(u+1)==="2"){if(f==null&&(f=Z(e,a,r.charAt(u+1)==="2"),f==null))return"";n[n.length]={t:"X",v:r.substr(u,2)},x=h,u+=2;break}case"M":case"D":case"Y":case"H":case"S":case"E":h=h.toLowerCase();case"m":case"d":case"y":case"h":case"s":case"e":case"g":if(e<0||f==null&&(f=Z(e,a),f==null))return"";for(m=h;++u<r.length&&r.charAt(u).toLowerCase()===h;)m+=h;h==="m"&&x.toLowerCase()==="h"&&(h="M"),h==="h"&&(h=L),n[n.length]={t:h,v:m},x=h;break;case"A":case"a":case"上":var B={t:h,v:h};if(f==null&&(f=Z(e,a)),r.substr(u,3).toUpperCase()==="A/P"?(f!=null&&(B.v=f.H>=12?"P":"A"),B.t="T",L="h",u+=3):r.substr(u,5).toUpperCase()==="AM/PM"?(f!=null&&(B.v=f.H>=12?"PM":"AM"),B.t="T",u+=5,L="h"):r.substr(u,5).toUpperCase()==="上午/下午"?(f!=null&&(B.v=f.H>=12?"下午":"上午"),B.t="T",u+=5,L="h"):(B.t="t",++u),f==null&&B.t==="T")return"";n[n.length]=B,x=h;break;case"[":for(m=h;r.charAt(u++)!=="]"&&u<r.length;)m+=r.charAt(u);if(m.slice(-1)!=="]")throw'unterminated "[" block: |'+m+"|";if(m.match(xe)){if(f==null&&(f=Z(e,a),f==null))return"";n[n.length]={t:"Z",v:m.toLowerCase()},x=m.charAt(1)}else m.indexOf("$")>-1&&(m=(m.match(/\$([^-\[\]]*)/)||[])[1]||"$",Te(r)||(n[n.length]={t:"t",v:m}));break;case".":if(f!=null){for(m=h;++u<r.length&&(h=r.charAt(u))==="0";)m+=h;n[n.length]={t:"s",v:m};break}case"0":case"#":for(m=h;++u<r.length&&"0#?.,E+-%".indexOf(h=r.charAt(u))>-1;)m+=h;n[n.length]={t:"n",v:m};break;case"?":for(m=h;r.charAt(++u)===h;)m+=h;n[n.length]={t:h,v:m},x=h;break;case"*":++u,(r.charAt(u)==" "||r.charAt(u)=="*")&&++u;break;case"(":case")":n[n.length]={t:d===1?"t":h,v:h},++u;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(m=h;u<r.length&&"0123456789".indexOf(r.charAt(++u))>-1;)m+=r.charAt(u);n[n.length]={t:"D",v:m};break;case" ":n[n.length]={t:h,v:h},++u;break;case"$":n[n.length]={t:"t",v:"$"},++u;break;default:if(",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(h)===-1)throw new Error("unrecognized character "+h+" in "+r);n[n.length]={t:"t",v:h},++u;break}var $=0,q=0,oe;for(u=n.length-1,x="t";u>=0;--u)switch(n[u].t){case"h":case"H":n[u].t=L,x="h",$<1&&($=1);break;case"s":(oe=n[u].v.match(/\.0+$/))&&(q=Math.max(q,oe[0].length-1)),$<3&&($=3);case"d":case"y":case"M":case"e":x=n[u].t;break;case"m":x==="s"&&(n[u].t="M",$<2&&($=2));break;case"X":break;case"Z":$<1&&n[u].v.match(/[Hh]/)&&($=1),$<2&&n[u].v.match(/[Mm]/)&&($=2),$<3&&n[u].v.match(/[Ss]/)&&($=3)}switch($){case 0:break;case 1:f.u>=.5&&(f.u=0,++f.S),f.S>=60&&(f.S=0,++f.M),f.M>=60&&(f.M=0,++f.H);break;case 2:f.u>=.5&&(f.u=0,++f.S),f.S>=60&&(f.S=0,++f.M);break}var J="",y;for(u=0;u<n.length;++u)switch(n[u].t){case"t":case"T":case" ":case"D":break;case"X":n[u].v="",n[u].t=";";break;case"d":case"m":case"y":case"h":case"H":case"M":case"s":case"e":case"b":case"Z":n[u].v=De(n[u].t.charCodeAt(0),n[u].v,f,q),n[u].t="t";break;case"n":case"?":for(y=u+1;n[y]!=null&&((h=n[y].t)==="?"||h==="D"||(h===" "||h==="t")&&n[y+1]!=null&&(n[y+1].t==="?"||n[y+1].t==="t"&&n[y+1].v==="/")||n[u].t==="("&&(h===" "||h==="n"||h===")")||h==="t"&&(n[y].v==="/"||n[y].v===" "&&n[y+1]!=null&&n[y+1].t=="?"));)n[u].v+=n[y].v,n[y]={v:"",t:";"},++y;J+=n[u].v,u=y-1;break;case"G":n[u].t="t",n[u].v=ue(e,a);break}var c="",t,o;if(J.length>0){J.charCodeAt(0)==40?(t=e<0&&J.charCodeAt(0)===45?-e:e,o=H("n",J,t)):(t=e<0&&d>1?-e:e,o=H("n",J,t),t<0&&n[0]&&n[0].t=="t"&&(o=o.substr(1),n[0].v="-"+n[0].v)),y=o.length-1;var p=n.length;for(u=0;u<n.length;++u)if(n[u]!=null&&n[u].t!="t"&&n[u].v.indexOf(".")>-1){p=u;break}var l=n.length;if(p===n.length&&o.indexOf("E")===-1){for(u=n.length-1;u>=0;--u)n[u]==null||"n?".indexOf(n[u].t)===-1||(y>=n[u].v.length-1?(y-=n[u].v.length,n[u].v=o.substr(y+1,n[u].v.length)):y<0?n[u].v="":(n[u].v=o.substr(0,y+1),y=-1),n[u].t="t",l=u);y>=0&&l<n.length&&(n[l].v=o.substr(0,y+1)+n[l].v)}else if(p!==n.length&&o.indexOf("E")===-1){for(y=o.indexOf(".")-1,u=p;u>=0;--u)if(!(n[u]==null||"n?".indexOf(n[u].t)===-1)){for(T=n[u].v.indexOf(".")>-1&&u===p?n[u].v.indexOf(".")-1:n[u].v.length-1,c=n[u].v.substr(T+1);T>=0;--T)y>=0&&(n[u].v.charAt(T)==="0"||n[u].v.charAt(T)==="#")&&(c=o.charAt(y--)+c);n[u].v=c,n[u].t="t",l=u}for(y>=0&&l<n.length&&(n[l].v=o.substr(0,y+1)+n[l].v),y=o.indexOf(".")+1,u=p;u<n.length;++u)if(!(n[u]==null||"n?(".indexOf(n[u].t)===-1&&u!==p)){for(T=n[u].v.indexOf(".")>-1&&u===p?n[u].v.indexOf(".")+1:0,c=n[u].v.substr(0,T);T<n[u].v.length;++T)y<o.length&&(c+=o.charAt(y++));n[u].v=c,n[u].t="t",l=u}}}for(u=0;u<n.length;++u)n[u]!=null&&"n?".indexOf(n[u].t)>-1&&(t=d>1&&e<0&&u>0&&n[u-1].v==="-"?-e:e,n[u].v=H(n[u].t,n[u].v,t),n[u].t="t");var i="";for(u=0;u!==n.length;++u)n[u]!=null&&(i+=n[u].v);return i}_._eval=Me;var we=/\[[=<>]/,Ae=/\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;function ke(r,e){if(e==null)return!1;var a=parseFloat(e[2]);switch(e[1]){case"=":if(r==a)return!0;break;case">":if(r>a)return!0;break;case"<":if(r<a)return!0;break;case"<>":if(r!=a)return!0;break;case">=":if(r>=a)return!0;break;case"<=":if(r<=a)return!0;break}return!1}function Se(r,e){var a=_e(r),d=a.length,n=a[d-1].indexOf("@");if(d<4&&n>-1&&--d,a.length>4)throw new Error("cannot find right format for |"+a.join("|")+"|");if(typeof e!="number")return[4,a.length===4||n>-1?a[a.length-1]:"@"];switch(a.length){case 1:a=n>-1?["General","General","General",a[0]]:[a[0],a[0],a[0],"@"];break;case 2:a=n>-1?[a[0],a[0],a[0],a[1]]:[a[0],a[1],a[0],"@"];break;case 3:a=n>-1?[a[0],a[1],a[0],a[2]]:[a[0],a[1],a[2],"@"];break}var m=e>0?a[0]:e<0?a[1]:a[2];if(a[0].indexOf("[")===-1&&a[1].indexOf("[")===-1)return[d,m];if(a[0].match(we)!=null||a[1].match(we)!=null){var u=a[0].match(Ae),h=a[1].match(Ae);return ke(e,u)?[d,a[0]]:ke(e,h)?[d,a[1]]:[d,a[u!=null&&h!=null?2:1]]}return[d,m]}function Ee(r,e,a){a==null&&(a={});var d="";switch(typeof r){case"string":r=="m/d/yy"&&a.dateNF?d=a.dateNF:d=r;break;case"number":r==14&&a.dateNF?d=a.dateNF:d=(a.table!=null?a.table:z)[r],d==null&&(d=a.table&&a.table[P[r]]||z[P[r]]),d==null&&(d=N[r]||"General");break}if(te(d,0))return ue(e,a);e instanceof Date&&(e=Ce(e,a.date1904));var n=Se(d,e);if(te(n[1]))return ue(e,a);if(e===!0)e="TRUE";else if(e===!1)e="FALSE";else if(e===""||e==null)return"";return Me(n[1],e,a,n[0])}function $e(r,e){if(typeof e!="number"){e=+e||-1;for(var a=0;a<392;++a){if(z[a]==null){e<0&&(e=a);continue}if(z[a]==r){e=a;break}}e<0&&(e=391)}return z[e]=r,e}_.load=$e,_._table=z,_.get_table=function(){return z},_.load_table=function(e){for(var a=0;a!=392;++a)e[a]!==void 0&&$e(e[a],a)},_.init_table=be,_.format=Ee};g(b),typeof DO_NOT_EXPORT_SSF>"u"&&(s.exports=b)})(ve);var He=ve.exports;const re=Be(He),Q="auto",Je=3,Ye=[{name:"year",description:'When lowerCase(columnName)="year" with the column having numeric values will result in no formatting',matchingFunction:(s,b,g)=>s&&b?s.toLowerCase()==="year"&&((b==null?void 0:b.evidenceType)==="number"||(g==null?void 0:g.unitType)==="number"):!1,format:{formatCode:Q,valueType:"number",exampleInput:2013,_autoFormat:{autoFormatCode:"@",truncateUnits:!1}}},{name:"id",description:'When lowerCase(columnName)="id" with the column having numeric values, then values will have no formatting',matchingFunction:(s,b,g)=>s&&b?s.toLowerCase()==="id"&&((b==null?void 0:b.evidenceType)==="number"||(g==null?void 0:g.unitType)==="number"):!1,format:{formatCode:Q,valueType:"number",exampleInput:93120121,_autoFormat:{autoFormatFunction:s=>s!=null&&!isNaN(s)?s.toLocaleString("fullwide",{useGrouping:!1}):s}}},{name:"defaultDate",description:"Formatting for Default Date",matchingFunction:(s,b,g)=>b?(b==null?void 0:b.evidenceType)==="date"||(g==null?void 0:g.unitType)==="date":!1,format:{formatCode:Q,valueType:"date",exampleInput:"Sat Jan 01 2022 03:15:00 GMT-0500",_autoFormat:{autoFormatCode:"YYYY-MM-DD",truncateUnits:!1}}}],fe=(s,b)=>{switch(b){case"T":return s/1e12;case"B":return s/1e9;case"M":return s/1e6;case"k":return s/1e3;default:return s}},er=(s,b)=>{var _,E,v;let g=((_=b||s.formatCode)==null?void 0:_.toLowerCase())===Q,A=((E=s._autoFormat)==null?void 0:E.autoFormatFunction)||((v=s._autoFormat)==null?void 0:v.autoFormatCode);return!!(g&&A!==void 0)},de=(s,b=7)=>{let g,A="",_=s==null?void 0:s.median,E;if(_!==void 0){let v;A=Ie(_),A?(v=fe(_,A),E=!0):(v=_,E=!1),s.maxDecimals===0&&!E?g="#,##0":g=je(v,b)}else g="#,##0",E=!1;return{formatCode:Q,valueType:"number",_autoFormat:{autoFormatCode:g,truncateUnits:E,columnUnits:A}}},rr=(s,b,g)=>{let A=Ye.find(_=>_.matchingFunction(s,b,g));if(A)return A.format;if((g==null?void 0:g.unitType)==="number"&&(g==null?void 0:g.median)!==void 0)return de(g)},ar=(s,b,g=void 0)=>{var A,_,E;if((A=b._autoFormat)!=null&&A.autoFormatFunction)return b._autoFormat.autoFormatFunction(s,b,g);if(b._autoFormat.autoFormatCode){let v=(_=b==null?void 0:b._autoFormat)==null?void 0:_.autoFormatCode;if(b.valueType==="number"){let G=(E=b==null?void 0:b._autoFormat)==null?void 0:E.truncateUnits,S=s,j="";return G&&(g==null?void 0:g.median)!==void 0&&(j=Ie(g.median),S=fe(s,j)),re.format(v,S)+j}else return re.format(v,s)}else console.warn("autoFormat called without a formatCode or function");return s},tr=s=>typeof s=="number"?s.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}):s!=null?s==null?void 0:s.toString():"-";function je(s,b=7,g=Je){let A="#,##0",_=ze(s),E=0;return _-g<0&&(E=Math.min(Math.max(Math.abs(_-g+1),0),b)),E>0&&(A+=".",A+="0".repeat(E)),A}function Ie(s){let b=Math.abs(s);return b>=5e12?"T":b>=5e9?"B":b>=5e6?"M":b>=5e3?"k":""}function ze(s){return s===0?0:Math.floor(Math.log10(s))}const We=[{primaryCode:"usd",currencySymbol:"$",displayName:"USD - United States Dollar"},{primaryCode:"aud",currencySymbol:"A$",displayName:"AUD - Australian Dollar",escapeCurrencySymbol:!0},{primaryCode:"brl",currencySymbol:"R$",displayName:"BRL - Brazilian Real",escapeCurrencySymbol:!0},{primaryCode:"cad",currencySymbol:"C$",displayName:"CAD - Canadian Dollar",escapeCurrencySymbol:!0},{primaryCode:"cny",currencySymbol:"¥",displayName:"CNY - Renminbi",escapeCurrencySymbol:!0},{primaryCode:"eur",currencySymbol:"€",displayName:"EUR - Euro"},{primaryCode:"gbp",currencySymbol:"£",displayName:"GBP - Pound Sterling",escapeCurrencySymbol:!0},{primaryCode:"jpy",currencySymbol:"¥",displayName:"JPY - Japanese Yen",escapeCurrencySymbol:!0},{primaryCode:"inr",currencySymbol:"₹",displayName:"INR - Indian Rupee",escapeCurrencySymbol:!0},{primaryCode:"krw",currencySymbol:"₩",displayName:"KRW - South Korean won",escapeCurrencySymbol:!0},{primaryCode:"ngn",currencySymbol:"₦",displayName:"NGN -  Nigerian Naira",escapeCurrencySymbol:!0},{primaryCode:"rub",currencySymbol:"rub",displayName:"RUB - Russian Ruble",escapeCurrencySymbol:!0},{primaryCode:"sek",currencySymbol:"kr",displayName:"SEK - Swedish Krona",escapeCurrencySymbol:!0}],Qe=[{derivedSuffix:"",valueFormatCode:"#,##0",exampleInput:412.17,auto:!0},{derivedSuffix:"0",valueFormatCode:"#,##0",exampleInput:7043.123},{derivedSuffix:"1",valueFormatCode:"#,##0.0",exampleInput:7043.123},{derivedSuffix:"2",valueFormatCode:"#,##0.00",exampleInput:7043.123},{derivedSuffix:"0k",valueFormatCode:'#,##0,"k"',exampleInput:64301.12},{derivedSuffix:"1k",valueFormatCode:'#,##0.0,"k"',exampleInput:64301.12},{derivedSuffix:"2k",valueFormatCode:'#,##0.00,"k"',exampleInput:64301.12},{derivedSuffix:"0m",valueFormatCode:'#,##0,,"M"',exampleInput:456430112e-2},{derivedSuffix:"1m",valueFormatCode:'#,##0.0,,"M"',exampleInput:456430112e-2},{derivedSuffix:"2m",valueFormatCode:'#,##0.00,,"M"',exampleInput:456430112e-2},{derivedSuffix:"0b",valueFormatCode:'#,##0,,,"B"',exampleInput:978456430112e-2},{derivedSuffix:"1b",valueFormatCode:'#,##0.0,,,"B"',exampleInput:978456430112e-2},{derivedSuffix:"2b",valueFormatCode:'#,##0.00,,,"B"',exampleInput:978456430112e-2}],Ke=We.map(s=>{let b=[];return Qe.forEach(g=>{let A={formatTag:s.primaryCode+g.derivedSuffix,parentFormat:s.primaryCode,formatCategory:"currency",valueType:"number",exampleInput:g.exampleInput,titleTagReplacement:` (${s.currencySymbol})`},_=s.escapeCurrencySymbol?`"${s.currencySymbol}"`:s.currencySymbol;g.auto||Q===g.formatCode?(A.formatCode=Q,A._autoFormat={autoFormatFunction:(E,v,R)=>{let G=de(R,2),S=`${_}${G._autoFormat.autoFormatCode}`,j="",ae=E;return G._autoFormat.truncateUnits&&G._autoFormat.columnUnits?(j=G._autoFormat.columnUnits,ae=fe(E,G._autoFormat.columnUnits)):S.endsWith(".0")&&(S=S+"0"),re.format(S,ae)+j}}):A.formatCode=`${_}${g.valueFormatCode}`,g.axisValueFormatCode&&(A.axisFormatCode=g.axisValueFormatCode),b.push(A)}),b}).flat(),nr=[...Ke,{formatTag:"ddd",formatCode:"ddd",formatCategory:"date",valueType:"date",exampleInput:"2022-01-09 12:45"},{formatTag:"dddd",formatCode:"dddd",formatCategory:"date",valueType:"date",exampleInput:"2022-01-09 12:45"},{formatTag:"mmm",formatCode:"mmm",formatCategory:"date",valueType:"date",exampleInput:"2022-01-09 12:45"},{formatTag:"mmmm",formatCode:"mmmm",formatCategory:"date",valueType:"date",exampleInput:"2022-01-09 12:45"},{formatTag:"yyyy",formatCode:"yyyy",formatCategory:"date",valueType:"date",exampleInput:"2022-01-09 12:45"},{formatTag:"shortdate",formatCode:"mmm d/yy",formatCategory:"date",valueType:"date",exampleInput:"2022-01-09 12:45"},{formatTag:"longdate",formatCode:"mmmm d, yyyy",formatCategory:"date",valueType:"date",exampleInput:"2022-01-09 12:45"},{formatTag:"fulldate",formatCode:"dddd mmmm d, yyyy",formatCategory:"date",valueType:"date",exampleInput:"2022-01-09 12:45"},{formatTag:"mdy",formatCode:"m/d/y",formatCategory:"date",valueType:"date",exampleInput:"2022-01-09 12:45"},{formatTag:"dmy",formatCode:"d/m/y",formatCategory:"date",valueType:"date",exampleInput:"2022-01-09 12:45"},{formatTag:"hms",formatCode:"H:MM:SS AM/PM",formatCategory:"date",valueType:"date",exampleInput:"2022-01-09T11:45:03"},{formatTag:"num0",formatCode:"#,##0",formatCategory:"number",valueType:"number",exampleInput:11.23168},{formatTag:"num1",formatCode:"#,##0.0",formatCategory:"number",valueType:"number",exampleInput:11.23168},{formatTag:"num2",formatCode:"#,##0.00",formatCategory:"number",valueType:"number",exampleInput:11.23168},{formatTag:"num3",formatCode:"#,##0.000",formatCategory:"number",valueType:"number",exampleInput:11.23168},{formatTag:"num4",formatCode:"#,##0.0000",formatCategory:"number",valueType:"number",exampleInput:11.23168},{formatTag:"num0k",formatCode:'#,##0,"k"',formatCategory:"number",valueType:"number",exampleInput:64201},{formatTag:"num1k",formatCode:'#,##0.0,"k"',formatCategory:"number",valueType:"number",exampleInput:64201},{formatTag:"num2k",formatCode:'#,##0.00,"k"',formatCategory:"number",valueType:"number",exampleInput:64201},{formatTag:"num0m",formatCode:'#,##0,,"M"',formatCategory:"number",valueType:"number",exampleInput:42539483},{formatTag:"num1m",formatCode:'#,##0.0,,"M"',formatCategory:"number",valueType:"number",exampleInput:42539483},{formatTag:"num2m",formatCode:'#,##0.00,,"M"',formatCategory:"number",valueType:"number",exampleInput:42539483},{formatTag:"num0b",formatCode:'#,##0,,,"B"',formatCategory:"number",valueType:"number",exampleInput:1384937584},{formatTag:"num1b",formatCode:'#,##0.0,,,"B"',formatCategory:"number",valueType:"number",exampleInput:1384937584},{formatTag:"num2b",formatCode:'#,##0.00,,,"B"',formatCategory:"number",valueType:"number",exampleInput:1384937584},{formatTag:"id",formatCode:"0",formatCategory:"number",valueType:"number",exampleInput:"921594675",titleTagReplacement:" id"},{formatTag:"fract",formatCode:"# ?/?",formatCategory:"number",valueType:"number",exampleInput:"0.25"},{formatTag:"mult",formatCode:'#,##0.0"x"',formatCategory:"number",valueType:"number",exampleInput:"5.32"},{formatTag:"mult0",formatCode:'#,##0"x"',formatCategory:"number",valueType:"number",exampleInput:"5.32"},{formatTag:"mult1",formatCode:'#,##0.0"x"',formatCategory:"number",valueType:"number",exampleInput:"5.32"},{formatTag:"mult2",formatCode:'#,##0.00"x"',formatCategory:"number",valueType:"number",exampleInput:"5.32"},{formatTag:"sci",formatCode:"0.00E+0",formatCategory:"number",valueType:"number",exampleInput:"16546.1561"},{formatTag:"pct",formatCode:Q,formatCategory:"percent",valueType:"number",exampleInput:.731,titleTagReplacement:"",_autoFormat:{autoFormatFunction:(s,b,g)=>{if((g==null?void 0:g.unitType)==="number"){let A={min:g.min*100,max:g.max*100,median:g.median*100,maxDecimals:Math.max(g.maxDecimals-2,0),unitType:g.unitType},_=de(A);return re.format(_._autoFormat.autoFormatCode,s*100)+"%"}else return re.format("#,##0%",s)}}},{formatTag:"pct0",formatCode:"#,##0%",formatCategory:"percent",valueType:"number",exampleInput:.731,titleTagReplacement:""},{formatTag:"pct1",formatCode:"#,##0.0%",formatCategory:"percent",valueType:"number",exampleInput:.731,titleTagReplacement:""},{formatTag:"pct2",formatCode:"#,##0.00%",formatCategory:"percent",valueType:"number",exampleInput:.731,titleTagReplacement:""},{formatTag:"pct3",formatCode:"#,##0.000%",formatCategory:"percent",valueType:"number",exampleInput:.731,titleTagReplacement:""}];var Y;(function(s){s.BOOLEAN="boolean",s.NUMBER="number",s.STRING="string",s.DATE="date"})(Y||(Y={}));var le;(function(s){s.INFERRED="inferred",s.PRECISE="precise"})(le||(le={}));const Xe=function(s){if(typeof s=="number")return Y.NUMBER;if(typeof s=="boolean")return Y.BOOLEAN;if(typeof s=="string"){let b=Y.STRING;if(s&&s.includes("-")){let g=s;s.includes(":")||(g=s+"T00:00");try{let A=new Date(g);if(A.toLocaleString().length>0){let _=Number.parseInt(A.toLocaleString().substring(0,1));_!=null&&!isNaN(_)&&(b=Y.DATE)}}catch{}}return b}else return s instanceof Date?Y.DATE:Y.STRING};function ur(s){if(s&&s.length>0){let b=Object.keys(s[0]);return b==null?void 0:b.map(A=>{let _=s.find(E=>E[A]!=null);if(_){let E=Xe(_[A]);return{name:A,evidenceType:E,typeFidelity:le.INFERRED}}else return{name:A,evidenceType:Y.STRING,typeFidelity:le.INFERRED}})}}export{nr as B,We as S,ar as a,tr as b,ur as c,Le as d,Ge as e,rr as f,Ve as g,Be as h,er as i,qe as p,Ue as r,re as s};