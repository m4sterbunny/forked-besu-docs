"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[72043],{27901:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=a(85893),r=a(11151);const i={title:"Create and send private transactions",description:"Creating and sending private transactions with Hyperledger Besu",sidebar_position:1,tags:["private networks"]},s="Create and send private transactions",c={id:"private-networks/how-to/send-transactions/private-transactions",title:"Create and send private transactions",description:"Creating and sending private transactions with Hyperledger Besu",source:"@site/versioned_docs/version-23.10.3/private-networks/how-to/send-transactions/private-transactions.md",sourceDirName:"private-networks/how-to/send-transactions",slug:"/private-networks/how-to/send-transactions/private-transactions",permalink:"/23.10.3/private-networks/how-to/send-transactions/private-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.3/private-networks/how-to/send-transactions/private-transactions.md",tags:[{label:"private networks",permalink:"/23.10.3/tags/private-networks"}],version:"23.10.3",lastUpdatedAt:1710455521,formattedLastUpdatedAt:"Mar 14, 2024",sidebarPosition:1,frontMatter:{title:"Create and send private transactions",description:"Creating and sending private transactions with Hyperledger Besu",sidebar_position:1,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create and send transactions",permalink:"/23.10.3/private-networks/how-to/send-transactions/"},next:{title:"Send concurrent private transactions",permalink:"/23.10.3/private-networks/how-to/send-transactions/concurrent-private-transactions"}},d={},o=[{value:"eea_sendRawTransaction",id:"eea_sendrawtransaction",level:2},{value:"priv_distributeRawTransaction",id:"priv_distributerawtransaction",level:2},{value:"EEA-compliant or Besu-extended privacy",id:"eea-compliant-or-besu-extended-privacy",level:2},{value:"Unsigned and unencoded private transactions",id:"unsigned-and-unencoded-private-transactions",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-and-send-private-transactions",children:"Create and send private transactions"}),"\n",(0,t.jsxs)(n.p,{children:["Create and send ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/",children:"private transactions"})," using:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/how-to/use-privacy/web3js-quorum",children:"web3js-quorum client library"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/web3j/web3j",children:"web3j client library"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#eea_sendrawtransaction",children:(0,t.jsx)(n.code,{children:"eea_sendRawTransaction"})})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#priv_distributerawtransaction",children:(0,t.jsx)(n.code,{children:"priv_distributeRawTransaction"})}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All private transaction participants must be online for a private transaction to be successfully distributed. If any participants are offline when submitting the private transaction, the transaction is not attempted and you must resubmit the transaction."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"gas"})," and ",(0,t.jsx)(n.code,{children:"gasPrice"})," specified when sending a private transaction are used by the ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/private-transactions/processing",children:"privacy marker transaction (PMT)"}),", not the private transaction itself."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Private transactions either deploy contracts or call contract functions. Ether transfer transactions cannot be private."})}),"\n",(0,t.jsx)(n.h2,{id:"eea_sendrawtransaction",children:"eea_sendRawTransaction"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#eea_sendrawtransaction",children:(0,t.jsx)(n.code,{children:"eea_sendRawTransaction"})})," distributes the private transaction to the participating nodes, and signs and submits the PMT, as described in ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/private-transactions/processing",children:"Private transaction processing"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/how-to/send-transactions/concurrent-private-transactions",children:"sending concurrent transactions"}),", you must use ",(0,t.jsx)(n.a,{href:"#priv_distributerawtransaction",children:(0,t.jsx)(n.code,{children:"priv_distributeRawTransaction"})})," instead of ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#eea_sendrawtransaction",children:(0,t.jsx)(n.code,{children:"eea_sendRawTransaction"})}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"priv_distributerawtransaction",children:"priv_distributeRawTransaction"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#priv_distributerawtransaction",children:(0,t.jsx)(n.code,{children:"priv_distributeRawTransaction"})})," instead of ",(0,t.jsx)(n.a,{href:"#eea_sendrawtransaction",children:(0,t.jsx)(n.code,{children:"eea_sendRawTransaction"})})," when sending ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/how-to/send-transactions/concurrent-private-transactions",children:"concurrent private transactions"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#priv_distributerawtransaction",children:(0,t.jsx)(n.code,{children:"priv_distributeRawTransaction"})})," distributes the private transaction to the participating nodes but does not sign and submit the PMT. That is, it performs steps 1 to 5 of ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/private-transactions/processing",children:"private transaction processing"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If using ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#priv_distributerawtransaction",children:(0,t.jsx)(n.code,{children:"priv_distributeRawTransaction"})})," instead of ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#eea_sendrawtransaction",children:(0,t.jsx)(n.code,{children:"eea_sendRawTransaction"})}),", use the value returned by ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#priv_distributerawtransaction",children:(0,t.jsx)(n.code,{children:"priv_distributeRawTransaction"})}),", which is the enclave key to the private transaction in ",(0,t.jsx)(n.a,{href:"https://docs.tessera.consensys.net/",children:"Tessera"}),", in the ",(0,t.jsx)(n.code,{children:"data"})," field of a call to ",(0,t.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_sendrawtransaction",children:(0,t.jsx)(n.code,{children:"eth_sendRawTransaction"})}),". Use the value returned by ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#priv_getprivacyprecompileaddress",children:(0,t.jsx)(n.code,{children:"priv_getPrivacyPrecompileAddress"})}),", which is the address of the ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/private-transactions/processing",children:"privacy precompiled contract"}),", in the ",(0,t.jsx)(n.code,{children:"to"})," field of the call."]}),"\n",(0,t.jsxs)(n.p,{children:["By using the ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/how-to/send-transactions/",children:"public Ethereum transaction"}),", ",(0,t.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_sendrawtransaction",children:(0,t.jsx)(n.code,{children:"eth_sendRawTransaction"})}),", you are signing and submitting the PMT yourself instead of having it signed by the Besu node, giving you greater control over the PMT."]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"If the PMT is not sent after distributing the private transaction, the distributed private transaction is not executed and the private states are not updated."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Distribute private transaction using priv_distributeRawTransaction"',children:'{\n  "jsonrpc": "2.0",\n  "method": "priv_distributeRawTransaction",\n  "params": [\n    "0xf90198808203e8832dc6c08080b8fb608060405234801561001057600080fd5b5060dc8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633fa4f24514604e57806355241077146076575b600080fd5b348015605957600080fd5b50606060a0565b6040518082815260200191505060405180910390f35b348015608157600080fd5b50609e6004803603810190808035906020019092919050505060a6565b005b60005481565b80600081905550505600a165627a7a723058202bdbba2e694dba8fff33d9d0976df580f57bff0a40e25a46c398f8063b4c003600291ba05393543d483654fd01d9ee818cddfc7527dd6e13e6ef7b45a61e2ca13ffb6b70a0452338873862803ffe04056aea98cd0e3417ff971dcb384e54fce8ca1756a665a09de8260dc3763f8383a6a9ffe96909d36cd3ff4c346e3846a6467c50feaf0119e1a0839f41993789227ec721c9eaf1541683287fa436ef6edd9ec8fd088bad1a0c3c8a72657374726963746564"\n  ],\n  "id": 1\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Enclave key to the private transaction in Tessera returned by priv_distributeRawTransaction"',children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0xfd0d90ab824574abc19c0776ca0210e764561d0ef6d621f2bbbea316eccfe56b"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Send the enclave key in the ",(0,t.jsx)(n.code,{children:"data"})," field, and the ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#priv_getprivacyprecompileaddress",children:"privacy precompile address"})," in the ",(0,t.jsx)(n.code,{children:"to"})," field of ",(0,t.jsx)(n.code,{children:"eth_sendRawTransaction"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "eth_sendRawTransaction",\n  "params": [\n    {\n      "from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",\n      "to": "0x000000000000000000000000000000000000007e",\n      "data": "0xfd0d90ab824574abc19c0776ca0210e764561d0ef6d621f2bbbea316eccfe56b",\n      "gas": "0x2E1800",\n      "gasPrice": "0x9184e72a000"\n    }\n  ],\n  "id": 1\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"eea-compliant-or-besu-extended-privacy",children:"EEA-compliant or Besu-extended privacy"}),"\n",(0,t.jsxs)(n.p,{children:["To create an ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/privacy-groups#enterprise-ethereum-alliance-privacy",children:"EEA-compliant private transaction"}),", specify ",(0,t.jsx)(n.code,{children:"privateFor"})," when creating the signed transaction passed as an input parameter to ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#eea_sendrawtransaction",children:(0,t.jsx)(n.code,{children:"eea_sendRawTransaction"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To create a ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/privacy-groups#besu-extended-privacy",children:"Besu-extended private transaction"}),", specify a ",(0,t.jsx)(n.code,{children:"privacyGroupId"})," when creating the signed transaction passed as an input parameter to ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#eea_sendrawtransaction",children:(0,t.jsx)(n.code,{children:"eea_sendRawTransaction"})}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"unsigned-and-unencoded-private-transactions",children:"Unsigned and unencoded private transactions"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#eea_sendrawtransaction",children:(0,t.jsx)(n.code,{children:"eea_sendRawTransaction"})})," parameter is a signed RLP-encoded private transaction. Shown below are examples of unsigned and unencoded private transactions to create a contract."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Unencoded and unsigned EEA-compliant private transaction"',children:'{\n  "to": null,\n  "from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",\n  "gas": "0x7600",\n  "gasPrice": "0x0",\n  "data": "0x608060405234801561001057600080fd5b5060dc8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633fa4f24514604e57806355241077146076575b600080fd5b348015605957600080fd5b50606060a0565b6040518082815260200191505060405180910390f35b348015608157600080fd5b50609e6004803603810190808035906020019092919050505060a6565b005b60005481565b80600081905550505600a165627a7a723058202bdbba2e694dba8fff33d9d0976df580f57bff0a40e25a46c398f8063b4c00360029",\n  "nonce": "0x0",\n  "privateFrom": "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk=",\n  "privateFor": [\n    "g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw=",\n    "6fg8q5rWMBoAT2oIiU3tYJbk4b7oAr7dxaaVY7TeM3U="\n  ],\n  "restriction": "restricted"\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Unencoded and unsigned Besu-extended private transaction"',children:'{\n  "to": null,\n  "from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",\n  "gas": "0x7600",\n  "gasPrice": "0x0",\n  "data": "0x608060405234801561001057600080fd5b5060dc8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633fa4f24514604e57806355241077146076575b600080fd5b348015605957600080fd5b50606060a0565b6040518082815260200191505060405180910390f35b348015608157600080fd5b50609e6004803603810190808035906020019092919050505060a6565b005b60005481565b80600081905550505600a165627a7a723058202bdbba2e694dba8fff33d9d0976df580f57bff0a40e25a46c398f8063b4c00360029",\n  "nonce": "0x0",\n  "privateFrom": "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk=",\n  "privacyGroupId": "kAbelwaVW7okoEn1+okO+AbA4Hhz/7DaCOWVQz9nx5M=",\n  "restriction": "restricted"\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"example"})," directory in the ",(0,t.jsx)(n.a,{href:"/23.10.3/private-networks/how-to/use-privacy/web3js-quorum",children:"web3js-quorum client library"})," contains examples of signing and encoding private transactions."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>s});var t=a(67294);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);