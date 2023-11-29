"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[84381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||s;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),s=n(86010),o=n(12466),l=n(16550),i=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,c]=m({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=i??p;return h({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,s]),tabValues:s}}var g=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},o,{className:(0,s.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=b(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",f.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},59615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),s=n(74866),o=n(85162);const l={title:"Connect to a testnet",sidebar_position:3,Description:"How to connect to a testnet",tags:["public networks"]},i="Connect to a testnet",c={unversionedId:"public-networks/get-started/connect/testnet",id:"version-23.10.2/public-networks/get-started/connect/testnet",title:"Connect to a testnet",description:"Run Besu as an execution client with any consensus client on the Goerli and Sepolia testnets.",source:"@site/versioned_docs/version-23.10.2/public-networks/get-started/connect/testnet.md",sourceDirName:"public-networks/get-started/connect",slug:"/public-networks/get-started/connect/testnet",permalink:"/public-networks/get-started/connect/testnet",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/public-networks/get-started/connect/testnet.md",tags:[{label:"public networks",permalink:"/tags/public-networks"}],version:"23.10.2",lastUpdatedAt:1701287562,formattedLastUpdatedAt:"Nov 29, 2023",sidebarPosition:3,frontMatter:{title:"Connect to a testnet",sidebar_position:3,Description:"How to connect to a testnet",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Connect to Mainnet",permalink:"/public-networks/get-started/connect/mainnet"},next:{title:"Migrate to Besu",permalink:"/public-networks/get-started/migrate-to-besu"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Generate the shared secret",id:"1-generate-the-shared-secret",level:3},{value:"2. Generate validator keys",id:"2-generate-validator-keys",level:3},{value:"3. Start Besu",id:"3-start-besu",level:3},{value:"4. Start the consensus client",id:"4-start-the-consensus-client",level:3},{value:"5. Wait for the clients to sync",id:"5-wait-for-the-clients-to-sync",level:3},{value:"6. Stake ETH",id:"6-stake-eth",level:3}],d={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect-to-a-testnet"},"Connect to a testnet"),(0,r.kt)("p",null,"Run Besu as an ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/concepts/the-merge#execution-clients"},"execution client")," with any consensus client on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eth-clients/goerli"},"Goerli")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eth-clients/sepolia"},"Sepolia")," testnets."),(0,r.kt)("p",null,"If you're using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.teku.consensys.net/en/latest/"},"Teku")," as a consensus client, you can follow the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/tutorials/besu-teku-testnet"},"Besu and Teku testnet tutorial"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Sepolia is a permissioned network and you can't run a validator client on it without ",(0,r.kt)("a",{parentName:"p",href:"https://notes.ethereum.org/zvkfSmYnT0-uxwwEegbCqg"},"requesting to become a validator")," first. You can connect your consensus client using the beacon node only, without any validator duties.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/public-networks/get-started/install/binary-distribution"},"Besu installed"),"."),(0,r.kt)("li",{parentName:"ul"},"A consensus client installed. For example, ",(0,r.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/en/latest/"},"Teku"),".")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-generate-the-shared-secret"},"1. Generate the shared secret"),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'openssl rand -hex 32 | tr -d "\\n" > jwtsecret.hex\n')),(0,r.kt)("p",null,"You will specify ",(0,r.kt)("inlineCode",{parentName:"p"},"jwtsecret.hex")," when starting Besu and the consensus client. This is a shared JWT secret the clients use to authenticate each other when using the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/how-to/use-engine-api"},"Engine API"),"."),(0,r.kt)("h3",{id:"2-generate-validator-keys"},"2. Generate validator keys"),(0,r.kt)("p",null,"If you're running the consensus client as a beacon node only, skip to the ",(0,r.kt)("a",{parentName:"p",href:"#3-start-besu"},"next step"),"."),(0,r.kt)("p",null,"If you're also running the consensus client as a validator client, create a test Ethereum address (you can do this in ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360015289452-How-to-create-an-additional-account-in-your-wallet"},"MetaMask"),"). Fund this address with testnet ETH (32 ETH and gas fees for each validator) using a faucet. See the list of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eth-clients/goerli#meta-data-g%C3%B6rli"},"Goerli faucets")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eth-clients/sepolia#meta-data-sepolia"},"Sepolia faucets"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you can't get ETH using the faucet, you can ask for help on the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.io/ethstaker"},"EthStaker Discord"),".")),(0,r.kt)("p",null,"Generate validator keys for one or more validators using the ",(0,r.kt)("a",{parentName:"p",href:"https://goerli.launchpad.ethereum.org/"},"Goerli Staking Launchpad")," (or ",(0,r.kt)("a",{parentName:"p",href:"https://notes.ethereum.org/zvkfSmYnT0-uxwwEegbCqg"},"request to become validator on Sepolia"),")."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Save the password you use to generate each key pair in a ",(0,r.kt)("inlineCode",{parentName:"p"},".txt")," file. You should also have a ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file for each validator key pair.")),(0,r.kt)("h3",{id:"3-start-besu"},"3. Start Besu"),(0,r.kt)("p",null,"Run the following command or specify the options in a ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/how-to/configuration-file"},"configuration file"),":"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Goerli",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu \\\n  --network=goerli            \\\n  --rpc-http-enabled=true     \\\n  --rpc-http-host=0.0.0.0     \\\n  --rpc-http-cors-origins="*" \\\n  --rpc-ws-enabled=true       \\\n  --rpc-ws-host=0.0.0.0       \\\n  --host-allowlist="*"        \\\n  --engine-host-allowlist="*" \\\n  --engine-rpc-enabled        \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n'))),(0,r.kt)(o.Z,{label:"Holesky",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu \\\n  --network=holesky           \\\n  --rpc-http-enabled=true     \\\n  --rpc-http-host=0.0.0.0     \\\n  --rpc-http-cors-origins="*" \\\n  --rpc-ws-enabled=true       \\\n  --rpc-ws-host=0.0.0.0       \\\n  --host-allowlist="*"        \\\n  --engine-host-allowlist="*" \\\n  --engine-rpc-enabled        \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n'))),(0,r.kt)(o.Z,{label:"Sepolia",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu \\\n  --network=sepolia           \\\n  --rpc-http-enabled=true     \\\n  --rpc-http-host=0.0.0.0     \\\n  --rpc-http-cors-origins="*" \\\n  --rpc-ws-enabled=true       \\\n  --rpc-ws-host=0.0.0.0       \\\n  --host-allowlist="*"        \\\n  --engine-host-allowlist="*" \\\n  --engine-rpc-enabled        \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n')))),(0,r.kt)("p",null,"Specify the path to the ",(0,r.kt)("inlineCode",{parentName:"p"},"jwtsecret.hex")," file generated in ",(0,r.kt)("a",{parentName:"p",href:"#1-generate-the-shared-secret"},"step 1")," using the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#engine-jwt-secret"},(0,r.kt)("inlineCode",{parentName:"a"},"--engine-jwt-secret"))," option."),(0,r.kt)("p",null,"You can modify the option values and add other ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options"},"command line options")," as needed."),(0,r.kt)("h3",{id:"4-start-the-consensus-client"},"4. Start the consensus client"),(0,r.kt)("p",null,"Refer to your consensus client documentation to configure and start the consensus client."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you're running a validator client, make sure you set a fee recipient address.")),(0,r.kt)("p",null,"If you're using Teku, follow the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/tutorials/besu-teku-testnet#5-start-teku"},"Besu and Teku testnet tutorial"),"."),(0,r.kt)("h3",{id:"5-wait-for-the-clients-to-sync"},"5. Wait for the clients to sync"),(0,r.kt)("p",null,"After starting Besu and the consensus client, your node starts syncing and connecting to peers."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Besu logs",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{"@timestamp":"2023-02-03T04:43:49,555","level":"INFO","thread":"main","class":"DefaultSynchronizer","message":"Starting synchronizer.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,556","level":"INFO","thread":"main","class":"FastSyncDownloader","message":"Starting sync","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,559","level":"INFO","thread":"main","class":"Runner","message":"Ethereum main loop is up.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:53,106","level":"INFO","thread":"Timer-0","class":"DNSResolver","message":"Resolved 2409 nodes","throwable":""}\n{"@timestamp":"2023-02-03T04:45:04,803","level":"INFO","thread":"nioEventLoopGroup-3-10","class":"SnapWorldStateDownloader","message":"Downloading world state from peers for pivot block 16545859 (0x616ae3c4cf85f95a9bce2814a7282d75dc2eac36\ncb9f0fcc6f16386df70da3c5). State root 0xa7114541f42c62a72c8b6bb9901c2ccf4b424cd7f76570a67b82a183b02f25dc pending requests 0","throwable":""}\n{"@timestamp":"2023-02-03T04:46:04,834","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.08%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:48:01,840","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.23%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:49:09,931","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.41%, Peer count: 11","throwable":""}\n{"@timestamp":"2023-02-03T04:50:12,466","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.61%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:20,977","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.75%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:28,985","level":"INFO","thread":"EthScheduler-Services-29 (importBlock)","class":"FastImportBlocksStep","message":"Block import progress: 180400 of 16545859 (1%)","throwable":""}\n'))),(0,r.kt)(o.Z,{label:"Teku logs",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"2022-03-21 20:43:24.355 INFO  - Syncing     *** Target slot: 76092, Head slot: 2680, Remaining slots: 73412, Connected peers: 8\n2022-03-21 20:43:36.363 INFO  - Syncing     *** Target slot: 76093, Head slot: 2879, Remaining slots: 73214, Connected peers: 10\n2022-03-21 20:43:48.327 INFO  - Syncing     *** Target slot: 76094, Head slot: 3080, Remaining slots: 73014, Connected peers: 8\n2022-03-21 20:44:00.339 INFO  - Syncing     *** Target slot: 76095, Head slot: 3317, Remaining slots: 72778, Connected peers: 6\n2022-03-21 20:44:12.353 INFO  - Syncing     *** Target slot: 76096, Head slot: 3519, Remaining slots: 72577, Connected peers: 9\n")))),(0,r.kt)("p",null,"If you're running the consensus client as a beacon node only, you're all set. If you're also running the consensus client as a validator client, ensure your clients are fully synced before submitting your staking deposit in the next step. This can take several days."),(0,r.kt)("h3",{id:"6-stake-eth"},"6. Stake ETH"),(0,r.kt)("p",null,"Stake your testnet ETH for one or more validators using the ",(0,r.kt)("a",{parentName:"p",href:"https://goerli.launchpad.ethereum.org/"},"Goerli Staking Launchpad"),"."),(0,r.kt)("p",null,"You can check your validator status by searching your Ethereum address on the ",(0,r.kt)("a",{parentName:"p",href:"https://goerli.beaconcha.in/"},"Goerli Beacon Chain explorer"),". It may take up to multiple days for your validator to be activated and start proposing blocks."))}m.isMDXComponent=!0}}]);