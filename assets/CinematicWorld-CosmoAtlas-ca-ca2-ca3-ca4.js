var Yt=Object.defineProperty;var Xt=(e,t,a)=>t in e?Yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var it=(e,t,a)=>Xt(e,typeof t!="symbol"?t+"":t,a);import{r as f,j as s,at as n,au as qt,av as ue,aw as G,ax as E,ay as g,az as H,aA as Jt,aB as Se,aC as K,aD as bt}from"./index-CosmoAtlas-r9.js";import{w as Fe,ar as Kt,y as Ae,as as Zt,at as Qt,a8 as ge,a9 as I,C as x,au as ea,av as ta,V as C,u as ie,E as aa,Q as oa,a as W,aw as ra,b as St,X as lt,Y as Xe,Z as ut,_ as ct,$ as ft,x as At,z as re,ax as na,ay as sa,al as ia,h as U,A as Z,az as Ft,a1 as Ze,a0 as la,ae as ua,ad as te,ah as ca,D as fa,an as da,ap as ma,aq as ha}from"./space-CcYHfSAQ-ca-ca2-ca3-ca4.js";const pa=Fe(Kt),va=Fe(Zt,{blendFunction:Ae.COLOR_DODGE}),dt=Fe(Qt),ye=(e,t,a)=>({x:e,y:t,z:a}),se=ye(0,0,-700),ne=340,D=ye(-215,2,-755),Oe=ye(-215,2,-2600),$=ye(-215,2,-4400),L=ye(-215,2,-6200),Y=ye(-215,2,-7800);function je(e,t,a,o){return[e.x+t,e.y+a,e.z+o]}const k=(e,t,a)=>je(D,e,t,a),de=(e,t,a)=>je(Oe,e,t,a),me=(e,t,a)=>je($,e,t,a),B=(e,t,a)=>je(L,e,t,a),ze=(e,t,a)=>je(Y,e,t,a),We=[{id:"mercury",radius:.55,at:[18,.6,-14],tilt:.03,spin:90,color:"#9c8f84",orbit:"#7d8aa0"},{id:"venus",radius:1.05,at:[-26,-1.2,-34],tilt:177,spin:120,color:"#d8b98a",orbit:"#a08f78"},{id:"earth",radius:1.15,at:[36,1.6,-62],tilt:23.4,spin:70,color:"#3f6fa8",orbit:"#6f9fe4"},{id:"mars",radius:.72,at:[-44,-2.4,-96],tilt:25.2,spin:68,color:"#b1583a",orbit:"#c0724f"},{id:"jupiter",radius:5.8,at:[78,5,-168],tilt:3.1,spin:42,color:"#c8a279",orbit:"#c9a983"},{id:"saturn",radius:4.9,at:[-104,-7,-250],tilt:26.7,spin:46,color:"#d6c090",ring:{inner:1.32,outer:2.28},orbit:"#cbb98d"},{id:"uranus",radius:2.3,at:[126,9,-340],tilt:97.8,spin:58,color:"#8fd0d8",orbit:"#8ec7d4"},{id:"neptune",radius:2.2,at:[-140,-10,-430],tilt:28.3,spin:56,color:"#4a6fd0",orbit:"#5f7fd8"}],ga=e=>We.find(t=>t.id===e)??We[2];function ae(e){const t=ga(e);return k(t.at[0],t.at[1],t.at[2])}function ya(e){return Math.hypot(e.at[0],e.at[2])}const we="https://cdn.jsdelivr.net/gh/mrdoob/three.js@r169/examples/textures/planets",X="https://cdn.jsdelivr.net/gh/jeromeetienne/threex.planets@master/images",_={earth:`${we}/earth_atmos_2048.jpg`,earthNormal:`${we}/earth_normal_2048.jpg`,earthSpecular:`${we}/earth_specular_2048.jpg`,earthLights:`${we}/earth_lights_2048.png`,earthClouds:`${we}/earth_clouds_1024.png`,mercury:`${X}/mercurymap.jpg`,venus:`${X}/venusmap.jpg`,mars:`${X}/marsmap1k.jpg`,marsBump:`${X}/marsbump1k.jpg`,jupiter:`${X}/jupitermap.jpg`,saturn:`${X}/saturnmap.jpg`,saturnRing:`${X}/saturnringcolor.jpg`,uranus:`${X}/uranusmap.jpg`,neptune:`${X}/neptunemap.jpg`},jt={mercury:_.mercury,venus:_.venus,earth:_.earth,mars:_.mars,jupiter:_.jupiter,saturn:_.saturn,uranus:_.uranus,neptune:_.neptune},ke=(e,t=0,a=0,o=0)=>[e[0]+t,e[1]+a,e[2]+o],Rt=[{id:"sol",world:[D.x,D.y,D.z],label:"Sol",note:"G2V",value:26e3,unit:"ly",show:[n("disk",.16),n("disk",.3),n("disk",.9),n("star",.14)]},{id:"jupiter",world:ke(ae("jupiter"),0,7.4,0),label:"Jupiter",value:139820,unit:"km",note:"5.20 AU",show:[n("system",.33),n("system",.38),n("system",.5),n("system",.55)]},{id:"saturn",world:ke(ae("saturn"),0,6.6,0),label:"Saturn",value:116460,unit:"km",note:"9.58 AU",show:[n("system",.58),n("system",.63),n("system",.74),n("system",.79)]},{id:"earth",world:ke(ae("earth"),0,1.7,0),label:"Earth",value:12742,unit:"km",note:"29.78 km/s",show:[n("earth",.42),n("earth",.5),n("earth",.92),n("earth",1)]},{id:"mars",world:ke(ae("mars"),0,1.1,0),label:"Mars",value:6779,unit:"km",note:"1.52 AU",show:[n("descent",.1),n("descent",.18),n("descent",.4),n("descent",.48)]},{id:"trappist",world:[$.x-9.5,$.y+1.6,$.z+5.5],label:"TRAPPIST-1e",value:39.5,unit:"ly",note:"M8V",show:[n("exodus",.82),n("exodus",.88),n("scale",.02),n("scale",.06)]},{id:"scale-earth",world:[L.x-15.6,L.y+1.7,L.z],label:"Earth",note:"1.00 R⊕",show:[n("scale",.46),n("scale",.5),n("scale",.6),n("scale",.64)]},{id:"scale-mars",world:[L.x-11.6,L.y+1.1,L.z],label:"Mars",note:"0.53 R⊕",show:[n("scale",.46),n("scale",.5),n("scale",.6),n("scale",.64)]},{id:"scale-jupiter",world:[L.x+10.4,L.y+13,L.z],label:"Jupiter",note:"11.21 R⊕",show:[n("scale",.47),n("scale",.51),n("scale",.6),n("scale",.64)]},{id:"finale-earth",world:[Y.x-150,Y.y+202,Y.z-430],label:"Earth",value:384400,unit:"km",show:[n("finale",.18),n("finale",.3),1.1,1.2]}],qe=new Map;function xa({lang:e}){const t=f.useMemo(()=>new Intl.NumberFormat(e),[e]);return s.jsx("div",{className:"cx-markers","aria-hidden":!0,children:Rt.map(a=>s.jsxs("div",{className:"cx-marker",ref:o=>{o?qe.set(a.id,o):qe.delete(a.id)},children:[s.jsx("span",{className:"cx-marker-dot"}),s.jsx("span",{className:"cx-marker-line"}),s.jsxs("span",{className:"cx-marker-text",children:[s.jsx("span",{className:"cx-marker-name",children:a.label}),s.jsxs("span",{className:"cx-marker-meta",children:[a.value!==void 0?`${t.format(a.value)} ${a.unit??""}`.trim():null,a.value!==void 0&&a.note?" · ":null,a.note]})]})]},a.id))})}function Q(e){let t=e>>>0;return()=>{t+=1831565813;let a=t;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}}function Ce(e,t){const a=Math.sin(e*127.1+t*311.7)*43758.5453123;return a-Math.floor(a)}function wa(e,t){const a=Math.floor(e),o=Math.floor(t),r=e-a,i=t-o,u=r*r*(3-2*r),d=i*i*(3-2*i),m=Ce(a,o),l=Ce(a+1,o),c=Ce(a,o+1),p=Ce(a+1,o+1);return m*(1-u)*(1-d)+l*u*(1-d)+c*(1-u)*d+p*u*d}function Je(e,t,a=5){let o=0,r=.5,i=1;for(let u=0;u<a;u+=1)o+=wa(e*i,t*i)*r,i*=2.03,r*=.5;return o}function Qe(e){return{positions:new Float32Array(e*3),colors:new Float32Array(e*3),sizes:new Float32Array(e),seeds:new Float32Array(e),count:e}}function ce(e){const t=new ge;return t.setAttribute("position",new I(e.positions,3)),t.setAttribute("aColor",new I(e.colors,3)),t.setAttribute("aSize",new I(e.sizes,1)),t.setAttribute("aSeed",new I(e.seeds,1)),t}function Ma(e){const{radius:t,arms:a=4,pitch:o=Math.tan(13*Math.PI/180),disk:r,bulge:i,halo:u,thickness:d=.035,spread:m=.11,interArm:l=.34,seed:c=1}=e,p=new x(e.core??"#ffdca8"),v=new x(e.mid??"#cfd9ff"),w=new x(e.outer??"#7d9cff"),h=e.sizeBias??1,b=r+i+u,M=Qe(b),y=Q(c),j=new x;let S=0;const A=(F,T,P,N,ee)=>{M.positions[S*3]=F,M.positions[S*3+1]=T,M.positions[S*3+2]=P,M.colors[S*3]=N.r,M.colors[S*3+1]=N.g,M.colors[S*3+2]=N.b,M.sizes[S]=ee,M.seeds[S]=y(),S+=1},z=.24;for(let F=0;F<r;F+=1){const T=Math.pow(y(),.62),P=t*(z*.4+T*(1-z*.4)),N=Math.floor(y()*a),ee=Math.log(Math.max(P/t,1e-4)/z)/o,xe=N/a*Math.PI*2+ee,He=(y()+y()+y()-1.5)*m*(.45+T),nt=y()<l?y()*Math.PI*2:xe+He,st=P*(1+(y()-.5)*.08),Ut=(y()+y()-1)*t*d*(1.4-T*.7),Ue=Math.min(1,P/t);j.copy(p).lerp(v,Math.min(1,Ue*1.35)),Ue>.34&&j.lerp(w,Math.min(1,(Ue-.34)/.66));const $t=y()>.972?2.9+y()*3.4:.5+y()*.85;A(Math.cos(nt)*st,Ut,Math.sin(nt)*st,j,$t*h)}for(let F=0;F<i;F+=1){const T=t*.3*Math.pow(y(),1.9),P=y()*Math.PI*2,N=Math.acos(2*y()-1),ee=T*Math.sin(N)*Math.cos(P),xe=T*Math.cos(N)*.42,He=T*Math.sin(N)*Math.sin(P);j.copy(p).lerp(v,y()*.4),A(ee,xe,He,j,(.5+y()*1.1)*h)}for(let F=0;F<u;F+=1){const T=t*(.7+Math.pow(y(),.5)*1.5),P=y()*Math.PI*2,N=Math.acos(2*y()-1);j.copy(v).lerp(w,y()),A(T*Math.sin(N)*Math.cos(P),T*Math.cos(N)*.55,T*Math.sin(N)*Math.sin(P),j,(.35+y()*.6)*h)}return{stars:M}}function ba(e){const{radius:t,arms:a=4,pitch:o=Math.tan(13*Math.PI/180),count:r,seed:i=7}=e,u=Qe(r),d=Q(i),m=new x("#241a2e");for(let l=0;l<r;l+=1){const c=Math.pow(d(),.55),p=t*(.16+c*.86),v=Math.floor(d()*a),w=Math.log(Math.max(p/t,1e-4)/.24)/o,h=v/a*Math.PI*2+w-.13,b=(d()+d()-1)*.1*(.5+c),M=h+b,y=(d()+d()-1)*t*.022;u.positions[l*3]=Math.cos(M)*p,u.positions[l*3+1]=y,u.positions[l*3+2]=Math.sin(M)*p,u.colors[l*3]=m.r,u.colors[l*3+1]=m.g,u.colors[l*3+2]=m.b,u.sizes[l]=1.4+d()*3.6,u.seeds[l]=d()}return u}function Re(e){const{count:t,inner:a,outer:o,seed:r=3,size:i=1}=e,u=(e.palette??["#9db8ff","#ffffff","#fff0d0","#ffd0a0","#cfe0ff"]).map(l=>new x(l)),d=Qe(t),m=Q(r);for(let l=0;l<t;l+=1){const c=a+(o-a)*Math.cbrt(m()),p=m()*Math.PI*2,v=Math.acos(2*m()-1);d.positions[l*3]=c*Math.sin(v)*Math.cos(p),d.positions[l*3+1]=c*Math.cos(v),d.positions[l*3+2]=c*Math.sin(v)*Math.sin(p);const w=u[Math.floor(m()*u.length)],h=.45+m()*.55;d.colors[l*3]=w.r*h,d.colors[l*3+1]=w.g*h,d.colors[l*3+2]=w.b*h,d.sizes[l]=(m()>.985?3.2+m()*3:.45+m()*1.05)*i,d.seeds[l]=m()}return d}function Sa(e,t,a=11){const o=new Float32Array(e*6),r=new Float32Array(e*6),i=new Float32Array(e*2),u=new Float32Array(e*2),d=Q(a),m=[new x("#cfe0ff"),new x("#ffffff"),new x("#ffe6c0"),new x("#b9d0ff")];for(let c=0;c<e;c+=1){const p=t*(.06+Math.pow(d(),.7)),v=d()*Math.PI*2,w=Math.acos(2*d()-1),h=p*Math.sin(w)*Math.cos(v),b=p*Math.cos(w),M=p*Math.sin(w)*Math.sin(v),y=m[Math.floor(d()*m.length)],j=d();for(let S=0;S<2;S+=1){const A=(c*2+S)*3;o[A]=h,o[A+1]=b,o[A+2]=M,r[A]=y.r,r[A+1]=y.g,r[A+2]=y.b,i[c*2+S]=j,u[c*2+S]=S}}const l=new ge;return l.setAttribute("position",new I(o,3)),l.setAttribute("aColor",new I(r,3)),l.setAttribute("aSeed",new I(i,1)),l.setAttribute("aTail",new I(u,1)),l}function Aa(e){const{size:t,segments:a,amplitude:o,frequency:r,clearing:i=0,seed:u=5,craters:d=0,edgeTaper:m=!1}=e,l=t/2,c=new ea(t,t,a,a);c.rotateX(-Math.PI/2);const p=c.attributes.position,v=Q(u),w=[];for(let h=0;h<d;h+=1)w.push({x:(v()-.5)*t,z:(v()-.5)*t,r:t*(.015+v()*.06),d:o*(.3+v()*.9)});for(let h=0;h<p.count;h+=1){const b=p.getX(h),M=p.getZ(h),y=1-Math.abs(Je(b*r*2.1+u,M*r*2.1-u)*2-1);let j=(Je(b*r+u,M*r+u)-.5)*2*o;j+=y*o*.45;for(const A of w){const z=Math.hypot(b-A.x,M-A.z);if(z<A.r){const F=1-z/A.r;j-=A.d*F*F,j+=A.d*.35*Math.pow(Math.max(0,1-Math.abs(z-A.r)/(A.r*.3)),2)}}const S=Math.hypot(b,M);if(i>0&&(j*=Math.min(1,Math.pow(S/i,1.6))),m){const A=Math.min(1,Math.max(0,(S/l-.62)/.38));j*=1-A*A*(3-2*A)}p.setY(h,j)}return p.needsUpdate=!0,c.computeVertexNormals(),c}const ve={arms:4,inner:.24,pitch:Math.tan(21*Math.PI/180),phase:.65,seed:11};function Fa({radius:e,count:t}){const a={positions:new Float32Array(t*3),colors:new Float32Array(t*3),sizes:new Float32Array(t),seeds:new Float32Array(t),count:t},o=Q(ve.seed),r=new x("#f4d4ad"),i=new x("#d5dce3"),u=new x("#9dbcd9"),d=new x("#e6a3ac"),m=new x;for(let l=0;l<t;l++){const c=o(),p=c<.16,v=c>.99,w=p?Math.pow(o(),1.6)*.24:v?.45+o()*.8:.12+Math.pow(o(),.65)*.86,h=Math.floor(o()*2)*2+(o()<.2?1:0),b=(o()+o()+o()-1.5)*.16,M=o()<.2,y=p||v||M?o()*Math.PI*2:ta(ve,h,w)+b,j=Math.cos(y)*w,S=Math.sin(y)*w,A=(o()+o()-1)*(p?.065:v?.25:.018),z=Je(j*42+11,S*42+11,3),F=p?.24:M?.1:.14+Math.pow(z,2)*2.4;m.copy(r).lerp(i,Math.min(1,w*3)),p||m.lerp(u,Math.max(0,w-.25)*.6),!p&&z>.63&&m.lerp(d,.45),m.multiplyScalar(F*(1-Math.pow(w/1.4,2))),a.positions.set([j*e,A*e,S*e],l*3),a.colors.set([m.r,m.g,m.b],l*3),a.sizes[l]=o()>.999?3+o()*2:.5+o()*.65,a.seeds[l]=o()}return a}function ja(e){const t=e.index;if(!t)throw new Error("terrain geometry is expected to be indexed");return{kind:"mesh",index:t.array,position:e.attributes.position.array,normal:e.attributes.normal.array,uv:e.attributes.uv.array}}function Ra(e){switch(e.kind){case"detailedGalaxy":return{kind:"cloud",cloud:Fa(e.options)};case"galaxy":return{kind:"cloud",cloud:Ma(e.options).stars};case"galaxyDust":return{kind:"cloud",cloud:ba(e.options)};case"terrain":return ja(Aa(e.options))}}function zt(e){if(e.kind==="cloud")return ce(e.cloud);const t=new ge;return t.setIndex(new I(e.index,1)),t.setAttribute("position",new I(e.position,3)),t.setAttribute("normal",new I(e.normal,3)),t.setAttribute("uv",new I(e.uv,2)),t}function le(e,t){const a=e.get(t);if(!a)throw new Error(`No prebuilt geometry for "${t}"`);return a}function za(e){return typeof Worker>"u"?$e(e):new Promise(t=>{const a=Object.keys(e),o=new Map;let r;const i=()=>{r.terminate(),t($e(e))};try{r=new Worker(new URL("/assets/geometry.worker-D5n9JvBT.js",import.meta.url),{type:"module"})}catch{t($e(e));return}r.onmessage=u=>{o.set(u.data.name,zt(u.data.built)),o.size===a.length&&(r.terminate(),t(o))},r.onerror=i,r.onmessageerror=i,r.postMessage(e)})}async function $e(e){const t=new Map;for(const[a,o]of Object.entries(e))await new Promise(r=>setTimeout(r,0)),t.set(a,zt(Ra(o)));return t}function R(e,t,a,o,r=0,i=[0,0]){return{p:e,pos:t,look:a,fov:o,roll:r,shift:i}}const Me=ae("earth"),Te=ae("mars"),q=ae("jupiter"),he=ae("saturn"),ka=[R(n("origin",0),[230,550,250],[0,0,se.z],40,-.38,[.48,-.08]),R(n("origin",1),[165,405,65],[0,0,se.z],40,-.25,[.44,.12]),R(n("approach",.5),[-142,432,-120],[0,0,se.z],43,-.05,[-.42,.02]),R(n("approach",1),[-322,296,-262],[-84,0,-722],47,-.09,[-.4,.06]),R(n("disk",.45),[-92,92,-478],[D.x,4,D.z],52,-.05,[0,.2]),R(n("disk",1),k(4,5,56),k(0,0,0),50,-.015,[0,.2]),R(n("star",.5),k(3,4,46),k(0,0,0),45,0,[.32,.02]),R(n("star",1),k(11,6,34),k(0,0,0),40,.015,[.34,.02]),R(n("system",.1),k(30,16,60),k(0,0,-30),40,.02,[.34,.04]),R(n("system",.26),k(27.4,17.4,-149.5),[q[0],q[1],q[2]],42,.04,[.36,.06]),R(n("system",.4),k(56.2,7.5,-168.2),[q[0],q[1]-1,q[2]+2],44,.07,[.4,.08]),R(n("system",.49),k(64.1,5.6,-169.3),[q[0]+4,q[1]-2,q[2]+3],46,.09,[.42,.1]),R(n("system",.62),k(-132.4,.3,-217.2),[he[0],he[1],he[2]],42,-.06,[.3,.2]),R(n("system",.72),k(-118.2,-3.3,-233.6),[he[0]+2,he[1]+1,he[2]+2],44,-.08,[.34,.24]),R(n("system",.86),k(-330,80,-600),k(-40,0,-140),44,-.03,[.52,.34]),R(n("system",1),k(-430,110,-760),k(-40,0,-130),42,-.02,[.52,.34]),R(n("earth",.16),k(-60,26,-190),k(20,4,-80),42,-.05,[.3,.02]),R(n("earth",.36),k(24.1,2.9,-57),Me,40,-.02,[.36,0]),R(n("earth",.48),k(32.15,2.03,-60.37),Me,38,.005,[.36,0]),R(n("earth",.56),k(32.46,2.24,-59.87),Me,38,.01,[-.34,0]),R(n("earth",.78),k(35.15,2.57,-57.58),Me,38,.02,[-.34,0]),R(n("earth",1),k(36.77,2.12,-56.88),Me,40,.03,[-.3,.06]),R(n("descent",.2),k(-4,10,-76),Te,42,-.04,[0,.18]),R(n("descent",.48),k(-42.4,-1.6,-93.9),Te,40,-.01,[0,.18]),R(n("descent",.7),k(-43.5,-2.05,-95),Te,46,.03,[0,.1]),R(n("descent",.78),k(-43.76,-2.21,-95.36),Te,52,.04,[0,.06]),R(n("descent",.785),de(0,4.2,16),de(0,2.6,-30),52,.03,[0,.16]),R(n("descent",1),de(0,1.75,6),de(0,2.1,-40),44,0,[0,.22]),R(n("exodus",.09),de(0,22,22),de(0,40,-70),48,0,[0,.1]),R(n("exodus",.28),me(0,6,1120),me(0,0,0),62,0,[0,0]),R(n("exodus",.56),me(34,16,96),me(0,0,0),48,.05,[-.3,.05]),R(n("exodus",1),me(14,6,22),me(-4.75,-.3,2.75),42,.02,[-.34,.06]),R(n("scale",.06),B(.4,1,9.2),B(0,0,-.4),40,0,[.3,.02]),R(n("scale",.34),B(.4,1,9.6),B(0,0,-.4),40,0,[.3,.02]),R(n("scale",.54),B(-1.6,4.4,44),B(2.4,0,0),42,0,[.12,.06]),R(n("scale",.63),B(-1.6,12,92),B(2.4,0,-10),44,0,[.08,.4]),R(n("scale",.8),B(0,300,1500),B(0,0,-1300),46,0,[.22,.42]),R(n("scale",1),B(0,900,5e3),B(0,0,-1700),50,0,[.22,.44]),R(n("finale",.32),ze(10,3.6,40),ze(-64,44,-230),44,0,[.34,.1]),R(n("finale",1),ze(0,1.9,12),ze(-72,52,-290),40,.01,[.34,.34])],Ca=new C,Ta=new C;function Ga(e,t){const a=ka;let o=0;for(;o<a.length-2&&e>a[o+1].p;)o+=1;const r=a[o],i=a[o+1]??r,u=i.p-r.p,d=u>0?qt(ue((e-r.p)/u)):0;return t.pos.set(...r.pos).lerp(Ca.set(...i.pos),d),t.look.set(...r.look).lerp(Ta.set(...i.look),d),t.fov=G(r.fov,i.fov,d),t.roll=G(r.roll,i.roll,d),t.shiftX=G(r.shift[0],i.shift[0],d),t.shiftY=G(r.shift[1],i.shift[1],d),t}function Ea(){return{pos:new C,look:new C,fov:42,roll:0,shiftX:0,shiftY:0}}const Pa=new C(0,1,0);function _a(){const e=ie(l=>l.camera),t=f.useMemo(Ea,[]),a=f.useRef(new C),o=f.useRef(new C),r=f.useRef(!1),i=f.useRef(0),u=f.useRef(42),d=f.useRef(0),m=f.useMemo(()=>({dir:new C,right:new C,up:new C,q:new oa,e:new aa}),[]);return W((l,c)=>{const p=Math.min(.05,c);g.time+=p;const v=g.reduced?24:6.5;g.eased=H(g.eased,g.p,v,p),g.pointer.x=H(g.pointer.x,g.reduced?0:g.pointerTarget.x,3.2,p),g.pointer.y=H(g.pointer.y,g.reduced?0:g.pointerTarget.y,3.2,p),g.velocity=H(g.velocity,0,2.6,p),g.speed=H(g.speed,Se(Math.abs(g.velocity)*3.4,0,1),4,p),Ga(g.eased,t);const w=e.aspect<1.05,h=1-E(n("origin",.5),n("approach",.4),g.eased);if(w){const xe=G(1,Math.max(1,.95/e.aspect),h);t.pos.sub(t.look).multiplyScalar(xe).add(t.look)}m.dir.copy(t.look).sub(t.pos).normalize(),m.right.copy(m.dir).cross(Pa).normalize(),m.up.copy(m.right).cross(m.dir).normalize();const b=t.pos.distanceTo(t.look),M=Math.tan(t.fov*Math.PI/360)*b,y=M*e.aspect,j=G(t.shiftY*.16+.38,.6,h),S=w?-Math.sin(t.roll)*j/e.aspect*h:t.shiftX,A=w?j*G(1,Math.cos(t.roll),h):t.shiftY;t.look.addScaledVector(m.right,-S*y).addScaledVector(m.up,-A*M);const z=Se(b*.05,.12,w?9:G(9,28,h)),F=g.reduced?0:Math.sin(g.time*.31)*.5+Math.sin(g.time*.17)*.5;t.pos.addScaledVector(m.right,g.pointer.x*z+F*z*.05).addScaledVector(m.up,-g.pointer.y*z*.7+F*z*.03),t.look.addScaledVector(m.right,-g.pointer.x*z*.16).addScaledVector(m.up,g.pointer.y*z*.12),r.current||(a.current.copy(t.pos),o.current.copy(t.look),u.current=t.fov,i.current=t.roll,r.current=!0);const T=a.current.distanceTo(t.pos),P=g.reduced?30:3.4+26*Se(T/60,0,1);a.current.copy(a.current).lerp(t.pos,1-Math.exp(-P*p)),o.current.lerp(t.look,1-Math.exp(-(P*1.25)*p));const N=g.reduced?0:Se(g.velocity*6,-1,1);d.current=H(d.current,N,2.2,p),i.current=H(i.current,t.roll+d.current*.045,2.4,p),u.current=H(u.current,t.fov+g.speed*4.5,3,p),e.position.copy(a.current),g.launch>0&&e.position.addScaledVector(m.dir,g.launch*b*.85),e.up.set(0,1,0),e.lookAt(o.current),i.current!==0&&(m.e.set(0,0,i.current),e.quaternion.multiply(m.q.setFromEuler(m.e)));const ee=u.current+g.launch*26;Math.abs(e.fov-ee)>.001&&(e.fov=ee,e.updateProjectionMatrix()),Jt()}),null}function La(){const e=ie(o=>o.camera),t=ie(o=>o.size),a=f.useMemo(()=>new C,[]);return W(()=>{const o=g.eased;for(const r of Rt){const i=qe.get(r.id);if(!i)continue;const u=K(o,r.show[0],r.show[1],r.show[2],r.show[3]);if(u<.01){i.style.opacity!=="0"&&(i.style.opacity="0",i.style.visibility="hidden");continue}if(a.set(r.world[0],r.world[1],r.world[2]).project(e),a.z>1){i.style.opacity="0",i.style.visibility="hidden";continue}const d=(a.x*.5+.5)*t.width,m=(-a.y*.5+.5)*t.height,l=Math.min(d,t.width-d)/(t.width*.14),c=Math.max(0,Math.min(1,l));i.style.visibility="visible",i.style.opacity=String(u*c),i.style.transform=`translate3d(${d.toFixed(1)}px, ${m.toFixed(1)}px, 0)`}}),null}const Na=`
  uniform float uAmount;
  uniform vec2 uCenter;

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    if (uAmount < 0.0015) {
      outputColor = inputColor;
      return;
    }
    vec2 dir = uv - uCenter;
    vec4 sum = inputColor;
    for (int i = 1; i <= 8; i++) {
      float t = float(i) / 8.0;
      sum += texture2D(inputBuffer, uv - dir * t * uAmount);
    }
    outputColor = sum / 9.0;
  }
`;class Da extends At{constructor({amount:t=0}={}){super("RadialBlur",Na,{blendFunction:Ae.NORMAL,uniforms:new Map([["uAmount",new re(t)],["uCenter",new re(new St(.5,.5))]])})}}const Ia=`
  uniform vec3 uTint;
  uniform float uContrast;
  uniform float uSaturation;
  uniform float uLift;
  uniform float uLaunch;

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec3 c = inputColor.rgb * uTint;
    c = (c - 0.5) * uContrast + 0.5 + uLift;
    float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c = mix(vec3(luma), c, uSaturation);
    c *= 1.0 - uLaunch;
    outputColor = vec4(max(c, 0.0), inputColor.a);
  }
`;class Oa extends At{constructor({contrast:t=1.04}={}){super("Grade",Ia,{blendFunction:Ae.NORMAL,uniforms:new Map([["uTint",new re(new x(1,1,1))],["uContrast",new re(t)],["uSaturation",new re(1.05)],["uLift",new re(0)],["uLaunch",new re(0)]])})}}const Wa=Fe(Da),mt=Fe(Oa),ht={origin:{tint:new x(1.02,.98,1.04),contrast:1.045,saturation:.9,lift:0},approach:{tint:new x(.98,.98,1.06),contrast:1.05,saturation:.98,lift:0},disk:{tint:new x(.98,.95,1.06),contrast:1.05,saturation:1.12,lift:.005},star:{tint:new x(1.08,1,.92),contrast:1.04,saturation:1.08,lift:0},system:{tint:new x(1.05,1,.95),contrast:1.03,saturation:1.06,lift:0},earth:{tint:new x(.98,1,1.05),contrast:1.04,saturation:1.08,lift:0},descent:{tint:new x(1.12,.97,.88),contrast:1.02,saturation:1.04,lift:.01},exodus:{tint:new x(1.1,.95,.9),contrast:1.05,saturation:1.02,lift:0},scale:{tint:new x(.97,.99,1.06),contrast:1.06,saturation:1,lift:0},finale:{tint:new x(.96,.98,1.04),contrast:1.1,saturation:.96,lift:0}},Ge=[n("exodus",.14),n("exodus",.24),n("exodus",.38),n("exodus",.5)];function Ba({quality:e}){const t=f.useRef(null),a=f.useCallback(m=>{t.current=m instanceof ra?m:null},[]),o=f.useRef(null),r=f.useRef(null),i=f.useMemo(()=>new x(1,1,1),[]),u=f.useRef({contrast:1.05,saturation:1.05,lift:0,blur:0,focus:.02});W((m,l)=>{const c=Math.min(.05,l),p=g.eased;t.current&&(t.current.intensity=G(.18,e==="low"?.5:.58,E(n("approach",0),n("disk",0),p)));const v=ht[g.chapter]??ht.origin;i.lerp(v.tint,1-Math.exp(-1.6*c)),u.current.contrast=H(u.current.contrast,v.contrast,1.6,c),u.current.saturation=H(u.current.saturation,v.saturation,1.6,c),u.current.lift=H(u.current.lift,v.lift,1.6,c),r.current&&(r.current.uniforms.get("uTint").value.copy(i),r.current.uniforms.get("uContrast").value=u.current.contrast,r.current.uniforms.get("uSaturation").value=u.current.saturation,r.current.uniforms.get("uLift").value=u.current.lift,r.current.uniforms.get("uLaunch").value=g.reduced?0:g.launch);const w=K(p,Ge[0],Ge[1],Ge[2],Ge[3]),h=g.reduced?0:Se(w*.26+g.speed*.034+g.launch*.4,0,.7);u.current.blur=H(u.current.blur,h,5,c),o.current&&(o.current.uniforms.get("uAmount").value=u.current.blur)});const d=f.useMemo(()=>new St(26e-5,42e-5),[]);return e==="low"?s.jsxs(lt,{frameBufferType:Xe,multisampling:0,children:[s.jsx(ut,{ref:a,intensity:.18,luminanceThreshold:.75,luminanceSmoothing:.9,mipmapBlur:!0,radius:.7}),s.jsx(mt,{ref:r}),s.jsx(dt,{eskil:!1,offset:.24,darkness:.68}),s.jsx(ct,{mode:ft.ACES_FILMIC})]}):s.jsxs(lt,{frameBufferType:Xe,multisampling:0,children:[s.jsx(ut,{ref:a,intensity:.18,luminanceThreshold:.72,luminanceSmoothing:.92,mipmapBlur:!0,radius:.8}),s.jsx(Wa,{ref:o}),s.jsx(pa,{blendFunction:Ae.NORMAL,offset:d,radialModulation:!0,modulationOffset:.58}),s.jsx(mt,{ref:r}),s.jsx(va,{premultiply:!0,blendFunction:Ae.OVERLAY,opacity:.16}),s.jsx(dt,{eskil:!1,offset:.22,darkness:.72}),s.jsx(ct,{mode:ft.ACES_FILMIC})]})}let pe=null;function kt(){if(pe)return pe;if(typeof navigator>"u"||typeof window>"u")return pe="high",pe;const e=navigator.hardwareConcurrency??4,t=navigator.deviceMemory??4,a=window.matchMedia("(pointer: coarse)").matches,o=Math.min(window.innerWidth,window.innerHeight)<760;return pe=e<=4||t<=4||a&&o?"low":"high",pe}function V(e,t){return kt()==="low"?t:e}const Ke=new Map;function fe(e,t,a){f.useEffect(()=>{const o=t.current;if(o)return Ke.set(e,{id:e,root:o,visibleAt:a}),()=>{Ke.delete(e)}},[e,t,a])}function Va(){return[...Ke.values()]}const pt=4e3;function Ha(e){const t=new Set,a=[];for(let o=0;o<=pt;o+=1){const r=o/pt,i=e.filter(d=>d.visibleAt(r)),u=i.map(d=>d.id).join("+");i.length>0&&!t.has(u)&&(t.add(u),a.push(i))}return a}class Ua extends sa{constructor(t){super(),this.stage=t}traverse(t){this.stage.traverse(t)}traverseVisible(){}}function Ct(e,t,a){const o=e.map(r=>r.root.visible);for(const r of e)r.root.visible=t.includes(r);try{return a()}finally{e.forEach((r,i)=>{r.root.visible=o[i]})}}function $a(e,t){const a=[],o=[];for(const r of e)r.traverse(i=>{i!==r&&!i.visible&&(i.visible=!0,a.push(i)),i.frustumCulled&&(i.frustumCulled=!1,o.push(i))});try{return t()}finally{for(const r of a)r.visible=!1;for(const r of o)r.frustumCulled=!0}}function Tt(e,t,a){const o=e.getRenderTarget();e.setRenderTarget(t);try{return a()}finally{e.setRenderTarget(o)}}function Ya(e){const t=e.material;return t?Array.isArray(t)?t:[t]:[]}function Xa(e){const t=new Set,a=o=>{o&&o.isTexture&&t.add(o)};return e.traverse(o=>{for(const r of Ya(o)){Object.values(r).forEach(a);const i=r.uniforms;i&&Object.values(i).forEach(u=>a(u.value))}}),[...t]}function qa(){return new na(1,1,{type:Xe,depthBuffer:!0,stencilBuffer:!1})}function Ja(e,t){return Ct(e.stages,t,()=>Tt(e.renderer,e.target,()=>Promise.all(t.map(a=>e.renderer.compileAsync(new Ua(a.root),e.camera,e.scene)))))}function Ka(e,t){Ct(e.stages,t,()=>$a(t.map(a=>a.root),()=>Tt(e.renderer,e.target,()=>e.renderer.render(e.scene,e.camera))))}const Za=400,Qa=24;function eo(){return new Promise(e=>{typeof requestIdleCallback=="function"?requestIdleCallback(()=>e(),{timeout:Za}):setTimeout(e,Qa)})}function to(){const e=ie(o=>o.gl),t=ie(o=>o.scene),a=ie(o=>o.camera);return f.useEffect(()=>{let o=!1;const r=qa(),i=new Set,u=async()=>(await eo(),!o);return(async()=>{for(;!g.ready;)if(!await u())return;await ia();const m=Va(),l={renderer:e,scene:t,camera:a,target:r,stages:m};for(const c of Ha(m)){if(!await u())return;await Ja(l,c);for(const p of c)for(const v of Xa(p.root))if(!i.has(v)){if(i.add(v),!await u())return;e.initTexture(v)}if(!await u())return;Ka(l,c)}})().catch(()=>{}),()=>{o=!0,r.dispose()}},[e,t,a]),null}const Gt=`
  attribute vec3 aColor;
  attribute float aSize;
  attribute float aSeed;

  uniform float uTime;
  uniform float uScale;
  uniform float uTwinkle;
  /** Stars closer than this fade out, so the camera never flies into a sprite. */
  uniform float uNearFade;
  uniform float uFarFade;
  /**
   * 0 draws the point at a constant size on screen, 1 shrinks it with distance.
   * A background star really is at infinity and must not shrink as the camera
   * crosses nine thousand units; a star inside the galaxy the camera is flying
   * through must. One shader, both populations, one uniform between them.
   */
  uniform float uAttenuate;
  /** Distance at which aSize equals its size in pixels. */
  uniform float uAtten;
  /**
   * Largest a point may ever be drawn, in pixels. A star is a point source: past
   * a few pixels it stops looking like one and starts looking like a cotton
   * ball, which is exactly what happens when a camera flies into a dense field.
   * The near fade then dissolves it rather than letting it grow.
   */
  uniform float uMaxSize;
  uniform float uHighlights;
  uniform float uSubpixelFade;

  varying vec3 vColor;
  varying float vAlpha;
  varying float vHighlight;

  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float dist = -mv.z;

    float twinkle = 1.0 + uTwinkle * sin(uTime * (0.7 + aSeed * 2.3) + aSeed * 43.0) * 0.5;
    float falloff = mix(1.0, uAtten / max(dist, 0.6), uAttenuate);
    vHighlight = step(3.0, aSize) * uHighlights;
    float diameter = aSize * uScale * twinkle * falloff * (1.0 + vHighlight);
    gl_PointSize = clamp(diameter, 1.0, uMaxSize);

    // Two-sided depth fade. Near: dissolve before a star can become a blob.
    // Far: let the population thin out instead of ending at a hard shell.
    float near = smoothstep(uNearFade * 0.25, uNearFade, dist);
    float far = 1.0 - smoothstep(uFarFade * 0.55, uFarFade, dist);

    vColor = aColor;
    // A subpixel source covers only part of its minimum one-pixel raster.
    // Preserve that coverage instead of turning distant stars into bright grit.
    float coverage = mix(1.0, min(1.0, diameter * diameter), uSubpixelFade);
    vAlpha = near * far * twinkle * coverage;
    gl_Position = projectionMatrix * mv;
  }
`,ao=`
  uniform float uFade;
  uniform float uGain;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vHighlight;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float r = dot(uv, uv) * 4.0;
    if (r > 1.0) discard;

    // A tight core inside a wide halo: one falloff alone looks either like a
    // hard pellet or like fog. Two, summed, look like a star.
    float core = pow(1.0 - r, 6.0);
    float halo = pow(1.0 - r, 1.6) * 0.35;
    float spikes = 0.0;
    if (vHighlight > .5) spikes = exp(-abs(uv.x) * 90.0) + exp(-abs(uv.y) * 90.0);
    float a = (core + halo + spikes * pow(1.0 - r, 3.0) * vHighlight * .24) * vAlpha * uFade;
    if (a < 0.004) discard;

    gl_FragColor = vec4(vColor * uGain * (1.0 + vHighlight * 3.0), a);
  }
`;function oe(e={}){return new U({uniforms:{uTime:{value:0},uScale:{value:e.scale??1},uTwinkle:{value:e.twinkle??0},uNearFade:{value:e.nearFade??6},uFarFade:{value:e.farFade??4e3},uFade:{value:1},uGain:{value:e.gain??1},uAttenuate:{value:e.attenuate===!1?0:1},uAtten:{value:e.atten??320},uMaxSize:{value:e.maxSize??9},uHighlights:{value:e.highlights?1:0},uSubpixelFade:{value:e.subpixelFade?1:0}},vertexShader:Gt,fragmentShader:ao,transparent:!0,depthWrite:!1,blending:Z})}const oo=`
  uniform float uFade;
  uniform vec3 uTint;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float r = dot(uv, uv) * 4.0;
    if (r > 1.0) discard;
    float a = pow(1.0 - r, 2.2) * vAlpha * uFade;
    if (a < 0.004) discard;
    gl_FragColor = vec4(vColor * uTint, a);
  }
`;function ro(e,t={}){return new U({uniforms:{uTime:{value:0},uScale:{value:t.scale??1},uTwinkle:{value:0},uNearFade:{value:t.nearFade??12},uFarFade:{value:t.farFade??4e3},uFade:{value:1},uGain:{value:1},uAttenuate:{value:1},uAtten:{value:t.atten??320},uMaxSize:{value:t.maxSize??90},uHighlights:{value:0},uSubpixelFade:{value:0},uTint:{value:new x(e)}},vertexShader:Gt,fragmentShader:oo,transparent:!0,depthWrite:!1,blending:Ft})}const no=`
  attribute vec3 aColor;
  attribute float aSeed;
  /** 0 for the head vertex of a segment, 1 for the tail. */
  attribute float aTail;

  uniform float uWarp;
  uniform vec3 uDir;
  uniform float uLength;

  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    // Nearer streaks (bigger seed here doubles as a depth rank) accelerate
    // first, so the layers separate instead of moving as one sheet.
    float lead = mix(0.55, 1.6, aSeed);
    float stretch = uWarp * lead;
    vec3 p = position - uDir * (aTail * uLength * stretch);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vColor = aColor;
    vAlpha = (1.0 - aTail * 0.85) * smoothstep(0.0, 0.18, uWarp);
    gl_Position = projectionMatrix * mv;
  }
`,so=`
  uniform float uFade;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float a = vAlpha * uFade;
    if (a < 0.004) discard;
    gl_FragColor = vec4(vColor, a);
  }
`;function io(){return new U({uniforms:{uWarp:{value:0},uDir:{value:null},uLength:{value:60},uFade:{value:1}},vertexShader:no,fragmentShader:so,transparent:!0,depthWrite:!1,blending:Z})}const lo=`
  uniform float uSize;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    mv.xy += position.xy * uSize;
    gl_Position = projectionMatrix * mv;
  }
`,uo=`
  uniform vec3 uColor;
  uniform float uIntensity;
  uniform float uFalloff;
  uniform float uHalo;
  varying vec2 vUv;

  void main() {
    float r = length(vUv - 0.5) * 2.0;
    if (r > 1.0) discard;
    float core = pow(1.0 - r, uFalloff);
    float halo = pow(1.0 - r, 1.25) * uHalo;
    float a = (core + halo) * uIntensity;
    if (a < 0.002) discard;
    gl_FragColor = vec4(uColor, a);
  }
`;function vt(e){return new U({uniforms:{uColor:{value:new x(e.color)},uSize:{value:e.size},uIntensity:{value:e.intensity??1},uFalloff:{value:e.falloff??4},uHalo:{value:e.halo??.16}},vertexShader:lo,fragmentShader:uo,transparent:!0,depthWrite:!1,blending:Z,toneMapped:!1})}const co=`
  varying float vDepth;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,fo=`
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uNear;
  uniform float uFar;
  varying float vDepth;

  void main() {
    float a = uOpacity * (1.0 - smoothstep(uNear, uFar, vDepth));
    if (a < 0.003) discard;
    gl_FragColor = vec4(uColor, a);
  }
