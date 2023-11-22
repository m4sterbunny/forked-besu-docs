"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[3075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=a,u=l["".concat(c,".").concat(f)]||l[f]||m[f]||i;return n?o.createElement(u,r(r({ref:t},d),{},{components:n})):o.createElement(u,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={title:"Configure static nodes",sidebar_position:1,description:"Configuring static nodes",tags:["private networks"]},r="Static nodes",s={unversionedId:"public-networks/how-to/connect/static-nodes",id:"version-23.4.0/public-networks/how-to/connect/static-nodes",title:"Configure static nodes",description:"Configuring static nodes",source:"@site/versioned_docs/version-23.4.0/public-networks/how-to/connect/static-nodes.md",sourceDirName:"public-networks/how-to/connect",slug:"/public-networks/how-to/connect/static-nodes",permalink:"/23.4.0/public-networks/how-to/connect/static-nodes",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/how-to/connect/static-nodes.md",tags:[{label:"private networks",permalink:"/23.4.0/tags/private-networks"}],version:"23.4.0",lastUpdatedAt:1700672486,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:1,frontMatter:{title:"Configure static nodes",sidebar_position:1,description:"Configuring static nodes",tags:["private networks"]},sidebar:"publicDocSidebar",previous:{title:"Create and send transactions",permalink:"/23.4.0/public-networks/how-to/send-transactions"},next:{title:"Configure ports",permalink:"/23.4.0/public-networks/how-to/connect/configure-ports"}},c={},p=[{value:"Configure static nodes",id:"configure-static-nodes",level:2},{value:"<code>static-nodes.json</code> file",id:"static-nodesjson-file",level:3}],d={toc:p},l="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"static-nodes"},"Static nodes"),(0,a.kt)("p",null,"Static nodes are a configured set of trusted nodes. Static nodes are exempt from ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/connect/manage-peers#limit-peers"},"maximum peer")," and ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/how-to/connect/manage-peers#limit-remote-connections"},"remote connection")," limits."),(0,a.kt)("p",null,"Besu attempts to maintain connections with static nodes by periodically initiating a connection to any unconnected static node."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Bootnodes and static nodes are parallel methods for finding peers. Depending on your use case, you can use only bootnodes, only static nodes, or both bootnodes and static nodes. For example, you run multiple nodes on Mainnet (discovery using bootnodes), but want to ensure your nodes are always connected (using static nodes)."),(0,a.kt)("p",{parentName:"admonition"},"To find peers, configure one or more ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/how-to/configure/bootnodes"},"bootnodes"),". To configure a specific set of peer connections, use static nodes.")),(0,a.kt)("h2",{id:"configure-static-nodes"},"Configure static nodes"),(0,a.kt)("p",null,"To configure a network of static nodes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"List the ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/node-keys#enode-url"},"enode URLs")," of the nodes in the ",(0,a.kt)("a",{parentName:"p",href:"#static-nodesjson-file"},(0,a.kt)("inlineCode",{parentName:"a"},"static-nodes.json")," file"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save the ",(0,a.kt)("inlineCode",{parentName:"p"},"static-nodes.json")," file in the data directory (specified by ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#data-path"},(0,a.kt)("inlineCode",{parentName:"a"},"--data-path")),") of each node. Alternatively, you can explicitly specify the static nodes file on the command line using ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#static-nodes-file"},(0,a.kt)("inlineCode",{parentName:"a"},"--static-nodes-file")),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start Besu with discovery disabled using ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#discovery-enabled"},(0,a.kt)("inlineCode",{parentName:"a"},"--discovery-enabled=false")),"."))),(0,a.kt)("p",null,"To update the list of static peers at run time, use the ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/api/#admin_addpeer"},(0,a.kt)("inlineCode",{parentName:"a"},"admin_addPeer"))," and ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/api/#admin_removepeer"},(0,a.kt)("inlineCode",{parentName:"a"},"admin_removePeer"))," JSON-RPC API methods."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Runtime modifications of static nodes are not persisted between runs. The ",(0,a.kt)("inlineCode",{parentName:"p"},"static-nodes.json")," file is not updated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"admin_addPeer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"admin_removePeer")," methods."),(0,a.kt)("p",{parentName:"admonition"},"Nodes not in the list of the static nodes are not prevented from connecting. To prevent nodes from connecting, use ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/private-networks/concepts/permissioning/"},"Permissioning"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If the added peer does not appear in the peer list (returned by ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/api/#admin_peers"},(0,a.kt)("inlineCode",{parentName:"a"},"admin_peers")),"), check the the supplied ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/node-keys#enode-url"},"enode URL")," is correct, the node is running, and the node is listening for TCP connections on the endpoint.")),(0,a.kt)("h3",{id:"static-nodesjson-file"},(0,a.kt)("inlineCode",{parentName:"h3"},"static-nodes.json")," file"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"static-nodes.json")," file must be in the data directory (specified by ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/reference/cli/options#data-path"},(0,a.kt)("inlineCode",{parentName:"a"},"--data-path")),") and contain a JSON array of ",(0,a.kt)("a",{parentName:"p",href:"/23.4.0/public-networks/concepts/node-keys#enode-url"},"enode URLs"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example"',title:'"Example"'},'[\n  "enode://cea71cb65a471037e01508cebcc178f176f9d5267bf29507ea1f6431eb6a5dc67d086dc8dc54358a72299dab1161febc5d7af49d1609c69b42b5e54544145d4f@127.0.0.1:30303",\n  "enode://ca05e940488614402705a6b6836288ea902169ecc67a89e1bd5ef94bc0d1933f20be16bc881ffb4be59f521afa8718fc26eec2b0e90f2cd0f44f99bc8103e60f@127.0.0.1:30304"\n]\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Each node has a ",(0,a.kt)("inlineCode",{parentName:"p"},"static-nodes.json")," file. We recommend each node in the network has the same ",(0,a.kt)("inlineCode",{parentName:"p"},"static-nodes.json")," file.")))}m.isMDXComponent=!0}}]);