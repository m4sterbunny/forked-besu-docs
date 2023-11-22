"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[99497],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49310:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Include revert reason",description:"Including revert reason in transactions with Hyperledger Besu",sidebar_position:3,tags:["private networks"]},s="Revert reason",i={unversionedId:"private-networks/how-to/send-transactions/revert-reason",id:"version-23.10.2/private-networks/how-to/send-transactions/revert-reason",title:"Include revert reason",description:"Including revert reason in transactions with Hyperledger Besu",source:"@site/versioned_docs/version-23.10.2/private-networks/how-to/send-transactions/revert-reason.md",sourceDirName:"private-networks/how-to/send-transactions",slug:"/private-networks/how-to/send-transactions/revert-reason",permalink:"/private-networks/how-to/send-transactions/revert-reason",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/private-networks/how-to/send-transactions/revert-reason.md",tags:[{label:"private networks",permalink:"/tags/private-networks"}],version:"23.10.2",lastUpdatedAt:1700682270,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:3,frontMatter:{title:"Include revert reason",description:"Including revert reason in transactions with Hyperledger Besu",sidebar_position:3,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Send concurrent private transactions",permalink:"/private-networks/how-to/send-transactions/concurrent-private-transactions"},next:{title:"Monitoring",permalink:"/private-networks/how-to/monitor/"}},c={},l=[{value:"Enable revert reason",id:"enable-revert-reason",level:2},{value:"Where the revert reason is included",id:"where-the-revert-reason-is-included",level:2},{value:"Revert reason format",id:"revert-reason-format",level:2},{value:"Dapp support",id:"dapp-support",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"revert-reason"},"Revert reason"),(0,a.kt)("p",null,"In smart contracts, the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.12/control-structures.html#revert"},(0,a.kt)("inlineCode",{parentName:"a"},"revert"))," operation triggers an exception to flag an error and revert the current call. The EVM passes back to the client an optional string message containing information about the error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},'pragma solidity ^0.8.4;\n\ncontract VendingMachine {\n    address owner;\n    constructor() {\n        owner = msg.sender;\n    }\n    error Unauthorized();\n    function buy(uint amount) public payable {\n        if (amount > msg.value / 2 ether)\n            revert("Not enough Ether provided.");\n        // Alternative way to do it:\n        require(\n            amount <= msg.value / 2 ether,\n            "Not enough Ether provided."\n        );\n        // Perform the purchase.\n    }\n    function withdraw() public {\n        if (msg.sender != owner)\n            revert Unauthorized();\n\n        payable(msg.sender).transfer(address(this).balance);\n    }\n}\n')),(0,a.kt)("h2",{id:"enable-revert-reason"},"Enable revert reason"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#revert-reason-enabled"},(0,a.kt)("inlineCode",{parentName:"a"},"--revert-reason-enabled"))," command line option to include the revert reason in the transaction receipt and the ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/trace-types#trace"},(0,a.kt)("inlineCode",{parentName:"a"},"trace"))," response in Hyperledger Besu."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Enabling revert reason may use a significant amount of memory. We do not recommend enabling revert reason when connected to public Ethereum networks.")),(0,a.kt)("h2",{id:"where-the-revert-reason-is-included"},"Where the revert reason is included"),(0,a.kt)("p",null,"With revert reason enabled, the transaction receipt returned by ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#eth_gettransactionreceipt"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_getTransactionReceipt"))," includes the revert reason as an ABI-encoded string."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The revert reason is not included in the transaction receipt's root hash. Not including the revert reason in the transactions receipt's root hash means the revert reason is only available to nodes that execute the transaction when importing the block. That is, the revert reason is not available if using fast synchronization (",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#sync-mode"},(0,a.kt)("inlineCode",{parentName:"a"},"--sync-mode=FAST")),").")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example of transaction receipt"',title:'"Example',of:!0,transaction:!0,'receipt"':!0},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "blockHash": "0xe7212a92cfb9b06addc80dec2a0dfae9ea94fd344efeb157c41e12994fcad60a",\n    "blockNumber": "0x50",\n    "contractAddress": null,\n    "cumulativeGasUsed": "0x5208",\n    "from": "0x627306090abab3a6e1400e9345bc60c78a8bef57",\n    "gasUsed": "0x5208",\n    "logs": [],\n    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n    "status": "0x1",\n    "to": "0xf17f52151ebef6c7334fad080c5704d77216b732",\n    "transactionHash": "0xc00e97af59c6f88de163306935f7682af1a34c67245e414537d02e422815efc3",\n    "transactionIndex": "0x0",\n    "revertReason": "0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001a4e6f7420656e6f7567682045746865722070726f76696465642e000000000000"\n  }\n}\n')),(0,a.kt)("p",null,"With revert reason enabled, the list items in the ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/trace-types#trace"},(0,a.kt)("inlineCode",{parentName:"a"},"trace"))," response returned by ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#trace_replayblocktransactions"},(0,a.kt)("inlineCode",{parentName:"a"},"trace_replayBlockTransactions")),", ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#trace_block"},(0,a.kt)("inlineCode",{parentName:"a"},"trace_block")),", and ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#trace_transaction"},(0,a.kt)("inlineCode",{parentName:"a"},"trace_transaction"))," include the revert reason as an ABI-encoded string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example of trace response list item"',title:'"Example',of:!0,trace:!0,response:!0,list:!0,'item"':!0},'{\n  "jsonrpc": "2.0",\n  "id": 415,\n  "result": [\n    {\n      "action": {\n        "callType": "call",\n        "from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",\n        "gas": "0xffadea",\n        "input": "0x",\n        "to": "0x0110000000000000000000000000000000000000",\n        "value": "0x0"\n      },\n      "blockHash": "0x220bc13dc4f1ed38dcca927a5be15eca16497d279f4c40d7b8fe9704eadf1464",\n      "blockNumber": 18,\n      "error": "Reverted",\n      "revertReason": "0x7d88c1856cc95352",\n      "subtraces": 0,\n      "traceAddress": [],\n      "transactionHash": "0xc388baa0e55e6b73e850b22dc7e9853700f6b995fd55d95dd6ccd5a13d63c566",\n      "transactionPosition": 1,\n      "type": "call"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"By default, the error returned by ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#eth_estimategas"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_estimateGas"))," and ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#eth_call"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_call"))," includes the revert reason as an ABI-encoded string in the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," field."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example of eth_estimateGas and eth_call error"',title:'"Example',of:!0,eth_estimateGas:!0,and:!0,eth_call:!0,'error"':!0},'{\n  "jsonrpc": "2.0",\n  "id": 3,\n  "error": {\n    "code": -32000,\n    "message": "Execution reverted: ERC20: transfer amount exceeds balance",\n    "data": "0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001a4e6f7420656e6f7567682045746865722070726f76696465642e000000000000"\n  }\n}\n')),(0,a.kt)("h2",{id:"revert-reason-format"},"Revert reason format"),(0,a.kt)("p",null,"As described in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.12/control-structures.html#revert"},"Solidity documentation"),", the revert reason is an ABI-encoded string consisting of:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"0x08c379a0                                                         // Function selector for Error(string)\n0x0000000000000000000000000000000000000000000000000000000000000020 // Data offset\n0x000000000000000000000000000000000000000000000000000000000000001a // String length\n0x4e6f7420656e6f7567682045746865722070726f76696465642e000000000000 // String data\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\"Example of revert reason string for 'Not enough Ether provided' \"",title:'"Example',of:!0,revert:!0,reason:!0,string:!0,for:!0,"'Not":!0,enough:!0,Ether:!0,"provided'":!0,'"':!0},'"0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001a4e6f7420656e6f7567682045746865722070726f76696465642e000000000000"\n')),(0,a.kt)("h2",{id:"dapp-support"},"Dapp support"),(0,a.kt)("p",null,"Client libraries, such as web3j, do not support extracting the revert reason from the transaction receipt. To extract the revert reason your dapp must interact directly with Besu using a custom JSON -> Object converter."))}u.isMDXComponent=!0}}]);