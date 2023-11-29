"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[89921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Clique",description:"Hyperledger Besu Clique Proof-of-Authority (PoA) consensus protocol implementation",sidebar_position:4,path:"blob/master/config/src/main/resources/",source:"rinkeby.json",tags:["private networks"]},o="Configure Clique consensus",l={unversionedId:"private-networks/how-to/configure/consensus/clique",id:"private-networks/how-to/configure/consensus/clique",title:"Clique",description:"Hyperledger Besu Clique Proof-of-Authority (PoA) consensus protocol implementation",source:"@site/docs/private-networks/how-to/configure/consensus/clique.md",sourceDirName:"private-networks/how-to/configure/consensus",slug:"/private-networks/how-to/configure/consensus/clique",permalink:"/development/private-networks/how-to/configure/consensus/clique",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/configure/consensus/clique.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1701287562,formattedLastUpdatedAt:"Nov 29, 2023",sidebarPosition:4,frontMatter:{title:"Clique",description:"Hyperledger Besu Clique Proof-of-Authority (PoA) consensus protocol implementation",sidebar_position:4,path:"blob/master/config/src/main/resources/",source:"rinkeby.json",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"IBFT 2.0",permalink:"/development/private-networks/how-to/configure/consensus/ibft"},next:{title:"Add and remove validators without voting",permalink:"/development/private-networks/how-to/configure/consensus/add-validators-without-voting"}},s={},p=[{value:"Genesis file",id:"genesis-file",level:2},{value:"Skip empty blocks",id:"skip-empty-blocks",level:3},{value:"Extra data",id:"extra-data",level:3},{value:"One initial signer",id:"one-initial-signer",level:3},{value:"Two initial signers",id:"two-initial-signers",level:3},{value:"Post-Merge configuration",id:"post-merge-configuration",level:3},{value:"Connect to a Clique network",id:"connect-to-a-clique-network",level:2},{value:"Add and remove signers",id:"add-and-remove-signers",level:2},{value:"Add a signer",id:"add-a-signer",level:3},{value:"Remove a signer",id:"remove-a-signer",level:3},{value:"Epoch transition",id:"epoch-transition",level:3},{value:"Limitations",id:"limitations",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-clique-consensus"},"Configure Clique consensus"),(0,r.kt)("p",null,"Besu implements the ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-225"},"Clique")," proof of authority (PoA) ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/consensus/"},"consensus protocol"),". Private networks can use Clique."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Clique is not suitable for production environments. Use only in development environments.")),(0,r.kt)("p",null,"In Clique networks, approved accounts, known as signers, validate transactions and blocks. Signers take turns to create the next block. Existing signers propose and vote to ",(0,r.kt)("a",{parentName:"p",href:"#add-and-remove-signers"},"add or remove signers"),"."),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/tutorials/clique"},"create a private network using Clique"),"."),(0,r.kt)("h2",{id:"genesis-file"},"Genesis file"),(0,r.kt)("p",null,"To use Clique in a private network, Besu requires a Clique ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/genesis-file"},"genesis file"),"."),(0,r.kt)("p",null,"A Clique genesis file defines properties specific to Clique."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example Clique genesis file"',title:'"Example',Clique:!0,genesis:!0,'file"':!0},'{\n  "config": {\n    "chainId": 1981,\n    "berlinBlock": 0,\n    "clique": {\n      "blockperiodseconds": 15,\n      "epochlength": 30000\n    }\n  },\n  "coinbase": "0x0000000000000000000000000000000000000000",\n  "difficulty": "0x1",\n  "extraData": "0x000000000000000000000000000000000000000000000000000000000000000001a54556254bfa3db2daa7673435ec63649925c50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n  "gasLimit": "0x1fffffffffffff",\n  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n  "nonce": "0x0",\n  "timestamp": "0x5c51a607",\n  "alloc": {},\n  "number": "0x0",\n  "gasUsed": "0x0",\n  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000"\n}\n')),(0,r.kt)("p",null,"The properties specific to Clique are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blockperiodseconds")," - The block time, in seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"epochlength")," - The number of blocks after which to reset all votes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createemptyblocks")," - Set to false to ",(0,r.kt)("a",{parentName:"li",href:"#skip-empty-blocks"},"skip creating empty blocks"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extraData")," - ",(0,r.kt)("a",{parentName:"li",href:"#extra-data"},"Extra data")," including the initial signers.")),(0,r.kt)("h3",{id:"skip-empty-blocks"},"Skip empty blocks"),(0,r.kt)("p",null,"By default, Clique creates empty blocks. For large private networks using Clique, skipping empty blocks can reduce the storage needed."),(0,r.kt)("p",null,"To skip creating empty blocks, set ",(0,r.kt)("inlineCode",{parentName:"p"},"createemptyblocks")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in the genesis file: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "config": {\n    "londonBlock": 0,\n    "clique": {\n      "blockperiodseconds": 10,\n      "epochlength": 30000,\n      "createemptyblocks": false\n    }\n  },\n...\n}\n')),(0,r.kt)("p",null,"All validators must have the same value for ",(0,r.kt)("inlineCode",{parentName:"p"},"createemptyblocks"),". "),(0,r.kt)("h3",{id:"extra-data"},"Extra data"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"extraData")," property consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0x prefix."),(0,r.kt)("li",{parentName:"ul"},"32 bytes of vanity data."),(0,r.kt)("li",{parentName:"ul"},"A list of initial signer addresses (at least one initial signer is required). 20 bytes for each signer."),(0,r.kt)("li",{parentName:"ul"},"65 bytes for the proposer signature. In the genesis block there is no initial proposer, so the proposer signature is all zeros.")),(0,r.kt)("h3",{id:"one-initial-signer"},"One initial signer"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"One Initial Signer",src:n(57069).Z,width:"1376",height:"586"})),(0,r.kt)("h3",{id:"two-initial-signers"},"Two initial signers"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Two Initial Signers",src:n(53690).Z,width:"1376",height:"678"})),(0,r.kt)("h3",{id:"post-merge-configuration"},"Post-Merge configuration"),(0,r.kt)("p",null,"After ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/the-merge"},"The Merge"),", the following block fields are modified or deprecated. Their fields ",(0,r.kt)("strong",{parentName:"p"},"must")," contain only the constant values from the following chart."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Constant value"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"ommersHash"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"= Keccak256(RLP([]))"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"difficulty"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"Replaced with ",(0,r.kt)("inlineCode",{parentName:"td"},"prevrandao"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"mixHash"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x0000000000000000000000000000000000000000000000000000000000000000")),(0,r.kt)("td",{parentName:"tr",align:null},"Replaced with ",(0,r.kt)("inlineCode",{parentName:"td"},"prevrandao"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"nonce"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x0000000000000000")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"ommers"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RLP([]) = 0xc0"))))),(0,r.kt)("p",null,"Additionally, ",(0,r.kt)("a",{parentName:"p",href:"#extra-data"},(0,r.kt)("inlineCode",{parentName:"a"},"extraData"))," is limited to 32 bytes of vanity data after The Merge."),(0,r.kt)("h2",{id:"connect-to-a-clique-network"},"Connect to a Clique network"),(0,r.kt)("p",null,"To start a node on a Clique private network, use the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#genesis-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--genesis-file"))," option to specify the custom genesis file."),(0,r.kt)("h2",{id:"add-and-remove-signers"},"Add and remove signers"),(0,r.kt)("p",null,"Existing signers propose and vote to add or remove validators using the Clique JSON-RPC API methods. Enable the HTTP interface with ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-http-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled"))," or the WebSocket interface with ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-ws-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-enabled")),"."),(0,r.kt)("p",null,"The Clique API methods are disabled by default. To enable them, specify the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-http-api"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-api"))," or ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-ws-api"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-api"))," option and include ",(0,r.kt)("inlineCode",{parentName:"p"},"CLIQUE"),"."),(0,r.kt)("p",null,"The methods to add or remove signers are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/development/private-networks/reference/api/#clique_propose"},(0,r.kt)("inlineCode",{parentName:"a"},"clique_propose")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/development/private-networks/reference/api/#clique_getsigners"},(0,r.kt)("inlineCode",{parentName:"a"},"clique_getSigners")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/development/private-networks/reference/api/#clique_discard"},(0,r.kt)("inlineCode",{parentName:"a"},"clique_discard")),".")),(0,r.kt)("p",null,"To view signer metrics for a specified block range, call ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#clique_getsignermetrics"},(0,r.kt)("inlineCode",{parentName:"a"},"clique_getSignerMetrics")),"."),(0,r.kt)("h3",{id:"add-a-signer"},"Add a signer"),(0,r.kt)("p",null,"To propose adding a signer to a Clique network, call ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#clique_propose"},(0,r.kt)("inlineCode",{parentName:"a"},"clique_propose")),", specifying the address of the proposed signer and ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". A majority of signers must execute the call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="JSON-RPC clique_propose request example"',title:'"JSON-RPC',clique_propose:!0,request:!0,'example"':!0},'curl -X POST --data \'{"jsonrpc":"2.0","method":"clique_propose","params":["0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73", true], "id":1}\' <JSON-RPC-endpoint:port>\n')),(0,r.kt)("p",null,"When the signer creates the next block, the signer adds a vote to the block for the proposed signer."),(0,r.kt)("p",null,"When more than 50% of the existing signers propose adding the signer, with their votes distributed in blocks, the signer can begin signing blocks."),(0,r.kt)("p",null,"To return a list of signers and confirm the addition of a proposed signer, call ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#clique_getsigners"},(0,r.kt)("inlineCode",{parentName:"a"},"clique_getSigners")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="JSON-RPC clique_getSigners request example"',title:'"JSON-RPC',clique_getSigners:!0,request:!0,'example"':!0},'curl -X POST --data \'{"jsonrpc":"2.0","method":"clique_getSigners","params":["latest"], "id":1}\' <JSON-RPC-endpoint:port>\n')),(0,r.kt)("p",null,"To discard your proposal after confirming the addition of a signer, call ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#clique_discard"},(0,r.kt)("inlineCode",{parentName:"a"},"clique_discard"))," specifying the address of the proposed signer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="JSON-RPC clique_discard request example"',title:'"JSON-RPC',clique_discard:!0,request:!0,'example"':!0},'curl -X POST --data \'{"jsonrpc":"2.0","method":"clique_discard","params":["0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73"], "id":1}\' <JSON-RPC-endpoint:port>\n')),(0,r.kt)("h3",{id:"remove-a-signer"},"Remove a signer"),(0,r.kt)("p",null,"The process for removing a signer from a Clique network is the same as ",(0,r.kt)("a",{parentName:"p",href:"#add-a-signer"},"adding a signer"),", except you specify ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," as the second parameter of ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#clique_propose"},(0,r.kt)("inlineCode",{parentName:"a"},"clique_propose")),"."),(0,r.kt)("h3",{id:"epoch-transition"},"Epoch transition"),(0,r.kt)("p",null,"At each epoch transition, Clique discards all pending votes collected from received blocks. Existing proposals remain in effect and signers re-add their vote the next time they create a block."),(0,r.kt)("p",null,"Define the number of blocks between epoch transitions in the ",(0,r.kt)("a",{parentName:"p",href:"#genesis-file"},"Clique genesis file"),"."),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"In Clique, blocks created by in-turn validators are published immediately. Out-of-turn validators create blocks that are published after a short delay. In-turn blocks have a higher difficulty than out-of-turn blocks, which allows small forks to resolve to the chain with more in-turn blocks."),(0,r.kt)("p",null,"However, when the out-of-turn delay is shorter than the block propagation delay, out-of-turn blocks may be published before in-turn blocks. This may cause large, irresolvable forks in a network."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We recommend using a more updated consensus protocol such as ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/consensus/ibft"},"IBFT 2.0")," or ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/consensus/qbft"},"QBFT"),".")))}u.isMDXComponent=!0},57069:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/CliqueOneIntialSigner-3b59001d390fc935c2852c8506507a5a.png"},53690:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/CliqueTwoIntialSigners-a347015db38fec2d68ff5e188b66deaa.png"}}]);