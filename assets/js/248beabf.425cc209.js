"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[99969],{46080:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>r});var s=t(85893),a=t(11151);const c={title:"Events and logs",sidebar_position:6,description:"Learn about events and logs in Besu.",tags:["public networks","private networks"]},i="Events and logs",o={id:"public-networks/concepts/events-and-logs",title:"Events and logs",description:"Learn about events and logs in Besu.",source:"@site/docs/public-networks/concepts/events-and-logs.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/events-and-logs",permalink:"/development/public-networks/concepts/events-and-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/concepts/events-and-logs.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"},{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1711233712,formattedLastUpdatedAt:"Mar 23, 2024",sidebarPosition:6,frontMatter:{title:"Events and logs",sidebar_position:6,description:"Learn about events and logs in Besu.",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Network ID and chain ID",permalink:"/development/public-networks/concepts/network-and-chain-id"},next:{title:"Genesis file",permalink:"/development/public-networks/concepts/genesis-file"}},d={},r=[{value:"Topics",id:"topics",level:2},{value:"Event parameters",id:"event-parameters",level:2},{value:"Event signature hash",id:"event-signature-hash",level:2},{value:"Topic filters",id:"topic-filters",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"events-and-logs",children:"Events and logs"}),"\n",(0,s.jsx)(n.p,{children:"Transaction mining causes smart contracts to emit events and write logs to the blockchain."}),"\n",(0,s.jsx)(n.p,{children:"The smart contract address is the link to the logs and the blockchain includes the logs, but contracts cannot access logs. Log storage is cheaper than contract storage (that is, it costs less gas) so storing and accessing the required data in logs reduces the cost. For example, use logs to display all transfers made using a specific contract, but not the current state of the contract."}),"\n",(0,s.jsxs)(n.p,{children:["A Dapp front end can either access logs using the ",(0,s.jsx)(n.a,{href:"/development/public-networks/how-to/use-besu-api/access-logs",children:"JSON-RPC API filter methods"})," or subscribe to logs using the ",(0,s.jsx)(n.a,{href:"/development/public-networks/how-to/use-besu-api/rpc-pubsub#logs",children:"RPC Pub/Sub API"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"/development/public-networks/reference/api/#admin_generatelogbloomcache",children:(0,s.jsx)(n.code,{children:"admin_generateLogBloomCache"})})," to improve log retrieval performance."]}),"\n",(0,s.jsx)(n.h2,{id:"topics",children:"Topics"}),"\n",(0,s.jsxs)(n.p,{children:["Log entries contain up to four topics. The first topic is the ",(0,s.jsx)(n.a,{href:"#event-signature-hash",children:"event signature hash"})," and up to three topics are the indexed ",(0,s.jsx)(n.a,{href:"#event-parameters",children:"event parameters"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="A log entry for an event with one indexed parameter"',children:'{\n  "logIndex": "0x0",\n  "removed": false,\n  "blockNumber": "0x84",\n  "blockHash": "0x5fc573d76ec48ec80cbc43f299ebc306a8168112e3a4485c23e84e9a40f5d336",\n  "transactionHash": "0xcb52f02342c2498df82c49ac26b2e91e182155c8b2a2add5b6dc4c249511f85a",\n  "transactionIndex": "0x0",\n  "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",\n  "data": "0x",\n  "topics": [\n    "0x04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce3",\n    "0x0000000000000000000000000000000000000000000000000000000000000001"\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"event-parameters",children:"Event parameters"}),"\n",(0,s.jsxs)(n.p,{children:["Up to three event parameters can have the ",(0,s.jsx)(n.code,{children:"indexed"})," attribute. Logs store these indexed parameters as ",(0,s.jsx)(n.code,{children:"topics"}),". Indexed parameters are searchable and filterable."]}),"\n",(0,s.jsxs)(n.p,{children:["Topics are 32 bytes. If an indexed argument is an array (including ",(0,s.jsx)(n.code,{children:"string"})," and ",(0,s.jsx)(n.code,{children:"byte"})," datatypes), the log stores the keccak-256 hash of the parameter as a topic."]}),"\n",(0,s.jsxs)(n.p,{children:["Log ",(0,s.jsx)(n.code,{children:"data"})," includes non-indexed parameters but is difficult to search or filter."]}),"\n",(0,s.jsx)(n.p,{children:"A Solidity contract storing one indexed and one non-indexed parameter and has an event emitting the value of each parameter:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"pragma solidity ^0.5.1;\ncontract Storage {\n  uint256 public valueIndexed;\n  uint256 public valueNotIndexed;\n\n  event Event1(uint256 indexed valueIndexed, uint256 valueNotIndexed);\n\n  function setValue(uint256 _valueIndexed, uint256 _valueNotIndexed) public {\n    valueIndexed = _valueIndexed;\n    valueNotIndexed = _valueNotIndexed;\n    emit Event1(_valueIndexed, _valueNotIndexed);\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["A log entry created by invoking the contract in the previous example with ",(0,s.jsx)(n.code,{children:"valueIndexed"})," set to 5 and ",(0,s.jsx)(n.code,{children:"valueNotIndexed"})," set to 7:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "logIndex": "0x0",\n  "removed": false,\n  "blockNumber": "0x4d6",\n  "blockHash": "0x7d0ac7c12ac9f622d346d444c7e0fa4dda8d4ed90de80d6a28814613a4884a67",\n  "transactionHash": "0xe994022ada94371ace00c4e1e20663a01437846ced02f18b3f3afec827002781",\n  "transactionIndex": "0x0",\n  "address": "0x43d1f9096674b5722d359b6402381816d5b22f28",\n  "data": "0x0000000000000000000000000000000000000000000000000000000000000007",\n  "topics": [\n    "0xd3610b1c54575b7f4f0dc03d210b8ac55624ae007679b7a928a4f25a709331a8",\n    "0x0000000000000000000000000000000000000000000000000000000000000005"\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"event-signature-hash",children:"Event signature hash"}),"\n",(0,s.jsxs)(n.p,{children:["The first topic in a log entry is always the event signature hash. The event signature hash is a keccak-256 hash of the event name and input argument types, with argument names ignored. For example, the event ",(0,s.jsx)(n.code,{children:"Hello(uint256 worldId)"})," has the signature hash ",(0,s.jsx)(n.code,{children:"keccak('Hello(uint256)')"}),". The signature identifies to which event log topics belong."]}),"\n",(0,s.jsx)(n.p,{children:"A Solidity contract with two different events:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-solidity",children:"pragma solidity ^0.5.1;\ncontract Storage {\n  uint256 public valueA;\n  uint256 public valueB;\n\n  event Event1(uint256 indexed valueA);\n  event Event2(uint256 indexed valueB);\n\n  function setValue(uint256 _valueA) public {\n    valueA = _valueA;\n    emit Event1(_valueA);\n  }\n\n  function setValueAgain(uint256 _valueB) public {\n    valueB = _valueB;\n    emit Event2(_valueB);\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The event signature hash for event 1 is ",(0,s.jsx)(n.code,{children:"keccak('Event1(uint256)')"})," and the event signature hash for event 2 is ",(0,s.jsx)(n.code,{children:"keccak('Event2(uint256)')"}),". The hashes are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce3"})," for event 1"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"06df6fb2d6d0b17a870decb858cc46bf7b69142ab7b9318f7603ed3fd4ad240e"})," for event 2."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can use a library keccak (sha3) hash function, such as provided in ",(0,s.jsx)(n.a,{href:"https://web3js.readthedocs.io/en/v1.2.11/web3-utils.html?highlight=sha3#sha3",children:"Web3.js"}),", or an online tool, such as ",(0,s.jsx)(n.a,{href:"https://emn178.github.io/online-tools/keccak_256.html",children:"https://emn178.github.io/online-tools/keccak_256.html"}),", to generate event signature hashes."]})}),"\n",(0,s.jsx)(n.p,{children:"Log entries from invoking the Solidity contract in the previous example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "logIndex": "0x0",\n    "removed": false,\n    "blockNumber": "0x84",\n    "blockHash": "0x5fc573d76ec48ec80cbc43f299ebc306a8168112e3a4485c23e84e9a40f5d336",\n    "transactionHash": "0xcb52f02342c2498df82c49ac26b2e91e182155c8b2a2add5b6dc4c249511f85a",\n    "transactionIndex": "0x0",\n    "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",\n    "data": "0x",\n    "topics": [\n      "0x04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce3",\n      "0x0000000000000000000000000000000000000000000000000000000000000001"\n    ]\n  },\n  {\n    "logIndex": "0x0",\n    "removed": false,\n    "blockNumber": "0x87",\n    "blockHash": "0x6643a1e58ad857f727552e4572b837a85b3ca64c4799d085170c707e4dad5255",\n    "transactionHash": "0xa95295fcea7df3b9e47ab95d2dadeb868145719ed9cc0e6c757c8a174e1fcb11",\n    "transactionIndex": "0x0",\n    "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",\n    "data": "0x",\n    "topics": [\n      "0x06df6fb2d6d0b17a870decb858cc46bf7b69142ab7b9318f7603ed3fd4ad240e",\n      "0x0000000000000000000000000000000000000000000000000000000000000002"\n    ]\n  }\n]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"topic-filters",children:"Topic filters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/development/public-networks/reference/api/objects#filter-options-object",children:"Filter options objects"})," have a ",(0,s.jsx)(n.code,{children:"topics"})," key to filter logs by topics."]}),"\n",(0,s.jsxs)(n.p,{children:["Topics are order-dependent. A transaction with a log containing topics ",(0,s.jsx)(n.code,{children:"[A, B]"})," matches with the following topic filters:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[]"})," - Match any topic"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[A]"})," - Match A in first position"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[[null], [B]]"})," - Match any topic in first position AND B in second position"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[[A],[B]]"})," - Match A in first position AND B in second position"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[[A, C], [B, D]]"})," - Match (A OR C) in first position AND (B OR D) in second position."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The following filter option object returns log entries for the ",(0,s.jsx)(n.a,{href:"#event-parameters",children:"Event Parameters example contract"})," with ",(0,s.jsx)(n.code,{children:"valueIndexed"})," set to 5 or 9:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "fromBlock": "earliest",\n  "toBlock": "latest",\n  "address": "0x43d1f9096674b5722d359b6402381816d5b22f28",\n  "topics": [\n    ["0xd3610b1c54575b7f4f0dc03d210b8ac55624ae007679b7a928a4f25a709331a8"],\n    [\n      "0x0000000000000000000000000000000000000000000000000000000000000005",\n      "0x0000000000000000000000000000000000000000000000000000000000000009"\n    ]\n  ]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var s=t(67294);const a={},c=s.createContext(a);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);