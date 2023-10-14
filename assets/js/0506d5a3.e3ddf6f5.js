"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[49387],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=d(a),s=r,N=k["".concat(p,".").concat(s)]||k[s]||c[s]||i;return a?n.createElement(N,l(l({ref:t},m),{},{components:a})):n.createElement(N,l({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6347:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={title:"Objects",description:"Engine API objects reference"},l="Engine API objects",o={unversionedId:"public-networks/reference/engine-api/objects",id:"version-23.4.0/public-networks/reference/engine-api/objects",title:"Objects",description:"Engine API objects reference",source:"@site/versioned_docs/version-23.4.0/public-networks/reference/engine-api/objects.md",sourceDirName:"public-networks/reference/engine-api",slug:"/public-networks/reference/engine-api/objects",permalink:"/23.4.0/public-networks/reference/engine-api/objects",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/reference/engine-api/objects.md",tags:[],version:"23.4.0",lastUpdatedAt:1697315539,formattedLastUpdatedAt:"Oct 14, 2023",frontMatter:{title:"Objects",description:"Engine API objects reference"},sidebar:"publicDocSidebar",previous:{title:"Engine API",permalink:"/23.4.0/public-networks/reference/engine-api/"},next:{title:"Genesis file items",permalink:"/23.4.0/public-networks/reference/genesis-items"}},p={},d=[{value:"Execution payload object",id:"execution-payload-object",level:2},{value:"Fork choice state object",id:"fork-choice-state-object",level:2},{value:"Payload attributes object",id:"payload-attributes-object",level:2},{value:"Payload status object",id:"payload-status-object",level:2},{value:"Transition configuration object",id:"transition-configuration-object",level:2}],m={toc:d};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"engine-api-objects"},"Engine API objects"),(0,r.kt)("p",null,"The following objects are parameters for or returned by the ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/engine-api/"},"Engine API methods"),"."),(0,r.kt)("h2",{id:"execution-payload-object"},"Execution payload object"),(0,r.kt)("p",null,"Parameter for ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/engine-api/#engine_newpayloadv1"},(0,r.kt)("inlineCode",{parentName:"a"},"engine_newPayloadV1")),". Returned by ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/engine-api/#engine_getpayloadv1"},(0,r.kt)("inlineCode",{parentName:"a"},"engine_getPayloadV1")),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"parentHash")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Data"),", 32 Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Hash of the parent block.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"feeRecipient")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Data"),", 20 Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Beneficiary of the fee.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stateRoot")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Data"),", 32 Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Root of the final state trie for the block.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"receiptsRoot")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Data"),", 32 Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Root of the receipts trie for the block.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logsBloom")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Data"),", 256 Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Bloom filter for light clients to quickly retrieve related logs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prevRandao")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Data"),", 32 Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Difficulty for this block.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"blockNumber")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Quantity"),", 64 Bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Block number of block containing this transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gasLimit")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Quantity"),", 64 Bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum gas allowed in this block.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gasUsed")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Quantity"),", 64 Bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Total gas used by all transactions in this block.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Quantity"),", 64 Bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Unix timestamp (milliseconds) for block assembly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extraData")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Data"),", 0 to 32 Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Extra data field for this block.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"baseFeePerGas")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Quantity"),", 256 Bits"),(0,r.kt)("td",{parentName:"tr",align:null},"The block's ",(0,r.kt)("a",{parentName:"td",href:"/23.4.0/public-networks/concepts/transactions/types#eip1559-transactions"},"base fee per gas"),". This field is empty for blocks created before ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ethereum/EIPs/blob/2d8a95e14e56de27c5465d93747b0006bd8ac47f/EIPS/eip-1559.md"},"EIP-1559"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"blockHash")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Data"),", 32 Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Hash of the execution block.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transactions")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of transaction objects, each object is a list representing ",(0,r.kt)("inlineCode",{parentName:"td"},"TransactionType"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"TransactionPayload"),", or ",(0,r.kt)("inlineCode",{parentName:"td"},"LegacyTransaction")," as defined in ",(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-2718"},"EIP-2718"),".")))),(0,r.kt)("h2",{id:"fork-choice-state-object"},"Fork choice state object"),(0,r.kt)("p",null,"Parameter for ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/engine-api/#engine_forkchoiceupdatedv1"},(0,r.kt)("inlineCode",{parentName:"a"},"engine_forkchoiceUpdatedV1")),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"headBlockHash")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Data"),", 32 Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Block hash of the head of the canonical chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"safeBlockHash")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Data"),", 32 Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},'"Safe" block hash of the canonical chain under certain synchrony and honesty assumptions. This value MUST be either equal to or an ancestor of ',(0,r.kt)("inlineCode",{parentName:"td"},"headBlockHash"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"finalizedBlockHash")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Data"),", 32 Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Block hash of the most recent finalized block.")))),(0,r.kt)("h2",{id:"payload-attributes-object"},"Payload attributes object"),(0,r.kt)("p",null,"Parameter for ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/engine-api/#engine_forkchoiceupdatedv1"},(0,r.kt)("inlineCode",{parentName:"a"},"engine_forkchoiceUpdatedV1")),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Quantity"),", 64 Bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Value for the ",(0,r.kt)("inlineCode",{parentName:"td"},"timestamp")," field of the new payload.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prevRandao")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Data"),", 32 Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Value for the ",(0,r.kt)("inlineCode",{parentName:"td"},"prevRandao")," field of the new payload.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"suggestedFeeRecipient")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Data"),", 20 Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Suggested value for the ",(0,r.kt)("inlineCode",{parentName:"td"},"feeRecipient")," field of the new payload.")))),(0,r.kt)("h2",{id:"payload-status-object"},"Payload status object"),(0,r.kt)("p",null,"Returned by ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/engine-api/#engine_newpayloadv1"},(0,r.kt)("inlineCode",{parentName:"a"},"engine_newPayloadV1"))," and ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/engine-api/#engine_forkchoiceupdatedv1"},(0,r.kt)("inlineCode",{parentName:"a"},"engine_forkchoiceUpdatedV1")),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"status")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Enumeration")),(0,r.kt)("td",{parentName:"tr",align:null},"Either ",(0,r.kt)("inlineCode",{parentName:"td"},'"VALID"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"INVALID"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"SYNCING"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"ACCEPTED"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"INVALID_BLOCK_HASH"'),", or ",(0,r.kt)("inlineCode",{parentName:"td"},'"INVALID_TERMINAL_BLOCK"'),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"latestValidHash")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Data"),", 32 Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Hash of the most recent valid block in the branch defined by payload and its ancestors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"validationError")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Message providing additional details on the validation error if the payload is classified as ",(0,r.kt)("inlineCode",{parentName:"td"},"INVALID"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"INVALID_BLOCK_HASH")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"INVALID_TERMINAL_BLOCK"),".")))),(0,r.kt)("h2",{id:"transition-configuration-object"},"Transition configuration object"),(0,r.kt)("p",null,"Parameter for and returned by ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/engine-api/#engine_exchangetransitionconfigurationv1"},(0,r.kt)("inlineCode",{parentName:"a"},"engine_exchangeTransitionConfigurationV1")),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"terminalTotalDifficulty")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Quantity"),", 256 Bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Maps on the ",(0,r.kt)("inlineCode",{parentName:"td"},"TERMINAL_TOTAL_DIFFICULTY")," parameter of ",(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-3675#client-software-configuration"},"EIP-3675"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"terminalBlockHash")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Data"),", 32 Bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Maps on the ",(0,r.kt)("inlineCode",{parentName:"td"},"TERMINAL_BLOCK_HASH")," parameter of ",(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-3675#client-software-configuration"},"EIP-3675"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"terminalBlockNumber")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"Quantity"),", 64 Bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Maps on the ",(0,r.kt)("inlineCode",{parentName:"td"},"TERMINAL_BLOCK_NUMBER")," parameter of ",(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-3675#client-software-configuration"},"EIP-3675"),".")))))}k.isMDXComponent=!0}}]);