"use strict";(self.webpackChunkmaCosta=self.webpackChunkmaCosta||[]).push([[348],{8689:function(e,n,t){var r;t.d(n,{we:function(){return b}});var o=t(6540),u=t(6635),s=(t(961),t(4743));const l={...r||(r=t.t(o,2))},c=l.useInsertionEffect||(e=>e());function f(e){const n=o.useRef((()=>{0}));return c((()=>{n.current=e})),o.useCallback((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return null==n.current?void 0:n.current(...t)}),[])}const a="ArrowUp",i="ArrowDown",d="ArrowLeft",m="ArrowRight";var v="undefined"!=typeof document?o.useLayoutEffect:o.useEffect;const g=[d,m],R=[a,i];let C=!1,p=0;const w=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+p++;const h=l.useId||function(){const[e,n]=o.useState((()=>C?w():void 0));return v((()=>{null==e&&n(w())}),[]),o.useEffect((()=>{C=!0}),[]),e};function x(){const e=new Map;return{emit(n,t){var r;null==(r=e.get(n))||r.forEach((e=>e(t)))},on(n,t){e.set(n,[...e.get(n)||[],t])},off(n,t){var r;e.set(n,(null==(r=e.get(n))?void 0:r.filter((e=>e!==t)))||[])}}}const M=o.createContext(null),k=o.createContext(null),E=()=>{var e;return(null==(e=o.useContext(M))?void 0:e.id)||null},S=()=>o.useContext(k);function b(e){void 0===e&&(e={});const{nodeId:n}=e,t=function(e){const{open:n=!1,onOpenChange:t,elements:r}=e,u=h(),s=o.useRef({}),[l]=o.useState((()=>x())),c=null!=E(),[a,i]=o.useState(r.reference),d=f(((e,n,r)=>{s.current.openEvent=e?n:void 0,l.emit("openchange",{open:e,event:n,reason:r,nested:c}),null==t||t(e,n,r)})),m=o.useMemo((()=>({setPositionReference:i})),[]),v=o.useMemo((()=>({reference:a||r.reference||null,floating:r.floating||null,domReference:r.reference})),[a,r.reference,r.floating]);return o.useMemo((()=>({dataRef:s,open:n,onOpenChange:d,elements:v,events:l,floatingId:u,refs:m})),[n,d,v,l,u,m])}({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||t,l=r.elements,[c,a]=o.useState(null),[i,d]=o.useState(null),m=(null==l?void 0:l.domReference)||c,g=o.useRef(null),R=S();v((()=>{m&&(g.current=m)}),[m]);const C=(0,s.we)({...e,elements:{...l,...i&&{reference:i}}}),p=o.useCallback((e=>{const n=(0,u.vq)(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;d(n),C.refs.setReference(n)}),[C.refs]),w=o.useCallback((e=>{((0,u.vq)(e)||null===e)&&(g.current=e,a(e)),((0,u.vq)(C.refs.reference.current)||null===C.refs.reference.current||null!==e&&!(0,u.vq)(e))&&C.refs.setReference(e)}),[C.refs]),M=o.useMemo((()=>({...C.refs,setReference:w,setPositionReference:p,domReference:g})),[C.refs,w,p]),k=o.useMemo((()=>({...C.elements,domReference:m})),[C.elements,m]),b=o.useMemo((()=>({...C,...r,refs:M,elements:k,nodeId:n})),[C,M,k,n,r]);return v((()=>{r.dataRef.current.floatingContext=b;const e=null==R?void 0:R.nodesRef.current.find((e=>e.id===n));e&&(e.context=b)})),o.useMemo((()=>({...C,context:b,refs:M,elements:k})),[C,M,k,b])}}}]);
//# sourceMappingURL=5c0b189e-20d3b29c2c94827e31c7.js.map