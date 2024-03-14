"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[78517],{64396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=t(85893),i=t(11151);const c={title:"Trace transactions",sidebar_position:2,description:"How to trace transactions",tags:["public networks","private networks"]},o="Trace transactions",s={id:"public-networks/how-to/troubleshoot/trace-transactions",title:"Trace transactions",description:"How to trace transactions",source:"@site/docs/public-networks/how-to/troubleshoot/trace-transactions.md",sourceDirName:"public-networks/how-to/troubleshoot",slug:"/public-networks/how-to/troubleshoot/trace-transactions",permalink:"/development/public-networks/how-to/troubleshoot/trace-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/troubleshoot/trace-transactions.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"},{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1710455521,formattedLastUpdatedAt:"Mar 14, 2024",sidebarPosition:2,frontMatter:{title:"Trace transactions",sidebar_position:2,description:"How to trace transactions",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use EVM tool",permalink:"/development/public-networks/how-to/troubleshoot/evm-tool"},next:{title:"Troubleshoot performance",permalink:"/development/public-networks/how-to/troubleshoot/performance"}},a={},l=[{value:"Ad-hoc tracing APIs",id:"ad-hoc-tracing-apis",level:2},{value:"Transaction-trace filtering APIs",id:"transaction-trace-filtering-apis",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"trace-transactions",children:"Trace transactions"}),"\n",(0,r.jsx)(n.admonition,{title:"Forest pruning deprecation notice",type:"caution",children:(0,r.jsxs)(n.p,{children:["Forest pruning (using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#pruning-enabled",children:(0,r.jsx)(n.code,{children:"--pruning-enabled"})})," option) is deprecated and will be removed in a future release. We recommend using ",(0,r.jsx)(n.a,{href:"/development/public-networks/concepts/data-storage-formats#bonsai-tries",children:"Bonsai Tries"})," as an alternative for saving disk space."]})}),"\n",(0,r.jsxs)(n.p,{children:["To get detailed information about transaction processing, use the ",(0,r.jsxs)(n.a,{href:"/development/public-networks/reference/api/#trace-methods",children:[(0,r.jsx)(n.code,{children:"TRACE"})," API"]}),". Enable the ",(0,r.jsx)(n.code,{children:"TRACE"})," API using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#rpc-http-api",children:(0,r.jsx)(n.code,{children:"--rpc-http-api"})})," or ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#rpc-ws-api",children:(0,r.jsx)(n.code,{children:"--rpc-ws-api"})})," command line options."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"TRACE"})," API has two sets of trace calls, ",(0,r.jsx)(n.a,{href:"#ad-hoc-tracing-apis",children:"ad-hoc tracing APIs"})," and ",(0,r.jsx)(n.a,{href:"#transaction-trace-filtering-apis",children:"transaction-trace filtering APIs"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ad-hoc-tracing-apis",children:"Ad-hoc tracing APIs"}),"\n",(0,r.jsxs)(n.p,{children:["These APIs allow you to use the ",(0,r.jsxs)(n.a,{href:"/development/public-networks/reference/trace-types",children:[(0,r.jsx)(n.code,{children:"trace"}),", ",(0,r.jsx)(n.code,{children:"vmTrace"}),", or ",(0,r.jsx)(n.code,{children:"stateDiff"})]})," diagnostic options when tracing calls or transactions."]}),"\n",(0,r.jsxs)(n.p,{children:["To use the ad-hoc tracing APIs, the requested block or transaction must be within the number of ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#pruning-blocks-retained",children:"blocks retained"})," with ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#pruning-enabled",children:"pruning enabled"})," (by default, 1024)."]}),"\n",(0,r.jsx)(n.p,{children:"The ad-hoc tracing APIs are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/development/public-networks/reference/api/#trace_call",children:(0,r.jsx)(n.code,{children:"trace_call"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/development/public-networks/reference/api/#trace_callmany",children:(0,r.jsx)(n.code,{children:"trace_callMany"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/development/public-networks/reference/api/#trace_rawtransaction",children:(0,r.jsx)(n.code,{children:"trace_rawTransaction"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/development/public-networks/reference/api/#trace_replayblocktransactions",children:(0,r.jsx)(n.code,{children:"trace_replayBlockTransactions"})})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"transaction-trace-filtering-apis",children:"Transaction-trace filtering APIs"}),"\n",(0,r.jsxs)(n.p,{children:["These APIs allow you to filter and search by specific information such as the block, address, or transaction. These APIs only use the ",(0,r.jsxs)(n.a,{href:"/development/public-networks/reference/trace-types#trace",children:[(0,r.jsx)(n.code,{children:"trace"})," type"]}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To use the transaction-trace filtering APIs, your node must be an archive node (that is, synchronized without pruning or fast sync) or the requested block or transaction must be within the number of ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#pruning-blocks-retained",children:"blocks retained"})," with ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#pruning-enabled",children:"pruning enabled"})," (by default, 1024)."]}),"\n",(0,r.jsx)(n.p,{children:"The transaction-trace filtering APIs are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/development/public-networks/reference/api/#trace_block",children:(0,r.jsx)(n.code,{children:"trace_block"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/development/public-networks/reference/api/#trace_filter",children:(0,r.jsx)(n.code,{children:"trace_filter"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/development/public-networks/reference/api/#trace_get",children:(0,r.jsx)(n.code,{children:"trace_get"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/development/public-networks/reference/api/#trace_transaction",children:(0,r.jsx)(n.code,{children:"trace_transaction"})})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var r=t(67294);const i={},c=r.createContext(i);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);