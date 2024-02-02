"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[4860],{84453:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var a=t(85893),s=t(11151),i=t(74866),r=t(85162);const c={title:"Use the Engine API",sidebar_position:2,description:"Use the Engine API to communicate with a consensus client.",tags:["public networks"]},l="Use the Engine API",o={id:"public-networks/how-to/use-engine-api",title:"Use the Engine API",description:"Use the Engine API to communicate with a consensus client.",source:"@site/versioned_docs/version-23.10.2/public-networks/how-to/use-engine-api.md",sourceDirName:"public-networks/how-to",slug:"/public-networks/how-to/use-engine-api",permalink:"/23.10.2/public-networks/how-to/use-engine-api",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/public-networks/how-to/use-engine-api.md",tags:[{label:"public networks",permalink:"/23.10.2/tags/public-networks"}],version:"23.10.2",lastUpdatedAt:1706896941,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:2,frontMatter:{title:"Use the Engine API",sidebar_position:2,description:"Use the Engine API to communicate with a consensus client.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Access logs using JSON-RPC",permalink:"/23.10.2/public-networks/how-to/use-besu-api/access-logs"},next:{title:"Use a configuration file",permalink:"/23.10.2/public-networks/how-to/configuration-file"}},d={},u=[{value:"Configure the Engine API",id:"configure-the-engine-api",level:2},{value:"Service ports",id:"service-ports",level:3},{value:"Host allowlist",id:"host-allowlist",level:3},{value:"Authentication",id:"authentication",level:2},{value:"Send a payload using the Engine API",id:"send-a-payload-using-the-engine-api",level:2},{value:"1. Prepare a payload",id:"1-prepare-a-payload",level:3},{value:"2. Get the payload",id:"2-get-the-payload",level:3},{value:"3. Execute the payload",id:"3-execute-the-payload",level:3},{value:"4. Update the fork choice",id:"4-update-the-fork-choice",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"use-the-engine-api",children:"Use the Engine API"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/23.10.2/public-networks/concepts/the-merge#execution-and-consensus-clients",children:"Consensus and execution clients"})," communicate with each other using the ",(0,a.jsx)(n.a,{href:"/23.10.2/public-networks/reference/engine-api/",children:"Engine API"}),". These API methods are a separate subsection of the ",(0,a.jsx)(n.a,{href:"/23.10.2/public-networks/how-to/use-besu-api/",children:"JSON-RPC API"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"configure-the-engine-api",children:"Configure the Engine API"}),"\n",(0,a.jsx)(n.p,{children:"The Engine API is enabled by default even if no consensus client configuration exists. You can configure the Engine API to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Specify the ",(0,a.jsx)(n.a,{href:"#service-ports",children:"service ports"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Specify the ",(0,a.jsx)(n.a,{href:"#host-allowlist",children:"host allowlist"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Example Engine API configuration"',children:"besu --engine-rpc-port=8551 --engine-host-allowlist=localhost,127.0.0.1 --engine-jwt-secret=jwt.hex\n"})}),"\n",(0,a.jsx)(n.h3,{id:"service-ports",children:"Service ports"}),"\n",(0,a.jsxs)(n.p,{children:["To specify the port the Engine API service listens on for HTTP and WebSocket, use the ",(0,a.jsx)(n.a,{href:"/23.10.2/public-networks/reference/cli/options#engine-rpc-port",children:(0,a.jsx)(n.code,{children:"--engine-rpc-port"})})," option. The default is ",(0,a.jsx)(n.code,{children:"8551"}),". This option is useful when you have another execution engine running on port 8551, in which case you can specify Besu to use another port, for example, ",(0,a.jsx)(n.code,{children:"--engine-rpc-port 8552"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"host-allowlist",children:"Host allowlist"}),"\n",(0,a.jsxs)(n.p,{children:["To prevent DNS rebinding attacks, Besu checks incoming HTTP request host headers, WebSocket connections, and GraphQL requests. Besu accepts requests only when hostnames specified using the ",(0,a.jsx)(n.a,{href:"/23.10.2/public-networks/reference/cli/options#engine-host-allowlist",children:(0,a.jsx)(n.code,{children:"--engine-host-allowlist"})})," option matches the request host headers. By default, Besu accepts requests and connections from ",(0,a.jsx)(n.code,{children:"localhost"})," and ",(0,a.jsx)(n.code,{children:"127.0.0.1"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["This isn't a permissioning feature. To restrict access to the Engine API, we recommend using ",(0,a.jsx)(n.a,{href:"#authentication",children:"authentication"}),"."]})}),"\n",(0,a.jsx)(n.p,{children:"If your application publishes RPC ports, specify the hostnames when starting Besu."}),"\n",(0,a.jsxs)(n.p,{children:["Specify ",(0,a.jsx)(n.code,{children:"*"})," for ",(0,a.jsx)(n.code,{children:"--engine-host-allowlist"})," to effectively disable host protection."]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["We don't recommend specifying ",(0,a.jsx)(n.code,{children:"*"})," for ",(0,a.jsx)(n.code,{children:"--engine-host-allowlist"})," in production."]})}),"\n",(0,a.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.a,{href:"/23.10.2/public-networks/how-to/use-besu-api/authenticate",children:"authentication"})," for the Engine API is enabled. To disable, set the ",(0,a.jsx)(n.a,{href:"/23.10.2/public-networks/reference/cli/options#engine-jwt-disabled",children:(0,a.jsx)(n.code,{children:"--engine-jwt-disabled"})})," option to ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsx)(n.p,{children:"Don't disable JWT authentication in production environments."}),(0,a.jsx)(n.p,{children:"Disable only for testing purposes."})]}),"\n",(0,a.jsxs)(n.p,{children:["Set the ",(0,a.jsx)(n.a,{href:"/23.10.2/public-networks/how-to/use-besu-api/authenticate#jwt-public-key-authentication",children:"JWT secret"})," by using the ",(0,a.jsx)(n.a,{href:"/23.10.2/public-networks/reference/cli/options#engine-jwt-secret",children:(0,a.jsx)(n.code,{children:"--engine-jwt-secret"})})," option."]}),"\n",(0,a.jsx)(n.h2,{id:"send-a-payload-using-the-engine-api",children:"Send a payload using the Engine API"}),"\n",(0,a.jsx)(n.h3,{id:"1-prepare-a-payload",children:"1. Prepare a payload"}),"\n",(0,a.jsxs)(n.p,{children:["Prepare to send a payload using ",(0,a.jsx)(n.a,{href:"/23.10.2/public-networks/reference/engine-api/#engine_forkchoiceupdatedv1",children:(0,a.jsx)(n.code,{children:"engine_forkchoiceUpdatedV1"})}),"."]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(r.Z,{value:"curl HTTP request",label:"curl HTTP request",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_forkchoiceUpdatedV1","params":[{"headBlockHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a", "safeBlockHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a", "finalizedBlockHash": "0x0000000000000000000000000000000000000000000000000000000000000000"},{"timestamp": "0x5","prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000","suggestedFeeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b"}],"id":67}\' http://127.0.0.1:8550\n'})})}),(0,a.jsx)(r.Z,{value:"JSON result",label:"JSON result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 67,\n  "result": {\n    "payloadStatus": {\n      "status": "VALID",\n      "latestValidHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",\n      "validationError": null\n    },\n    "payloadId": "0x0000000021f32cc1"\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"2-get-the-payload",children:"2. Get the payload"}),"\n",(0,a.jsxs)(n.p,{children:["Get the payload using ",(0,a.jsx)(n.a,{href:"/23.10.2/public-networks/reference/engine-api/#engine_getpayloadv1",children:(0,a.jsx)(n.code,{children:"engine_getPayloadV1"})})]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(r.Z,{value:"curl HTTP request",label:"curl HTTP request",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_getPayloadV1","params":["0x1"],"id":1}\' http://127.0.0.1:8550\n'})})}),(0,a.jsx)(r.Z,{value:"JSON result",label:"JSON result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "parentHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",\n    "feeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",\n    "stateRoot": "0xca3149fa9e37db08d1cd49c9061db1002ef1cd58db2210f2115c8c989b2bdf45",\n    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n    "prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000",\n    "blockNumber": "0x1",\n    "gasLimit": "0x1c9c380",\n    "gasUsed": "0x0",\n    "timestamp": "0x5",\n    "extraData": "0x",\n    "baseFeePerGas": "0x7",\n    "blockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n    "transactions": []\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"3-execute-the-payload",children:"3. Execute the payload"}),"\n",(0,a.jsxs)(n.p,{children:["Execute the payload using ",(0,a.jsx)(n.a,{href:"/23.10.2/public-networks/reference/engine-api/#engine_newpayloadv1",children:(0,a.jsx)(n.code,{children:"engine_newPayloadV1"})})]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(r.Z,{value:"curl HTTP request",label:"curl HTTP request",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_newPayloadV1","params":[\n  {\n    "parentHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",\n    "feeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",\n    "stateRoot": "0xca3149fa9e37db08d1cd49c9061db1002ef1cd58db2210f2115c8c989b2bdf45",\n    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n    "prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000",\n    "blockNumber": "0x1",\n    "gasLimit": "0x1c9c380",\n    "gasUsed": "0x0",\n    "timestamp": "0x5",\n    "extraData": "0x",\n    "baseFeePerGas": "0x7",\n    "blockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n    "transactions": []\n  }\n],"id":67}\' http://127.0.0.1:8550\n'})})}),(0,a.jsx)(r.Z,{value:"JSON result",label:"JSON result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "status": "VALID",\n    "latestValidHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n    "validationError": null\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"4-update-the-fork-choice",children:"4. Update the fork choice"}),"\n",(0,a.jsxs)(n.p,{children:["Update the fork choice using ",(0,a.jsx)(n.a,{href:"/23.10.2/public-networks/reference/engine-api/#engine_forkchoiceupdatedv1",children:(0,a.jsx)(n.code,{children:"engine_forkchoiceUpdatedV1"})})," again."]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(r.Z,{value:"curl HTTP request",label:"curl HTTP request",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_forkchoiceUpdatedV1","params":[{"headBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858", "safeBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858", "finalizedBlockHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a"},null],"id":67}\' http://127.0.0.1:8550\n'})})}),(0,a.jsx)(r.Z,{value:"JSON result",label:"JSON result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 67,\n  "result": {\n    "payloadStatus": {\n      "status": "VALID",\n      "latestValidHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n      "validationError": null\n    },\n    "payloadId": null\n  }\n}\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(36905);const s={tabItem:"tabItem_Ymn6"};var i=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(67294),s=t(36905),i=t(12466),r=t(16550),c=t(20469),l=t(91980),o=t(67392),d=t(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[o,u]=b({queryString:t,groupId:s}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),g=(()=>{const e=o??f;return p({value:e,tabValues:i})?e:null})();(0,c.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function m(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=c[t].value;s!==a&&(o(n),r(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,j.jsx)(m,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function y(e){const n=(0,x.Z)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var a=t(67294);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);