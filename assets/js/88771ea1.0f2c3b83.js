"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[48345],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(r),d=o,b=l["".concat(u,".").concat(d)]||l[d]||m[d]||i;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41059:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"Use Quorum Hibernate",sidebar_position:4,description:"Use Quorum Hibernate with Hyperledger Besu",tags:["private networks"]},a="Use Quorum Hibernate",s={unversionedId:"private-networks/how-to/monitor/quorum-hibernate",id:"private-networks/how-to/monitor/quorum-hibernate",title:"Use Quorum Hibernate",description:"Use Quorum Hibernate with Hyperledger Besu",source:"@site/docs/private-networks/how-to/monitor/quorum-hibernate.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/quorum-hibernate",permalink:"/development/private-networks/how-to/monitor/quorum-hibernate",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/monitor/quorum-hibernate.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1693256575,formattedLastUpdatedAt:"Aug 28, 2023",sidebarPosition:4,frontMatter:{title:"Use Quorum Hibernate",sidebar_position:4,description:"Use Quorum Hibernate with Hyperledger Besu",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Elastic Stack",permalink:"/development/private-networks/how-to/monitor/elastic-stack"},next:{title:"Use Splunk",permalink:"/development/private-networks/how-to/monitor/splunk"}},u={},p=[],c={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-quorum-hibernate"},"Use Quorum Hibernate"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-hibernate"},"Quorum Hibernate")," is a proxy that monitors a node's API traffic and hibernates the node when inactive. This reduces infrastructure costs by ensuring only nodes receiving API requests or nodes required to establish consensus are running."),(0,o.kt)("p",null,"Quorum Hibernate wakes up hibernating nodes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When a new transaction or API request is received."),(0,o.kt)("li",{parentName:"ul"},"To allow it to periodically sync with the network.")))}l.isMDXComponent=!0}}]);