var H=Object.defineProperty;var T=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var I=(t,s,e)=>s in t?H(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,V=(t,s)=>{for(var e in s||(s={}))W.call(s,e)&&I(t,e,s[e]);if(T)for(var e of T(s))Z.call(s,e)&&I(t,e,s[e]);return t};import{V as f,d as G,a as $}from"./vendor.b845b528.js";const K=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}};K();const q=typeof window!="undefined"&&window!==null;tt();const B=Object.prototype.propertyIsEnumerable,S=Object.getOwnPropertySymbols;function b(t){return typeof t=="function"||toString.call(t)==="[object Object]"}function J(t){return typeof t=="object"?t===null:typeof t!="function"}function Q(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"}function tt(){return q&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get(){return this.intersectionRatio>0}}),!0):!1}function et(t,...s){if(!b(t))throw new TypeError("expected the first argument to be an object");if(s.length===0||typeof Symbol!="function"||typeof S!="function")return t;for(const e of s){const i=S(e);for(const o of i)B.call(e,o)&&(t[o]=e[o])}return t}function y(t,...s){let e=0;for(J(t)&&(t=s[e++]),t||(t={});e<s.length;e++)if(b(s[e])){for(const i of Object.keys(s[e]))Q(i)&&(b(t[i])&&b(s[e][i])?y(t[i],s[e][i]):t[i]=s[e][i]);et(t,s[e])}return t}var st=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._t("default",null,{images:t.images,options:t.options})],2)},it=[];function m(t,s,e,i,o,n,u,v){var l=typeof t=="function"?t.options:t;s&&(l.render=s,l.staticRenderFns=e,l._compiled=!0),i&&(l.functional=!0),n&&(l._scopeId="data-v-"+n);var a;if(u?(a=function(c){c=c||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!c&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(c=__VUE_SSR_CONTEXT__),o&&o.call(this,c),c&&c._registeredComponents&&c._registeredComponents.add(u)},l._ssrRegister=a):o&&(a=v?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(l.functional){l._injectStyles=a;var O=l.render;l.render=function(d,p){return a.call(p),O(d,p)}}else{var r=l.beforeCreate;l.beforeCreate=r?[].concat(r,a):[a]}return{exports:t,options:l}}const ot={props:{images:{type:Array},rebuild:{type:Boolean,default:!1},trigger:{},options:{type:Object}},data(){return{}},computed:{},watch:{images(){this.$nextTick(()=>{this.onChange()})},trigger:{handler(){this.$nextTick(()=>{this.onChange()})},deep:!0},options:{handler(){this.$nextTick(()=>{this.rebuildViewer()})},deep:!0}},mounted(){this.createViewer()},unmounted(){this.destroyViewer()},methods:{onChange(){this.rebuild?this.rebuildViewer():this.updateViewer()},rebuildViewer(){this.destroyViewer(),this.createViewer()},updateViewer(){this.$viewer?(this.$viewer.update(),this.$emit("inited",this.$viewer)):this.createViewer()},destroyViewer(){this.$viewer&&this.$viewer.destroy()},createViewer(){this.$viewer=new f(this.$el,this.options),this.$emit("inited",this.$viewer)}}},z={};var rt=m(ot,st,it,!1,nt,null,null,null);function nt(t){for(let s in z)this[s]=z[s]}var R=function(){return rt.exports}();const M=({name:t="viewer",debug:s=!1}={})=>{function e(r,c,d=!1,p=!1){$.nextTick(()=>{p&&!i(r)||(d||!r[`$${t}`]?(u(r),r[`$${t}`]=new f(r,c),a("Viewer created")):(r[`$${t}`].update(),a("Viewer updated")))})}function i(r){const c=r.innerHTML.match(/<img([\w\W]+?)[\\/]?>/g),d=c?c.join(""):void 0;return r.__viewerImageDiffCache===d?(a("Element change detected, but image(s) has not changed"),!1):(a("Image change detected"),r.__viewerImageDiffCache=d,!0)}function o(r,c,d,p){v(r);const w=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(!w){a("Observer not supported");return}const h=new w(X=>{X.forEach(Y=>{a(`Viewer mutation:${Y.type}`),d(r,c,p,!0)})}),E={attributes:!0,childList:!0,characterData:!0,subtree:!0};h.observe(r,E),r.__viewerMutationObserver=h,a("Observer created")}function n(r,{expression:c},d,p){if(!c||!/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/.test(c)){a("Only simple dot-delimited paths can create watcher");return}r.__viewerUnwatch=d.context.$watch(c,(h,E)=>{a("Change detected by watcher: ",c),p(r,h,!0)},{deep:!0}),a("Watcher created, expression: ",c)}function u(r){!r[`$${t}`]||(r[`$${t}`].destroy(),delete r[`$${t}`],a("Viewer destroyed"))}function v(r){!r.__viewerMutationObserver||(r.__viewerMutationObserver.disconnect(),delete r.__viewerMutationObserver,a("Observer destroyed"))}function l(r){!r.__viewerUnwatch||(r.__viewerUnwatch(),delete r.__viewerUnwatch,a("Watcher destroyed"))}function a(){s&&console.log(...arguments)}return{bind(r,c,d){a("Viewer bind");const p=G(e,50);p(r,c.value),n(r,c,d,p),c.modifiers.static||o(r,c.value,p,c.modifiers.rebuild)},unbind(r,c){a("Viewer unbind"),v(r),l(r),u(r)}}},g=({images:t=[],options:s={}}={})=>{s=y(s,{inline:!1});const e=$.extend({render(u){return u("div",{style:{display:"none"},class:["__viewer-token"]},t.map(v=>u("img",{attrs:typeof v=="string"?{src:v}:v})))}}),i=new e;i.$mount(),document.body.appendChild(i.$el);const o=new f(i.$el,s),n=o.destroy.bind(o);return o.destroy=function(){return n(),i.$destroy(),document.body.removeChild(i.$el),o},o.show(),i.$el.addEventListener("hidden",function(){this.viewer===o&&o.destroy()}),o};var at={install(t,{name:s="viewer",debug:e=!1,defaultOptions:i}={}){f.setDefaults(i),t.component(s,y(R,{name:s})),t.directive(s,M({name:s,debug:e})),t.prototype[`$${s}Api`]=g},setDefaults(t){f.setDefaults(t)}},ct=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"field is-grouped is-grouped-multiline"},[e("p",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button",disabled:t.images.length===10},on:{click:t.add}},[t._v(" Add ")])]),e("p",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button",disabled:t.images.length===0},on:{click:t.remove}},[t._v(" Remove ")])]),e("p",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.show}},[t._v(" Show ")])]),e("div",{staticClass:"field has-addons"},[e("p",{staticClass:"control"},[e("button",{staticClass:"button is-primary",class:{" is-active":t.options.toolbar},attrs:{type:"button"},on:{click:function(i){return t.toggleToolbar(!0)}}},[t._v(" Show Toolbar ")])]),e("p",{staticClass:"control"},[e("button",{staticClass:"button is-primary",class:{" is-active":!t.options.toolbar},attrs:{type:"button"},on:{click:function(i){return t.toggleToolbar(!1)}}},[t._v(" Hide Toolbar ")])])])]),e("p",[t._v(" To show the viewer, you can click these images too. ")]),e("div",{directives:[{name:"viewer",rawName:"v-viewer",value:t.options,expression:"options"}],staticClass:"images clearfix"},t._l(t.images,function(i){var o=i.source,n=i.thumbnail;return e("img",{key:o,staticClass:"image",attrs:{src:n,"data-source":o,alt:o.split("?image=").pop()}})}),0)])},lt=[];const C=[],j=Math.floor(Math.random()*60)+10;for(let t=0;t<10;t++)C.push({thumbnail:`https://picsum.photos/id/${j+t}/346/216`,source:`https://picsum.photos/id/${j+t}/1440/900`});const ut={directives:{viewer:M({debug:!0})},data(){return{options:{toolbar:!0,url:"data-source"},images:[...C].splice(0,5)}},computed:{},methods:{toggleToolbar(t){this.options.toolbar=t},add(){this.images.push(C[this.images.length])},remove(){this.images.pop()},show(){this.$el.querySelector(".images").$viewer.show()}}},A={};var vt=m(ut,ct,lt,!1,dt,"4502a8ae",null,null);function dt(t){for(let s in A)this[s]=A[s]}var pt=function(){return vt.exports}(),mt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"methods is-flex"},[e("div",{staticClass:"field has-addons"},[e("p",{staticClass:"control"},[e("button",{staticClass:"button is-primary",class:{" is-active":!t.options.inline},attrs:{type:"button"},on:{click:function(i){return t.toggleInline(!1)}}},[t._v(" Modal ")])]),e("p",{staticClass:"control"},[e("button",{staticClass:"button is-primary",class:{" is-active":t.options.inline},attrs:{type:"button"},on:{click:function(i){return t.toggleInline(!0)}}},[t._v(" Inline ")])])]),e("button",{staticClass:"button",attrs:{type:"button",disabled:t.images.length===9},on:{click:t.add}},[t._v(" Add ")]),e("button",{staticClass:"button",attrs:{type:"button",disabled:t.images.length===1},on:{click:t.remove}},[t._v(" Remove ")]),t.options.inline?[e("div",{staticClass:"field has-addons",staticStyle:{width:"110px"}},[t._m(0),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.view,expression:"form.view",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.form.view},on:{keyup:t.view,input:function(i){i.target.composing||t.$set(t.form,"view",t._n(i.target.value))},blur:function(i){return t.$forceUpdate()}}})])]),e("div",{staticClass:"field has-addons",staticStyle:{width:"120px"}},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.zoom,expression:"form.zoom",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.form.zoom},on:{input:function(i){i.target.composing||t.$set(t.form,"zoom",t._n(i.target.value))},blur:function(i){return t.$forceUpdate()}}})]),e("div",{staticClass:"control"},[e("span",{staticClass:"button",on:{click:function(i){return t.zoom()}}},[t._v("Zoom")])])]),e("div",{staticClass:"field has-addons",staticStyle:{width:"140px"}},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.zoomTo,expression:"form.zoomTo",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.form.zoomTo},on:{input:function(i){i.target.composing||t.$set(t.form,"zoomTo",t._n(i.target.value))},blur:function(i){return t.$forceUpdate()}}})]),e("div",{staticClass:"control"},[e("span",{staticClass:"button",on:{click:t.zoomTo}},[t._v("Zoom to")])])]),e("div",{staticClass:"field has-addons",staticStyle:{width:"120px"}},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.rotate,expression:"form.rotate",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.form.rotate},on:{input:function(i){i.target.composing||t.$set(t.form,"rotate",t._n(i.target.value))},blur:function(i){return t.$forceUpdate()}}})]),e("div",{staticClass:"control"},[e("span",{staticClass:"button",on:{click:function(i){return t.rotate()}}},[t._v("Rotate")])])]),e("div",{staticClass:"field has-addons",staticStyle:{width:"140px"}},[e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.rotateTo,expression:"form.rotateTo",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.form.rotateTo},on:{input:function(i){i.target.composing||t.$set(t.form,"rotateTo",t._n(i.target.value))},blur:function(i){return t.$forceUpdate()}}})]),e("div",{staticClass:"control"},[e("span",{staticClass:"button",on:{click:t.rotateTo}},[t._v("Rotate to")])])]),e("div",{staticClass:"field has-addons"},[e("div",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(i){return t.zoom(.5)}}},[t._v(" Zoom In ")])]),e("div",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(i){return t.zoom(-.5)}}},[t._v(" Zoom Out ")])])]),e("div",{staticClass:"field has-addons"},[e("div",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(i){return t.rotate(-90)}}},[t._v(" Rotate Left ")])]),e("div",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(i){return t.rotate(90)}}},[t._v(" Rotate Right ")])])]),e("div",{staticClass:"field has-addons"},[e("div",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(i){return t.scaleX()}}},[t._v(" Flip Horizontal ")])]),e("div",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(i){return t.scaleY()}}},[t._v(" Flip Vertical ")])])]),e("div",{staticClass:"field has-addons"},[e("div",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(i){return t.move(-10,0)}}},[t._v(" Left ")])]),e("div",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(i){return t.move(10,0)}}},[t._v(" Right ")])]),e("div",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(i){return t.move(0,-10)}}},[t._v(" Up ")])]),e("div",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(i){return t.move(0,10)}}},[t._v(" Down ")])])]),e("div",{staticClass:"field has-addons"},[e("div",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.prev}},[t._v(" Prev ")])]),e("div",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.next}},[t._v(" Next ")])]),e("div",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.play}},[t._v(" Play ")])]),e("div",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.stop}},[t._v(" Stop ")])])]),e("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.full}},[t._v(" Full ")]),e("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.tooltip}},[t._v(" Tooltip ")]),e("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.reset}},[t._v(" Reset ")])]:[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.show}},[t._v(" Show ")])]],2),e("div",{staticClass:"tile is-ancestor"},[e("div",{staticClass:"tile is-2 is-vertical is-parent"},[e("div",{staticClass:"tile is-child"},[e("nav",{staticClass:"panel options-panel"},[e("p",{staticClass:"panel-heading"},[t._v(" Options ")]),t._l(t.toggleOptions,function(i){return e("div",{key:i,staticClass:"panel-block"},[e("label",{staticClass:"checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.options[i],expression:"options[item]"}],attrs:{type:"checkbox",name:"button"},domProps:{checked:Array.isArray(t.options[i])?t._i(t.options[i],null)>-1:t.options[i]},on:{change:function(o){var n=t.options[i],u=o.target,v=!!u.checked;if(Array.isArray(n)){var l=null,a=t._i(n,l);u.checked?a<0&&t.$set(t.options,i,n.concat([l])):a>-1&&t.$set(t.options,i,n.slice(0,a).concat(n.slice(a+1)))}else t.$set(t.options,i,v)}}}),t._v(" "+t._s(i)+" ")])])})],2)])]),e("div",{staticClass:"tile is-10 is-vertical is-parent"},[e("div",{staticClass:"viewer-wrapper"},[e("viewer",{ref:"viewer",staticClass:"viewer",attrs:{options:t.options,images:t.images},on:{inited:t.inited},scopedSlots:t._u([{key:"default",fn:function(i){return[e("figure",{staticClass:"images"},t._l(i.images,function(o){var n=o.source,u=o.thumbnail,v=o.alt;return e("div",{key:n,staticClass:"image-wrapper"},[e("img",{staticClass:"image",attrs:{src:u,"data-source":n,alt:v}})])}),0),e("p",[e("strong",[t._v("Options: ")]),t._v(t._s(i.options))])]}}])})],1)])])])},_t=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"control"},[e("span",{staticClass:"button is-static"},[t._v("View")])])}];const k=[],x=Math.floor(Math.random()*60)+10;for(let t=0;t<10;t++)k.push({thumbnail:`https://picsum.photos/id/${x+t}/346/216`,source:`https://picsum.photos/id/${x+t}/1440/900`,alt:`Image: ${x+t}`});const ft={components:{Viewer:R},data(){return{form:{view:2,zoom:-.1,zoomTo:.8,rotate:90,rotateTo:180,scaleX:1,scaleY:1},toggleOptions:["button","navbar","title","toolbar","tooltip","movable","zoomable","rotatable","scalable","transition","fullscreen","keyboard"],options:{inline:!0,button:!0,navbar:!0,title:!0,toolbar:!0,tooltip:!0,movable:!0,zoomable:!0,rotatable:!0,scalable:!0,transition:!0,fullscreen:!0,keyboard:!0,url:"data-source"},images:[...k].splice(0,5)}},computed:{},methods:{inited(t){this.$viewer=t},add(){this.images.push(k[this.images.length])},remove(){this.images.pop()},view(){this.form.view>=0&&this.form.view<this.images.length&&this.$viewer.view(this.form.view)},zoom(t){this.$viewer.zoom(t||this.form.zoom)},zoomTo(){this.$viewer.zoomTo(this.form.zoomTo)},rotate(t){this.$viewer.rotate(t||this.form.rotate)},rotateTo(){this.$viewer.rotateTo(this.form.rotateTo)},scaleX(t){t?this.$viewer.scaleX(t):(this.form.scaleX=-this.form.scaleX,this.$viewer.scaleX(this.form.scaleX))},scaleY(t){t?this.$viewer.scaleY(t):(this.form.scaleY=-this.form.scaleY,this.$viewer.scaleY(this.form.scaleY))},move(t,s){this.$viewer.move(t,s)},prev(){this.$viewer.prev()},next(){this.$viewer.next()},play(){this.$viewer.play()},stop(){this.$viewer.stop()},show(){this.$viewer.show()},full(){this.$viewer.full()},tooltip(){this.$viewer.tooltip()},reset(){this.$viewer.reset()},toggleInline(t){this.options.inline=t}}},U={};var ht=m(ft,mt,_t,!1,bt,"7b6d8618",null,null);function bt(t){for(let s in U)this[s]=U[s]}var wt=function(){return ht.exports}(),$t=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._m(0),e("div",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.previewURL}},[t._v(" URL Array ")]),e("p",[t._v(" ['1.png', '2.png'] ")])]),e("div",{staticClass:"control"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.previewImgObject}},[t._v(" Img-Object Array ")]),e("p",[t._v(" [{'src':'thumbnail.png', 'data-source':'source.png'}, {'src':'thumbnail.png', 'data-source':'source.png'}] ")])])])},yt=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v(" Click to show the gallery without rendering the images yourself. "),e("strong",[t._v("Only available in modal mode.")])])}];const F=[],L=[];let _=Math.floor(Math.random()*60)+10;for(let t=0;t<5;t++)F.push(`https://picsum.photos/id/${_+t}/1440/900`),L.push({"data-source":`https://picsum.photos/id/${_+t}/1440/900`,src:`https://picsum.photos/id/${_+t}/346/216`,alt:`Image: ${_+t}`});const gt={data(){return{sourceImageURLs:F,sourceImageObjects:L}},computed:{},methods:{previewURL(){_+=1,this.sourceImageURLs.push(`https://picsum.photos/id/${_}/800/600`);const t=g({images:this.sourceImageURLs});console.log(t)},previewImgObject(){const t=g({options:{toolbar:!0,url:"data-source",initialViewIndex:2},images:this.sourceImageObjects});console.log(t)}}},P={};var Ct=m(gt,$t,yt,!1,kt,"84c9d124",null,null);function kt(t){for(let s in P)this[s]=P[s]}var xt=function(){return Ct.exports}(),Ot=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("h1",{staticClass:"title"},[t._v(" Demo ")]),e("hr"),e("div",{staticStyle:{"margin-bottom":"3em"}},[e("h2",{staticClass:"title is-4"},[t._v(" Directive ")]),t._m(0),e("directive-example")],1),e("div",{staticStyle:{"margin-bottom":"6em"}},[e("h2",{staticClass:"title is-4"},[t._v(" Component ")]),t._m(1),e("component-example")],1),e("div",[e("h2",{staticClass:"title is-4"},[t._v(" Api ")]),t._m(2),e("api-example")],1)])},Et=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"subtitle"},[e("a",{attrs:{href:"https://github.com/mirari/v-viewer/blob/master/example/views/example/DirectiveExample.vue",target:"_blank"}},[t._v("Source")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"subtitle"},[e("a",{attrs:{href:"https://github.com/mirari/v-viewer/blob/master/example/views/example/ComponentExample.vue",target:"_blank"}},[t._v("Source")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"subtitle"},[e("a",{attrs:{href:"https://github.com/mirari/v-viewer/blob/master/example/views/example/ApiExample.vue",target:"_blank"}},[t._v("Source")])])}];const Tt={components:{ComponentExample:wt,DirectiveExample:pt,ApiExample:xt},data(){return{}},computed:{},mounted(){}},D={};var It=m(Tt,Ot,Et,!1,Vt,"0acc2b40",null,null);function Vt(t){for(let s in D)this[s]=D[s]}var St=function(){return It.exports}(),zt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("a",{staticClass:"github-fork-ribbon",attrs:{href:"https://github.com/mirari/v-viewer",title:"Fork me on GitHub"}},[t._v("Fork me on GitHub")]),t._m(0),e("div",{staticClass:"container",staticStyle:{"margin-bottom":"30px"}},[e("example")],1),t._m(1)])},Rt=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"hero is-primary"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column"},[e("p",{staticClass:"title is-1"},[t._v(" v-viewer ")]),e("p",{staticClass:"subtitle is-4"},[t._v(" Image viewer component for vue, supports rotation, scale, zoom and so on, based on "),e("a",{attrs:{href:"https://github.com/fengyuanchen/viewerjs",target:"_blank"}},[t._v("viewer.js")])])])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content has-text-centered"},[e("p",[e("a",{attrs:{href:"http://mirari.cc",target:"_blank",title:"mirari.cc"}},[e("strong",[t._v("mirari.cc")])]),t._v(" \xB7 GitHub "),e("a",{attrs:{href:"https://github.com/mirari",target:"_blank",title:"GitHub"}},[t._v(" @mirari ")])])])])])}];const Mt={components:{Example:St}},N={};var jt=m(Mt,zt,Rt,!1,At,null,null,null);function At(t){for(let s in N)this[s]=N[s]}var Ut=function(){return jt.exports}();at.setDefaults({zIndexInline:2017,focus:!1});new $(V({el:"#app"},Ut));