"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[23114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,u=d["".concat(p,".").concat(h)]||d[h]||m[h]||i;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={title:"Get started with onchain permissioning",sidebar_position:1,description:"Setting up and using Hyperledger Besu onchain permissioning",tags:["private networks"]},r="Get started with onchain permissioning",s={unversionedId:"private-networks/tutorials/permissioning/onchain",id:"private-networks/tutorials/permissioning/onchain",title:"Get started with onchain permissioning",description:"Setting up and using Hyperledger Besu onchain permissioning",source:"@site/docs/private-networks/tutorials/permissioning/onchain.md",sourceDirName:"private-networks/tutorials/permissioning",slug:"/private-networks/tutorials/permissioning/onchain",permalink:"/development/private-networks/tutorials/permissioning/onchain",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/tutorials/permissioning/onchain.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1698376077,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:1,frontMatter:{title:"Get started with onchain permissioning",sidebar_position:1,description:"Setting up and using Hyperledger Besu onchain permissioning",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a permissioned network",permalink:"/development/private-networks/tutorials/permissioning/"},next:{title:"Upgrade permissioning contracts",permalink:"/development/private-networks/tutorials/permissioning/upgrade-contracts"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create folders",id:"1-create-folders",level:3},{value:"2. Create the configuration file",id:"2-create-the-configuration-file",level:3},{value:"3. Generate node keys and a genesis file",id:"3-generate-node-keys-and-a-genesis-file",level:3},{value:"4. Copy the genesis file to the Permissioned-Network directory",id:"4-copy-the-genesis-file-to-the-permissioned-network-directory",level:3},{value:"5. Add the Ingress contracts to the genesis file",id:"5-add-the-ingress-contracts-to-the-genesis-file",level:3},{value:"6. Copy the node private keys to the node directories",id:"6-copy-the-node-private-keys-to-the-node-directories",level:3},{value:"7. Start Node-1",id:"7-start-node-1",level:3},{value:"8. Start Node-2",id:"8-start-node-2",level:3},{value:"9. Start Node-3",id:"9-start-node-3",level:3},{value:"10. Start Node-4",id:"10-start-node-4",level:3},{value:"11. Clone the contracts and install dependencies",id:"11-clone-the-contracts-and-install-dependencies",level:3},{value:"12. Set the environment variables",id:"12-set-the-environment-variables",level:3},{value:"13. Deploy the contracts",id:"13-deploy-the-contracts",level:3}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-started-with-onchain-permissioning"},"Get started with onchain permissioning"),(0,o.kt)("p",null,"The following steps describe bootstrapping a permissioned network using a Hyperledger Besu node."),(0,o.kt)("p",null,"This tutorial configures permissioning on a ",(0,o.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/consensus/ibft"},"IBFT 2.0 proof of authority (PoA)")," network."),(0,o.kt)("admonition",{title:"Please use this as reference material only!",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/permissioning-smart-contracts"},"permissioning-contract-repo")," has been archived and is intended as reference material only.\nPlease update all dependencies in there before proceeding. "),(0,o.kt)("p",{parentName:"admonition"},"In addition, we also recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-runner/docs/guides/deploying"},"Hardhat")," instead of ",(0,o.kt)("a",{parentName:"p",href:"https://trufflesuite.com/"},"Truffle"),",\nas the development environment. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/development/private-networks/tutorials/quickstart"},"Quorum Dev Quickstart")," for an example.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," v10.16.0 or later"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/en/"},"Yarn")," v1.15 or later"),(0,o.kt)("li",{parentName:"ul"},"Browser with ",(0,o.kt)("a",{parentName:"li",href:"https://metamask.io/"},"MetaMask installed"))),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"1-create-folders"},"1. Create folders"),(0,o.kt)("p",null,"Each node requires a data directory for the blockchain data."),(0,o.kt)("p",null,"Create directories for your permissioned network and each of the three nodes, and a data directory for each node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Permissioned-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-4\n    \u251c\u2500\u2500 data\n")),(0,o.kt)("h3",{id:"2-create-the-configuration-file"},"2. Create the configuration file"),(0,o.kt)("p",null,"The configuration file defines the ",(0,o.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/consensus/ibft#genesis-file"},"IBFT 2.0 genesis file")," and the number of node key pairs to generate."),(0,o.kt)("p",null,"The configuration file has two nested JSON nodes. The first is the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis")," property defining the IBFT 2.0 genesis file, except for the ",(0,o.kt)("inlineCode",{parentName:"p"},"extraData")," string, which Besu generates automatically in the resulting genesis file. The second is the ",(0,o.kt)("inlineCode",{parentName:"p"},"blockchain")," property defining the number of key pairs to generate."),(0,o.kt)("p",null,"Copy the following configuration file definition to a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"ibftConfigFile.json")," and save it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Permissioned-Network")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "genesis": {\n    "config": {\n      "chainId": 1337,\n      "berlinBlock": 0,\n      "ibft2": {\n        "blockperiodseconds": 2,\n        "epochlength": 30000,\n        "requesttimeoutseconds": 4\n      }\n    },\n    "nonce": "0x0",\n    "timestamp": "0x58ee40ba",\n    "gasLimit": "0x47b760",\n    "difficulty": "0x1",\n    "mixHash": "0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365",\n    "coinbase": "0x0000000000000000000000000000000000000000",\n    "alloc": {\n      "fe3b557e8fb62b89f4916b721be55ceb828dbd73": {\n        "privateKey": "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "0xad78ebc5ac6200000"\n      },\n      "627306090abaB3A6e1400e9345bC60c78a8BEf57": {\n        "privateKey": "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "90000000000000000000000"\n      },\n      "f17f52151EbEF6C7334FAD080c5704D77216b732": {\n        "privateKey": "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "90000000000000000000000"\n      }\n    }\n  },\n  "blockchain": {\n    "nodes": {\n      "generate": true,\n      "count": 4\n    }\n  }\n}\n')),(0,o.kt)("p",null,":::critical Security warning"),(0,o.kt)("p",null,"Don't use the accounts in the genesis file on Mainnet or any public network except for testing. The private keys display, which means the accounts are not secure."),(0,o.kt)("p",null,":::"),(0,o.kt)("h3",{id:"3-generate-node-keys-and-a-genesis-file"},"3. Generate node keys and a genesis file"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Permissioned-Network")," directory, generate the node key and genesis file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"besu operator generate-blockchain-config --config-file=ibftConfigFile.json --to=networkFiles --private-key-file-name=key\n")),(0,o.kt)("p",null,"Besu creates the following in the ",(0,o.kt)("inlineCode",{parentName:"p"},"networkFiles")," directory:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"genesis.json")," - The genesis file including the ",(0,o.kt)("inlineCode",{parentName:"li"},"extraData")," property specifying the four nodes are validators."),(0,o.kt)("li",{parentName:"ul"},"A directory for each node named using the node address and containing the public and private key for each node.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"networkFiles/\n\u251c\u2500\u2500 genesis.json\n\u2514\u2500\u2500 keys\n    \u251c\u2500\u2500 0x438821c42b812fecdcea7fe8235806a412712fc0\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u251c\u2500\u2500 0xca9c2dfa62f4589827c0dd7dcf48259aa29f22f5\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u251c\u2500\u2500 0xcd5629bd37155608a0c9b28c4fd19310d53b3184\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u2514\u2500\u2500 0xe96825c5ab8d145b9eeca1aba7ea3695e034911a\n        \u251c\u2500\u2500 key\n        \u2514\u2500\u2500 key.pub\n")),(0,o.kt)("h3",{id:"4-copy-the-genesis-file-to-the-permissioned-network-directory"},"4. Copy the genesis file to the Permissioned-Network directory"),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Permisssioned-Network")," directory."),(0,o.kt)("h3",{id:"5-add-the-ingress-contracts-to-the-genesis-file"},"5. Add the Ingress contracts to the genesis file"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If the network is using only account or node permissioning, add only the relevant Ingress contract to the genesis file.")),(0,o.kt)("p",null,"Add the Ingress contracts to the genesis file for your network by copying them from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/permissioning-smart-contracts/blob/e6c2d4d5a728c11cdb8e97a07ddda3c0bfb57b5d/genesis.json"},(0,o.kt)("inlineCode",{parentName:"a"},"genesis.json"))," in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/permissioning-smart-contracts"},(0,o.kt)("inlineCode",{parentName:"a"},"permissioning-smart-contracts")," repository")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"alloc")," section of the contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"0x0000000000000000000000000000000000008888": {\n      "comment": "Account Ingress smart contract",\n      "balance": "0",\n      "code": <stripped>,\n      "storage": {\n        <stripped>\n      }\n}\n\n"0x0000000000000000000000000000000000009999": {\n      "comment": "Node Ingress smart contract",\n      "balance": "0",\n      "code": <stripped>,\n      "storage": {\n        <stripped>\n      }\n}\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To support the permissioning contracts, ensure your genesis file includes at least the ",(0,o.kt)("inlineCode",{parentName:"p"},"constantinopleFixBlock")," milestone."),(0,o.kt)("p",{parentName:"admonition"},"The permissioning contract has multiple interfaces, and each interface maps to a specific version of the ",(0,o.kt)("a",{parentName:"p",href:"https://entethalliance.org/technical-specifications/"},"Enterprise Ethereum Alliance Client Specification"),". Ensure that you specify the ",(0,o.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/use-permissioning/onchain"},"permissioning contract interface")," being used when starting Besu.")),(0,o.kt)("h3",{id:"6-copy-the-node-private-keys-to-the-node-directories"},"6. Copy the node private keys to the node directories"),(0,o.kt)("p",null,"For each node, copy the key files to the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," directory for that node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Permissioned-Network/\n\u251c\u2500\u2500 genesis.json\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-4\n\u2502   \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n")),(0,o.kt)("h3",{id:"7-start-node-1"},"7. Start Node-1"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The specified node must be producing blocks, that is, be a miner (PoW networks) or validator (PoA networks)."),(0,o.kt)("p",{parentName:"admonition"},"To allow MetaMask to connect, the node must have JSON-RPC HTTP enabled, and have ",(0,o.kt)("inlineCode",{parentName:"p"},"--rpc-http-cors-origins")," set to allow MetaMask."),(0,o.kt)("p",{parentName:"admonition"},"If your network is not a ",(0,o.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/free-gas"},"free gas network"),", the account used to interact with the permissioning contracts must have a balance.")),(0,o.kt)("p",null,"Start the first node with command line options to enable onchain permissioning and the location of the ",(0,o.kt)("strong",{parentName:"p"},"data")," folder and genesis file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},'besu --data-path=data --genesis-file=../genesis.json --permissions-accounts-contract-enabled --permissions-accounts-contract-address "0x0000000000000000000000000000000000008888" --permissions-nodes-contract-enabled  --permissions-nodes-contract-address "0x0000000000000000000000000000000000009999" --permissions-nodes-contract-version=2 --rpc-http-enabled --rpc-http-cors-origins="*" --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*"\n')),(0,o.kt)("p",null,"On the command line:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable onchain accounts permissioning using ",(0,o.kt)("a",{parentName:"li",href:"/development/private-networks/reference/cli/options#permissions-accounts-contract-enabled"},(0,o.kt)("inlineCode",{parentName:"a"},"--permissions-accounts-contract-enabled")),"."),(0,o.kt)("li",{parentName:"ul"},"Set the address of the Account Ingress contract in the genesis file using ",(0,o.kt)("a",{parentName:"li",href:"/development/private-networks/reference/cli/options#permissions-accounts-contract-address"},(0,o.kt)("inlineCode",{parentName:"a"},"--permissions-accounts-contract-address")),"."),(0,o.kt)("li",{parentName:"ul"},"Enable onchain nodes permissioning using ",(0,o.kt)("a",{parentName:"li",href:"/development/private-networks/reference/cli/options#permissions-nodes-contract-enabled"},(0,o.kt)("inlineCode",{parentName:"a"},"--permissions-nodes-contract-enabled")),"."),(0,o.kt)("li",{parentName:"ul"},"Set the address of the Node Ingress contract in the genesis file using ",(0,o.kt)("a",{parentName:"li",href:"/development/private-networks/reference/cli/options#permissions-nodes-contract-address"},(0,o.kt)("inlineCode",{parentName:"a"},"--permissions-nodes-contract-address")),"."),(0,o.kt)("li",{parentName:"ul"},"Set the version of the ",(0,o.kt)("a",{parentName:"li",href:"/development/private-networks/how-to/use-permissioning/onchain#specify-the-permissioning-contract-interface-version"},"permissioning contract interface")," using ",(0,o.kt)("a",{parentName:"li",href:"/development/private-networks/reference/cli/options#permissions-nodes-contract-version"},(0,o.kt)("inlineCode",{parentName:"a"},"--permissions-nodes-contract-version")),"."),(0,o.kt)("li",{parentName:"ul"},"Enable the JSON-RPC API using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-enabled"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-http-enabled")),"."),(0,o.kt)("li",{parentName:"ul"},"Enable the ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ETH"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"NET"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"PERM"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"IBFT")," APIs using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-api"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-http-api")),"."),(0,o.kt)("li",{parentName:"ul"},"Allow all-host access to the HTTP JSON-RPC API using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#host-allowlist"},(0,o.kt)("inlineCode",{parentName:"a"},"--host-allowlist")),"."),(0,o.kt)("li",{parentName:"ul"},"Allow all-domain access to the node through the HTTP JSON-RPC API using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-cors-origins"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-http-cors-origins")),".")),(0,o.kt)("p",null,"When the node starts, the ",(0,o.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/node-keys#enode-url"},"enode URL")," displays. Copy the enode URL to use when starting Node-2, Node-3, and Node-4."),(0,o.kt)("h3",{id:"8-start-node-2"},"8. Start Node-2"),(0,o.kt)("p",null,"Use the following command to start Node-2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --permissions-accounts-contract-enabled --permissions-accounts-contract-address "0x0000000000000000000000000000000000008888" --permissions-nodes-contract-enabled  --permissions-nodes-contract-address "0x0000000000000000000000000000000000009999" --permissions-nodes-contract-version=2 --rpc-http-enabled --rpc-http-cors-origins="*" --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --p2p-port=30304 --rpc-http-port=8546\n')),(0,o.kt)("p",null,"The command line specifies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A different port to Node-1 for P2P discovery using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#p2p-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--p2p-port")),"."),(0,o.kt)("li",{parentName:"ul"},"A different port to Node-1 for HTTP JSON-RPC using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-http-port")),"."),(0,o.kt)("li",{parentName:"ul"},"The enode URL of Node-1 using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#bootnodes"},(0,o.kt)("inlineCode",{parentName:"a"},"--bootnodes")),"."),(0,o.kt)("li",{parentName:"ul"},"Other options as for ",(0,o.kt)("a",{parentName:"li",href:"#7-start-node-1"},"Node-1"),".")),(0,o.kt)("h3",{id:"9-start-node-3"},"9. Start Node-3"),(0,o.kt)("p",null,"Use the following command to start Node-3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --permissions-accounts-contract-enabled --permissions-accounts-contract-address "0x0000000000000000000000000000000000008888" --permissions-nodes-contract-enabled  --permissions-nodes-contract-address "0x0000000000000000000000000000000000009999" --permissions-nodes-contract-version=2 --rpc-http-enabled --rpc-http-cors-origins="*" --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --p2p-port=30305 --rpc-http-port=8547\n')),(0,o.kt)("p",null,"The command line specifies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A different port to Node-1 and Node-2 for P2P discovery using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#p2p-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--p2p-port")),"."),(0,o.kt)("li",{parentName:"ul"},"A different port to Node-1 and Node-2 for HTTP JSON-RPC using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-http-port")),"."),(0,o.kt)("li",{parentName:"ul"},"The enode URL of Node-1 using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#bootnodes"},(0,o.kt)("inlineCode",{parentName:"a"},"--bootnodes")),"."),(0,o.kt)("li",{parentName:"ul"},"Other options as for ",(0,o.kt)("a",{parentName:"li",href:"#7-start-node-1"},"Node-1"),".")),(0,o.kt)("h3",{id:"10-start-node-4"},"10. Start Node-4"),(0,o.kt)("p",null,"Use the following command to start Node-4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --permissions-accounts-contract-enabled --permissions-accounts-contract-address "0x0000000000000000000000000000000000008888" --permissions-nodes-contract-enabled  --permissions-nodes-contract-address "0x0000000000000000000000000000000000009999" --permissions-nodes-contract-version=2 --rpc-http-enabled --rpc-http-cors-origins="*" --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --p2p-port=30306 --rpc-http-port=8548\n')),(0,o.kt)("p",null,"The command line specifies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A different port to Node-1, Node-2, and Node-3 for P2P discovery using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#p2p-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--p2p-port")),"."),(0,o.kt)("li",{parentName:"ul"},"A different port to Node-1, Node-2, and Node-3 for HTTP JSON-RPC using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-http-port")),"."),(0,o.kt)("li",{parentName:"ul"},"The enode URL of Node-1 using ",(0,o.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#bootnodes"},(0,o.kt)("inlineCode",{parentName:"a"},"--bootnodes")),"."),(0,o.kt)("li",{parentName:"ul"},"Other options as for ",(0,o.kt)("a",{parentName:"li",href:"#7-start-node-1"},"Node-1"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If your nodes are having trouble connecting as peers, update the ",(0,o.kt)("inlineCode",{parentName:"p"},"--bootnodes")," option for each node to include all four enode URLs.")),(0,o.kt)("h3",{id:"11-clone-the-contracts-and-install-dependencies"},"11. Clone the contracts and install dependencies"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("inlineCode",{parentName:"p"},"permissioning-smart-contracts")," repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ConsenSys/permissioning-smart-contracts.git\n")),(0,o.kt)("p",null,"Change into the ",(0,o.kt)("inlineCode",{parentName:"p"},"permissioning-smart-contracts")," directory."),(0,o.kt)("h3",{id:"12-set-the-environment-variables"},"12. Set the environment variables"),(0,o.kt)("p",null,"Create the following environment variables and set to the specified values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BESU_NODE_PERM_ACCOUNT")," - Account to deploy the permissioning contracts and become the first admin account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BESU_NODE_PERM_KEY")," - Private key of the account to deploy the permissioning contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ACCOUNT_INGRESS_CONTRACT_ADDRESS")," - Address of the Account Ingress contract in the genesis file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NODE_INGRESS_CONTRACT_ADDRESS")," - Address of the Node Ingress contract in the genesis file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BESU_NODE_PERM_ENDPOINT")," - Required only if your node is not using the default JSON-RPC host and port (",(0,o.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:8545"),"). Set to JSON-RPC host and port. When bootstrapping the network, Besu uses the specified node to deploy the contracts and is the first node in the network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CHAIN_ID")," - The chain ID from the genesis file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"INITIAL_ALLOWLISTED_NODES"),"(optional) - The enode URLs of permitted nodes. Specify multiple nodes (Node-1, Node-2, Node-3) as a comma-separated list.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"A simple way to set multiple environment variables is to create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," with the required settings:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-env"},"NODE_INGRESS_CONTRACT_ADDRESS=0x0000000000000000000000000000000000009999\nACCOUNT_INGRESS_CONTRACT_ADDRESS=0x0000000000000000000000000000000000008888\nBESU_NODE_PERM_ACCOUNT=627306090abaB3A6e1400e9345bC60c78a8BEf57\nBESU_NODE_PERM_KEY=c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3\nBESU_NODE_PERM_ENDPOINT=http://127.0.0.1:8545\nCHAIN_ID=1337\nINITIAL_ALLOWLISTED_NODES=enode://c35c3...d615f@1.2.3.4:30303,enode://f42c13...fc456@1.2.3.5:30303\n")),(0,o.kt)("p",{parentName:"admonition"},"If using a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, save the file to the ",(0,o.kt)("inlineCode",{parentName:"p"},"permissioning-smart-contracts")," directory.")),(0,o.kt)("h3",{id:"13-deploy-the-contracts"},"13. Deploy the contracts"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"permissioning-smart-contracts")," directory, while your network is running, deploy the Admin and Rules contracts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn truffle migrate --reset --network besu\n")),(0,o.kt)("p",null,"This also updates the Ingress contract with the name and version of the Admin and Rules contracts. The migration logs the addresses of the Admin and Rules contracts."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"The account that deploys the contracts is automatically an admin account.")))}d.isMDXComponent=!0}}]);