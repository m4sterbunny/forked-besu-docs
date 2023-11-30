"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[87947],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5560:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={title:"Configure Java and Besu",tags:["public networks","private networks"],hide:["feedback"]},a="Configure the Java Virtual Machine",c={unversionedId:"public-networks/how-to/configure-jvm/index",id:"version-23.10.1/public-networks/how-to/configure-jvm/index",title:"Configure Java and Besu",description:"This section contains information on configuring Besu and the Java Virtual Machine (JVM).",source:"@site/versioned_docs/version-23.10.1/public-networks/how-to/configure-jvm/index.md",sourceDirName:"public-networks/how-to/configure-jvm",slug:"/public-networks/how-to/configure-jvm/",permalink:"/23.10.1/public-networks/how-to/configure-jvm/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.1/public-networks/how-to/configure-jvm/index.md",tags:[{label:"public networks",permalink:"/23.10.1/tags/public-networks"},{label:"private networks",permalink:"/23.10.1/tags/private-networks"}],version:"23.10.1",lastUpdatedAt:1701375992,formattedLastUpdatedAt:"Nov 30, 2023",frontMatter:{title:"Configure Java and Besu",tags:["public networks","private networks"],hide:["feedback"]},sidebar:"publicDocSidebar",previous:{title:"Sample load balancer configurations",permalink:"/23.10.1/public-networks/how-to/configure-ha/sample-configuration"},next:{title:"Pass JVM options",permalink:"/23.10.1/public-networks/how-to/configure-jvm/pass-jvm-options"}},u={},s=[],l={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-the-java-virtual-machine"},"Configure the Java Virtual Machine"),(0,o.kt)("p",null,"This section contains information on configuring Besu and the Java Virtual Machine (JVM)."))}f.isMDXComponent=!0}}]);