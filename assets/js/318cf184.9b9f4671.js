"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[7671],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return t?i.createElement(g,s(s({ref:n},l),{},{components:t})):i.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<r;p++)s[p]=t[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var i=t(87462),o=(t(67294),t(3905));const r={title:"Permissioning",sidebar_position:1,description:"Besu permissioning feature",tags:["private networks"]},s="Permissioning",a={unversionedId:"private-networks/concepts/permissioning/index",id:"version-23.7.3/private-networks/concepts/permissioning/index",title:"Permissioning",description:"Besu permissioning feature",source:"@site/versioned_docs/version-23.7.3/private-networks/concepts/permissioning/index.md",sourceDirName:"private-networks/concepts/permissioning",slug:"/private-networks/concepts/permissioning/",permalink:"/23.7.3/private-networks/concepts/permissioning/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/concepts/permissioning/index.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1701375992,formattedLastUpdatedAt:"Nov 30, 2023",sidebarPosition:1,frontMatter:{title:"Permissioning",sidebar_position:1,description:"Besu permissioning feature",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Privacy plugin",permalink:"/23.7.3/private-networks/concepts/privacy/plugin"},next:{title:"Onchain permissioning",permalink:"/23.7.3/private-networks/concepts/permissioning/onchain"}},c={},p=[{value:"Node permissioning",id:"node-permissioning",level:2},{value:"Account permissioning",id:"account-permissioning",level:2},{value:"Specify permissioning",id:"specify-permissioning",level:2},{value:"Local",id:"local",level:3},{value:"Onchain",id:"onchain",level:3}],l={toc:p},u="wrapper";function m(e){let{components:n,...r}=e;return(0,o.kt)(u,(0,i.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"permissioning"},"Permissioning"),(0,o.kt)("p",null,"A permissioned network enables node permissioning and account permissioning, allowing only specified nodes and accounts to access the network."),(0,o.kt)("admonition",{title:"Permissioning is not privacy",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"In peer-to-peer networks, node permissioning enforces rules on nodes you control."),(0,o.kt)("p",{parentName:"admonition"},"Permissioning requires a distributed network of trust across the network where participants agree to follow the rules. One bad actor can decide not to follow the rules. Nodes can take action to prevent the bad actor adding to the chain but they cannot prevent the bad actor from allowing access to the chain."),(0,o.kt)("p",{parentName:"admonition"},"Besu also implements ",(0,o.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/concepts/privacy/"},"privacy"),".")),(0,o.kt)("h2",{id:"node-permissioning"},"Node permissioning"),(0,o.kt)("p",null,"Use node permissioning to restrict access to known participants only."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Node Permissioning",src:t(987).Z,width:"1700",height:"1058"})),(0,o.kt)("h2",{id:"account-permissioning"},"Account permissioning"),(0,o.kt)("p",null,"Use account permissioning to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enforce onboarding or identity requirements."),(0,o.kt)("li",{parentName:"ul"},"Suspend accounts."),(0,o.kt)("li",{parentName:"ul"},"Restrict the actions an account can perform.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Account Permissioning",src:t(73679).Z,width:"1700",height:"1170"})),(0,o.kt)("h2",{id:"specify-permissioning"},"Specify permissioning"),(0,o.kt)("p",null,"You can specify permissioning ",(0,o.kt)("a",{parentName:"p",href:"#local"},"locally")," or ",(0,o.kt)("a",{parentName:"p",href:"#onchain"},"onchain"),"."),(0,o.kt)("h3",{id:"local"},"Local"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/how-to/use-permissioning/local"},"Local permissioning")," works at the node level. Each node in the network has a ",(0,o.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/how-to/use-permissioning/local#permissions-configuration-file"},"permissions configuration file"),"."),(0,o.kt)("p",null,"Local permissioning affects your node but not the rest of the network. Use local permissioning to restrict use of your node (that is, the resources under your control). For example, customers able to access your node."),(0,o.kt)("p",null,"Local permissioning does not require coordination with the rest of the network and you can act immediately to protect your node. Your rules are not enforced in blocks produced by other nodes."),(0,o.kt)("h3",{id:"onchain"},"Onchain"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/concepts/permissioning/onchain"},"Onchain permissioning")," works through a smart contract on the network. Specifying permissioning onchain enables all nodes to read and update permissioning configuration from one location."),(0,o.kt)("p",null,"Onchain permissioning requires coordination to update the rules. The network might not be able to act immediately (for example, the smart contract might enforce a minimum of number of votes before changing permissioning rules)."),(0,o.kt)("p",null,"When you update onchain permissioning, the update applies across the network and new blocks abide by the updated rules. For example, blocked accounts can no longer add transactions to the chain."),(0,o.kt)("p",null,"The following diagram illustrates applying local and onchain permissioning rules."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Permissioning Flow",src:t(13400).Z,width:"1656",height:"1134"})))}m.isMDXComponent=!0},13400:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/PermissioningFlow-083dd4871a10fb66a7bf7a0e7de03a1d.png"},73679:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/enterprise-ethereum-account-permissioning-5c19ac3228fd7a89cda25b53f80b890b.png"},987:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/node-permissioning-bad-actor-a0e342071abf311e9f1f52e96581e6f6.png"}}]);