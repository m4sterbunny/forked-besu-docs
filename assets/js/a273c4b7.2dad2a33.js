"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[69696],{78094:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>h});var r=i(85893),s=i(11151);const t={title:"Configure mining",sidebar_position:1,description:"Using Hyperledger Besu for PoW CPU mining",tags:["public networks","private networks"]},o="Configure mining",c={id:"public-networks/how-to/use-pow/mining",title:"Configure mining",description:"Using Hyperledger Besu for PoW CPU mining",source:"@site/versioned_docs/version-23.10.3/public-networks/how-to/use-pow/mining.md",sourceDirName:"public-networks/how-to/use-pow",slug:"/public-networks/how-to/use-pow/mining",permalink:"/23.10.3/public-networks/how-to/use-pow/mining",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.3/public-networks/how-to/use-pow/mining.md",tags:[{label:"public networks",permalink:"/23.10.3/tags/public-networks"},{label:"private networks",permalink:"/23.10.3/tags/private-networks"}],version:"23.10.3",lastUpdatedAt:1708479056,formattedLastUpdatedAt:"Feb 21, 2024",sidebarPosition:1,frontMatter:{title:"Configure mining",sidebar_position:1,description:"Using Hyperledger Besu for PoW CPU mining",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use client libraries",permalink:"/23.10.3/public-networks/how-to/develop/client-libraries"},next:{title:"Upgrade Besu",permalink:"/23.10.3/public-networks/how-to/upgrade-node"}},d={},h=[{value:"Configure CPU mining",id:"configure-cpu-mining",level:2},{value:"Configure GPU mining",id:"configure-gpu-mining",level:2},{value:"Mining APIs",id:"mining-apis",level:2},{value:"Besu mined blocks",id:"besu-mined-blocks",level:2},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Check block creation",id:"check-block-creation",level:3},{value:"No mined transactions",id:"no-mined-transactions",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"configure-mining",children:"Configure mining"}),"\n",(0,r.jsx)(n.p,{children:"Hyperledger Besu supports CPU and GPU mining, which are configured using command line options."}),"\n",(0,r.jsxs)(n.p,{children:["GPU mining tests used ",(0,r.jsx)(n.a,{href:"https://github.com/ethereum-mining/ethminer",children:"Ethminer"})," with the ",(0,r.jsx)(n.code,{children:"stratum+tcp"})," and ",(0,r.jsx)(n.code,{children:"getwork"})," schemes."]}),"\n",(0,r.jsxs)(n.p,{children:["Ethminer has been used with Hyperledger Besu to mine blocks on the ",(0,r.jsx)(n.a,{href:"https://ropsten.etherscan.io/address/0x2f14582947E292a2eCd20C430B46f2d27CFE213c#mine",children:"Ropsten testnet"}),", ",(0,r.jsx)(n.a,{href:"https://etc.tokenview.com/en/uncleblock/10555173",children:"ETC Mainnet (uncle block only)"})," and Mordor ETC testnet."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Some mining software supports the ",(0,r.jsx)(n.code,{children:"getwork"})," scheme as the ",(0,r.jsx)(n.code,{children:"http"})," scheme."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The Ropsten testnet is now deprecated. It transitioned to proof of stake consensus before deprecation."}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"configure-cpu-mining",children:"Configure CPU mining"}),"\n",(0,r.jsx)(n.p,{children:"To enable CPU mining, start Hyperledger Besu with the following options:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --rpc-http-api=ETH,MINER --miner-enabled --miner-coinbase=<account>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"<account>"})," is the account you pay mining rewards to. For example, ",(0,r.jsx)(n.code,{children:"fe3b557e8fb62b89f4916b721be55ceb828dbd73"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Start and stop mining using the ",(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#miner_start",children:(0,r.jsx)(n.code,{children:"miner_start"})})," and ",(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#miner_stop",children:(0,r.jsx)(n.code,{children:"miner_stop"})})," APIs."]}),"\n",(0,r.jsx)(n.h2,{id:"configure-gpu-mining",children:"Configure GPU mining"}),"\n",(0,r.jsxs)(n.p,{children:["Besu supports GPU mining, tested using ",(0,r.jsx)(n.a,{href:"https://github.com/ethereum-mining/ethminer",children:"Ethminer"})," with the ",(0,r.jsx)(n.code,{children:"stratum+tcp"})," scheme."]}),"\n",(0,r.jsx)(n.p,{children:"To enable GPU mining, start Hyperledger Besu with the following options:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --rpc-http-api=ETH,MINER --miner-enabled --miner-stratum-enabled --miner-coinbase=<account>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"<account>"})," is the account you pay mining rewards to. For example, ",(0,r.jsx)(n.code,{children:"fe3b557e8fb62b89f4916b721be55ceb828dbd73"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Optional command line options are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#miner-stratum-host",children:(0,r.jsx)(n.code,{children:"--miner-stratum-host"})})," to specify the host of the mining service."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#miner-stratum-port",children:(0,r.jsx)(n.code,{children:"--miner-stratum-port"})})," to specify the port of the mining service."]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["Besu also supports the ",(0,r.jsx)(n.code,{children:"getwork"})," scheme. Use the ",(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#miner-stratum-enabled",children:(0,r.jsx)(n.code,{children:"--miner-stratum-enabled"})})," option and ",(0,r.jsxs)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#rpc-http-api",children:["enable the ",(0,r.jsx)(n.code,{children:"ETH"})," RPCs"]}),"."]}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"getwork"})," scheme is supported as the ",(0,r.jsx)(n.code,{children:"http"})," scheme in certain mining software."]})]}),"\n",(0,r.jsxs)(n.p,{children:["Start and stop mining using the ",(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#miner_start",children:(0,r.jsx)(n.code,{children:"miner_start"})})," and ",(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#miner_stop",children:(0,r.jsx)(n.code,{children:"miner_stop"})})," APIs."]}),"\n",(0,r.jsx)(n.h2,{id:"mining-apis",children:"Mining APIs"}),"\n",(0,r.jsx)(n.p,{children:"The JSON-RPC API methods for mining are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#miner_start",children:(0,r.jsx)(n.code,{children:"miner_start"})})," to start mining."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#miner_stop",children:(0,r.jsx)(n.code,{children:"miner_stop"})})," to stop mining."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_mining",children:(0,r.jsx)(n.code,{children:"eth_mining"})})," to determine whether the client is actively mining new blocks."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_getminerdatabyblockhash",children:(0,r.jsx)(n.code,{children:"eth_getMinerDataByBlockHash"})})," and ",(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_getminerdatabyblocknumber",children:(0,r.jsx)(n.code,{children:"eth_getMinerDataByBlockNumber"})})," to get the miner data for a specified block."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_hashrate",children:(0,r.jsx)(n.code,{children:"eth_hashrate"})})," to get the number of hashes per second with which the node is mining. Not supported for GPU mining."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_getwork",children:(0,r.jsx)(n.code,{children:"eth_getWork"})})," to get the hash of the current block, the seed hash, and the target boundary condition. Only used when using the ",(0,r.jsx)(n.code,{children:"getwork"})," scheme."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_submitwork",children:(0,r.jsx)(n.code,{children:"eth_submitWork"})})," to submit the PoW solution. Only used when using the ",(0,r.jsx)(n.code,{children:"getwork"})," scheme."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"besu-mined-blocks",children:"Besu mined blocks"}),"\n",(0,r.jsxs)(n.p,{children:["Besu has successfully mined blocks on the Ropsten testnet, ETC Mainnet (uncle block only) and Mordor ETC testnet. Blocks mined by the Hyperledger Besu team contain the version number used in the block's ",(0,r.jsx)(n.code,{children:"extraData"})," field. The following accounts have been used to mine on public networks with Hyperledger Besu:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ropsten"}),": ",(0,r.jsx)(n.a,{href:"https://ropsten.etherscan.io/address/0x2f14582947E292a2eCd20C430B46f2d27CFE213c#mine",children:(0,r.jsx)(n.code,{children:"0x2f14582947E292a2eCd20C430B46f2d27CFE213c"})})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ETC"}),": ",(0,r.jsx)(n.a,{href:"https://etc.tokenview.com/en/address/0x3125309aa670f5e60493b50884a7e7abf9ebb701",children:(0,r.jsx)(n.code,{children:"0x3125309aa670f5e60493b50884a7e7abf9ebb701"})})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Mordor"}),": ",(0,r.jsx)(n.code,{children:"0x2f14582947E292a2eCd20C430B46f2d27CFE213c"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"troubleshoot",children:"Troubleshoot"}),"\n",(0,r.jsx)(n.h3,{id:"check-block-creation",children:"Check block creation"}),"\n",(0,r.jsx)(n.p,{children:"On mining nodes, log messages indicate block creation."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"2019-05-08 20:28:27.026+10:00 | pool-10-thread-1 | INFO  | IbftRound | Importing block to chain. round=ConsensusRoundIdentifier{Sequence=660, Round=0}, hash=0x759afaba4e923d89175d850ceca4b8ef81f7d9c727b0b0b8e714b624a4b8e8cc\n2019-05-08 20:28:29.020+10:00 | pool-10-thread-1 | INFO  | IbftRound | Importing block to chain. round=ConsensusRoundIdentifier{Sequence=661, Round=0}, hash=0x5443e504256765f06b3cebfbee82276a034ebcc8d685b7c3d1a6010fd4acfa14\n"})}),"\n",(0,r.jsx)(n.p,{children:"On non-mining nodes, log messages indicate importing blocks."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"2019-05-08 20:28:29.026+10:00 | EthScheduler-Workers-1 | INFO  | BlockPropagationManager | Imported #661 / 0 tx / 0 om / 0 (0.0%) gas / (0x5443e504256765f06b3cebfbee82276a034ebcc8d685b7c3d1a6010fd4acfa14) in 0.000s.\n2019-05-08 20:28:31.031+10:00 | EthScheduler-Workers-0 | INFO  | BlockPropagationManager | Imported #662 / 0 tx / 0 om / 0 (0.0%) gas / (0x0ead4e20123d3f1433d8dec894fcce386da4049819b24b309963ce7a8a0fcf03) in 0.000s.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To confirm the block number is increasing, use the ",(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_blocknumber",children:(0,r.jsx)(n.code,{children:"eth_blockNumber"})})," JSON-RPC API method."]}),"\n",(0,r.jsxs)(n.p,{children:["If there's no block creation in ",(0,r.jsx)(n.a,{href:"/23.10.3/private-networks/how-to/configure/consensus/clique#extra-data",children:"Clique"})," or ",(0,r.jsx)(n.a,{href:"/23.10.3/private-networks/how-to/configure/consensus/ibft#extra-data",children:"IBFT 2.0"})," networks, ensure the validator addresses in the genesis file match running nodes."]}),"\n",(0,r.jsx)(n.h3,{id:"no-mined-transactions",children:"No mined transactions"}),"\n",(0,r.jsxs)(n.p,{children:["If you add a transaction to the ",(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/concepts/transactions/pool",children:"transaction pool"})," and the transaction hash returns, but the transaction is never mined, check the ",(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#min-gas-price",children:(0,r.jsx)(n.code,{children:"--min-gas-price"})})," option on mining nodes. If the ",(0,r.jsx)(n.code,{children:"gasPrice"})," on a ",(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/how-to/send-transactions",children:"transaction"})," is lower than the ",(0,r.jsx)(n.code,{children:"min-gas-price"})," for the mining node, the transaction will never mine."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.a,{href:"/23.10.3/private-networks/how-to/configure/free-gas",children:"free gas networks"}),", you must set ",(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/cli/options#min-gas-price",children:(0,r.jsx)(n.code,{children:"--min-gas-price"})})," to zero."]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>o});var r=i(67294);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);