import{r as v,j as c,u as E}from"./index-CosmoAtlas-r9.js";import{D as M,a as y,a8 as O,a9 as F,u as z,g as j,l as A,aD as R,Q as L,V as b}from"./space-CcYHfSAQ-ca-ca2-ca3-ca4.js";import{aP as G,aQ as w,aR as S,aS as t,aT as f,aU as N,aV as V,aE as h,aW as I,aX as D,aY as H,aZ as Y}from"./App-DbEuei_k-ca-ca2-ca3-ca4.js";import"./proxy-CPl_UVNk-ca-ca2-ca3-ca4.js";const $=`
  attribute vec4 aShape;
  attribute vec3 aOffset;
  uniform float uTime, uHeight, uSpan, uGrowth, uTwist;
  varying vec2 vFlow;
  varying float vLife;
  void main() {
    float t=position.x, angle=position.y*6.283185;
    float arch=sin(t*3.141593);
    float life=.72+.28*sin(uTime*.055+aShape.z);
    float span=uSpan*aShape.y;
    float x=(t*2.0-1.0)*span+aOffset.x;
    float z=aOffset.y+arch*sin(t*3.141593+uTime*.035+aShape.z)*.04*uGrowth;
    float base=sqrt(max(.01, 1.0-x*x-z*z));
    float y=base+arch*uHeight*aShape.x*uGrowth*life;
    float radius=(.0035+.009*float(LARGE_LOOP))*(.65+.35*arch);
    vec3 tangent=normalize(vec3(span*2.0,cos(t*3.141593)*uHeight*aShape.x*uGrowth*life*3.141593-x*span*2.0/base,0));
    vec3 crossSection=normalize(cross(tangent,vec3(0,0,1)));
    vec3 p=vec3(x,y,z)+crossSection*cos(angle)*radius+vec3(0,0,sin(angle)*radius);
    float turn=uTwist+aOffset.z;
    p.xz=mat2(cos(turn),-sin(turn),sin(turn),cos(turn))*p.xz;
    p.xz+=arch*vec2(sin(uTime*.063+aShape.z),cos(uTime*.047+aShape.z))*.012*uGrowth;
    vFlow=vec2(t,position.y); vLife=life;
    gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);
  }
`,U=`
  uniform float uTime, uStrength, uFlare;
  varying vec2 vFlow;
  varying float vLife;
  ${S}
  void main() {
    float arch=sin(vFlow.x*3.141593);
    float flow=noise(vec3(vFlow.x*18.0-uTime*.3, vFlow.y*3.0,uTime*.07));
    float filaments=pow(.5+.5*cos(vFlow.y*6.283185*3.0+flow*2.0),2.0);
    float base=pow(1.0-arch,3.0);
    float brightness=(.35+flow*.65+base*1.3)*(1.0+uFlare*.9);
    vec3 color=mix(vec3(1.0,.18,.035),vec3(1.0,.62,.22),base*.6+flow*.25);
    float alpha=uStrength*vLife*(.35+filaments*.65)*(.85-arch*.28);
    gl_FragColor=vec4(color*brightness*2.1,alpha);
  }
`;function _({quality:e,large:i=!1,detail:p}){const o=v.useMemo(()=>G(i?e.prominences:e.loops,e.pathSegments,e.tubeSegments,i),[e,i]),s=v.useMemo(()=>w($,U,{uTime:{value:0},uHeight:{value:.3},uSpan:{value:.2},uGrowth:{value:1},uStrength:{value:0},uFlare:{value:0},uTwist:{value:0}},{LARGE_LOOP:i?1:0}),[i]);return s.side=M,v.useEffect(()=>()=>{o.dispose(),s.dispose()},[o,s]),y(()=>{const n=t.frame,r=t.event,l=s.uniforms;l.uTime.value=t.time,l.uHeight.value=i?r.prominenceHeight:r.prominenceHeight*.35,l.uSpan.value=i?r.span:r.span*.6,l.uGrowth.value=i?.16+n.prominence*.84:1,l.uStrength.value=p.value*(i?n.prominence*.7+.07:.14+n.activity*.45),l.uFlare.value=n.flare,l.uTwist.value=r.twist,s.visible=p.value>.02}),c.jsx("mesh",{geometry:o,material:s,frustumCulled:!1})}const Q=`
  varying vec3 vPosition;
  void main() { vPosition=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }
`,B=`
  uniform float uTime, uFlare;
  varying vec3 vPosition;
  ${S}
  void main() {
    float r=length(vPosition.xy);
    float structure=noise(vPosition*32.0+vec3(0,uTime*.12,0));
    float ribbons=pow(.5+.5*sin(atan(vPosition.y,vPosition.x)*7.0+r*35.0+structure*3.0),3.0);
    float core=exp(-r*r*210.0);
    float halo=exp(-r*r/(.006+uFlare*.055));
    float alpha=(core*.75+halo*(.1+ribbons*.25))*uFlare;
    gl_FragColor=vec4(mix(vec3(1,.28,.05),vec3(1,.82,.42),core)*2.8,alpha);
  }
`;function W(){const e=v.useMemo(()=>w(Q,B,{uTime:{value:0},uFlare:{value:0}}),[]);return e.side=M,v.useEffect(()=>()=>e.dispose(),[e]),y(()=>{e.uniforms.uTime.value=t.time,e.uniforms.uFlare.value=t.frame.flare}),c.jsx("mesh",{position:[0,1.012,0],rotation:[-Math.PI/2,0,0],material:e,children:c.jsx("circleGeometry",{args:[.46,48]})})}const k=`
  uniform float uProgress, uScale, uLayer, uTime, uTwist;
  varying vec3 vCloud;
  varying vec2 vParam;
  ${S}
  void main() {
    float theta=position.x*6.283185+uTwist, phi=position.y*1.9;
    float travel=uProgress*float(CME_TRAVEL)*uScale;
    float width=(.18+travel*CME_OPENING)*(1.0-uLayer*.075);
    vec3 direction=vec3(sin(phi)*cos(theta),cos(phi),sin(phi)*sin(theta));
    float shape=1.0+.1*sin(theta*3.0+phi*2.0)+.07*cos(theta*2.0-phi*3.0);
    float turbulence=noise(direction*6.0+vec3(uTime*.028,uLayer*2.0,0.0))-.5;
    vec3 p=direction*width*(shape+turbulence*.3);
    p.x*=1.25; p.z*=.78;
    p.y=p.y*.62+1.0+travel;
    p.x+=travel*.08*sin(uProgress*2.0);
    p.z+=travel*.07;
    vCloud=direction*shape; vParam=position.xy;
    gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);
  }
`,X=`
  uniform float uTime, uProgress, uOpacity, uLayer;
  varying vec3 vCloud;
  varying vec2 vParam;
  ${S}
  void main() {
    vec3 p=vCloud*5.0+vec3(0,uTime*.025,uLayer*.6);
    float turbulence=0.0, amp=.55;
    for(int i=0;i<NOISE_OCTAVES;i++){turbulence+=noise(p)*amp;p*=2.15;amp*=.5;}
    float rope=exp(-pow((vParam.y-.48+sin(vParam.x*18.85)*.025+(turbulence-.4)*.09)*22.0,2.0));
    float filaments=pow(.5+.5*sin(vParam.x*119.38+turbulence*4.0),8.0);
    float edge=1.0-smoothstep(.55,1.0,vParam.y);
    float density=(.012+turbulence*.055+rope*.16+filaments*.025)*edge;
    float opacity=uOpacity*density*exp(-uProgress*DENSITY_DECAY);
    vec3 color=mix(vec3(.85,.2,.07),vec3(1.0,.68,.35),rope*.65+turbulence*.25);
    gl_FragColor=vec4(color*(.75+rope*.65),opacity);
  }
`,Z=`
  attribute vec4 aPlasma;
  uniform float uProgress, uScale, uOpacity, uPixelRatio, uTime, uTwist;
  varying float vAlpha, vHeat;
  void main() {
    float travel=uProgress*float(CME_TRAVEL)*uScale;
    float theta=aPlasma.x*6.283185+uTwist;
    float radial=pow(aPlasma.y,.6);
    float width=(.14+travel*CME_OPENING)*radial;
    float winding=theta+travel*.035+aPlasma.z*1.4;
    vec3 p=vec3(cos(winding)*width*1.25,1.0+travel*(.28+aPlasma.z*.72),sin(winding)*width*.78);
    p.x+=travel*.08*sin(uProgress*2.0); p.z+=travel*.07;
    p.xz+=vec2(sin(uTime*.08+aPlasma.w*9.0),cos(uTime*.065+aPlasma.w*11.0))*.025*radial;
    vec4 mv=modelViewMatrix*vec4(p,1);
    gl_Position=projectionMatrix*mv;
    gl_PointSize=clamp((8.0+24.0*aPlasma.w)*uPixelRatio/ max(1.0,-mv.z),1.0,5.0);
    vAlpha=uOpacity*(.08+.18*aPlasma.w)*exp(-uProgress*DENSITY_DECAY);
    vHeat=aPlasma.z;
  }
`,J=`
  varying float vAlpha,vHeat;
  void main() {
    vec2 p=gl_PointCoord*2.0-1.0;
    float r=dot(p,p);
    if(r>1.0) discard;
    float core=exp(-r*5.0)*(1.0-r);
    gl_FragColor=vec4(mix(vec3(1,.19,.03),vec3(1,.6,.22),vHeat)*1.6,vAlpha*core);
  }
`;function K({quality:e,detail:i}){const p=v.useRef(null),o=v.useMemo(()=>{const s={CME_TRAVEL:f.cme.travel,CME_OPENING:f.cme.opening,DENSITY_DECAY:f.cme.densityDecay,NOISE_OCTAVES:e.noiseOctaves},n=Array.from({length:e.cloudLayers},(u,g)=>{const x=w(k,X,{uProgress:{value:0},uScale:{value:1},uTime:{value:0},uOpacity:{value:0},uLayer:{value:g},uTwist:{value:0}},s);return x.side=M,x}),r=new O,l=new Float32Array(e.particles*4),m=V(63187);for(let u=0;u<l.length;u++)l[u]=m();r.setAttribute("position",new F(new Float32Array(e.particles*3),3)),r.setAttribute("aPlasma",new F(l,4));const a=w(Z,J,{uProgress:{value:0},uScale:{value:1},uTime:{value:0},uOpacity:{value:0},uPixelRatio:{value:1},uTwist:{value:0}},s);return{geometry:N(e.cloudSegments,e.cloudSegments),clouds:n,particles:r,particleMaterial:a,materials:[...n,a]}},[e]);return v.useEffect(()=>()=>{o.geometry.dispose(),o.particles.dispose(),o.particleMaterial.dispose(),o.clouds.forEach(s=>s.dispose())},[o]),y(({gl:s})=>{const n=t.frame,r=t.event;p.current&&(p.current.visible=n.cloud>.001);for(const m of o.materials)m.uniforms.uProgress.value=n.cme,m.uniforms.uScale.value=r.cmeScale,m.uniforms.uTime.value=t.time,m.uniforms.uTwist.value=r.twist,m.uniforms.uOpacity.value=n.cloud*r.density;const l=Math.ceil(e.cloudLayers*(.35+i.value*.65));o.clouds.forEach((m,a)=>{m.visible=a<l}),o.particles.setDrawRange(0,Math.floor(e.particles*r.density*(.25+i.value*.75))),o.particleMaterial.uniforms.uPixelRatio.value=s.getPixelRatio()}),c.jsxs("group",{ref:p,visible:!1,children:[o.clouds.map((s,n)=>c.jsx("mesh",{geometry:o.geometry,material:s,frustumCulled:!1},n)),c.jsx("points",{geometry:o.particles,material:o.particleMaterial,frustumCulled:!1})]})}function oe({radius:e=H}){const i=v.useRef(null),p=v.useRef(null),o=E(u=>u.quality),s=h(u=>u.showScale),n=h(u=>u.active),r=I(),{gl:l}=z(),m=v.useMemo(()=>D(o,window.matchMedia("(pointer: coarse)").matches,l.capabilities.maxTextureSize<4096),[o,l]),a=v.useMemo(()=>({detail:{value:1},direction:new b,orientation:new L,frustum:new R,matrix:new A,bounds:new j(new b,e*2),uiTime:0,generation:-1}),[e]);return v.useEffect(()=>(t.running||t.activate(),()=>t.cancel()),[]),v.useEffect(()=>{r&&n&&h.setState({paused:!0,cameraMode:"manual"})},[r,n]),y(({camera:u},g)=>{const x=E.getState(),d=h.getState(),P=u.position.length()/e;a.matrix.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse),a.frustum.setFromProjectionMatrix(a.matrix),a.bounds.radius=e*(2+t.frame.cme*f.cme.travel*t.event.cmeScale*f.cme.boundExpansion);const T=P<f.relevance.cmeFar&&a.frustum.intersectsSphere(a.bounds),C=d.active?d.paused:x.paused||r;!t.running&&T&&!d.active&&t.activate(),t.advance(g,T&&(d.active||P<f.relevance.far),C||document.hidden),a.detail.value=Y(P),i.current&&(i.current.visible=T),i.current&&a.generation!==t.generation&&(a.direction.set(...t.event.direction),a.orientation.setFromUnitVectors(new b(0,1,0),a.direction),i.current.quaternion.copy(a.orientation),p.current?.position.set(t.event.span+.09,1.14,0),a.generation=t.generation),a.uiTime+=g,d.active&&a.uiTime>=f.uiInterval&&(a.uiTime=0,d.phase!==t.frame.phase&&h.setState({phase:t.frame.phase}))},-3),c.jsxs("group",{ref:i,scale:e,children:[c.jsx(_,{quality:m,detail:a.detail}),c.jsx(_,{quality:m,detail:a.detail,large:!0}),c.jsx(W,{}),c.jsx(K,{quality:m,detail:a.detail}),n&&s&&c.jsxs("mesh",{ref:p,position:[t.event.span+.09,1.14,0],children:[c.jsx("sphereGeometry",{args:[f.earthRadiusRatio,24,16]}),c.jsx("meshBasicMaterial",{color:"#86b8d4",toneMapped:!1})]})]})}export{oe as SolarEffects};
