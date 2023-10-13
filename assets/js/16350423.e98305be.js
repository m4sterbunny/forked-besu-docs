"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[32064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},p=Object.keys(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||p;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var c=2;c<p;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>a,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const p={title:"Configure ports",sidebar_position:2,description:"To enable communication you must expose Hyperledger Besu ports appropriately",tags:["public networks","private networks"]},i="Configure ports",a={unversionedId:"public-networks/how-to/connect/configure-ports",id:"public-networks/how-to/connect/configure-ports",title:"Configure ports",description:"To enable communication you must expose Hyperledger Besu ports appropriately",source:"@site/docs/public-networks/how-to/connect/configure-ports.md",sourceDirName:"public-networks/how-to/connect",slug:"/public-networks/how-to/connect/configure-ports",permalink:"/development/public-networks/how-to/connect/configure-ports",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/connect/configure-ports.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"},{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1697221498,formattedLastUpdatedAt:"Oct 13, 2023",sidebarPosition:2,frontMatter:{title:"Configure ports",sidebar_position:2,description:"To enable communication you must expose Hyperledger Besu ports appropriately",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Configure static nodes",permalink:"/development/public-networks/how-to/connect/static-nodes"},next:{title:"Manage peers",permalink:"/development/public-networks/how-to/connect/manage-peers"}},s={},c=[{value:"P2P networking",id:"p2p-networking",level:2},{value:"JSON-RPC API",id:"json-rpc-api",level:2},{value:"Metrics",id:"metrics",level:2}],l={toc:c};function u(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-ports"},"Configure ports"),(0,r.kt)("p",null,"To enable communication you must expose Hyperledger Besu ports appropriately. The following shows an example port configuration for a Besu node on AWS."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Port Configuration",src:n(33614).Z,width:"2698",height:"790"})),(0,r.kt)("p",null,"When running Besu from the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/get-started/install/run-docker-image"},"Docker image"),", ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/get-started/install/run-docker-image#exposing-ports"},"expose ports"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Besu supports ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/connect/specify-nat"},"UPnP")," for home or small office environments where a wireless router or modem provides NAT isolation.")),(0,r.kt)("h2",{id:"p2p-networking"},"P2P networking"),(0,r.kt)("p",null,"To enable peer discovery, the P2P UDP port must be open for inbound connections. Specify the P2P port using the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#p2p-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--p2p-port"))," option. The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"30303"),"."),(0,r.kt)("p",null,"We also recommend opening the P2P TCP port for inbound connections. This is not strictly required because Besu attempts to open outbound TCP connections. But if no nodes on the network are accepting inbound TCP connections, nodes cannot communicate."),(0,r.kt)("p",null,"Combine the P2P port with the values for the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#p2p-host"},(0,r.kt)("inlineCode",{parentName:"a"},"--p2p-host"))," and ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#p2p-interface"},(0,r.kt)("inlineCode",{parentName:"a"},"--p2p-interface"))," options when specifying the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#p2p-host"},"P2P host")," and ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#p2p-interface"},"P2P network interface"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"By default, peer discovery listens on ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0:30303")," (all interfaces). If the device Besu is running on must bind to a specific network interface, specify the interface using the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#p2p-interface"},(0,r.kt)("inlineCode",{parentName:"a"},"--p2p-interface"))," option.")),(0,r.kt)("h2",{id:"json-rpc-api"},"JSON-RPC API"),(0,r.kt)("p",null,"To enable access to the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/use-besu-api/json-rpc"},"JSON-RPC API"),", open the HTTP JSON-RPC and WebSockets JSON-RPC ports to the intended users of the JSON-RPC API on TCP."),(0,r.kt)("p",null,"Specify the HTTP and WebSockets JSON-RPC ports using the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-http-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-http-port"))," and ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#rpc-ws-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--rpc-ws-port"))," options. The defaults are ",(0,r.kt)("inlineCode",{parentName:"p"},"8545")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"8546"),"."),(0,r.kt)("h2",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,"To enable ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/monitor/metrics"},"Prometheus to access Besu"),", open the metrics port or metrics push port to Prometheus or the Prometheus push gateway on TCP."),(0,r.kt)("p",null,"Specify the ports for Prometheus and Prometheus push gateway using the ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#metrics-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--metrics-port"))," and ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#metrics-push-port"},(0,r.kt)("inlineCode",{parentName:"a"},"--metrics-push-port"))," options. The defaults are ",(0,r.kt)("inlineCode",{parentName:"p"},"9545")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"9001"),"."))}u.isMDXComponent=!0},33614:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/PortConfiguration-159d80eca9db24ffaf7bf7029c812faf.png"}}]);