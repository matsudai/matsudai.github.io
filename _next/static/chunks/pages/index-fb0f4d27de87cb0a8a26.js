(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,r){"use strict";var t=r(3848),i=r(9448);n.default=void 0;var c=i(r(7294)),s=r(9414),a=r(4651),o=r(7426),l={};function u(e,n,r,t){if(e&&(0,s.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var i=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(i?"%"+i:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,i=(0,a.useRouter)(),f=c.default.useMemo((function(){var n=(0,s.resolveHref)(i,e.href,!0),r=t(n,2),c=r[0],a=r[1];return{href:c,as:e.as?(0,s.resolveHref)(i,e.as):a||c}}),[i,e.href,e.as]),d=f.href,h=f.as,p=e.children,x=e.replace,v=e.shallow,j=e.scroll,m=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var _=(n=c.Children.only(p))&&"object"===typeof n&&n.ref,g=(0,o.useIntersection)({rootMargin:"200px"}),b=t(g,2),y=b[0],E=b[1],C=c.default.useCallback((function(e){y(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,y]);(0,c.useEffect)((function(){var e=E&&r&&(0,s.isLocalURL)(d),n="undefined"!==typeof m?m:i&&i.locale,t=l[d+"%"+h+(n?"%"+n:"")];e&&!t&&u(i,d,h,{locale:n})}),[h,d,E,m,r,i]);var L={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,i,c,a,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(r))&&(e.preventDefault(),null==a&&t.indexOf("#")>=0&&(a=!1),n[i?"replace":"push"](r,t,{shallow:c,locale:o,scroll:a}))}(e,i,d,h,x,v,j,m)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(i,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof m?m:i&&i.locale,R=i&&i.isLocaleDomain&&(0,s.getDomainLocale)(h,N,i&&i.locales,i&&i.domainLocales);L.href=R||(0,s.addBasePath)((0,s.addLocale)(h,N,i&&i.defaultLocale))}return c.default.cloneElement(n,L)};n.default=f},7426:function(e,n,r){"use strict";var t=r(3848);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!s,o=(0,i.useRef)(),l=(0,i.useState)(!1),u=t(l,2),f=u[0],d=u[1],h=(0,i.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),r||f||e&&e.tagName&&(o.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=a.get(n);if(r)return r;var t=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return a.set(n,r={id:n,observer:i,elements:t}),r}(r),i=t.id,c=t.observer,s=t.elements;return s.set(e,n),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),a.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return(0,i.useEffect)((function(){if(!s&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[h,f]};var i=r(7294),c=r(3447),s="undefined"!==typeof IntersectionObserver;var a=new Map},7455:function(e,n,r){"use strict";var t=r(5893),i=(r(7294),r(6593)),c=r.n(i);n.Z=function(){return(0,t.jsx)("footer",{className:c().footer,children:(0,t.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by ",(0,t.jsx)("img",{src:"/vercel.svg",alt:"Vercel Logo",className:c().logo})]})})}},249:function(e,n,r){"use strict";var t=r(5893),i=(r(7294),r(1664)),c=r(5536),s=r.n(c);n.Z=function(){return(0,t.jsxs)("header",{children:[(0,t.jsx)("div",{children:(0,t.jsx)("h1",{className:s().title,children:(0,t.jsx)(i.default,{href:"/",children:"\u672b\u4ee3"})})}),(0,t.jsx)("nav",{className:s().nav,children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/",children:"\u6982\u8981"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/posts",children:"\u8a18\u4e8b"})})]})})]})}},3803:function(e,n,r){"use strict";var t=r(5893),i=(r(7294),r(3775)),c=r.n(i);n.Z=function(e){var n=e.children;return(0,t.jsx)("div",{className:c().container,children:n})}},6839:function(e,n,r){"use strict";r.r(n);var t=r(5893),i=(r(7294),r(9008)),c=r(3803),s=r(249),a=r(7455),o=r(8885),l=r.n(o);n.default=function(){return(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(i.default,{children:(0,t.jsx)("title",{children:"\u6982\u8981 | \u672b\u4ee3"})}),(0,t.jsx)(s.Z,{}),(0,t.jsxs)("main",{className:l().main,children:[(0,t.jsx)("h2",{children:"\u8ab0"}),(0,t.jsxs)("p",{children:["\u5cf6\u6839\u770c\u677e\u6c5f\u5e02\u3067\u30a8\u30f3\u30b8\u30cb\u30a2\u3092\u3084\u3063\u3066\u3044\u307e\u3059\u3002",(0,t.jsx)("br",{}),"\u73fe\u5728\u306f\u696d\u52d9\u3067Ruby on Rails\u3092\u7528\u3044\u305fWeb\u30b7\u30b9\u30c6\u30e0\u306e\u958b\u767a\u30fb\u4fdd\u5b88\u306b\u643a\u308f\u3063\u3066\u3044\u307e\u3059\u3002"]}),(0,t.jsx)("h2",{children:"\u6280\u8853"}),(0,t.jsx)("h3",{children:"Ruby / Ruby on Rails"}),(0,t.jsx)("p",{children:"\u8a2d\u8a08\u30fb\u88fd\u9020\u30fb\u30c6\u30b9\u30c8\u30fb\u904b\u7528\u306e\u7d4c\u9a13\u304c\u3042\u308a\u307e\u3059\u3002\u8da3\u5473\u30ec\u30d9\u30eb\u3067RSPec\u306b\u3088\u308b\u81ea\u52d5\u30c6\u30b9\u30c8\u3092\u89e6\u308a\u307e\u3057\u305f\u3002"}),(0,t.jsx)("h3",{children:"AWS"}),(0,t.jsx)("p",{children:"\u4e0b\u8a18\u306e\u958b\u767a\u30fb\u904b\u7528\u57fa\u76e4\u3092\u69cb\u7bc9\u3057\u305f\u7d4c\u9a13\u304c\u3042\u308a\u307e\u3059\u3002"}),(0,t.jsx)("h4",{children:"Web\u30b7\u30b9\u30c6\u30e0\u306e\u5b9f\u884c\u57fa\u76e4"}),(0,t.jsxs)("p",{children:["\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u30fb\u904b\u7528\u306e\u305f\u3081EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5185\u306bNginx+Unicorn+Rails5\u5b9f\u884c\u74b0\u5883\u3092\u69cb\u7bc9\u3057\u307e\u3057\u305f\u3002",(0,t.jsx)("br",{}),"\u30d5\u30ed\u30f3\u30c8\u306bCroudFront\u30fbELB\u304c\u3042\u3063\u305f\u305f\u3081Nginx\u306f\u30ea\u30d0\u30fc\u30b9\u30d7\u30ed\u30ad\u30b7\u3067\u306f\u306a\u304fWeb\u30b5\u30fc\u30d0\u3068\u3057\u3066\u5229\u7528\u3057\u307e\u3057\u305f\u3002"]}),(0,t.jsx)("h4",{children:"\u30d0\u30c3\u30c1\u51e6\u7406\u306e\u5b9f\u884c\u57fa\u76e4"}),(0,t.jsx)("p",{children:"EventBridge\u3001SQS\u3068EC2\u3092\u7528\u3044\u305f\u30b8\u30e7\u30d6\u30ad\u30e5\u30fc\u578b\u306e\u30d0\u30c3\u30c1\u51e6\u7406\u5b9f\u884c\u57fa\u76e4\u306e\u8a2d\u8a08\u304a\u3088\u3073\u69cb\u7bc9\u3092\u884c\u3044\u307e\u3057\u305f\u3002"}),(0,t.jsx)("h3",{children:"JavaScript / CSS"}),(0,t.jsxs)("p",{children:["\u6a5f\u80fd\u6539\u4fee\u306e\u305f\u3081\u306b\u89e6\u3063\u305f\u7d4c\u9a13\u306f\u3042\u308a\u307e\u3059\u304c\u3001\u3044\u305a\u308c\u3082\u8da3\u5473\u7a0b\u5ea6\u3067\u3059\u3002",(0,t.jsx)("br",{}),"\u3061\u306a\u307f\u306b\u672c\u30b5\u30a4\u30c8\u306f\u52c9\u5f37\u306e\u305f\u3081\u306bNext.js\u3067\u4f5c\u6210\u3057\u3066\u3044\u307e\u3059\u3002"]}),(0,t.jsx)("h2",{children:"\u8db3\u8de1"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"2018.03\uff1a\u677e\u6c5f\u5de5\u696d\u9ad8\u7b49\u5c02\u9580\u5b66\u6821\xa0\u5c02\u653b\u79d1\xa0\u96fb\u5b50\u60c5\u5831\u5de5\u5b66\u30b7\u30b9\u30c6\u30e0\u5c02\u653b\xa0\u5352\u696d"}),(0,t.jsx)("li",{children:"2018.04\uff1a\u682a\u5f0f\u4f1a\u793eCMC Solutions\u5165\u793e"})]}),(0,t.jsx)("h2",{children:"\u9023\u7d61\u5148\u306a\u3069"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Email\uff1amatsudai.public.1131@gmail.com"}),(0,t.jsxs)("li",{children:["GitHub\uff1a",(0,t.jsx)("a",{href:"https://github.com/matsudai",children:"matsudai"})]}),(0,t.jsxs)("li",{children:["Qiita\uff1a",(0,t.jsx)("a",{href:"https://qiita.com/matsudai",children:"matsudai"})]})]})]}),(0,t.jsx)(a.Z,{})]})}},5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6839)}])},6593:function(e){e.exports={footer:"PageFooter_footer__3vB7_",logo:"PageFooter_logo__10KLb"}},5536:function(e){e.exports={title:"PageHeader_title__1_SlD",nav:"PageHeader_nav__31k5P"}},3775:function(e){e.exports={container:"PageContainer_container__2FCQc"}},8885:function(e){e.exports={main:"index_main__3idfy"}},1664:function(e,n,r){e.exports=r(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);