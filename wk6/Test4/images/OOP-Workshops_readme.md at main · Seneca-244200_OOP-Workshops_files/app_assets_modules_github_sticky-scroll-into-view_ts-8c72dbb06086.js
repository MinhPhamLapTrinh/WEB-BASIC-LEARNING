"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_sticky-scroll-into-view_ts"],{70763:(t,e,n)=>{n.d(e,{O4:()=>v,jo:()=>b,Qp:()=>h});var i=n(81574),o=n(59753);let l="ontransitionend"in window;function s(t,e){if(!l){e();return}let n=Array.from(t.querySelectorAll(".js-transitionable"));for(let e of(t.classList.contains("js-transitionable")&&n.push(t),n)){let t=r(e);e instanceof HTMLElement&&(e.addEventListener("transitionend",()=>{e.style.display="",e.style.visibility="",t&&a(e,function(){e.style.height=""})},{once:!0}),e.style.boxSizing="content-box",e.style.display="block",e.style.visibility="visible",t&&a(e,function(){e.style.height=getComputedStyle(e).height}),e.offsetHeight)}for(let t of(e(),n))if(t instanceof HTMLElement&&r(t)){let e=getComputedStyle(t).height;t.style.boxSizing="","0px"===e?t.style.height=`${t.scrollHeight}px`:t.style.height="0px"}}function r(t){return"height"===getComputedStyle(t).transitionProperty}function a(t,e){t.style.transition="none",e(),t.offsetHeight,t.style.transition=""}var c=n(96776);function u(t,e){e.find(e=>{let n=t.querySelectorAll(e),i=n[n.length-1];if(i&&document.activeElement!==i)return i.focus(),!0})}function d(t){u(t,[".js-focus-on-dismiss","input[autofocus], textarea[autofocus]"])}function f(t){t.classList.contains("tooltipped")&&(t.classList.remove("tooltipped"),t.addEventListener("mouseleave",()=>{t.classList.add("tooltipped"),t.blur()},{once:!0}))}function p(t){return[...document.querySelectorAll(".js-details-container")].filter(e=>e.getAttribute("data-details-container-group")===t)}function g(t){return[...t.querySelectorAll(".js-details-target")].filter(e=>e.closest(".js-details-container")===t)}function y(t,e){let n=t.getAttribute("data-details-container-group");return n?((0,c.uQ)(t,()=>{for(let i of p(n))i!==t&&m(i,e)}),n):null}function m(t,e){for(let n of(t.classList.toggle("open",e),t.classList.toggle("Details--on",e),g(t)))n.setAttribute("aria-expanded",e.toString())}function h(t,e){let n=t.getAttribute("data-details-container")||".js-details-container",i=t.closest(n),o=e?.force??!i.classList.contains("open"),l=e?.withGroup??!1;s(i,()=>{m(i,o);let e=l?y(i,o):null;Promise.resolve().then(()=>{d(i),f(t),i.dispatchEvent(new CustomEvent("details:toggled",{bubbles:!0,cancelable:!1,detail:{open:o}})),e&&i.dispatchEvent(new CustomEvent("details:toggled-group",{bubbles:!0,cancelable:!1,detail:{open:o,group:e}}))})})}function b(t){let e=t.getAttribute("data-details-container")||".js-details-container",n=t.closest(e),i=n.classList;return i.contains("Details--on")||i.contains("open")}function w(t){let e=t.altKey,n=t.currentTarget;h(n,{withGroup:e}),t.preventDefault()}function v(t){let e=!1,n=t.parentElement;for(;n;)n.classList.contains("Details-content--shown")&&(e=!0),n.classList.contains("js-details-container")&&(n.classList.toggle("open",!e),n.classList.toggle("Details--on",!e),e=!1),n=n.parentElement}(0,o.on)("click",".js-details-target",w),(0,i.Z)(function({target:t}){t&&v(t)})},81574:(t,e,n)=>{n.d(e,{Z:()=>r});var i=n(80721),o=n(31167);let l=[],s=0;function r(t){!async function(){l.push(t),await i.x,a()}()}function a(){let t=s;s=l.length,c(l.slice(t),null,window.location.href)}function c(t,e,n){let i=window.location.hash.slice(1),o=i?document.getElementById(i):null,l={oldURL:e,newURL:n,target:o};for(let e of t)e.call(null,l)}r.clear=()=>{l.length=s=0};let u=window.location.href;window.addEventListener("popstate",function(){u=window.location.href}),window.addEventListener("hashchange",function(t){let e=window.location.href;try{c(l,t.oldURL||u,e)}finally{u=e}});let d=null;document.addEventListener(o.QE.START,function(){d=window.location.href}),document.addEventListener(o.QE.SUCCESS,function(){c(l,d,window.location.href)})},20332:(t,e,n)=>{n.d(e,{h:()=>l});var i=n(59753),o=n(70763);function l(){let t=!1,e=document.getElementById("start-of-content");if(e){let n=e.nextElementSibling;if(n instanceof HTMLElement)return(t="1"===n.getAttribute("data-skipped-to-content"))&&n.removeAttribute("data-skipped-to-content"),t}}(0,i.on)("click",".js-skip-to-content",function(t){let e=document.getElementById("start-of-content");if(e){let t=e.nextElementSibling;t instanceof HTMLElement&&(t.setAttribute("tabindex","-1"),t.setAttribute("data-skipped-to-content","1"),t.focus())}t.preventDefault()});let s="ontouchstart"in document,r=document.querySelectorAll(".js-header-menu-item");for(let t of r)t.addEventListener("details:toggled",t=>{let e=t.target;if(t instanceof CustomEvent&&t.detail.open)for(let t of r)t!==e&&(0,o.Qp)(t,{force:!1})}),s||t.addEventListener("mouseleave",t=>{let e=t.target;e.classList.contains("open")&&(0,o.Qp)(e,{force:!1})});document.addEventListener("context-region-label:update",t=>{if(!(t instanceof CustomEvent&&t.detail.label))return;let e=document.querySelectorAll(".js-context-region-label");for(let n of e)n.textContent=t.detail.label}),document.addEventListener("turbo:before-cache",t=>{for(let e of t.target.querySelectorAll("modal-dialog[open]"))e.close()})},35002:(t,e,n)=>{n.d(e,{O3:()=>c,SX:()=>s,_g:()=>r,a8:()=>l,lB:()=>a});let i=0,o=new Set;function l(t){o.add(t)}function s(t){o.delete(t)}function r(){return i}function a(t){for(let e of(i=t,t?document.body.style.setProperty("--base-sticky-header-height",`${t}px`):document.body.style.removeProperty("--base-sticky-header-height"),o))e(t)}let c="var(--base-sticky-header-height, 0px)"},21935:(t,e,n)=>{n.d(e,{H:()=>f});var i=n(20332),o=n(80721),l=n(36071),s=n(35002);let r=!1,a=[];function c(){a.length?u():d()}function u(){r||(window.addEventListener("resize",p),document.addEventListener("scroll",p),r=!0)}function d(){window.removeEventListener("resize",p),document.removeEventListener("scroll",p),r=!1}function f(){g(!0)}function p(){g()}function g(t=!1){for(let e of a)if(e.element.offsetHeight>0){let{element:n,placeholder:i,top:o}=e,l=n.getBoundingClientRect();if(i){let s=i.getBoundingClientRect();n.classList.contains("is-stuck")?s.top>A(n,o)?h(e):b(e):l.top<=A(n,o)?m(e):t&&b(e)}else l.top-A(n,o)<.1?m(e):h(e)}}function y(t){let{position:e}=window.getComputedStyle(t);return/sticky/.test(e)}function m({element:t,placeholder:e,top:n}){if(e){let i=t.getBoundingClientRect();j(t,A(t,n)),t.style.left=`${i.left}px`,t.style.width=`${i.width}px`,t.style.marginTop="0",t.style.position="fixed",e.style.display="block"}t.classList.add("is-stuck")}function h({element:t,placeholder:e}){e&&(t.style.position="static",t.style.marginTop=e.style.marginTop,e.style.display="none"),t.classList.remove("is-stuck")}function b({element:t,placeholder:e,offsetParent:n,top:o}){if(e&&!(0,i.h)()){let i=t.getBoundingClientRect(),l=e.getBoundingClientRect();if(j(t,A(t,o)),t.style.left=`${l.left}px`,0!==l.width&&(t.style.width=`${l.width}px`),n){let e=n.getBoundingClientRect();e.bottom<i.height+parseInt(String(o))&&(t.style.top=`${e.bottom-i.height}px`)}}}function w(t){if(y(t))return null;let e=t.previousElementSibling;if(e&&e.classList.contains("is-placeholder"))return e;let n=document.createElement("div");return n.style.visibility="hidden",n.style.display="none",n.style.height=window.getComputedStyle(t).height,n.className=t.className,n.classList.remove("js-sticky"),n.classList.add("is-placeholder"),t.parentNode.insertBefore(n,t)}function v(t){let e=w(t),n=window.getComputedStyle(t).position;t.style.position="static";let i=t.offsetParent;t.style.position="fixed";let o=x(t),l={element:t,placeholder:e,offsetParent:i,top:"auto"===o?0:parseInt(o||"0")};t.style.position=n,a.push(l)}function E(t){let e=a.map(t=>t.element).indexOf(t);a.splice(e,1)}async function L(t){await o.C,requestAnimationFrame(()=>{v(t),g(),c()})}async function C(t){if(null===t.offsetParent)return;await o.C;let e=Math.floor(t.getBoundingClientRect().height);e>0&&((0,s.lB)(e),S(),f())}function S(){for(let t of document.querySelectorAll(".js-position-sticky, .js-notification-shelf-offset-top"))k(t)}function k(t){if(t.classList.contains("js-notification-top-shelf"))return;let e=parseInt(x(t))||0;j(t,e+(0,s._g)())}function x(t){let e=t.getAttribute("data-original-top");if(null!=e)return e;let n=window.getComputedStyle(t).top;return t.setAttribute("data-original-top",n),n}function A(t,e){return t.classList.contains("js-notification-top-shelf")?e:e+(0,s._g)()}function j(t,e){t.style.setProperty("top",`${e}px`,"important")}(0,l.N7)(".js-sticky",{constructor:HTMLElement,add(t){t.isConnected&&L(t)},remove(t){E(t),c()}}),(0,l.N7)(".js-notification-top-shelf",{constructor:HTMLElement,add(t){C(t)},remove(){(0,s._g)()>0&&((0,s.lB)(0),S(),f())}}),(0,l.N7)(".js-notification-shelf-offset-top, .js-position-sticky",{constructor:HTMLElement,add:k})},80721:(t,e,n)=>{n.d(e,{C:()=>i.C,x:()=>i.x});var i=n(4412)},87098:(t,e,n)=>{function i(t,e=location.hash){return o(t,l(e))}function o(t,e){return""===e?null:t.getElementById(e)||t.getElementsByName(e)[0]}function l(t){try{return decodeURIComponent(t.slice(1))}catch{return""}}n.d(e,{$z:()=>l,Kt:()=>i,Q:()=>o})},3126:(t,e,n)=>{n.d(e,{kc:()=>s,lA:()=>r,zT:()=>l});var i=n(87098),o=n(21935);function l(t){if(t.hasAttribute("data-ignore-sticky-scroll"))return;let e=t.ownerDocument;setTimeout(()=>{e&&e.defaultView&&(t.scrollIntoView(),e.defaultView.scrollBy(0,-r(e)))},0)}function s(t){let e=(0,i.Kt)(t);e&&l(e)}function r(t){(0,o.H)();let e=t.querySelectorAll(".js-sticky-offset-scroll"),n=t.querySelectorAll(".js-position-sticky"),i=Math.max(0,...Array.from(e).map(t=>{let{top:e,height:n}=t.getBoundingClientRect();return 0===e?n:0}))+Math.max(0,...Array.from(n).map(t=>{let{top:e,height:n}=t.getBoundingClientRect(),i=parseInt(getComputedStyle(t).top);if(!t.parentElement)return 0;let o=t.parentElement.getBoundingClientRect().top;return e===i&&o<0?n:0})),l=t.querySelectorAll(".js-position-sticky-stacked"),s=Array.from(l).reduce((t,e)=>{let{height:n,top:i}=e.getBoundingClientRect(),o=e.classList.contains("is-stuck");return t+(!(i<0)&&o?n:0)},0);return i+s}}}]);
//# sourceMappingURL=app_assets_modules_github_sticky-scroll-into-view_ts-49284d4c4818.js.map