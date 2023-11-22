"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[36868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?o.createElement(k,a(a({ref:t},c),{},{components:n})):o.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={title:"Manage peers",sidebar_position:3,description:"Managing Hyperledger Besu peers",tags:["public networks","private networks"]},a="Manage peers",p={unversionedId:"public-networks/how-to/connect/manage-peers",id:"version-23.10.0/public-networks/how-to/connect/manage-peers",title:"Manage peers",description:"Managing Hyperledger Besu peers",source:"@site/versioned_docs/version-23.10.0/public-networks/how-to/connect/manage-peers.md",sourceDirName:"public-networks/how-to/connect",slug:"/public-networks/how-to/connect/manage-peers",permalink:"/23.10.0/public-networks/how-to/connect/manage-peers",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.0/public-networks/how-to/connect/manage-peers.md",tags:[{label:"public networks",permalink:"/23.10.0/tags/public-networks"},{label:"private networks",permalink:"/23.10.0/tags/private-networks"}],version:"23.10.0",lastUpdatedAt:1700672486,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:3,frontMatter:{title:"Manage peers",sidebar_position:3,description:"Managing Hyperledger Besu peers",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Configure ports",permalink:"/23.10.0/public-networks/how-to/connect/configure-ports"},next:{title:"Specify NAT method",permalink:"/23.10.0/public-networks/how-to/connect/specify-nat"}},s={},l=[{value:"Limit peers",id:"limit-peers",level:2},{value:"Limit remote connections",id:"limit-remote-connections",level:2},{value:"Monitor peer connections",id:"monitor-peer-connections",level:2},{value:"List node connections",id:"list-node-connections",level:2},{value:"Disable discovery",id:"disable-discovery",level:2},{value:"Troubleshoot",id:"troubleshoot",level:2}],c={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manage-peers"},"Manage peers"),(0,r.kt)("p",null,"Hyperledger Besu peer-to-peer (P2P) discovery happens periodically based on the number of peers in a network and the node's ",(0,r.kt)("a",{parentName:"p",href:"#limit-peers"},"peer limit"),"."),(0,r.kt)("p",null,"The frequency of discovery isn't configurable, but you can ",(0,r.kt)("a",{parentName:"p",href:"#limit-remote-connections"},"limit remote connections")," in public networks and ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#random-peer-priority-enabled"},"randomly prioritize connections")," in small, stable networks."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can use ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#admin_addpeer"},(0,r.kt)("inlineCode",{parentName:"a"},"admin_addPeer"))," to attempt a specific connection, but this isn't P2P discovery.")),(0,r.kt)("p",null,"In private networks, we recommend ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/private-networks/how-to/configure/bootnodes"},"using bootnodes")," to initially discover peers."),(0,r.kt)("h2",{id:"limit-peers"},"Limit peers"),(0,r.kt)("p",null,"You can limit peers to reduce the bandwidth, CPU time, and disk access Besu uses to manage and respond to peers."),(0,r.kt)("p",null,"To reduce the maximum number of peers, use the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#max-peers"},(0,r.kt)("inlineCode",{parentName:"a"},"--max-peers"))," option. The default is 25."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The minimum number of peers is set by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--Xp2p-peer-lower-bound")," option, which also has a default of 25. If you reduce the ",(0,r.kt)("inlineCode",{parentName:"p"},"--max-peers")," from the default, you must also set the ",(0,r.kt)("inlineCode",{parentName:"p"},"--Xp2p-peer-lower-bound")," option to the same value or lower. For example, if you decrease ",(0,r.kt)("inlineCode",{parentName:"p"},"--max-peers")," to 20, set ",(0,r.kt)("inlineCode",{parentName:"p"},"--Xp2p-peer-lower-bound")," to 20 or lower."),(0,r.kt)("p",{parentName:"admonition"},"Note, ",(0,r.kt)("inlineCode",{parentName:"p"},"Xp2p-peer-lower-bound")," is an early access option.")),(0,r.kt)("h2",{id:"limit-remote-connections"},"Limit remote connections"),(0,r.kt)("p",null,"Prevent eclipse attacks when using ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#sync-mode"},(0,r.kt)("inlineCode",{parentName:"a"},"--sync-mode"))," and ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#fast-sync-min-peers"},(0,r.kt)("inlineCode",{parentName:"a"},"--fast-sync-min-peers"))," on public networks by enabling the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#remote-connections-limit-enabled"},"remote connection limits"),"."),(0,r.kt)("p",null,"In private and permissioned networks with only trusted peers, enabling the remote connection limits is unnecessary and might adversely affect the speed at which nodes can join the network. Limiting remote connections can cause a closed group of peers to form when the number of nodes in the network is slightly higher than ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#max-peers"},(0,r.kt)("inlineCode",{parentName:"a"},"--max-peers")),". The nodes in this closed group are all connected to each other and can't accept more connections."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#random-peer-priority-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--random-peer-priority-enabled"))," to help prevent closed groups of peers in small, stable networks.")),(0,r.kt)("h2",{id:"monitor-peer-connections"},"Monitor peer connections"),(0,r.kt)("p",null,"JSON-RPC API methods to monitor peer connections include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.10.0/public-networks/reference/api/#net_peercount"},(0,r.kt)("inlineCode",{parentName:"a"},"net_peerCount")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.10.0/public-networks/reference/api/#admin_peers"},(0,r.kt)("inlineCode",{parentName:"a"},"admin_peers")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/23.10.0/public-networks/reference/api/#debug_metrics"},(0,r.kt)("inlineCode",{parentName:"a"},"debug_metrics")),".")),(0,r.kt)("p",null,"Each peer entry returned by ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/api/#admin_peers"},(0,r.kt)("inlineCode",{parentName:"a"},"admin_peers"))," includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"protocols")," section. Use the information in the ",(0,r.kt)("inlineCode",{parentName:"p"},"protocols")," section to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Determine the health of peers. For example, an external process can use ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/api/#admin_peers"},(0,r.kt)("inlineCode",{parentName:"a"},"admin_peers"))," and ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/api/#admin_removepeer"},(0,r.kt)("inlineCode",{parentName:"a"},"admin_removePeer"))," to disconnect from peers that are stalled at a single difficulty for an extended period of time.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Monitor node health. For example, if peers report increasing difficulties but the node is stuck at the same block number, the node may be on a different fork to most peers.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Determine which protocol level peers are communicating with. For example, you can see if ",(0,r.kt)("inlineCode",{parentName:"p"},'"version": 65')," is being used to reduce transaction sharing traffic."))),(0,r.kt)("h2",{id:"list-node-connections"},"List node connections"),(0,r.kt)("p",null,"The default logging configuration doesn't list node connection and disconnection messages. To enable listing them, set the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#logging"},(0,r.kt)("inlineCode",{parentName:"a"},"--logging"))," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG"),". For more verbosity, set the option to ",(0,r.kt)("inlineCode",{parentName:"p"},"TRACE"),"."),(0,r.kt)("p",null,"The console logs connection and disconnection events when the log level is ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," or higher. If the message ",(0,r.kt)("inlineCode",{parentName:"p"},"Successfully accepted connection from ...")," displays, connections are getting through the firewalls."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Sample log output"',title:'"Sample',log:!0,'output"':!0},"2018-10-16 12:37:35.479-04:00 | nioEventLoopGroup-3-1 | INFO | NettyP2PNetwork | Successfully accepted connection from 0xa979fb575495b8d6db44f750317d0f4622bf4c2aa3365d6af7c284339968eef29b69ad0dce72a4d8db5ebb4968de0e3bec910127f134779fbcb0cb6d3331163c\n")),(0,r.kt)("h2",{id:"disable-discovery"},"Disable discovery"),(0,r.kt)("p",null,"To disable P2P discovery, set the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/cli/options#discovery-enabled"},(0,r.kt)("inlineCode",{parentName:"a"},"--discovery-enabled"))," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"With discovery disabled, peers can't open connections with the node unless they were previously discovered or manually peered (for example, using ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/reference/api/#admin_addpeer"},(0,r.kt)("inlineCode",{parentName:"a"},"admin_addPeer")),"). ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/how-to/connect/static-nodes"},"Static nodes")," can also open connections."),(0,r.kt)("h2",{id:"troubleshoot"},"Troubleshoot"),(0,r.kt)("p",null,"If your nodes fail to connect, ensure the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/how-to/connect/configure-ports"},"required ports are open"),"."),(0,r.kt)("p",null,"If your nodes are running in AWS, check you have appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"SecurityGroups")," to allow access to the required ports."),(0,r.kt)("p",null,"Check that the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/concepts/node-keys#enode-url"},"enode URLs")," specified for ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/private-networks/how-to/configure/bootnodes"},"bootnodes")," or ",(0,r.kt)("a",{parentName:"p",href:"/23.10.0/public-networks/how-to/connect/static-nodes"},"static nodes")," match the enode URLs displayed when starting the remote nodes."))}m.isMDXComponent=!0}}]);