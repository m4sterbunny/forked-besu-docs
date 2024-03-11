"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[60715],{15629:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var n=i(85893),s=i(11151);const a={title:"Use flexible privacy groups",description:"Use flexible privacy groups",sidebar_position:5,tags:["private networks"]},o="Use flexible privacy groups",t={id:"private-networks/how-to/use-privacy/flexible",title:"Use flexible privacy groups",description:"Use flexible privacy groups",source:"@site/docs/private-networks/how-to/use-privacy/flexible.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/flexible",permalink:"/development/private-networks/how-to/use-privacy/flexible",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/use-privacy/flexible.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1710137760,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:5,frontMatter:{title:"Use flexible privacy groups",description:"Use flexible privacy groups",sidebar_position:5,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create and manage privacy groups",permalink:"/development/private-networks/how-to/use-privacy/privacy-groups"},next:{title:"Access private and privacy marker transactions",permalink:"/development/private-networks/how-to/use-privacy/access-private-transactions"}},p={},c=[{value:"Enable flexible privacy groups",id:"enable-flexible-privacy-groups",level:2},{value:"Simple flexible privacy group example",id:"simple-flexible-privacy-group-example",level:2},{value:"Add and remove members",id:"add-and-remove-members",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"use-flexible-privacy-groups",children:"Use flexible privacy groups"}),"\n",(0,n.jsxs)(r.p,{children:["Use the ",(0,n.jsxs)(r.a,{href:"https://github.com/ConsenSys/web3js-quorum",children:[(0,n.jsx)(r.code,{children:"web3js-quorum"})," library"]})," to create and update membership of ",(0,n.jsx)(r.a,{href:"/development/private-networks/concepts/privacy/flexible-privacy",children:"flexible privacy groups"}),"."]}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsx)(r.p,{children:"Because group membership for flexible privacy groups is stored in a smart contract, flexible privacy groups are also known as onchain privacy groups."})}),"\n",(0,n.jsxs)(r.admonition,{type:"info",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/development/private-networks/concepts/privacy/flexible-privacy",children:"Flexible privacy groups"})," are an early access feature. Don't use in production networks."]}),(0,n.jsx)(r.p,{children:"The flexible privacy group interfaces may change between releases. There might not be an upgrade path from flexible privacy groups created using v1.5 or earlier to enable use of flexible privacy group functionality in future versions."}),(0,n.jsxs)(r.p,{children:["We don't recommend creating flexible privacy groups in a chain with existing ",(0,n.jsx)(r.a,{href:"/development/private-networks/concepts/privacy/privacy-groups",children:"offchain privacy groups"}),"."]})]}),"\n",(0,n.jsx)(r.h2,{id:"enable-flexible-privacy-groups",children:"Enable flexible privacy groups"}),"\n",(0,n.jsxs)(r.p,{children:["Use the ",(0,n.jsx)(r.a,{href:"/development/private-networks/reference/cli/options#privacy-flexible-groups-enabled",children:(0,n.jsx)(r.code,{children:"--privacy-flexible-groups-enabled"})})," command line option to enable ",(0,n.jsx)(r.a,{href:"/development/private-networks/concepts/privacy/flexible-privacy",children:"flexible privacy groups"}),". When flexible privacy groups are enabled, the ",(0,n.jsx)(r.a,{href:"/development/private-networks/reference/api/#priv_createprivacygroup",children:(0,n.jsx)(r.code,{children:"priv_createPrivacyGroup"})}),", ",(0,n.jsx)(r.a,{href:"/development/private-networks/reference/api/#priv_deleteprivacygroup",children:(0,n.jsx)(r.code,{children:"priv_deletePrivacyGroup"})}),", and ",(0,n.jsx)(r.a,{href:"/development/private-networks/reference/api/#priv_findprivacygroup",children:(0,n.jsx)(r.code,{children:"priv_findPrivacyGroup"})})," methods for ",(0,n.jsx)(r.a,{href:"/development/private-networks/concepts/privacy/privacy-groups",children:"offchain privacy groups"})," are disabled."]}),"\n",(0,n.jsx)(r.h2,{id:"simple-flexible-privacy-group-example",children:"Simple flexible privacy group example"}),"\n",(0,n.jsxs)(r.p,{children:["To create and find a ",(0,n.jsx)(r.a,{href:"/development/private-networks/concepts/privacy/flexible-privacy",children:"flexible privacy group"})," using the ",(0,n.jsxs)(r.a,{href:"https://github.com/ConsenSys/web3js-quorum",children:[(0,n.jsx)(r.code,{children:"web3js-quorum"})," library"]}),":"]}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Update the ",(0,n.jsx)(r.code,{children:"example/keys.js"})," file to match your network configuration."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Run:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"cd example/onchainPrivacy\nnode simpleExample.js\n"})}),"\n",(0,n.jsxs)(r.p,{children:["This script creates the flexible privacy group with two members. ",(0,n.jsx)(r.code,{children:"findPrivacyGroup"})," finds and displays the created privacy group."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["The Tessera logs for Tessera 1 and Tessera 2 display ",(0,n.jsx)(r.code,{children:"PrivacyGroupNotFound"})," errors. This is expected behavior because private transactions check offchain and onchain to find the privacy group for a private transaction."]})}),"\n",(0,n.jsx)(r.h2,{id:"add-and-remove-members",children:"Add and remove members"}),"\n",(0,n.jsxs)(r.p,{children:["To add and remove members from a ",(0,n.jsx)(r.a,{href:"/development/private-networks/concepts/privacy/flexible-privacy",children:"flexible privacy group"}),", use the ",(0,n.jsx)(r.code,{children:"addTo"})," and ",(0,n.jsx)(r.code,{children:"removeFrom"})," methods in the ",(0,n.jsxs)(r.a,{href:"https://github.com/ConsenSys/web3js-quorum",children:[(0,n.jsx)(r.code,{children:"web3js-quorum"})," library"]})," client library."]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"When adding a member, Besu pushes all existing group transactions to the new member and processes them. If there are a large number of existing transactions, adding the member may take some time."})})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,r,i)=>{i.d(r,{Z:()=>t,a:()=>o});var n=i(67294);const s={},a=n.createContext(s);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);