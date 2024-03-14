"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[42130],{29613:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>h,toc:()=>a});var t=n(85893),r=n(11151);const s={title:"Troubleshoot peering",sidebar_position:4,description:"How to troubleshoot peering",tags:["public networks"]},i="Troubleshoot peering",h={id:"public-networks/how-to/troubleshoot/peering",title:"Troubleshoot peering",description:"How to troubleshoot peering",source:"@site/versioned_docs/version-23.7.3/public-networks/how-to/troubleshoot/peering.md",sourceDirName:"public-networks/how-to/troubleshoot",slug:"/public-networks/how-to/troubleshoot/peering",permalink:"/23.7.3/public-networks/how-to/troubleshoot/peering",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/public-networks/how-to/troubleshoot/peering.md",tags:[{label:"public networks",permalink:"/23.7.3/tags/public-networks"}],version:"23.7.3",lastUpdatedAt:1710455521,formattedLastUpdatedAt:"Mar 14, 2024",sidebarPosition:4,frontMatter:{title:"Troubleshoot peering",sidebar_position:4,description:"How to troubleshoot peering",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Troubleshoot performance",permalink:"/23.7.3/public-networks/how-to/troubleshoot/performance"},next:{title:"Concepts",permalink:"/23.7.3/public-networks/concepts"}},c={},a=[{value:"Peering FAQ",id:"peering-faq",level:2},{value:"&quot;Why can\u2019t I find enough peers to sync?&quot;",id:"why-cant-i-find-enough-peers-to-sync",level:3},{value:"&quot;What network or router/modem settings should I check?&quot;",id:"what-network-or-routermodem-settings-should-i-check",level:3},{value:"&quot;How do I open/forward my ports?&quot;",id:"how-do-i-openforward-my-ports",level:3},{value:"&quot;How do I test that my ports are open?&quot;",id:"how-do-i-test-that-my-ports-are-open",level:3},{value:"&quot;What&#39;s the ideal number of peers for Besu?&quot;",id:"whats-the-ideal-number-of-peers-for-besu",level:3},{value:"&quot;What&#39;s the benefit of increasing the number of peers?&quot;",id:"whats-the-benefit-of-increasing-the-number-of-peers",level:3},{value:"Metrics",id:"metrics",level:2}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"troubleshoot-peering",children:"Troubleshoot peering"}),"\n",(0,t.jsxs)(o.p,{children:["Many factors can affect the ability of your node to find and maintain peers. Your network router, machine environment, and node configuration are all important. If you have peering issues, start by ",(0,t.jsx)(o.a,{href:"/23.7.3/public-networks/how-to/connect/configure-ports",children:"configuring your ports"})," and ",(0,t.jsx)(o.a,{href:"/23.7.3/public-networks/how-to/connect/manage-peers",children:"managing peers"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"peering-faq",children:"Peering FAQ"}),"\n",(0,t.jsx)(o.h3,{id:"why-cant-i-find-enough-peers-to-sync",children:'"Why can\u2019t I find enough peers to sync?"'}),"\n",(0,t.jsx)(o.p,{children:"One or more of the following may be the cause:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Your hardware doesn't have enough CPU, disk IOPS, or bandwidth to handle all the peers."}),"\n",(0,t.jsx)(o.li,{children:"Your ports aren't open in your firewall and/or router."}),"\n",(0,t.jsxs)(o.li,{children:["Your node is sending large numbers of DNS requests. See ",(0,t.jsx)(o.a,{href:"https://github.com/hyperledger/besu/issues/4375",children:"issue #4375"}),"."]}),"\n",(0,t.jsxs)(o.li,{children:["You're using ",(0,t.jsx)(o.a,{href:"/23.7.3/public-networks/get-started/connect/sync-node#checkpoint-synchronization",children:"checkpoint sync"}),", which doesn't download all historical block data, so your peers may disconnect you when fetching those blocks."]}),"\n",(0,t.jsx)(o.li,{children:"Your node is experiencing the normal behavior of peers connecting and disconnecting. This is especially normal soon after you start your node."}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"You can try the following to find more peers:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Set ",(0,t.jsx)(o.a,{href:"/23.7.3/public-networks/reference/cli/options#p2p-host",children:(0,t.jsx)(o.code,{children:"p2p-host"})})," to your external IP address to allow inbound connections."]}),"\n",(0,t.jsx)(o.li,{children:"Restart Besu. This can take a while to build up again."}),"\n",(0,t.jsxs)(o.li,{children:["Set ",(0,t.jsx)(o.code,{children:"-Xdns-enabled"})," to ",(0,t.jsx)(o.code,{children:"true"})," (only for private networks)."]}),"\n",(0,t.jsxs)(o.li,{children:["Set ",(0,t.jsx)(o.code,{children:"-Xp2p-peer-lower-bound"})," to a minimum number of peers."]}),"\n",(0,t.jsxs)(o.li,{children:["Delete the node key (which is autogenerated in your data directory). There are two reasons that this might help find more peers:","\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsx)(o.li,{children:"Your node (identified by the address associated with this key) has been put onto other peers' bad peer lists for some reason."}),"\n",(0,t.jsxs)(o.li,{children:['Peer discovery is influenced by the value of the node key. This is related to the node "distance" in the ',(0,t.jsx)(o.a,{href:"https://github.com/ethereum/devp2p/wiki/Discovery-Overview#kademlia",children:"discovery algorithm"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["You can read the ",(0,t.jsx)(o.a,{href:"https://docs.prylabs.network/docs/prysm-usage/p2p-host-ip",children:"Prysm EL and CL peering documentation"})," for more information."]}),"\n",(0,t.jsx)(o.h3,{id:"what-network-or-routermodem-settings-should-i-check",children:'"What network or router/modem settings should I check?"'}),"\n",(0,t.jsx)(o.p,{children:"Check the following settings:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Your machine and router's specified DNS should support TCP. You can check your DNS online for TCP support. Google and Cloudflare, 8.8.8.8 and 1.1.1.1, support TCP over port 853. Other DNS might as well."}),"\n",(0,t.jsx)(o.li,{children:"The appropriate ports should be open on your router, or your router should have UPNP enabled. See the next FAQ for more information on router settings."}),"\n",(0,t.jsxs)(o.li,{children:["If you use ",(0,t.jsx)(o.a,{href:"https://docs.docker.com/network/network-tutorial-host/",children:"Docker"})," or virtualization, the container should be able to create outbound connections on the host machine."]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"how-do-i-openforward-my-ports",children:'"How do I open/forward my ports?"'}),"\n",(0,t.jsxs)(o.p,{children:["If you\u2019re behind NAT, you probably need to set up port forwarding in your router. You might also need to configure your firewall. Forward and open ",(0,t.jsx)(o.code,{children:"30303"})," (if using the default p2p port) for both UDP and TCP. If your router supports UPNP, you can set ",(0,t.jsx)(o.a,{href:"/23.7.3/public-networks/reference/cli/options#nat-method",children:(0,t.jsx)(o.code,{children:"--nat-method"})})," to ",(0,t.jsx)(o.a,{href:"/23.7.3/public-networks/how-to/connect/specify-nat#upnp",children:(0,t.jsx)(o.code,{children:"UPNPP2PONLY"})}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"how-do-i-test-that-my-ports-are-open",children:'"How do I test that my ports are open?"'}),"\n",(0,t.jsxs)(o.p,{children:["You can use this ",(0,t.jsx)(o.a,{href:"https://www.yougetsignal.com/tools/open-ports/",children:"open port checker"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"whats-the-ideal-number-of-peers-for-besu",children:'"What\'s the ideal number of peers for Besu?"'}),"\n",(0,t.jsx)(o.p,{children:"The default maximum is 25. Increasing the number of peers increases the bandwidth, CPU, and disk access Besu uses to respond to peers. Hardware with low specifications might result in low peer numbers. You'll experience diminishing returns with a larger number of peers (>100)."}),"\n",(0,t.jsx)(o.h3,{id:"whats-the-benefit-of-increasing-the-number-of-peers",children:'"What\'s the benefit of increasing the number of peers?"'}),"\n",(0,t.jsx)(o.p,{children:"Increasing the number of max peers won't speed up Besu syncing, because the bottleneck during sync is disk IO and CPU."}),"\n",(0,t.jsx)(o.p,{children:"Note that Besu's peers are only used for the initial sync and transaction gossip, neither of which affects attestation performance. The beacon node connectivity controls how quickly you receive blocks and how attestations are published. Increasing Besu's peer count increases the load on your node, which may hurt attestations."}),"\n",(0,t.jsx)(o.h2,{id:"metrics",children:"Metrics"}),"\n",(0,t.jsxs)(o.p,{children:["Capture ",(0,t.jsx)(o.a,{href:"/23.7.3/public-networks/how-to/monitor/",children:"metrics"})," to gain insights into peering behavior over time."]}),"\n",(0,t.jsxs)(o.p,{children:["To ",(0,t.jsx)(o.a,{href:"/23.7.3/public-networks/how-to/monitor/metrics",children:"enable Prometheus to access Besu"}),", open the metrics port or metrics push port to Prometheus or the Prometheus push gateway on TCP."]}),"\n",(0,t.jsxs)(o.p,{children:["Specify the ports for Prometheus and Prometheus push gateway using the ",(0,t.jsx)(o.a,{href:"/23.7.3/public-networks/reference/cli/options#metrics-port",children:(0,t.jsx)(o.code,{children:"--metrics-port"})})," and ",(0,t.jsx)(o.a,{href:"/23.7.3/public-networks/reference/cli/options#metrics-push-port",children:(0,t.jsx)(o.code,{children:"--metrics-push-port"})})," options. The defaults are ",(0,t.jsx)(o.code,{children:"9545"})," and ",(0,t.jsx)(o.code,{children:"9001"}),"."]})]})}function d(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>h,a:()=>i});var t=n(67294);const r={},s=t.createContext(r);function i(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function h(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);