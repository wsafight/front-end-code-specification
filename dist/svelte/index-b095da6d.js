System.register([],(function(t){"use strict";return{execute:function(){function n(){}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function u(t){return"function"==typeof t}function c(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function s(t){return Array.from(t.childNodes)}function l(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return f(n)}let a;function d(t){a=t}t({a:s,b:l,c:function(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){let n=0;const u=[];for(;n<r.attributes.length;){const t=r.attributes[n++];e[t.name]||u.push(t.name)}for(let t=0;t<u.length;t++)r.removeAttribute(u[t]);return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):i(n)},d:c,e:i,f:function(t){return l(t," ")},g:function(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)},h:function(t,n,e){t.insertBefore(n,e||null)},i:function(t,e,u,i,f,l,p=[-1]){const g=a;d(t);const $=e.props||{},y=t.$$={fragment:null,ctx:null,props:l,update:n,not_equal:f,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:[]),callbacks:o(),dirty:p,skip_bound:!1};let _=!1;if(y.ctx=u?u(t,$,(n,e,...o)=>{const r=o.length?o[0]:e;return y.ctx&&f(y.ctx[n],y.ctx[n]=r)&&(!y.skip_bound&&y.bound[n]&&y.bound[n](r),_&&function(t,n){-1===t.$$.dirty[0]&&(h.push(t),b||(b=!0,m.then(w)),t.$$.dirty.fill(0));t.$$.dirty[n/31|0]|=1<<n%31}(t,n)),e}):[],y.update(),_=!0,r(y.before_update),y.fragment=!!i&&i(y.ctx),e.target){if(e.hydrate){const t=s(e.target);y.fragment&&y.fragment.l(t),t.forEach(c)}else y.fragment&&y.fragment.c();e.intro&&A(t.$$.fragment),N(t,e.target,e.anchor),w()}d(g)},j:function(t,n){t.appendChild(n)},k:function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)},l:n,m:function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)},n:function(t,n){return t!=t?n==n:t!==n},o:function(t){t&&t.c()},p:function(t,n){t&&t.l(n)},q:N,r:A,s:function(){return f(" ")},t:f,u:function(t,n,e,o){if(t&&t.o){if(v.has(t))return;v.add(t),E.c.push(()=>{v.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}},v:S,w:function(){E.r||r(E.c);E=E.p},x:function(){E={r:0,c:[],p:E}}});const h=[],p=[],g=[],$=[],m=Promise.resolve();let b=!1;function y(t){g.push(t)}let _=!1;const x=new Set;function w(){if(!_){_=!0;do{for(let t=0;t<h.length;t+=1){const n=h[t];d(n),k(n.$$)}for(h.length=0;p.length;)p.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];x.has(n)||(x.add(n),n())}g.length=0}while(h.length);for(;$.length;)$.pop()();b=!1,_=!1,x.clear()}}function k(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(y)}}const v=new Set;let E;function A(t,n){t&&t.i&&(v.delete(t),t.i(n))}function N(t,n,o){const{fragment:c,on_mount:i,on_destroy:f,after_update:s}=t.$$;c&&c.m(n,o),y(()=>{const n=i.map(e).filter(u);f?f.push(...n):r(n),t.$$.on_mount=[]}),s.forEach(y)}function S(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}t("S",class{$destroy(){S(this,1),this.$destroy=n}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}})}}}));
