!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=6)}([function(t,e){function n(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var i=r(a);return[n].concat(a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<t.length;a++){var o=t[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e){t.exports=function(t,e,n,r,a){var i,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,o=t.default);var c="function"==typeof o?o.options:o;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),r&&(c._scopeId=r);var l;if(a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):n&&(l=n),l){var d=c.functional,u=d?c.render:c.beforeCreate;d?c.render=function(t,e){return l.call(e),u(t,e)}:c.beforeCreate=u?[].concat(u,l):[l]}return{esModule:i,exports:o,options:c}}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=d[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(i(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(i(n.parts[a]));d[n.id]={id:n.id,refs:1,parts:o}}}}function a(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function i(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(y){var i=p++;r=f||(f=a()),e=o.bind(null,r,i,!1),n=o.bind(null,r,i,!0)}else r=a(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function o(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,a);else{var i=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}function s(t,e){var n=e.css,r=e.media,a=e.sourceMap;if(r&&t.setAttribute("media",r),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(14),d={},u=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var a=l(t,e);return r(a),function(e){for(var n=[],i=0;i<a.length;i++){var o=a[i],s=d[o.id];s.refs--,n.push(s)}e?(a=l(t,e),r(a)):a=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){function r(t){n(13)}var a=n(1)(n(4),n(11),r,"data-v-a33925f4",null);t.exports=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),a=n.n(r);e.default={name:"Health Checks",components:{"tree-display":a.a},data:function(){return{healthChecks:{}}},beforeMount:function(){var t=this,e=function(){return t.$http.get(window.location.pathname+"/healthchecks").then(function(t){return t.json()},function(t){if(500===t.status||503===t.status)return JSON.parse(t.bodyText);throw"Failed to retrieve health checks: "+t.statusText}).then(function(e){function n(t,e){if(e.address=t?t.address+"/"+e.id:e.id,e.checks){var r=!0,a=!1,i=void 0;try{for(var o,s=e.checks[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){n(e,o.value)}}catch(t){a=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(a)throw i}}}}e.id="root",e.status=e.outcome,n(null,e),t.healthChecks=e})};e(),this.updateTask=setInterval(e,1e3)},beforeDestroy:function(){clearInterval(this.updateTask)}}},function(t,e,n){"use strict";function r(t,e,n){t.attr("x1","0%").attr("x2","0%").attr("y1","0%").attr("y2","100%"),t.append("stop").attr("class","start").attr("offset","0%").attr("stop-color",e).attr("stop-opacity",1),t.append("stop").attr("class","end").attr("offset","100%").attr("stop-color",n).attr("stop-opacity",1)}Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{treeData:Object},beforeMount:function(){var t=this;this.disableDraw=!1,this.visibilityFn=function(){document.hidden?t.disableDraw=!0:(t.disableDraw=!1,t.drawTree())},document.addEventListener("visibilitychange",this.visibilityFn,!1)},beforeDestroy:function(){document.removeEventListener("visibilitychange",this.visibilityFn,!1)},watch:{treeData:function(t){var e=JSON.stringify(this.treeData);if(e!==this.lastDataString){this.lastDataString=e;var n=JSON.parse(e);d3.layout.hierarchy().children(function(t){return t.checks})(n),this.treeRoot=n,this.disableDraw||this.drawTree()}}},methods:{onResize:function(){this.drawTree(),this.tip.hide()},drawTree:function(){if(this.treeRoot){var t=this.$el,e=d3.select(t),n=t.clientWidth,a=t.clientHeight,i=d3.layout.tree().size([a,n]),o=d3.svg.diagonal().projection(function(t){return[t.y,t.x]}),s=e.select("svg");if(s.empty()){s=e.attr("preserveAspectRatio","none").append("svg");var c=s.append("defs");r(c.append("linearGradient").attr("id","redGradient"),"#c00","#a30000");r(c.append("linearGradient").attr("id","greenGradient"),"#6ec664","#3f9c35");c.append("filter").attr("id","shadow").attr("width",16).attr("height",16).attr("x",-3).append("feDropShadow").attr("dx",0).attr("dy",2).attr("stdDeviation",1).attr("flood-opacity",.3),this.tip=d3.tip().attr("class","health-tree-tip").offset([-10,0]).html(function(t){return"<code>"+JSON.stringify(t.data||{},null,4)+"</code>"}),s.call(this.tip)}else s.selectAll(".redraw").remove();var l=i.nodes(this.treeRoot).reverse(),d=i.links(l);l.forEach(function(t){return t.y=120*t.depth});var u=s.selectAll("g.node").data(l,function(t){return t.address}),f=u.enter().append("g").attr("class","node redraw").attr("transform",function(t){return"translate("+(t.y+50)+","+t.x+")"});f.append("circle").attr("r",10).style("fill",function(t){return"UP"===t.status?"url(#greenGradient)":"url(#redGradient)"}).style("stroke",function(t){return"UP"===t.status?"#37892f":"#8b0000"}).on("mouseover",this.tip.show).on("mouseout",this.tip.hide),f.append("text").attr("x",function(t){return t.children?-16:16}).attr("dy",".35em").attr("text-anchor",function(t){return t.children?"end":"start"}).text(function(t){return t.id}).style("fill-opacity",1);s.selectAll("path.link").data(d,function(t){return t.target.address}).enter().insert("path","g").attr("class","link redraw").attr("transform",function(t){return"translate(50)"}).attr("d",o)}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),a=n.n(r);window.vertxConsoleRoutes||(window.vertxConsoleRoutes=[]),window.vertxConsoleRoutes.push({path:"/health",component:a.a})},function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,'.health-tree-container svg{width:100%;height:100%}.health-tree-container svg .node text{font-family:Menlo,Monaco,Consolas,monospace}.health-tree-container svg .node circle{stroke-width:1px;filter:url(#shadow);cursor:pointer}.health-tree-container svg .link{fill:none;stroke:#d8d8d8;stroke-width:2px}.health-tree-tip{color:#fff;background-color:#393f44;border-radius:1px;padding:7px 12px;transition:opacity .2s}.health-tree-tip code{background:transparent;white-space:pre;color:#fff;padding:0}.health-tree-tip:after{box-sizing:border-box;display:inline-block;font-size:24px;width:100%;line-height:1;color:#393f44;content:"\\25BE";position:absolute;text-align:center;pointer-events:none}.health-tree-tip.n:after{margin:-10px 0 0;top:100%;left:0}',""])},function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,".health-container[data-v-a33925f4]{width:100%;height:100%;padding-bottom:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.tree-display[data-v-a33925f4]{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden}",""])},function(t,e,n){function r(t){n(12)}var a=n(1)(n(5),n(10),r,null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"resize",rawName:"v-resize:throttle",value:t.onResize,expression:"onResize",arg:"throttle"}],staticClass:"health-tree-container"})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid health-container"},[t._m(0),t._v(" "),n("tree-display",{staticClass:"tree-display",attrs:{treeData:t.healthChecks}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header"},[n("h1",[t._v("Health Checks")])])}]}},function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("9da45c18",r,!0)},function(t,e,n){var r=n(8);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(2)("09987c5c",r,!0)},function(t,e){t.exports=function(t,e){for(var n=[],r={},a=0;a<e.length;a++){var i=e[a],o=i[0],s=i[1],c=i[2],l=i[3],d={id:t+":"+a,css:s,media:c,sourceMap:l};r[o]?r[o].parts.push(d):n.push(r[o]={id:o,parts:[d]})}return n}}]);