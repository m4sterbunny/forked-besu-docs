"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[46054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||s;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={title:"Performance best practices",description:"Performance best practices",sidebar_position:10,tags:["private networks"]},o="Performance best practices",i={unversionedId:"private-networks/how-to/use-privacy/performance-best-practices",id:"version-23.7.1/private-networks/how-to/use-privacy/performance-best-practices",title:"Performance best practices",description:"Performance best practices",source:"@site/versioned_docs/version-23.7.1/private-networks/how-to/use-privacy/performance-best-practices.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/performance-best-practices",permalink:"/private-networks/how-to/use-privacy/performance-best-practices",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/private-networks/how-to/use-privacy/performance-best-practices.md",tags:[{label:"private networks",permalink:"/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1692684094,formattedLastUpdatedAt:"Aug 22, 2023",sidebarPosition:10,frontMatter:{title:"Performance best practices",description:"Performance best practices",sidebar_position:10,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use the web3js-quorum library",permalink:"/private-networks/how-to/use-privacy/web3js-quorum"},next:{title:"Use local permissioning",permalink:"/private-networks/how-to/use-permissioning/local"}},c={},l=[{value:"General performance",id:"general-performance",level:2},{value:"Use fast, local, solid state storage",id:"use-fast-local-solid-state-storage",level:3},{value:"Private transaction performance",id:"private-transaction-performance",level:2},{value:"Use concurrent submission",id:"use-concurrent-submission",level:3},{value:"Co-locate Besu and Tessera",id:"co-locate-besu-and-tessera",level:3},{value:"Optimize worst-case latency between Tessera nodes",id:"optimize-worst-case-latency-between-tessera-nodes",level:3},{value:"Use stateful nonce management",id:"use-stateful-nonce-management",level:3},{value:"Use random senders for privacy marker transactions",id:"use-random-senders-for-privacy-marker-transactions",level:3},{value:"Avoid queuing transactions in Tessera",id:"avoid-queuing-transactions-in-tessera",level:3},{value:"Limit the group size to reduce communication overhead",id:"limit-the-group-size-to-reduce-communication-overhead",level:3},{value:"Limit group membership changes and make them quick",id:"limit-group-membership-changes-and-make-them-quick",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"performance-best-practices"},"Performance best practices"),(0,a.kt)("p",null,"This document collects deployment and usage tips to help you achieve high performance for private transactions. If transaction throughput or latency is not meeting your expectations, please consider the following before raising an issue."),(0,a.kt)("h2",{id:"general-performance"},"General performance"),(0,a.kt)("p",null,"Private transactions use the same facilities as public ones. General Besu performance tunings apply. Specific approaches are out of scope of this document, except for the following, which strongly impacts performance:"),(0,a.kt)("h3",{id:"use-fast-local-solid-state-storage"},"Use fast, local, solid state storage"),(0,a.kt)("p",null,"Running EVM transactions creates a lot of random reads that are executed sequentially. The Besu data folder for high throughput nodes should be located on the fastest possible storage media."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prefer ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/disks/local-ssd#performance"},"NVMe")," attached SLC flash or Intel Optane."),(0,a.kt)("li",{parentName:"ul"},"Avoid network attached SSDs or cloud storage with limited input/output operations per second."),(0,a.kt)("li",{parentName:"ul"},"Do not use spinning disks under any circumstances.")),(0,a.kt)("h2",{id:"private-transaction-performance"},"Private transaction performance"),(0,a.kt)("h3",{id:"use-concurrent-submission"},"Use concurrent submission"),(0,a.kt)("p",null,"When submitting a private transaction using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/web3js-quorum"},"web3js-quorum"),", the submit call will only return once the privacy marker transaction has been included in a block. This limits the throughput to at most one private transaction per block when submitting from a single thread. To increase throughput, use web3js-quorum from multiple concurrent threads or processes."),(0,a.kt)("h3",{id:"co-locate-besu-and-tessera"},"Co-locate Besu and Tessera"),(0,a.kt)("p",null,"Besu has to talk to its local Tessera node frequently while handling a block. While we do not recommend running them on the same node, minimizing the latency between Besu and Tessera will improve block processing times. Besu and Tessera should not be hosted in geographically distributed locations."),(0,a.kt)("h3",{id:"optimize-worst-case-latency-between-tessera-nodes"},"Optimize worst-case latency between Tessera nodes"),(0,a.kt)("p",null,"When distributing a new private transaction between Tessera nodes, the overall throughput is determined by the slowest Tessera nodes. Try to minimize network latency between Tessera nodes and do not mix different machine types when hosting Tessera."),(0,a.kt)("h3",{id:"use-stateful-nonce-management"},"Use stateful nonce management"),(0,a.kt)("p",null,"Management of public and private nonces in web3js-quorum is stateless: before a transaction is sent, web3js-quorum has to query for those nonces. This is increasing latency, the node's load, and is a source of fragility due to nonce collision when multiple senders try to use the same account concurrently."),(0,a.kt)("p",null,"For performance and reliability it is advantageous to manage nonces in a stateful manner on the client side instead of querying them for every transaction. If custom code for this is not an option, ",(0,a.kt)("a",{parentName:"p",href:"https://consensys.net/codefi/orchestrate/"},"Orchestrate")," can be used."),(0,a.kt)("h3",{id:"use-random-senders-for-privacy-marker-transactions"},"Use random senders for privacy marker transactions"),(0,a.kt)("p",null,"To avoid public nonce management, privacy marker transactions can be sent using a ",(0,a.kt)("a",{parentName:"p",href:"https://besu.hyperledger.org/en/stable/Reference/CLI/CLI-Syntax/#privacy-marker-transaction-signing-key-file"},"random account per transaction"),". This option is only available for zero gas networks."),(0,a.kt)("h3",{id:"avoid-queuing-transactions-in-tessera"},"Avoid queuing transactions in Tessera"),(0,a.kt)("p",null,"When Tessera is overloaded with transactions, the performance breaks down catastrophically due to unbounded growth of the request queue. Avoid sending more transactions to Tessera than it can handle. Sudden jumps in submission latency and submission failure rate should be answered with a load reduction on the client side, for example using a back-off scheme."),(0,a.kt)("p",null,"Please note that this is not Tessera specific but a general issue in distributed systems. It just happens that if queueing discipline is not maintained, Tessera tends to be the first component to fail."),(0,a.kt)("h3",{id:"limit-the-group-size-to-reduce-communication-overhead"},"Limit the group size to reduce communication overhead"),(0,a.kt)("p",null,"Smaller groups need fewer communication for transaction propagation. If reducing the number of Tessera nodes involved in a transaction is an option, it will lead to slightly better tail latencies. Multi-tenancy Tessera can be used to have large groups with a small number of Tessera nodes (possibly only one)."),(0,a.kt)("h3",{id:"limit-group-membership-changes-and-make-them-quick"},"Limit group membership changes and make them quick"),(0,a.kt)("p",null,"Groups are locked (prevented from executing transactions) during membership changes. Try to minimize the number of times the membership changes. When possible, spread load across multiple groups to always have some groups available while others are locked. Consider batching group membership changes if possible. Note however that this does not work with the default management contract, yet."))}p.isMDXComponent=!0}}]);