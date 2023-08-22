"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[73728],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),v=r,h=d["".concat(c,".").concat(v)]||d[v]||u[v]||i;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},48836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={description:"Private transaction overview"},o="Private transactions",s={unversionedId:"private-networks/concepts/privacy/private-transactions/index",id:"version-23.7.1/private-networks/concepts/privacy/private-transactions/index",title:"Private transactions",description:"Private transaction overview",source:"@site/versioned_docs/version-23.7.1/private-networks/concepts/privacy/private-transactions/index.md",sourceDirName:"private-networks/concepts/privacy/private-transactions",slug:"/private-networks/concepts/privacy/private-transactions/",permalink:"/private-networks/concepts/privacy/private-transactions/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/private-networks/concepts/privacy/private-transactions/index.md",tags:[],version:"23.7.1",lastUpdatedAt:1692685077,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{description:"Private transaction overview"},sidebar:"privateDocSidebar",previous:{title:"Privacy",permalink:"/private-networks/concepts/privacy/"},next:{title:"Private transaction processing",permalink:"/private-networks/concepts/privacy/private-transactions/processing"}},c={},p=[{value:"Besu and Tessera keys",id:"besu-and-tessera-keys",level:2},{value:"Nonces",id:"nonces",level:2},{value:"Private transaction nonce",id:"private-transaction-nonce",level:3},{value:"Private nonce validation",id:"private-nonce-validation",level:3},{value:"Private nonce management",id:"private-nonce-management",level:3}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"private-transactions"},"Private transactions"),(0,r.kt)("p",null,"Private transactions have the same parameters as public Ethereum transactions, with the following additions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"privateFrom")," - The Tessera public key of the transaction sender.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One of the following:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"privateFor")," - The Tessera public keys of the transaction recipients."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"privacyGroupId")," - ",(0,r.kt)("a",{parentName:"li",href:"/private-networks/concepts/privacy/privacy-groups"},"The privacy group to receive the transaction"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"restriction")," - Whether the private transaction is ",(0,r.kt)("inlineCode",{parentName:"p"},"restricted")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"unrestricted"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"restricted")," - Only the nodes participating in the transaction receive and store the payload of the private transaction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unrestricted")," - All nodes in the network receive the payload of the private transaction, but only the nodes participating in the transaction can read the transaction.")),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Besu implements ",(0,r.kt)("inlineCode",{parentName:"p"},"restricted")," private transactions only.")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"gas")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"gasPrice")," are used by the ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/concepts/privacy/private-transactions/processing"},"privacy marker transaction (PMT)"),", not the private transaction itself."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Because gas isn't required in private transactions, inefficient contracts deployed accidentally or deliberately can cause performance issues in privacy-enabled networks. Ensure your network has a mechanism to ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/concepts/privacy/#privacy-enabled-networks"},"establish trust offchain"),".")),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/how-to/send-transactions/private-transactions"},"create and send private transactions"),"."),(0,r.kt)("h2",{id:"besu-and-tessera-keys"},"Besu and Tessera keys"),(0,r.kt)("p",null,"Besu and Tessera nodes both have public/private key pairs identifying them. A Besu node sending a private transaction to a Tessera node signs the transaction with the Besu node private key. The ",(0,r.kt)("inlineCode",{parentName:"p"},"privateFrom")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"privateFor")," parameters specified in the RLP-encoded transaction string for ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/reference/api/#eea_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction"))," are the public keys of the Tessera nodes sending and receiving the transaction."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The mapping of Besu node addresses to Tessera node public keys is offchain. That is, the sender of a private transaction must know the Tessera node public key of the recipient.")),(0,r.kt)("h2",{id:"nonces"},"Nonces"),(0,r.kt)("p",null,"A nonce is the number of previous transactions made by the sender."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/private-networks/concepts/privacy/private-transactions/processing"},"Private transaction processing")," involves two transactions: the private transaction distributed to involved participants, and the privacy marker transaction (PMT) included on the public blockchain. Each of these transactions has its own nonce. Since the PMT is a public transaction, the PMT nonce is the public nonce for the account."),(0,r.kt)("h3",{id:"private-transaction-nonce"},"Private transaction nonce"),(0,r.kt)("p",null,"Besu maintains separate private states for each ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/concepts/privacy/privacy-groups"},"privacy group"),". The private transaction nonce for an account is specific to the privacy group. That is, the nonce for account A for privacy group ABC is different to the nonce for account A for privacy group AB."),(0,r.kt)("h3",{id:"private-nonce-validation"},"Private nonce validation"),(0,r.kt)("p",null,"Unlike public transactions, private transactions are not submitted to the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/concepts/transactions/pool"},"transaction pool"),". The private transaction is distributed directly to the participants in the transaction, and the PMT is submitted to the transaction pool."),(0,r.kt)("p",null,"Unlike ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/concepts/transactions/validation"},"public transaction nonces"),", private transaction nonces aren't validated when the private transaction is submitted. If a private transaction has an incorrect nonce, the PMT is still valid and is added to a block. However, in this scenario, the private transaction execution fails when ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/concepts/privacy/private-transactions/processing"},"processing the PMT")," for the private transaction with the incorrect nonce."),(0,r.kt)("p",null,"The following private transaction flow illustrates when nonce validation occurs:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Submit a private transaction with a ",(0,r.kt)("a",{parentName:"p",href:"#private-transaction-nonce"},"nonce value"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The private transaction is distributed to all participants in the privacy group.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The PMT is created and submitted to the transaction pool with a nonce of ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," if using one-time accounts. If using a specific account with ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--privacy-marker-transaction-signing-key-file")),", the public nonce for that account is obtained and used for the PMT.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The PMT is mined and included in the block.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the block containing the PMT is imported, and the PMT is processed, the private transaction is retrieved from the private transaction manager and executed."),(0,r.kt)("p",{parentName:"li"},"If the private transaction was submitted with a correct nonce in step 1, the nonce is validated as correct. If an incorrect nonce was submitted, the private transaction execution fails."))),(0,r.kt)("h3",{id:"private-nonce-management"},"Private nonce management"),(0,r.kt)("p",null,"In Besu, you call ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#eth_gettransactioncount"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getTransactionCount"))," to get a nonce, then use that nonce with ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/reference/api/#eea_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction"))," to send a private transaction."),(0,r.kt)("p",null,"However, when you send multiple transactions in row, if a subsequent call to ",(0,r.kt)("inlineCode",{parentName:"p"},"getTransactionCount")," happens before a previous transaction is processed, you can get the same nonce again."),(0,r.kt)("p",null,"You can manage private nonces in multiple ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Let Besu handle it. You just need to wait long enough between calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"sendRawTransaction")," for the transactions to process. The current window is around 1.5 seconds, depending on block time."),(0,r.kt)("p",{parentName:"li"},"Public transactions deal with this issue, but the window is shorter, since you can use the transaction pool to take into account pending transactions (by using ",(0,r.kt)("inlineCode",{parentName:"p"},'eth_getTransactionCount("pending")'),")."),(0,r.kt)("p",{parentName:"li"},"For private transactions, the window is longer because private transactions aren't submitted to the transaction pool. You must wait until the private transaction's corresponding PMT is included in a block.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Manage the nonce yourself, by keeping track of and providing the nonce at each call. We recommend this if you're ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/how-to/send-transactions/concurrent-private-transactions"},"sending many transactions that are independent of each other"),"."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can use ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/reference/api/#priv_gettransactioncount"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_getTransactionCount"))," or ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/reference/api/#priv_geteeatransactioncount"},(0,r.kt)("inlineCode",{parentName:"a"},"priv_getEeaTransactionCount"))," to get the nonce for an account for the specified privacy group or participants."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.orchestrate.consensys.net/en/stable/"},"Orchestrate")," for nonce management. We recommend this for enterprise use."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/web3js-quorum/blob/9a0f9eb1b91a4a0d93801f77782b509ae2e7314c/example/concurrentPrivateTransactions/concurrentPrivateTransactions.js"},"web3js-quorum library includes an example")," of nonce management when ",(0,r.kt)("a",{parentName:"p",href:"/private-networks/how-to/send-transactions/concurrent-private-transactions"},"sending concurrent private transactions"),". The example calculates the correct nonces for the private transactions and PMTs outside of Besu.")))}d.isMDXComponent=!0}}]);