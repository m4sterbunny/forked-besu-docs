"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[6935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Create and send transactions",sidebar_position:4,description:"Send transactions using eth_call or eth_sendRawTransaction.",tags:["public networks"]},s="Create and send transactions",i={unversionedId:"public-networks/how-to/send-transactions",id:"version-23.10.0/public-networks/how-to/send-transactions",title:"Create and send transactions",description:"Send transactions using eth_call or eth_sendRawTransaction.",source:"@site/versioned_docs/version-23.10.0/public-networks/how-to/send-transactions.md",sourceDirName:"public-networks/how-to",slug:"/public-networks/how-to/send-transactions",permalink:"/public-networks/how-to/send-transactions",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.0/public-networks/how-to/send-transactions.md",tags:[{label:"public networks",permalink:"/tags/public-networks"}],version:"23.10.0",lastUpdatedAt:1697315539,formattedLastUpdatedAt:"Oct 14, 2023",sidebarPosition:4,frontMatter:{title:"Create and send transactions",sidebar_position:4,description:"Send transactions using eth_call or eth_sendRawTransaction.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Use a configuration file",permalink:"/public-networks/how-to/configuration-file"},next:{title:"Configure static nodes",permalink:"/public-networks/how-to/connect/static-nodes"}},c={},l=[{value:"<code>eth_call</code> vs <code>eth_sendRawTransaction</code>",id:"eth_call-vs-eth_sendrawtransaction",level:2},{value:"Use wallets for key management",id:"use-wallets-for-key-management",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-and-send-transactions"},"Create and send transactions"),(0,r.kt)("p",null,"You can send signed transactions using the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#eth_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendRawTransaction"))," JSON-RPC API method."),(0,r.kt)("p",null,"Signed transactions can be simple value transfers, contract creation, or contract invocation. Set the maximum transaction fee for transactions using the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#rpc-tx-feecap"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-tx-feecap"))," CLI option."),(0,r.kt)("p",null,"To accept signed transactions from remote connections, set the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/how-to/use-besu-api/#service-hosts"},"API listening host")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/public-networks/how-to/develop/client-libraries"},"Use client libraries")," to create and send a signed raw transaction to transfer Ether and create a smart contract."),(0,r.kt)("admonition",{title:"Private keys",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Don't use the accounts from the examples on Mainnet or any public network except for testing. The private keys are displayed which means the accounts are not secure."),(0,r.kt)("p",{parentName:"admonition"},"All accounts and private keys in the examples are from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev.json")," genesis file in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/besu/tree/master/config/src/main/resources"},(0,r.kt)("inlineCode",{parentName:"a"},"/besu/config/src/main/resources"))," directory."),(0,r.kt)("p",{parentName:"admonition"},"In production environments avoid exposing your private keys by creating signed transactions offline, or use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethsigner.consensys.net/"},"EthSigner")," to isolate your private keys and sign transactions with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethsigner.consensys.net/Reference/API-Methods#eth_sendtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction")),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Setting the ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/how-to/use-besu-api/#service-hosts"},"listening host")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," exposes the API service connection on your node to any remote connection. In a production environment, ensure you are using a firewall to avoid exposing your node to the internet.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Libraries such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/web3j/web3j"},"web3j")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/ethereumj"},"ethereumj")," and tools such as ",(0,r.kt)("a",{parentName:"p",href:"https://mycrypto.com/"},"MyCrypto")," can also create signed transactions.")),(0,r.kt)("h2",{id:"eth_call-vs-eth_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"h2"},"eth_call")," vs ",(0,r.kt)("inlineCode",{parentName:"h2"},"eth_sendRawTransaction")),(0,r.kt)("p",null,"You can interact with contracts using ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#eth_call"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_call"))," or ",(0,r.kt)("a",{parentName:"p",href:"/public-networks/reference/api/#eth_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendRawTransaction")),". The table below compares the characteristics of both calls."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"eth_call")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"eth_sendRawTransaction")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Write")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Invokes contract function locally"),(0,r.kt)("td",{parentName:"tr",align:null},"Broadcasts to the network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Does not change state of blockchain"),(0,r.kt)("td",{parentName:"tr",align:null},"Updates the blockchain (for example, transfers ether between accounts)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Does not consume gas"),(0,r.kt)("td",{parentName:"tr",align:null},"Requires gas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Synchronous"),(0,r.kt)("td",{parentName:"tr",align:null},"Asynchronous")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Returns the value of a contract function available immediately"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns transaction hash only. A block might not include all possible transactions (for example, if the gas price is too low).")))),(0,r.kt)("h2",{id:"use-wallets-for-key-management"},"Use wallets for key management"),(0,r.kt)("p",null,"Besu doesn't support key management inside the client. Use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://docs.ethsigner.consensys.net/en/latest/"},"EthSigner")," with Besu to provide access to your key store and sign transactions."),(0,r.kt)("li",{parentName:"ul"},"Third-party tools (for example, ",(0,r.kt)("a",{parentName:"li",href:"https://metamask.io/"},"MetaMask")," and ",(0,r.kt)("a",{parentName:"li",href:"https://web3j.io/"},"web3j"),") for creating accounts.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"http://docs.ethsigner.consensys.net/en/latest/"},"EthSigner")," implements ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethsigner.consensys.net/Reference/API-Methods#eth_sendtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethsigner.consensys.net/Reference/API-Methods#eea_sendtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eea_sendTransaction")),".")))}d.isMDXComponent=!0}}]);