"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[79814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),v=a,m=u["".concat(c,".").concat(v)]||u[v]||d[v]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},76400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Privacy",sidebar_position:1,description:"Privacy"},o="Privacy",s={unversionedId:"private-networks/concepts/privacy/index",id:"private-networks/concepts/privacy/index",title:"Privacy",description:"Privacy",source:"@site/docs/private-networks/concepts/privacy/index.md",sourceDirName:"private-networks/concepts/privacy",slug:"/private-networks/concepts/privacy/",permalink:"/development/private-networks/concepts/privacy/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/concepts/privacy/index.md",tags:[],version:"current",lastUpdatedAt:1698376077,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:1,frontMatter:{title:"Privacy",sidebar_position:1,description:"Privacy"},sidebar:"privateDocSidebar",previous:{title:"Proof of authority consensus",permalink:"/development/private-networks/concepts/poa"},next:{title:"Private transactions",permalink:"/development/private-networks/concepts/privacy/private-transactions/"}},c={},p=[{value:"Private transaction manager",id:"private-transaction-manager",level:2},{value:"Privacy-enabled networks",id:"privacy-enabled-networks",level:2},{value:"Reorg-compatible privacy",id:"reorg-compatible-privacy",level:2}],l={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"privacy"},"Privacy"),(0,a.kt)("p",null,"In Besu, privacy refers to the ability to keep transactions private between the involved participants. Other participants cannot access the transaction content or list of participants."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"For production environments requiring private transactions:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"We recommend using a network with a consensus mechanism supporting transaction finality. For example, ",(0,a.kt)("a",{parentName:"li",href:"/development/private-networks/how-to/configure/consensus/ibft"},"IBFT 2.0"),"."),(0,a.kt)("li",{parentName:"ul"},"Tessera must be ",(0,a.kt)("a",{parentName:"li",href:"/development/private-networks/how-to/use-privacy/tessera"},"highly available and run in a separate instance to Besu"),".")),(0,a.kt)("p",{parentName:"admonition"},"Using private transactions with ",(0,a.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/data-storage-formats#pruning"},"pruning")," or ",(0,a.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#sync-mode"},"fast sync")," isn't supported.")),(0,a.kt)("h2",{id:"private-transaction-manager"},"Private transaction manager"),(0,a.kt)("p",null,"Besu uses a private transaction manager, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tessera.consensys.net/"},"Tessera"),", to implement privacy. Each Besu node that sends or receives ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/privacy/private-transactions/"},"private transactions")," requires an associated Tessera node."),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tessera Nodes",src:n(45609).Z,width:"731",height:"807"}))),(0,a.kt)("p",null,"Private transactions pass from the Besu node to the associated Tessera node. The Tessera node encrypts and directly distributes (that is, point-to-point) the private transaction to the Tessera nodes participating in the transaction."),(0,a.kt)("p",null,"By default, each participant in a privacy-enabled network uses its own Besu and Tessera node. ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/privacy/multi-tenancy"},"Multi-tenancy")," allows more than one participant to use the same Besu and Tessera node."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Private Transaction Managers are also known as Enclaves.")),(0,a.kt)("h2",{id:"privacy-enabled-networks"},"Privacy-enabled networks"),(0,a.kt)("p",null,"When enabling privacy in a ",(0,a.kt)("a",{parentName:"p",href:"/development/private-networks/get-started/system-requirements"},"private network"),", there's an assumed level of trust among the node operators, since all are members of the private network."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Inefficient contracts deployed accidentally or deliberately can cause performance issues in privacy-enabled networks because gas isn't required in private transactions.")),(0,a.kt)("p",null,"In contrast, gas is required in Ethereum Mainnet and public testnets because they are trustless environments."),(0,a.kt)("p",null,"Privacy-enabled networks should have a mechanism to establish trust offchain. Node operators should be informed on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Guidelines for use, responsibilities, and good behavior."),(0,a.kt)("li",{parentName:"ul"},"Smart contract security, so contracts deployed on the network use resources efficiently."),(0,a.kt)("li",{parentName:"ul"},"Consequences for malicious activity.")),(0,a.kt)("p",null,"Privacy-enabled networks should run development and test environments that closely resemble production, so contracts can be tested, and potential issues can be found before they're deployed in production."),(0,a.kt)("h2",{id:"reorg-compatible-privacy"},"Reorg-compatible privacy"),(0,a.kt)("p",null,"In v1.4, using private transactions in a network using a consensus mechanism where forks occur (that is, PoW algorithms or Clique) is an early access feature."),(0,a.kt)("p",null,"Do not use private transactions in production environments using consensus mechanisms where forks occur."))}u.isMDXComponent=!0},45609:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/TesseraNodes-ea2944d12c284fc0bad69e7c3f898817.png"}}]);