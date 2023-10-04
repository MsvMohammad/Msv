var w=Object.defineProperty;var v=(f,t,a)=>t in f?w(f,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):f[t]=a;var d=(f,t,a)=>(v(f,typeof t!="symbol"?t+"":t,a),a);import{T,C as g}from"./lightweight-charts.production-185db84e.js";import{m as D}from"./sample-data-c7d89ab8.js";const k={...T,colors:[{line:"rgb(41, 98, 255)",area:"rgba(41, 98, 255, 0.2)"},{line:"rgb(225, 87, 90)",area:"rgba(225, 87, 90, 0.2)"},{line:"rgb(242, 142, 44)",area:"rgba(242, 142, 44, 0.2)"},{line:"rgb(164, 89, 209)",area:"rgba(164, 89, 209, 0.2)"},{line:"rgb(27, 156, 133)",area:"rgba(27, 156, 133, 0.2)"}],lineWidth:2};function B(f){let t=0;return f.map(a=>{const e=t+a;return t=e,e})}class C{constructor(){d(this,"_data",null);d(this,"_options",null)}draw(t,a){t.useBitmapCoordinateSpace(e=>this._drawImpl(e,a))}update(t,a){this._data=t,this._options=a}_drawImpl(t,a){if(this._data===null||this._data.bars.length===0||this._data.visibleRange===null||this._options===null)return;const e=this._options,i=this._data.bars.map(l=>({x:l.x,ys:B(l.originalData.values).map(u=>a(u)??0)})),m=a(0)??0;t.context.save();const x=this._createLinePaths(i,this._data.visibleRange,t,m*t.verticalPixelRatio),s=this._createAreas(x),h=e.colors.length;s.forEach((l,u)=>{t.context.fillStyle=e.colors[u%h].area,t.context.fill(l)}),t.context.lineWidth=e.lineWidth*t.verticalPixelRatio,t.context.lineJoin="round",x.forEach((l,u)=>{u!=0&&(t.context.beginPath(),t.context.strokeStyle=e.colors[(u-1)%h].line,t.context.stroke(l.path))}),t.context.restore()}_createLinePaths(t,a,e,i){const{horizontalPixelRatio:m,verticalPixelRatio:x}=e,s=[],h=[];let l=!0;for(let r=a.from;r<a.to;r++){const p=t[r];let o=0;p.ys.forEach((P,y)=>{if(y%2!==0)return;const n=p.x*m,c=P*x;l?(s[o]={path:new Path2D,first:{x:n,y:c},last:{x:n,y:c}},s[o].path.moveTo(n,c)):(s[o].path.lineTo(n,c),s[o].last.x=n,s[o].last.y=c),o+=1}),l=!1}l=!0;for(let r=a.to-1;r>=a.from;r--){const p=t[r];let o=0;p.ys.forEach((P,y)=>{if(y%2===0)return;const n=p.x*m,c=P*x;l?(h[o]={path:new Path2D,first:{x:n,y:c},last:{x:n,y:c}},h[o].path.moveTo(n,c)):(h[o].path.lineTo(n,c),h[o].last.x=n,h[o].last.y=c),o+=1}),l=!1}const u={path:new Path2D,first:{x:s[0].last.x,y:i},last:{x:s[0].first.x,y:i}};u.path.moveTo(s[0].last.x,i),u.path.lineTo(s[0].first.x,i);const _=[u];for(let r=0;r<s.length;r++)_.push(s[r]),r<h.length&&_.push(h[r]);return _}_createAreas(t){const a=[];for(let e=1;e<t.length;e++){const i=new Path2D(t[e-1].path);i.lineTo(t[e].first.x,t[e].first.y),i.addPath(t[e].path),i.lineTo(t[e-1].first.x,t[e-1].first.y),i.closePath(),a.push(i)}return a}}class L{constructor(){d(this,"_renderer");this._renderer=new C}priceValueBuilder(t){return[0,t.values.reduce((a,e)=>a+e,0)]}isWhitespace(t){var a;return!((a=t.values)!=null&&a.length)}renderer(){return this._renderer}update(t,a){this._renderer.update(t,a)}defaultOptions(){return k}}const b=window.chart=g("chart",{autoSize:!0,rightPriceScale:{scaleMargins:{top:.05,bottom:.05}}}),A=new L,E=b.addCustomSeries(A,{}),I=D(5,200,2);E.setData(I);b.timeScale().fitContent();