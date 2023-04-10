"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["codespaces"],{11645:(e,t,r)=>{var o=r(36071),n=r(59753),s=r(65935),i=r(58700);function a(e){let t=new URL(document.location.href,window.location.origin),r=new URLSearchParams(t.search),o=["vscs_target"];for(let[t,n]of e.entries()){if(o.includes(t)||!n){r.delete(t);continue}r.set(t,n)}window.history.replaceState({},"",`?${r.toString()}`)}function l(){let e=new URL(document.location.href,window.location.origin),t=new URLSearchParams(e.search);t.set("response_error","true"),window.location.replace(`${window.location.pathname}?${t.toString()}`)}(0,n.on)("remote-input-error","#js-codespaces-repository-select",()=>{let e=document.querySelector("#js-codespaces-unable-load-repositories-warning");e.hidden=!1}),(0,s.AC)(".js-new-codespace-form",async function(e,t){let r=e.closest("[data-replace-remote-form-target]"),o=r.querySelector(".js-new-codespace-submit-button");o instanceof HTMLInputElement&&(o.disabled=!0),e.classList.remove("is-error"),e.classList.add("is-loading");try{o&&o.setAttribute("disabled","true");let e=await t.html();if(200!==e.status&&l(),r.replaceWith(e.html),"true"===r.getAttribute("data-allow-update-url")){let e=new FormData(document.querySelector("form.js-new-codespace-form"));a(e)}}catch(e){throw l(),e}});let c=null;function d(e){if(c=e,null!==e){let e=document.querySelector(".js-codespace-loading-steps");e.setAttribute("data-current-state",c)}}(0,o.N7)(".js-codespace-loading-steps",{constructor:HTMLElement,add:e=>{let t=e.getAttribute("data-current-state");t&&d(t)}}),(0,o.N7)(".js-codespace-advance-state",{constructor:HTMLElement,add:e=>{let t=e.getAttribute("data-state");t&&d(t)}});let u=null;function p(e){(0,s.AC)(".js-fetch-cascade-token",async function(e,t){try{let e=await t.json(),r=e.json;u=r.token}catch(e){}}),(0,i.Bt)(e)}function h(e,t,r){let o=document.querySelector(e);if(o){let e=Date.now(),o=()=>{let o=Date.now()-e;if(u||o>=r){clearInterval(n),t(u||void 0);return}},n=setInterval(o,50)}}function f(e,t){if(""!==t.value){let t=e.querySelector("form");(0,i.Bt)(t)}else{let e=document.querySelector(".js-fetch-cascade-token");p(e),h(".js-workbench-form-container",m,1e4)}}function m(e){let t=document.querySelector(".js-workbench-form-container form");t&&e?(y(t,e),g(t,e),(0,i.Bt)(t)):d("failed")}function y(e,t){let r=e.querySelector(".js-cascade-token");r&&r.setAttribute("value",t)}function g(e,t){let r=e.querySelector(".js-partner-info");if(r){let e=r.getAttribute("value");e&&(e=e.replace("%CASCADE_TOKEN_PLACEHOLDER%",t),r.setAttribute("value",e))}}(0,o.N7)(".js-auto-submit-form",{constructor:HTMLFormElement,initialize:i.Bt}),(0,o.N7)(".js-workbench-form-container",{constructor:HTMLElement,add:e=>{let t=e.querySelector(".js-cascade-token");f(e,t)}});var v=r(76006),b=r(69567),w=r(19146),T=r(67525);function A(e){let t=e.querySelectorAll(".js-toggle-hidden");for(let e of t)e.hidden=!e.hidden;let r=e.querySelectorAll(".js-toggle-disabled");for(let e of r)e.getAttribute("aria-disabled")?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")}async function E(){let e=document.querySelector(".js-codespaces-details-container");e&&(e.open=!1);let t=document.querySelector("new-codespace");if(t&&!t.getAttribute("data-no-submit-on-create"))try{let e=await fetch("/codespaces/new");if(e&&e.ok){let r=(0,T.r)(document,await e.text());t.replaceWith(r)}}catch(e){}}async function _(e,t){let r=document.querySelector(`#${e}`),o=await (0,w.W)({content:r.content.cloneNode(!0),dialogClass:"project-dialog"});return t&&t.setAttribute("aria-expanded","true"),o.addEventListener("dialog:remove",function(){t&&A(t)},{once:!0}),o}async function S(e){let t=await fetch(e.action,{method:e.method,body:new FormData(e),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(t.ok){let r=await t.json();if(r.codespace_url)window.location.href=r.codespace_url,A(e),E(),L();else{let t=e.closest("get-repo")||e.closest("new-codespace");t?(e.setAttribute("data-src",r.loading_url),e.dispatchEvent(new CustomEvent("pollvscode"))):e.closest("create-button")&&(e.setAttribute("data-src",r.loading_url),e.dispatchEvent(new CustomEvent("prpollvscode"))),A(e)}}else if(422===t.status){let r=await t.json();if("concurrency_limit_error"===r.error_type)await _("concurrency-error",e);else{let t=document.querySelector("template.js-flash-template"),o=r.error;t.after(new b.R(t,{className:"flash-error",message:o})),A(e)}}}async function L(){let e=document.querySelector(".js-codespaces-completable"),t=e&&e.getAttribute("data-src");if(!t)return;let r=await fetch(t,{method:"GET",headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});if(r.ok){let t=(0,T.r)(document,await r.text());e.replaceWith(t)}else throw Error(`Unexpected response: ${r.statusText}`)}(0,n.on)("submit",".js-toggle-hidden-codespace-form",function(e){let t=e.currentTarget;A(t)}),(0,n.on)("submit",".js-create-codespaces-form-command",function(e){let t=e.currentTarget;t.classList.contains("js-open-in-vscode-form")||(E(),A(t))}),(0,n.on)("submit",".js-open-in-web-form",async function(e){let t=e.currentTarget;e.preventDefault(),t.submit()}),(0,n.on)("submit","form.js-open-in-vscode-form",async function(e){e.preventDefault();let t=e.currentTarget;await S(t)});let D=class ConcurrencyLimitElement extends HTMLElement{async connectedCallback(){_("concurrency-error")}};D=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}([v.Ih],D);var j=r(14992),x=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i};let k=class NewCodespaceElement extends HTMLElement{async connectedCallback(){let e=new URL(document.location.href,window.location.origin),t=new URLSearchParams(e.search);t.has("response_error")&&(t.delete("response_error"),window.history.replaceState({},"",`?${t.toString()}`))}toggleLoadingVscode(){let e=this.loadingVscode.hidden,t=this.children;for(let r=0;r<t.length;r++)t[r].hidden=e;this.loadingVscode.hidden=!e}machineTypeSelected(e){let t=e.currentTarget,r=t.getAttribute("data-sku-name");this.skuNameInput&&r&&(this.skuNameInput.value=r),this.advancedOptionsForm&&(0,i.Bt)(this.advancedOptionsForm)}pollForVscode(e){this.toggleLoadingVscode();let t=e.currentTarget.getAttribute("data-src");t&&this.vscodePoller.setAttribute("src",t)}vscsTargetUrlUpdated(e){let t=e.currentTarget;this.vscsTargetUrl.value=t.value}async declarativeSecretsHashUpdated(e){let t=e.currentTarget,r=t.getAttribute("data-name");if(!r)return;let o=t.value,n=(0,j.Jx)(t.getAttribute("data-public-key"));"checkbox"!==t.getAttribute("type")||t.checked||(o=""),o?this.secrets_hash.set(r,(0,j.cv)(await (0,j.HI)(n,o))):this.secrets_hash.delete(r),this.declarativeSecretsHash.value=JSON.stringify(Object.fromEntries(this.secrets_hash))}constructor(...e){super(...e),this.secrets_hash=new Map}};x([v.fA],k.prototype,"declarativeSecretsHash",void 0),x([v.fA],k.prototype,"vscsTargetUrl",void 0),x([v.fA],k.prototype,"loadingVscode",void 0),x([v.fA],k.prototype,"vscodePoller",void 0),x([v.fA],k.prototype,"advancedOptionsForm",void 0),x([v.fA],k.prototype,"skuNameInput",void 0),k=x([v.Ih],k);var C=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i};let I=class ExportBranchElement extends HTMLElement{connectedCallback(){this.abortPoll=new AbortController,this.loadingIndicator.hidden||this.startPoll()}disconnectedCallback(){this.abortPoll?.abort()}async exportBranch(e){e.preventDefault(),this.form.hidden=!0,this.loadingIndicator.hidden=!1;let t=await fetch(this.form.action,{method:this.form.method,body:new FormData(this.form),headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});t.ok?this.startPoll():(this.form.hidden=!1,this.loadingIndicator.hidden=!0)}async startPoll(){let e=this.getAttribute("data-exported-codespace-url")||"",t=await this.poll(e);if(t){if(t.ok)this.loadingIndicator.hidden=!0,this.viewBranchLink.hidden=!1;else{let e=this.getAttribute("data-export-error-redirect-url")||"";window.location.href=encodeURI(e)}}}async poll(e,t=1e3){if(this.abortPoll?.signal.aborted)return;let r=await fetch(e,{signal:this.abortPoll?.signal});return 202===r.status||404===r.status?(await new Promise(e=>setTimeout(e,t)),this.poll(e,1.5*t)):r}constructor(...e){super(...e),this.abortPoll=null}};C([v.fA],I.prototype,"form",void 0),C([v.fA],I.prototype,"loadingIndicator",void 0),C([v.fA],I.prototype,"viewBranchLink",void 0),I=C([v.Ih],I);var q=r(34892),M=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i};let R=class OptionsPopoverElement extends HTMLElement{connectedCallback(){let e=document.getElementById("codespaces-dropdown-list");null!=e&&(e.onscroll=()=>this.updateDetailsOnScroll(0,e.scrollTop+window.pageYOffset),document.onscroll=()=>this.updateDetailsOnScroll(0,e?.scrollTop+window.pageYOffset),onresize=()=>this.updateDetailsOnScroll(0,e?.scrollTop+window.pageYOffset))}reset(e){for(e?.preventDefault(),this.dropdownDetails&&(this.dropdownDetails.hidden=!1),this.modalDetails&&(this.modalDetails.hidden=!0),this.exportDetails&&(this.exportDetails.hidden=!0),this.publishDetails&&(this.publishDetails.hidden=!0),this.forkDetails&&(this.forkDetails.hidden=!0),this.editorDetails&&(this.editorDetails.hidden=!0),this.skuForm&&(this.skuForm.hidden=!1);this.resultMessage?.firstChild;)this.resultMessage.removeChild(this.resultMessage.firstChild);this.resultMessage&&(this.resultMessage.hidden=!0),this.errorMessage&&(this.errorMessage.hidden=!0)}updateDetailsOnScroll(e,t){let r=document.getElementById("codespaces-dropdown-list");if(null!=r){this.reset(void 0);let r=document.querySelectorAll("details");for(let o of r)this.isSubMenu(o)&&o.children[1]&&(t&&t>e?o.children[1].style.marginTop=`-${t}px`:o.children[1].style.marginTop="0px")}}isSubMenu(e){return"options-popover.dropdownDetails"===e.getAttribute("data-target")||"options-popover.editorDetails"===e.getAttribute("data-target")||"options-popover.exportDetails"===e.getAttribute("data-target")||"options-popover.publishDetails"===e.getAttribute("data-target")}showSettingsModal(){this.dropdownDetails.hidden=!0,this.modalDetails.open=!0,this.modalDetails.hidden=!1}showExportModal(){this.dropdownDetails.hidden=!0,this.exportDetails&&(this.exportDetails.open=!0,this.exportDetails.hidden=!1),this.insertBranchExportComponent()}showEditors(){this.dropdownDetails.hidden=!0,this.editorDetails&&(this.editorDetails.open=!0,this.editorDetails.hidden=!1)}closeEditors(){this.dropdownDetails.open=!0,this.dropdownDetails.hidden=!1,this.editorDetails&&(this.editorDetails.open=!1,this.editorDetails.hidden=!0)}showPublishAndExportModal(){this.dropdownDetails.hidden=!0,this.publishDetails&&(this.publishDetails.open=!0,this.publishDetails.hidden=!1),this.insertBranchExportComponent()}showForkAndExportModal(){this.dropdownDetails.hidden=!0,this.forkDetails&&(this.forkDetails.open=!0,this.forkDetails.hidden=!1),this.insertBranchExportComponent()}showRenamePrompt(){if(this.renameButton&&this.renameForm&&this.renameInput){let e=this.renameButton.getAttribute("data-rename-prompt"),t=this.renameButton.getAttribute("data-display-name");if(e&&t){let r=prompt(e,t)||null,o=r?.trim();o&&t!==o&&(this.renameInput.value=o,(0,i.Bt)(this.renameForm))}}}async insertBranchExportComponent(){let e=this.querySelector("[data-branch-export-url]");if(!e)return;let t=e.getAttribute("data-branch-export-url");if(!t)return;let r=await (0,q.a_)(document,t);r&&(e.textContent="",e.appendChild(r))}applyPublishParams(){if(this.publishForm){let e=Object.fromEntries(new FormData(this.publishForm).entries()),t=this.querySelector('[data-target="export-branch.form"]');if(t){let r=`?name=${e.name}&visibility=${e.visibility}`,o=(t.getAttribute("action")||"").split("?")[0]+r;t.setAttribute("action",o)}}}openDeepLink(e){e.preventDefault();let t=e.target,r=t.closest("button")?.getAttribute("data-update-url");r&&window.open(r,"_self"),this.reset(e)}};M([v.fA],R.prototype,"dropdownDetails",void 0),M([v.fA],R.prototype,"modalDetails",void 0),M([v.fA],R.prototype,"settingsModal",void 0),M([v.fA],R.prototype,"skuForm",void 0),M([v.fA],R.prototype,"resultMessage",void 0),M([v.fA],R.prototype,"errorMessage",void 0),M([v.fA],R.prototype,"exportDetails",void 0),M([v.fA],R.prototype,"publishDetails",void 0),M([v.fA],R.prototype,"publishForm",void 0),M([v.fA],R.prototype,"forkDetails",void 0),M([v.fA],R.prototype,"editorDetails",void 0),M([v.fA],R.prototype,"renameButton",void 0),M([v.fA],R.prototype,"renameForm",void 0),M([v.fA],R.prototype,"renameInput",void 0),R=M([v.Ih],R);var O=r(55843),P=r(82368),H=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i};let F=class CodespaceZeroConfigElement extends HTMLElement{connectedCallback(){this.toggleLocationConfigs("production")}updateVscsTargets(){for(let e of(this.vscsTargetUrl.disabled="local"!==this.vscsTarget.value,this.toggleLocationConfigs(this.vscsTarget.value),this.vscsTargets))e.value=this.vscsTarget.value}updateVscsTargetUrls(){for(let e of this.vscsTargetUrls)e.value=this.vscsTargetUrl.value}updateLocations(e){let t=e.currentTarget;this.setLocationValues(t.value)}setLocationValues(e){for(let t of this.locations)t.value=e}toggleLocationConfigs(e){for(let t of this.locationConfigs)if(t.getAttribute("data-vscs-target")===e){t.hidden=!1;let e=t.querySelector("option");e&&(e.selected=!0,this.setLocationValues(e.value))}else t.hidden=!0}};H([v.fA],F.prototype,"regionConfig",void 0),H([v.fA],F.prototype,"vscsTarget",void 0),H([v.fA],F.prototype,"vscsTargetUrl",void 0),H([v.GO],F.prototype,"locationConfigs",void 0),H([v.GO],F.prototype,"vscsTargets",void 0),H([v.GO],F.prototype,"vscsTargetUrls",void 0),H([v.GO],F.prototype,"locations",void 0),F=H([v.Ih],F)},14992:(e,t,r)=>{r.d(t,{HI:()=>s,Jx:()=>i,cv:()=>a});var o=r(69567),n=r(59753);async function s(e,t){let o=new TextEncoder,n=o.encode(t),{seal:s}=await Promise.all([r.e("vendors-node_modules_blakejs_index_js-node_modules_tweetnacl_nacl-fast_js"),r.e("_empty-file_js-app_assets_modules_github_tweetsodium_ts")]).then(r.bind(r,20179));return s(n,e)}function i(e){let t=atob(e).split("").map(e=>e.charCodeAt(0));return Uint8Array.from(t)}function a(e){let t="";for(let r of e)t+=String.fromCharCode(r);return btoa(t)}function l(e){return async function(t){let r=t.currentTarget;if(t.defaultPrevented||!r.checkValidity())return;let n=i(r.getAttribute("data-public-key"));for(let i of(t.preventDefault(),r.elements)){let t=i;if(t.id.endsWith("secret")){if(t.disabled=!0,t.required&&!t.value){let e=`${t.name} is invalid!`,r=document.querySelector("template.js-flash-template");r.after(new o.R(r,{className:"flash-error",message:e}));return}let i=`${t.name}_encrypted_value`;if(!t.value){r.elements.namedItem(i).disabled=e;continue}r.elements.namedItem(i).value=a(await s(n,t.value))}}r.submit()}}(0,n.on)("submit","form.js-encrypt-submit",async function(e){let t=e.currentTarget;if(e.defaultPrevented||!t.checkValidity())return;let r=t.elements.namedItem("secret_value");if(r.disabled=!0,!r.value)return;e.preventDefault();let o=i(t.getAttribute("data-public-key"));t.elements.namedItem("encrypted_value").value=a(await s(o,r.value)),t.submit()}),(0,n.on)("submit","form.js-encrypt-bulk-submit",l(!0)),(0,n.on)("submit","form.js-encrypt-bulk-submit-enable-empty",l(!1))},19146:(e,t,r)=>{r.d(t,{W:()=>n});var o=r(59753);async function n(e){let t=document.querySelector("#site-details-dialog"),r=t.content.cloneNode(!0),n=r.querySelector("details"),s=n.querySelector("details-dialog"),i=n.querySelector(".js-details-dialog-spinner");e.detailsClass&&n.classList.add(...e.detailsClass.split(" ")),e.dialogClass&&s.classList.add(...e.dialogClass.split(" ")),e.label?s.setAttribute("aria-label",e.label):e.labelledBy&&s.setAttribute("aria-labelledby",e.labelledBy),document.body.append(r);try{let t=await e.content;i.remove(),s.prepend(t)}catch(r){i.remove();let t=document.createElement("span");t.textContent=e.errorMessage||"Couldn't load the content",t.classList.add("my-6"),t.classList.add("mx-4"),s.prepend(t)}return n.addEventListener("toggle",()=>{n.hasAttribute("open")||((0,o.f)(s,"dialog:remove"),n.remove())}),s}},34892:(e,t,r)=>{r.d(t,{DF:()=>d,Fr:()=>u,a_:()=>c});var o=r(67525);function n(e){let t=[...e.querySelectorAll("meta[name=html-safe-nonce]")].map(e=>e.content);if(t.length<1)throw Error("could not find html-safe-nonce on document");return t}let s=class ResponseError extends Error{constructor(e,t){super(`${e} for HTTP ${t.status}`),this.response=t}};function i(e,t,r=!1){let o=t.headers.get("content-type")||"";if(!r&&!o.startsWith("text/html"))throw new s(`expected response with text/html, but was ${o}`,t);if(r&&!(o.startsWith("text/html")||o.startsWith("application/json")))throw new s(`expected response with text/html or application/json, but was ${o}`,t);let n=t.headers.get("x-html-safe");if(n){if(!e.includes(n))throw new s("response X-HTML-Safe nonce did not match",t)}else throw new s("missing X-HTML-Safe nonce",t)}var a=r(22490);let l=a.Z.createPolicy("server-x-safe-html",{createHTML:(e,t)=>(i(n(document),t),e)});async function c(e,t,r){let n=new Request(t,r);n.headers.append("X-Requested-With","XMLHttpRequest");let s=await self.fetch(n);if(s.status<200||s.status>=300)throw Error(`HTTP ${s.status}${s.statusText||""}`);let i=l.createHTML(await s.text(),s);return(0,o.r)(e,i)}function d(e,t,r=1e3,o=[200]){return async function r(n){let s=new Request(e,t);s.headers.append("X-Requested-With","XMLHttpRequest");let i=await self.fetch(s);if(202===i.status)return await new Promise(e=>setTimeout(e,n)),r(1.5*n);if(o.includes(i.status))return i;if(i.status<200||i.status>=300)throw Error(`HTTP ${i.status}${i.statusText||""}`);throw Error(`Unexpected ${i.status} response status from poll endpoint`)}(r)}async function u(e,t,r){let{wait:o=500,acceptedStatusCodes:n=[200],max:s=3,attempt:i=0}=r||{},a=async()=>new Promise((r,a)=>{setTimeout(async()=>{try{let o=new Request(e,t);o.headers.append("X-Requested-With","XMLHttpRequest");let a=await self.fetch(o);if(n.includes(a.status)||i+1===s)return r(a);r("retry")}catch(e){a(e)}},o*i)}),l=await a();return"retry"!==l?l:u(e,t,{wait:o,acceptedStatusCodes:n,max:s,attempt:i+1})}},55843:(e,t,r)=>{var o=r(76006),n=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i};let s=class InputDemuxElement extends HTMLElement{connectedCallback(){this.control&&(this.storedInput=Array(this.control.children.length).fill("")),this.addEventListener("input",this.relayInput.bind(this)),this.addEventListener("keydown",this.relayKeydown.bind(this));let e=this.closest("details");e&&e.addEventListener("toggle",()=>{e.open&&this.source.focus()})}relayKeydown(e){if((this.isControlTab(e.target)||e.target===this.source)&&("ArrowDown"===e.key||"Tab"===e.key))e.preventDefault(),e.stopPropagation(),this.routeCustomEvent(new CustomEvent("focus-list"));else if("Escape"===e.key){let e=this.closest("details");e&&e.removeAttribute("open")}}isControlTab(e){return!!e&&!!this.control&&Array.from(this.control.children).includes(e)}relayInput(e){if(!e.target)return;let t=e.target,r=t.value;this.routeCustomEvent(new CustomEvent("input-entered",{detail:r}))}routeCustomEvent(e){let t=this.sinks[this.selectedIndex];t.dispatchEvent(e)}get selectedIndex(){if(!this.control)return 0;let e=this.control.querySelector('[aria-selected="true"]');return e?Array.from(this.control.children).indexOf(e):0}storeInput(){this.storedInput[this.selectedIndex]=this.source.value}updateInput(e){this.source.value=this.storedInput[this.selectedIndex];let t=e.detail.relatedTarget.getAttribute("data-filter-placeholder");this.source.placeholder=t,this.source.setAttribute("aria-label",t),this.notifySelected()}notifySelected(){let e=this.sinks[this.selectedIndex],t=new CustomEvent("tab-selected");e.dispatchEvent(t)}};n([o.fA],s.prototype,"source",void 0),n([o.GO],s.prototype,"sinks",void 0),n([o.fA],s.prototype,"control",void 0),s=n([o.Ih],s)},67525:(e,t,r)=>{r.d(t,{r:()=>s});var o=r(22490);let n=o.Z.createPolicy("parse-html-no-op",{createHTML:e=>e});function s(e,t){let r=e.createElement("template");return r.innerHTML=n.createHTML(t),e.importNode(r.content,!0)}},4412:(e,t,r)=>{r.d(t,{C:()=>s,x:()=>n});var o=r(86283);let n=o.n4?.readyState==="interactive"||o.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{o.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),s=o.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{o.iG?.addEventListener("load",e)})},58700:(e,t,r)=>{r.d(t,{Bt:()=>s,DN:()=>l,KL:()=>u,Se:()=>a,qC:()=>p,sw:()=>c});var o=r(5582);function n(e,t,r){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:r}))}function s(e,t){t&&(i(e,t),(0,o.j)(t)),n(e,"submit",!0)&&e.submit()}function i(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}function a(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}n(e,"change",!1)}function l(e,t){for(let r in t){let o=t[r],n=e.elements.namedItem(r);n instanceof HTMLInputElement?n.value=o:n instanceof HTMLTextAreaElement&&(n.value=o)}}function c(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),r=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==r&&"reset"!==r||e.isContentEditable}function d(e){return new URLSearchParams(e)}function u(e,t){let r=new URLSearchParams(e.search),o=d(t);for(let[e,t]of o)r.append(e,t);return r.toString()}function p(e){return d(new FormData(e)).toString()}},5582:(e,t,r)=>{function o(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let r=n(t);if(e.name){let o=e.matches("input[type=submit]")?"Submit":"",n=e.value||o;r||((r=document.createElement("input")).type="hidden",r.classList.add("js-submit-button-value"),t.prepend(r)),r.name=e.name,r.value=n}else r&&r.remove()}function n(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}r.d(t,{j:()=>o,u:()=>n})},53729:(e,t,r)=>{r.d(t,{A7:()=>u,ko:()=>c,q1:()=>a});var o=r(15205),n=r(86283);let s=(0,o.Z)(i);function i(){return n.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}let a=(0,o.Z)(l);function l(){return n.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}let c=(0,o.Z)(d);function d(){return"enterprise"===s()}let u="webpack"},44544:(e,t,r)=>{r.d(t,{Z:()=>i,_:()=>a});var o=r(86283),n=r(71643);let s=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function i(e,t={throwQuotaErrorsOnSet:!1},r=o.iG,i=e=>e,a=e=>e){let l;try{if(!r)throw Error();l=r[e]||new s}catch{l=new s}let{throwQuotaErrorsOnSet:c}=t;function d(e){t.sendCacheStats&&(0,n.b)({incrementKey:e})}function u(e){try{if(l.removeItem(e),t.ttl){let t=`${e}:expiry`;l.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let r=l.getItem(e);if(!r)return null;let o=`${e}:expiry`,n=Number(l.getItem(o));if(n&&t>n)return u(e),u(o),d("SAFE_STORAGE_VALUE_EXPIRED"),null;return d("SAFE_STORAGE_VALUE_WITHIN_TTL"),i(r)}catch(e){return null}},setItem:function(e,r,o=new Date().getTime()){try{if(l.setItem(e,a(r)),t.ttl){let r=`${e}:expiry`,n=o+t.ttl;l.setItem(r,n.toString())}}catch(e){if(c&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:u,clear:l.clear,key:l.key,get length(){return l.length}}}function a(e){return i(e,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},86283:(e,t,r)=>{r.d(t,{Qg:()=>o.Qg,W6:()=>o.W6,cF:()=>o.cF,iG:()=>n.iG,jX:()=>n.jX,n4:()=>n.n4});var o=r(35647),n=r(73614)},73614:(e,t,r)=>{r.d(t,{iG:()=>n,jX:()=>s,n4:()=>o});let o="undefined"==typeof document?void 0:document,n="undefined"==typeof window?void 0:window,s="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},35647:(e,t,r)=>{r.d(t,{Qg:()=>s,W6:()=>n,cF:()=>i});var o=r(73614);let n=void 0===o.n4,s=!n;function i(){return!!n||Boolean(o.n4.querySelector('react-app[data-ssr="true"]'))}},71643:(e,t,r)=>{r.d(t,{B:()=>m,b:()=>a});var o=r(86283),n=r(4412),s=r(53729);let i=[];function a(e,t=!1){void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=f(),e.staff=m(),e.bundler=s.A7,i.push(e),t?d():c()}let l=null;async function c(){await n.C,null==l&&(l=window.requestIdleCallback(d))}function d(){if(l=null,!i.length)return;let e=o.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!e)return;let t=u(i);for(let r of t)h(e,`{"stats": [${r.join(",")}] }`);i=[]}function u(e){let t=[],r=e.map(e=>JSON.stringify(e));for(;r.length>0;)t.push(p(r));return t}function p(e){let t=e.shift(),r=[t],o=t.length;for(;e.length>0&&o<=65536;){let t=e[0].length;if(o+t<=65536){let n=e.shift();r.push(n),o+=t}else break}return r}function h(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}function f(){return!!o.n4?.head?.querySelector('meta[name="user-login"]')?.content}function m(){return!!o.n4?.head?.querySelector('meta[name="user-staff"]')?.content}o.n4?.addEventListener("pagehide",d),o.n4?.addEventListener("visibilitychange",d)},22490:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(86283);function n(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let s={createHTML:n("createHTML"),createScript:n("createScript"),createScriptURL:n("createScriptURL")},i={createPolicy:(e,t)=>({name:e,...s,...t})},a=globalThis.trustedTypes??i,l=!1;o.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||l||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),l=!0)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_morphdom_dist_morphdom-esm_js-node_modules_github_template-parts_lib_index_js","vendors-node_modules_virtualized-list_es_index_js-node_modules_github_memoize_dist_esm_index_js","vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-911b971","app_assets_modules_github_ref-selector_ts"],()=>t(11645));var r=e.O()}]);
//# sourceMappingURL=codespaces-7aac518b6693.js.map