`;function et(e,t,a){return new U({uniforms:{uColor:{value:new x(e)},uOpacity:{value:0},uNear:{value:t},uFar:{value:a}},vertexShader:co,fragmentShader:fo,transparent:!0,depthWrite:!1,blending:Z})}const Be={near:1.1,far:1.85};function mo(e){return E(Be.near,Be.far,e)}const ho=`
  varying vec3 vLocal, vEye;
  void main() {
    vLocal = position;
    vEye = (inverse(modelMatrix) * vec4(cameraPosition, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,po=`
  varying vec3 vLocal, vEye;
  uniform float uFade, uPitch, uPhase, uInner, uResolveNear, uResolveFar;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1,0)), f.x),
      mix(hash(i + vec2(0,1)), hash(i + 1.0), f.x), f.y);
  }
  vec4 density(vec3 p) {
    float r = length(p.xz);
    if (r > 1.0) return vec4(0);
    float theta = atan(p.z, p.x + .000001);
    float phase = uPhase + log(max(r, .001) / uInner) / uPitch;
    float broad = noise(p.xz * 9.0 + 11.0);
    float detail = noise(p.xz * 390.0);
    float flow = (broad - .5) * .28;
    float majorGap = sin(theta - phase + flow);
    float minorGap = cos(theta - phase + flow);
    // Stretch structure along the spiral flow, instead of a screen-filling
    // field of equally round cloudlets. Azimuth terms break pair symmetry.
    vec2 stream = vec2(r * 72.0 + cos(theta) * 4.0,
      majorGap * 32.0 + sin(theta) * 4.0);
    float grain = noise(stream + 11.0) * .2 + noise(stream * 2.03 + 11.0) * .12;
    grain += noise(p.xz * 85.0 + 11.0) * .44 + noise(p.xz * 180.0 + 11.0) * .24;
    float arm = exp(-majorGap * majorGap / .15) + exp(-minorGap * minorGap / .065) * .32;
    float armGate = smoothstep(.14, .28, r) * (1.0 - smoothstep(.72, 1.0, r));
    arm *= armGate;

    // Filamentary extinction sits on the leading side of the luminous arms.
    // Domain-warped ridges and sub-pixel grain avoid a smooth neon spiral.
    float laneGap = sin(theta - phase + flow + .065 + (grain - .5) * .12);
    float lane = exp(-laneGap * laneGap / .004) * armGate;
    float filaments = pow(1.0 - abs(grain * 2.0 - 1.0), 5.0);
    float dust = lane * (.35 + filaments * 1.1) + arm * filaments * .2;
    float knots = smoothstep(.36, .75, grain);
    float edge = 1.0 - smoothstep(.72, 1.0, r);
    float disk = exp(-r * 4.5) * edge;
    float core = exp(-r * r / .0045);
    vec2 axis = vec2(cos(uPhase), sin(uPhase));
    float along = dot(p.xz, axis), across = dot(p.xz, vec2(-axis.y, axis.x));
    float bar = exp(-along * along / .028 - across * across / .0012);
    vec3 light = vec3(.74, .71, .68) * disk * .38;
    vec3 armColor = mix(vec3(.9, .67, .43), vec3(.46, .61, .76), smoothstep(.2, .85, r));
    light += armColor * arm * (.24 + knots * .85) * (.68 + detail * .5) * .44;
    light += vec3(1.0, .7, .4) * (core * .34 + bar * .08);
    light += vec3(.8, .17, .24) * arm * smoothstep(.66, .78, grain) * .35;
    float stellarHeight = exp(-abs(p.y) / .003);
    float coreHeight = exp(-abs(p.y) / .012);
    light *= mix(stellarHeight, coreHeight, clamp(core + bar * .25, 0.0, 1.0));
    return vec4(light, (dust * 5.0 + disk * .15) * exp(-abs(p.y) / .003));
  }

  void main() {
    float farField = smoothstep(uResolveNear, uResolveFar, length(vEye));
    if (uFade * farField < .001) discard;
    vec3 ray = normalize(vLocal - vEye);
    vec3 inv = 1.0 / (sign(ray) * max(abs(ray), vec3(.00001)) + .0000001);
    vec3 a = (vec3(-1,-.03,-1) - vEye) * inv;
    vec3 b = (vec3(1,.03,1) - vEye) * inv;
    vec3 lo = min(a,b), hi = max(a,b);
    float start = max(0.0, max(lo.x, max(lo.y,lo.z)));
    float end = min(hi.x,min(hi.y,hi.z));
    if (end <= start) discard;
    float stepLength = (end - start) / float(VOLUME_SAMPLES);
    // Grazing rays can span the whole disk with too few samples to resolve its
    // thin density profile. Hand those rays to the star field, not banded fog.
    float sampling = 1.0 - smoothstep(.012, .04, stepLength);
    float weight = uFade * farField * sampling;
    if (weight < .001) discard;
    // A bounded per-pixel offset prevents visible slices without animated noise.
    float jitter = (hash(gl_FragCoord.xy) - .5) * .5;
    vec3 light = vec3(0);
    float transmission = 1.0;
    for (int i = 0; i < VOLUME_SAMPLES; i++) {
      vec3 p = vEye + ray * (start + (float(i) + .5 + jitter) * stepLength);
      vec4 field = density(p);
      float extinction = field.a * 60.0 + .001;
      float absorbed = 1.0 - exp(-extinction * stepLength);
      light += transmission * field.rgb * absorbed / extinction * 110.0;
      transmission *= 1.0 - absorbed;
    }
    // Fade emission AND extinction. Leaving opacity active would still hide
    // nearby stars behind an invisible coarse disk during the handover.
    float opacity = (1.0 - transmission) * weight;
    gl_FragColor = vec4(light * weight, opacity);
  }
`;function vo(e){return new U({vertexShader:ho,fragmentShader:`#define VOLUME_SAMPLES ${e}
${po}`,uniforms:{uFade:{value:1},uPitch:{value:ve.pitch},uPhase:{value:ve.phase},uInner:{value:ve.inner},uResolveNear:{value:Be.near},uResolveFar:{value:Be.far}},transparent:!0,premultipliedAlpha:!0,depthWrite:!1,side:Ze,blending:Ft,toneMapped:!1})}const Et=[{name:"andromeda",at:[2300,620,-2900],radius:430,tilt:[.55,.4,.22],core:"#ffe6bd",mid:"#cdd8ff",outer:"#7f9dff",arms:2,spread:.16,counts:[16e3,5200,2400],seed:31},{name:"triangulum",at:[-2600,-520,-3600],radius:250,tilt:[-.3,1.1,-.5],core:"#ffe0c8",mid:"#bcd0ff",outer:"#6f8dff",arms:3,spread:.22,counts:[8e3,1800,1200],seed:32},{name:"lmc",at:[-880,-470,560],radius:120,tilt:[.9,-.3,.7],core:"#dfe7ff",mid:"#a9c2ff",outer:"#7fa8ff",arms:1,spread:.5,counts:[5200,900,700],seed:33},{name:"smc",at:[-1260,-620,880],radius:74,tilt:[.2,.8,-.4],core:"#e6ecff",mid:"#b6c8ff",outer:"#8fa9ff",arms:1,spread:.6,counts:[3e3,500,400],seed:34},{name:"far",at:[3400,-900,-5200],radius:320,tilt:[-.7,.2,.9],core:"#ffd9b0",mid:"#c3cfff",outer:"#6d86e8",arms:2,spread:.2,counts:[7e3,1600,900],seed:35}],O={milkyWay:"cosmos.milkyWay",milkyWayDust:"cosmos.milkyWayDust",neighbour:e=>`cosmos.neighbour.${e}`,marsNear:"surface.near",marsFar:"surface.far",moonNear:"finale.near",moonFar:"finale.far"},go=Math.tan(20*Math.PI/180);function yo(){const e={[O.milkyWay]:{kind:"detailedGalaxy",options:{radius:ne,count:V(11e4,42e3)}},[O.milkyWayDust]:{kind:"galaxyDust",options:{radius:ne,arms:4,pitch:ve.pitch,disk:0,bulge:0,halo:0,count:V(26e3,9e3),seed:12}},[O.marsNear]:{kind:"terrain",options:{size:700,segments:V(320,190),amplitude:7.4,frequency:.016,clearing:5,seed:17,edgeTaper:!0}},[O.marsFar]:{kind:"terrain",options:{size:9e3,segments:V(330,200),amplitude:96,frequency:.0016,clearing:235,seed:23}},[O.moonNear]:{kind:"terrain",options:{size:620,segments:V(320,190),amplitude:4.2,frequency:.019,clearing:5,craters:34,seed:29,edgeTaper:!0}},[O.moonFar]:{kind:"terrain",options:{size:9e3,segments:V(260,170),amplitude:26,frequency:.0022,clearing:300,craters:22,seed:31}}};for(const t of Et)e[O.neighbour(t.name)]={kind:"galaxy",options:{radius:t.radius,arms:t.arms,pitch:go,disk:V(t.counts[0],Math.round(t.counts[0]*.4)),bulge:V(t.counts[1],Math.round(t.counts[1]*.4)),halo:V(t.counts[2],Math.round(t.counts[2]*.4)),spread:t.spread,interArm:.3,core:t.core,mid:t.mid,outer:t.outer,seed:t.seed,sizeBias:.8}};return e}const xo=n("approach",.15),wo=n("disk",.15),Mo=n("star",.22),Pt=n("star",1),gt=e=>e<Pt+.01;function bo({geometry:e}){const t=f.useRef(null),a=f.useRef(null),o=f.useRef(null),r=f.useRef(null),i=f.useRef(null),u=f.useRef(null),d=f.useRef(null),m=f.useRef(null);fe("cosmos",t,gt);const l=f.useMemo(()=>({stars:le(e,O.milkyWay),dust:le(e,O.milkyWayDust),starMat:oe({scale:1,twinkle:.06,nearFade:46,farFade:9e3,gain:.7,atten:900,maxSize:6,highlights:!0,subpixelFade:!0}),dustMat:ro("#1a1224",{scale:1,nearFade:40,farFade:3e3,atten:900,maxSize:24})}),[e]),c=f.useMemo(()=>Et.map(h=>({...h,geometry:le(e,O.neighbour(h.name)),material:oe({scale:1,twinkle:.2,nearFade:0,farFade:2e4,gain:.72,atten:1400,maxSize:4})})),[e]),p=f.useMemo(()=>la(),[]),v=f.useMemo(()=>vo(V(24,16)),[]);f.useEffect(()=>()=>v.dispose(),[v]);const w=f.useMemo(()=>new x("#ffd9a0"),[]);return W(({camera:h},b)=>{const M=g.eased,y=g.time,j=gt(M);if(t.current&&(t.current.visible=j),!j)return;if(d.current&&!g.reduced){const F=1-E(n("approach",0),n("disk",0),M);d.current.rotation.y+=Math.min(b,.05)*.0018*F}const S=1-E(Mo,Pt,M),A=E(n("origin",.75),n("approach",.1),M)*(1-E(xo,wo,M));l.starMat.uniforms.uTime.value=g.reduced?0:y,l.starMat.uniforms.uFade.value=S;const z=E(n("approach",.5),n("disk",.4),M);if(l.starMat.uniforms.uGain.value=G(.42,.8,z),l.starMat.uniforms.uScale.value=G(.8,.72,z),l.dustMat.uniforms.uTime.value=y,l.dustMat.uniforms.uFade.value=S*z,v.uniforms.uFade.value=S,m.current){const F=h.position.distanceTo(se)/ne;m.current.visible=S*mo(F)>.001}if(i.current){const F=g.reduced?1:1+Math.sin(y*.4)*.03,T=ne*.35*F*G(1,.22,z);i.current.scale.set(T,T,1),i.current.material.opacity=S*G(.025,.14,z)}if(c.forEach(F=>{F.material.uniforms.uTime.value=y,F.material.uniforms.uFade.value=A}),a.current&&(a.current.visible=A>.01),u.current){const F=K(M,n("disk",.16),n("disk",.3),n("disk",.9),n("star",.14));u.current.visible=F>.01;const T=1+Math.sin(y*1.6)*.14;u.current.scale.setScalar(F*T*5.4);const P=u.current.children[0];P&&(P.material.opacity=ue(F))}}),s.jsxs("group",{ref:t,children:[s.jsx("group",{ref:a,children:c.map(h=>s.jsx("points",{geometry:h.geometry,material:h.material,position:h.at,rotation:h.tilt,frustumCulled:!1},h.name))}),s.jsxs("group",{position:[se.x,se.y,se.z],children:[s.jsxs("group",{ref:d,children:[s.jsx("points",{ref:o,geometry:l.stars,material:l.starMat,frustumCulled:!1}),s.jsx("points",{ref:r,rotation:[0,-.65,0],geometry:l.dust,material:l.dustMat,frustumCulled:!1}),s.jsxs("mesh",{ref:m,scale:ne,renderOrder:1,children:[s.jsx("boxGeometry",{args:[2,.06,2]}),s.jsx("primitive",{object:v,attach:"material"})]})]}),s.jsx("sprite",{ref:i,scale:[ne,ne,1],children:s.jsx("spriteMaterial",{map:p,color:"#ffdca6",transparent:!0,depthWrite:!1,blending:Z,opacity:.85})})]}),s.jsx("group",{ref:u,position:[D.x,D.y,D.z],visible:!1,children:s.jsx("sprite",{scale:[1,1,1],children:s.jsx("spriteMaterial",{map:p,color:w,transparent:!0,depthWrite:!1,blending:Z})})})]})}const So=`
  varying vec3 vWorld;
  varying vec3 vNormal;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Ao=`
  uniform vec3 uSun;
  uniform vec3 uDay;
  uniform vec3 uSunset;
  uniform vec3 uNight;
  uniform float uIntensity;
  uniform float uPower;
  uniform float uInside;
  uniform float uFade;

  varying vec3 vWorld;
  varying vec3 vNormal;

  void main() {
    vec3 N = normalize(vNormal);
    vec3 V = normalize(cameraPosition - vWorld);

    // Optical depth stand-in: grazing angles look through much more air.
    float rim = pow(1.0 - abs(dot(N, V)), uPower);

    float sun = dot(N, uSun);
    float day = smoothstep(-0.32, 0.30, sun);
    // A narrow band around the terminator, where the path length is longest and
    // the short wavelengths have already been scattered out: sunrise colour.
    float dusk = exp(-sun * sun * 20.0);

    // Forward scattering toward the star.
    float mu = max(dot(-V, uSun), 0.0);
    float mie = pow(mu, 9.0);

    vec3 col = mix(uNight, uDay, day);
    col = mix(col, uSunset, dusk * 0.55);
    col += uDay * mie * 0.55 * day;
    col += uSunset * mie * dusk * 0.6;

    // Outside, only the limb is lit. Inside, the whole shell is the sky.
    float shell = mix(rim, mix(rim, 1.0, 0.85), uInside);
    float alpha = shell * uIntensity * (0.18 + 0.92 * day) * uFade;

    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
  }
`;function Ve(e={}){const t=e.inner??!1;return new U({uniforms:{uSun:{value:new C(1,0,0)},uDay:{value:new x(e.day??"#5b9bff")},uSunset:{value:new x(e.sunset??"#ff9558")},uNight:{value:new x(e.night??"#0a1a3a")},uIntensity:{value:e.intensity??1},uPower:{value:e.power??(t?1.6:2.6)},uInside:{value:0},uFade:{value:1}},vertexShader:So,fragmentShader:Ao,transparent:!0,depthWrite:!1,side:t?ua:Ze,blending:t?Z:Z})}const Fo=`
  varying vec2 vUv;
  varying vec3 vWorld;
  void main() {
    vUv = uv;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,jo=`
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uDensity;
  uniform float uFade;
  uniform float uScale;
  uniform float uSpeed;

  varying vec2 vUv;
  varying vec3 vWorld;

  vec3 hash3(vec3 p) {
    p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
             dot(p, vec3(269.5, 183.3, 246.1)),
             dot(p, vec3(113.5, 271.9, 124.6)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    vec3 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(dot(hash3(i + vec3(0,0,0)), f - vec3(0,0,0)), dot(hash3(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
          mix(dot(hash3(i + vec3(0,1,0)), f - vec3(0,1,0)), dot(hash3(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
      mix(mix(dot(hash3(i + vec3(0,0,1)), f - vec3(0,0,1)), dot(hash3(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
          mix(dot(hash3(i + vec3(0,1,1)), f - vec3(0,1,1)), dot(hash3(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y),
      u.z);
  }

  float fbm(vec3 p) {
    float total = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 5; i++) {
      total += noise(p) * amp;
      p *= 2.02;
      amp *= 0.5;
    }
    return total;
  }

  void main() {
    vec2 c = vUv - 0.5;
    float envelope = 1.0 - smoothstep(0.18, 0.5, length(c));
    if (envelope <= 0.001) discard;

    vec3 p = vec3(vUv * uScale, uTime * uSpeed);
    float d = fbm(p) * 0.5 + 0.5;
    d = pow(clamp(d, 0.0, 1.0), 1.7);

    float a = d * envelope * uDensity * uFade;
    if (a < 0.003) discard;

    vec3 col = mix(uColorA, uColorB, smoothstep(0.25, 0.8, d));
    gl_FragColor = vec4(col, a);
  }
`;function Ee(e={}){return new U({uniforms:{uTime:{value:0},uColorA:{value:new x(e.colorA??"#2a3f8c")},uColorB:{value:new x(e.colorB??"#9a6bd8")},uDensity:{value:e.density??.5},uFade:{value:1},uScale:{value:e.scale??3},uSpeed:{value:e.speed??.02}},vertexShader:Fo,fragmentShader:jo,transparent:!0,depthWrite:!1,depthTest:!0,blending:Z})}const Ro=[{radius:[420,1100],count:3200,size:2.1,parallax:16,seed:21},{radius:[1200,3e3],count:4400,size:1.5,parallax:7,seed:22},{radius:[3200,7e3],count:5200,size:1.05,parallax:2,seed:23}],Pe=[n("exodus",.14),n("exodus",.24),n("exodus",.38),n("exodus",.5)],_e=[n("descent",.55),n("descent",.79),n("exodus",.06),n("exodus",.18)],zo=[new x("#1d2a63"),new x("#123049")],ko=[new x("#5b3f8f"),new x("#2b6c86")],Co=()=>!0;function To(){const e=ie(h=>h.camera),t=f.useRef(null),a=f.useRef([]),o=f.useRef(null),r=f.useRef(null),i=f.useRef([]);fe("sky",t,Co);const u=f.useMemo(()=>Ro.map(h=>({geometry:ce(Re({count:V(h.count,Math.round(h.count*.45)),inner:h.radius[0],outer:h.radius[1],seed:h.seed,size:h.size})),material:oe({scale:1,twinkle:.35,nearFade:0,farFade:4e4,gain:1.1,attenuate:!1}),parallax:h.parallax})),[]),d=f.useMemo(()=>{const h=io();return h.uniforms.uDir.value=new C,{geometry:Sa(V(1500,700),560),material:h}},[]),m=f.useMemo(()=>[{at:[-900,280,-1600],size:2600,rot:.4,mat:Ee({colorA:"#1d2a63",colorB:"#5b3f8f",density:.3,scale:2.6,speed:.008})},{at:[1400,-420,-2600],size:3200,rot:-.7,mat:Ee({colorA:"#123049",colorB:"#2b6c86",density:.22,scale:2.1,speed:.006})},{at:[300,700,1900],size:2800,rot:1.1,mat:Ee({colorA:"#3a1c46",colorB:"#7c3f6a",density:.2,scale:3.1,speed:.005})},{at:[-1700,-600,900],size:2400,rot:2.2,mat:Ee({colorA:"#101c3c",colorB:"#3d5aa0",density:.24,scale:2.4,speed:.007})}],[]),l=f.useMemo(()=>new C,[]),c=f.useMemo(()=>new x,[]),p=f.useMemo(()=>new x,[]),v=f.useMemo(()=>new x("#33161b"),[]),w=f.useMemo(()=>new x("#6d3a2c"),[]);return W(()=>{const h=g.eased,b=g.time;t.current&&t.current.position.copy(e.position);const M=K(h,_e[0],_e[1],_e[2],_e[3]),y=E(n("finale",0),n("finale",.2),h),j=(1-M*.92)*G(1,1.25,y);u.forEach((A,z)=>{const F=a.current[z];if(!F)return;F.position.set(-g.pointer.x*A.parallax,g.pointer.y*A.parallax,0);const T=A.material;T.uniforms.uTime.value=b,T.uniforms.uFade.value=j;const P=E(n("origin",.55),n("approach",.35),h);T.uniforms.uGain.value=G(.35,1.1,P)+.22*E(n("exodus",.5),n("exodus",1),h),F.visible=j>.02});const S=K(h,Pe[0],Pe[1],Pe[2],Pe[3]);if(o.current&&(e.getWorldDirection(l),d.material.uniforms.uDir.value.copy(l).multiplyScalar(-1),d.material.uniforms.uWarp.value=g.reduced?S*.25:S,d.material.uniforms.uLength.value=78,d.material.uniforms.uFade.value=S*2.1,o.current.visible=S>.01),r.current){const A=E(n("exodus",.45),n("exodus",.95),h);r.current.rotation.y=b*.002,m.forEach((z,F)=>{i.current[F]?.lookAt(e.position),z.mat.uniforms.uTime.value=b,z.mat.uniforms.uFade.value=ue(j*(F===1?1:.85)),c.copy(zo[F%2]).lerp(v,A),p.copy(ko[F%2]).lerp(w,A),z.mat.uniforms.uColorA.value.copy(c),z.mat.uniforms.uColorB.value.copy(p)})}}),s.jsxs("group",{ref:t,children:[u.map((h,b)=>s.jsx("points",{ref:M=>{a.current[b]=M},geometry:h.geometry,material:h.material,frustumCulled:!1},b)),s.jsx("lineSegments",{ref:o,geometry:d.geometry,material:d.material,frustumCulled:!1,visible:!1}),s.jsx("group",{ref:r,children:m.map((h,b)=>s.jsx("mesh",{ref:M=>{i.current[b]=M},position:[h.at[0],h.at[1],h.at[2]],material:h.mat,frustumCulled:!1,children:s.jsx("planeGeometry",{args:[h.size,h.size]})},b))})]})}const Go=`
  varying vec3 vDir;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vDir = normalize(world.xyz - cameraPosition);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Eo=`
  uniform vec3 uHorizon;
  uniform vec3 uZenith;
  uniform vec3 uSunTint;
  uniform vec3 uSunDir;
  uniform float uFade;
  uniform float uHaze;
  varying vec3 vDir;

  void main() {
    vec3 d = normalize(vDir);
    float up = clamp(d.y * 0.5 + 0.5, 0.0, 1.0);

    // Air mass: looking along the ground passes through far more of it.
    float mass = pow(1.0 - clamp(d.y, 0.0, 1.0), 2.4);
    vec3 col = mix(uZenith, uHorizon, mass);

    float mu = max(dot(d, uSunDir), 0.0);
    // A tight disc inside a broad glow inside a wide wash: that is what a star
    // seen through dust actually looks like.
    col += uSunTint * pow(mu, 220.0) * 3.4;
    col += uSunTint * pow(mu, 14.0) * 0.5;
    col += uSunTint * pow(mu, 3.0) * 0.16 * uHaze;

    // Ground bounce keeps the lower sky from going flat under the horizon line.
    col = mix(col, uHorizon * 0.75, smoothstep(0.5, 0.36, up));

    gl_FragColor = vec4(col, uFade);
  }
`;function Po(e){return new U({uniforms:{uHorizon:{value:new x(e.horizon)},uZenith:{value:new x(e.zenith)},uSunTint:{value:new x(e.sun)},uSunDir:{value:new C(.4,.22,-.89).normalize()},uFade:{value:1},uHaze:{value:e.haze??1}},vertexShader:Go,fragmentShader:Eo,side:Ze,depthWrite:!1,transparent:!0})}const _o=`
  varying vec3 vPos;
  varying vec3 vNormal;
  varying vec3 vWorld;
  void main() {
    vPos = position;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Lo=`
  uniform vec3 uLow;
  uniform vec3 uHigh;
  uniform vec3 uSea;
  uniform vec3 uIce;
  uniform vec3 uNightGlow;
  uniform vec3 uSun;
  uniform float uSeaLevel;
  uniform float uIceCap;
  uniform float uRough;
  uniform float uScale;
  uniform float uTime;

  varying vec3 vPos;
  varying vec3 vNormal;
  varying vec3 vWorld;

  vec3 hash3(vec3 p) {
    p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
             dot(p, vec3(269.5, 183.3, 246.1)),
             dot(p, vec3(113.5, 271.9, 124.6)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }
  float noise(vec3 p) {
    vec3 i = floor(p); vec3 f = fract(p);
    vec3 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(dot(hash3(i), f), dot(hash3(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
          mix(dot(hash3(i + vec3(0,1,0)), f - vec3(0,1,0)), dot(hash3(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
      mix(mix(dot(hash3(i + vec3(0,0,1)), f - vec3(0,0,1)), dot(hash3(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
          mix(dot(hash3(i + vec3(0,1,1)), f - vec3(0,1,1)), dot(hash3(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y),
      u.z);
  }
  float fbm(vec3 p, int octaves) {
    float total = 0.0; float amp = 0.5;
    for (int i = 0; i < 7; i++) {
      if (i >= octaves) break;
      total += noise(p) * amp;
      p *= 2.03; amp *= 0.5;
    }
    return total;
  }

  void main() {
    vec3 p = normalize(vPos) * uScale;
    // Domain warp: without it the continents are obviously noise; with it they
    // get coastlines that bend back on themselves the way real ones do.
    vec3 warp = vec3(fbm(p + 11.0, 4), fbm(p + 37.0, 4), fbm(p + 73.0, 4));
    float h = fbm(p + warp * 1.6, 6) * 0.5 + 0.5;
    float detail = fbm(p * 5.5, 4) * 0.5 + 0.5;

    float land = smoothstep(uSeaLevel - 0.02, uSeaLevel + 0.02, h);
    vec3 ground = mix(uLow, uHigh, smoothstep(uSeaLevel, 1.0, h) * (0.6 + detail * 0.7));
    vec3 col = mix(uSea, ground, land);

    // Ice follows latitude and altitude together.
    float lat = abs(normalize(vPos).y);
    float ice = smoothstep(uIceCap, uIceCap + 0.22, lat * 0.82 + h * 0.14);
    col = mix(col, uIce, ice);

    vec3 N = normalize(vNormal);
    float sun = dot(N, uSun);
    float day = smoothstep(-0.14, 0.30, sun);
    float dusk = exp(-sun * sun * 22.0);

    // A little light wraps past the terminator, as it does through any
    // atmosphere; a hard cut at the terminator is the giveaway of a lambert
    // sphere with nothing around it.
    float wrap = max((sun + 0.22) / 1.22, 0.0);
    vec3 lit = col * (0.05 + 1.05 * wrap * wrap);
    lit += col * dusk * 0.3;
    lit += uNightGlow * (1.0 - day) * (0.35 + detail * 0.4);

    // A dull sheen on the seas only, so the land never looks wet.
    vec3 V = normalize(cameraPosition - vWorld);
    vec3 H = normalize(V + uSun);
    float spec = pow(max(dot(N, H), 0.0), mix(60.0, 6.0, uRough)) * (1.0 - land) * 0.5;
    lit += vec3(1.0, 0.95, 0.85) * spec * day;

    gl_FragColor = vec4(lit, 1.0);
  }
`;function Ye(e){return new U({uniforms:{uLow:{value:new x(e.low)},uHigh:{value:new x(e.high)},uSea:{value:new x(e.sea)},uIce:{value:new x(e.ice)},uNightGlow:{value:new x(e.nightGlow??"#140a06")},uSun:{value:new C(1,0,0)},uSeaLevel:{value:e.seaLevel??.5},uIceCap:{value:e.iceCap??.72},uRough:{value:e.rough??.4},uScale:{value:e.scale??2.2},uTime:{value:0}},vertexShader:_o,fragmentShader:Lo})}const No=`
  varying vec3 vPos;
  varying vec3 vNormal;
  varying vec3 vWorld;
  void main() {
    vPos = position;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Do=`
  uniform vec3 uLow;
  uniform vec3 uHigh;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform vec3 uAmbient;
  uniform float uFade;
  uniform float uFogDensity;
  uniform vec3 uFogColor;
  uniform float uGrain;

  varying vec3 vPos;
  varying vec3 vNormal;
  varying vec3 vWorld;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  float vnoise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1,0)), u.x),
               mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x), u.y);
  }

  void main() {
    vec3 N = normalize(vNormal);
    float slope = 1.0 - clamp(N.y, 0.0, 1.0);
    float height = clamp(vPos.y * 0.06 + 0.5, 0.0, 1.0);

    float grain = vnoise(vPos.xz * 1.6) * 0.5 + vnoise(vPos.xz * 7.0) * 0.5;
    vec3 albedo = mix(uLow, uHigh, clamp(height * 0.8 + slope * 0.6 + grain * uGrain, 0.0, 1.0));

    float lambert = max(dot(N, uSunDir), 0.0);
    // A little wrap so the shadowed side is dark rather than dead.
    float wrap = max(dot(N, uSunDir) * 0.5 + 0.5, 0.0);
    vec3 lit = albedo * (uSunColor * lambert + uAmbient * wrap * 0.55);

    float dist = length(vWorld - cameraPosition);
    float fog = 1.0 - exp(-dist * uFogDensity);
    lit = mix(lit, uFogColor, clamp(fog, 0.0, 1.0));

    gl_FragColor = vec4(lit, uFade);
  }
