(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),s=n(2),o=n(9),u=n(0),j=function(e){var t=e.setCategories,n=Object(a.useState)("Add a category..."),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(u.jsxs)("form",{className:"form_input",onSubmit:function(e){e.preventDefault(),r.trim().length>2&&"Add a category..."!==r?(t((function(e){return[r].concat(Object(o.a)(e))})),i("")):alert("Your search parameter is too short, must be 4 letters long at least.")},children:[Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){i(e.target.value)},onClick:function(){i("")}}),Object(u.jsx)("p",{children:"Please, write something and press Enter!"})]})},l=n(10),d=n(6),m=n.n(d),b=n(8),f=function(){var e=Object(b.a)(m.a.mark((function e(t){var n,a,c,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"}&limit=10&api_key=viF3jLwgcPjxxcG4nfxnCKa6GmhFLJaJ"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeInUp",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},p=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{className:"category_name animate__animated animate__flash",children:[t," Gifs!"]}),r?Object(u.jsx)("p",{className:"loading animate__animated animate__flash",children:"Loading"}):null,Object(u.jsx)("div",{className:"card-grid",children:Object(u.jsx)("ol",{children:c.map((function(e){return Object(u.jsx)(h,Object(l.a)({},e),e.id)}))})})]})},O=function(){var e=Object(a.useState)(["CyberPunk"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Welcome to \ud83c\udd56\ud83c\udd58\ud83c\udd55\ud83c\udd50\ud83c\udd5f\ud83c\udd5f"}),Object(u.jsx)(j,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(p,{category:e},e)}))})]})};n(17);i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4bc08379.chunk.js.map