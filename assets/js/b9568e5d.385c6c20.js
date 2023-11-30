"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[96827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Specify NAT method",sidebar_position:4,description:"Configuring NAT with Hyperledger Besu",tags:["public networks","private networks"]},o="Specify the NAT method",p={unversionedId:"public-networks/how-to/connect/specify-nat",id:"version-23.10.1/public-networks/how-to/connect/specify-nat",title:"Specify NAT method",description:"Configuring NAT with Hyperledger Besu",source:"@site/versioned_docs/version-23.10.1/public-networks/how-to/connect/specify-nat.md",sourceDirName:"public-networks/how-to/connect",slug:"/public-networks/how-to/connect/specify-nat",permalink:"/23.10.1/public-networks/how-to/connect/specify-nat",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.1/public-networks/how-to/connect/specify-nat.md",tags:[{label:"public networks",permalink:"/23.10.1/tags/public-networks"},{label:"private networks",permalink:"/23.10.1/tags/private-networks"}],version:"23.10.1",lastUpdatedAt:1700670990,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:4,frontMatter:{title:"Specify NAT method",sidebar_position:4,description:"Configuring NAT with Hyperledger Besu",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Manage peers",permalink:"/23.10.1/public-networks/how-to/connect/manage-peers"},next:{title:"Monitor Besu",permalink:"/23.10.1/public-networks/how-to/monitor/"}},l={},s=[{value:"Auto",id:"auto",level:2},{value:"UPnP",id:"upnp",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Docker",id:"docker",level:2},{value:"None",id:"none",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"specify-the-nat-method"},"Specify the NAT method"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#nat-method"},(0,a.kt)("inlineCode",{parentName:"a"},"--nat-method"))," option to specify the NAT method. Options are: ",(0,a.kt)("a",{parentName:"p",href:"#upnp"},(0,a.kt)("inlineCode",{parentName:"a"},"UPNP")),", ",(0,a.kt)("a",{parentName:"p",href:"#kubernetes"},(0,a.kt)("inlineCode",{parentName:"a"},"KUBERNETES")),", ",(0,a.kt)("a",{parentName:"p",href:"#docker"},(0,a.kt)("inlineCode",{parentName:"a"},"DOCKER")),", ",(0,a.kt)("a",{parentName:"p",href:"#auto"},(0,a.kt)("inlineCode",{parentName:"a"},"AUTO")),", and ",(0,a.kt)("a",{parentName:"p",href:"#none"},(0,a.kt)("inlineCode",{parentName:"a"},"NONE")),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/concepts/node-keys#enode-url"},"enode")," advertised to other nodes during discovery is the external IP address and port. The ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/api/#admin_nodeinfo"},(0,a.kt)("inlineCode",{parentName:"a"},"admin_nodeInfo"))," JSON-RPC API method returns the external address and port for the ",(0,a.kt)("inlineCode",{parentName:"p"},"enode")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"listenAddr")," properties."),(0,a.kt)("p",null,"While Hyperledger Besu is running, the following are not supported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IP address changes"),(0,a.kt)("li",{parentName:"ul"},"Changing NAT methods. To change the NAT method, restart the node with the ",(0,a.kt)("a",{parentName:"li",href:"/23.10.1/public-networks/reference/cli/options#nat-method"},(0,a.kt)("inlineCode",{parentName:"a"},"--nat-method"))," option set.")),(0,a.kt)("h2",{id:"auto"},"Auto"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AUTO")," detects if Besu is running inside a Kubernetes cluster or a Docker container."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If Besu is running in a Kubernetes cluster, ",(0,a.kt)("inlineCode",{parentName:"li"},"AUTO")," sets to ",(0,a.kt)("a",{parentName:"li",href:"#kubernetes"},(0,a.kt)("inlineCode",{parentName:"a"},"KUBERNETES")),"."),(0,a.kt)("li",{parentName:"ul"},"If Besu is running in a Docker container, ",(0,a.kt)("inlineCode",{parentName:"li"},"AUTO")," sets to ",(0,a.kt)("a",{parentName:"li",href:"#docker"},(0,a.kt)("inlineCode",{parentName:"a"},"DOCKER")),"."),(0,a.kt)("li",{parentName:"ul"},"If Besu is not running in Kubernetes or Docker container, ",(0,a.kt)("inlineCode",{parentName:"li"},"AUTO")," sets to ",(0,a.kt)("a",{parentName:"li",href:"#none"},(0,a.kt)("inlineCode",{parentName:"a"},"NONE")),".")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AUTO")," is the default NAT method."),(0,a.kt)("p",null,"The following log shows an automatic detection failure."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log",metastring:'title="The following log shows an automatic detection failure"',title:'"The',following:!0,log:!0,shows:!0,an:!0,automatic:!0,detection:!0,'failure"':!0},"INFO  | KubernetesNatManager | Starting kubernetes NAT manager.\nDEBUG | KubernetesNatManager | Trying to update information using Kubernetes client SDK.\nDEBUG | NatService | Nat manager failed to configure itself automatically due to the following reason Service not found. NONE mode will be used\nINFO  | NetworkRunner | Starting Network.\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If automatic detection fails, set the IP and ports in ",(0,a.kt)("a",{parentName:"p",href:"#none"},(0,a.kt)("inlineCode",{parentName:"a"},"NONE"))," mode.")),(0,a.kt)("h2",{id:"upnp"},"UPnP"),(0,a.kt)("p",null,"Specify ",(0,a.kt)("inlineCode",{parentName:"p"},"UPNP")," to quickly allow inbound peer connections without manual router configuration. Use UPnP in home or small office environments where a wireless router or modem provides NAT isolation."),(0,a.kt)("p",null,"UPnP automatically detects if a node is running in a UPnP environment and provides port forwarding. UPnP might introduce delays during node startup, especially on networks without a UPnP gateway device."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"UPNPP2PONLY")," if you wish to enable UPnP only for p2p traffic."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"UPnP support is often disabled by default in networking firmware. If disabled by default, you must explicitly enable UPnP support.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When the NAT method is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"UPNP"),", the advertised port is the same as the ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#p2p-port"},"listening port"),".")),(0,a.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,"Specify ",(0,a.kt)("inlineCode",{parentName:"p"},"KUBERNETES")," to explicitly specify Hyperledger Besu is running inside a Kubernetes cluster. Besu automatically detects if it's running inside of a Kubernetes cluster and interacts with Kubernetes APIs as required to determine external IP addresses and exposed ports."),(0,a.kt)("p",null,"In Kubernetes, the Ingress IP of the load balancer will be used as the external IP for Besu. A load balancer service can map any incoming port to a target port. These mapping rules will be the one retrieved by Besu."),(0,a.kt)("p",null,"A tutorial to ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/private-networks/tutorials/kubernetes/nat-manager"},"Configure the Nat Manager for Kubernetes")," is available."),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"Specify ",(0,a.kt)("inlineCode",{parentName:"p"},"DOCKER")," to explicitly specify Hyperledger Besu is running inside a Docker container. If you specify ",(0,a.kt)("inlineCode",{parentName:"p"},"DOCKER"),", you advertise the host IP address not the container IP address."),(0,a.kt)("p",null,"The host IP address is the advertised host specified in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/run/#add-entries-to-container-hosts-file---add-host"},(0,a.kt)("inlineCode",{parentName:"a"},"docker run")," command"),". If not specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run")," command, the advertised host defaults to the values for ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#p2p-host"},(0,a.kt)("inlineCode",{parentName:"a"},"--p2p-host"))," and ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#p2p-port"},(0,a.kt)("inlineCode",{parentName:"a"},"--p2p-port")),"."),(0,a.kt)("h2",{id:"none"},"None"),(0,a.kt)("p",null,"Specify ",(0,a.kt)("inlineCode",{parentName:"p"},"NONE")," to explicitly configure the external IP address and ports advertised using:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.10.1/public-networks/reference/cli/options#p2p-host"},(0,a.kt)("inlineCode",{parentName:"a"},"--p2p-host"))," and ",(0,a.kt)("a",{parentName:"li",href:"/23.10.1/public-networks/reference/cli/options#p2p-port"},(0,a.kt)("inlineCode",{parentName:"a"},"--p2p-port"))," for the P2P service."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/23.10.1/public-networks/reference/cli/options#rpc-http-host"},(0,a.kt)("inlineCode",{parentName:"a"},"--rpc-http-host"))," and ",(0,a.kt)("a",{parentName:"li",href:"/23.10.1/public-networks/reference/cli/options#rpc-http-port"},(0,a.kt)("inlineCode",{parentName:"a"},"--rpc-http-port"))," for the JSON-RPC HTTP service.")),(0,a.kt)("p",null,"The P2P and JSON-RPC HTTP hosts and ports are advertised in the ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/api/#net_services"},(0,a.kt)("inlineCode",{parentName:"a"},"net_services"))," method."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When the NAT method is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"NONE"),", the advertised port is the same as the ",(0,a.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#p2p-port"},"listening port"),".")))}u.isMDXComponent=!0}}]);