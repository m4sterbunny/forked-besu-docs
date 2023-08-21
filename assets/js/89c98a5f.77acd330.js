"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[32989],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,v=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(v,i(i({ref:t},l),{},{components:r})):n.createElement(v,i({ref:t},l))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Private networks",sidebar_position:1,sidebar_label:"Introduction",id:"index",description:"Private networks overview",tags:["private networks"]},i="Hyperledger Besu for private networks",s={unversionedId:"private-networks/index",id:"version-23.4.1/private-networks/index",title:"Private networks",description:"Private networks overview",source:"@site/versioned_docs/version-23.4.1/private-networks/index.md",sourceDirName:"private-networks",slug:"/private-networks/",permalink:"/stable/private-networks/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/index.md",tags:[{label:"private networks",permalink:"/stable/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1691012456,formattedLastUpdatedAt:"Aug 2, 2023",sidebarPosition:1,frontMatter:{title:"Private networks",sidebar_position:1,sidebar_label:"Introduction",id:"index",description:"Private networks overview",tags:["private networks"]},sidebar:"privateDocSidebar",next:{title:"Get started",permalink:"/stable/private-networks/get-started"}},p={},c=[{value:"Architecture",id:"architecture",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hyperledger-besu-for-private-networks"},"Hyperledger Besu for private networks"),(0,a.kt)("p",null,"You can use Besu to develop enterprise applications requiring secure, high-performance transaction processing in a private network."),(0,a.kt)("p",null,"A private network is a network not connected to Ethereum Mainnet or an Ethereum testnet. Private networks typically use a different ",(0,a.kt)("a",{parentName:"p",href:"/stable/public-networks/concepts/network-and-chain-id"},"chain ID")," and proof of authority consensus (",(0,a.kt)("a",{parentName:"p",href:"/stable/private-networks/how-to/configure/consensus/qbft"},"QBFT"),", ",(0,a.kt)("a",{parentName:"p",href:"/stable/private-networks/how-to/configure/consensus/ibft"},"IBFT 2.0"),", or ",(0,a.kt)("a",{parentName:"p",href:"/stable/private-networks/how-to/configure/consensus/clique"},"Clique"),")."),(0,a.kt)("p",null,"You can also ",(0,a.kt)("a",{parentName:"p",href:"/stable/private-networks/tutorials/ethash"},"create a local development network")," using proof of work (Ethash)."),(0,a.kt)("p",null,"Besu supports enterprise features including ",(0,a.kt)("a",{parentName:"p",href:"/stable/private-networks/concepts/privacy/"},"privacy")," and ",(0,a.kt)("a",{parentName:"p",href:"/stable/private-networks/concepts/permissioning/"},"permissioning"),"."),(0,a.kt)("p",null,"Get started with the ",(0,a.kt)("a",{parentName:"p",href:"/stable/private-networks/tutorials/quickstart"},"Developer Quickstart")," to rapidly generate local blockchain networks."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"The following diagram outlines the high-level architecture of Besu for private networks."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Private architecture",src:r(91325).Z,width:"1656",height:"1054"})),(0,a.kt)("p",null,"If you have any questions about Besu for private networks, ask on the ",(0,a.kt)("strong",{parentName:"p"},"besu")," channel on\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/hyperledger"},"Hyperledger Discord"),"."))}d.isMDXComponent=!0},91325:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/private-architecture-5a4d514abd93e693a77b25cacdfc9ef7.jpeg"}}]);