"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[23548],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return t?i.createElement(h,a(a({ref:n},l),{},{components:t})):i.createElement(h,a({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},80962:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=t(87462),o=(t(67294),t(3905));const r={title:"Onchain permissioning",description:"Onchain permissioning",sidebar_position:1,tags:["private networks"]},a="Onchain permissioning",s={unversionedId:"private-networks/concepts/permissioning/onchain",id:"version-23.10.1/private-networks/concepts/permissioning/onchain",title:"Onchain permissioning",description:"Onchain permissioning",source:"@site/versioned_docs/version-23.10.1/private-networks/concepts/permissioning/onchain.md",sourceDirName:"private-networks/concepts/permissioning",slug:"/private-networks/concepts/permissioning/onchain",permalink:"/23.10.1/private-networks/concepts/permissioning/onchain",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.1/private-networks/concepts/permissioning/onchain.md",tags:[{label:"private networks",permalink:"/23.10.1/tags/private-networks"}],version:"23.10.1",lastUpdatedAt:1701300072,formattedLastUpdatedAt:"Nov 29, 2023",sidebarPosition:1,frontMatter:{title:"Onchain permissioning",description:"Onchain permissioning",sidebar_position:1,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Permissioning",permalink:"/23.10.1/private-networks/concepts/permissioning/"},next:{title:"Permissioning plugin",permalink:"/23.10.1/private-networks/concepts/permissioning/plugin"}},c={},p=[{value:"Permissioning contracts",id:"permissioning-contracts",level:2},{value:"Allowlists",id:"allowlists",level:3},{value:"Bootnodes",id:"bootnodes",level:2}],l={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"onchain-permissioning"},"Onchain permissioning"),(0,o.kt)("p",null,"Onchain ",(0,o.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/concepts/permissioning/"},"permissioning")," uses smart contracts to store and administer the node, account, and admin allowlists. Using onchain permissioning enables all nodes to read the allowlists from a single source, the blockchain."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"When using onchain account permissioning, a node checks permissions when importing blocks. Meaning, a node only imports blocks in which all transactions are from authorized senders. If you disable onchain account permissioning and your node accepts blocks without enforcing this rule, your node cannot re-synchronize with other nodes that enforce onchain account permissioning rules (your node goes into forked state).")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Custom smart contracts and dapps can be implemented to work with onchain permissioning.")),(0,o.kt)("h2",{id:"permissioning-contracts"},"Permissioning contracts"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The permissioning contract has multiple interfaces, and each interface maps to a specific version of the ",(0,o.kt)("a",{parentName:"p",href:"https://entethalliance.org/technical-specifications/"},"Enterprise Ethereum Alliance Client Specification"),". Ensure that you ",(0,o.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/how-to/use-permissioning/onchain#specify-the-permissioning-contract-interface-version"},"specify the permissioning contract interface")," being used when starting Besu.")),(0,o.kt)("h3",{id:"allowlists"},"Allowlists"),(0,o.kt)("p",null,"Permissioning implements three allowlists:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Accounts, which can submit transactions to the network."),(0,o.kt)("li",{parentName:"ul"},"Nodes, which can join the network."),(0,o.kt)("li",{parentName:"ul"},"Admins, which are accounts able to update the accounts and nodes allowlists.")),(0,o.kt)("admonition",{title:"Using account permissioning and privacy",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Account permissioning is incompatible with ",(0,o.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/how-to/use-privacy/sign-pmts"},"random key signing")," for ",(0,o.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/concepts/privacy/private-transactions/processing"},"privacy marker transactions"),"."),(0,o.kt)("p",{parentName:"admonition"},"If using account permissioning and privacy, a signing key must be specified using the ",(0,o.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file"},(0,o.kt)("inlineCode",{parentName:"a"},"--privacy-marker-transaction-signing-key-file"))," command line option and the corresponding public key included in the accounts allowlist.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If nodes are not connecting as expected, set the ",(0,o.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#logging"},"log level to ",(0,o.kt)("inlineCode",{parentName:"a"},"TRACE"))," and search for messages containing ",(0,o.kt)("inlineCode",{parentName:"p"},"Node permissioning")," to identify the issue."),(0,o.kt)("p",{parentName:"admonition"},"Ensure the ",(0,o.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#p2p-host"},(0,o.kt)("inlineCode",{parentName:"a"},"--p2p-host"))," command line option has been correctly configured for all nodes with the externally accessible address."),(0,o.kt)("p",{parentName:"admonition"},"If you change your network configuration, you may need to update the node allowlist.")),(0,o.kt)("h2",{id:"bootnodes"},"Bootnodes"),(0,o.kt)("p",null,"When a node joins the network, the node connects to the ",(0,o.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/how-to/configure/bootnodes"},"bootnodes")," until it synchronizes to the chain head, regardless of node permissions. After synchronization, the Account Rules and Node Rules smart contracts apply the permissioning rules."),(0,o.kt)("p",null,"If a synchronized node loses all peer connections (that is, it has zero peers), it reconnects to the bootnodes to rediscover peers."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"All bootnodes must be on the nodes allowlist.")))}d.isMDXComponent=!0}}]);