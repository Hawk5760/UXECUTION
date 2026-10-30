import{r as d,p as v,j as e,A as m,u as g,z as w}from"./index-CosmoAtlas-r9.js";import{c as S,G as E,d as A,g as b,e as P,f as x,h as T,i as h,P as I,j as G,k as R}from"./App-DbEuei_k-ca-ca2-ca3-ca4.js";import{SolarMotionView as F}from"./SolarMotionView-BOjiWe7H-ca-ca2-ca3-ca4.js";import{V as u,k as D,a as j,D as V}from"./space-CcYHfSAQ-ca-ca2-ca3-ca4.js";import"./proxy-CPl_UVNk-ca-ca2-ca3-ca4.js";const _=`
uniform vec4 uBodies[9];
uniform float uCount;
varying vec2 vField;
varying float vDepth;
void main() {
  vField = position.xy;
  float depth = 0.0;
  for (int i = 0; i < 9; i++) {
    if (float(i) >= uCount) break;
    vec2 delta = vField - uBodies[i].xy;
    float width = uBodies[i].w;
    depth += uBodies[i].z * width / sqrt(dot(delta, delta) + width * width);
  }
  vDepth = depth;
  vec3 warped = vec3(position.x, -2.0 - depth, position.y);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(warped, 1.0);
}`,C=`
uniform float uExtent;
uniform float uSingle;
varying vec2 vField;
varying float vDepth;
void main() {
  float radius = length(vField);
  float fade = 1.0 - smoothstep(uExtent * 0.78, uExtent, radius);
  if (fade < 0.005) discard;
  vec2 coord = vField / (uSingle > 0.5 ? 1.6 : 3.2);
  vec2 grid = abs(fract(coord - 0.5) - 0.5) / max(fwidth(coord), vec2(0.0001));
  float line = 1.0 - smoothstep(0.35, 1.35, min(grid.x, grid.y));
  float depth = clamp(vDepth / 20.0, 0.0, 1.0);
  vec3 color = mix(vec3(0.06, 0.5, 0.64), vec3(0.32, 0.95, 0.86), depth);
  color = mix(color, vec3(0.9, 0.68, 0.3), smoothstep(0.65, 1.0, depth) * (1.0 - uSingle));
  float alpha = (0.018 + line * (0.35 + depth * 0.45)) * fade;
  gl_FragColor = vec4(color * (0.45 + line * 1.4), alpha);
}`;function L({planet:t}){const s=S(),o=s.level==="low"?80:s.level==="medium"?144:192,i=t?E:A,l=d.useMemo(()=>new u,[]),a=d.useMemo(()=>{const r=Array.from({length:9},()=>new D);return r[0].set(0,0,t?10+Math.log1p(t.gravityMs2)*2:20,t?4:8),{uBodies:{value:r},uCount:{value:t?1:9},uExtent:{value:i},uSingle:{value:t?1:0}}},[t,i]);return j(()=>{if(!t)for(let r=0;r<v.length;r+=1){const c=v[r];b(c,m.time,l),a.uBodies.value[r+1].set(l.x,l.z,P(c),1.6+c.diameterKm/9e4)}}),e.jsxs("mesh",{rotation:[0,0,t?0:-Math.PI/6],children:[e.jsx("planeGeometry",{args:[i*2,i*2,o,o]}),e.jsx("shaderMaterial",{vertexShader:_,fragmentShader:C,uniforms:a,transparent:!0,depthWrite:!1,side:V,toneMapped:!1})]})}const p=new u,N=new u(0,0,1),B=new u(1,0,0);function k({planet:t}){const s=g(n=>n.gravityAltitude),o=d.useRef(null),i=d.useRef(.6),l=d.useRef(m.time),a=h*(1+s),r=x(t,s).periodSeconds,c=x(t,.5).periodSeconds/18,y=d.useMemo(()=>Array.from({length:193},(n,M)=>{const f=M/192*Math.PI*2;return new u(Math.cos(f)*a,0,Math.sin(f)*a)}),[a]);return j(()=>{const n=Math.max(0,m.time-l.current);l.current=m.time,i.current=(i.current+n*Math.PI*2*c/r)%(Math.PI*2),o.current&&(o.current.position.set(Math.cos(i.current)*a,0,Math.sin(i.current)*a),o.current.lookAt(p))}),e.jsxs("group",{rotation:[.32,0,.15],children:[e.jsx(T,{points:y,color:"#efc77e",lineWidth:1,transparent:!0,opacity:.48}),e.jsxs("group",{ref:o,children:[e.jsxs("group",{scale:1.6,children:[e.jsxs("mesh",{children:[e.jsx("boxGeometry",{args:[.38,.35,.5]}),e.jsx("meshStandardMaterial",{color:"#e2d3b2",metalness:.7,roughness:.32})]}),[-1,1].map(n=>e.jsxs("mesh",{position:[n*.65,0,0],children:[e.jsx("boxGeometry",{args:[.75,.035,.7]}),e.jsx("meshStandardMaterial",{color:"#376bab",emissive:"#234776",emissiveIntensity:.3,metalness:.35,roughness:.4})]},n))]}),e.jsx("arrowHelper",{args:[N,p,2.7,"#5fe0dc",.5,.26]}),e.jsx("arrowHelper",{args:[B,p,3.5,"#efc77e",.5,.26]})]})]})}function q(){const t=g(o=>o.selectedId),s=t?w(t):void 0;return e.jsxs("group",{children:[e.jsx(L,{planet:s},s?.id??"system"),s?e.jsxs(e.Fragment,{children:[e.jsx("ambientLight",{intensity:.22}),e.jsx("directionalLight",{position:[14,12,18],intensity:2.6,color:"#fff3df"}),e.jsx("directionalLight",{position:[-10,3,-12],intensity:.6,color:"#76becb"}),e.jsxs("group",{children:[e.jsx(I,{planet:s,radius:h,segments:72}),e.jsx(G,{planet:s,radius:h}),e.jsx(R,{planet:s,radius:h})]},s.id),e.jsx(k,{planet:s},`satellite-${s.id}`)]}):e.jsx(F,{})]})}export{q as GravityView};
