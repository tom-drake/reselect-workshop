(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),o=a.n(r),l=a(212),m=a(19),s=a(83),i=a.n(s),u=a(84),p=a.n(u),d=a(213),E=a(210),h=a(209),b=a(211),g=a(214),f=a(80),v=a.n(f),S=a(17),j=a.n(S),y=a(46),N=a.n(y),O=a(81),k=a.n(O),w=a(85),x=a(29),M=a(77),R=a.n(M),C=a(28),B=a.n(C),I=a(18),T=a.n(I),W=a(21),z=a.n(W),J=a(78),A=0,F=0,G=Object(J.a)(function(e){return A++,e.shop.items},function(e){return F++,e.reduce(function(e,t){return e+t.value},0)}),P=function(){return{shop:{items:[{name:"Milk",value:150+Math.floor(10*Math.random()-5)},{name:"Cheese",value:300+Math.floor(10*Math.random()-5)}]}}},V=Object(n.memo)(Object(m.withStyles)({paper:{textAlign:"center"},button:{display:"block",margin:"0 auto"},datademo:{padding:5,marginBottom:20}})(function(e){var t=e.classes,a=Object(n.useState)(1),r=Object(x.a)(a,2),o=r[0],l=r[1],m=Object(n.useState)(P()),s=Object(x.a)(m,2),i=s[0],u=s[1],p=function(){return l(o+1)},d=G(i);return c.a.createElement(z.a,{className:t.datademo,elevation:1},c.a.createElement(j.a,{container:!0,justify:"center",className:t.root,spacing:16},c.a.createElement(j.a,{item:!0,md:3,lg:3},c.a.createElement(z.a,{className:t.paper},c.a.createElement(T.a,{component:"span"},"Subtotal: ",d))),c.a.createElement(j.a,{item:!0,md:3,lg:3},c.a.createElement(z.a,{className:t.paper},c.a.createElement(T.a,{component:"span"},"shopItemsSelector: ",A))),c.a.createElement(j.a,{item:!0,md:3,lg:3},c.a.createElement(z.a,{className:t.paper},c.a.createElement(T.a,{component:"span"},"subtotalSelector (mapper): ",F))),c.a.createElement(j.a,{item:!0,md:3,lg:3},c.a.createElement(z.a,{className:t.paper},c.a.createElement(T.a,{component:"span"},"counter: ",o))),c.a.createElement(j.a,{item:!0,md:3,lg:3},c.a.createElement(B.a,{className:t.button,variant:"contained",color:"primary",onClick:p},"Run Selectors")),c.a.createElement(j.a,{item:!0,md:3,lg:3},c.a.createElement(B.a,{className:t.button,variant:"contained",color:"primary",onClick:function(){u(P()),p()}},"New data"))))})),q=Object(m.withStyles)({heading:{marginTop:10},content:{fontSize:20,maxWidth:1e3,marginBottom:20}})(function(e){var t=e.classes,a=Object(n.useState)([!0]),r=Object(x.a)(a,2),o=r[0],l=r[1];return c.a.createElement("div",{className:t.content},c.a.createElement(T.a,{className:t.heading,variant:"h2",gutterBottom:!0},"What is Reselect?"),c.a.createElement(T.a,{className:t.content,component:"p"},"Reselect is a simple \u201cselector\u201d library for Redux (and others). Selectors can compute derived data, they are efficient (memoization) and are composable."),c.a.createElement(T.a,{variant:"h4"},"Reselect Example"),c.a.createElement(R.a,{component:"pre",className:"language-jsx"},"import { createSelector } from 'reselect';\n\nconst shopItemsSelector = state => state.shop.items;\n\nconst subtotalSelector = createSelector(\n  shopItemsSelector,\n  items => items.reduce((acc, item) => acc + item.value, 0)\n);\n\nconst data = {\n  shop: {\n    items: [\n      { name: 'Milk', value: 150 },\n      { name: 'Cheese', value: 300 }\n    ]\n  }\n};\n\nconst subtotal = subtotalSelector(data);\n"),o.map(function(e,t){return c.a.createElement(V,{key:t})}),c.a.createElement(B.a,{variant:"contained",color:"primary",onClick:function(){return l([].concat(Object(w.a)(o),[!0]))}},"More usages"))}),D=function(e){e.classes;return c.a.createElement("div",null,"Generate")},H="/reselect-workshop",K=Object(g.a)(function(e){e.classes;var t=e.location;return c.a.createElement(n.Fragment,null,c.a.createElement(v.a,{position:"static",color:"default"},c.a.createElement(k.a,{centered:!0,value:t.pathname},c.a.createElement(N.a,{label:"What is Reselect?",value:"".concat(H,"/reselect"),component:h.a,to:"".concat(H,"/reselect")}),c.a.createElement(N.a,{label:"Selector generators",value:"".concat(H,"/generators"),component:h.a,to:"".concat(H,"/generators")}))),c.a.createElement(j.a,{container:!0,justify:"center"},c.a.createElement(d.a,null,c.a.createElement(E.a,{exact:!0,path:"".concat(H,"/"),render:function(){return c.a.createElement(b.a,{to:"".concat(H,"/reselect")})}}),c.a.createElement(E.a,{exact:!0,path:"".concat(H,"/reselect"),component:q}),c.a.createElement(E.a,{exact:!0,path:"".concat(H,"/generators"),component:D}))))}),L=Object(m.createMuiTheme)({palette:{primary:i.a},typography:{useNextVariants:!0}});o.a.render(c.a.createElement(l.a,null,c.a.createElement(m.MuiThemeProvider,{theme:L},c.a.createElement(p.a,null),c.a.createElement(K,null))),document.getElementById("root"))},86:function(e,t,a){e.exports=a(208)}},[[86,2,1]]]);
//# sourceMappingURL=main.bd437364.chunk.js.map