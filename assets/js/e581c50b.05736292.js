"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[37432],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(o),d=n,m=c["".concat(p,".").concat(d)]||c[d]||h[d]||i;return o?r.createElement(m,a(a({ref:t},u),{},{components:o})):r.createElement(m,a({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},11578:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const i={title:"Troubleshoot peering",sidebar_position:4,description:"How to troubleshoot peering",tags:["public networks"]},a="Troubleshoot peering",s={unversionedId:"public-networks/how-to/troubleshoot/peering",id:"version-23.10.2/public-networks/how-to/troubleshoot/peering",title:"Troubleshoot peering",description:"How to troubleshoot peering",source:"@site/versioned_docs/version-23.10.2/public-networks/how-to/troubleshoot/peering.md",sourceDirName:"public-networks/how-to/troubleshoot",slug:"/public-networks/how-to/troubleshoot/peering",permalink:"/public-networks/how-to/troubleshoot/peering",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/public-networks/how-to/troubleshoot/peering.md",tags:[{label:"public networks",permalink:"/tags/public-networks"}],version:"23.10.2",lastUpdatedAt:1700172558,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:4,frontMatter:{title:"Troubleshoot peering",sidebar_position:4,description:"How to troubleshoot peering",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Troubleshoot performance",permalink:"/public-networks/how-to/troubleshoot/performance"},next:{title:"Concepts",permalink:"/public-networks/concepts"}},p={},l=[{value:"Peering FAQ",id:"peering-faq",level:2},{value:"&quot;Why can\u2019t I find enough peers to sync?&quot;",id:"why-cant-i-find-enough-peers-to-sync",level:3},{value:"&quot;What network or router/modem settings should I check?&quot;",id:"what-network-or-routermodem-settings-should-i-check",level:3},{value:"&quot;How do I open/forward my ports?&quot;",id:"how-do-i-openforward-my-ports",level:3},{value:"&quot;How do I test that my ports are open?&quot;",id:"how-do-i-test-that-my-ports-are-open",level:3},{value:"&quot;What&#39;s the ideal number of peers for Besu?&quot;",id:"whats-the-ideal-number-of-peers-for-besu",level:3},{value:"&quot;What&#39;s the benefit of increasing the number of peers?&quot;",id:"whats-the-benefit-of-increasing-the-number-of-peers",level:3},{value:"Metrics",id:"metrics",level:2}],u={toc:l},c="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"troubleshoot-peering"},"Troubleshoot peering"),(0,n.kt)("p",null,"Many factors can affect the ability of your node to find and maintain peers. Your network router, machine environment, and node configuration are all important. If you have peering issues, start by ",(0,n.kt)("a",{parentName:"p",href:"/public-networks/how-to/connect/configure-ports"},"configuring your ports")," and ",(0,n.kt)("a",{parentName:"p",href:"/public-networks/how-to/connect/manage-peers"},"managing peers"),"."),(0,n.kt)("h2",{id:"peering-faq"},"Peering FAQ"),(0,n.kt)("h3",{id:"why-cant-i-find-enough-peers-to-sync"},'"Why can\u2019t I find enough peers to sync?"'),(0,n.kt)("p",null,"One or more of the following may be the cause:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your hardware doesn't have enough CPU, disk IOPS, or bandwidth to handle all the peers."),(0,n.kt)("li",{parentName:"ul"},"Your ports aren't open in your firewall and/or router."),(0,n.kt)("li",{parentName:"ul"},"Your node is sending large numbers of DNS requests. See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/besu/issues/4375"},"issue #4375"),"."),(0,n.kt)("li",{parentName:"ul"},"You're using ",(0,n.kt)("a",{parentName:"li",href:"/public-networks/get-started/connect/sync-node#checkpoint-synchronization"},"checkpoint sync"),", which doesn't download all historical block data, so your peers may disconnect you when fetching those blocks."),(0,n.kt)("li",{parentName:"ul"},"Your node is experiencing the normal behavior of peers connecting and disconnecting. This is especially normal soon after you start your node.")),(0,n.kt)("p",null,"You can try the following to find more peers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("a",{parentName:"li",href:"/public-networks/reference/cli/options#p2p-host"},(0,n.kt)("inlineCode",{parentName:"a"},"p2p-host"))," to your external IP address to allow inbound connections."),(0,n.kt)("li",{parentName:"ul"},"Restart Besu. This can take a while to build up again."),(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"-Xdns-enabled")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," (only for private networks)."),(0,n.kt)("li",{parentName:"ul"},"Set ",(0,n.kt)("inlineCode",{parentName:"li"},"-Xp2p-peer-lower-bound")," to a minimum number of peers."),(0,n.kt)("li",{parentName:"ul"},"Delete the node key (which is autogenerated in your data directory). There are two reasons that this might help find more peers:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Your node (identified by the address associated with this key) has been put onto other peers' bad peer lists for some reason."),(0,n.kt)("li",{parentName:"ol"},'Peer discovery is influenced by the value of the node key. This is related to the node "distance" in the ',(0,n.kt)("a",{parentName:"li",href:"https://github.com/ethereum/devp2p/wiki/Discovery-Overview#kademlia"},"discovery algorithm"),".")))),(0,n.kt)("p",null,"You can read the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.prylabs.network/docs/prysm-usage/p2p-host-ip"},"Prysm EL and CL peering documentation")," for more information."),(0,n.kt)("h3",{id:"what-network-or-routermodem-settings-should-i-check"},'"What network or router/modem settings should I check?"'),(0,n.kt)("p",null,"Check the following settings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your machine and router's specified DNS should support TCP. You can check your DNS online for TCP support. Google and Cloudflare, 8.8.8.8 and 1.1.1.1, support TCP over port 853. Other DNS might as well."),(0,n.kt)("li",{parentName:"ul"},"The appropriate ports should be open on your router, or your router should have UPNP enabled. See the next FAQ for more information on router settings."),(0,n.kt)("li",{parentName:"ul"},"If you use ",(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/network/network-tutorial-host/"},"Docker")," or virtualization, the container should be able to create outbound connections on the host machine.")),(0,n.kt)("h3",{id:"how-do-i-openforward-my-ports"},'"How do I open/forward my ports?"'),(0,n.kt)("p",null,"If you\u2019re behind NAT, you probably need to set up port forwarding in your router. You might also need to configure your firewall. Forward and open ",(0,n.kt)("inlineCode",{parentName:"p"},"30303")," (if using the default p2p port) for both UDP and TCP. If your router supports UPNP, you can set ",(0,n.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#nat-method"},(0,n.kt)("inlineCode",{parentName:"a"},"--nat-method"))," to ",(0,n.kt)("a",{parentName:"p",href:"/public-networks/how-to/connect/specify-nat#upnp"},(0,n.kt)("inlineCode",{parentName:"a"},"UPNPP2PONLY")),"."),(0,n.kt)("h3",{id:"how-do-i-test-that-my-ports-are-open"},'"How do I test that my ports are open?"'),(0,n.kt)("p",null,"You can use this ",(0,n.kt)("a",{parentName:"p",href:"https://www.yougetsignal.com/tools/open-ports/"},"open port checker"),"."),(0,n.kt)("h3",{id:"whats-the-ideal-number-of-peers-for-besu"},'"What\'s the ideal number of peers for Besu?"'),(0,n.kt)("p",null,"The default maximum is 25. Increasing the number of peers increases the bandwidth, CPU, and disk access Besu uses to respond to peers. Hardware with low specifications might result in low peer numbers. You'll experience diminishing returns with a larger number of peers (>100)."),(0,n.kt)("h3",{id:"whats-the-benefit-of-increasing-the-number-of-peers"},'"What\'s the benefit of increasing the number of peers?"'),(0,n.kt)("p",null,"Increasing the number of max peers won't speed up Besu syncing, because the bottleneck during sync is disk IO and CPU."),(0,n.kt)("p",null,"Note that Besu's peers are only used for the initial sync and transaction gossip, neither of which affects attestation performance. The beacon node connectivity controls how quickly you receive blocks and how attestations are published. Increasing Besu's peer count increases the load on your node, which may hurt attestations."),(0,n.kt)("h2",{id:"metrics"},"Metrics"),(0,n.kt)("p",null,"Capture ",(0,n.kt)("a",{parentName:"p",href:"/public-networks/how-to/monitor/"},"metrics")," to gain insights into peering behavior over time."),(0,n.kt)("p",null,"To ",(0,n.kt)("a",{parentName:"p",href:"/public-networks/how-to/monitor/metrics"},"enable Prometheus to access Besu"),", open the metrics port or metrics push port to Prometheus or the Prometheus push gateway on TCP."),(0,n.kt)("p",null,"Specify the ports for Prometheus and Prometheus push gateway using the ",(0,n.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#metrics-port"},(0,n.kt)("inlineCode",{parentName:"a"},"--metrics-port"))," and ",(0,n.kt)("a",{parentName:"p",href:"/public-networks/reference/cli/options#metrics-push-port"},(0,n.kt)("inlineCode",{parentName:"a"},"--metrics-push-port"))," options. The defaults are ",(0,n.kt)("inlineCode",{parentName:"p"},"9545")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"9001"),"."))}h.isMDXComponent=!0}}]);