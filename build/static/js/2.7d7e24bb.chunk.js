(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[2,4,6],{149:function(e,t,a){"use strict";var c=a(3),r=a(2),n=a(4),s=a(5),i=a.n(s),o=a(0),l=a(8),d=a(1),b=["as","bsPrefix","className"],j=["className"];var f=o.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,s=Object(n.a)(e,b);a=Object(l.c)(a,"col");var o=Object(l.a)(),d=Object(l.b)(),j=[],f=[];return o.forEach((function(e){var t,c,r,n=s[e];delete s[e],"object"===typeof n&&null!=n?(t=n.span,c=n.offset,r=n.order):t=n;var i=e!==d?"-".concat(e):"";t&&j.push(!0===t?"".concat(a).concat(i):"".concat(a).concat(i,"-").concat(t)),null!=r&&f.push("order".concat(i,"-").concat(r)),null!=c&&f.push("offset".concat(i,"-").concat(c))})),[Object(r.a)(Object(r.a)({},s),{},{className:i.a.apply(void 0,[c].concat(j,f))}),{as:t,bsPrefix:a,spans:j}]}(e),s=Object(c.a)(a,2),o=s[0],f=o.className,u=Object(n.a)(o,j),O=s[1],v=O.as,m=void 0===v?"div":v,x=O.bsPrefix,p=O.spans;return Object(d.jsx)(m,Object(r.a)(Object(r.a)({},u),{},{ref:t,className:i()(f,!p.length&&x)}))}));f.displayName="Col",t.a=f},161:function(e,t,a){"use strict";var c=a(2),r=a(4),n=a(5),s=a.n(n),i=a(0),o=a(8),l=a(1),d=["bsPrefix","className","as"],b=i.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.as,b=void 0===i?"div":i,j=Object(r.a)(e,d),f=Object(o.c)(a,"row"),u=Object(o.a)(),O=Object(o.b)(),v="".concat(f,"-cols"),m=[];return u.forEach((function(e){var t,a=j[e];delete j[e],t=null!=a&&"object"===typeof a?a.cols:a;var c=e!==O?"-".concat(e):"";null!=t&&m.push("".concat(v).concat(c,"-").concat(t))})),Object(l.jsx)(b,Object(c.a)(Object(c.a)({ref:t},j),{},{className:s.a.apply(void 0,[n,f].concat(m))}))}));b.displayName="Row",t.a=b},164:function(e,t,a){"use strict";var c=a(2),r=a(3),n=a(4),s=a(5),i=a.n(s),o=a(0),l=a(41),d=a(8),b=a(1),j=["as","bsPrefix","variant","size","active","disabled","className"],f=o.forwardRef((function(e,t){var a=e.as,s=e.bsPrefix,o=e.variant,f=void 0===o?"primary":o,u=e.size,O=e.active,v=void 0!==O&&O,m=e.disabled,x=void 0!==m&&m,p=e.className,h=Object(n.a)(e,j),y=Object(d.c)(s,"btn"),g=Object(l.b)(Object(c.a)({tagName:a,disabled:x},h)),N=Object(r.a)(g,2),S=N[0],P=N[1].tagName;return Object(b.jsx)(P,Object(c.a)(Object(c.a)(Object(c.a)({},S),h),{},{ref:t,disabled:x,className:i()(p,y,v&&"active",f&&"".concat(y,"-").concat(f),u&&"".concat(y,"-").concat(u),h.href&&x&&"disabled")}))}));f.displayName="Button",t.a=f},88:function(e,t,a){"use strict";a.r(t);a(0),a(90);var c=a(1);t.default=function(e){var t=e.title;return Object(c.jsx)("div",{className:"header",children:t})}},91:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a(0),n=a(149),s=a(4),i=a(5),o=a.n(i),l=a(8),d=a(24),b=a(67),j=a(1),f=["bsPrefix","className","variant","as"],u=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.variant,i=e.as,d=void 0===i?"img":i,b=Object(s.a)(e,f),u=Object(l.c)(a,"card-img");return Object(j.jsx)(d,Object(c.a)({ref:t,className:o()(n?"".concat(u,"-").concat(n):u,r)},b))}));u.displayName="CardImg";var O=u,v=a(68),m=["bsPrefix","className","as"],x=r.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.as,d=void 0===i?"div":i,b=Object(s.a)(e,m),f=Object(l.c)(a,"card-header"),u=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return Object(j.jsx)(v.a.Provider,{value:u,children:Object(j.jsx)(d,Object(c.a)(Object(c.a)({ref:t},b),{},{className:o()(n,f)}))})}));x.displayName="CardHeader";var p=x,h=["bsPrefix","className","bg","text","border","body","children","as"],y=Object(b.a)("h5"),g=Object(b.a)("h6"),N=Object(d.a)("card-body"),S=Object(d.a)("card-title",{Component:y}),P=Object(d.a)("card-subtitle",{Component:g}),w=Object(d.a)("card-link",{Component:"a"}),C=Object(d.a)("card-text",{Component:"p"}),T=Object(d.a)("card-footer"),k=Object(d.a)("card-img-overlay"),R=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.bg,i=e.text,d=e.border,b=e.body,f=void 0!==b&&b,u=e.children,O=e.as,v=void 0===O?"div":O,m=Object(s.a)(e,h),x=Object(l.c)(a,"card");return Object(j.jsx)(v,Object(c.a)(Object(c.a)({ref:t},m),{},{className:o()(r,x,n&&"bg-".concat(n),i&&"text-".concat(i),d&&"border-".concat(d)),children:f?Object(j.jsx)(N,{children:u}):u}))}));R.displayName="Card";var B=Object.assign(R,{Img:O,Title:S,Subtitle:P,Body:N,Link:w,Text:C,Header:p,Footer:T,ImgOverlay:k}),E=a(164),I=["bsPrefix","bg","pill","text","className","as"],z=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.bg,n=void 0===r?"primary":r,i=e.pill,d=void 0!==i&&i,b=e.text,f=e.className,u=e.as,O=void 0===u?"span":u,v=Object(s.a)(e,I),m=Object(l.c)(a,"badge");return Object(j.jsx)(O,Object(c.a)(Object(c.a)({ref:t},v),{},{className:o()(f,m,d&&"rounded-pill",b&&"text-".concat(b),n&&"bg-".concat(n))}))}));z.displayName="Badge";var F=z,H=a(175),M={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};t.default=function(e){var t,a,r=e.project;return Object(j.jsx)(n.a,{children:Object(j.jsxs)(B,{style:Object(c.a)({},M.cardStyle),children:[Object(j.jsx)(B.Img,{variant:"top",src:null===r||void 0===r?void 0:r.image}),Object(j.jsxs)(B.Body,{children:[Object(j.jsx)(B.Title,{style:M.cardTitleStyle,children:r.title}),Object(j.jsx)(B.Text,{style:M.cardTextStyle,children:(a=r.bodyText,Object(j.jsx)(H.a,{children:a}))})]}),Object(j.jsx)(B.Body,{children:null===r||void 0===r||null===(t=r.links)||void 0===t?void 0:t.map((function(e){return Object(j.jsx)(E.a,{style:M.buttonStyle,onClick:function(){return window.open(e.href,"_blank")},children:e.text},e.href)}))}),r.tags&&Object(j.jsx)(B.Footer,{style:{backgroundColor:"white"},children:r.tags.map((function(e){return Object(j.jsx)(F,{pill:!0,style:M.badgeStyle,children:e},e)}))})]})})}},94:function(e,t,a){"use strict";a.r(t);var c=a(3),r=a(0),n=a(142),s=a(161),i=a(164),o=a(69),l=a.n(o),d=a(88),b=a(23),j=a(91),f=a(32),u=a(1),O={containerStyle:{marginBottom:25},showMoreStyle:{margin:25}};t.default=function(e){var t,a=e.header,o=Object(r.useState)(null),v=Object(c.a)(o,2),m=v[0],x=v[1],p=Object(r.useState)(!1),h=Object(c.a)(p,2),y=h[0],g=h[1];Object(r.useEffect)((function(){fetch(b.a.projects,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return x(e)})).catch((function(e){return e}))}),[]);var N=y&&m?m.length:6;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.default,{title:a}),m?Object(u.jsx)("div",{className:"section-content-container",children:Object(u.jsxs)(n.a,{style:O.containerStyle,children:[Object(u.jsx)(s.a,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:null===(t=m.projects)||void 0===t?void 0:t.slice(0,N).map((function(e){return Object(u.jsx)(l.a,{children:Object(u.jsx)(j.default,{project:e})},e.title)}))}),!y&&Object(u.jsx)(i.a,{style:O.showMoreStyle,onClick:function(){return g(!0)},children:"show more"})]})}):Object(u.jsx)(f.default,{})]})}}}]);
//# sourceMappingURL=2.7d7e24bb.chunk.js.map