`;function _t(e){return new U({uniforms:{uLow:{value:new x(e.low)},uHigh:{value:new x(e.high)},uSunDir:{value:new C(.4,.22,-.89).normalize()},uSunColor:{value:new x(e.sun)},uAmbient:{value:new x(e.ambient)},uFogColor:{value:new x(e.fog)},uFogDensity:{value:e.fogDensity??.0016},uGrain:{value:e.grain??.5},uFade:{value:1}},vertexShader:No,fragmentShader:Do,transparent:!0})}const Lt=Math.PI/180;function tt({radius:e,position:t=[0,0,0],tilt:a=0,spin:o=60,color:r,map:i,bumpMap:u,segments:d=96,roughness:m=.92,metalness:l=.02,tint:c="#ffffff",children:p}){const v=f.useRef(null),w=te(i),h=te(u,!1);return W((b,M)=>{v.current&&!g.reduced&&(v.current.rotation.y+=M*Math.PI*2/o)}),s.jsxs("group",{position:t,rotation:[0,0,a*Lt],children:[s.jsxs("mesh",{ref:v,children:[s.jsx("sphereGeometry",{args:[e,d,d/2]}),s.jsx("meshStandardMaterial",{map:w??void 0,bumpMap:h??void 0,bumpScale:h?e*.02:0,color:w?c:r,roughness:m,metalness:l})]}),p]})}function at({radius:e,position:t=[0,0,0],sunWorld:a,atmosphereScale:o=1}){const r=f.useRef(null),i=f.useRef(null),u=f.useRef(null),d=te(_.earth),m=te(_.earthNormal,!1),l=te(_.earthSpecular,!1),c=te(_.earthLights),p=te(_.earthClouds),v=f.useMemo(()=>Ve({day:"#5c9dff",sunset:"#ff9a5c",night:"#0b1a3c",intensity:1.25,power:2.7}),[]),w=f.useMemo(()=>Ve({day:"#79b4ff",sunset:"#ffb07a",night:"#060f26",intensity:.32,power:1.4,inner:!0}),[]),h=f.useMemo(()=>new C,[]),b=f.useMemo(()=>new C,[]);return W((M,y)=>{g.reduced||(r.current&&(r.current.rotation.y+=y*Math.PI*2/90),i.current&&(i.current.rotation.y+=y*Math.PI*2/74)),u.current&&(u.current.getWorldPosition(b),h.copy(a).sub(b).normalize(),v.uniforms.uSun.value.copy(h),w.uniforms.uSun.value.copy(h))}),s.jsxs("group",{ref:u,position:t,rotation:[0,0,23.4*Lt],children:[s.jsxs("mesh",{ref:r,children:[s.jsx("sphereGeometry",{args:[e,160,80]}),s.jsx("meshStandardMaterial",{map:d??void 0,normalMap:m??void 0,roughnessMap:l??void 0,color:d?"#ffffff":"#3f6fa8",roughness:.86,metalness:.04,emissiveMap:c??void 0,emissive:c?new x("#ffd9a0"):new x("#000000"),emissiveIntensity:c?1.1:0})]}),p?s.jsxs("mesh",{ref:i,scale:1.012,children:[s.jsx("sphereGeometry",{args:[e,96,48]}),s.jsx("meshStandardMaterial",{map:p,alphaMap:p,transparent:!0,opacity:.85,depthWrite:!1,roughness:1})]}):null,s.jsx("mesh",{scale:1.006,material:w,children:s.jsx("sphereGeometry",{args:[e,64,32]})}),s.jsx("mesh",{scale:1.035*o,material:v,children:s.jsx("sphereGeometry",{args:[e,64,32]})})]})}function Io({radius:e,position:t,sunWorld:a,entryRef:o}){const r=f.useRef(null),i=f.useRef(null),u=f.useMemo(()=>Ve({day:"#e08a52",sunset:"#ffc38a",night:"#2a1008",intensity:.85,power:2.2}),[]),d=f.useMemo(()=>new C,[]),m=f.useMemo(()=>new C,[]);return W(()=>{if(!r.current)return;r.current.getWorldPosition(m),d.copy(a).sub(m).normalize(),u.uniforms.uSun.value.copy(d);const l=o.current;u.uniforms.uInside.value=l,u.uniforms.uIntensity.value=.85+l*2.2,i.current?.scale.setScalar(1.05+l*l*34)}),s.jsx("group",{ref:r,children:s.jsx(tt,{radius:e,position:t,tilt:25.2,spin:64,color:"#b1583a",map:_.mars,bumpMap:_.marsBump,segments:128,children:s.jsx("mesh",{ref:i,scale:1.05,material:u,children:s.jsx("sphereGeometry",{args:[e,64,32]})})})})}function Oo({inner:e,outer:t}){const a=te(_.saturnRing),o=f.useMemo(()=>{const r=new ca(e,t,160,1),i=r.attributes.position,u=r.attributes.uv,d=new C;for(let m=0;m<i.count;m+=1){d.fromBufferAttribute(i,m);const l=(d.length()-e)/(t-e);u.setXY(m,l,.5)}return u.needsUpdate=!0,r},[e,t]);return s.jsx("mesh",{geometry:o,rotation:[-Math.PI/2,0,0],children:s.jsx("meshStandardMaterial",{map:a??void 0,color:a?"#ffffff":"#c9b98d",side:fa,transparent:!0,opacity:.92,roughness:1,alphaMap:a??void 0})})}const Wo=`
  varying vec3 vPos;
  varying vec3 vNormal;
  void main() {
    vPos = position;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Bo=`
  uniform float uTime;
  uniform vec3 uHot;
  uniform vec3 uMid;
  uniform vec3 uCool;
  uniform float uGain;
  varying vec3 vPos;
  varying vec3 vNormal;

  vec3 hash3(vec3 p) {
    p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
             dot(p, vec3(269.5, 183.3, 246.1)),
             dot(p, vec3(113.5, 271.9, 124.6)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }
  float noise(vec3 p) {
    vec3 i = floor(p); vec3 f = fract(p);
    vec3 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(dot(hash3(i), f), dot(hash3(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
          mix(dot(hash3(i + vec3(0,1,0)), f - vec3(0,1,0)), dot(hash3(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
      mix(mix(dot(hash3(i + vec3(0,0,1)), f - vec3(0,0,1)), dot(hash3(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
          mix(dot(hash3(i + vec3(0,1,1)), f - vec3(0,1,1)), dot(hash3(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y),
      u.z);
  }
  float fbm(vec3 p) {
    float total = 0.0; float amp = 0.5;
    for (int i = 0; i < 5; i++) { total += noise(p) * amp; p *= 2.05; amp *= 0.5; }
    return total;
  }

  void main() {
    vec3 p = normalize(vPos);
    float cells = fbm(p * 3.4 + vec3(0.0, uTime * 0.045, 0.0));
    float grain = fbm(p * 11.0 - vec3(uTime * 0.08, 0.0, uTime * 0.035));
    float fine = fbm(p * 26.0 + vec3(uTime * 0.05, 0.0, 0.0));
    float heat = clamp(0.5 + 0.46 * cells + 0.22 * grain + 0.1 * fine, 0.0, 1.0);

    vec3 col = mix(uCool, uMid, smoothstep(0.16, 0.6, heat));
    col = mix(col, uHot, smoothstep(0.58, 1.0, heat));

    // Limb darkening. A star is not a flat disc: the edge looks through more of
    // the photosphere and is measurably cooler and dimmer. Leaving it out is the
    // main reason a shaded sphere reads as a beach ball.
    float mu = max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
    col *= mix(0.42, 1.06, pow(mu, 0.45));
    float rim = pow(1.0 - mu, 2.6);
    col += uHot * rim * 0.55;

    gl_FragColor = vec4(col * uGain, 1.0);
  }
`;function ot(e,t,a,o=1.9){return new U({uniforms:{uTime:{value:0},uHot:{value:new x(e)},uMid:{value:new x(t)},uCool:{value:new x(a)},uGain:{value:o}},vertexShader:Wo,fragmentShader:Bo,toneMapped:!1})}function rt({radius:e,color:t,wide:a,spread:o=1}){const r=f.useMemo(()=>vt({color:t,size:e*2.5*o,intensity:.8,falloff:3.6,halo:.12}),[t,e,o]),i=f.useMemo(()=>vt({color:a,size:e*6.6*o,intensity:.24,falloff:2.9,halo:.09}),[a,e,o]);return s.jsxs(s.Fragment,{children:[s.jsx("mesh",{material:r,frustumCulled:!1,renderOrder:2,children:s.jsx("planeGeometry",{args:[1,1]})}),s.jsx("mesh",{material:i,frustumCulled:!1,renderOrder:1,children:s.jsx("planeGeometry",{args:[1,1]})})]})}const Le=[n("exodus",.4),n("exodus",.56),n("scale",.02),n("scale",.08)],Nt=e=>K(e,Le[0],Le[1],Le[2],Le[3]),Dt=e=>e>.008,Vo=e=>Dt(Nt(e));function Ho(e,t,a=200){const o=new Float32Array((a+1)*3);for(let i=0;i<=a;i+=1){const u=i/a*Math.PI*2;o[i*3]=Math.cos(u)*e,o[i*3+1]=Math.sin(u)*e*t,o[i*3+2]=Math.sin(u)*e}const r=new ge;return r.setAttribute("position",new I(o,3)),r}function Uo(){const e=f.useRef(null),t=f.useRef(null),a=f.useRef(null),o=f.useRef([]);fe("exo",e,Vo);const r=f.useMemo(()=>ot("#ffcf9a","#ef5f27","#61120a",1.12),[]),i=f.useMemo(()=>[{id:"inner",radius:.72,at:[3.9,.25,-4.7],spin:130,material:Ye({low:"#3a1208",high:"#c9541f",sea:"#ff6a1e",ice:"#5a2a12",nightGlow:"#3a0d04",seaLevel:.44,iceCap:1.4,rough:.9,scale:3.4})},{id:"temperate",radius:1.18,at:[-9.5,-.6,5.5],spin:150,material:Ye({low:"#2a4a2c",high:"#8fa05c",sea:"#123a52",ice:"#cfe0e6",nightGlow:"#0a1418",seaLevel:.52,iceCap:.84,rough:.25,scale:3.6}),air:{day:"#8fb0ff",sunset:"#ff9f66",night:"#08142c",intensity:1.05}},{id:"outer",radius:.98,at:[-6,.9,-17.1],spin:190,material:Ye({low:"#4a5f74",high:"#c8d8e4",sea:"#20364a",ice:"#eaf4ff",nightGlow:"#0c1622",seaLevel:.46,iceCap:.34,rough:.6,scale:3.2})}],[]),u=f.useMemo(()=>i.map(v=>v.air?Ve({day:v.air.day,sunset:v.air.sunset,night:v.air.night,intensity:v.air.intensity,power:2.5}):null),[i]),d=f.useMemo(()=>i.map(v=>({geometry:Ho(Math.hypot(v.at[0],v.at[2]),.03),material:et("#ff9a5e",34,190)})),[i]),m=f.useMemo(()=>{const v=Re({count:1100,inner:5,outer:90,seed:61,size:.7}),w=Q(63);for(let h=0;h<v.count;h+=1)v.positions[h*3+1]*=.3,v.colors[h*3]=.9+w()*.1,v.colors[h*3+1]=.4+w()*.2,v.colors[h*3+2]=.24+w()*.14;return{geometry:ce(v),material:oe({scale:1,twinkle:.7,nearFade:1.5,farFade:600,gain:.55,atten:90})}},[]),l=f.useMemo(()=>new C,[]),c=f.useMemo(()=>new C,[]),p=f.useMemo(()=>new C($.x,$.y,$.z),[]);return W((v,w)=>{const h=g.eased,b=g.time,M=Nt(h),y=Dt(M);e.current&&(e.current.visible=y),y&&(r.uniforms.uTime.value=b,r.uniforms.uGain.value=1.35*M,i.forEach((j,S)=>{const A=o.current[S];if(!A)return;g.reduced||(A.rotation.y+=w*Math.PI*2/j.spin),A.getWorldPosition(c),l.copy(p).sub(c).normalize(),j.material.uniforms.uSun.value.copy(l),j.material.uniforms.uTime.value=b;const z=u[S];z&&(z.uniforms.uSun.value.copy(l),z.uniforms.uFade.value=M)}),d.forEach(j=>{j.material.uniforms.uOpacity.value=M*.32}),m.material.uniforms.uTime.value=b,m.material.uniforms.uFade.value=M*.8,a.current&&a.current.position.set(g.pointer.x*-4,g.pointer.y*2.6,0))}),s.jsxs("group",{ref:e,position:[$.x,$.y,$.z],visible:!1,children:[s.jsx("pointLight",{position:[0,0,0],intensity:3.4,decay:0,color:"#ff9a55"}),s.jsx("mesh",{ref:t,material:r,children:s.jsx("sphereGeometry",{args:[1.7,72,36]})}),s.jsx(rt,{radius:1.7,color:"#ffb377",wide:"#d2481f"}),d.map((v,w)=>s.jsx("lineLoop",{geometry:v.geometry,material:v.material},w)),i.map((v,w)=>s.jsxs("group",{position:v.at,children:[s.jsx("group",{ref:h=>{o.current[w]=h},children:s.jsx("mesh",{material:v.material,children:s.jsx("sphereGeometry",{args:[v.radius,128,64]})})}),u[w]?s.jsx("mesh",{material:u[w],scale:1.045,children:s.jsx("sphereGeometry",{args:[v.radius,48,24]})}):null]},v.id)),s.jsx("points",{ref:a,geometry:m.geometry,material:m.material,frustumCulled:!1})]})}const be=new C(.56,.34,.76).normalize(),It=e=>E(n("scale",.92),n("finale",.1),e),Ot=e=>e>.01,$o=e=>Ot(It(e));function Yo({geometry:e}){const t=f.useRef(null),a=f.useRef(null);fe("finale",t,$o);const o=le(e,O.moonNear),r=le(e,O.moonFar),i=f.useMemo(()=>_t({low:"#3b3b3f",high:"#c4c1ba",sun:"#fff8ee",ambient:"#212b42",fog:"#0a0e1a",fogDensity:13e-5,grain:.5}),[]),u=f.useMemo(()=>{const m=Re({count:260,inner:3,outer:60,seed:51,size:.4});for(let l=0;l<m.count;l+=1)m.positions[l*3+1]=Math.abs(m.positions[l*3+1])*.12;return{geometry:ce(m),material:oe({scale:1,twinkle:.5,nearFade:1,farFade:220,gain:.35,atten:50})}},[]),d=f.useMemo(()=>new C(Y.x,Y.y,Y.z).addScaledVector(be,4e4),[]);return W(()=>{const m=g.eased,l=It(m),c=Ot(l);t.current&&(t.current.visible=c),c&&(i.uniforms.uFade.value=l,i.uniforms.uSunDir.value.copy(be),u.material.uniforms.uTime.value=g.time,u.material.uniforms.uFade.value=l*.7,a.current&&a.current.position.set(g.pointer.x*-1.6,g.pointer.y*.9,0))}),s.jsxs("group",{ref:t,position:[Y.x,Y.y,Y.z],visible:!1,children:[s.jsx("directionalLight",{position:[be.x*4e5,be.y*4e5,be.z*4e5],intensity:7.2,color:"#fff4e0"}),s.jsx("ambientLight",{intensity:.03,color:"#2a3550"}),s.jsx("mesh",{geometry:r,material:i,position:[0,-.14,0],frustumCulled:!1}),s.jsx("mesh",{geometry:o,material:i,frustumCulled:!1}),s.jsx("points",{ref:a,geometry:u.geometry,material:u.material,frustumCulled:!1}),s.jsx(at,{radius:66,position:[-150,128,-430],sunWorld:d,atmosphereScale:1.02})]})}const yt=900,J=[{id:"mars",radius:.532,composed:.94,posA:[3.1,0,0],posB:[-11.6,0,0],au:1.524,color:"#b1583a",map:_.mars},{id:"earth",radius:1,composed:1,posA:[-3.1,0,0],posB:[-15.6,0,0],au:1,color:"#3f6fa8"},{id:"jupiter",radius:11.209,composed:1.7,posA:[1.2,.5,-54],posB:[10.4,0,0],au:5.204,color:"#c8a279",map:jt.jupiter}],Wt=e=>E(n("scale",0),n("scale",.06),e)*(1-E(n("finale",.02),n("finale",.14),e)),Bt=e=>e>.01,Xo=e=>Bt(Wt(e));function qo(e,t=512){const a=new Float32Array((t+1)*3);for(let r=0;r<=t;r+=1){const i=r/t*Math.PI*2;a[r*3]=Math.cos(i)*e,a[r*3+1]=0,a[r*3+2]=Math.sin(i)*e}const o=new ge;return o.setAttribute("position",new I(a,3)),o}function Jo(){const e=f.useRef(null),t=f.useRef([]),a=f.useRef(null);fe("scale",e,Xo);const o=f.useRef(null),r=f.useRef(null),i=f.useMemo(()=>ot("#fff6d8","#ffab48","#e2521c",1.8),[]),u=f.useMemo(()=>new C(L.x,L.y,L.z),[]),d=f.useMemo(()=>{const l={positions:new Float32Array(J.length*3),colors:new Float32Array(J.length*3),sizes:new Float32Array(J.length),seeds:new Float32Array(J.length)};return J.forEach((c,p)=>{const v=new x(c.id==="earth"?"#bcd8ff":c.id==="mars"?"#ffb289":"#ffe0ab");l.colors[p*3]=v.r,l.colors[p*3+1]=v.g,l.colors[p*3+2]=v.b,l.sizes[p]=c.id==="jupiter"?5.4:4.2,l.seeds[p]=p*.31}),{geometry:ce(l),material:oe({scale:1,twinkle:.25,gain:1.1,attenuate:!1})}},[]),m=f.useMemo(()=>J.map(l=>({geometry:qo(l.au*yt),material:et(l.id==="earth"?"#7fb0ff":l.id==="mars"?"#e08a5c":"#e8c98c",6e3,16e3)})),[]);return W(()=>{const l=g.eased,c=g.time,p=Wt(l),v=Bt(p);if(e.current&&(e.current.visible=v),!v)return;const w=bt("scale",l),h=E(.36,.56,w),b=E(.66,.94,w);if(o.current&&(o.current.intensity=3.2*(1-b)*p),r.current&&(r.current.intensity=(.4+2.6*b)*p),i.uniforms.uTime.value=c,a.current){const y=E(.76,.9,w);a.current.visible=y>.01,a.current.scale.setScalar(Math.max(.001,y))}J.forEach((y,j)=>{const S=t.current[j];if(!S)return;const A=G(G(y.composed/y.radius,1,h),1,b);S.scale.setScalar(A*y.radius);const z=G(G(y.posA[0],y.posB[0],h),0,b),F=G(G(y.posA[1],y.posB[1],h),0,b),T=G(G(y.posA[2],y.posB[2],h),-y.au*yt,b);S.position.set(z,F,T)}),m.forEach(y=>{y.material.uniforms.uOpacity.value=ue(b)*.5*p});const M=d.geometry.attributes.position;J.forEach((y,j)=>{const S=t.current[j];S&&M.setXYZ(j,S.position.x,S.position.y,S.position.z)}),M.needsUpdate=!0,d.material.uniforms.uTime.value=c,d.material.uniforms.uFade.value=ue(b)*p*.85}),s.jsxs("group",{ref:e,position:[L.x,L.y,L.z],visible:!1,children:[s.jsx("directionalLight",{ref:o,position:[22e4,168e3,288e3],intensity:3.2,color:"#fff3e0"}),s.jsx("pointLight",{ref:r,position:[0,0,0],intensity:.4,decay:0,color:"#fff2dc"}),s.jsx("ambientLight",{intensity:.09,color:"#4a6bb0"}),s.jsxs("group",{ref:a,visible:!1,children:[s.jsx("mesh",{material:i,children:s.jsx("sphereGeometry",{args:[109.2,96,48]})}),s.jsx(rt,{radius:109.2,color:"#ffd79a",wide:"#ff9d4a",spread:.42})]}),s.jsx("points",{geometry:d.geometry,material:d.material,frustumCulled:!1}),m.map((l,c)=>s.jsx("lineLoop",{geometry:l.geometry,material:l.material},c)),J.map((l,c)=>s.jsx("group",{ref:p=>{t.current[c]=p},children:l.id==="earth"?s.jsx(at,{radius:1,sunWorld:u}):s.jsx(tt,{radius:1,color:l.color,map:l.map,spin:90,segments:96})},l.id))]})}const xt=[n("disk",.82),n("descent",.815)],Ne=[n("star",.2),n("star",.92),n("system",.92),n("earth",.16)],De=[n("system",.02),n("system",.12),n("system",.9),n("earth",.12)],wt=[n("descent",.5),n("descent",.775)],Mt=e=>e>xt[0]&&e<xt[1];function Ko(e,t=220){const a=new Float32Array((t+1)*3);for(let r=0;r<=t;r+=1){const i=r/t*Math.PI*2;a[r*3]=Math.cos(i)*e,a[r*3+1]=0,a[r*3+2]=Math.sin(i)*e}const o=new ge;return o.setAttribute("position",new I(a,3)),o}function Zo(){const e=f.useRef(null),t=f.useRef(null),a=f.useRef(null),o=f.useRef(null),r=f.useRef(null),i=f.useRef(0);fe("solar",e,Mt);const u=f.useMemo(()=>ot("#fff4cf","#ff9e33","#c93c12",1.5),[]),d=f.useMemo(()=>new C(D.x,D.y,D.z),[]),m=f.useMemo(()=>We.map(c=>({id:c.id,geometry:Ko(ya(c)),material:et(c.orbit,90,620)})),[]),l=f.useMemo(()=>{const c=Re({count:900,inner:20,outer:240,seed:71,size:.8}),p=Q(91);for(let v=0;v<c.count;v+=1)c.positions[v*3+1]*=.22,c.positions[v*3+2]-=p()*260;return{geometry:ce(c),material:oe({scale:.9,twinkle:.5,nearFade:3,farFade:900,gain:.7,atten:140})}},[]);return W(()=>{const c=g.eased,p=g.time,v=Mt(c);if(e.current&&(e.current.visible=v),!v)return;const w=bt("star",c),h=w<1?Math.pow(10,G(-3.6,0,E(0,.92,w))):1;t.current?.scale.setScalar(h),u.uniforms.uTime.value=p;const b=K(c,Ne[0],Ne[1],Ne[2],Ne[3])*.24;m.forEach(M=>{M.material.uniforms.uOpacity.value=b}),o.current&&(o.current.visible=b>.005),l.material.uniforms.uTime.value=p,l.material.uniforms.uFade.value=K(c,De[0],De[1],De[2],De[3]),r.current&&(r.current.visible=l.material.uniforms.uFade.value>.01,r.current.position.set(g.pointer.x*-6,g.pointer.y*4,0)),i.current=ue(E(wt[0],wt[1],c))}),s.jsx("group",{ref:e,position:[D.x,D.y,D.z],visible:!1,children:s.jsxs("group",{ref:t,children:[s.jsx("pointLight",{position:[0,0,0],intensity:5.2,decay:0,color:"#fff2dc"}),s.jsx("ambientLight",{intensity:.06,color:"#4a6bb0"}),s.jsx("mesh",{ref:a,material:u,children:s.jsx("sphereGeometry",{args:[6,96,48]})}),s.jsx(rt,{radius:6,color:"#ffd79a",wide:"#ff9d4a"}),s.jsx("group",{ref:o,children:m.map(c=>s.jsx("lineLoop",{geometry:c.geometry,material:c.material},c.id))}),We.map(c=>c.id==="earth"?s.jsx(at,{radius:c.radius,position:c.at,sunWorld:d},c.id):c.id==="mars"?s.jsx(Io,{radius:c.radius,position:c.at,sunWorld:d,entryRef:i},c.id):s.jsx(tt,{radius:c.radius,position:c.at,tilt:c.tilt,spin:c.spin,color:c.color,map:jt[c.id],tint:c.radius>3?"#b2ada4":"#d8d4cd",segments:c.radius>3?128:72,roughness:c.radius>3?.78:.92,children:c.ring?s.jsx(Oo,{inner:c.radius*c.ring.inner,outer:c.radius*c.ring.outer}):null},c.id)),s.jsx("points",{ref:r,geometry:l.geometry,material:l.material,frustumCulled:!1})]})})}const Ie=[n("descent",.68),n("descent",.79),n("exodus",.06),n("exodus",.17)],Vt=e=>K(e,Ie[0],Ie[1],Ie[2],Ie[3]),Ht=e=>e>.008,Qo=e=>Ht(Vt(e));function er({geometry:e}){const t=f.useRef(null),a=f.useRef(null),o=f.useRef(null);fe("surface",t,Qo);const r=le(e,O.marsNear),i=le(e,O.marsFar),u=f.useMemo(()=>_t({low:"#9a5330",high:"#e0a172",sun:"#fff0d6",ambient:"#a86242",fog:"#c9855a",fogDensity:42e-5,grain:.65}),[]),d=f.useMemo(()=>Po({horizon:"#e0a271",zenith:"#7b4a3c",sun:"#fff0d4",haze:1.4}),[]),m=f.useMemo(()=>{const l=Re({count:700,inner:8,outer:260,seed:41,size:.5}),c=Q(43);for(let p=0;p<l.count;p+=1)l.positions[p*3+1]=Math.abs(l.positions[p*3+1])*.28+c()*6,l.colors[p*3]=1,l.colors[p*3+1]=.72,l.colors[p*3+2]=.5;return{geometry:ce(l),material:oe({scale:1.4,twinkle:.6,nearFade:2,farFade:700,gain:.55,atten:70})}},[]);return W(()=>{const l=g.eased,c=g.time,p=Vt(l),v=Ht(p);if(t.current&&(t.current.visible=v),!v)return;u.uniforms.uFade.value=p,d.uniforms.uFade.value=p,m.material.uniforms.uTime.value=c,m.material.uniforms.uFade.value=p*.85,a.current&&(a.current.position.set(g.pointer.x*-3.4,g.pointer.y*2.2,0),a.current.rotation.y=c*.01);const w=E(n("descent",.88),n("descent",1),l);d.uniforms.uHaze.value=1.4-w*.5,u.uniforms.uFogDensity.value=42e-5-ue(w)*12e-5}),s.jsxs("group",{ref:t,position:[Oe.x,Oe.y,Oe.z],visible:!1,children:[s.jsx("mesh",{ref:o,material:d,frustumCulled:!1,children:s.jsx("sphereGeometry",{args:[6e3,32,24]})}),s.jsx("mesh",{geometry:i,material:u,position:[0,-.4,0],frustumCulled:!1}),s.jsx("mesh",{geometry:r,material:u,frustumCulled:!1}),s.jsx("points",{ref:a,geometry:m.geometry,material:m.material,frustumCulled:!1})]})}class tr extends f.Component{constructor(){super(...arguments);it(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?null:this.props.children}}function nr({lang:e}){const[t]=f.useState(kt),[a,o]=f.useState(null);f.useEffect(()=>{let i=!0;return za(yo()).then(u=>{i&&o(u)}),()=>{i=!1}},[]);const r=f.useMemo(()=>t==="low"?[1,1.4]:[1,1.75],[t]);return a?s.jsxs(s.Fragment,{children:[s.jsx(xa,{lang:e}),s.jsx(tr,{children:s.jsxs(da,{className:"cx-canvas",dpr:r,gl:{antialias:!1,alpha:!1,powerPreference:"high-performance",logarithmicDepthBuffer:!0,stencil:!1,depth:!0,toneMapping:ma},camera:{fov:42,near:.05,far:3e4,position:[190,640,1760]},onCreated:({gl:i})=>{i.setClearColor(ha(),1)},children:[s.jsx(_a,{}),s.jsx(To,{}),s.jsx(bo,{geometry:a}),s.jsx(Zo,{}),s.jsx(er,{geometry:a}),s.jsx(Uo,{}),s.jsx(Jo,{}),s.jsx(Yo,{geometry:a}),s.jsx(La,{}),s.jsx(Ba,{quality:t}),s.jsx(to,{})]})})]}):null}export{nr as default};
