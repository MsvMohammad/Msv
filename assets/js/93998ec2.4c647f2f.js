"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8007],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>d});var r=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(l),d=n,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return l?r.createElement(f,i(i({ref:t},c),{},{components:l})):r.createElement(f,i({ref:t},c))}));function d(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<a;s++)i[s]=l[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},2223:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=l(7462),n=(l(7294),l(3905));const a={id:"BaselineData",title:"Interface: BaselineData",sidebar_label:"BaselineData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},i=void 0,o={unversionedId:"api/interfaces/BaselineData",id:"api/interfaces/BaselineData",title:"Interface: BaselineData",description:"Structure describing a single item of data for baseline series",source:"@site/docs/api/interfaces/BaselineData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/BaselineData",permalink:"/lightweight-charts/docs/next/api/interfaces/BaselineData",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BaselineData",title:"Interface: BaselineData",sidebar_label:"BaselineData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"topFillColor1",id:"topfillcolor1",level:3},{value:"topFillColor2",id:"topfillcolor2",level:3},{value:"topLineColor",id:"toplinecolor",level:3},{value:"bottomFillColor1",id:"bottomfillcolor1",level:3},{value:"bottomFillColor2",id:"bottomfillcolor2",level:3},{value:"bottomLineColor",id:"bottomlinecolor",level:3},{value:"time",id:"time",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"value",id:"value",level:3},{value:"Inherited from",id:"inherited-from-1",level:4}],c={toc:s};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Structure describing a single item of data for baseline series"),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SingleValueData"},(0,n.kt)("inlineCode",{parentName:"a"},"SingleValueData"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"BaselineData"))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"topfillcolor1"},"topFillColor1"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"topFillColor1"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Optional top area top fill color value for certain data item. If missed, color from options is used"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"topfillcolor2"},"topFillColor2"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"topFillColor2"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Optional top area bottom fill color value for certain data item. If missed, color from options is used"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"toplinecolor"},"topLineColor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"topLineColor"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Optional top area line color value for certain data item. If missed, color from options is used"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"bottomfillcolor1"},"bottomFillColor1"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"bottomFillColor1"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Optional bottom area top fill color value for certain data item. If missed, color from options is used"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"bottomfillcolor2"},"bottomFillColor2"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"bottomFillColor2"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Optional bottom area bottom fill color value for certain data item. If missed, color from options is used"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"bottomlinecolor"},"bottomLineColor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"bottomLineColor"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Optional bottom area line color value for certain data item. If missed, color from options is used"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"time"},"time"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"time"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#time"},(0,n.kt)("inlineCode",{parentName:"a"},"Time"))),(0,n.kt)("p",null,"The time of the data."),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SingleValueData"},"SingleValueData"),".",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SingleValueData#time"},"time")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"value"},"value"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"value"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Price value of the data."),(0,n.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SingleValueData"},"SingleValueData"),".",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SingleValueData#value"},"value")))}u.isMDXComponent=!0}}]);