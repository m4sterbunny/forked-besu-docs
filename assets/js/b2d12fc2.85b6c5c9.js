"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[36279],{70808:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=o(85893),i=o(11151);const r={title:"Use Grafana Loki",sidebar_position:2,description:"Using Grafana Loki log management platform with Hyperledger Besu",tags:["private networks"]},s="Grafana Loki",a={id:"private-networks/how-to/monitor/loki",title:"Use Grafana Loki",description:"Using Grafana Loki log management platform with Hyperledger Besu",source:"@site/docs/private-networks/how-to/monitor/loki.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/loki",permalink:"/development/private-networks/how-to/monitor/loki",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/monitor/loki.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1706814058,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:2,frontMatter:{title:"Use Grafana Loki",sidebar_position:2,description:"Using Grafana Loki log management platform with Hyperledger Besu",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Monitoring",permalink:"/development/private-networks/how-to/monitor/"},next:{title:"Use Elastic Stack",permalink:"/development/private-networks/how-to/monitor/elastic-stack"}},l={},c=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"grafana-loki",children:"Grafana Loki"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://grafana.com/oss/loki/",children:"Grafana Loki"})," is an open-source log management platform that is available when using the ",(0,n.jsx)(t.a,{href:"/development/private-networks/tutorials/quickstart",children:"Developer Quickstart"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/master/files/common/promtail/promtail.yml",children:"Promtail configuration"})," ingests logs at regular defined intervals and outputs them to ",(0,n.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/master/files/common/loki/loki.yml",children:"Loki"})," for storage."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"pipeline configuration"})," in Promtail defines pipeline stages that can collate logs natively or using the JSON format."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If using the pipeline regex stage in ",(0,n.jsx)(t.code,{children:"Promtail"}),", configuration must match your log format."]})}),"\n",(0,n.jsx)(t.p,{children:"To view the GoQuorum Quickstart network logs in Loki:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/development/private-networks/tutorials/quickstart",children:"Start the Developer Quickstart with Besu"}),", selecting Loki monitoring."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Open the ",(0,n.jsx)(t.a,{href:"http://localhost:3000/d/Ak6eXLsPxFemKYKEXfcH/quorum-logs-loki?orgId=1&var-app=besu&var-search=&from=now-15m&to=now",children:(0,n.jsx)(t.code,{children:"Grafana Loki address"})})," listed by the sample networks ",(0,n.jsx)(t.code,{children:"list.sh"})," script."]}),"\n",(0,n.jsx)(t.p,{children:"The logs display in Loki."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Loki logs",src:o(88660).Z+"",width:"1915",height:"898"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},88660:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/grafana_loki-b7ec065514dfe7bb716e9029bda5c056.png"},11151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>s});var n=o(67294);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);