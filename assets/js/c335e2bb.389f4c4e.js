"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[6122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={title:"Configure mining",sidebar_position:1,description:"Using Hyperledger Besu for PoW CPU mining",tags:["public networks","private networks"]},o="Configure mining",s={unversionedId:"public-networks/how-to/use-pow/mining",id:"version-23.10.0/public-networks/how-to/use-pow/mining",title:"Configure mining",description:"Using Hyperledger Besu for PoW CPU mining",source:"@site/versioned_docs/version-23.10.0/public-networks/how-to/use-pow/mining.md",sourceDirName:"public-networks/how-to/use-pow",slug:"/public-networks/how-to/use-pow/mining",permalink:"/23.10.0/public-networks/how-to/use-pow/mining",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.0/public-networks/how-to/use-pow/mining.md",tags:[{label:"public networks",permalink:"/23.10.0/tags/public-networks"},{label:"private networks",permalink:"/23.10.0/tags/private-networks"}],version:"23.10.0",lastUpdatedAt:1701300072,formattedLastUpdatedAt:"Nov 29, 2023",sidebarPosition:1,frontMatter:{title:"Configure mining",sidebar_position:1,description:"Using Hyperledger Besu for PoW CPU mining",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use client libraries",permalink:"/23.10.0/public-networks/how-to/develop/client-libraries"},next:{title:"Upgrade Besu",permalink:"/23.10.0/public-networks/how-to/upgrade-node"}},p={},l=[{value:"Configure CPU mining",id:"configure-cpu-mining",level:2},{value:"Configure GPU mining",id:"configure-gpu-mining",level:2},{value:"Mining APIs",id:"mining-apis",level:2},{value:"Besu mined blocks",id:"besu-mined-blocks",level:2},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Check block creation",id:"check-block-creation",level:3},{value:"No mined transactions",id:"no-mined-transactions",level:3}],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-mining"},"Configure mining"),(0,i.kt)("p",null,"Hyperledger Besu supports CPU and GPU mining, which are configured using command line options."),(0,i.kt)("p",null,"GPU mining tests used ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum-mining/ethminer"},"Ethminer")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"stratum+tcp")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getwork")," schemes."),(0,i.kt)("p",null,"Ethminer has been used with Hyperledger Besu to mine blocks on the ",(0,i.kt)("a",{parentName:"p",href:"https://ropsten.etherscan.io/address/0x2f14582947E292a2eCd20C430B46f2d27CFE213c#mine"},"Ropsten testnet"),", ",(0,i.kt)("a",{parentName:"p",href:"https://etc.tokenview.com/en/uncleblock/10555173"},"ETC Mainnet (uncle block only)")," and Mordor ETC testnet."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Some mining software supports the ",(0,i.kt)("inlineCode",{parentName:"p"},"getwork")," scheme as the ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," scheme.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The Ropsten testnet is now deprecated. It transitioned to proof of stake consensus before deprecation.")))),(0,i.kt)("h2",{id:"configure-cpu-mining"},"Configure CPU mining"),(0,i.kt)("p",null,"To enable CPU mining, start Hyperledger Besu with the following options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"besu --rpc-http-api=ETH,MINER --miner-enabled --miner-coinbase=<account>\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"<account>")," is the account you pay mining rewards to. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"fe3b557e8fb62b89f4916b721be55ceb828dbd73"),"."),(0,i.kt)("p",null,"Start and stop mining using the ",(0,i.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/api/#miner_start"},(0,i.kt)("inlineCode",{parentName:"a"},"miner_start"))," and ",(0,i.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/api/#miner_stop"},(0,i.kt)("inlineCode",{parentName:"a"},"miner_stop"))," APIs."),(0,i.kt)("h2",{id:"configure-gpu-mining"},"Configure GPU mining"),(0,i.kt)("p",null,"Besu supports GPU mining, tested using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum-mining/ethminer"},"Ethminer")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"stratum+tcp")," scheme."),(0,i.kt)("p",null,"To enable GPU mining, start Hyperledger Besu with the following options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"besu --rpc-http-api=ETH,MINER --miner-enabled --miner-stratum-enabled --miner-coinbase=<account>\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"<account>")," is the account you pay mining rewards to. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"fe3b557e8fb62b89f4916b721be55ceb828dbd73"),"."),(0,i.kt)("p",null,"Optional command line options are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/23.10.0/public-networks/reference/cli/options#miner-stratum-host"},(0,i.kt)("inlineCode",{parentName:"a"},"--miner-stratum-host"))," to specify the host of the mining service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/23.10.0/public-networks/reference/cli/options#miner-stratum-port"},(0,i.kt)("inlineCode",{parentName:"a"},"--miner-stratum-port"))," to specify the port of the mining service.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Besu also supports the ",(0,i.kt)("inlineCode",{parentName:"p"},"getwork")," scheme. Use the ",(0,i.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#miner-stratum-enabled"},(0,i.kt)("inlineCode",{parentName:"a"},"--miner-stratum-enabled"))," option and ",(0,i.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#rpc-http-api"},"enable the ",(0,i.kt)("inlineCode",{parentName:"a"},"ETH")," RPCs"),"."),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getwork")," scheme is supported as the ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," scheme in certain mining software.")),(0,i.kt)("p",null,"Start and stop mining using the ",(0,i.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/api/#miner_start"},(0,i.kt)("inlineCode",{parentName:"a"},"miner_start"))," and ",(0,i.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/api/#miner_stop"},(0,i.kt)("inlineCode",{parentName:"a"},"miner_stop"))," APIs."),(0,i.kt)("h2",{id:"mining-apis"},"Mining APIs"),(0,i.kt)("p",null,"The JSON-RPC API methods for mining are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/23.10.0/public-networks/reference/api/#miner_start"},(0,i.kt)("inlineCode",{parentName:"a"},"miner_start"))," to start mining."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/23.10.0/public-networks/reference/api/#miner_stop"},(0,i.kt)("inlineCode",{parentName:"a"},"miner_stop"))," to stop mining."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/23.10.0/public-networks/reference/api/#eth_mining"},(0,i.kt)("inlineCode",{parentName:"a"},"eth_mining"))," to determine whether the client is actively mining new blocks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/23.10.0/public-networks/reference/api/#eth_getminerdatabyblockhash"},(0,i.kt)("inlineCode",{parentName:"a"},"eth_getMinerDataByBlockHash"))," and ",(0,i.kt)("a",{parentName:"li",href:"/23.10.0/public-networks/reference/api/#eth_getminerdatabyblocknumber"},(0,i.kt)("inlineCode",{parentName:"a"},"eth_getMinerDataByBlockNumber"))," to get the miner data for a specified block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/23.10.0/public-networks/reference/api/#eth_hashrate"},(0,i.kt)("inlineCode",{parentName:"a"},"eth_hashrate"))," to get the number of hashes per second with which the node is mining. Not supported for GPU mining."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/23.10.0/public-networks/reference/api/#eth_getwork"},(0,i.kt)("inlineCode",{parentName:"a"},"eth_getWork"))," to get the hash of the current block, the seed hash, and the target boundary condition. Only used when using the ",(0,i.kt)("inlineCode",{parentName:"li"},"getwork")," scheme."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/23.10.0/public-networks/reference/api/#eth_submitwork"},(0,i.kt)("inlineCode",{parentName:"a"},"eth_submitWork"))," to submit the PoW solution. Only used when using the ",(0,i.kt)("inlineCode",{parentName:"li"},"getwork")," scheme.")),(0,i.kt)("h2",{id:"besu-mined-blocks"},"Besu mined blocks"),(0,i.kt)("p",null,"Besu has successfully mined blocks on the Ropsten testnet, ETC Mainnet (uncle block only) and Mordor ETC testnet. Blocks mined by the Hyperledger Besu team contain the version number used in the block's ",(0,i.kt)("inlineCode",{parentName:"p"},"extraData")," field. The following accounts have been used to mine on public networks with Hyperledger Besu:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ropsten"),": ",(0,i.kt)("a",{parentName:"li",href:"https://ropsten.etherscan.io/address/0x2f14582947E292a2eCd20C430B46f2d27CFE213c#mine"},(0,i.kt)("inlineCode",{parentName:"a"},"0x2f14582947E292a2eCd20C430B46f2d27CFE213c"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ETC"),": ",(0,i.kt)("a",{parentName:"li",href:"https://etc.tokenview.com/en/address/0x3125309aa670f5e60493b50884a7e7abf9ebb701"},(0,i.kt)("inlineCode",{parentName:"a"},"0x3125309aa670f5e60493b50884a7e7abf9ebb701"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mordor"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"0x2f14582947E292a2eCd20C430B46f2d27CFE213c"))),(0,i.kt)("h2",{id:"troubleshoot"},"Troubleshoot"),(0,i.kt)("h3",{id:"check-block-creation"},"Check block creation"),(0,i.kt)("p",null,"On mining nodes, log messages indicate block creation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"2019-05-08 20:28:27.026+10:00 | pool-10-thread-1 | INFO  | IbftRound | Importing block to chain. round=ConsensusRoundIdentifier{Sequence=660, Round=0}, hash=0x759afaba4e923d89175d850ceca4b8ef81f7d9c727b0b0b8e714b624a4b8e8cc\n2019-05-08 20:28:29.020+10:00 | pool-10-thread-1 | INFO  | IbftRound | Importing block to chain. round=ConsensusRoundIdentifier{Sequence=661, Round=0}, hash=0x5443e504256765f06b3cebfbee82276a034ebcc8d685b7c3d1a6010fd4acfa14\n")),(0,i.kt)("p",null,"On non-mining nodes, log messages indicate importing blocks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"2019-05-08 20:28:29.026+10:00 | EthScheduler-Workers-1 | INFO  | BlockPropagationManager | Imported #661 / 0 tx / 0 om / 0 (0.0%) gas / (0x5443e504256765f06b3cebfbee82276a034ebcc8d685b7c3d1a6010fd4acfa14) in 0.000s.\n2019-05-08 20:28:31.031+10:00 | EthScheduler-Workers-0 | INFO  | BlockPropagationManager | Imported #662 / 0 tx / 0 om / 0 (0.0%) gas / (0x0ead4e20123d3f1433d8dec894fcce386da4049819b24b309963ce7a8a0fcf03) in 0.000s.\n")),(0,i.kt)("p",null,"To confirm the block number is increasing, use the ",(0,i.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/api/#eth_blocknumber"},(0,i.kt)("inlineCode",{parentName:"a"},"eth_blockNumber"))," JSON-RPC API method."),(0,i.kt)("p",null,"If there's no block creation in ",(0,i.kt)("a",{parentName:"p",href:"/23.10.0/private-networks/how-to/configure/consensus/clique#extra-data"},"Clique")," or ",(0,i.kt)("a",{parentName:"p",href:"/23.10.0/private-networks/how-to/configure/consensus/ibft#extra-data"},"IBFT 2.0")," networks, ensure the validator addresses in the genesis file match running nodes."),(0,i.kt)("h3",{id:"no-mined-transactions"},"No mined transactions"),(0,i.kt)("p",null,"If you add a transaction to the ",(0,i.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/concepts/transactions/pool"},"transaction pool")," and the transaction hash returns, but the transaction is never mined, check the ",(0,i.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#min-gas-price"},(0,i.kt)("inlineCode",{parentName:"a"},"--min-gas-price"))," option on mining nodes. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"gasPrice")," on a ",(0,i.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/how-to/send-transactions"},"transaction")," is lower than the ",(0,i.kt)("inlineCode",{parentName:"p"},"min-gas-price")," for the mining node, the transaction will never mine."),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/23.10.0/private-networks/how-to/configure/free-gas"},"free gas networks"),", you must set ",(0,i.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#min-gas-price"},(0,i.kt)("inlineCode",{parentName:"a"},"--min-gas-price"))," to zero."))}u.isMDXComponent=!0}}]);