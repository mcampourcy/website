(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n,i,r=c(3),s=c.n(r),a=c(38),j=c.n(a),l=c(75),d=c(77),o=c(74),b=c(24),h=c(78),x=c(27),O=c(7),u=c(25),m=c(76),g=Object(m.a)(n||(n=Object(u.a)(["\n    query GetTalkList {\n        talk(order_by: { id: desc }) {\n            id\n            image\n            slug\n            title\n        }\n    }\n"]))),p=Object(m.a)(i||(i=Object(u.a)(["\n    query GetProjectList {\n        project(order_by: { id: desc }) {\n            id\n            image\n            slug\n            title\n        }\n    }\n"]))),f=c(42),w=c(1);function y(e){var t=e.hidden;return Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":t,children:Object(w.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}function k(e){var t=e.hidden;return Object(w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":t,children:[Object(w.jsx)("circle",{cx:"12",cy:"12",r:"5"}),Object(w.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),Object(w.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),Object(w.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),Object(w.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),Object(w.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),Object(w.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),Object(w.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),Object(w.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})}y.defaultValue={hidden:!1},k.defaultValue={hidden:!1};c(48);function v(){var e=localStorage.getItem("theme"),t=Object(r.useState)(e),c=Object(f.a)(t,2),n=c[0],i=c[1],s="dark"===n,a=Object(r.useCallback)((function(e){localStorage.setItem("theme",e),document.body.classList.toggle("dark",s),i(e)}),[s]);return Object(r.useEffect)((function(){if(window.matchMedia&&!e){var t=window.matchMedia("(prefers-color-scheme: dark)").matches;a(t?"dark":"light")}else a(e||"light")}),[e,a]),Object(w.jsx)("header",{children:Object(w.jsxs)("div",{className:"wrapper",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{children:Object(w.jsx)("a",{href:"/",className:"brand",children:"Mireille Campourcy"})}),Object(w.jsx)("p",{children:"Javascript developer"})]}),Object(w.jsxs)("button",{onClick:function(){return a(s?"light":"dark")},name:"switch-theme",type:"button",children:[s?Object(w.jsx)(k,{}):Object(w.jsx)(y,{}),Object(w.jsxs)("span",{children:["Passer en th\xe8me ",s?"clair":"fonc\xe9"]})]})]})})}c(49);function L(e){var t=e.image,c=e.slug,n=e.title;return Object(w.jsx)("figure",{className:"grid-item",children:Object(w.jsxs)(x.b,{to:"/".concat(c),children:[Object(w.jsx)("img",{src:"".concat("/website","/img/").concat(t),alt:""}),Object(w.jsx)("figcaption",{children:n})]})})}c(58);function N(e){var t=e.image,c=e.title;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h1",{children:c}),Object(w.jsxs)("section",{className:"section-page",children:[Object(w.jsx)("img",{className:"item-container img-fluid",src:"img/".concat(t),alt:""}),Object(w.jsx)("p",{children:"Blabla"})]})]})}c(59);function C(){var e=Object(h.a)(p),t=e.loading,c=e.error,n=e.data,i=Object(h.a)(g),r=i.loading,s=i.error,a=i.data;if(t||r)return Object(w.jsx)("p",{children:"Loading..."});if(c||s)return Object(w.jsx)("p",{children:"Error :("});var j=n.project,l=a.talk;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(v,{}),Object(w.jsx)(x.a,{children:Object(w.jsx)("main",{children:Object(w.jsxs)(O.c,{children:[Object(w.jsxs)(O.a,{path:["/","/website"],children:[Object(w.jsx)("h2",{children:"Projects"}),Object(w.jsx)("section",{className:"grid",children:j.map((function(e){return Object(w.jsx)(L,Object(b.a)({},e),e.id)}))}),Object(w.jsx)("h2",{children:"Talks"}),Object(w.jsx)("section",{className:"grid",children:l.map((function(e){return Object(w.jsx)(L,Object(b.a)({},e),e.id)}))})]}),j.map((function(e){return Object(w.jsx)(O.a,{path:"/".concat(e.slug),children:Object(w.jsx)(N,Object(b.a)({},e))},e.id)})),l.map((function(e){return Object(w.jsx)(O.a,{path:"/".concat(e.slug),children:Object(w.jsx)(N,Object(b.a)({},e))},e.id)}))]})})})]})}var M=new l.a({uri:"https://mireille-campourcy.herokuapp.com/v1/graphql",cache:new d.a});j.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(o.a,{client:M,children:Object(w.jsx)(C,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.4068e7f3.chunk.js.map