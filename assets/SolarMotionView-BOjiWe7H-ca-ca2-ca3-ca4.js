import{j as c,p as F,r as _,u as B,H as le,A as O}from"./index-CosmoAtlas-r9.js";import{I as ce,F as k,e as H,f as U,W as de,B as G,g as K,V as y,h as ue,aA as P,U as ee,b as fe,i as I,j as pe,k as T,L as he,l as me,m as ge,a as te,u as ve,C as q,aB as ye,A as we}from"./space-CcYHfSAQ-ca-ca2-ca3-ca4.js";import{l as xe,m as Se,u as be,h as ie,n as X,o as _e,s as Me,p as Ee,q as Ae,c as ze,r as Ue,t as ne}from"./App-DbEuei_k-ca-ca2-ca3-ca4.js";import"./proxy-CPl_UVNk-ca-ca2-ca3-ca4.js";const Y=new G,D=new y;class se extends ce{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new k(e,3)),this.setAttribute("uv",new k(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new H(t,6,1);return this.setAttribute("instanceStart",new U(n,3,0)),this.setAttribute("instanceEnd",new U(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new H(t,6,1);return this.setAttribute("instanceColorStart",new U(n,3,0)),this.setAttribute("instanceColorEnd",new U(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new de(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new G);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Y.setFromBufferAttribute(t),this.boundingBox.union(Y))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new K),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,d=e.count;r<d;r++)D.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(D)),D.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(D));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}I.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new fe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};P.line={uniforms:ee.merge([I.common,I.fog,I.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class V extends ue{constructor(e){super({type:"LineMaterial",uniforms:ee.clone(P.line.uniforms),vertexShader:P.line.vertexShader,fragmentShader:P.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const W=new T,Z=new y,J=new y,h=new T,m=new T,w=new T,N=new y,R=new me,g=new he,Q=new y,j=new G,C=new K,x=new T;let S,M;function $(s,e,t){return x.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),x.multiplyScalar(1/x.w),x.x=M/t.width,x.y=M/t.height,x.applyMatrix4(s.projectionMatrixInverse),x.multiplyScalar(1/x.w),Math.abs(Math.max(x.x,x.y))}function Le(s,e){const t=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,d=Math.min(n.instanceCount,i.count);for(let o=0,a=d;o<a;o++){g.start.fromBufferAttribute(i,o),g.end.fromBufferAttribute(r,o),g.applyMatrix4(t);const l=new y,f=new y;S.distanceSqToSegment(g.start,g.end,f,l),f.distanceTo(l)<M*.5&&e.push({point:f,pointOnLine:l,distance:S.origin.distanceTo(f),object:s,face:null,faceIndex:o,uv:null,uv1:null})}}function Be(s,e,t){const n=e.projectionMatrix,r=s.material.resolution,d=s.matrixWorld,o=s.geometry,a=o.attributes.instanceStart,l=o.attributes.instanceEnd,f=Math.min(o.instanceCount,a.count),u=-e.near;S.at(1,w),w.w=1,w.applyMatrix4(e.matrixWorldInverse),w.applyMatrix4(n),w.multiplyScalar(1/w.w),w.x*=r.x/2,w.y*=r.y/2,w.z=0,N.copy(w),R.multiplyMatrices(e.matrixWorldInverse,d);for(let v=0,E=f;v<E;v++){if(h.fromBufferAttribute(a,v),m.fromBufferAttribute(l,v),h.w=1,m.w=1,h.applyMatrix4(R),m.applyMatrix4(R),h.z>u&&m.z>u)continue;if(h.z>u){const z=h.z-m.z,b=(h.z-u)/z;h.lerp(m,b)}else if(m.z>u){const z=m.z-h.z,b=(m.z-u)/z;m.lerp(h,b)}h.applyMatrix4(n),m.applyMatrix4(n),h.multiplyScalar(1/h.w),m.multiplyScalar(1/m.w),h.x*=r.x/2,h.y*=r.y/2,m.x*=r.x/2,m.y*=r.y/2,g.start.copy(h),g.start.z=0,g.end.copy(m),g.end.z=0;const p=g.closestPointToPointParameter(N,!0);g.at(p,Q);const A=ge.lerp(h.z,m.z,p),re=A>=-1&&A<=1,ae=N.distanceTo(Q)<M*.5;if(re&&ae){g.start.fromBufferAttribute(a,v),g.end.fromBufferAttribute(l,v),g.start.applyMatrix4(d),g.end.applyMatrix4(d);const z=new y,b=new y;S.distanceSqToSegment(g.start,g.end,b,z),t.push({point:b,pointOnLine:z,distance:S.origin.distanceTo(b),object:s,face:null,faceIndex:v,uv:null,uv1:null})}}}class Te extends pe{constructor(e=new se,t=new V({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let d=0,o=0,a=t.count;d<a;d++,o+=2)Z.fromBufferAttribute(t,d),J.fromBufferAttribute(n,d),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+Z.distanceTo(J);const r=new H(i,2,1);return e.setAttribute("instanceDistanceStart",new U(r,1,0)),e.setAttribute("instanceDistanceEnd",new U(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;S=e.ray;const d=this.matrixWorld,o=this.geometry,a=this.material;M=a.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),C.copy(o.boundingSphere).applyMatrix4(d);let l;if(n)l=M*.5;else{const u=Math.max(i.near,C.distanceToPoint(S.origin));l=$(i,u,a.resolution)}if(C.radius+=l,S.intersectsSphere(C)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),j.copy(o.boundingBox).applyMatrix4(d);let f;if(n)f=M*.5;else{const u=Math.max(i.near,j.distanceToPoint(S.origin));f=$(i,u,a.resolution)}j.expandByScalar(f),S.intersectsBox(j)!==!1&&(n?Le(this,t):Be(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(W),this.material.uniforms.resolution.value.set(W.z,W.w))}}class oe extends se{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class De extends Te{constructor(e=new oe,t=new V({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}function je({planet:s}){const t=ze().level==="low"?256:512,n=B(l=>l.selectedId??l.solarMotionHighlightId),i=B(l=>l.reducedMotion),r=ve(l=>l.size),d=_.useRef(Number.NaN),o=_.useMemo(()=>new y,[]),a=_.useMemo(()=>{const l=new Float32Array((t+1)*3),f=new Float32Array(l.length),u=new q(s.colorTheme).lerp(new q("#ffffff"),.08);for(let p=0;p<=t;p+=1){const A=Math.pow(1-p/t,1.15);f[p*3]=u.r*A*1.7,f[p*3+1]=u.g*A*1.7,f[p*3+2]=u.b*A*1.7}const v=new oe;v.setPositions(l),v.setColors(f),v.getAttribute("instanceStart").data.setUsage(ye);const E=new V({linewidth:1.3,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:we,toneMapped:!1}),L=new De(v,E);return L.frustumCulled=!1,L},[s,t]);return _.useEffect(()=>{a.material.resolution.set(r.width,r.height)},[a,r.width,r.height]),_.useEffect(()=>(d.current=Number.NaN,()=>{a.geometry.dispose(),a.material.dispose()}),[a]),te((l,f)=>{const u=s.id===n,v=i?1:1-Math.exp(-f*7);if(a.material.opacity+=((u?1:.65)-a.material.opacity)*v,a.material.linewidth+=((u?2.2:1.2)-a.material.linewidth)*v,d.current===O.time)return;d.current=O.time;const E=a.geometry.getAttribute("instanceStart"),L=a.geometry.getAttribute("instanceEnd");for(let p=0;p<=t;p+=1)Ue(s,O.time,p/t*ne,o),p<t&&E.setXYZ(p,o.x,o.y,o.z),p>0&&L.setXYZ(p-1,o.x,o.y,o.z);E.data.needsUpdate=!0}),c.jsx("primitive",{object:a})}function Ce(){const s=_.useRef(null),e=be(),t=B(i=>i.showLabels),n=B(i=>i.resetSolarMotionView);return te(()=>{s.current&&(s.current.position.y=-(O.time*X%24))}),c.jsxs(c.Fragment,{children:[c.jsx(ie,{points:[[0,-ne*X,0],[0,27,0]],color:"#ffdb8c",lineWidth:1,transparent:!0,opacity:.35}),c.jsxs("mesh",{position:[0,28,0],children:[c.jsx("coneGeometry",{args:[1.2,4,12]}),c.jsx("meshBasicMaterial",{color:"#ffdb8c",toneMapped:!1})]}),c.jsx("group",{ref:s,children:Array.from({length:9},(i,r)=>c.jsxs("mesh",{position:[0,-r*24,0],children:[c.jsx("sphereGeometry",{args:[.55,8,8]}),c.jsx("meshBasicMaterial",{color:"#ffdb8c",transparent:!0,opacity:.6*(1-r/9)})]},r))}),t&&c.jsx(_e,{label:le(Me.direction,e),position:[0,35,0],onSelect:n,declutter:!0,priority:2})]})}function Oe(){const s=B(n=>n.selectedId??n.solarMotionHighlightId),e=F.find(n=>n.id===s)??F[2],t=_.useMemo(()=>Array.from({length:129},(n,i)=>Ee(e,i/128*Ae(e),new y)),[e]);return c.jsx(ie,{points:t,color:e.colorTheme,lineWidth:.7,transparent:!0,opacity:.18,depthWrite:!1})}function Re(){return c.jsxs("group",{children:[c.jsx(xe,{}),c.jsx(Ce,{}),c.jsx(Oe,{}),F.map(s=>c.jsxs("group",{children:[c.jsx(Se,{planet:s}),c.jsx(je,{planet:s})]},s.id))]})}export{Re as SolarMotionView};
