"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[93675],{52069:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=o(85893),i=o(11151);const r={title:"Proof of authority consensus",sidebar_position:1,description:"Besu proof of authority consensus protocols comparison",tags:["private networks"]},s="Proof of authority consensus",a={id:"private-networks/concepts/poa",title:"Proof of authority consensus",description:"Besu proof of authority consensus protocols comparison",source:"@site/versioned_docs/version-23.10.2/private-networks/concepts/poa.md",sourceDirName:"private-networks/concepts",slug:"/private-networks/concepts/poa",permalink:"/23.10.2/private-networks/concepts/poa",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/private-networks/concepts/poa.md",tags:[{label:"private networks",permalink:"/23.10.2/tags/private-networks"}],version:"23.10.2",lastUpdatedAt:1707255677,formattedLastUpdatedAt:"Feb 6, 2024",sidebarPosition:1,frontMatter:{title:"Proof of authority consensus",sidebar_position:1,description:"Besu proof of authority consensus protocols comparison",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Concepts",permalink:"/23.10.2/private-networks/concepts/"},next:{title:"Privacy",permalink:"/23.10.2/private-networks/concepts/privacy/"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"Immediate finality",id:"immediate-finality",level:3},{value:"Minimum number of validators",id:"minimum-number-of-validators",level:3},{value:"Liveness",id:"liveness",level:3},{value:"Speed",id:"speed",level:3}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"proof-of-authority-consensus",children:"Proof of authority consensus"}),"\n",(0,t.jsxs)(n.p,{children:["Besu implements the QBFT, IBFT 2.0, and Clique proof of authority (PoA) ",(0,t.jsx)(n.a,{href:"/23.10.2/private-networks/how-to/configure/consensus/",children:"consensus protocols"}),". PoA consensus protocols work when participants know each other and there is a level of trust between them. For example, in a permissioned consortium network."]}),"\n",(0,t.jsx)(n.p,{children:"PoA consensus protocols have faster block times and a much greater transaction throughput than the Ethash proof of work consensus protocol used on the Ethereum Mainnet."}),"\n",(0,t.jsx)(n.p,{children:"In QBFT, IBFT 2.0, or Clique, a group of nodes in the network act as validators (QBFT and IBFT 2.0) or signers (Clique). The existing nodes in the signer/validator pool vote to add nodes to or remove nodes from the pool."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"For the rest of this page, the term validator is used to refer to signers and validators."})}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.p,{children:"Properties to consider when comparing QBFT, IBFT 2.0, and Clique are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Immediate finality."}),"\n",(0,t.jsx)(n.li,{children:"Minimum number of validators."}),"\n",(0,t.jsx)(n.li,{children:"Liveness."}),"\n",(0,t.jsx)(n.li,{children:"Speed."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"immediate-finality",children:"Immediate finality"}),"\n",(0,t.jsx)(n.p,{children:"QBFT and IBFT 2.0 have immediate finality; there are no forks and all valid blocks get included in the main chain."}),"\n",(0,t.jsx)(n.p,{children:"Clique does not have immediate finality. Implementations using Clique must be aware of forks and chain reorganizations occurring."}),"\n",(0,t.jsx)(n.h3,{id:"minimum-number-of-validators",children:"Minimum number of validators"}),"\n",(0,t.jsx)(n.p,{children:"To be Byzantine fault tolerant, QBFT and IBFT 2.0 require a minimum of four validators."}),"\n",(0,t.jsx)(n.p,{children:"Clique can operate with a single validator but operating with a single validator offers no redundancy if the validator fails."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Byzantine fault tolerant is the ability to function correctly and reach consensus despite nodes failing or propagating incorrect information to peers."})}),"\n",(0,t.jsx)(n.h3,{id:"liveness",children:"Liveness"}),"\n",(0,t.jsx)(n.p,{children:"Clique is more fault tolerant than QBFT and IBFT 2.0. Clique tolerates up to half of the validators failing. QBFT and IBFT 2.0 networks require greater than or equal to two-thirds of validators to be operating to create blocks. For example, an QBFT and IBFT 2.0 network of:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Four to five validators tolerates one unresponsive validator."}),"\n",(0,t.jsx)(n.li,{children:"Six to eight validators tolerates two unresponsive validators."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Networks with three or less validators can produce blocks but do not guarantee finality when operating in adversarial environments."}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"We recommend using QBFT or IBFT 2.0 networks with at least four nodes in production environments."})}),"\n",(0,t.jsx)(n.h3,{id:"speed",children:"Speed"}),"\n",(0,t.jsx)(n.p,{children:"Reaching consensus and adding blocks is faster in Clique networks. For Clique, the probability of a fork increases as the number of validators increases."}),"\n",(0,t.jsx)(n.p,{children:"For QBFT and IBFT 2.0, the time to add new blocks increases as the number of validators increases."})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>s});var t=o(67294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);