"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[28170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,b=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(87462),a=r(67294),o=r(86010),i=r(12466),s=r(16550),u=r(91980),l=r(67392),c=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=m(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,l]=b({queryString:r,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),w=(()=>{const e=u??p;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{w&&s(w)}),[w]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),h(e)}),[l,h,o]),tabValues:o}}var w=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:s,selectValue:u,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),n=l[r].value;n!==s&&(p(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},l.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(v,(0,n.Z)({},e,t)))}function k(e){const t=(0,w.Z)();return a.createElement(g,(0,n.Z)({key:String(t)},e))}},2600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(74866),i=r(85162);const s={title:"Use the web3js-quorum library",description:"web3js-quorum client library",sidebar_position:9,tags:["private networks"]},u="Use the web3js-quorum client library",l={unversionedId:"private-networks/how-to/use-privacy/web3js-quorum",id:"version-23.7.3/private-networks/how-to/use-privacy/web3js-quorum",title:"Use the web3js-quorum library",description:"web3js-quorum client library",source:"@site/versioned_docs/version-23.7.3/private-networks/how-to/use-privacy/web3js-quorum.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/web3js-quorum",permalink:"/23.7.3/private-networks/how-to/use-privacy/web3js-quorum",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/how-to/use-privacy/web3js-quorum.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1701375992,formattedLastUpdatedAt:"Nov 30, 2023",sidebarPosition:9,frontMatter:{title:"Use the web3js-quorum library",description:"web3js-quorum client library",sidebar_position:9,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Sign privacy marker transactions",permalink:"/23.7.3/private-networks/how-to/use-privacy/sign-pmts"},next:{title:"Performance best practices",permalink:"/23.7.3/private-networks/how-to/use-privacy/performance-best-practices"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add web3js-quorum to project",id:"add-web3js-quorum-to-project",level:2},{value:"Initialize the web3js-quorum client",id:"initialize-the-web3js-quorum-client",level:2},{value:"Deploy a contract with <code>generateAndSendRawTransaction</code>",id:"deploy-a-contract-with-generateandsendrawtransaction",level:2},{value:"web3js-quorum methods",id:"web3js-quorum-methods",level:2}],m={toc:p},d="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-the-web3js-quorum-client-library"},"Use the web3js-quorum client library"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/web3js-quorum"},"web3js-quorum")," is an Ethereum JavaScript library extending ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethereum/web3.js/"},"web3.js")," that adds support for Besu-specific JSON-RPC APIs and features. Use the library to create and send RLP-encoded transactions using JSON-RPC."),(0,a.kt)("admonition",{title:"important",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"web3js-quorum supports JSON-RPC over HTTP only.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"web3js-quorum includes all ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum.js"},"quorum.js")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/web3js-eea"},"web3js-eea")," features."),(0,a.kt)("p",{parentName:"admonition"},"If migrating to web3js-quorum, update your JavaScript code as indicated in the following examples."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://consensys.github.io/web3js-quorum/latest/tutorial-Migrate%20from%20web3js-eea.html"},"Read the migration guide for more information about updating your code."))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js (version > 10)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe/web3.js#installation"},"The web3 library must be installed in your project"))),(0,a.kt)("h2",{id:"add-web3js-quorum-to-project"},"Add web3js-quorum to project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install web3js-quorum\n")),(0,a.kt)("h2",{id:"initialize-the-web3js-quorum-client"},"Initialize the web3js-quorum client"),(0,a.kt)("p",null,"Initialize your client where:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<JSON-RPC HTTP endpoint>")," is the JSON-RPC HTTP endpoint of your Hyperledger Besu node. Specified by the ",(0,a.kt)("a",{parentName:"li",href:"/23.7.3/public-networks/reference/cli/options#rpc-http-host"},(0,a.kt)("inlineCode",{parentName:"a"},"--rpc-http-host"))," and ",(0,a.kt)("a",{parentName:"li",href:"/23.7.3/public-networks/reference/cli/options#rpc-http-port"},(0,a.kt)("inlineCode",{parentName:"a"},"--rpc-http-port"))," command line options.")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const { Web3 } = require("web3");\nconst Web3Quorum = require("web3js-quorum");\nconst web3 = new Web3Quorum(new Web3("<JSON-RPC HTTP endpoint>"));\n'))),(0,a.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const { Web3 } = require("web3");\nconst Web3Quorum = require("web3js-quorum");\nconst web3 = new Web3Quorum(new Web3("http://localhost:8545"));\n')))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When migrating from web3js-eea to web3js-quorum, use ",(0,a.kt)("inlineCode",{parentName:"p"},"Web3Quorum"),". The constructor doesn't require the chain ID anymore. Chain ID is automatically retrieved from the chain using the specified JSON-RPC HTTP endpoint.")),(0,a.kt)("h2",{id:"deploy-a-contract-with-generateandsendrawtransaction"},"Deploy a contract with ",(0,a.kt)("inlineCode",{parentName:"h2"},"generateAndSendRawTransaction")),(0,a.kt)("p",null,"To deploy a private contract, you need the contract binary. You can use ",(0,a.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/develop/using-the-compiler.html"},"Solidity")," to get the contract binary."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=\"Deploying a contract with 'web3.priv.generateAndSendRawTransaction'\"",title:'"Deploying',a:!0,contract:!0,with:!0,"'web3.priv.generateAndSendRawTransaction'\"":!0},'const contractOptions = {\n  data: `0x123`, // contract binary\n  privateFrom: "tesseraNode1PublicKey",\n  privateFor: ["tesseraNode3PublicKey"],\n  privateKey: "besuNode1PrivateKey",\n};\nreturn web3.priv.generateAndSendRawTransaction(contractOptions);\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"web3.priv.generateAndSendRawTransaction(contractOptions)")," returns the transaction hash. To get the private transaction receipt, use ",(0,a.kt)("inlineCode",{parentName:"p"},"web3.priv.waitForTransactionReceipt(txHash)"),"."),(0,a.kt)("h2",{id:"web3js-quorum-methods"},"web3js-quorum methods"),(0,a.kt)("p",null,"For more information about the web3js-quorum methods, see the ",(0,a.kt)("a",{parentName:"p",href:"https://consensys.github.io/web3js-quorum/latest/index.html"},"web3js-quorum reference documentation"),"."))}b.isMDXComponent=!0}}]);