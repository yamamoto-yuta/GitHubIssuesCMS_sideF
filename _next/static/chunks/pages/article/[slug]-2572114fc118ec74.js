(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{9275:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/[slug]",function(){return n(4142)}])},2122:function(t,e,n){"use strict";n.d(e,{Ls:function(){return y},jV:function(){return x}});var r=n(5944),i=n(6242),o=n(3321),l=n(7357),a=n(3965),c=n(5861),d=n(7948),s=n(6886),u=n(8787),p=n(786),h=n(2818),Z=n(7294),f=n(1664),v=n.n(f);function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){m(t,e,n[e])}))}return t}var g=function(t){var e=t.slug,n=t.title,s=t.tags,h=t.posted_at,Z=t.url_subpath;return h>(0,p.I)()?(0,r.tZ)("div",{}):(0,r.BX)(i.Z,{variant:"outlined",sx:{width:"98%",mt:"0.8rem",mb:"0.8rem",p:0},children:[(0,r.tZ)(v(),{href:"/article/".concat(e),passHref:!0,children:(0,r.tZ)(o.Z,{sx:{width:"100%",textTransform:"none",pt:0,pb:0,pl:0,pr:0},children:(0,r.BX)(l.Z,{sx:{pt:0,pb:0,pr:0,width:"100%",pl:0},children:[(0,r.tZ)(a.Z,{component:"img",image:"".concat(Z,"/static/images/thumbnail/").concat(e,".jpg"),alt:"thumbnail"}),(0,r.BX)(l.Z,{sx:{pr:"1.4rem",pl:"1.4rem"},children:[(0,r.tZ)(c.Z,{gutterBottom:!0,variant:"body2",color:"text.secondary",component:"div",sx:{m:0,pt:1,pb:.5},children:h}),(0,r.tZ)(c.Z,{variant:"h3",color:"text.primary",component:"div",sx:{fontWeight:"bold",pt:0,pl:0,pr:0,pb:1},children:n})]})]})})}),(0,r.tZ)(d.Z,{children:(0,r.tZ)(u.L,{tags:s,sx:{m:0,pb:.5,pt:.5}})})]})},y=function(t){var e=t.slug,n=t.url_subpath,i=(0,Z.useContext)(h.PostsContext),o=i.posts,l=(i.setPosts,o[e]);return null===l||void 0===l?(0,r.tZ)("div",{}):(0,r.tZ)(g,b({},l,{url_subpath:n}))},x=function(t){var e=t.posts,n=t.page,i=t.postNumPerPage,o=t.url_subpath,l=(n-1)*i,a=(n-1)*i+i;return(0,r.tZ)(s.ZP,{container:!0,children:e.slice(l,a).map((function(t){return(0,r.tZ)(s.ZP,{item:!0,xs:12,sm:6,children:(0,r.tZ)(g,b({},t,{url_subpath:o}))},t.slug)}))})}},786:function(t,e,n){"use strict";n.d(e,{I:function(){return d}});var r=n(7484),i=n.n(r),o=n(178),l=n.n(o),a=n(9387),c=n.n(a),d=function(){return i().extend(l()),i().extend(c()),i().tz.setDefault("Asia/Tokyo"),i()().tz().format("YYYY\u5e74MM\u6708DD\u65e5 HH\u6642mm\u5206")}},4142:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return wt},default:function(){return Pt}});var r=n(5944),i=n(1163),o=n(2918),l=n(9008),a=n(786),c=n(7294),d=n(122),s=n(7357),u=n(6886),p=n(5861),h=n(7720),Z=n(6242),f=n(4267),v=n(7906),m=n(3184),b=n(295),g=n(3816),y=n(3252),x=n(3321),j=n(3965),_=n(3586),w=n(9512),P=n(2818),k=function(t){var e=t.url,n=(0,c.useContext)(P.ExternalMetadataContext),i=n.metadata;n.setMetadata;if(void 0===i[e])return(0,r.tZ)(d.Z,{href:e,target:"_blank",rel:"noopener",children:"\u5916\u90e8\u30b5\u30a4\u30c8"});var o=i[e].url_domain,l=i[e].url_domain_link,a=i[e].title;if(void 0===a)return(0,r.tZ)(d.Z,{href:e,target:"_blank",rel:"noopener",children:"\u5916\u90e8\u30b5\u30a4\u30c8"});var h=i[e].description;void 0===h&&(h=""),h.length>70&&(h=h.slice(0,70).concat("..."));var f=i[e].image_url,v=(0,r.tZ)("div",{});return v=void 0===f?(0,r.tZ)("div",{}):(0,r.tZ)(x.Z,{href:e,"aria-label":a,target:"_blank",rel:"noopener",sx:{m:0,p:0},children:(0,r.tZ)(j.Z,{component:"img",image:f,alt:a})}),(0,r.tZ)(Z.Z,{variant:"outlined",sx:{width:"98%",mt:"1rem",mb:"1rem"},children:(0,r.BX)(u.ZP,{container:!0,alignItems:"center",justifyContent:"center",children:[(0,r.tZ)(u.ZP,{item:!0,xs:12,sm:7,children:(0,r.BX)(s.Z,{sx:{pr:"1rem",pb:"0.5rem",pt:"1rem",pl:"1rem"},children:[(0,r.tZ)(d.Z,{variant:"body1",href:e,target:"_blank",rel:"noopener",color:"inherit",underline:"hover",fontWeight:"bold",children:a}),(0,r.tZ)(p.Z,{variant:"body2",color:"text.secondary",sx:{pt:"0.5rem"},children:h}),(0,r.tZ)(d.Z,{href:l,target:"_blank",rel:"noopener",sx:{fontSize:11},color:"text.secondary",children:o})]})}),(0,r.tZ)(u.ZP,{item:!0,xs:12,sm:5,children:v})]})})},O=n(2122),S=function(t){var e=t.url;return/https?:\/\/(www\.)?twitter\.com\/\w{1,15}\/status\/.*/.test(e)?(0,r.tZ)(C,{url:e}):/https?:\/\/youtu\.be\/.+/.test(e)||/https:\/\/www\.youtube\.com\/watch\?v=[\w\d_]+[\S]*/.test(e)?(0,r.tZ)(X,{url:e}):/https?:\/\/shotarokataoka\.github\.io\/article\/\d+\/?[\S]*/.test(e)?(0,r.tZ)(B,{url:e}):(0,r.tZ)(k,{url:e})},B=function(t){var e=t.url,n=/https?:\/\/shotarokataoka\.github\.io\/article\/(\d+)/g.exec(e);return null!=n?(0,r.tZ)(O.Ls,{slug:n[1],url_subpath:""}):(0,r.tZ)("div",{})},C=function(t){var e=t.url,n=e.split("/").pop();return void 0!=n?(0,r.tZ)(w.iD,{tweetId:n}):(0,r.tZ)(d.Z,{href:e,target:"_blank",rel:"noopener"})},X=function(t){var e=t.url,n=function(t){return(0,r.tZ)("div",{style:{position:"relative",paddingBottom:"56.25%",paddingTop:25,height:0},children:(0,r.tZ)("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0"})})},i=/https?:\/\/youtu\.be\/(.+)/g.exec(e);return null!=i||null!=(i=/https:\/\/www\.youtube\.com\/watch\?v=([\w\d_]+)/g.exec(e))?n(i[1]):(0,r.tZ)(d.Z,{href:e,target:"_blank",rel:"noopener"})},E="#e74856",N="#f9f1a5",D="#fb8800",H="#5fd7ff",W={base:{background:"#000",color:"#dddddd"},"hljs-comment":{color:N,fontStyle:"italic",display:"inline"},"hljs-quote":{color:N,fontStyle:"italic",display:"inline"},"hljs-keyword":{color:E,display:"inline"},"hljs-selector-tag":{color:E,display:"inline"},"hljs-type":{color:E,display:"inline"},"hljs-string":{color:"#5c9cf6",display:"inline"},"hljs-subst":{color:"#daefa3",display:"inline"},"hljs-regexp":{color:"#e9c062",display:"inline"},"hljs-link":{color:"#e9c062",display:"inline"},"hljs-title":{color:D,display:"inline"},"hljs-section":{color:D,display:"inline"},"hljs-built_in":{color:D,display:"inline"},"hljs-tag":{color:D,display:"inline"},"hljs-name":{color:D,display:"inline"},"hljs-title.class_":{textDecoration:"underline",display:"inline"},"hljs-class":{textDecoration:"underline",display:"inline"},"hljs-doctag":{textDecoration:"underline",display:"inline"},"hljs-symbol":{color:H,display:"inline"},"hljs-bullet":{color:H,display:"inline"},"hljs-number":{color:H,display:"inline"},"hljs-params":{color:"#3e87e3",display:"inline"},"hljs-variable":{color:"#3e87e3",display:"inline"},"hljs-template-variable":{color:"#3e87e3",display:"inline"},"hljs-attribute":{color:"#cda869",display:"inline"},"hljs-meta":{color:"#8996a8",display:"inline"},"hljs-formula":{backgroundColor:"#0e2231",color:"#f8f8f8",fontStyle:"italic",display:"inline"},"hljs-addition":{backgroundColor:"#253b22",color:"#f8f8f8",display:"inline"},"hljs-deletion":{backgroundColor:"#420e09",color:"#f8f8f8",display:"inline"},"hljs-selector-class":{color:"#9b703f",display:"inline"},"hljs-selector-id":{color:"#8b98ab",display:"inline"},"hljs-emphasis":{fontStyle:"italic",display:"inline"},"hljs-strong":{fontWeight:"bold",display:"inline"}};function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){A(t,e,n[e])}))}return t}var M=function(t,e){var n={};return n=e?{overflow:"scroll",overflowY:"scroll",padding:"0.5rem"}:{padding:"0.5rem"},(0,r.tZ)(s.Z,{maxHeight:"600px",sx:W.base,style:n,children:t.children.map((function(t){return z(t)}))})},Y=function(t){return"element"===t.type?(0,r.tZ)(s.Z,{sx:{display:"inline"},children:t.children.map((function(t,e){return(0,r.tZ)(z,I({},t),e)}))}):(0,r.tZ)(s.Z,{sx:{display:"inline"},children:t.value})},z=function(t){var e,n;if(void 0===(null===(e=t.properties)||void 0===e?void 0:e.className[0]))return(0,r.tZ)(Y,I({},t));var i=null===(n=t.properties)||void 0===n?void 0:n.className[0],o=W[i];return void 0===o&&(console.error("[Error]: undefined Highlight className = ",i),console.log(t),o={display:"inline"}),(0,r.tZ)(s.Z,{sx:o,children:(0,r.tZ)(Y,I({},t))})},F=n(9371),T=n(2557),J=n(5802),L=n(1834),q=n(1356),G=n(1513),V=n(8522),R=n(6388),U=n(8204);function K(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){K(t,e,n[e])}))}return t}function $(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var tt=function(t){var e=t.children;return(0,r.BX)("div",{children:[(0,r.tZ)(l.default,{children:(0,r.tZ)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",integrity:"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",crossOrigin:"anonymous"})}),(0,r.tZ)(F.D,{remarkPlugins:[L.Z,q.Z,V.Z,R.Z],rehypePlugins:[T.Z,J.Z,G.Z],components:{a:et,h1:rt,h2:it,h3:ot,h4:lt,h5:at,h6:ct,code:dt,p:st,blockquote:ut,table:pt,thead:ht,tbody:Zt,tr:ft,th:vt,td:mt,img:bt},children:e})]})},et=function(t){t.node;var e=t.href,n=$(t,["node","href"]);return(null===e||void 0===e?void 0:e.startsWith("#"))||(null===e||void 0===e?void 0:e.startsWith("/"))||(null===e||void 0===e?void 0:e.includes("shotarokataoka.github.io"))?(0,r.tZ)(d.Z,Q({},n,{href:e})):(0,r.tZ)(d.Z,Q({},n,{href:e,target:"_blank",rel:"noopener"}))},nt=function(t){var e,n=t.level,i=t.text,o="h1"===(e=n)?"#":"h2"===e?"##":"h3"===e?"###":"h4"===e?"####":"h5"===e?"#####":"h6"===e?"######":void 0;return(0,r.BX)(s.Z,{sx:{pt:2,pb:1},children:[(0,r.BX)(u.ZP,{container:!0,children:[(0,r.tZ)(u.ZP,{item:!0,xs:.5}),(0,r.tZ)(u.ZP,{item:!0,xs:1.5,children:(0,r.tZ)(d.Z,{href:"#".concat(i),underline:"hover",variant:n,color:"secondary.main",sx:{p:0},children:o})}),(0,r.tZ)(u.ZP,{item:!0,xs:10,children:(0,r.tZ)(p.Z,{variant:n,component:"div",sx:{pt:.42,pl:0,pr:0,pb:0},children:i})})]}),(0,r.tZ)(h.Z,{textAlign:"left",sx:{pt:1}})]})},rt=function(t){t.level,t.node;var e=$(t,["level","node"]).children.toString();return(0,r.tZ)("h1",{id:e,children:(0,r.tZ)(nt,{level:"h1",text:e})})},it=function(t){t.level,t.node;var e=$(t,["level","node"]).children.toString();return e="Footnotes"===e?"\u811a\u6ce8":e,(0,r.tZ)("h2",{id:e,children:(0,r.tZ)(nt,{level:"h2",text:e})})},ot=function(t){t.level,t.node;var e=$(t,["level","node"]).children.toString();return(0,r.tZ)("h3",{id:e,children:(0,r.tZ)(nt,{level:"h3",text:e})})},lt=function(t){t.level,t.node;var e=$(t,["level","node"]).children.toString();return(0,r.tZ)("h4",{id:e,children:(0,r.tZ)(nt,{level:"h4",text:e})})},at=function(t){t.level,t.node;var e=$(t,["level","node"]).children.toString();return(0,r.tZ)("h5",{id:e,children:(0,r.tZ)(nt,{level:"h5",text:e})})},ct=function(t){t.level,t.node;var e=$(t,["level","node"]).children.toString();return(0,r.tZ)("h6",{id:e,children:(0,r.tZ)(nt,{level:"h6",text:e})})},dt=function(t){var e,n,i,o,l,a,c=t.node,d=$(t,["node"]);return"number"===typeof(null===(e=c.position)||void 0===e?void 0:e.end.line)&&"number"===typeof(null===(n=c.position)||void 0===n?void 0:n.start.line)?(null===(i=c.position)||void 0===i?void 0:i.end.line)-(null===(o=c.position)||void 0===o?void 0:o.start.line)>5?M(c,!0):(null===(l=c.position)||void 0===l?void 0:l.end.line)-(null===(a=c.position)||void 0===a?void 0:a.start.line)>0?M(c,!1):function(t){return(0,r.tZ)(s.Z,I({},t,{sx:{display:"inline",background:"#fcfcfc",color:"red",pr:.5,pl:.5,mr:.5,ml:.5,border:1,borderColor:"#dddddd",borderRadius:1}}))}(d):(0,r.tZ)("br",{})},st=function(t){var e,n=t.node,i=$(t,["node"]),o=n.children[0];return 1===n.children.length&&"element"===o.type&&"a"===o.tagName&&"string"===typeof(null===(e=o.properties)||void 0===e?void 0:e.href)&&"text"===o.children[0].type&&o.properties.href===o.children[0].value?(0,r.tZ)(S,{url:o.properties.href}):(0,r.tZ)(p.Z,Q({},i,{variant:"body1",component:"div"}))},ut=function(t){t.node;var e=$(t,["node"]),n="";return"light"===U.Z.palette.mode?n="#efefefef":"dark"===U.Z.palette.mode&&(n="#303030"),(0,r.BX)(u.ZP,{container:!0,sx:{mt:"2rem"},children:[(0,r.tZ)(u.ZP,{item:!0,xs:1}),(0,r.tZ)(u.ZP,{item:!0,xs:10,children:(0,r.tZ)(Z.Z,{style:{backgroundColor:n},children:(0,r.tZ)(f.Z,{children:(0,r.BX)(u.ZP,{container:!0,children:[(0,r.tZ)(u.ZP,{item:!0,xs:2,children:(0,r.tZ)(_.Z,{color:"disabled",fontSize:"large"})}),(0,r.tZ)(u.ZP,{item:!0,xs:10,children:e.children})]})})})}),(0,r.tZ)(u.ZP,{item:!0,xs:1})]})},pt=function(t){t.node;var e=$(t,["node"]);return(0,r.tZ)(v.Z,Q({},e))},ht=function(t){t.node;var e=$(t,["node"]);return(0,r.tZ)(m.Z,Q({},e))},Zt=function(t){t.node;var e=$(t,["node"]);return(0,r.tZ)(b.Z,Q({},e))},ft=function(t){t.node,t.isHeader;var e=$(t,["node","isHeader"]);return(0,r.tZ)(g.Z,Q({},e))},vt=function(t){t.node,t.isHeader;var e=$(t,["node","isHeader"]);return(0,r.tZ)(y.Z,Q({align:"right"},e))},mt=function(t){t.node,t.isHeader;var e=$(t,["node","isHeader"]);return(0,r.tZ)(y.Z,Q({},e))},bt=function(t){var e,n,i=t.node;$(t,["node"]);if("string"===typeof(null===(e=i.properties)||void 0===e?void 0:e.src)&&"string"===typeof(null===(n=i.properties)||void 0===n?void 0:n.alt)){var o=i.properties.src,l=i.properties.src,a=l.split(".webphttp");return 2===a.length&&(o=a[0].concat(".webp"),l="http".concat(a[1])),(0,r.tZ)(x.Z,{href:l,"aria-label":i.properties.alt,target:"_blank",rel:"noopener",sx:{width:"100%"},children:(0,r.tZ)(j.Z,{component:"img",image:o,alt:i.properties.alt})})}return(0,r.tZ)("br",{})},gt=n(797),yt=n(8787),xt=n(4345),jt=n(5585),_t=n(7255),wt=!0,Pt=function(t){var e=t.post,n=t.profile,d=t.posts,u=t.metadata,Z=t.relatedPosts;if((0,(0,c.useContext)(P.PostsContext).setPosts)(d),(0,(0,c.useContext)(P.ExternalMetadataContext).setMetadata)(u),!(0,i.useRouter)().isFallback&&!(null===e||void 0===e?void 0:e.slug))return(0,r.tZ)(o.default,{statusCode:404});var f=(0,a.I)();return(null===e||void 0===e?void 0:e.posted_at)>f?(0,r.tZ)(o.default,{statusCode:404}):(""===e.description&&(e.description="".concat(n.author_name,"\u306e\u8a18\u4e8b\u3067\u3059\u3002")),(0,r.BX)("div",{children:[(0,r.BX)(l.default,{children:[(0,r.tZ)("title",{children:"".concat(e.title," | ").concat(n.blog_title)}),(0,r.tZ)("meta",{name:"description",content:e.description}),(0,r.tZ)("meta",{property:"og:title",content:"".concat(e.title," | ").concat(n.blog_title)}),(0,r.tZ)("meta",{property:"og:description",content:e.description}),(0,r.tZ)("meta",{property:"og:image",content:"".concat(n.root_url,"/static/images/thumbnail/").concat(e.slug,".jpg")}),(0,r.tZ)("meta",{property:"og:type",content:"article"}),(0,r.tZ)("meta",{property:"og:site_name",content:n.blog_title}),(0,r.tZ)("meta",{property:"og:locale",content:"ja_JP"}),(0,r.tZ)("meta",{property:"og:url",content:"".concat(n.root_url,"/article/").concat(e.slug)}),(0,r.tZ)("meta",{name:"twitter:image",content:"".concat(n.root_url,"/static/images/thumbnail/").concat(e.slug,".jpg")}),(0,r.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.tZ)("link",{rel:"icon",href:"/static/favicon.ico"})]}),(0,r.tZ)(jt._,{profile:n,slug:e.slug}),(0,r.tZ)(_t.J,{children:(0,r.BX)("div",{children:[(0,r.tZ)("main",{children:(0,r.BX)("article",{children:[(0,r.tZ)(xt.V,{title:e.title}),(0,r.BX)("div",{children:[(0,r.BX)(p.Z,{variant:"body2",textAlign:"left",sx:{pt:2},children:["\u516c\u958b\uff1a",e.posted_at]}),e.updated_at&&(0,r.BX)(p.Z,{variant:"body2",textAlign:"left",children:["\u66f4\u65b0\uff1a",e.updated_at]}),(0,r.tZ)(yt.L,{tags:e.tags,sx:{mt:2}}),(0,r.tZ)(s.Z,{sx:{m:3}}),(0,r.tZ)(tt,{children:e.content}),(0,r.tZ)(h.Z,{sx:{pt:"3rem"},children:(0,r.tZ)(p.Z,{variant:"h2",children:"\u95a2\u9023\u8a18\u4e8b"})}),(0,r.tZ)(O.jV,{posts:Z,page:1,postNumPerPage:10,url_subpath:n.url_subpath})]})]})}),(0,r.tZ)("footer",{children:(0,r.tZ)(gt.Z,{profile:n})})]})})]}))}}},function(t){t.O(0,[573,375,273,297,489,774,888,179],(function(){return e=9275,t(t.s=e);var e}));var e=t.O();_N_E=e}]);