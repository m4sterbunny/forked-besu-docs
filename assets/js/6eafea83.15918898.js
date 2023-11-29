"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[33378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41848:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Using the Quorum Explorer",sidebar_position:4,description:"Using the Quorum Explorer on a Kubernetes cluster"},l="Use the Quorum Explorer",i={unversionedId:"private-networks/tutorials/kubernetes/quorum-explorer",id:"version-23.4.0/private-networks/tutorials/kubernetes/quorum-explorer",title:"Using the Quorum Explorer",description:"Using the Quorum Explorer on a Kubernetes cluster",source:"@site/versioned_docs/version-23.4.0/private-networks/tutorials/kubernetes/quorum-explorer.md",sourceDirName:"private-networks/tutorials/kubernetes",slug:"/private-networks/tutorials/kubernetes/quorum-explorer",permalink:"/23.4.0/private-networks/tutorials/kubernetes/quorum-explorer",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/tutorials/kubernetes/quorum-explorer.md",tags:[],version:"23.4.0",lastUpdatedAt:1701300072,formattedLastUpdatedAt:"Nov 29, 2023",sidebarPosition:4,frontMatter:{title:"Using the Quorum Explorer",sidebar_position:4,description:"Using the Quorum Explorer on a Kubernetes cluster"},sidebar:"privateDocSidebar",previous:{title:"Deploying Charts",permalink:"/23.4.0/private-networks/tutorials/kubernetes/charts"},next:{title:"Maintenance",permalink:"/23.4.0/private-networks/tutorials/kubernetes/maintenance"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy the Quorum Explorer helm chart",id:"deploy-the-quorum-explorer-helm-chart",level:2},{value:"Nodes",id:"nodes",level:2},{value:"Validators",id:"validators",level:2},{value:"Explorer",id:"explorer",level:2},{value:"Contracts",id:"contracts",level:2},{value:"Wallet",id:"wallet",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-the-quorum-explorer"},"Use the Quorum Explorer"),(0,o.kt)("p",null,"You can use the Quorum Explorer on a Kubernetes cluster."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Clone the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ConsenSys/quorum-kubernetes"},"Quorum-Kubernetes")," repository"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"/23.4.0/private-networks/tutorials/kubernetes/cluster"},"running Kubernetes cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"Kubectl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/23.4.0/private-networks/tutorials/kubernetes/charts"},"Existing network"))),(0,o.kt)("h2",{id:"deploy-the-quorum-explorer-helm-chart"},"Deploy the Quorum Explorer helm chart"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-explorer"},"Quorum-Explorer")," as a lightweight blockchain explorer. The Quorum Explorer is ",(0,o.kt)("strong",{parentName:"p"},"not")," recommended for use in production and is intended for demonstration or development purposes only."),(0,o.kt)("p",null,"The explorer can provide an overview over the whole network, such as block information, voting or removing validators from the network, and demonstrates using the ",(0,o.kt)("inlineCode",{parentName:"p"},"SimpleStorage")," smart contract with privacy enabled, and sending transactions between wallets in one interface."),(0,o.kt)("p",null,"To use the explorer, update the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/helm/values/explorer-besu.yaml"},"Quorum-Explorer values file")," with your node details and endpoints, and then ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/tutorials/kubernetes/charts"},"deploy"),"."),(0,o.kt)("h2",{id:"nodes"},"Nodes"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Nodes")," page provides an overview of the nodes on the network. Select the node you would like to interact with from the drop-down on the top right, and you'll get details of the node, block height, peers, queued transactions etc."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"`k8s-explorer`",src:r(85216).Z,width:"1917",height:"944"})),(0,o.kt)("h2",{id:"validators"},"Validators"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Validators")," page simulates a production environment or consortium where each node individually runs API calls to vote to add a validator or remove an existing validator."),(0,o.kt)("p",null,"When using the buttons to remove, discard pending validators, or proposing a validator, the app sends an API request to the selected node in the drop-down only. To add or remove a validator you need to select a majority of the existing validator pool individually, and perform the vote API call by clicking the button. Each node can call a discard on the voting process during or after the validator has been added."),(0,o.kt)("p",null,"The vote calls made from non-validator nodes have no effect on overall consensus."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"`k8s-explorer-validators`",src:r(76483).Z,width:"1896",height:"887"})),(0,o.kt)("h2",{id:"explorer"},"Explorer"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Explorer")," page gives you the latest blocks from the chain and the latest transactions as they occur on the network. In addition, you can search by block number or transaction hash using the respective search bar."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"`k8s-explorer-explorer`",src:r(46309).Z,width:"1901",height:"889"})),(0,o.kt)("h2",{id:"contracts"},"Contracts"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("strong",{parentName:"p"},"Contracts")," page to compile and deploy a smart contract. Currently, the only contract available for deployment through the app is the ",(0,o.kt)("inlineCode",{parentName:"p"},"SimpleStorage")," contract. However, in time, we plan to add more contracts to that view."),(0,o.kt)("p",null,"In this example, we deploy from ",(0,o.kt)("inlineCode",{parentName:"p"},"member-1")," and select ",(0,o.kt)("inlineCode",{parentName:"p"},"member-1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"member-3")," in the ",(0,o.kt)("strong",{parentName:"p"},"Private For")," multi-select. Then click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Compile")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"`k8s-explorer-contracts-1`",src:r(14159).Z,width:"1890",height:"891"})),(0,o.kt)("p",null,"Once deployed, you can interact with the contract. As this is a new transaction, select ",(0,o.kt)("inlineCode",{parentName:"p"},"member-1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"member-3")," in ",(0,o.kt)("strong",{parentName:"p"},"Interact")," multi-select, and then click on the appropriate method call to ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," the value at the deployed contract address."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"`k8s-explorer-contracts-set`",src:r(61315).Z,width:"1899",height:"1042"})),(0,o.kt)("p",null,"To test the private transaction functionality, select ",(0,o.kt)("inlineCode",{parentName:"p"},"member-2")," from the drop-down on the top right, you'll notice that you are unable to interact with the contract because ",(0,o.kt)("inlineCode",{parentName:"p"},"member-2")," was not part of the transaction. Only ",(0,o.kt)("inlineCode",{parentName:"p"},"members-1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"member-3")," responds correctly."),(0,o.kt)("h2",{id:"wallet"},"Wallet"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Wallet")," page gives you the functionality to send simple ETH transactions between accounts by providing the account's private key, the recipient's address, and transfer amount in Wei."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"`k8s-explorer-wallet`",src:r(54399).Z,width:"1918",height:"891"})))}d.isMDXComponent=!0},14159:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kubernetes-explorer-contracts-1-01181eb965e9c78057dc930f48fa2090.png"},61315:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kubernetes-explorer-contracts-set-dbfe4f65b418999410a999147d16df19.png"},46309:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kubernetes-explorer-explorer-443ae4a27618574d082103bcaa740065.png"},76483:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kubernetes-explorer-validators-5bd265d7bd401c159b2852dc84533ecf.png"},54399:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kubernetes-explorer-wallet-e14f1a64b75ae0b133d676ccee8f2ec0.png"},85216:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kubernetes-explorer-41af1feb005383ef1871e47d4792c3b5.png"}}]);