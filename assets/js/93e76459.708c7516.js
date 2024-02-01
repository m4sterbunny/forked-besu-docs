"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[75777],{92280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(85893),s=n(11151);const a={description:"Hyperledger Besu privacy-enabled private network tutorial",tags:["private networks"]},o="Create a privacy-enabled network using the Quorum Developer Quickstart",i={id:"private-networks/tutorials/privacy/quickstart",title:"Create a privacy-enabled network using the Quorum Developer Quickstart",description:"Hyperledger Besu privacy-enabled private network tutorial",source:"@site/docs/private-networks/tutorials/privacy/quickstart.md",sourceDirName:"private-networks/tutorials/privacy",slug:"/private-networks/tutorials/privacy/quickstart",permalink:"/development/private-networks/tutorials/privacy/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/tutorials/privacy/quickstart.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1706814058,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{description:"Hyperledger Besu privacy-enabled private network tutorial",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use the web3js-quorum multi-node example",permalink:"/development/private-networks/tutorials/privacy/web3js-quorum"},next:{title:"Create a permissioned network",permalink:"/development/private-networks/tutorials/permissioning/"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Docker-compose file",id:"create-docker-compose-file",level:2},{value:"Usage",id:"usage",level:2},{value:"Start the network",id:"start-the-network",level:2},{value:"Deploy the private contract and interact with the nodes",id:"deploy-the-private-contract-and-interact-with-the-nodes",level:2},{value:"Further examples",id:"further-examples",level:2},{value:"Stop the network",id:"stop-the-network",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"create-a-privacy-enabled-network-using-the-quorum-developer-quickstart",children:"Create a privacy-enabled network using the Quorum Developer Quickstart"}),"\n",(0,r.jsxs)(t.p,{children:["You can create a privacy-enabled network using the ",(0,r.jsx)(t.a,{href:"/development/private-networks/tutorials/quickstart",children:"Quorum Developer Quickstart"}),". It runs a private Hyperledger Besu network that uses ",(0,r.jsx)(t.a,{href:"https://docs.tessera.consensys.net/en/stable/",children:"Tessera"})," as its private transaction manager."]}),"\n",(0,r.jsxs)(t.p,{children:["You can use the ",(0,r.jsx)(t.a,{href:"/development/private-networks/tutorials/quickstart#block-explorer",children:"Block Explorer"}),", make ",(0,r.jsx)(t.a,{href:"/development/private-networks/tutorials/quickstart#run-json-rpc-requests",children:"JSON-RPC requests"}),", and ",(0,r.jsx)(t.a,{href:"/development/private-networks/tutorials/quickstart#create-a-transaction-using-metamask",children:"create transactions using MetaMask"}),". This tutorial describes how to make private transactions between nodes, and perform read and write operations on private contracts."]}),"\n",(0,r.jsx)(t.admonition,{type:"important",children:(0,r.jsx)(t.p,{children:"This tutorial runs a private network suitable for education or demonstration purposes and is not intended for running production networks."})}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"To run this tutorial, you must have the following installed:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://docs.docker.com/compose/install/",children:"Docker and Docker-compose"})}),"\n",(0,r.jsx)(t.admonition,{type:"important",children:(0,r.jsxs)(t.p,{children:["If using ",(0,r.jsx)(t.a,{href:"https://docs.docker.com/docker-for-mac/",children:"MacOS"})," or ",(0,r.jsx)(t.a,{href:"https://docs.docker.com/docker-for-windows/",children:"Windows"}),", enable Docker to use up to 6GB of memory on the ",(0,r.jsx)(t.em,{children:"Advanced"})," tab in ",(0,r.jsx)(t.em,{children:"Preferences"}),"."]})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://nodejs.org/en/download/",children:"Nodejs"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://git-scm.com/",children:"Git command line"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://curl.haxx.se/download.html",children:"Curl command line"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"create-docker-compose-file",children:"Create Docker-compose file"}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.p,{children:"To create the docker-compose file and artifacts, run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx quorum-dev-quickstart\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Follow the prompts displayed to run Hyperledger Besu, private transactions, and ",(0,r.jsx)(t.a,{href:"/development/private-networks/how-to/monitor/elastic-stack",children:"logging with ELK"}),". Enter ",(0,r.jsx)(t.code,{children:"n"})," for ",(0,r.jsx)(t.a,{href:"https://docs.orchestrate.consensys.net/en/stable/",children:"Codefi Orchestrate"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"start-the-network",children:"Start the network"}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"If running in Windows, please run commands from the GitBash shell"})}),"\n",(0,r.jsx)(t.p,{children:"In the installation directory, start the network:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"./run.sh\n"})}),"\n",(0,r.jsx)(t.p,{children:"The script pulls the Docker images starts the network. Pulling the images takes a few minutes the first time. The network details display."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"*************************************\nQuorum Dev Quickstart\n*************************************\nSetting up the index patterns in kibana .................\n----------------------------------\nList endpoints and services\n----------------------------------\nJSON-RPC HTTP service endpoint      : http://localhost:8545\nJSON-RPC WebSocket service endpoint : ws://localhost:8546\nWeb block explorer address          : http://localhost:25000/\nPrometheus address                  : http://localhost:9090/graph\nGrafana address                     : http://localhost:3000/d/XE4V0WGZz/besu-overview?orgId=1&refresh=10s&from=now-30m&to=now&var-system=All\nCollated logs using Kibana endpoint : http://localhost:5601/app/kibana#/discover\n\nFor more information on the endpoints and services, refer to README.md in the installation directory.\n****************************************************************\n"})}),"\n",(0,r.jsx)(t.h2,{id:"deploy-the-private-contract-and-interact-with-the-nodes",children:"Deploy the private contract and interact with the nodes"}),"\n",(0,r.jsxs)(t.p,{children:["To deploy a private contract to another ",(0,r.jsx)(t.a,{href:"/development/private-networks/concepts/privacy/privacy-groups",children:"privacy group"})," member, use the ",(0,r.jsx)(t.a,{href:"https://consensys.github.io/web3js-quorum/latest/index.html",children:"web3js-quorum"})," library and the ",(0,r.jsx)(t.a,{href:"/development/private-networks/reference/api/#eea_sendrawtransaction",children:(0,r.jsx)(t.code,{children:"eea_sendRawTransaction"})})," API call. You must use this API call instead of ",(0,r.jsx)(t.a,{href:"https://ethereum.github.io/execution-apis/api-documentation",children:(0,r.jsx)(t.code,{children:"eth_sendTransaction"})})," because Hyperledger Besu keeps account management separate for stronger security."]}),"\n",(0,r.jsxs)(t.p,{children:["This example uses the ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/web3",children:"web3js"})," library to make the API calls, the example creates three Besu nodes, with each node having a corresponding Tessera node for privacy. You can access the Besu member nodes for API calls on the following ports:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"Member1Besu RPC: http://localhost:20000\nMember1Tessera: http://localhost:9081\n\nMember2Besu RPC: http://localhost:20002\nMember2Tessera: http://localhost:9082\n\nMember3Besu RPC: http://localhost:20004\nMember3Tessera: http://localhost:9083\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Navigate to the ",(0,r.jsx)(t.code,{children:"smart_contracts"})," directory and deploy the private transaction:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd smart_contracts\nnpm install\nnode scripts/private/private_tx.js\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The script deploys the contract and sends an arbitrary value (47) from ",(0,r.jsx)(t.code,{children:"Member1"})," to ",(0,r.jsx)(t.code,{children:"Member3"}),". Once done, it queries all three members (Tessera) to check the value at an address. Only ",(0,r.jsx)(t.code,{children:"Member1"})," & ",(0,r.jsx)(t.code,{children:"Member3"})," has this information as they were involved in the transaction, ",(0,r.jsx)(t.code,{children:"Member2"})," responds with a ",(0,r.jsx)(t.code,{children:"0x"})," to indicate it is unaware of the transaction."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"node scripts/private/private_tx.js\nCreating contract...\nGetting contractAddress from txHash:  0xc1b57f6a7773fe887afb141a09a573d19cb0fdbb15e0f2b9ed0dfead6f5b5dbf\nWaiting for transaction to be mined ...\nAddress of transaction: 0x8220ca987f7bb7f99815d0ef64e1d8a072a2c167\nUse the smart contracts 'get' function to read the contract's constructor initialized value ..\nWaiting for transaction to be mined ...\nMember1 value from deployed contract is: 0x000000000000000000000000000000000000000000000000000000000000002f\nUse the smart contracts 'set' function to update that value to 123 .. - from member1 to member3\nTransaction hash: 0x387c6627fe87e235b0f2bbbe1b2003a11b54afc737dca8da4990d3de3197ac5f\nWaiting for transaction to be mined ...\nVerify the private transaction is private by reading the value from all three members ..\nWaiting for transaction to be mined ...\nMember1 value from deployed contract is: 0x000000000000000000000000000000000000000000000000000000000000007b\nWaiting for transaction to be mined ...\nMember2 value from deployed contract is: 0x\nWaiting for transaction to be mined ...\nMember3 value from deployed contract is: 0x000000000000000000000000000000000000000000000000000000000000007b\n"})}),"\n",(0,r.jsx)(t.p,{children:"The general contract deployment flow is:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Deploy a contract, which returns a transaction hash."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Obtain the privacy transaction receipt from the transaction hash."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Use the contract address in the privacy transaction receipt to ",(0,r.jsx)(t.a,{href:"/development/private-networks/tutorials/contracts/interact",children:"interact with the contract"})," from that point on."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"further-examples",children:"Further examples"}),"\n",(0,r.jsxs)(t.p,{children:["View the ",(0,r.jsx)(t.a,{href:"/development/private-networks/tutorials/privacy/web3js-quorum",children:"web3js-quorum client library example"})," and view the ",(0,r.jsx)(t.a,{href:"https://github.com/ConsenSys/web3js-quorum/tree/master/example",children:"sample code examples"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can also test the erc20 token example by executing ",(0,r.jsx)(t.code,{children:"erc20.js"})," which deploys a ",(0,r.jsx)(t.code,{children:"HumanStandardToken"})," contract and transfers 1 token to Node2."]}),"\n",(0,r.jsxs)(t.p,{children:["This can be verified from the ",(0,r.jsx)(t.code,{children:"data"})," field of the ",(0,r.jsx)(t.code,{children:"logs"})," which is ",(0,r.jsx)(t.code,{children:"1"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"stop-the-network",children:"Stop the network"}),"\n",(0,r.jsx)(t.p,{children:"Do one of the following to stop the network:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Stop the network:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"./stop.sh\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Stop the network and remove the containers and volumes:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"./remove.sh\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(67294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);