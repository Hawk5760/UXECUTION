import{aV as L,O as I,aO as O,aR as Q,r as p,u as U,Y as X,aW as G,j as r,aX as ee}from"./index-CosmoAtlas-r9.js";import{C as _,V as F,u as $,a8 as te,a9 as P,a as N,A as K}from"./space-CcYHfSAQ-ca-ca2-ca3-ca4.js";import{Y as V,X as D}from"./App-DbEuei_k-ca-ca2-ca3-ca4.js";import{u as oe}from"./continuationState-Db9d1QRm-ca-ca2-ca3-ca4.js";import"./proxy-CPl_UVNk-ca-ca2-ca3-ca4.js";function Z(t){return()=>(t=Math.imul(1664525,t)+1013904223>>>0,t/4294967296)}function W(t,o,i,e){const a=Z(Math.imul(t,73856093)^Math.imul(o,19349663)^Math.imul(i,83492791));return e.set(t+.15+a()*.7,o+.15+a()*.7,i+.15+a()*.7).multiplyScalar(300)}function ae(t,o=!1){const i=Math.round((o?45e3:1e5)*t),e=new Float32Array(i*3),a=new Float32Array(i*3),u=new Float32Array(i),n=Z(o?460093:281631),g=new _("#759eb6"),v=new _("#e7d2b7"),c=new _,S=new F,j=new F,h=new F,M=o?I:L;for(let x=0;x<i;){let z;if(o){const y=M*Math.cbrt(n()),f=n()*2-1,l=n()*Math.PI*2,d=Math.sqrt(1-f*f);if(h.set(y*d*Math.cos(l),y*f,y*d*Math.sin(l)),y<L*.9)continue;z=n()*.2}else{const y=Math.floor(n()*44)-22,f=Math.floor(n()*44)-22,l=Math.floor(n()*44)-22,d=Math.floor(n()*3),R=n();W(y,f,l,S),W(y+(d===0?1:0),f+(d===1?1:0),l+(d===2?1:0),j),h.copy(S).lerp(j,R);const s=Math.sin(R*Math.PI)*35;h.x+=Math.sin(f+l)*s+(n()-.5)*12,h.y+=Math.sin(y+l)*s+(n()-.5)*12,h.z+=Math.sin(y+f)*s+(n()-.5)*12;const m=h.length();if(m<600||m>M)continue;z=Math.pow(Math.abs(R-.5)*2,5)}e.set(h.toArray(),x*3),c.copy(g).lerp(v,z).multiplyScalar(.7+n()*.5),a.set([c.r,c.g,c.b],x*3),u[x]=o?8+n()*20:1.4+n()*3+z*2,x++}return{positions:e,colors:a,sizes:u}}const ne=9e4,Y=780;function re(t){return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function H(t,o,i){const e=t()*2-1,a=t()*Math.PI*2,u=Math.sqrt(1-e*e);return i.set(o*u*Math.cos(a),o*e,o*u*Math.sin(a))}function ie(t,o=0){const i=Number.isInteger(o)&&o>=0&&o<Q?o:0,e=re(9300465+i*9817),a=Math.round(ne*Math.max(.1,Math.min(1,Number.isFinite(t)?t:.35))),u=new Float32Array(a*3),n=new Float32Array(a*3),g=new Float32Array(a),v=new Float32Array(a),c=[],S=[],j=new Float32Array(Y),h=new Set,M=I*1.003;for(let s=0;s<Y;s++){const m=M+e()**1.8*(O*.94-M);c.push(H(e,m,new F))}for(let s=0;s<c.length;s++){const m=[-1,-1,-1],b=[1/0,1/0,1/0];for(let w=0;w<c.length;w++){if(s===w)continue;const C=c[s].distanceToSquared(c[w]),A=b.findIndex(E=>C<E);A<0||(m.splice(A,0,w),m.pop(),b.splice(A,0,C),b.pop())}j[s]=Math.sqrt(b[0]);for(const w of m){const C=`${Math.min(s,w)}:${Math.max(s,w)}`;h.has(C)||(h.add(C),S.push([s,w]))}}const x=new _("#728c9e"),z=new _("#e3bd83"),y=new _("#827c99"),f=new _,l=new F,d=new F,R=()=>(e()+e()+e()+e()+e()+e()-3)*1.414;for(let s=0;s<a;s++){const m=e();let b=0;for(let w=0;w<6;w++){if(m<.73){const[A,E]=S[Math.floor(e()*S.length)],T=e(),B=c[A].distanceTo(c[E]);l.copy(c[A]).lerp(c[E],T);const J=Math.sin(T*Math.PI)*B*.075;l.add(d.set(Math.sin(A*1.7),Math.cos(E*2.1),Math.sin(A+E)).multiplyScalar(J)),l.add(d.set(R(),R(),R()).multiplyScalar(B*.018)),b=Math.pow(Math.abs(T-.5)*2,5)*.65}else if(m<.94){const A=Math.floor(e()*c.length);l.copy(c[A]).add(d.set(R(),R(),R()).multiplyScalar(j[A]*.055)),b=.65+e()*.35}else H(e,M+Math.cbrt(e())*(O-M),l);const C=l.length();if(C>M&&C<=O)break;w===5&&H(e,M+e()*(O*.99-M),l)}u.set([l.x,l.y,l.z],s*3),f.copy(x).lerp(y,e()*.3).lerp(z,b).multiplyScalar(.7+e()*.5),n.set([f.r,f.g,f.b],s*3),g[s]=35+e()*80+b*50,v[s]=m>=.94?.12:.35+b*.65}return{positions:u,colors:n,sizes:g,weights:v}}const se=`
  attribute vec3 color;
  attribute float aSize;
  attribute float aWeight;
  uniform float uHeight;
  uniform float uOpacity;
  uniform float uRadius;
  uniform float uExtent;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec4 eye = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * eye;
    gl_PointSize = clamp(aSize * uHeight * 18.0 / max(1.0, -eye.z), 1.2, 9.0);
    vec3 ray = normalize(position - cameraPosition);
    vec3 closest = cameraPosition + ray * max(0.0, dot(-cameraPosition, ray));
    // Keep our observational diagram legible through the illustrative foreground.
    float overlap = smoothstep(uRadius * .96, uRadius * 1.06, length(closest));
    float fade = 1.0 - smoothstep(uExtent * .65, uExtent, length(position));
    float nearFade = smoothstep(1500.0, 12000.0, -eye.z);
    vAlpha = uOpacity * aWeight * fade * nearFade * mix(.005, 1.0, overlap);
    vColor = color;
  }
`,le=`
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec2 p = gl_PointCoord * 2.0 - 1.0;
    float r = dot(p, p);
    if (r > 1.0) discard;
    float glow = exp(-r * 5.0) * .3 + exp(-r * 28.0) * .8;
    gl_FragColor = vec4(vColor * 1.4, glow * vAlpha);
  }
`;function ce({density:t}){const o=oe(f=>f.realization),[i,e]=p.useState(o),a=p.useRef(null),u=p.useRef(null),n=p.useRef(0),g=p.useRef(1),{size:v,viewport:c}=$(),S=U(f=>f.reducedMotion),j=X(),h=S||j,M=h?o:i,x=p.useMemo(()=>ie(t,M),[t,M]),z=p.useMemo(()=>new te().setAttribute("position",new P(x.positions,3)).setAttribute("color",new P(x.colors,3)).setAttribute("aSize",new P(x.sizes,1)).setAttribute("aWeight",new P(x.weights,1)),[x]);p.useEffect(()=>()=>z.dispose(),[z]);const y=p.useMemo(()=>({uHeight:{value:900},uOpacity:{value:0},uRadius:{value:I},uExtent:{value:O}}),[]);return N((f,l)=>{const d=u.current;if(!d)return;const R=D.distance,s=V.getState().horizonView==="limit"?0:G(R)*.55*Math.pow(.35/t,.65),m=Math.min(l,.05),b=o!==i;g.current=h?1:Math.max(0,Math.min(1,g.current+(b?-m/.18:m/.32))),b&&(h||g.current===0)&&e(o),n.current+=(s-n.current)*(h?1:1-Math.exp(-m*4)),d.uniforms.uOpacity.value=n.current*g.current,d.uniforms.uHeight.value=v.height*c.dpr,a.current&&(a.current.visible=d.uniforms.uOpacity.value>.001)}),r.jsx("group",{ref:a,children:r.jsx("points",{geometry:z,frustumCulled:!1,children:r.jsx("shaderMaterial",{ref:u,uniforms:y,vertexShader:se,fragmentShader:le,transparent:!0,depthWrite:!1,blending:K,toneMapped:!1})})})}function k({otherObserver:t=!1}){const o=p.useRef(null),i=p.useRef(null),e=U(g=>g.reducedMotion),a=X(),u=p.useRef(0),n=p.useMemo(()=>({uOpacity:{value:0},uColor:{value:new _(t?"#e3bd83":"#76bacb")}}),[t]);return N((g,v)=>{if(!o.current||!i.current)return;const S=!t||V.getState().horizonView==="observer"?1:0;u.current+=(S-u.current)*(e||a?1:1-Math.exp(-Math.min(v,.05)*3));const j=G(D.distance)*u.current;o.current.visible=j>.001,t&&(o.current.position.x=ee*u.current),i.current.uniforms.uOpacity.value=j}),r.jsxs("group",{ref:o,children:[r.jsxs("mesh",{children:[r.jsx("sphereGeometry",{args:[I,128,64]}),r.jsx("shaderMaterial",{ref:i,uniforms:n,transparent:!0,depthWrite:!1,toneMapped:!1,vertexShader:`
          varying vec3 vNormal; varying vec3 vEye;
          void main() {
            vec4 p = modelViewMatrix * vec4(position, 1.0);
            vNormal = normalize(normalMatrix * normal);
            vEye = normalize(-p.xyz);
            gl_Position = projectionMatrix * p;
          }
        `,fragmentShader:`
          uniform float uOpacity; uniform vec3 uColor;
          varying vec3 vNormal; varying vec3 vEye;
          void main() {
            // Mark the observational limit with a thin silhouette, not a glowing shell.
            float facing = abs(dot(normalize(vNormal), normalize(vEye)));
            float rim = 1.0 - smoothstep(0.0, max(fwidth(facing) * 1.5, .07), facing);
            gl_FragColor = vec4(uColor, rim * .35 * uOpacity);
          }
        `})]}),t&&r.jsxs("mesh",{children:[r.jsx("sphereGeometry",{args:[I*.008,12,8]}),r.jsx("meshBasicMaterial",{color:"#e3bd83",toneMapped:!1})]})]})}const ue=`
  attribute vec3 color;
  attribute float aSize;
  uniform float uHeight;
  uniform float uRange;
  uniform float uHorizon;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec4 eye = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * eye;
    gl_PointSize = clamp(aSize * uHeight * 1.8 / max(1.0, -eye.z), 1.1, 5.0);
    float deep = smoothstep(1100.0, 4500.0, uRange) * (1.0 - smoothstep(18000.0, 70000.0, uRange));
    float horizon = smoothstep(13000.0, 65000.0, uRange);
    float edge = 1.0 - smoothstep(5500.0, 6500.0, length(position));
    vAlpha = mix(deep * edge * 0.65, horizon * 0.5, uHorizon);
    vColor = color;
  }
`,fe=`
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec2 p = gl_PointCoord * 2.0 - 1.0;
    float r = dot(p,p);
    if (r > 1.0) discard;
    gl_FragColor = vec4(vColor, (exp(-r * 4.0) * 0.6 + exp(-r * 20.0)) * vAlpha);
  }
`;function q({density:t,horizon:o=!1}){const i=p.useMemo(()=>ae(t,o),[t,o]),e=p.useRef(null),a=p.useRef(null),{size:u,viewport:n}=$(),g=p.useMemo(()=>({uHeight:{value:900},uRange:{value:1500},uHorizon:{value:o?1:0}}),[o]);return N(()=>{const v=D.distance;e.current&&(e.current.visible=o?v>13e3:v>1100&&v<7e4),a.current&&(a.current.uniforms.uHeight.value=u.height*n.dpr,a.current.uniforms.uRange.value=v)}),r.jsx("group",{ref:e,children:r.jsxs("points",{frustumCulled:!1,children:[r.jsxs("bufferGeometry",{children:[r.jsx("bufferAttribute",{attach:"attributes-position",args:[i.positions,3]}),r.jsx("bufferAttribute",{attach:"attributes-color",args:[i.colors,3]}),r.jsx("bufferAttribute",{attach:"attributes-aSize",args:[i.sizes,1]})]}),r.jsx("shaderMaterial",{ref:a,uniforms:g,vertexShader:ue,fragmentShader:fe,transparent:!0,depthWrite:!1,blending:K,toneMapped:!1})]})})}function ve({density:t}){const o=V(i=>i.level==="observable");return r.jsxs(r.Fragment,{children:[r.jsx(q,{density:t}),r.jsx(q,{density:t,horizon:!0}),o&&r.jsxs(r.Fragment,{children:[r.jsx(ce,{density:t}),r.jsx(k,{}),r.jsx(k,{otherObserver:!0})]})]})}export{ve as DeepUniverse};
