"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[76113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),l=a,m=u["".concat(c,".").concat(l)]||u[l]||v[l]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},83300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Send concurrent private transactions",description:"Creating and sending concurrent private transactions with Hyperledger Besu",sidebar_position:2,tags:["private networks"]},o="Send concurrent private transactions",s={unversionedId:"private-networks/how-to/send-transactions/concurrent-private-transactions",id:"version-23.10.1/private-networks/how-to/send-transactions/concurrent-private-transactions",title:"Send concurrent private transactions",description:"Creating and sending concurrent private transactions with Hyperledger Besu",source:"@site/versioned_docs/version-23.10.1/private-networks/how-to/send-transactions/concurrent-private-transactions.md",sourceDirName:"private-networks/how-to/send-transactions",slug:"/private-networks/how-to/send-transactions/concurrent-private-transactions",permalink:"/23.10.1/private-networks/how-to/send-transactions/concurrent-private-transactions",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.1/private-networks/how-to/send-transactions/concurrent-private-transactions.md",tags:[{label:"private networks",permalink:"/23.10.1/tags/private-networks"}],version:"23.10.1",lastUpdatedAt:1701375992,formattedLastUpdatedAt:"Nov 30, 2023",sidebarPosition:2,frontMatter:{title:"Send concurrent private transactions",description:"Creating and sending concurrent private transactions with Hyperledger Besu",sidebar_position:2,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create and send private transactions",permalink:"/23.10.1/private-networks/how-to/send-transactions/private-transactions"},next:{title:"Include revert reason",permalink:"/23.10.1/private-networks/how-to/send-transactions/revert-reason"}},c={},p=[],d={toc:p},u="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-concurrent-private-transactions"},"Send concurrent private transactions"),(0,a.kt)("p",null,"Private transaction processing involves two transactions, the private transaction and the ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/concepts/privacy/private-transactions/processing"},"privacy marker transaction (PMT)"),". The private transaction and the PMT each have their own ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/concepts/privacy/private-transactions/#nonces"},"nonce"),"."),(0,a.kt)("p",null,"If your private transaction rate requires sending private transactions without waiting for the previous private transaction to be mined, using ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/api/#eth_gettransactioncount"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_getTransactionCount"))," and ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/reference/api/#eea_sendrawtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction"))," may result in ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/concepts/privacy/private-transactions/#private-nonce-management"},"incorrect nonces"),"."),(0,a.kt)("p",null,"In this case, use ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/how-to/send-transactions/private-transactions#priv_distributerawtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"priv_distributeRawTransaction"))," instead of ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/reference/api/#eea_sendrawtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction")),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can use ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/reference/api/#priv_gettransactioncount"},(0,a.kt)("inlineCode",{parentName:"a"},"priv_getTransactionCount"))," or ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/reference/api/#priv_geteeatransactioncount"},(0,a.kt)("inlineCode",{parentName:"a"},"priv_getEeaTransactionCount"))," to get the nonce for an account for the specified privacy group or participants.")),(0,a.kt)("p",null,"Send the corresponding PMT using ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/api/#eth_sendrawtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_sendRawTransaction")),", specifying the public PMT nonce. This method allows you to create and send the PMT yourself rather than ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/reference/api/#eea_sendrawtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction"))," handling the PMT."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"priv_distributeRawTransaction")," to distribute transactions with consecutive nonces for the same account, the corresponding PMTs must use one account with the nonces in the same order as the private transactions."),(0,a.kt)("p",{parentName:"admonition"},"This is to ensure that the private transactions are executed in the correct order.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/web3js-quorum/tree/master/example/concurrentPrivateTransactions"},"web3js-quorum library")," includes an example of how to send concurrent private transactions. The example uses ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/concepts/privacy/privacy-groups"},"offchain privacy groups"),". Use ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/reference/api/#priv_getprivacyprecompileaddress"},(0,a.kt)("inlineCode",{parentName:"a"},"priv_getPrivacyPrecompileAddress"))," to get the precompile address to specify in the ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," field when creating the PMT.")))}v.isMDXComponent=!0}}]);