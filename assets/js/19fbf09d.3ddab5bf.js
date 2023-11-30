"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[94100],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3528:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const o={title:"Use client libraries",sidebar_position:2,description:"Hyperledger Besu client libraries",tags:["public networks","private networks"]},a="Use client libraries",s={unversionedId:"public-networks/how-to/develop/client-libraries",id:"version-23.7.2/public-networks/how-to/develop/client-libraries",title:"Use client libraries",description:"Hyperledger Besu client libraries",source:"@site/versioned_docs/version-23.7.2/public-networks/how-to/develop/client-libraries.md",sourceDirName:"public-networks/how-to/develop",slug:"/public-networks/how-to/develop/client-libraries",permalink:"/23.7.2/public-networks/how-to/develop/client-libraries",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/public-networks/how-to/develop/client-libraries.md",tags:[{label:"public networks",permalink:"/23.7.2/tags/public-networks"},{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1701375992,formattedLastUpdatedAt:"Nov 30, 2023",sidebarPosition:2,frontMatter:{title:"Use client libraries",sidebar_position:2,description:"Hyperledger Besu client libraries",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use Hardhat",permalink:"/23.7.2/public-networks/how-to/develop/hardhat"},next:{title:"Configure mining",permalink:"/23.7.2/public-networks/how-to/use-pow/mining"}},l={},p=[],c={toc:p},u="wrapper";function b(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-client-libraries"},"Use client libraries"),(0,i.kt)("p",null,"Dapps use client libraries, such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/web3.js/"},"web3.js"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/web3j/web3j"},"web3j"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/ethereumj"},"ethereumj"),", to forward JSON-RPC requests to Hyperledger Besu. Any client library implementing core Ethereum RPC methods works with Besu."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/how-to/use-privacy/web3js-quorum"},"web3js-quorum library")," with Besu for ",(0,i.kt)("a",{parentName:"p",href:"/23.7.2/private-networks/concepts/privacy/"},"privacy features"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Client Libraries",src:r(11506).Z,width:"1520",height:"1316"})),(0,i.kt)("p",null,"Use client libraries to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create signed transactions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/23.7.2/private-networks/how-to/send-transactions/private-transactions"},"Create and send private transactions"),".")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/23.7.2/public-networks/how-to/send-transactions#use-wallets-for-key-management"},"Hyperledger Besu does not support key management inside the client"),".")))}b.isMDXComponent=!0},11506:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Hyperledger-Besu-Client-Libraries-cab8a506f122249c4d4d139436858697.png"}}]);