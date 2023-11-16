"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||i;return n?r.createElement(d,p(p({ref:t},l),{},{components:n})):r.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"Configure ports",sidebar_position:2,description:"To enable communication you must expose Hyperledger Besu ports appropriately",tags:["private networks"]},p="Configure ports",a={unversionedId:"public-networks/how-to/connect/configure-ports",id:"version-23.4.0/public-networks/how-to/connect/configure-ports",title:"Configure ports",description:"To enable communication you must expose Hyperledger Besu ports appropriately",source:"@site/versioned_docs/version-23.4.0/public-networks/how-to/connect/configure-ports.md",sourceDirName:"public-networks/how-to/connect",slug:"/public-networks/how-to/connect/configure-ports",permalink:"/23.4.0/public-networks/how-to/connect/configure-ports",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/how-to/connect/configure-ports.md",tags:[{label:"private networks",permalink:"/23.4.0/tags/private-networks"}],version:"23.4.0",lastUpdatedAt:1700172558,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:2,frontMatter:{title:"Configure ports",sidebar_position:2,description:"To enable communication you must expose Hyperledger Besu ports appropriately",tags:["private networks"]},sidebar:"publicDocSidebar",previous:{title:"Configure static nodes",permalink:"/23.4.0/public-networks/how-to/connect/static-nodes"},next:{title:"Manage peers",permalink:"/23.4.0/public-networks/how-to/connect/manage-peers"}},s={},c=[{value:"P2P networking",id:"p2p-networking",level:2},{value:"JSON-RPC API",id:"json-rpc-api",level:2},{value:"Metrics",id:"metrics",level:2}],l={toc:c},u="wrapper";function f(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-ports"},"Configure ports"),(0,o.kt)("p",null,"To enable communication you must expose Hyperledger Besu ports appropriately. The following shows an example port configuration for a Besu node on AWS."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Port Configuration",src:n(27205).Z,width:"2698",height:"790"})),(0,o.kt)("p",null,"When running Besu from the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/get-started/install/run-docker-image"},"Docker image"),", ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/get-started/install/run-docker-image#exposing-ports"},"expose ports"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Besu supports ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/connect/specify-nat"},"UPnP")," for home or small office environments where a wireless router or modem provides NAT isolation.")),(0,o.kt)("h2",{id:"p2p-networking"},"P2P networking"),(0,o.kt)("p",null,"To enable peer discovery, the P2P UDP port must be open for inbound connections. Specify the P2P port using the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#p2p-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--p2p-port"))," option. The default is ",(0,o.kt)("inlineCode",{parentName:"p"},"30303"),"."),(0,o.kt)("p",null,"We also recommend opening the P2P TCP port for inbound connections. This is not strictly required because Besu attempts to open outbound TCP connections. But if no nodes on the network are accepting inbound TCP connections, nodes cannot communicate."),(0,o.kt)("p",null,"Combine the P2P port with the values for the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#p2p-host"},(0,o.kt)("inlineCode",{parentName:"a"},"--p2p-host"))," and ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#p2p-interface"},(0,o.kt)("inlineCode",{parentName:"a"},"--p2p-interface"))," options when specifying the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#p2p-host"},"P2P host")," and ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#p2p-interface"},"P2P network interface"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"By default, peer discovery listens on ",(0,o.kt)("inlineCode",{parentName:"p"},"0.0.0.0:30303")," (all interfaces). If the device Besu is running on must bind to a specific network interface, specify the interface using the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#p2p-interface"},(0,o.kt)("inlineCode",{parentName:"a"},"--p2p-interface"))," option.")),(0,o.kt)("h2",{id:"json-rpc-api"},"JSON-RPC API"),(0,o.kt)("p",null,"To enable access to the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/use-besu-api/json-rpc"},"JSON-RPC API"),", open the HTTP JSON-RPC and WebSockets JSON-RPC ports to the intended users of the JSON-RPC API on TCP."),(0,o.kt)("p",null,"Specify the HTTP and WebSockets JSON-RPC ports using the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#rpc-http-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-http-port"))," and ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#rpc-ws-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--rpc-ws-port"))," options. The defaults are ",(0,o.kt)("inlineCode",{parentName:"p"},"8545")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"8546"),"."),(0,o.kt)("h2",{id:"metrics"},"Metrics"),(0,o.kt)("p",null,"To enable ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/monitor/metrics"},"Prometheus to access Besu"),", open the metrics port or metrics push port to Prometheus or the Prometheus push gateway on TCP."),(0,o.kt)("p",null,"Specify the ports for Prometheus and Prometheus push gateway using the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#metrics-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--metrics-port"))," and ",(0,o.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#metrics-push-port"},(0,o.kt)("inlineCode",{parentName:"a"},"--metrics-push-port"))," options. The defaults are ",(0,o.kt)("inlineCode",{parentName:"p"},"9545")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"9001"),"."))}f.isMDXComponent=!0},27205:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/PortConfiguration-159d80eca9db24ffaf7bf7029c812faf.png"}}]);