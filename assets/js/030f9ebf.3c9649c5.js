"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[64814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),s=n(86010),o=n(12466),i=n(16550),l=n(91980),p=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=u(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,p]=m({queryString:n,groupId:a}),[d,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),y=(()=>{const e=l??d;return h({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),k(e)}),[p,k,s]),tabValues:s}}var y=n(72389);const f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==i&&(d(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:u},o,{className:(0,s.Z)("tabs__item",b,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function T(e){const t=k(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",f)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function N(e){const t=(0,y.Z)();return r.createElement(T,(0,a.Z)({key:String(t)},e))}},79889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),s=n(74866),o=n(85162);const i={title:"Create a privacy enabled network using the Quickstart",sidebar_position:1,description:"Configure Hyperledger Besu privacy",tags:["private networks"]},l="Create a privacy-enabled network",p={unversionedId:"private-networks/tutorials/privacy/index",id:"private-networks/tutorials/privacy/index",title:"Create a privacy enabled network using the Quickstart",description:"Configure Hyperledger Besu privacy",source:"@site/docs/private-networks/tutorials/privacy/index.md",sourceDirName:"private-networks/tutorials/privacy",slug:"/private-networks/tutorials/privacy/",permalink:"/development/private-networks/tutorials/privacy/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/tutorials/privacy/index.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1697315539,formattedLastUpdatedAt:"Oct 14, 2023",sidebarPosition:1,frontMatter:{title:"Create a privacy enabled network using the Quickstart",sidebar_position:1,description:"Configure Hyperledger Besu privacy",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create an Ethash network",permalink:"/development/private-networks/tutorials/ethash"},next:{title:"Create a multi-tenant network",permalink:"/development/private-networks/tutorials/privacy/multi-tenancy"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Create Tessera directories",id:"1-create-tessera-directories",level:2},{value:"2. Generate Tessera keys",id:"2-generate-tessera-keys",level:2},{value:"3. Create Tessera configuration files",id:"3-create-tessera-configuration-files",level:2},{value:"4. Start the Tessera nodes",id:"4-start-the-tessera-nodes",level:2},{value:"5. Start Besu Node-1",id:"5-start-besu-node-1",level:2},{value:"6. Start Besu Node-2",id:"6-start-besu-node-2",level:2},{value:"7. Start Besu Node-3",id:"7-start-besu-node-3",level:2},{value:"8. Start Besu Node-4",id:"8-start-besu-node-4",level:2}],u={toc:d};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-privacy-enabled-network"},"Create a privacy-enabled network"),(0,r.kt)("p",null,"Configuring a network that supports private transactions requires starting a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tessera.consensys.net/"},"Tessera")," node for each Hyperledger Besu node. Besu command line options associate the Besu node with the Tessera node."),(0,r.kt)("p",null,"This tutorial assumes you have completed setting up an IBFT 2.0 network to the point where you have ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/tutorials/ibft/#5-copy-the-node-private-keys-to-the-node-directories"},"created the genesis file and copied the private keys"),". If not, complete steps 1 to 5 of the ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/tutorials/ibft/"},"Create an IBFT 2.0")," tutorial before continuing."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"To support privacy, ensure your genesis file includes at least the ",(0,r.kt)("inlineCode",{parentName:"p"},"byzantium")," milestone."),(0,r.kt)("p",{parentName:"admonition"},"This tutorial configures a private network using IBFT 2.0 for educational purposes only. IBFT 2.0 requires 4 validators to be Byzantine fault tolerant.")),(0,r.kt)("p",null,"In this tutorial we start Tessera nodes for the four Besu nodes and associate each Besu node with a Tessera node."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.tessera.consensys.net/category/install"},"Install Tessera"),".")),(0,r.kt)("h2",{id:"1-create-tessera-directories"},"1. Create Tessera directories"),(0,r.kt)("p",null,"Inside each ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-*")," directory, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tessera")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"IBFT-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u251c\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u2514\u2500\u2500 Node-4\n    \u251c\u2500\u2500 data\n    \u251c\u2500\u2500 Tessera\n")),(0,r.kt)("h2",{id:"2-generate-tessera-keys"},"2. Generate Tessera keys"),(0,r.kt)("p",null,"This example creates an unlocked private key, meaning you do not need a password to decrypt the private key file."),(0,r.kt)("p",null,"In each ",(0,r.kt)("inlineCode",{parentName:"p"},"Tessera")," directory, generate a public/private key pair for the Tessera node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tessera -keygen -filename nodeKey\n")),(0,r.kt)("p",null,"At the prompt, press ",(0,r.kt)("strong",{parentName:"p"},"Enter")," to create an unlocked key."),(0,r.kt)("p",null,"Tessera generates the public/private key pair and saves the keys in the ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeKey.pub")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeKey.key")," files."),(0,r.kt)("h2",{id:"3-create-tessera-configuration-files"},"3. Create Tessera configuration files"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tessera")," directory for each node, create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"tessera.conf"),", with the following configuration:"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"In production environments, only specify ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tessera.consensys.net/HowTo/Configure/TLS/"},(0,r.kt)("inlineCode",{parentName:"a"},"tls"))," as ",(0,r.kt)("inlineCode",{parentName:"p"},"OFF")," if another transport security mechanism, such as WireGuard, is in place.")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Node-1",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9101",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9102",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9103",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9203"\n    },\n    {\n      "url": "http://localhost:9303"\n    },\n    {\n      "url": "http://localhost:9403"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n'))),(0,r.kt)(o.Z,{label:"Node-2",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9201",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9202",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9203",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9103"\n    },\n    {\n      "url": "http://localhost:9303"\n    },\n    {\n      "url": "http://localhost:9403"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n'))),(0,r.kt)(o.Z,{label:"Node-3",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9301",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9302",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9303",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9103"\n    },\n    {\n      "url": "http://localhost:9203"\n    },\n    {\n      "url": "http://localhost:9403"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n'))),(0,r.kt)(o.Z,{label:"Node-4",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9401",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9402",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9403",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9103"\n    },\n    {\n      "url": "http://localhost:9203"\n    },\n    {\n      "url": "http://localhost:9303"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n')))),(0,r.kt)("p",null,"In the configuration file, specify:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Different port numbers for the various servers in the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.tessera.consensys.net/HowTo/Configure/TesseraAPI/"},(0,r.kt)("inlineCode",{parentName:"a"},"serverConfigs"))," section."),(0,r.kt)("li",{parentName:"ul"},"The address of the Tessera nodes to discover, in the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.tessera.consensys.net/HowTo/Configure/Peer-discovery/#specify-peers"},(0,r.kt)("inlineCode",{parentName:"a"},"peer"))," section."),(0,r.kt)("li",{parentName:"ul"},"The location of the public/private key pair.")),(0,r.kt)("h2",{id:"4-start-the-tessera-nodes"},"4. Start the Tessera nodes"),(0,r.kt)("p",null,"In each ",(0,r.kt)("inlineCode",{parentName:"p"},"Tessera")," directory, start Tessera specifying the ",(0,r.kt)("a",{parentName:"p",href:"#3-create-tessera-configuration-files"},"configuration file")," created in the previous step:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tessera -configfile tessera.conf\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"After starting the first Tessera node and before starting the other nodes, the log message ",(0,r.kt)("inlineCode",{parentName:"p"},"failed to connect to node")," displays. This is normal behavior. Until you start the other peer nodes, your node is not connected and displays this warning. You can continue to start the other nodes.")),(0,r.kt)("h2",{id:"5-start-besu-node-1"},"5. Start Besu Node-1"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-1")," directory, start Besu Node-1:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --privacy-enabled --privacy-url=http://127.0.0.1:9102 --privacy-public-key-file=Tessera/nodeKey.pub --min-gas-price=0\n'))),(0,r.kt)(o.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --privacy-enabled --privacy-url=http://127.0.0.1:9102 --privacy-public-key-file=Tessera\\nodeKey.pub --min-gas-price=0\n')))),(0,r.kt)("p",null,"The command line specifies privacy options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/development/private-networks/reference/cli/options#privacy-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--privacy-enabled"))," enables privacy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/development/private-networks/reference/cli/options#privacy-url"},(0,r.kt)("inlineCode",{parentName:"a"},"--privacy-url"))," specifies the Q2T server address of the Tessera node (",(0,r.kt)("inlineCode",{parentName:"li"},"Q2T")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"tessera.conf"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/development/private-networks/reference/cli/options#privacy-public-key-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--privacy-public-key-file"))," specifies the file containing Tessera node public key (created in ",(0,r.kt)("a",{parentName:"li",href:"#2-generate-tessera-keys"},"3. Generate Tessera Keys"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#rpc-http-api"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-api"))," includes ",(0,r.kt)("inlineCode",{parentName:"li"},"EEA")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"PRIV")," in the list of JSON-RPC APIs to enable privacy JSON-RPC API methods."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/development/public-networks/reference/cli/options#min-gas-price"},(0,r.kt)("inlineCode",{parentName:"a"},"--min-gas-price"))," is 0 for a ",(0,r.kt)("a",{parentName:"li",href:"/development/private-networks/how-to/configure/free-gas"},"free gas network"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--privacy-marker-transaction-signing-key-file"))," command line option to sign ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/privacy/private-transactions/processing"},"privacy marker transactions")," using a supplied key. The command line option is mandatory in privacy-enabled paid gas networks.")),(0,r.kt)("p",null,"When the node starts, the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/node-keys#enode-url"},"enode URL")," displays. Copy the enode URL to specify Node-1 as the bootnode in the following steps."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Node 1 Enode URL",src:n(72836).Z,width:"988",height:"126"})),(0,r.kt)("h2",{id:"6-start-besu-node-2"},"6. Start Besu Node-2"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-2")," directory, start Besu Node-2 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546 --privacy-enabled --privacy-url=http://127.0.0.1:9202 --privacy-public-key-file=Tessera/nodeKey.pub --min-gas-price=0\n'))),(0,r.kt)(o.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546 --privacy-enabled --privacy-url=http://127.0.0.1:9202 --privacy-public-key-file=Tessera\\nodeKey.pub --min-gas-price=0\n')))),(0,r.kt)("p",null,"The command line specifies the same options as for Node-1 with different ports and Tessera node URL. The ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#bootnodes"},(0,r.kt)("inlineCode",{parentName:"a"},"--bootnodes"))," option specifies the enode URL of Node-1."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When running Besu from the ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/get-started/install/run-docker-image"},"Docker image"),", ",(0,r.kt)("a",{parentName:"p",href:"/development/private-networks/get-started/install/run-docker-image#expose-ports"},"expose ports"),".")),(0,r.kt)("h2",{id:"7-start-besu-node-3"},"7. Start Besu Node-3"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-3")," directory, start Besu Node-3 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547 --privacy-enabled --privacy-url=http://127.0.0.1:9302 --privacy-public-key-file=Tessera/nodeKey.pub --min-gas-price=0\n'))),(0,r.kt)(o.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547 --privacy-enabled --privacy-url=http://127.0.0.1:9302 --privacy-public-key-file=Tessera\\nodeKey.pub --min-gas-price=0\n')))),(0,r.kt)("p",null,"The command line specifies the same options as for Node-1 with different ports and Tessera node URL. The ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#bootnodes"},(0,r.kt)("inlineCode",{parentName:"a"},"--bootnodes"))," option specifies the enode URL of Node-1."),(0,r.kt)("h2",{id:"8-start-besu-node-4"},"8. Start Besu Node-4"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node-4")," directory, start Besu Node-4 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"MacOS",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548 --privacy-enabled --privacy-url=http://127.0.0.1:9402 --privacy-public-key-file=Tessera/nodeKey.pub --min-gas-price=0\n'))),(0,r.kt)(o.Z,{label:"Windows",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548 --privacy-enabled --privacy-url=http://127.0.0.1:9402 --privacy-public-key-file=Tessera\\nodeKey.pub --min-gas-price=0\n')))),(0,r.kt)("p",null,"The command line specifies the same options as for Node-1 with different ports and Tessera node URL. The ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#bootnodes"},(0,r.kt)("inlineCode",{parentName:"a"},"--bootnodes"))," option specifies the enode URL of Node-1."))}h.isMDXComponent=!0},72836:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/EnodeStartup-145939e1c789c28e464db82faa0fb3ca.png"}}]);