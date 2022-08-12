"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6728],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||l;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const l={id:"SeriesOptionsCommon",title:"Interface: SeriesOptionsCommon",sidebar_label:"SeriesOptionsCommon",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},r=void 0,o={unversionedId:"api/interfaces/SeriesOptionsCommon",id:"version-3.8/api/interfaces/SeriesOptionsCommon",title:"Interface: SeriesOptionsCommon",description:"Represents options common for all types of series",source:"@site/versioned_docs/version-3.8/api/interfaces/SeriesOptionsCommon.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SeriesOptionsCommon",permalink:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"SeriesOptionsCommon",title:"Interface: SeriesOptionsCommon",sidebar_label:"SeriesOptionsCommon",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"lastValueVisible",id:"lastvaluevisible",level:3},{value:"title",id:"title",level:3},{value:"priceScaleId",id:"pricescaleid",level:3},{value:"visible",id:"visible",level:3},{value:"priceLineVisible",id:"pricelinevisible",level:3},{value:"priceLineSource",id:"pricelinesource",level:3},{value:"priceLineWidth",id:"pricelinewidth",level:3},{value:"priceLineColor",id:"pricelinecolor",level:3},{value:"priceLineStyle",id:"pricelinestyle",level:3},{value:"priceFormat",id:"priceformat",level:3},{value:"baseLineVisible",id:"baselinevisible",level:3},{value:"baseLineColor",id:"baselinecolor",level:3},{value:"baseLineWidth",id:"baselinewidth",level:3},{value:"baseLineStyle",id:"baselinestyle",level:3},{value:"autoscaleInfoProvider",id:"autoscaleinfoprovider",level:3},{value:"scaleMargins",id:"scalemargins",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Represents options common for all types of series"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"lastvaluevisible"},"lastValueVisible"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"lastValueVisible"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Visibility of the label with the latest visible price on the price scale."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"title"},"title"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"title"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"You can name series when adding it to a chart. This name will be displayed on the label next to the last value label."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"''")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pricescaleid"},"priceScaleId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"priceScaleId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Target price scale to bind new series to."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"'right'")," if right scale is visible and ",(0,a.kt)("inlineCode",{parentName:"p"},"'left'")," otherwise"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"visible"},"visible"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"visible"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Visibility of the series.\nIf the series is hidden, everything including price lines, baseline, price labels and markers, will also be hidden.\nPlease note that hiding a series is not equivalent to deleting it, since hiding does not affect the timeline at all, unlike deleting where the timeline can be changed (some points can be deleted)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pricelinevisible"},"priceLineVisible"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"priceLineVisible"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Show the price line. Price line is a horizontal line indicating the last price of the series."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pricelinesource"},"priceLineSource"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"priceLineSource"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/PriceLineSource"},(0,a.kt)("inlineCode",{parentName:"a"},"PriceLineSource"))),(0,a.kt)("p",null,"The source to use for the value of the price line."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/PriceLineSource#lastbar"},"LastBar")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pricelinewidth"},"priceLineWidth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"priceLineWidth"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#linewidth"},(0,a.kt)("inlineCode",{parentName:"a"},"LineWidth"))),(0,a.kt)("p",null,"Width of the price line."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pricelinecolor"},"priceLineColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"priceLineColor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Color of the price line.\nBy default, its color is set by the last bar color (or by line color on Line and Area charts)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"''")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pricelinestyle"},"priceLineStyle"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"priceLineStyle"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle"},(0,a.kt)("inlineCode",{parentName:"a"},"LineStyle"))),(0,a.kt)("p",null,"Price line style."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle#dashed"},"Dashed")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"priceformat"},"priceFormat"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"priceFormat"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#priceformat"},(0,a.kt)("inlineCode",{parentName:"a"},"PriceFormat"))),(0,a.kt)("p",null,"Price format."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{ type: 'price', precision: 2, minMove: 0.01 }")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"baselinevisible"},"baseLineVisible"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"baseLineVisible"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Visibility of base line. Suitable for percentage and ",(0,a.kt)("inlineCode",{parentName:"p"},"IndexedTo100")," scales."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"baselinecolor"},"baseLineColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"baseLineColor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Color of the base line in ",(0,a.kt)("inlineCode",{parentName:"p"},"IndexedTo100")," mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"'#B2B5BE'")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"baselinewidth"},"baseLineWidth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"baseLineWidth"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#linewidth"},(0,a.kt)("inlineCode",{parentName:"a"},"LineWidth"))),(0,a.kt)("p",null,"Base line width. Suitable for percentage and ",(0,a.kt)("inlineCode",{parentName:"p"},"IndexedTo10")," scales."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"baselinestyle"},"baseLineStyle"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"baseLineStyle"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle"},(0,a.kt)("inlineCode",{parentName:"a"},"LineStyle"))),(0,a.kt)("p",null,"Base line style. Suitable for percentage and indexedTo100 scales."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle#solid"},"Solid")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"autoscaleinfoprovider"},"autoscaleInfoProvider"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"autoscaleInfoProvider"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#autoscaleinfoprovider"},(0,a.kt)("inlineCode",{parentName:"a"},"AutoscaleInfoProvider"))),(0,a.kt)("p",null,"Override the default ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/AutoscaleInfo"},"AutoscaleInfo")," provider.\nBy default, the chart scales data automatically based on visible data range.\nHowever, for some reasons one could require overriding this behavior."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"undefined")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("p",null,"Use price range from 0 to 100 regardless the current visible range"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const firstSeries = chart.addLineSeries({\n    autoscaleInfoProvider: () => ({\n        priceRange: {\n            minValue: 0,\n            maxValue: 100,\n        },\n    }),\n});\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("p",null,"Adding a small pixel margins to the price range"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const firstSeries = chart.addLineSeries({\n    autoscaleInfoProvider: () => ({\n        priceRange: {\n            minValue: 0,\n            maxValue: 100,\n        },\n        margins: {\n            above: 10,\n            below: 10,\n        },\n    }),\n});\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("p",null,"Using the default implementation to adjust the result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const firstSeries = chart.addLineSeries({\n    autoscaleInfoProvider: original => {\n        const res = original();\n        if (res !== null) {\n            res.priceRange.minValue -= 10;\n            res.priceRange.maxValue += 10;\n        }\n        return res;\n    },\n});\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"scalemargins"},"scaleMargins"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"scaleMargins"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/PriceScaleMargins"},(0,a.kt)("inlineCode",{parentName:"a"},"PriceScaleMargins"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesApi#pricescale"},"priceScale")," method of the series to apply options instead."))}c.isMDXComponent=!0}}]);