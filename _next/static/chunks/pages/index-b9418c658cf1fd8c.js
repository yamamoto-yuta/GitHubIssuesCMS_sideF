(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4186)}])},5585:function(t,n,r){"use strict";r.d(n,{_:function(){return L}});var e=r(5944),i=r(7294),o=r(4776),c=r(2293),l=r(7948),a=r(155),u=r(6886),Z=r(8298),h=r(1664),d=r.n(h),s=r(7357),f=r(8462),p=r(891),v=r(7720),m=r(3946),b=r(7107),g=r(7594),y=r(9334),_=r(326),x=r(6638),w=r(5449),k=r(5084),P=r(4020),X=r(8005),O=r(802),B=r(4871),S=r(9317),j=r(7957),A=r(449),T=r(1523),C=r(9661),E=r(5861),I=function(t){var n=t.author_name,r=t.author_description,i=t.url_subpath;return(0,e.BX)(s.Z,{width:"100%",children:[(0,e.BX)(u.ZP,{container:!0,children:[(0,e.tZ)(u.ZP,{item:!0,xs:4.8}),(0,e.tZ)(u.ZP,{item:!0,xs:2.2,children:(0,e.tZ)(d(),{href:"/profile",passHref:!0,children:(0,e.tZ)(m.Z,{children:(0,e.tZ)(C.Z,{alt:n,src:"".concat(i,"/static/images/avatar/avatar.webp"),sx:{width:32,height:32}})})})}),(0,e.tZ)(u.ZP,{item:!0,xs:5})]}),(0,e.tZ)(E.Z,{variant:"h5",sx:{m:0,p:0,textAlign:"center"},children:n}),(0,e.tZ)(E.Z,{variant:"body2",sx:{m:0,p:0,textAlign:"center"},children:r})]})};function N(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function D(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function H(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,i,o=[],c=!0,l=!1;try{for(r=r.call(t);!(c=(e=r.next()).done)&&(o.push(e.value),!n||o.length!==n);c=!0);}catch(a){l=!0,i=a}finally{try{c||null==r.return||r.return()}finally{if(l)throw i}}return o}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return N(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var F="left";function W(t){var n=t.profile,r=t.slug,o="";o=void 0===r?n.issues_edit_page:"".concat(n.issues_edit_page,"/").concat(r);var c,l=n.author_name,a=n.author_description,u=n.sns,Z=H(i.useState({top:!1,left:!1,bottom:!1,right:!1}),2),h=Z[0],d=Z[1],g=function(t,n){return function(r){(!r||"keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&d(function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},e=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),e.forEach((function(n){D(t,n,r[n])}))}return t}({},h,D({},t,n)))}};return(0,e.tZ)("div",{children:(0,e.BX)(i.Fragment,{children:[(0,e.tZ)(m.Z,{onClick:g(F,!0),sx:{margin:0,padding:0},"aria-label":"Open Sidebar",children:(0,e.tZ)(_.Z,{})}),(0,e.tZ)(b.Z,{anchor:F,open:h.left,onClose:g(F,!1),onOpen:g(F,!0),children:(c=F,(0,e.BX)(s.Z,{sx:{width:"top"===c||"bottom"===c?"auto":250},role:"presentation",onClick:g(c,!1),onKeyDown:g(c,!1),children:[(0,e.BX)(f.Z,{children:[(0,e.tZ)(p.ZP,{children:(0,e.tZ)(I,{author_name:l,author_description:a,url_subpath:n.url_subpath})}),(0,e.tZ)(v.Z,{}),(0,e.tZ)(G,{text:"Home",href:"/",children:(0,e.tZ)(x.Z,{})}),(0,e.tZ)(G,{text:"Articles",href:"/article/list",children:(0,e.tZ)(T.Z,{})}),(0,e.tZ)(G,{text:"Tags",href:"/article/tags",children:(0,e.tZ)(A.Z,{})}),(0,e.tZ)(G,{text:"Edit page",href:o,children:(0,e.tZ)(j.Z,{})})]}),(0,e.tZ)(v.Z,{}),(0,e.tZ)(J,{sns_list:u})]}))})]},F)})}var G=function(t){var n=t.children,r=t.text,i=t.href;return""===i||""===r?(0,e.tZ)("div",{}):(null===i||void 0===i?void 0:i.startsWith("#"))||(null===i||void 0===i?void 0:i.startsWith("/"))||(null===i||void 0===i?void 0:i.includes("shotarokataoka.github.io"))?(0,e.tZ)(d(),{href:i,passHref:!0,children:(0,e.BX)(p.ZP,{button:!0,children:[(0,e.tZ)(g.Z,{children:n}),(0,e.tZ)(y.Z,{primary:r})]})}):(0,e.BX)(p.ZP,{button:!0,component:"a",href:i,target:"_blank",rel:"noopener",children:[(0,e.tZ)(g.Z,{children:n}),(0,e.tZ)(y.Z,{primary:r})]},r)},J=function(t){var n=t.sns_list;return(0,e.tZ)(f.Z,{children:n.map((function(t){return(0,e.tZ)(G,{text:t.name,href:t.url,children:(n=t.name,"GitHub"===n?(0,e.tZ)(w.Z,{}):"Twitter"===n?(0,e.tZ)(k.Z,{}):"Facebook"===n?(0,e.tZ)(O.Z,{}):"LinkedIn"===n?(0,e.tZ)(X.Z,{}):"Instagram"===n?(0,e.tZ)(P.Z,{}):"YouTube"===n?(0,e.tZ)(B.Z,{}):(0,e.tZ)(S.Z,{}))},t.name);var n}))})},V=r(4345);function Y(t){var n=t.children,r=(0,Z.Z)({target:void 0});return(0,e.tZ)(o.Z,{appear:!1,direction:"down",in:!r,children:n})}function K(t){var n=t.children;return(0,e.tZ)(i.Fragment,{children:(0,e.tZ)(Y,{children:(0,e.tZ)(c.Z,{color:"inherit",elevation:0,children:(0,e.tZ)(l.Z,{maxWidth:"sm",children:n})})})})}var L=function(t){var n=t.profile,r=t.slug;return(0,e.tZ)(K,{children:(0,e.tZ)(a.Z,{children:(0,e.BX)(u.ZP,{container:!0,children:[(0,e.tZ)(u.ZP,{item:!0,xs:2,children:(0,e.tZ)(W,{profile:n,slug:r})}),(0,e.tZ)(u.ZP,{item:!0,xs:10,children:(0,e.tZ)(V.n,{profile:n})})]})})})}},7255:function(t,n,r){"use strict";r.d(n,{J:function(){return c}});var e=r(5944),i=r(7357),o=r(7948),c=function(t){var n=t.children;return(0,e.tZ)(i.Z,{sx:{my:7,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,e.tZ)(o.Z,{maxWidth:"sm",children:n})})}},4345:function(t,n,r){"use strict";r.d(n,{V:function(){return a},n:function(){return u}});var e=r(5944),i=r(5861),o=r(7720),c=r(1664),l=r.n(c),a=function(t){var n=t.title;return(0,e.BX)("div",{children:[(0,e.tZ)(i.Z,{variant:"h1",align:"center",sx:{pb:2},children:n}),(0,e.tZ)(o.Z,{})]})},u=function(t){var n=t.profile.blog_title;return(0,e.tZ)(l(),{href:"/",passHref:!0,children:(0,e.tZ)(i.Z,{variant:"h3",component:"a",display:"inline",color:"inherit",sx:{textDecoration:"none",boxShadow:"none"},children:n})})}},4186:function(t,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return u}});var e=r(5944),i=r(797),o=r(9008),c=r(5585),l=r(7255),a=r(4345),u=!0;n.default=function(t){var n=t.profile;return(0,e.BX)("div",{children:[(0,e.BX)(o.default,{children:[(0,e.tZ)("title",{children:"Tags | ".concat(n.blog_title)}),(0,e.tZ)("meta",{name:"description",content:"".concat(n.blog_title," tag list")}),(0,e.tZ)("link",{rel:"icon",href:"".concat(n.root_url,"/static/favicon.ico")})]}),(0,e.tZ)(c._,{profile:n}),(0,e.tZ)(l.J,{children:(0,e.BX)("div",{children:[(0,e.tZ)("main",{children:(0,e.tZ)(a.V,{title:"Top"})}),(0,e.tZ)("footer",{children:(0,e.tZ)(i.Z,{profile:n})})]})})]})}},797:function(t,n,r){"use strict";r.d(n,{Z:function(){return l}});var e=r(5944),i=r(5861),o=r(122),c=r(7357);function l(t){var n=t.profile,r=n.copylight_name,l=n.copylight_url;return(0,e.tZ)(c.Z,{sx:{mt:"2rem"},children:(0,e.BX)(i.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,e.tZ)(o.Z,{color:"inherit",href:l,target:"_blank",rel:"noopener",children:r})," ",(new Date).getFullYear(),"."]})})}}},function(t){t.O(0,[539,774,888,179],(function(){return n=5301,t(t.s=n);var n}));var n=t.O();_N_E=n}]);