"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[95602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(b,i(i({ref:t},d),{},{components:n})):a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),s=n(16550),l=n(91980),c=n(67392),d=n(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,c]=b({queryString:n,groupId:a}),[u,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=l??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var h=n(72389);const v="tabList__CuJ",k="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==s&&(u(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",k,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},54656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const s={title:"Add and remove validators without voting",description:"How to add or remove validators without voting",sidebar_position:5},l="Add and remove validators without voting",c={unversionedId:"private-networks/how-to/configure/consensus/add-validators-without-voting",id:"version-23.4.0/private-networks/how-to/configure/consensus/add-validators-without-voting",title:"Add and remove validators without voting",description:"How to add or remove validators without voting",source:"@site/versioned_docs/version-23.4.0/private-networks/how-to/configure/consensus/add-validators-without-voting.md",sourceDirName:"private-networks/how-to/configure/consensus",slug:"/private-networks/how-to/configure/consensus/add-validators-without-voting",permalink:"/23.4.0/private-networks/how-to/configure/consensus/add-validators-without-voting",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/how-to/configure/consensus/add-validators-without-voting.md",tags:[],version:"23.4.0",lastUpdatedAt:1697221498,formattedLastUpdatedAt:"Oct 13, 2023",sidebarPosition:5,frontMatter:{title:"Add and remove validators without voting",description:"How to add or remove validators without voting",sidebar_position:5},sidebar:"privateDocSidebar",previous:{title:"Clique",permalink:"/23.4.0/private-networks/how-to/configure/consensus/clique"},next:{title:"Free gas network",permalink:"/23.4.0/private-networks/how-to/configure/free-gas"}},d={},u=[{value:"Override smart contract validators",id:"override-smart-contract-validators",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-and-remove-validators-without-voting"},"Add and remove validators without voting"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/how-to/configure/consensus/qbft"},"QBFT")," or ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/how-to/configure/consensus/ibft"},"IBFT 2.0")," network conditions might not allow voting to change validators. For example, if a majority of the current validators are no longer participating in the network, a vote to add or remove validators won't be successful. You can bypass voting and specify new validators using a transition in the genesis file."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"In most cases, add or remove validators ",(0,r.kt)("a",{parentName:"li",href:"/23.4.0/private-networks/how-to/configure/consensus/qbft#add-and-remove-validators"},"by voting or smart contract for QBFT"),"; or ",(0,r.kt)("a",{parentName:"li",href:"/23.4.0/private-networks/how-to/configure/consensus/ibft#add-and-remove-validators"},"by voting for IBFT 2.0"),". Use transitions only when voting isn't possible. Using transitions requires coordinating a rolling update of all the nodes in order to pick up the configuration at the correct block height. Using transitions also leaves the validator overrides permanently in your genesis configuration."),(0,r.kt)("li",{parentName:"ul"},"Transitions are a Besu-specific feature. If you run a mixed-client QBFT network, you can't use transitions to change the validators."))),(0,r.kt)("p",null,"To add or remove validators without voting:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the genesis file, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"transitions")," configuration item where:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<BlockNumber>")," is the upcoming block at which to change validators."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<ValidatorAddressX> ... <ValidatorAddressZ>")," are strings representing the account addresses of the validators after ",(0,r.kt)("inlineCode",{parentName:"li"},"<BlockNumber>"),".")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"QBFT syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    },\n    "transitions": {\n      "qbft": [\n      {\n        "block": <BlockNumber>,\n        "validators": [\n          <ValidatorAddressX>,\n          ...\n          <ValidatorAddressZ>\n        ]\n      }\n      ]\n    }\n  },\n  ...\n}\n'))),(0,r.kt)(i.Z,{label:"QBFT example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    },\n    "transitions": {\n      "qbft": [\n        {\n        "block": 25,\n        "validators": [\n          "0x372a70ace72b02cc7f1757183f98c620254f9c8d",\n          "0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb"\n          ]\n        }\n      ]\n    }\n  },\n  ...\n}\n'))),(0,r.kt)(i.Z,{label:"IBFT 2.0 syntax",value:"tab3",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "config": {\n    ...\n    "ibft2": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    },\n    "transitions": {\n      "ibft2": [\n      {\n        "block": <BlockNumber>,\n        "validators": [\n          <ValidatorAddressX>,\n          ...\n          <ValidatorAddressZ>\n        ]\n      }\n      ]\n    }\n  },\n  ...\n}\n'))),(0,r.kt)(i.Z,{label:"IBFT 2.0 example",value:"tab4",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "config": {\n    ...\n    "ibft2": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    },\n    "transitions": {\n      "ibft2": [\n      {\n      "block": 25,\n      "validators": [\n        "0x372a70ace72b02cc7f1757183f98c620254f9c8d",\n        "0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb"\n        ]\n      }\n      ]\n    }\n  },\n  ...\n}\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart all nodes in the network using the updated genesis file. You can make a rolling update of the nodes, as long as they're all up before the transition block is processed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To verify the changes after the transition block, call ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#qbft_getvalidatorsbyblocknumber"},(0,r.kt)("inlineCode",{parentName:"a"},"qbft_getValidatorsByBlockNumber"))," or ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/reference/api/#ibft_getvalidatorsbyblocknumber"},(0,r.kt)("inlineCode",{parentName:"a"},"ibft_getValidatorsByBlockNumber")),", specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"latest"),"."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Don't specify a transition block in the past."),(0,r.kt)("p",{parentName:"admonition"},"Specifying a transition block in the past can result in unexpected behavior, such as causing the network to fork.")),(0,r.kt)("h2",{id:"override-smart-contract-validators"},"Override smart contract validators"),(0,r.kt)("p",null,"When using ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/how-to/configure/consensus/qbft#add-and-remove-validators-using-a-smart-contract"},"QBFT contract validator selection"),", if network conditions require it, you can bypass the smart contract and specify new validators in the genesis file. For example, you lose quorum for your current list of contract validators, and you can't perform a transaction to vote more in."),(0,r.kt)("p",null,"This requires temporarily ",(0,r.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/how-to/configure/consensus/qbft#swap-validator-management-methods"},"switching to block header validator selection mode"),"."),(0,r.kt)("p",null,"To bypass the smart contract and specify new validators:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the genesis file, add a ",(0,r.kt)("inlineCode",{parentName:"p"},"transitions")," configuration item where:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<BlockNumber>")," is the upcoming block at which to change validators."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<SelectionMode>")," is the validator selection mode to switch to. In this case we'll switch to the ",(0,r.kt)("inlineCode",{parentName:"li"},"blockheader")," mode temporarily."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<ValidatorAddressX> ... <ValidatorAddressZ>")," are strings representing the account addresses of the validators after ",(0,r.kt)("inlineCode",{parentName:"li"},"<BlockNumber>"),". These validators only need to be sufficient to progress the chain and allow a new contract to be deployed.")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4,\n      "validatorcontractaddress": "0x0000000000000000000000000000000000007777"\n    },\n    "transitions": {\n      "qbft": [\n      {\n        "block": <BlockNumber>,\n        "validatorselectionmode": <SelectionMode>,\n        "validators": [\n          <ValidatorAddressX>,\n          ...\n          <ValidatorAddressZ>\n        ]\n      }\n      ]\n    }\n  },\n  ...\n}\n'))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4,\n      "validatorcontractaddress": "0x0000000000000000000000000000000000007777"\n    },\n    "transitions": {\n      "qbft": [\n      {\n        "block": 2555,\n        "validatorselectionmode": "blockheader",\n        "validators": [\n          "0x372a70ace72b02cc7f1757183f98c620254f9c8d",\n          "0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb"\n        ]\n      }\n      ]\n    }\n  },\n  ...\n}\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart all nodes in the network using the updated genesis file. You can make a rolling update of the nodes, as long as they're all up before the transition block is processed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy a new contract to the blockchain containing the desired list of validators.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the genesis file, add another ",(0,r.kt)("inlineCode",{parentName:"p"},"transitions")," configuration item where:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<BlockNumber>")," is the upcoming block at which to change validators."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<SelectionMode>")," is the validator selection mode to switch to. In this case we'll switch to ",(0,r.kt)("inlineCode",{parentName:"li"},"contract")," mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<NewValidatorContractAddress>")," is the address of the new smart contract.")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{label:"Syntax",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4,\n      \u201cvalidatorcontractaddress\u201d: \u201c0x0000000000000000000000000000000000007777\u201d\n    },\n    "transitions": {\n      "qbft": [\n      {\n        "block": 2555,\n        "validatorselectionmode": "blockheader",\n        "validators": [\n          "0x372a70ace72b02cc7f1757183f98c620254f9c8d",\n          "0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb"\n          ]\n        },\n      {\n        "block": <BlockNumber>,\n        "validatorselectionmode": <SelectionMode>,\n        "validatorcontractaddress": <NewValidatorContractAddress>\n      }\n      ]\n    }\n  },\n  ...\n}\n'))),(0,r.kt)(i.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4,\n      "validatorcontractaddress": "0x0000000000000000000000000000000000007777"\n    },\n    "transitions": {\n      "qbft": [\n      {\n        "block": 2555,\n        "validatorselectionmode": "blockheader",\n        "validators": [\n          "0x372a70ace72b02cc7f1757183f98c620254f9c8d",\n          "0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb"\n          ]\n        },\n      {\n        "block": 2755,\n        "validatorselectionmode": "contract",\n        "validatorcontractaddress": "0x0000000000000000000000000000000000009999"\n      }\n      ]\n    }\n  },\n  ...\n}\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart all nodes in the network using the updated genesis file. You can make a rolling update of the nodes, as long as they're all up before the transition block is processed."))))}m.isMDXComponent=!0}}]);