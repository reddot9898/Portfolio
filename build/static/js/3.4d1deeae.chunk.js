(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[3,6],{163:function(t,n,e){},88:function(t,n,e){"use strict";e.r(n);e(0),e(90);var i=e(1);n.default=function(t){var n=t.title;return Object(i.jsx)("div",{className:"header",children:n})}},93:function(t,n,e){"use strict";e.r(n);var i=e(3),c=e(0),o=e(162),d=e(142),r=e(64),a=e.n(r),l=e(23),s=e(88),u=e(32),j=(e(163),e(1));n.default=function(t){var n=t.header,e=Object(c.useState)(null),r=Object(i.a)(e,2),h=r[0],v=r[1],w=Object(c.useState)("50vw"),b=Object(i.a)(w,2),f=b[0],O=b[1],p=Object(c.useState)("VERTICAL_ALTERNATING"),m=Object(i.a)(p,2),x=m[0],W=m[1];return Object(c.useEffect)((function(){var t,n,e,i,c,o;fetch(l.a.education,{method:"GET"}).then((function(t){return t.json()})).then((function(t){return v(t)})).catch((function(t){return t})),(null===(t=window)||void 0===t?void 0:t.innerWidth)<576&&W("VERTICAL"),(null===(n=window)||void 0===n?void 0:n.innerWidth)<576||(null===(e=window)||void 0===e?void 0:e.innerWidth)>=576&&(null===(i=window)||void 0===i?void 0:i.innerWidth)<768?O("90vw"):(null===(c=window)||void 0===c?void 0:c.innerWidth)>=768&&(null===(o=window)||void 0===o?void 0:o.innerWidth)<1024?O("75vw"):O("50vw")}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.default,{title:n}),h?Object(j.jsx)(a.a,{children:Object(j.jsx)("div",{style:{width:f},className:"section-content-container",children:Object(j.jsx)(d.a,{children:Object(j.jsx)(o.a,{hideControls:!0,allowDynamicUpdate:!0,useReadMore:!1,items:h.education,cardHeight:250,mode:x,children:Object(j.jsx)("div",{className:"chrono-icons",children:h.education.map((function(t){return t.icon?Object(j.jsx)("img",{src:t.icon.src,alt:t.icon.alt},t.icon.src):null}))})})})})}):Object(j.jsx)(u.default,{})]})}}}]);
//# sourceMappingURL=3.4d1deeae.chunk.js.map