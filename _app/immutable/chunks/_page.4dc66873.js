import{S as de,i as me,s as ue,a as T,e as v,b as ee,t as q,G as V,c as C,h as fe,d as g,f as c,g as P,j as x,H as z,k as u,m as h,n as A,I as K,z as M,B as I,C as he,J as X,p as ae,q as Se,r as ne,u as Ee,U as ye,o as D,A as Ae,V as ve}from"./index.fa6138d3.js";import{p as ge}from"./stores.b09ec6e9.js";import{s as we,Q as ce,p as Te,r as _e,d as Ce}from"./index.2af89390.js";import{w as be}from"./paths.b28fc9aa.js";import{I as Ne,C as Le}from"./globalContexts.8bcf5d41.js";import{p as le}from"./profile.e7706513.js";import"./VennDiagram.svelte_svelte_type_style_lang.8be79a0f.js";import{D as Oe}from"./DataTable.f71ef141.js";import{Q as Fe}from"./QueryViewer.0fd8f32b.js";import{C as ie}from"./Column.f356334d.js";function Re(_){let i,r=l.title+"",t;return{c(){i=v("h1"),t=q(r),this.h()},l(s){i=g(s,"H1",{class:!0});var n=P(i);t=x(n,r),n.forEach(c),this.h()},h(){u(i,"class","title")},m(s,n){h(s,i,n),A(i,t)},p:D,d(s){s&&c(i)}}}function ke(_){return{c(){this.h()},l(i){this.h()},h(){document.title="Evidence"},m:D,p:D,d:D}}function He(_){let i,r,t,s,n;return document.title=i=l.title,{c(){r=T(),t=v("meta"),s=T(),n=v("meta"),this.h()},l(o){r=C(o),t=g(o,"META",{property:!0,content:!0}),s=C(o),n=g(o,"META",{name:!0,content:!0}),this.h()},h(){var o,e;u(t,"property","og:title"),u(t,"content",((o=l.og)==null?void 0:o.title)??l.title),u(n,"name","twitter:title"),u(n,"content",((e=l.og)==null?void 0:e.title)??l.title)},m(o,e){h(o,r,e),h(o,t,e),h(o,s,e),h(o,n,e)},p(o,e){e&0&&i!==(i=l.title)&&(document.title=i)},d(o){o&&c(r),o&&c(t),o&&c(s),o&&c(n)}}}function Me(_){var n,o;let i,r,t=(l.description||((n=l.og)==null?void 0:n.description))&&De(),s=((o=l.og)==null?void 0:o.image)&&$e();return{c(){t&&t.c(),i=T(),s&&s.c(),r=ee()},l(e){t&&t.l(e),i=C(e),s&&s.l(e),r=ee()},m(e,m){t&&t.m(e,m),h(e,i,m),s&&s.m(e,m),h(e,r,m)},p(e,m){var N,E;(l.description||(N=l.og)!=null&&N.description)&&t.p(e,m),(E=l.og)!=null&&E.image&&s.p(e,m)},d(e){t&&t.d(e),e&&c(i),s&&s.d(e),e&&c(r)}}}function De(_){let i,r,t,s,n;return{c(){i=v("meta"),r=T(),t=v("meta"),s=T(),n=v("meta"),this.h()},l(o){i=g(o,"META",{name:!0,content:!0}),r=C(o),t=g(o,"META",{property:!0,content:!0}),s=C(o),n=g(o,"META",{name:!0,content:!0}),this.h()},h(){var o,e,m;u(i,"name","description"),u(i,"content",l.description??((o=l.og)==null?void 0:o.description)),u(t,"property","og:description"),u(t,"content",((e=l.og)==null?void 0:e.description)??l.description),u(n,"name","twitter:description"),u(n,"content",((m=l.og)==null?void 0:m.description)??l.description)},m(o,e){h(o,i,e),h(o,r,e),h(o,t,e),h(o,s,e),h(o,n,e)},p:D,d(o){o&&c(i),o&&c(r),o&&c(t),o&&c(s),o&&c(n)}}}function $e(_){let i,r,t;return{c(){i=v("meta"),r=T(),t=v("meta"),this.h()},l(s){i=g(s,"META",{property:!0,content:!0}),r=C(s),t=g(s,"META",{name:!0,content:!0}),this.h()},h(){var s,n;u(i,"property","og:image"),u(i,"content",(s=l.og)==null?void 0:s.image),u(t,"name","twitter:image"),u(t,"content",(n=l.og)==null?void 0:n.image)},m(s,n){h(s,i,n),h(s,r,n),h(s,t,n)},p:D,d(s){s&&c(i),s&&c(r),s&&c(t)}}}function pe(_){let i,r;return i=new Fe({props:{queryID:"competitive_seasons",queryResult:_[1]}}),{c(){V(i.$$.fragment)},l(t){z(i.$$.fragment,t)},m(t,s){K(i,t,s),r=!0},p(t,s){const n={};s&2&&(n.queryResult=t[1]),i.$set(n)},i(t){r||(M(i.$$.fragment,t),r=!0)},o(t){I(i.$$.fragment,t),r=!1},d(t){X(i,t)}}}function We(_){let i,r,t,s,n,o;return i=new ie({props:{id:"year",title:"Season"}}),t=new ie({props:{id:"points"}}),n=new ie({props:{id:"weighted_points"}}),{c(){V(i.$$.fragment),r=T(),V(t.$$.fragment),s=T(),V(n.$$.fragment)},l(e){z(i.$$.fragment,e),r=C(e),z(t.$$.fragment,e),s=C(e),z(n.$$.fragment,e)},m(e,m){K(i,e,m),h(e,r,m),K(t,e,m),h(e,s,m),K(n,e,m),o=!0},p:D,i(e){o||(M(i.$$.fragment,e),M(t.$$.fragment,e),M(n.$$.fragment,e),o=!0)},o(e){I(i.$$.fragment,e),I(t.$$.fragment,e),I(n.$$.fragment,e),o=!1},d(e){X(i,e),e&&c(r),X(t,e),e&&c(s),X(n,e)}}}function qe(_){let i,r,t,s,n,o,e,m,N,E,O,$,k,w,U,W,L,Y,R,Q,B,F,y,G,b=typeof l<"u"&&l.title&&l.hide_title!==!0&&Re();function J(a,p){return typeof l<"u"&&l.title?He:ke}let f=J()(_),S=typeof l=="object"&&Me(),d=_[1]&&pe(_);return y=new Oe({props:{data:_[1],$$slots:{default:[We]},$$scope:{ctx:_}}}),{c(){b&&b.c(),i=T(),f.c(),r=v("meta"),t=v("meta"),S&&S.c(),s=ee(),n=T(),d&&d.c(),o=T(),e=v("p"),m=q('Points is a calculation of the number of drivers within 80%, 90%, and 95% of the leader at each race. A driver being within 5% points of the leader counts as 3, 90%->2 points, 80%->1 point. "Weighted Points" gives more points for it happening later in the season, so a final race clash is weighted more than early races. The race 25% into the season gives 0.25 points per driver, while the last race gives 1 point per driver. This is not a very scientific algorithm, but hopefully it highlights the most exciting seasons in F1 for those who want to go and watch historical seasons on F1TV.'),N=T(),E=v("ul"),O=v("li"),$=q("2010 was the most competitive season, with 4 drivers potentially taking the championship in the final race."),k=T(),w=v("li"),U=q("2012 had 7 different winners in the first 7 races, keeping the pack tight early, and resulting in a tight 2 way battle into the final race."),W=T(),L=v("li"),Y=q("2021 was a duel between Hamilton and Verstappen, which was tied going into the final race of the season and ending in "),R=v("em"),Q=q("spectacular"),B=q(" fashion."),F=T(),V(y.$$.fragment),this.h()},l(a){b&&b.l(a),i=C(a);const p=fe("svelte-1j2izld",document.head);f.l(p),r=g(p,"META",{name:!0,content:!0}),t=g(p,"META",{name:!0,content:!0}),S&&S.l(p),s=ee(),p.forEach(c),n=C(a),d&&d.l(a),o=C(a),e=g(a,"P",{class:!0});var H=P(e);m=x(H,'Points is a calculation of the number of drivers within 80%, 90%, and 95% of the leader at each race. A driver being within 5% points of the leader counts as 3, 90%->2 points, 80%->1 point. "Weighted Points" gives more points for it happening later in the season, so a final race clash is weighted more than early races. The race 25% into the season gives 0.25 points per driver, while the last race gives 1 point per driver. This is not a very scientific algorithm, but hopefully it highlights the most exciting seasons in F1 for those who want to go and watch historical seasons on F1TV.'),H.forEach(c),N=C(a),E=g(a,"UL",{class:!0});var j=P(E);O=g(j,"LI",{class:!0});var re=P(O);$=x(re,"2010 was the most competitive season, with 4 drivers potentially taking the championship in the final race."),re.forEach(c),k=C(j),w=g(j,"LI",{class:!0});var se=P(w);U=x(se,"2012 had 7 different winners in the first 7 races, keeping the pack tight early, and resulting in a tight 2 way battle into the final race."),se.forEach(c),W=C(j),L=g(j,"LI",{class:!0});var Z=P(L);Y=x(Z,"2021 was a duel between Hamilton and Verstappen, which was tied going into the final race of the season and ending in "),R=g(Z,"EM",{class:!0});var oe=P(R);Q=x(oe,"spectacular"),oe.forEach(c),B=x(Z," fashion."),Z.forEach(c),j.forEach(c),F=C(a),z(y.$$.fragment,a),this.h()},h(){u(r,"name","twitter:card"),u(r,"content","summary"),u(t,"name","twitter:site"),u(t,"content","@evidence_dev"),u(e,"class","markdown"),u(O,"class","markdown"),u(w,"class","markdown"),u(R,"class","markdown"),u(L,"class","markdown"),u(E,"class","markdown")},m(a,p){b&&b.m(a,p),h(a,i,p),f.m(document.head,null),A(document.head,r),A(document.head,t),S&&S.m(document.head,null),A(document.head,s),h(a,n,p),d&&d.m(a,p),h(a,o,p),h(a,e,p),A(e,m),h(a,N,p),h(a,E,p),A(E,O),A(O,$),A(E,k),A(E,w),A(w,U),A(E,W),A(E,L),A(L,Y),A(L,R),A(R,Q),A(L,B),h(a,F,p),K(y,a,p),G=!0},p(a,[p]){typeof l<"u"&&l.title&&l.hide_title!==!0&&b.p(a,p),f.p(a,p),typeof l=="object"&&S.p(a,p),a[1]?d?(d.p(a,p),p&2&&M(d,1)):(d=pe(a),d.c(),M(d,1),d.m(o.parentNode,o)):d&&(Ae(),I(d,1,1,()=>{d=null}),he());const H={};p&2&&(H.data=a[1]),p&4194304&&(H.$$scope={dirty:p,ctx:a}),y.$set(H)},i(a){G||(M(d),M(y.$$.fragment,a),G=!0)},o(a){I(d),I(y.$$.fragment,a),G=!1},d(a){b&&b.d(a),a&&c(i),f.d(a),c(r),c(t),S&&S.d(a),c(s),a&&c(n),d&&d.d(a),a&&c(o),a&&c(e),a&&c(N),a&&c(E),a&&c(F),X(y,a)}}}const l={title:"Most Competitive F1 Seasons",queries:[{competitive_seasons:"most_competitive_f1_seasons.sql"}]};function Pe(_,...i){return!!i.some(r=>r==null?void 0:r.__unset)}function xe(_,i,r){var J,te;let t,s,n,o,e,m,N,E=D,O=()=>(E(),E=ve(y,f=>r(9,N=f)),y),$;ae(_,ge,f=>r(8,m=f)),ae(_,_e,f=>r(17,$=f)),_.$$.on_destroy.push(()=>E());let{data:k}=i,{data:w={},customFormattingSettings:U,__db:W,inputs:L}=k;Se(_e,$="ce8a3d454da77193665e08c24d5847ed",$);let Y=be(L);ne(Ne,Y),Ee(Y.subscribe(f=>L=f)),ne(Le,{getCustomFormats:()=>U.customFormats||[]});const R=(f,S)=>le(W.query,f,{query_name:S});we(R);const Q=()=>{};let B=!1;(J=import.meta)!=null&&J.hot&&(void 0).on("vite:afterUpdate",()=>{B=!0,ce.emptyCache()}),m.params,(te=import.meta)!=null&&te.hot&&(void 0).on("evidence:queryChange",({queryId:f,content:S})=>{let d=[];if(f||d.push("Malformed event: Missing queryId"),S||d.push("Malformed event: Missing content"),d.length){console.warn("Failed to update query on serverside change!",d.join(`
`));return}f==="competitive_seasons"&&r(6,t=S)});let F;ye(()=>r(4,F=t));let y;const G=()=>{const f=()=>{let S,d;try{if(o||B)S=void 0,d=void 0;else if(w.competitive_seasons){if(w.competitive_seasons instanceof Error)throw w.competitive_seasons;S=w.competitive_seasons}else S=le(W.query,t,{query_name:"competitive_seasons"})}catch(H){S=[],d=H}const a=ce.create(t,R,"competitive_seasons",{scoreNotifier:Q,initialData:S,initialError:d,noResolve:s});let p;a.loaded||(p=a.fetch()),y&&p instanceof Promise?p.then(()=>O(r(0,y=a))):O(r(0,y=a))};return f(),Ce(f,500)};let b;return console.log("https://github.com/Skrimmage/Data-Platform/tree/main/frontend/pages"+m.route.id+"/index.md"),_.$$set=f=>{"data"in f&&r(2,k=f.data)},_.$$.update=()=>{_.$$.dirty&4&&r(3,{data:w={},customFormattingSettings:U,__db:W}=k,w),_.$$.dirty&8&&Te.set(Object.keys(w).length>0),_.$$.dirty&256&&m.params,_.$$.dirty&80&&(F||r(4,F=t)),_.$$.dirty&64&&r(7,n=t),_.$$.dirty&144&&(o=n!==F),_.$$.dirty&96&&typeof b>"u"&&r(5,b=G()),_.$$.dirty&96&&b(),_.$$.dirty&40,_.$$.dirty&512&&r(1,e=N)},r(6,t=`WITH race_count
     AS (SELECT Count(raceid) num_of_races,
                Max(raceid)   max_race,
                year
         FROM   f1.races
         GROUP  BY year),
     race_and_year
     AS (SELECT r.raceid,
                year
         FROM   f1.races r),
     top_points
     AS (SELECT ry.raceid,
                Max(Cast(ds.points AS INT)) top_points
         FROM   race_and_year ry,
                f1.driver_standings ds
         WHERE  ry.raceid = ds.raceid
         GROUP  BY ry.raceid),
     race_breakdowns
     AS (SELECT ry.*,
                Cast(ds.points AS INT)
                   AS points,
                Round(( Cast(ds.points AS FLOAT) / tp.top_points ) * 100, 1)
                   AS percent_points,
                ( Cast(max_race AS FLOAT) - Cast(ry.raceid AS
                FLOAT) ) / rc.num_of_races
                   AS
                percent_race
         FROM   race_and_year ry,
                f1.driver_standings ds,
                top_points tp,
                race_count rc
         WHERE  ry.raceid = ds.raceid
                AND ry.raceid = tp.raceid
                AND ry.year = rc.year),
     close_driver_races
     AS (SELECT raceid,
                year,
                Sum(CASE
                      WHEN Cast(percent_points AS FLOAT) > 80 THEN 1
                      ELSE 0
                    END) - 1                    AS close_drivers_80,
                Sum(CASE
                      WHEN Cast(percent_points AS FLOAT) > 90 THEN 1
                      ELSE 0
                    END) - 1                    AS close_drivers_90,
                Sum(CASE
                      WHEN Cast(percent_points AS FLOAT) > 95 THEN 1
                      ELSE 0
                    END) - 1                    AS close_drivers_95,
                percent_race * ( Sum(CASE
                                       WHEN Cast(percent_points AS FLOAT) > 80
                                     THEN 1
                                       ELSE 0
                                     END) - 1 ) AS weighted_close_drivers_80,
                percent_race * ( Sum(CASE
                                       WHEN Cast(percent_points AS FLOAT) > 90
                                     THEN 1
                                       ELSE 0
                                     END) - 1 ) AS weighted_close_drivers_90,
                percent_race * ( Sum(CASE
                                       WHEN Cast(percent_points AS FLOAT) > 95
                                     THEN 1
                                       ELSE 0
                                     END) - 1 ) AS weighted_close_drivers_95
         FROM   race_breakdowns rb
         GROUP  BY raceid, year, percent_race)
SELECT Max(year) as year,
       ( Sum(close_drivers_80)
         + Sum(close_drivers_90)
         + Sum(close_drivers_95) )             points,
       Sum(close_drivers_95),
       Sum(close_drivers_90),
       Sum(close_drivers_80),
       Round(Sum(weighted_close_drivers_95)
             + Sum(weighted_close_drivers_90)
             + Sum(weighted_close_drivers_80)) AS weighted_points,
       Round(Sum(weighted_close_drivers_95)),
       Round(Sum(weighted_close_drivers_90)),
       Round(Sum(weighted_close_drivers_80))
FROM   close_driver_races
GROUP  BY year
ORDER  BY points DESC, weighted_points DESC`),s=Pe`WITH race_count
     AS (SELECT Count(raceid) num_of_races,
                Max(raceid)   max_race,
                year
         FROM   f1.races
         GROUP  BY year),
     race_and_year
     AS (SELECT r.raceid,
                year
         FROM   f1.races r),
     top_points
     AS (SELECT ry.raceid,
                Max(Cast(ds.points AS INT)) top_points
         FROM   race_and_year ry,
                f1.driver_standings ds
         WHERE  ry.raceid = ds.raceid
         GROUP  BY ry.raceid),
     race_breakdowns
     AS (SELECT ry.*,
                Cast(ds.points AS INT)
                   AS points,
                Round(( Cast(ds.points AS FLOAT) / tp.top_points ) * 100, 1)
                   AS percent_points,
                ( Cast(max_race AS FLOAT) - Cast(ry.raceid AS
                FLOAT) ) / rc.num_of_races
                   AS
                percent_race
         FROM   race_and_year ry,
                f1.driver_standings ds,
                top_points tp,
                race_count rc
         WHERE  ry.raceid = ds.raceid
                AND ry.raceid = tp.raceid
                AND ry.year = rc.year),
     close_driver_races
     AS (SELECT raceid,
                year,
                Sum(CASE
                      WHEN Cast(percent_points AS FLOAT) > 80 THEN 1
                      ELSE 0
                    END) - 1                    AS close_drivers_80,
                Sum(CASE
                      WHEN Cast(percent_points AS FLOAT) > 90 THEN 1
                      ELSE 0
                    END) - 1                    AS close_drivers_90,
                Sum(CASE
                      WHEN Cast(percent_points AS FLOAT) > 95 THEN 1
                      ELSE 0
                    END) - 1                    AS close_drivers_95,
                percent_race * ( Sum(CASE
                                       WHEN Cast(percent_points AS FLOAT) > 80
                                     THEN 1
                                       ELSE 0
                                     END) - 1 ) AS weighted_close_drivers_80,
                percent_race * ( Sum(CASE
                                       WHEN Cast(percent_points AS FLOAT) > 90
                                     THEN 1
                                       ELSE 0
                                     END) - 1 ) AS weighted_close_drivers_90,
                percent_race * ( Sum(CASE
                                       WHEN Cast(percent_points AS FLOAT) > 95
                                     THEN 1
                                       ELSE 0
                                     END) - 1 ) AS weighted_close_drivers_95
         FROM   race_breakdowns rb
         GROUP  BY raceid, year, percent_race)
SELECT Max(year) as year,
       ( Sum(close_drivers_80)
         + Sum(close_drivers_90)
         + Sum(close_drivers_95) )             points,
       Sum(close_drivers_95),
       Sum(close_drivers_90),
       Sum(close_drivers_80),
       Round(Sum(weighted_close_drivers_95)
             + Sum(weighted_close_drivers_90)
             + Sum(weighted_close_drivers_80)) AS weighted_points,
       Round(Sum(weighted_close_drivers_95)),
       Round(Sum(weighted_close_drivers_90)),
       Round(Sum(weighted_close_drivers_80))
FROM   close_driver_races
GROUP  BY year
ORDER  BY points DESC, weighted_points DESC`,[y,e,k,w,F,b,t,n,m,N]}class Xe extends de{constructor(i){super(),me(this,i,xe,qe,ue,{data:2})}}export{Xe as default};
