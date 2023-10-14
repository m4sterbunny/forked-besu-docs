"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[80128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,b=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Events and logs",sidebar_position:6,description:"Learn about events and logs in Besu.",tags:["public networks","private networks"]},o="Events and logs",s={unversionedId:"public-networks/concepts/events-and-logs",id:"version-23.7.3/public-networks/concepts/events-and-logs",title:"Events and logs",description:"Learn about events and logs in Besu.",source:"@site/versioned_docs/version-23.7.3/public-networks/concepts/events-and-logs.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/events-and-logs",permalink:"/23.7.3/public-networks/concepts/events-and-logs",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/public-networks/concepts/events-and-logs.md",tags:[{label:"public networks",permalink:"/23.7.3/tags/public-networks"},{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1697315539,formattedLastUpdatedAt:"Oct 14, 2023",sidebarPosition:6,frontMatter:{title:"Events and logs",sidebar_position:6,description:"Learn about events and logs in Besu.",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Network ID and chain ID",permalink:"/23.7.3/public-networks/concepts/network-and-chain-id"},next:{title:"Genesis file",permalink:"/23.7.3/public-networks/concepts/genesis-file"}},c={},l=[{value:"Topics",id:"topics",level:2},{value:"Event parameters",id:"event-parameters",level:2},{value:"Event signature hash",id:"event-signature-hash",level:2},{value:"Topic filters",id:"topic-filters",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events-and-logs"},"Events and logs"),(0,r.kt)("p",null,"Transaction mining causes smart contracts to emit events and write logs to the blockchain."),(0,r.kt)("p",null,"The smart contract address is the link to the logs and the blockchain includes the logs, but contracts cannot access logs. Log storage is cheaper than contract storage (that is, it costs less gas) so storing and accessing the required data in logs reduces the cost. For example, use logs to display all transfers made using a specific contract, but not the current state of the contract."),(0,r.kt)("p",null,"A Dapp front end can either access logs using the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/how-to/use-besu-api/access-logs"},"JSON-RPC API filter methods")," or subscribe to logs using the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/how-to/use-besu-api/rpc-pubsub#logs"},"RPC Pub/Sub API"),"."),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/api/#admin_generatelogbloomcache"},(0,r.kt)("inlineCode",{parentName:"a"},"admin_generateLogBloomCache"))," to improve log retrieval performance."),(0,r.kt)("h2",{id:"topics"},"Topics"),(0,r.kt)("p",null,"Log entries contain up to four topics. The first topic is the ",(0,r.kt)("a",{parentName:"p",href:"#event-signature-hash"},"event signature hash")," and up to three topics are the indexed ",(0,r.kt)("a",{parentName:"p",href:"#event-parameters"},"event parameters"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="A log entry for an event with one indexed parameter"',title:'"A',log:!0,entry:!0,for:!0,an:!0,event:!0,with:!0,one:!0,indexed:!0,'parameter"':!0},'{\n  "logIndex": "0x0",\n  "removed": false,\n  "blockNumber": "0x84",\n  "blockHash": "0x5fc573d76ec48ec80cbc43f299ebc306a8168112e3a4485c23e84e9a40f5d336",\n  "transactionHash": "0xcb52f02342c2498df82c49ac26b2e91e182155c8b2a2add5b6dc4c249511f85a",\n  "transactionIndex": "0x0",\n  "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",\n  "data": "0x",\n  "topics": [\n    "0x04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce3",\n    "0x0000000000000000000000000000000000000000000000000000000000000001"\n  ]\n}\n')),(0,r.kt)("h2",{id:"event-parameters"},"Event parameters"),(0,r.kt)("p",null,"Up to three event parameters can have the ",(0,r.kt)("inlineCode",{parentName:"p"},"indexed")," attribute. Logs store these indexed parameters as ",(0,r.kt)("inlineCode",{parentName:"p"},"topics"),". Indexed parameters are searchable and filterable."),(0,r.kt)("p",null,"Topics are 32 bytes. If an indexed argument is an array (including ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"byte")," datatypes), the log stores the keccak-256 hash of the parameter as a topic."),(0,r.kt)("p",null,"Log ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," includes non-indexed parameters but is difficult to search or filter."),(0,r.kt)("p",null,"A Solidity contract storing one indexed and one non-indexed parameter and has an event emitting the value of each parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity ^0.5.1;\ncontract Storage {\n  uint256 public valueIndexed;\n  uint256 public valueNotIndexed;\n\n  event Event1(uint256 indexed valueIndexed, uint256 valueNotIndexed);\n\n  function setValue(uint256 _valueIndexed, uint256 _valueNotIndexed) public {\n    valueIndexed = _valueIndexed;\n    valueNotIndexed = _valueNotIndexed;\n    emit Event1(_valueIndexed, _valueNotIndexed);\n  }\n}\n")),(0,r.kt)("p",null,"A log entry created by invoking the contract in the previous example with ",(0,r.kt)("inlineCode",{parentName:"p"},"valueIndexed")," set to 5 and ",(0,r.kt)("inlineCode",{parentName:"p"},"valueNotIndexed")," set to 7:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "logIndex": "0x0",\n  "removed": false,\n  "blockNumber": "0x4d6",\n  "blockHash": "0x7d0ac7c12ac9f622d346d444c7e0fa4dda8d4ed90de80d6a28814613a4884a67",\n  "transactionHash": "0xe994022ada94371ace00c4e1e20663a01437846ced02f18b3f3afec827002781",\n  "transactionIndex": "0x0",\n  "address": "0x43d1f9096674b5722d359b6402381816d5b22f28",\n  "data": "0x0000000000000000000000000000000000000000000000000000000000000007",\n  "topics": [\n    "0xd3610b1c54575b7f4f0dc03d210b8ac55624ae007679b7a928a4f25a709331a8",\n    "0x0000000000000000000000000000000000000000000000000000000000000005"\n  ]\n}\n')),(0,r.kt)("h2",{id:"event-signature-hash"},"Event signature hash"),(0,r.kt)("p",null,"The first topic in a log entry is always the event signature hash. The event signature hash is a keccak-256 hash of the event name and input argument types, with argument names ignored. For example, the event ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello(uint256 worldId)")," has the signature hash ",(0,r.kt)("inlineCode",{parentName:"p"},"keccak('Hello(uint256)')"),". The signature identifies to which event log topics belong."),(0,r.kt)("p",null,"A Solidity contract with two different events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity ^0.5.1;\ncontract Storage {\n  uint256 public valueA;\n  uint256 public valueB;\n\n  event Event1(uint256 indexed valueA);\n  event Event2(uint256 indexed valueB);\n\n  function setValue(uint256 _valueA) public {\n    valueA = _valueA;\n    emit Event1(_valueA);\n  }\n\n  function setValueAgain(uint256 _valueB) public {\n    valueB = _valueB;\n    emit Event2(_valueB);\n  }\n}\n")),(0,r.kt)("p",null,"The event signature hash for event 1 is ",(0,r.kt)("inlineCode",{parentName:"p"},"keccak('Event1(uint256)')")," and the event signature hash for event 2 is ",(0,r.kt)("inlineCode",{parentName:"p"},"keccak('Event2(uint256)')"),". The hashes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce3")," for event 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"06df6fb2d6d0b17a870decb858cc46bf7b69142ab7b9318f7603ed3fd4ad240e")," for event 2.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use a library keccak (sha3) hash function, such as provided in ",(0,r.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.2.11/web3-utils.html?highlight=sha3#sha3"},"Web3.js"),", or an online tool, such as ",(0,r.kt)("a",{parentName:"p",href:"https://emn178.github.io/online-tools/keccak_256.html"},"https://emn178.github.io/online-tools/keccak_256.html"),", to generate event signature hashes.")),(0,r.kt)("p",null,"Log entries from invoking the Solidity contract in the previous example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "logIndex": "0x0",\n    "removed": false,\n    "blockNumber": "0x84",\n    "blockHash": "0x5fc573d76ec48ec80cbc43f299ebc306a8168112e3a4485c23e84e9a40f5d336",\n    "transactionHash": "0xcb52f02342c2498df82c49ac26b2e91e182155c8b2a2add5b6dc4c249511f85a",\n    "transactionIndex": "0x0",\n    "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",\n    "data": "0x",\n    "topics": [\n      "0x04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce3",\n      "0x0000000000000000000000000000000000000000000000000000000000000001"\n    ]\n  },\n  {\n    "logIndex": "0x0",\n    "removed": false,\n    "blockNumber": "0x87",\n    "blockHash": "0x6643a1e58ad857f727552e4572b837a85b3ca64c4799d085170c707e4dad5255",\n    "transactionHash": "0xa95295fcea7df3b9e47ab95d2dadeb868145719ed9cc0e6c757c8a174e1fcb11",\n    "transactionIndex": "0x0",\n    "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",\n    "data": "0x",\n    "topics": [\n      "0x06df6fb2d6d0b17a870decb858cc46bf7b69142ab7b9318f7603ed3fd4ad240e",\n      "0x0000000000000000000000000000000000000000000000000000000000000002"\n    ]\n  }\n]\n')),(0,r.kt)("h2",{id:"topic-filters"},"Topic filters"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/api/objects#filter-options-object"},"Filter options objects")," have a ",(0,r.kt)("inlineCode",{parentName:"p"},"topics")," key to filter logs by topics."),(0,r.kt)("p",null,"Topics are order-dependent. A transaction with a log containing topics ",(0,r.kt)("inlineCode",{parentName:"p"},"[A, B]")," matches with the following topic filters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[]")," - Match any topic"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[A]")," - Match A in first position"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[[null], [B]]")," - Match any topic in first position AND B in second position"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[[A],[B]]")," - Match A in first position AND B in second position"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[[A, C], [B, D]]")," - Match (A OR C) in first position AND (B OR D) in second position.")),(0,r.kt)("p",null,"The following filter option object returns log entries for the ",(0,r.kt)("a",{parentName:"p",href:"#event-parameters"},"Event Parameters example contract")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"valueIndexed")," set to 5 or 9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fromBlock": "earliest",\n  "toBlock": "latest",\n  "address": "0x43d1f9096674b5722d359b6402381816d5b22f28",\n  "topics": [\n    ["0xd3610b1c54575b7f4f0dc03d210b8ac55624ae007679b7a928a4f25a709331a8"],\n    [\n      "0x0000000000000000000000000000000000000000000000000000000000000005",\n      "0x0000000000000000000000000000000000000000000000000000000000000009"\n    ]\n  ]\n}\n')))}p.isMDXComponent=!0}}]);