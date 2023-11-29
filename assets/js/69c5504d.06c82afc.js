"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[87436],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},64659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Use Hardhat",sidebar_position:1,description:"Using Hyperledger Besu with Hardhat",tags:["public networks","private networks"]},i="Use Hardhat",l={unversionedId:"public-networks/how-to/develop/hardhat",id:"version-23.10.2/public-networks/how-to/develop/hardhat",title:"Use Hardhat",description:"Using Hyperledger Besu with Hardhat",source:"@site/versioned_docs/version-23.10.2/public-networks/how-to/develop/hardhat.md",sourceDirName:"public-networks/how-to/develop",slug:"/public-networks/how-to/develop/hardhat",permalink:"/public-networks/how-to/develop/hardhat",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/public-networks/how-to/develop/hardhat.md",tags:[{label:"public networks",permalink:"/tags/public-networks"},{label:"private networks",permalink:"/tags/private-networks"}],version:"23.10.2",lastUpdatedAt:1701300072,formattedLastUpdatedAt:"Nov 29, 2023",sidebarPosition:1,frontMatter:{title:"Use Hardhat",sidebar_position:1,description:"Using Hyperledger Besu with Hardhat",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use Java Flight Recorder",permalink:"/public-networks/how-to/configure-jvm/java-flight-recorder"},next:{title:"Use client libraries",permalink:"/public-networks/how-to/develop/client-libraries"}},s={},p=[{value:"Private key management",id:"private-key-management",level:2},{value:"Use an HD wallet",id:"use-an-hd-wallet",level:3},{value:"Specify your private key in code",id:"specify-your-private-key-in-code",level:3},{value:"Start a Besu node",id:"start-a-besu-node",level:2},{value:"Deploy a contract",id:"deploy-a-contract",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-hardhat"},"Use Hardhat"),(0,a.kt)("p",null,"Developing for Hyperledger Besu using Hardhat is the same as developing for public Ethereum networks using Hardhat. Hardhat\nsupports Besu with the only difference being Besu does not support private key management. "),(0,a.kt)("p",null,"You can therefore use a wallet provider, or specify your private  key in the code."),(0,a.kt)("h2",{id:"private-key-management"},"Private key management"),(0,a.kt)("h3",{id:"use-an-hd-wallet"},"Use an HD wallet"),(0,a.kt)("p",null,"To add the wallet provider, update the ",(0,a.kt)("inlineCode",{parentName:"p"},"hardhat.config.ts")," file in the project directory. Replace:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<JSON-RPC-http-endpoint>")," with the JSON-RPC endpoint (IP address and port) of a Besu node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<MY-ACCOUNT-MNEMONIC>")," with the list of words that make up your account's mnemonic."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<MY-PASSWORD"),"> your password if used"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<MY-ACCOUNT-PRIVATE-KEY>")," your account's private key")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  // See <https://hardhat.org/hardhat-runner/docs/config#hd-wallet-config>\n  // for more about customizing your Hardhat configuration!\n  networks: {\n    besuWallet: {\n      url: "<JSON-RPC-http-endpoint>",\n      accounts: {\n        mnemonic: "<ACCOUNT-MNEMONIC>",\n        path: "m/44\'/60\'/0\'/0",\n        initialIndex: 0,\n        count: 1,\n        passphrase: "",\n      },\n    },\n  },\n};\n')),(0,a.kt)("h3",{id:"specify-your-private-key-in-code"},"Specify your private key in code"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Ensure you do not commit private keys to source control like Github, always inject your keys at runtime as environment variables, or\nuse a vault or similar.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const provider = new ethers.JsonRpcApiProvider(<JSON-RPC-http-endpoint>);\nconst wallet = new ethers.Wallet(<MY-ACCOUNT-PRIVATE-KEY>);\n// connect the wallet to the provider\nconst signer = wallet.connect(provider);\n\n")),(0,a.kt)("h2",{id:"start-a-besu-node"},"Start a Besu node"),(0,a.kt)("p",null,"Start a Besu node with JSON-RPC enabled on the endpoint specified in the Hardhat configuration file."),(0,a.kt)("h2",{id:"deploy-a-contract"},"Deploy a contract"),(0,a.kt)("p",null,"To deploy a contract onto the Besu network:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat scripts run ./scripts/deploy_my_contract.ts --network besuWallet\n")))}u.isMDXComponent=!0}}]);