System.register([],(function(t){"use strict";return{execute:function(){function n(){}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function u(t){return"function"==typeof t}function c(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function f(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function s(t){return document.createTextNode(t)}function l(t){return Array.from(t.childNodes)}function a(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return s(n)}let d;function h(t){d=t}t({A:function(){A={r:0,c:[],p:A}},a:l,b:a,c:function(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){let n=0;const u=[];for(;n<r.attributes.length;){const t=r.attributes[n++];e[t.name]||u.push(t.name)}for(let t=0;t<u.length;t++)r.removeAttribute(u[t]);return t.splice(o,1)[0]}}return o?f(n):i(n)},d:c,e:i,f:function(t){return a(t," ")},g:function(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)},h:function(t,n,e){t.insertBefore(n,e||null)},i:function(t,e,u,i,f,s,a=[-1]){const $=d;h(t);const g=e.props||{},m=t.$$={fragment:null,ctx:null,props:s,update:n,not_equal:f,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map($?$.$$.context:[]),callbacks:o(),dirty:a,skip_bound:!1};let _=!1;if(m.ctx=u?u(t,g,(n,e,...o)=>{const r=o.length?o[0]:e;return m.ctx&&f(m.ctx[n],m.ctx[n]=r)&&(!m.skip_bound&&m.bound[n]&&m.bound[n](r),_&&function(t,n){-1===t.$$.dirty[0]&&(p.push(t),y||(y=!0,b.then(k)),t.$$.dirty.fill(0));t.$$.dirty[n/31|0]|=1<<n%31}(t,n)),e}):[],m.update(),_=!0,r(m.before_update),m.fragment=!!i&&i(m.ctx),e.target){if(e.hydrate){const t=l(e.target);m.fragment&&m.fragment.l(t),t.forEach(c)}else m.fragment&&m.fragment.c();e.intro&&N(t.$$.fragment),S(t,e.target,e.anchor),k()}h($)},j:function(t,n){t.appendChild(n)},k:function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)},l:n,m:f,n:function(t,n){return t!=t?n==n:t!==n},o:function(){return s("")},p:function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)},q:function(t){(function(){if(!d)throw new Error("Function called outside component initialization");return d})().$$.on_mount.push(t)},r:function(t){t&&t.c()},s:function(){return s(" ")},t:s,u:function(t,n){t&&t.l(n)},v:S,w:N,x:function(t,n,e,o){if(t&&t.o){if(E.has(t))return;E.add(t),A.c.push(()=>{E.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}},y:j,z:function(){A.r||r(A.c);A=A.p}});const p=[],$=[],g=[],m=[],b=Promise.resolve();let y=!1;function _(t){g.push(t)}let x=!1;const w=new Set;function k(){if(!x){x=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];h(n),v(n.$$)}for(p.length=0;$.length;)$.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];w.has(n)||(w.add(n),n())}g.length=0}while(p.length);for(;m.length;)m.pop()();y=!1,x=!1,w.clear()}}function v(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const E=new Set;let A;function N(t,n){t&&t.i&&(E.delete(t),t.i(n))}function S(t,n,o){const{fragment:c,on_mount:i,on_destroy:f,after_update:s}=t.$$;c&&c.m(n,o),_(()=>{const n=i.map(e).filter(u);f?f.push(...n):r(n),t.$$.on_mount=[]}),s.forEach(_)}function j(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}t("S",class{$destroy(){j(this,1),this.$destroy=n}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}})}}}));
