"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,c=m["".concat(p,".").concat(d)]||m[d]||k[d]||a;return n?r.createElement(c,i(i({ref:t},u),{},{components:n})):r.createElement(c,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const a={id:"TimeScaleOptions",title:"Interface: TimeScaleOptions",sidebar_label:"TimeScaleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},i=void 0,o={unversionedId:"api/interfaces/TimeScaleOptions",id:"version-3.8/api/interfaces/TimeScaleOptions",title:"Interface: TimeScaleOptions",description:"Options for the time scale; the horizontal scale at the bottom of the chart that displays the time of data.",source:"@site/versioned_docs/version-3.8/api/interfaces/TimeScaleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/TimeScaleOptions",permalink:"/lightweight-charts/docs/api/interfaces/TimeScaleOptions",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"TimeScaleOptions",title:"Interface: TimeScaleOptions",sidebar_label:"TimeScaleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"rightOffset",id:"rightoffset",level:3},{value:"barSpacing",id:"barspacing",level:3},{value:"minBarSpacing",id:"minbarspacing",level:3},{value:"fixLeftEdge",id:"fixleftedge",level:3},{value:"fixRightEdge",id:"fixrightedge",level:3},{value:"lockVisibleTimeRangeOnResize",id:"lockvisibletimerangeonresize",level:3},{value:"rightBarStaysOnScroll",id:"rightbarstaysonscroll",level:3},{value:"borderVisible",id:"bordervisible",level:3},{value:"borderColor",id:"bordercolor",level:3},{value:"visible",id:"visible",level:3},{value:"timeVisible",id:"timevisible",level:3},{value:"secondsVisible",id:"secondsvisible",level:3},{value:"shiftVisibleRangeOnNewBar",id:"shiftvisiblerangeonnewbar",level:3},{value:"tickMarkFormatter",id:"tickmarkformatter",level:3}],u={toc:s};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Options for the time scale; the horizontal scale at the bottom of the chart that displays the time of data."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"rightoffset"},"rightOffset"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"rightOffset"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"The margin space in bars from the right side of the chart."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"0")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"barspacing"},"barSpacing"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"barSpacing"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"The space between bars in pixels."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"6")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"minbarspacing"},"minBarSpacing"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"minBarSpacing"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"The minimum space between bars in pixels."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"0.5")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fixleftedge"},"fixLeftEdge"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"fixLeftEdge"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Prevent scrolling to the left of the first bar."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"fixrightedge"},"fixRightEdge"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"fixRightEdge"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Prevent scrolling to the right of the most recent bar."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lockvisibletimerangeonresize"},"lockVisibleTimeRangeOnResize"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"lockVisibleTimeRangeOnResize"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Prevent changing the visible time range during chart resizing."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"rightbarstaysonscroll"},"rightBarStaysOnScroll"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"rightBarStaysOnScroll"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Prevent the hovered bar from moving when scrolling."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"bordervisible"},"borderVisible"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"borderVisible"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Show the time scale border."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"bordercolor"},"borderColor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"borderColor"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"The time scale border color."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"'#2B2B43'")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"visible"},"visible"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"visible"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Show the time scale."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"timevisible"},"timeVisible"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"timeVisible"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Show the time, not just the date, in the time scale and vertical crosshair label."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"secondsvisible"},"secondsVisible"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"secondsVisible"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Show seconds in the time scale and vertical crosshair label in ",(0,l.kt)("inlineCode",{parentName:"p"},"hh:mm:ss")," format for intraday data."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"shiftvisiblerangeonnewbar"},"shiftVisibleRangeOnNewBar"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"shiftVisibleRangeOnNewBar"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Shift the visible range to the right (into the future) by the number of new bars when new data is added."),(0,l.kt)("p",null,"Note that this only applies when the last bar is visible."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tickmarkformatter"},"tickMarkFormatter"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"tickMarkFormatter"),": ",(0,l.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#tickmarkformatter"},(0,l.kt)("inlineCode",{parentName:"a"},"TickMarkFormatter"))),(0,l.kt)("p",null,"Tick marks formatter can be used to customize tick marks labels on the time axis."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"undefined")))}k.isMDXComponent=!0}}]);