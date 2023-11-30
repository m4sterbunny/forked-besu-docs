"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[36279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(r),k=n,f=c["".concat(s,".").concat(k)]||c[k]||u[k]||a;return r?o.createElement(f,i(i({ref:t},m),{},{components:r})):o.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}k.displayName="MDXCreateElement"},59637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={title:"Use Grafana Loki",sidebar_position:2,description:"Using Grafana Loki log management platform with Hyperledger Besu",tags:["private networks"]},i="Grafana Loki",l={unversionedId:"private-networks/how-to/monitor/loki",id:"private-networks/how-to/monitor/loki",title:"Use Grafana Loki",description:"Using Grafana Loki log management platform with Hyperledger Besu",source:"@site/docs/private-networks/how-to/monitor/loki.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/loki",permalink:"/development/private-networks/how-to/monitor/loki",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/monitor/loki.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1691013388,formattedLastUpdatedAt:"Aug 2, 2023",sidebarPosition:2,frontMatter:{title:"Use Grafana Loki",sidebar_position:2,description:"Using Grafana Loki log management platform with Hyperledger Besu",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Monitoring",permalink:"/development/private-networks/how-to/monitor/"},next:{title:"Use Elastic Stack",permalink:"/development/private-networks/how-to/monitor/elastic-stack"}},s={},p=[],m={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"grafana-loki"},"Grafana Loki"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://grafana.com/oss/loki/"},"Grafana Loki")," is an open-source log management platform that is available when using the ",(0,n.kt)("a",{parentName:"p",href:"/development/private-networks/tutorials/quickstart"},"Developer Quickstart"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/master/files/common/promtail/promtail.yml"},"Promtail configuration")," ingests logs at regular defined intervals and outputs them to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/master/files/common/loki/loki.yml"},"Loki")," for storage."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"pipeline configuration")," in Promtail defines pipeline stages that can collate logs natively or using the JSON format."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If using the pipeline regex stage in ",(0,n.kt)("inlineCode",{parentName:"p"},"Promtail"),", configuration must match your log format.")),(0,n.kt)("p",null,"To view the GoQuorum Quickstart network logs in Loki:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/development/private-networks/tutorials/quickstart"},"Start the Developer Quickstart with Besu"),", selecting Loki monitoring.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/d/Ak6eXLsPxFemKYKEXfcH/quorum-logs-loki?orgId=1&var-app=besu&var-search=&from=now-15m&to=now"},(0,n.kt)("inlineCode",{parentName:"a"},"Grafana Loki address"))," listed by the sample networks ",(0,n.kt)("inlineCode",{parentName:"p"},"list.sh")," script."),(0,n.kt)("p",{parentName:"li"},"The logs display in Loki."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Loki logs",src:r(88660).Z,width:"1915",height:"898"})))))}u.isMDXComponent=!0},88660:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/grafana_loki-b7ec065514dfe7bb716e9029bda5c056.png"}}]);