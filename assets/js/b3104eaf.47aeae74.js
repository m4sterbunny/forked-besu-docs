"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[99634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||s;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,r[1]=i;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const s={title:"Sync Besu",sidebar_position:1,description:"Full and archive node types"},r="Sync Besu",i={unversionedId:"public-networks/get-started/connect/sync-node",id:"version-23.4.0/public-networks/get-started/connect/sync-node",title:"Sync Besu",description:"Full and archive node types",source:"@site/versioned_docs/version-23.4.0/public-networks/get-started/connect/sync-node.md",sourceDirName:"public-networks/get-started/connect",slug:"/public-networks/get-started/connect/sync-node",permalink:"/23.4.0/public-networks/get-started/connect/sync-node",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/get-started/connect/sync-node.md",tags:[],version:"23.4.0",lastUpdatedAt:1696836477,formattedLastUpdatedAt:"Oct 9, 2023",sidebarPosition:1,frontMatter:{title:"Sync Besu",sidebar_position:1,description:"Full and archive node types"},sidebar:"publicDocSidebar",previous:{title:"Connect to a network overview",permalink:"/23.4.0/public-networks/get-started/connect/"},next:{title:"Connect to Mainnet",permalink:"/23.4.0/public-networks/get-started/connect/mainnet"}},c={},l=[{value:"Sync times",id:"sync-times",level:2},{value:"Storage",id:"storage",level:2},{value:"Run a full node",id:"run-a-full-node",level:2},{value:"Snap synchronization",id:"snap-synchronization",level:3},{value:"Checkpoint synchronization",id:"checkpoint-synchronization",level:3},{value:"Fast synchronization",id:"fast-synchronization",level:3},{value:"Run an archive node",id:"run-an-archive-node",level:2}],p={toc:l};function d(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sync-besu"},"Sync Besu"),(0,o.kt)("p",null,"Besu supports two node types, commonly referred to as ",(0,o.kt)("a",{parentName:"p",href:"#run-a-full-node"},"full nodes")," and ",(0,o.kt)("a",{parentName:"p",href:"#run-an-archive-node"},"archive nodes"),"."),(0,o.kt)("p",null,"Full nodes have the current state of the blockchain. They can't serve the network with all data requests (for example, the balance of an account at an old block). Full nodes can guarantee the latest state for the blockchain (and some older states, but not all). You can check current balances, sign and send transactions, and look at current dapp data."),(0,o.kt)("p",null,"Archive nodes also store the intermediary state of every account and contract for every block since the genesis block. Archive nodes can do everything full nodes do, and they can access historical state data. Archive nodes require more disk space than full nodes."),(0,o.kt)("p",null,"Besu must connect with other peers to sync with the network. If your node is having trouble peering, try ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/troubleshoot/peering"},"troubleshooting peering"),"."),(0,o.kt)("h2",{id:"sync-times"},"Sync times"),(0,o.kt)("p",null,"To sync with a public network, Besu runs two processes in parallel: the world state sync and the blockchain download."),(0,o.kt)("p",null,"The following table shows the average world state sync time for each sync mode on Mainnet. All times are hardware dependent; this table is based on running AWS instances m6gd.2xlarge. Each sync mode also has its own world state database size."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Sync mode"),(0,o.kt)("th",{parentName:"tr",align:null},"Time to sync world state"),(0,o.kt)("th",{parentName:"tr",align:null},"Disk usage"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Snap"),(0,o.kt)("td",{parentName:"tr",align:null},"~6 hours"),(0,o.kt)("td",{parentName:"tr",align:null},"Average disk")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Checkpoint"),(0,o.kt)("td",{parentName:"tr",align:null},"~5 hours"),(0,o.kt)("td",{parentName:"tr",align:null},"Smallest disk")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Fast"),(0,o.kt)("td",{parentName:"tr",align:null},"~1.5 days"),(0,o.kt)("td",{parentName:"tr",align:null},"Average disk")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Full"),(0,o.kt)("td",{parentName:"tr",align:null},"~weeks"),(0,o.kt)("td",{parentName:"tr",align:null},"Largest disk")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"As of late 2022, an average Mainnet snap sync consumes around 750 GB using Bonsai Tries. Read more about ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/data-storage-formats#storage-requirements"},"storage requirements")," across data storage formats and sync modes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Testnets take significantly less time and space to sync.")))),(0,o.kt)("p",null,"While the world state syncs, Besu downloads and imports the blockchain in the background. The blockchain download time depends on CPU, the network, Besu's peers, and disk speed. It generally takes longer than the world state sync."),(0,o.kt)("p",null,"Besu must catch up to the current chain head and sync the world state to participate on Mainnet."),(0,o.kt)("h2",{id:"storage"},"Storage"),(0,o.kt)("p",null,"You can store the world state using ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/data-storage-formats#forest-of-tries"},"Forest of Tries")," or ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/data-storage-formats#bonsai-tries"},"Bonsai Tries"),". We recommend using Bonsai Tries for the lowest storage requirements."),(0,o.kt)("h2",{id:"run-a-full-node"},"Run a full node"),(0,o.kt)("p",null,"You can run a full node using ",(0,o.kt)("a",{parentName:"p",href:"#snap-synchronization"},"snap synchronization (snap sync)"),", ",(0,o.kt)("a",{parentName:"p",href:"#checkpoint-synchronization"},"checkpoint synchronization (checkpoint sync)"),", or ",(0,o.kt)("a",{parentName:"p",href:"#fast-synchronization"},"fast synchronization (fast sync)"),"."),(0,o.kt)("h3",{id:"snap-synchronization"},"Snap synchronization"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We recommend using snap sync over fast sync because snap sync can be faster by several days."),(0,o.kt)("p",{parentName:"admonition"},"We recommend using snap sync with the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/data-storage-formats#bonsai-tries"},"Bonsai")," data storage format for the fastest sync and lowest storage requirements.")),(0,o.kt)("p",null,"Enable snap sync using ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#sync-mode"},(0,o.kt)("inlineCode",{parentName:"a"},"--sync-mode=X_SNAP")),". You need Besu version 22.4.0 or later to use snap sync."),(0,o.kt)("p",null,"Instead of downloading the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/data-storage-formats"},"state trie")," node by node, snap sync downloads as many leaves of the trie as possible, and reconstructs the trie locally."),(0,o.kt)("p",null,"You can't switch from fast sync to snap sync. If your node is blocked in the middle of a fast sync, you can start over using snap sync instead by stopping the node, deleting the data directory, and starting over using ",(0,o.kt)("inlineCode",{parentName:"p"},"--sync-mode=X_SNAP"),"."),(0,o.kt)("p",null,"You can restart Besu during a snap sync in case of hardware or software problems. The sync resumes from the last valid world state and continues to download blocks starting from the last downloaded block."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/monitor/understand-metrics"},"how to read the Besu metrics charts")," when using snap sync."),(0,o.kt)("h3",{id:"checkpoint-synchronization"},"Checkpoint synchronization"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Checkpoint sync is an early access feature.")),(0,o.kt)("p",null,"Enable checkpoint sync using ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#sync-mode"},(0,o.kt)("inlineCode",{parentName:"a"},"--sync-mode=X_CHECKPOINT")),". You need Besu version 22.4.3 or later to use checkpoint sync."),(0,o.kt)("p",null,"Checkpoint sync behaves like ",(0,o.kt)("a",{parentName:"p",href:"#snap-synchronization"},"snap sync"),", but instead of syncing from the genesis block, it syncs from a specific checkpoint block configured in the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/genesis-file"},"Besu genesis file"),"."),(0,o.kt)("p",null,"Ethereum Mainnet and the Goerli testnet configurations already define default checkpoints, so you don't have to add this yourself."),(0,o.kt)("p",null,"For other networks, you can configure a checkpoint in the genesis file by specifying the block hash, number, and total difficulty as in the following example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Checkpoint configuration example"',title:'"Checkpoint',configuration:!0,'example"':!0},'"checkpoint": {\n  "hash": "0x844d581cb00058d19f0584fb582fa2de208876ee56bbae27446a679baf4633f4",\n  "number": 14700000,\n  "totalDifficulty": "0xA2539264C62BF98CFC6"\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If using ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/how-to/configure/consensus/clique"},"Clique")," consensus, the checkpoint must be the beginning of an epoch.")),(0,o.kt)("p",null,"If you enable checkpoint sync without a checkpoint configuration in the genesis file, Besu snap syncs from the genesis block."),(0,o.kt)("p",null,"You can restart Besu during a checkpoint sync in case of hardware or software problems. The sync resumes from the last valid world state and continues to download blocks starting from the last downloaded block."),(0,o.kt)("h3",{id:"fast-synchronization"},"Fast synchronization"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"It might become impossible to sync Ethereum Mainnet using fast sync in the future. If you sync for the first time or ever need to re-sync, update Besu to a version that supports newer sync methods.")),(0,o.kt)("p",null,"Enable fast sync using ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#sync-mode"},(0,o.kt)("inlineCode",{parentName:"a"},"--sync-mode=FAST")),"."),(0,o.kt)("p",null,"Fast sync downloads the block headers and transaction receipts, and verifies the chain of block headers from the genesis block."),(0,o.kt)("p",null,"When starting fast sync, Besu first downloads the world state for a recent block verified by its peers (referred to as a pivot block), and then begins fast sync from the genesis block."),(0,o.kt)("p",null,"Fast sync is the default for named networks specified using the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#network"},(0,o.kt)("inlineCode",{parentName:"a"},"--network"))," option, except for the ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," development network. It's also the default if connecting to Ethereum Mainnet by not specifying the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#network"},(0,o.kt)("inlineCode",{parentName:"a"},"--network"))," or ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#genesis-file"},(0,o.kt)("inlineCode",{parentName:"a"},"--genesis-file"))," options."),(0,o.kt)("p",null,"Using fast sync with ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/privacy/"},"private transactions")," isn't supported."),(0,o.kt)("p",null,"You can observe the ",(0,o.kt)("inlineCode",{parentName:"p"},"besu_synchronizer_fast_sync_*")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"besu_synchronizer_world_state_*")," ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/monitor/metrics#metrics-list"},"metrics")," to monitor fast sync."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When fast syncing, block numbers increase until close to the head block, then the process pauses while the world state download completes. This may take a significant amount of time depending on world state size, during which the current head block doesn't increase. For example, Mainnet may take several days or more to fast sync. Fast sync time may increase because Besu picks new pivot blocks, or because peers prune the world state before it completes downloading.")),(0,o.kt)("admonition",{title:"RocksDB error on AWS",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When running Besu on some cloud providers, a known ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb/issues/6435"},"RocksDB")," issue causes fast sync to fail occasionally. The following error is displayed repeatedly:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"EthScheduler-Services-1 (importBlock) | ERROR | PipelineChainDownloader | Chain download failed. Restarting after short delay.\njava.util.concurrent.CompletionException: org.hyperledger.besu.plugin.services.exception.StorageException: org.rocksdb.RocksDBException: block checksum mismatch:\n")),(0,o.kt)("p",{parentName:"admonition"},"The failure has been seen on AWS and Digital Ocean. On AWS, A full restart of the VM is required to restart the fast sync. Fast sync isn't ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/CHANGELOG.md#143"},"currently supported on Digital Ocean"),".")),(0,o.kt)("admonition",{title:"Pending state nodes stays constant",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When fast syncing, the pending state nodes count is the number of nodes yet to be downloaded, and it should change constantly. Pending state nodes trend to 0 during fast sync and then goes to 0."),(0,o.kt)("p",{parentName:"admonition"},"If the number stays constant, this could mean your node isn't syncing against any peers."),(0,o.kt)("p",{parentName:"admonition"},"In the following example, the pivot block is 0 and the pending state nodes value is constant. This means the node isn't syncing against any peers. The fact that state nodes have been downloaded means at some stage it was syncing."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"Fast synchronization",src:n(94753).Z,width:"2081",height:"260"})),(0,o.kt)("p",{parentName:"admonition"},"The easiest solution in this scenario is to restart fast sync to obtain a new pivot block.")),(0,o.kt)("h2",{id:"run-an-archive-node"},"Run an archive node"),(0,o.kt)("p",null,"To run an archive node, enable full synchronization (full sync) using ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#sync-mode"},(0,o.kt)("inlineCode",{parentName:"a"},"--sync-mode=FULL")),"."),(0,o.kt)("p",null,"Full sync starts from the genesis block and reprocesses all transactions."))}d.isMDXComponent=!0},94753:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fastsync-8fadeea99996664121739a3d76a88124.png"}}]);