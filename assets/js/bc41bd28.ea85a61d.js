"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[36540],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),f=n,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),d=a(67392),u=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function c(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=c(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,d]=m({queryString:a,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),v=(()=>{const e=s??p;return f({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var v=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),r=d[a].value;r!==l&&(p(t),s(r))},f=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:c},i,{className:(0,o.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(g,(0,r.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},98937:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={title:"Add and removing IBFT 2.0 validators",sidebar_position:1,description:"Adding and removing IBFT 2.0 validators",tags:["private networks"]},s="Add and remove IBFT 2.0 validators",d={unversionedId:"private-networks/tutorials/ibft/validators",id:"version-23.7.1/private-networks/tutorials/ibft/validators",title:"Add and removing IBFT 2.0 validators",description:"Adding and removing IBFT 2.0 validators",source:"@site/versioned_docs/version-23.7.1/private-networks/tutorials/ibft/validators.md",sourceDirName:"private-networks/tutorials/ibft",slug:"/private-networks/tutorials/ibft/validators",permalink:"/23.7.1/private-networks/tutorials/ibft/validators",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/private-networks/tutorials/ibft/validators.md",tags:[{label:"private networks",permalink:"/23.7.1/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1700682270,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:1,frontMatter:{title:"Add and removing IBFT 2.0 validators",sidebar_position:1,description:"Adding and removing IBFT 2.0 validators",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a private network using IBFT 2.0",permalink:"/23.7.1/private-networks/tutorials/ibft/"},next:{title:"Create a Clique network",permalink:"/23.7.1/private-networks/tutorials/clique"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add a validator",id:"add-a-validator",level:2},{value:"1. Create directories",id:"1-create-directories",level:3},{value:"2. Start the node",id:"2-start-the-node",level:3},{value:"3. Copy the address of the node",id:"3-copy-the-address-of-the-node",level:3},{value:"4. Propose adding the new validator",id:"4-propose-adding-the-new-validator",level:3},{value:"5. Verify the addition of the new validator",id:"5-verify-the-addition-of-the-new-validator",level:3},{value:"Remove a validator",id:"remove-a-validator",level:2}],c={toc:p},f="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"add-and-remove-ibft-20-validators"},"Add and remove IBFT 2.0 validators"),(0,n.kt)("p",null,"This example walks through ",(0,n.kt)("a",{parentName:"p",href:"/23.7.1/private-networks/how-to/configure/consensus/ibft#add-and-remove-validators"},"adding and removing an IBFT 2.0 validator"),"."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/23.7.1/private-networks/tutorials/ibft/"},"IBFT 2.0 network as configured in the IBFT 2.0 tutorial"))),(0,n.kt)("h2",{id:"add-a-validator"},"Add a validator"),(0,n.kt)("h3",{id:"1-create-directories"},"1. Create directories"),(0,n.kt)("p",null,"Create a working directory and a data directory for the new node that needs to be added:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p Node-5/data\n")),(0,n.kt)("h3",{id:"2-start-the-node"},"2. Start the node"),(0,n.kt)("p",null,"Change into the working directory for the new Node-5 and start the node, specifying the ",(0,n.kt)("a",{parentName:"p",href:"/23.7.1/private-networks/tutorials/ibft/#6-start-the-first-node-as-the-bootnode"},"Node-1 enode URL")," as the bootnode:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30307 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8549\n')),(0,n.kt)("p",null,"The command line specifies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The data directory for Node-5 using the ",(0,n.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/reference/cli/options#data-path"},(0,n.kt)("inlineCode",{parentName:"a"},"--data-path"))," option."),(0,n.kt)("li",{parentName:"ul"},"A different port to Node-1 for P2P discovery using the ",(0,n.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/reference/cli/options#p2p-port"},(0,n.kt)("inlineCode",{parentName:"a"},"--p2p-port"))," option."),(0,n.kt)("li",{parentName:"ul"},"A different port to Node-1 for HTTP JSON-RPC using the ",(0,n.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/reference/cli/options#rpc-http-port"},(0,n.kt)("inlineCode",{parentName:"a"},"--rpc-http-port"))," option."),(0,n.kt)("li",{parentName:"ul"},"The enode URL of Node-1 using the ",(0,n.kt)("a",{parentName:"li",href:"/23.7.1/public-networks/reference/cli/options#bootnodes"},(0,n.kt)("inlineCode",{parentName:"a"},"--bootnodes"))," option."),(0,n.kt)("li",{parentName:"ul"},"Other options as for ",(0,n.kt)("a",{parentName:"li",href:"/23.7.1/private-networks/tutorials/ibft/#6-start-the-first-node-as-the-bootnode"},"Node-1"),".")),(0,n.kt)("h3",{id:"3-copy-the-address-of-the-node"},"3. Copy the address of the node"),(0,n.kt)("p",null,"Copy the address of the node. You can find the address in the logs when starting the new node:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"2021-05-28 09:49:00.881+10:00 | main | INFO  | DefaultP2PNetwork | Node address 0x90626e6a67445aabf1c0615410d108d4733aa90b\n")),(0,n.kt)("p",null,"Or use the ",(0,n.kt)("a",{parentName:"p",href:"/23.7.1/public-networks/reference/cli/subcommands#export-address"},(0,n.kt)("inlineCode",{parentName:"a"},"public-key export-address"))," subcommand:"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{label:"Subcommand",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"besu --data-path=IBFT-Network/Node-5/data public-key export-address\n"))),(0,n.kt)(i.Z,{label:"Output",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"0x90626e6a67445aabf1c0615410d108d4733aa90b\n")))),(0,n.kt)("h3",{id:"4-propose-adding-the-new-validator"},"4. Propose adding the new validator"),(0,n.kt)("p",null,"Propose adding the new validator from more than half the number of current validators, using ",(0,n.kt)("a",{parentName:"p",href:"/23.7.1/public-networks/reference/api/#ibft_proposevalidatorvote"},(0,n.kt)("inlineCode",{parentName:"a"},"ibft_proposeValidatorVote")),", specifying the address of the proposed validator and ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{label:"curl HTTP request",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"ibft_proposeValidatorVote","params":["0x90626e6a67445aabf1c0615410d108d4733aa90b", true], "id":1}\' http://127.0.0.1:8545\n'))),(0,n.kt)(i.Z,{label:"JSON result",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": true\n}\n')))),(0,n.kt)("p",null,"Repeat the proposal process for this candidate node from at least two of the other nodes."),(0,n.kt)("h3",{id:"5-verify-the-addition-of-the-new-validator"},"5. Verify the addition of the new validator"),(0,n.kt)("p",null,"Verify that the new validator is now in the list of validators using ",(0,n.kt)("a",{parentName:"p",href:"/23.7.1/public-networks/reference/api/#ibft_getvalidatorsbyblocknumber"},(0,n.kt)("inlineCode",{parentName:"a"},"ibft_getValidatorsByBlockNumber")),":"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{label:"curl HTTP request",value:"tab1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"ibft_getValidatorsByBlockNumber","params":["latest"], "id":1}\' http://127.0.0.1:8545\n'))),(0,n.kt)(i.Z,{label:"JSON result",value:"tab2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "0x189d23d201b03ae1cf9113672df29a5d672aefa3",\n  "0x2aabbc1bb9bacef60a09764d1a1f4f04a47885c1",\n  "0x44b07d2c28b8ed8f02b45bd84ac7d9051b3349e6",\n  "0x4c1ccd426833b9782729a212c857f2f03b7b4c0d",\n  "0x90626e6a67445aabf1c0615410d108d4733aa90b"\n]\n')),(0,n.kt)("p",null,"The list of validators contains 5 addresses now."),(0,n.kt)("h2",{id:"remove-a-validator"},"Remove a validator"),(0,n.kt)("p",null,"The process for removing a validator is similar to ",(0,n.kt)("a",{parentName:"p",href:"#add-a-validator"},"adding a validator")," starting from step 2, except you specify ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," as the second parameter of ",(0,n.kt)("a",{parentName:"p",href:"/23.7.1/public-networks/reference/api/#ibft_proposevalidatorvote"},(0,n.kt)("inlineCode",{parentName:"a"},"ibft_proposeValidatorVote")),"."))))}m.isMDXComponent=!0}}]);