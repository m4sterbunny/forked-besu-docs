"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[65627],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(p,".").concat(m)]||c[m]||k[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={description:"Private networks how to overview",tags:["private networks"]},i="How to",l={unversionedId:"private-networks/how-to/index",id:"version-23.7.1/private-networks/how-to/index",title:"How to",description:"Private networks how to overview",source:"@site/versioned_docs/version-23.7.1/private-networks/how-to/index.md",sourceDirName:"private-networks/how-to",slug:"/private-networks/how-to/",permalink:"/23.7.1/private-networks/how-to/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/private-networks/how-to/index.md",tags:[{label:"private networks",permalink:"/23.7.1/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1700682270,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{description:"Private networks how to overview",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Start Besu",permalink:"/23.7.1/private-networks/get-started/start-node"},next:{title:"Consensus protocols",permalink:"/23.7.1/private-networks/how-to/configure/consensus/"}},p={},s=[],u={toc:s},c="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to"},"How to"),(0,a.kt)("p",null,"This section provides instructional content for private network features."),(0,a.kt)("p",null,"The following features are shared with ",(0,a.kt)("a",{parentName:"p",href:"/23.7.1/public-networks/"},"public networks")," and the content can be found in the public networks section:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure and manage:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/configuration-file"},"Use a configuration file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/configure-ha/"},"Configure high availability")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/use-pow/mining"},"Configure mining")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/use-besu-api/"},"Use the Besu API"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/use-besu-api/json-rpc"},"Use JSON-RPC over HTTP, WS, and IPC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/use-besu-api/rpc-pubsub"},"Use RPC Pub/Sub over WS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/use-besu-api/graphql"},"Use GraphQL over HTTP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/use-besu-api/authenticate"},"Authenticate JSON-RPC requests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/use-besu-api/access-logs"},"Access logs using JSON-RPC API")))),(0,a.kt)("li",{parentName:"ul"},"Find and connect to peers:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/connect/static-nodes"},"Configure static nodes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/connect/configure-ports"},"Configure ports")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/connect/manage-peers"},"Manage peers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/connect/specify-nat"},"Specify NAT method")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/configure-jvm/"},"Configure the Java Virtual Machine"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/configure-jvm/pass-jvm-options"},"Pass JVM options")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/configure-jvm/manage-memory"},"Manage JVM memory")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/configure-jvm/java-flight-recorder"},"Use Java Flight Recorder")))),(0,a.kt)("li",{parentName:"ul"},"Develop dapps:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/develop/truffle"},"Use Truffle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/develop/client-libraries"},"Use client libraries")))),(0,a.kt)("li",{parentName:"ul"},"Troubleshoot:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/troubleshoot/evm-tool"},"Use EVM tool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/how-to/troubleshoot/trace-transactions"},"Trace transactions"))))))}k.isMDXComponent=!0}}]);