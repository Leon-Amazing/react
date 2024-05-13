"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[461],{15461:function(un,Rt,v){v.d(Rt,{Z:function(){return tn}});var q=v(84744),Zt=v(11837),L=v(26847),r=v(93236),Ft=v(84875),O=v.n(Ft),Mt=v(81326),_=v(39668),F=v(22815),it=v(44374),lt=v(47166),T=v(28405),st=v(3229),ct=v(74867),ut=v(11841),W=v(90581);const Lt=new T.E4("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),Dt=new T.E4("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),At=new T.E4("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),Ht=new T.E4("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),Wt=new T.E4("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),Gt=new T.E4("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),Vt=t=>{const{componentCls:e,iconCls:n,antCls:o,badgeFontHeight:a,badgeShadowSize:i,badgeHeightSm:s,motionDurationSlow:c,badgeStatusSize:u,marginXS:l,badgeRibbonOffset:m}=t,d=`${o}-scroll-number`,p=`${o}-ribbon`,f=`${o}-ribbon-wrapper`,y=(0,st.Z)(t,(h,b)=>{let{darkColor:C}=b;return{[`${e}-color-${h}`]:{background:C}}}),g=(0,st.Z)(t,(h,b)=>{let{darkColor:C}=b;return{[`&${p}-color-${h}`]:{background:C,color:C}}});return{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,W.Wf)(t)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${e}-count`]:{zIndex:t.badgeZIndex,minWidth:t.badgeHeight,height:t.badgeHeight,color:t.badgeTextColor,fontWeight:t.badgeFontWeight,fontSize:t.badgeFontSize,lineHeight:`${t.badgeHeight}px`,whiteSpace:"nowrap",textAlign:"center",background:t.badgeColor,borderRadius:t.badgeHeight/2,boxShadow:`0 0 0 ${i}px ${t.badgeShadowColor}`,transition:`background ${t.motionDurationMid}`,a:{color:t.badgeTextColor},"a:hover":{color:t.badgeTextColor},"a:hover &":{background:t.badgeColorHover}},[`${e}-count-sm`]:{minWidth:s,height:s,fontSize:t.badgeFontSizeSm,lineHeight:`${s}px`,borderRadius:s/2},[`${e}-multiple-words`]:{padding:`0 ${t.paddingXS}px`},[`${e}-dot`]:{zIndex:t.badgeZIndex,width:t.badgeDotSize,minWidth:t.badgeDotSize,height:t.badgeDotSize,background:t.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${i}px ${t.badgeShadowColor}`},[`${e}-dot${d}`]:{transition:`background ${c}`},[`${e}-count, ${e}-dot, ${d}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`${n}-spin`]:{animationName:Gt,animationDuration:t.motionDurationMid,animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${e}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${e}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:u,height:u,verticalAlign:"middle",borderRadius:"50%"},[`${e}-status-success`]:{backgroundColor:t.colorSuccess},[`${e}-status-processing`]:{position:"relative",color:t.colorPrimary,backgroundColor:t.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:i,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:Lt,animationDuration:t.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${e}-status-default`]:{backgroundColor:t.colorTextPlaceholder},[`${e}-status-error`]:{backgroundColor:t.colorError},[`${e}-status-warning`]:{backgroundColor:t.colorWarning},[`${e}-status-text`]:{marginInlineStart:l,color:t.colorText,fontSize:t.fontSize}}}),y),{[`${e}-zoom-appear, ${e}-zoom-enter`]:{animationName:Dt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"},[`${e}-zoom-leave`]:{animationName:At,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"},[`&${e}-not-a-wrapper`]:{[`${e}-zoom-appear, ${e}-zoom-enter`]:{animationName:Ht,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack},[`${e}-zoom-leave`]:{animationName:Wt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack},[`&:not(${e}-status)`]:{verticalAlign:"middle"},[`${d}-custom-component, ${e}-count`]:{transform:"none"},[`${d}-custom-component, ${d}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${d}`]:{overflow:"hidden",[`${d}-only`]:{position:"relative",display:"inline-block",height:t.badgeHeight,transition:`all ${t.motionDurationSlow} ${t.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${d}-only-unit`]:{height:t.badgeHeight,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${d}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${e}-count, ${e}-dot, ${d}-custom-component`]:{transform:"translate(-50%, -50%)"}}}),[`${f}`]:{position:"relative"},[`${p}`]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,W.Wf)(t)),{position:"absolute",top:l,padding:`0 ${t.paddingXS}px`,color:t.colorPrimary,lineHeight:`${a}px`,whiteSpace:"nowrap",backgroundColor:t.colorPrimary,borderRadius:t.borderRadiusSM,[`${p}-text`]:{color:t.colorTextLightSolid},[`${p}-corner`]:{position:"absolute",top:"100%",width:m,height:m,color:"currentcolor",border:`${m/2}px solid`,transform:t.badgeRibbonCornerTransform,transformOrigin:"top",filter:t.badgeRibbonCornerFilter}}),g),{[`&${p}-placement-end`]:{insetInlineEnd:-m,borderEndEndRadius:0,[`${p}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${p}-placement-start`]:{insetInlineStart:-m,borderEndStartRadius:0,[`${p}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}};var dt=(0,ct.Z)("Badge",t=>{const{fontSize:e,lineHeight:n,fontSizeSM:o,lineWidth:a,marginXS:i,colorBorderBg:s}=t,c=Math.round(e*n),u=a,l="auto",m=c-2*u,d=t.colorBgContainer,p="normal",f=o,y=t.colorError,g=t.colorErrorHover,h=e,b=o/2,C=o,E=o/2,$=(0,ut.TS)(t,{badgeFontHeight:c,badgeShadowSize:u,badgeZIndex:l,badgeHeight:m,badgeTextColor:d,badgeFontWeight:p,badgeFontSize:f,badgeColor:y,badgeColorHover:g,badgeShadowColor:s,badgeHeightSm:h,badgeDotSize:b,badgeFontSizeSm:C,badgeStatusSize:E,badgeProcessingDuration:"1.2s",badgeRibbonOffset:i,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"});return[Vt($)]}),Xt=t=>{let{className:e,prefixCls:n,style:o,color:a,children:i,text:s,placement:c="end"}=t;const{getPrefixCls:u,direction:l}=r.useContext(F.E_),m=u("ribbon",n),d=(0,it.o2)(a,!1),p=O()(m,`${m}-placement-${c}`,{[`${m}-rtl`]:l==="rtl",[`${m}-color-${a}`]:d},e),[f,y]=dt(m),g={},h={};return a&&!d&&(g.background=a,h.color=a),f(r.createElement("div",{className:O()(`${m}-wrapper`,y)},i,r.createElement("div",{className:O()(p,y),style:Object.assign(Object.assign({},g),o)},r.createElement("span",{className:`${m}-text`},s),r.createElement("div",{className:`${m}-corner`,style:h}))))};function mt(t){let{prefixCls:e,value:n,current:o,offset:a=0}=t,i;return a&&(i={position:"absolute",top:`${a}00%`,left:0}),r.createElement("span",{style:i,className:O()(`${e}-only-unit`,{current:o})},n)}function Ut(t,e,n){let o=t,a=0;for(;(o+10)%10!==e;)o+=n,a+=n;return a}function Kt(t){const{prefixCls:e,count:n,value:o}=t,a=Number(o),i=Math.abs(n),[s,c]=r.useState(a),[u,l]=r.useState(i),m=()=>{c(a),l(i)};r.useEffect(()=>{const f=setTimeout(()=>{m()},1e3);return()=>{clearTimeout(f)}},[a]);let d,p;if(s===a||Number.isNaN(a)||Number.isNaN(s))d=[r.createElement(mt,Object.assign({},t,{key:a,current:!0}))],p={transition:"none"};else{d=[];const f=a+10,y=[];for(let b=a;b<=f;b+=1)y.push(b);const g=y.findIndex(b=>b%10===s);d=y.map((b,C)=>{const E=b%10;return r.createElement(mt,Object.assign({},t,{key:b,value:E,offset:C-g,current:C===g}))});const h=u<i?1:-1;p={transform:`translateY(${-Ut(s,a,h)}00%)`}}return r.createElement("span",{className:`${e}-only`,style:p,onTransitionEnd:m},d)}var Yt=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(n[o[a]]=t[o[a]]);return n},Jt=r.forwardRef((t,e)=>{var{prefixCls:n,count:o,className:a,motionClassName:i,style:s,title:c,show:u,component:l="sup",children:m}=t,d=Yt(t,["prefixCls","count","className","motionClassName","style","title","show","component","children"]);const{getPrefixCls:p}=r.useContext(F.E_),f=p("scroll-number",n),y=Object.assign(Object.assign({},d),{"data-show":u,style:s,className:O()(f,a,i),title:c});let g=o;if(o&&Number(o)%1===0){const h=String(o).split("");g=h.map((b,C)=>r.createElement(Kt,{prefixCls:f,count:Number(o),value:b,key:h.length-C}))}return s&&s.borderColor&&(y.style=Object.assign(Object.assign({},s),{boxShadow:`0 0 0 1px ${s.borderColor} inset`})),m?(0,lt.Tm)(m,h=>({className:O()(`${f}-custom-component`,h==null?void 0:h.className,i)})):r.createElement(l,Object.assign({},y,{ref:e}),g)}),Qt=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(n[o[a]]=t[o[a]]);return n};const kt=(t,e)=>{const{prefixCls:n,scrollNumberPrefixCls:o,children:a,status:i,text:s,color:c,count:u=null,overflowCount:l=99,dot:m=!1,size:d="default",title:p,offset:f,style:y,className:g,rootClassName:h,showZero:b=!1}=t,C=Qt(t,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","showZero"]),{getPrefixCls:E,direction:$}=r.useContext(F.E_),S=E("badge",n),[N,Z]=dt(S),B=u>l?`${l}+`:u,x=B==="0"||B===0,Y=u===null||x&&!b,P=(i!=null||c!=null)&&Y,j=m&&!x,z=j?"":B,D=(0,r.useMemo)(()=>(z==null||z===""||x&&!b)&&!j,[z,x,b,j]),It=(0,r.useRef)(u);D||(It.current=u);const A=It.current,jt=(0,r.useRef)(z);D||(jt.current=z);const ot=jt.current,Tt=(0,r.useRef)(j);D||(Tt.current=j);const J=(0,r.useMemo)(()=>{if(!f)return Object.assign({},y);const R={marginTop:f[1]};return $==="rtl"?R.left=parseInt(f[0],10):R.right=-parseInt(f[0],10),Object.assign(Object.assign({},R),y)},[$,f,y]),en=p!=null?p:typeof A=="string"||typeof A=="number"?A:void 0,nn=D||!s?null:r.createElement("span",{className:`${S}-status-text`},s),on=!A||typeof A!="object"?void 0:(0,lt.Tm)(A,R=>({style:Object.assign(Object.assign({},J),R.style)})),Q=(0,it.o2)(c,!1),rn=O()({[`${S}-status-dot`]:P,[`${S}-status-${i}`]:!!i,[`${S}-color-${c}`]:Q}),rt={};c&&!Q&&(rt.color=c,rt.background=c);const zt=O()(S,{[`${S}-status`]:P,[`${S}-not-a-wrapper`]:!a,[`${S}-rtl`]:$==="rtl"},g,h,Z);if(!a&&P){const R=J.color;return N(r.createElement("span",Object.assign({},C,{className:zt,style:J}),r.createElement("span",{className:rn,style:rt}),s&&r.createElement("span",{style:{color:R},className:`${S}-status-text`},s)))}return N(r.createElement("span",Object.assign({ref:e},C,{className:zt}),a,r.createElement(_.ZP,{visible:!D,motionName:`${S}-zoom`,motionAppear:!1,motionDeadline:1e3},R=>{let{className:an,ref:ln}=R;const sn=E("scroll-number",o),at=Tt.current,cn=O()({[`${S}-dot`]:at,[`${S}-count`]:!at,[`${S}-count-sm`]:d==="small",[`${S}-multiple-words`]:!at&&ot&&ot.toString().length>1,[`${S}-status-${i}`]:!!i,[`${S}-color-${c}`]:Q});let k=Object.assign({},J);return c&&!Q&&(k=k||{},k.background=c),r.createElement(Jt,{prefixCls:sn,show:!D,motionClassName:an,className:cn,count:ot,title:en,style:k,key:"scrollNumber",ref:ln},on)}),nn))},ft=r.forwardRef(kt);ft.Ribbon=Xt;var qt=ft,_t=v(64821),I=v(185),te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]},name:"file-text",theme:"outlined"},ee=te,gt=v(40963),bt=function(e,n){return r.createElement(gt.Z,(0,I.Z)((0,I.Z)({},e),{},{ref:n,icon:ee}))};bt.displayName="FileTextOutlined";var pt=r.forwardRef(bt);const ne=t=>{const{icon:e,description:n,prefixCls:o,className:a}=t,i=r.createElement("div",{className:`${o}-icon`},r.createElement(pt,null));return r.createElement("div",{onClick:t.onClick,onFocus:t.onFocus,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,className:O()(a,`${o}-content`)},e||n?r.createElement(r.Fragment,null,e&&r.createElement("div",{className:`${o}-icon`},e),n&&r.createElement("div",{className:`${o}-description`},n)):i)};var oe=(0,r.memo)(ne);const ht=r.createContext(void 0),{Provider:re}=ht;var vt=ht,Ct=v(79406);const ae=new T.E4("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),ie=new T.E4("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),le=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:n}=t,o=`${n}-fade`,a=e?"&":"";return[(0,Ct.R)(o,ae,ie,t.motionDurationMid,e),{[`
        ${a}${o}-enter,
        ${a}${o}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${a}${o}-leave`]:{animationTimingFunction:"linear"}}]};var yt=t=>t===0?0:t-Math.sqrt(Math.pow(t,2)/2);const se=t=>{const{componentCls:e,floatButtonSize:n,motionDurationSlow:o,motionEaseInOutCirc:a}=t,i=`${e}-group`,s=new T.E4("antFloatButtonMoveDownIn",{"0%":{transform:`translate3d(0, ${n}px, 0)`,transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),c=new T.E4("antFloatButtonMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:`translate3d(0, ${n}px, 0)`,transformOrigin:"0 0",opacity:0}});return[{[`${i}-wrap`]:Object.assign({},(0,Ct.R)(`${i}-wrap`,s,c,o,!0))},{[`${i}-wrap`]:{[`
          &${i}-wrap-enter,
          &${i}-wrap-appear
        `]:{opacity:0,animationTimingFunction:a},[`&${i}-wrap-leave`]:{animationTimingFunction:a}}}]},ce=t=>{const{antCls:e,componentCls:n,floatButtonSize:o,margin:a,borderRadiusLG:i,borderRadiusSM:s,badgeOffset:c,floatButtonBodyPadding:u}=t,l=`${n}-group`;return{[l]:Object.assign(Object.assign({},(0,W.Wf)(t)),{zIndex:99,display:"block",border:"none",position:"fixed",width:o,height:"auto",boxShadow:"none",minHeight:o,insetInlineEnd:t.floatButtonInsetInlineEnd,insetBlockEnd:t.floatButtonInsetBlockEnd,borderRadius:i,[`${l}-wrap`]:{zIndex:-1,display:"block",position:"relative",marginBottom:a},[`&${l}-rtl`]:{direction:"rtl"},[n]:{position:"static"}}),[`${l}-circle`]:{[`${n}-circle:not(:last-child)`]:{marginBottom:t.margin,[`${n}-body`]:{width:o,height:o,borderRadius:"50%"}}},[`${l}-square`]:{[`${n}-square`]:{borderRadius:0,padding:0,"&:first-child":{borderStartStartRadius:i,borderStartEndRadius:i},"&:last-child":{borderEndStartRadius:i,borderEndEndRadius:i},"&:not(:last-child)":{borderBottom:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-badge`]:{[`${e}-badge-count`]:{top:-(u+c),insetInlineEnd:-(u+c)}}},[`${l}-wrap`]:{display:"block",borderRadius:i,boxShadow:t.boxShadowSecondary,[`${n}-square`]:{boxShadow:"none",marginTop:0,borderRadius:0,padding:u,"&:first-child":{borderStartStartRadius:i,borderStartEndRadius:i},"&:last-child":{borderEndStartRadius:i,borderEndEndRadius:i},"&:not(:last-child)":{borderBottom:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${n}-body`]:{width:t.floatButtonBodySize,height:t.floatButtonBodySize}}}},[`${l}-circle-shadow`]:{boxShadow:"none"},[`${l}-square-shadow`]:{boxShadow:t.boxShadowSecondary,[`${n}-square`]:{boxShadow:"none",padding:u,[`${n}-body`]:{width:t.floatButtonBodySize,height:t.floatButtonBodySize,borderRadius:s}}}}},ue=t=>{const{antCls:e,componentCls:n,floatButtonBodyPadding:o,floatButtonIconSize:a,floatButtonSize:i,borderRadiusLG:s,badgeOffset:c,dotOffsetInSquare:u,dotOffsetInCircle:l}=t;return{[n]:Object.assign(Object.assign({},(0,W.Wf)(t)),{border:"none",position:"fixed",cursor:"pointer",zIndex:99,display:"block",justifyContent:"center",alignItems:"center",width:i,height:i,insetInlineEnd:t.floatButtonInsetInlineEnd,insetBlockEnd:t.floatButtonInsetBlockEnd,boxShadow:t.boxShadowSecondary,"&-pure":{position:"relative",inset:"auto"},"&:empty":{display:"none"},[`${e}-badge`]:{width:"100%",height:"100%",[`${e}-badge-count`]:{transform:"translate(0, 0)",transformOrigin:"center",top:-c,insetInlineEnd:-c}},[`${n}-body`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",transition:`all ${t.motionDurationMid}`,[`${n}-content`]:{overflow:"hidden",textAlign:"center",minHeight:i,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:`${o/2}px ${o}px`,[`${n}-icon`]:{textAlign:"center",margin:"auto",width:a,fontSize:a,lineHeight:1}}}}),[`${n}-rtl`]:{direction:"rtl"},[`${n}-circle`]:{height:i,borderRadius:"50%",[`${e}-badge`]:{[`${e}-badge-dot`]:{top:l,insetInlineEnd:l}},[`${n}-body`]:{borderRadius:"50%"}},[`${n}-square`]:{height:"auto",minHeight:i,borderRadius:s,[`${e}-badge`]:{[`${e}-badge-dot`]:{top:u,insetInlineEnd:u}},[`${n}-body`]:{height:"auto",borderRadius:s}},[`${n}-default`]:{backgroundColor:t.floatButtonBackgroundColor,transition:`background-color ${t.motionDurationMid}`,[`${n}-body`]:{backgroundColor:t.floatButtonBackgroundColor,transition:`background-color ${t.motionDurationMid}`,"&:hover":{backgroundColor:t.colorFillContent},[`${n}-content`]:{[`${n}-icon`]:{color:t.colorText},[`${n}-description`]:{display:"flex",alignItems:"center",lineHeight:`${t.fontSizeLG}px`,color:t.colorText,fontSize:t.fontSizeSM}}}},[`${n}-primary`]:{backgroundColor:t.colorPrimary,[`${n}-body`]:{backgroundColor:t.colorPrimary,transition:`background-color ${t.motionDurationMid}`,"&:hover":{backgroundColor:t.colorPrimaryHover},[`${n}-content`]:{[`${n}-icon`]:{color:t.colorTextLightSolid},[`${n}-description`]:{display:"flex",alignItems:"center",lineHeight:`${t.fontSizeLG}px`,color:t.colorTextLightSolid,fontSize:t.fontSizeSM}}}}}};var tt=(0,ct.Z)("FloatButton",t=>{const{colorTextLightSolid:e,colorBgElevated:n,controlHeightLG:o,marginXXL:a,marginLG:i,fontSize:s,fontSizeIcon:c,controlItemBgHover:u,paddingXXS:l,borderRadiusLG:m}=t,d=(0,ut.TS)(t,{floatButtonBackgroundColor:n,floatButtonColor:e,floatButtonHoverBackgroundColor:u,floatButtonFontSize:s,floatButtonIconSize:c*1.5,floatButtonSize:o,floatButtonInsetBlockEnd:a,floatButtonInsetInlineEnd:i,floatButtonBodySize:o-l*2,floatButtonBodyPadding:l,badgeOffset:l*1.5,dotOffsetInCircle:yt(o/2),dotOffsetInSquare:yt(m)});return[ce(d),ue(d),le(t),se(d)]}),de=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(n[o[a]]=t[o[a]]);return n};const G="float-btn",me=(t,e)=>{const{prefixCls:n,className:o,rootClassName:a,type:i="default",shape:s="circle",icon:c,description:u,tooltip:l,badge:m={}}=t,d=de(t,["prefixCls","className","rootClassName","type","shape","icon","description","tooltip","badge"]),{getPrefixCls:p,direction:f}=(0,r.useContext)(F.E_),y=(0,r.useContext)(vt),g=p(G,n),[h,b]=tt(g),C=y||s,E=O()(b,g,o,a,`${g}-${i}`,`${g}-${C}`,{[`${g}-rtl`]:f==="rtl"}),$=(0,r.useMemo)(()=>(0,Mt.Z)(m,["title","children","status","text"]),[m]),S=(0,r.useMemo)(()=>({prefixCls:g,description:u,icon:c,type:i}),[g,u,c,i]),N=r.createElement(_t.Z,{title:l,placement:f==="rtl"?"right":"left"},r.createElement(qt,Object.assign({},$),r.createElement("div",{className:`${g}-body`},r.createElement(oe,Object.assign({},S)))));return h(t.href?r.createElement("a",Object.assign({ref:e},d,{className:E}),N):r.createElement("button",Object.assign({ref:e},d,{className:E,type:"button"}),N))};var M=r.forwardRef(me),fe=v(79795),ge=v(37348);const be=t=>{const{prefixCls:e,className:n,style:o,shape:a="circle",type:i="default",icon:s=r.createElement(pt,null),closeIcon:c=r.createElement(fe.Z,null),description:u,trigger:l,children:m,onOpenChange:d}=t,{direction:p,getPrefixCls:f}=(0,r.useContext)(F.E_),y=f(G,e),[g,h]=tt(y),b=`${y}-group`,C=O()(b,h,n,{[`${b}-rtl`]:p==="rtl",[`${b}-${a}`]:a,[`${b}-${a}-shadow`]:!l}),E=O()(h,`${b}-wrap`),[$,S]=(0,ge.Z)(!1,{value:t.open}),N=(0,r.useRef)(null),Z=(0,r.useRef)(null),B=(0,r.useMemo)(()=>l==="hover"?{onMouseEnter(){S(!0),d==null||d(!0)},onMouseLeave(){S(!1),d==null||d(!1)}}:{},[l]),x=()=>{S(P=>(d==null||d(!P),!P))},Y=(0,r.useCallback)(P=>{var j,z;if(!((j=N.current)===null||j===void 0)&&j.contains(P.target)){!((z=Z.current)===null||z===void 0)&&z.contains(P.target)&&x();return}S(!1),d==null||d(!1)},[l]);return(0,r.useEffect)(()=>{if(l==="click")return document.addEventListener("click",Y),()=>{document.removeEventListener("click",Y)}},[l]),g(r.createElement(re,{value:a},r.createElement("div",Object.assign({ref:N,className:C,style:o},B),l&&["click","hover"].includes(l)?r.createElement(r.Fragment,null,r.createElement(_.ZP,{visible:$,motionName:`${b}-wrap`},P=>{let{className:j}=P;return r.createElement("div",{className:O()(j,E)},m)}),r.createElement(M,{ref:Z,type:i,shape:a,icon:$?c:s,description:u})):m)))};var St=(0,r.memo)(be),pe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},he=pe,$t=function(e,n){return r.createElement(gt.Z,(0,I.Z)((0,I.Z)({},e),{},{ref:n,icon:he}))};$t.displayName="VerticalAlignTopOutlined";var ve=r.forwardRef($t),Ce=v(36605),ye=v(5531),Se=v(83533),$e=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(n[o[a]]=t[o[a]]);return n};const xe=t=>{const{prefixCls:e,className:n,type:o="default",shape:a="circle",visibilityHeight:i=400,icon:s=r.createElement(ve,null),target:c,onClick:u,duration:l=450}=t,m=$e(t,["prefixCls","className","type","shape","visibilityHeight","icon","target","onClick","duration"]),[d,p]=(0,r.useState)(i===0),f=(0,r.useRef)(null),y=()=>f.current&&f.current.ownerDocument?f.current.ownerDocument:window,g=(0,Se.Z)(B=>{const x=(0,Ce.Z)(B.target,!0);p(x>=i)});(0,r.useEffect)(()=>{const x=(c||y)();return g({target:x}),x==null||x.addEventListener("scroll",g),()=>{g.cancel(),x==null||x.removeEventListener("scroll",g)}},[c]);const h=B=>{(0,ye.Z)(0,{getContainer:c||y,duration:l}),u==null||u(B)},{getPrefixCls:b}=(0,r.useContext)(F.E_),C=b(G,e),E=b(),[$]=tt(C),N=(0,r.useContext)(vt)||a,Z=Object.assign({prefixCls:C,icon:s,type:o,shape:N},m);return $(r.createElement(_.ZP,{visible:d,motionName:`${E}-fade`},B=>{let{className:x}=B;return r.createElement(M,Object.assign({ref:f},Z,{onClick:h,className:O()(n,x)}))}))};var xt=(0,r.memo)(xe),Ot=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(n[o[a]]=t[o[a]]);return n};const Et=t=>{var{backTop:e}=t,n=Ot(t,["backTop"]);return e?r.createElement(xt,Object.assign({},n,{visibilityHeight:0})):r.createElement(M,Object.assign({},n))};function Oe(t){var{className:e,items:n}=t,o=Ot(t,["className","items"]);const{prefixCls:a}=o,{getPrefixCls:i}=r.useContext(F.E_),c=`${i(G,a)}-pure`;return n?r.createElement(St,Object.assign({className:O()(e,c)},o),n.map((u,l)=>r.createElement(Et,Object.assign({key:l},u)))):r.createElement(Et,Object.assign({className:O()(e,c)},o))}var Ee=r.memo(Oe);M.BackTop=xt,M.Group=St,M._InternalPanelDoNotUseOrYouWillBeFired=Ee;var et=M;function we(t){return r.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},t,{style:Object.assign({verticalAlign:"-0.125em"},t.style),className:["nanqu-token-panel-icon",t.className].filter(Boolean).join(" ")}),r.createElement("g",{id:"Dark-\u9875\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Dark-\u9ED8\u8BA4",transform:"translate(-9.000000, -49.500000)",fill:"currentColor",fillRule:"nonzero"},r.createElement("g",{id:"Dark-\u7F16\u7EC4-17",transform:"translate(0.000000, 42.500000)"},r.createElement("g",{id:"Dark-moon",transform:"translate(9.268811, 7.500000)"},r.createElement("rect",{id:"Dark-\u77E9\u5F62",opacity:0,x:0,y:0,width:16,height:16}),r.createElement("path",{d:"M8,1.33333333 C8.14933333,1.33333333 8.29688889,1.33844444 8.44266667,1.34866666 C8.14755556,1.98422221 8,2.64577777 8,3.33333333 C8,3.96533333 8.12333333,4.56955555 8.37,5.146 C8.61666667,5.72244445 8.94822222,6.21888889 9.36466667,6.63533333 C9.78111112,7.05177777 10.2775556,7.38333332 10.854,7.63 C11.4304444,7.87666668 12.0346667,8.00000001 12.6666667,8 C13.3542222,8 14.0157778,7.85244444 14.6513333,7.55733333 C14.6615556,7.70311111 14.6666667,7.85066667 14.6666667,8 C14.6666667,8.604 14.5868889,9.19422222 14.4273333,9.77066667 C14.2677778,10.3471111 14.0446667,10.8793333 13.758,11.3673333 C13.4713333,11.8553333 13.1233333,12.3042222 12.714,12.714 C12.3046667,13.1237778 11.8557778,13.4717778 11.3673333,13.758 C10.8788889,14.0442222 10.3466667,14.2673333 9.77066667,14.4273333 C9.19466667,14.5873333 8.60444445,14.6671111 8,14.6666685 C7.39555555,14.6662222 6.80533333,14.5864444 6.22933333,14.4273333 C5.65333333,14.2682222 5.1211111,14.0451111 4.63266666,13.758 C4.14422221,13.4708889 3.69533332,13.1228889 3.28599998,12.714 C2.87666665,12.3051111 2.52866665,11.8562222 2.24199998,11.3673333 C1.95533332,10.8784444 1.73222221,10.3462222 1.57266666,9.77066667 C1.4131111,9.19511112 1.33333333,8.6048889 1.33333333,8 C1.33333333,7.3951111 1.4131111,6.80488888 1.57266666,6.22933333 C1.73222221,5.65377778 1.95533332,5.12155555 2.24199998,4.63266666 C2.52866665,4.14377776 2.87666665,3.69488887 3.28599998,3.28599998 C3.69533332,2.8771111 4.14422221,2.5291111 4.63266666,2.24199998 C5.1211111,1.95488887 5.65333333,1.73177776 6.22933333,1.57266666 C6.80533333,1.41355555 7.39555555,1.33377778 8,1.33333333 Z M6.68733333,2.828 C6.11444444,2.97377778 5.58066667,3.20977778 5.086,3.536 C4.59133333,3.86222222 4.166,4.24933333 3.81,4.69733333 C3.454,5.14533333 3.17444444,5.65488889 2.97133333,6.226 C2.76822221,6.79711111 2.66666666,7.38822222 2.66666666,7.99933333 C2.66666666,8.72155555 2.80733332,9.41155555 3.08866666,10.0693333 C3.36999999,10.7271111 3.74933332,11.2948889 4.22666666,11.7726667 C4.70399999,12.2504444 5.27177777,12.6297778 5.92999998,12.9106667 C6.5882222,13.1915556 7.2782222,13.3322222 7.99999998,13.3326667 C8.6111111,13.3326667 9.20222221,13.2311111 9.77333331,13.028 C10.3444444,12.8248889 10.854,12.5453333 11.302,12.1893333 C11.75,11.8333333 12.1371111,11.408 12.4633333,10.9133333 C12.7895555,10.4186666 13.0255555,9.88488887 13.1713333,9.31199998 C13.022,9.32577777 12.8535555,9.33266666 12.666,9.33266666 C11.8535555,9.33266666 11.0775555,9.17377777 10.338,8.85599998 C9.59844443,8.5382222 8.96044443,8.11111109 8.42399998,7.57466666 C7.88755554,7.03822222 7.46044443,6.40022222 7.14266666,5.66066666 C6.82488889,4.92111109 6.66599999,4.14511109 6.66599998,3.33266666 C6.66599998,3.1451111 6.67288888,2.97666666 6.68666666,2.82733333 L6.68733333,2.828 Z",id:"Dark-\u5F62\u72B6"}))))))}var Be=we;function Ne(t){return r.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 17 16",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},t,{style:Object.assign({verticalAlign:"-0.125em"},t.style),className:["nanqu-token-panel-icon",t.className].filter(Boolean).join(" ")}),r.createElement("g",{id:"Compact-\u9875\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Compact-\u9ED8\u8BA4",transform:"translate(-9.000000, -82.500000)",fill:"currentColor",fillRule:"nonzero"},r.createElement("g",{id:"Compact-\u9009\u9879\u4E00",transform:"translate(9.268811, 79.500000)"},r.createElement("g",{id:"Compact-smaller",transform:"translate(0.000000, 3.000000)"},r.createElement("rect",{id:"Compact-\u77E9\u5F62",opacity:0,x:0,y:0,width:16,height:16}),r.createElement("path",{d:"M10,14 L10,12 C10,10.8666667 10.8666667,10 12,10 L14,10 C14.4,10 14.6666667,10.2666667 14.6666667,10.6666667 C14.6666667,11.0666667 14.4,11.3333333 14,11.3333333 L12,11.3333333 C11.6,11.3333333 11.3333333,11.6 11.3333333,12 L11.3333333,14 C11.3333333,14.4 11.0666667,14.6666667 10.6666667,14.6666667 C10.2666667,14.6666667 10,14.4 10,14 L10,14 Z M4.66666667,14 L4.66666667,12 C4.66666667,11.6 4.4,11.3333333 4,11.3333333 L2,11.3333333 C1.6,11.3333333 1.33333333,11.0666667 1.33333333,10.6666667 C1.33333333,10.2666667 1.6,10 2,10 L4,10 C5.13333333,10 6,10.8666667 6,12 L6,14 C6,14.4 5.73333333,14.6666667 5.33333333,14.6666667 C4.93333333,14.6666667 4.66666666,14.4 4.66666667,14 L4.66666667,14 Z M12,6 C10.8666667,6 10,5.13333333 10,4 L10,2 C10,1.6 10.2666667,1.33333333 10.6666667,1.33333333 C11.0666667,1.33333333 11.3333333,1.6 11.3333333,2 L11.3333333,4 C11.3333333,4.4 11.6,4.66666667 12,4.66666667 L14,4.66666667 C14.4,4.66666667 14.6666667,4.93333334 14.6666667,5.33333333 C14.6666667,5.73333331 14.4,6 14,6 L12,6 L12,6 Z M2,6 C1.6,6 1.33333333,5.73333333 1.33333333,5.33333333 C1.33333333,4.93333333 1.6,4.66666666 2,4.66666667 L4,4.66666667 C4.4,4.66666667 4.66666667,4.4 4.66666667,4 L4.66666667,2 C4.66666667,1.6 4.93333334,1.33333333 5.33333333,1.33333333 C5.73333331,1.33333333 6,1.6 6,2 L6,4 C6,5.13333333 5.13333333,6 4,6 L2,6 Z",id:"Compact-\u5F62\u72B6"}))))))}var Pe=Ne,Ie=v(45389),je=v(75188),Te=v(12888),V=v(67868),ze=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],wt=r.forwardRef(function(t,e){var n=t.className,o=t.component,a=t.viewBox,i=t.spin,s=t.rotate,c=t.tabIndex,u=t.onClick,l=t.children,m=(0,je.Z)(t,ze);(0,V.Kp)(Boolean(o||l),"Should have `component` prop or `children`."),(0,V.C3)();var d=r.useContext(Te.Z),p=d.prefixCls,f=p===void 0?"anticon":p,y=d.rootClassName,g=O()(y,f,n),h=O()((0,Ie.Z)({},"".concat(f,"-spin"),!!i)),b=s?{msTransform:"rotate(".concat(s,"deg)"),transform:"rotate(".concat(s,"deg)")}:void 0,C=(0,I.Z)((0,I.Z)({},V.vD),{},{className:h,style:b,viewBox:a});a||delete C.viewBox;var E=function(){return o?r.createElement(o,(0,I.Z)({},C),l):l?((0,V.Kp)(Boolean(a)||r.Children.count(l)===1&&r.isValidElement(l)&&r.Children.only(l).type==="use","Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),r.createElement("svg",(0,I.Z)((0,I.Z)({},C),{},{viewBox:a}),l)):null},$=c;return $===void 0&&u&&($=-1),r.createElement("span",(0,I.Z)((0,I.Z)({role:"img"},m),{},{ref:e,tabIndex:$,onClick:u,className:g}),E())});wt.displayName="AntdIcon";var Re=wt,w=v(44102);function X(){return X=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},X.apply(this,arguments)}var Ze=function(e){var n=r.useCallback(function(){return(0,w.tZ)("svg",X({width:20,height:20,viewBox:"0 0 24 24",fill:"currentColor"},e),(0,w.tZ)("g",{fillRule:"evenodd"},(0,w.tZ)("g",{fillRule:"nonzero"},(0,w.tZ)("path",{d:"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"}))))},[e]);return(0,w.tZ)(Re,X({component:n},e))},Fe=Ze;function Bt(t){return Ae(t)||De(t)||Le(t)||Me()}function Me(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(t,e){if(t){if(typeof t=="string")return nt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nt(t,e)}}function De(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ae(t){if(Array.isArray(t))return nt(t)}function nt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var He=function(e){var n=e.value,o=n===void 0?["light"]:n,a=e.onChange;return(0,w.tZ)(et.Group,{trigger:"click",icon:(0,w.tZ)(Fe,null)},(0,w.tZ)(et,{icon:(0,w.tZ)(Be,null),type:o.includes("dark")?"primary":"default",onClick:function(){o.includes("dark")?a(o.filter(function(s){return s!=="dark"})):a([].concat(Bt(o),["dark"]))},tooltip:(0,w.tZ)(L._H,{id:"app.theme.switch.dark"})}),(0,w.tZ)(et,{icon:(0,w.tZ)(Pe,null),type:o.includes("compact")?"primary":"default",onClick:function(){o.includes("compact")?a(o.filter(function(s){return s!=="compact"})):a([].concat(Bt(o),["compact"]))},tooltip:(0,w.tZ)(L._H,{id:"app.theme.switch.compact"})}))},We=He,Ge=v(4801);function H(t){return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(t)}function Nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,o)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Nt(Object(n),!0).forEach(function(o){Ve(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Nt(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function Ve(t,e,n){return e=Xe(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Xe(t){var e=Ue(t,"string");return H(e)==="symbol"?e:String(e)}function Ue(t,e){if(H(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(H(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function K(t,e){return Qe(t)||Je(t,e)||Ye(t,e)||Ke()}function Ke(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ye(t,e){if(t){if(typeof t=="string")return Pt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pt(t,e)}}function Pt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function Je(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var o,a,i,s,c=[],u=!0,l=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=i.call(n)).done)&&(c.push(o.value),c.length!==e);u=!0);}catch(m){l=!0,a=m}finally{try{if(!u&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw a}}return c}}function Qe(t){if(Array.isArray(t))return t}var ke=768,qe=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return e.map(function(n){return n==="dark"?q.Z.darkAlgorithm:n==="compact"?q.Z.compactAlgorithm:q.Z.defaultAlgorithm})},_e=function(){var e=(0,L.pC)(),n=(0,L.OI)(),o=K(n,3),a=o[2],i=(0,r.useState)({isMobile:!1,theme:["light"]}),s=K(i,2),c=s[0],u=c.theme,l=c.isMobile,m=s[1],d=(0,L.lr)(),p=K(d,2),f=p[0],y=p[1],g=(0,r.useCallback)(function(C){m(function(S){return U(U({},S),C)});var E=f.toString(),$=f;Object.entries(C).forEach(function(S){var N=K(S,2),Z=N[0],B=N[1];Z==="theme"&&($=(0,L.fW)(U(U({},$),{},{theme:B.filter(function(x){return x!=="light"})})),a(B.indexOf("dark")>-1?"dark":"light"))}),$.toString()!==E&&y($)},[f,y,a]),h=(0,r.useCallback)(function(){g({isMobile:window.innerWidth<ke})},[g]);(0,r.useEffect)(function(){var C=f.getAll("theme");return(0,r.startTransition)(function(){m({theme:C}),h()}),window.addEventListener("resize",h),function(){window.removeEventListener("resize",h)}},[f,h]);var b=(0,r.useMemo)(function(){return{isMobile:l,theme:u,updateSiteConfig:g}},[l,u,g]);return(0,w.tZ)(Ge.Z.Provider,{value:b},(0,w.tZ)(Zt.ZP,{theme:{algorithm:qe(u)}},e,(0,w.tZ)(We,{value:u,onChange:function(E){return g({theme:E})}})))},tn=_e}}]);