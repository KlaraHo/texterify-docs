(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,s(s({ref:t},c),{},{components:r})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(104)),i={sidebar_position:6,title:"Import translations"},s={unversionedId:"basics/import-translations",id:"basics/import-translations",isDocsHomePage:!1,title:"Import translations",description:"You should now have a project set up with at least one language. We will now import your translations. To do this click on Import in the left sidebar. If you are starting a new project and don't have any translation files to import you can skip this step and create keys manually by reading more here.",source:"@site/docs/basics/import-translations.md",sourceDirName:"basics",slug:"/basics/import-translations",permalink:"/basics/import-translations",editUrl:"https://github.com/texterify/texterify-docs/edit/master/website/docs/basics/import-translations.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Import translations"},sidebar:"tutorialSidebar",previous:{title:"Add languages",permalink:"/basics/add-languages"},next:{title:"Add keys",permalink:"/basics/add-keys"}},l=[],c={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You should now have a project set up with at least one language. We will now import your translations. To do this click on ",Object(o.b)("inlineCode",{parentName:"p"},"Import")," in the left sidebar. If you are starting a new project and don't have any translation files to import you can skip this step and create keys manually by reading more ",Object(o.b)("a",{parentName:"p",href:"add-keys"},"here"),"."),Object(o.b)("p",null,"Select the language for which you are uploading the translations and then drop your file with your translations. Currently the following formats for importing translations are supported:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"JSON Flat (with format ",Object(o.b)("inlineCode",{parentName:"li"},"<key>: <translation>"),")"),Object(o.b)("li",{parentName:"ul"},"JSON Format.js (with format ",Object(o.b)("inlineCode",{parentName:"li"},'<key>: { defaultMessage: "<message>", description: "<description>" }'),")"),Object(o.b)("li",{parentName:"ul"},"iOS .strings files")),Object(o.b)("p",null,"We are currently working on adding further import formats. If you are missing a format you need please just create a GitHub issue ",Object(o.b)("a",{parentName:"p",href:"https://github.com/texterify/texterify/issues"},"here")," or send us an email to ",Object(o.b)("a",{parentName:"p",href:"mailto:support@texterify.com"},"support@texterify.com"),"."),Object(o.b)("p",null,"Then click on ",Object(o.b)("inlineCode",{parentName:"p"},"Import file")," to upload your translations. Repeat this process for all your language translation files."),Object(o.b)("p",null,"After the Import has finished click on ",Object(o.b)("inlineCode",{parentName:"p"},"Keys")," in the left sidebar to see all your imported keys and translations."))}p.isMDXComponent=!0}}]);