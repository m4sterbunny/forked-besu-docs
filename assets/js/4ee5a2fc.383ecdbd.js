"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[59205],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Local playground",sidebar_position:1,description:"Deploying a Hyperledger Besu private network locally with Kubernetes",tags:["private networks"]},i="Deploy in a local environment",l={unversionedId:"private-networks/tutorials/kubernetes/playground",id:"version-23.4.1/private-networks/tutorials/kubernetes/playground",title:"Local playground",description:"Deploying a Hyperledger Besu private network locally with Kubernetes",source:"@site/versioned_docs/version-23.4.1/private-networks/tutorials/kubernetes/playground.md",sourceDirName:"private-networks/tutorials/kubernetes",slug:"/private-networks/tutorials/kubernetes/playground",permalink:"/23.4.1/private-networks/tutorials/kubernetes/playground",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/tutorials/kubernetes/playground.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1697221498,formattedLastUpdatedAt:"Oct 13, 2023",sidebarPosition:1,frontMatter:{title:"Local playground",sidebar_position:1,description:"Deploying a Hyperledger Besu private network locally with Kubernetes",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Deploy a Hyperledger Besu private network with Kubernetes",permalink:"/23.4.1/private-networks/tutorials/kubernetes/"},next:{title:"Create a cluster",permalink:"/23.4.1/private-networks/tutorials/kubernetes/cluster"}},s={},p=[{value:"Steps",id:"steps",level:2},{value:"Important notes",id:"important-notes",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-in-a-local-environment"},"Deploy in a local environment"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/playground"},"playground")," was created to provide an opportunity to deploy ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-kubernetes/"},"quorum-kubernetes")," in a local environment before attempting in a live environment (such as in the cloud or on-premise). Local deployment can be done with any local Kubernetes tool. Minikube and Rancher Desktop have been tested to work, but any complete Kubernetes solution with support for ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," should suffice."),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the playground ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/playground"},(0,o.kt)("inlineCode",{parentName:"a"},"README")),"."),(0,o.kt)("li",{parentName:"ol"},"Ensure that your system meets the requirements specified."),(0,o.kt)("li",{parentName:"ol"},"Choose your Ethereum client (Hyperledger Besu or GoQuorum): ",(0,o.kt)("inlineCode",{parentName:"li"},"quorum-besu")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"quorum-go"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose your consensus algorithm. The playground supports Clique, Ethash (PoW), and IBFT2 for Besu, and IBFT for GoQuorum."),(0,o.kt)("li",{parentName:"ol"},"Follow the instructions from the ",(0,o.kt)("inlineCode",{parentName:"li"},"README")," for the chosen client and consensus algorithm folder.")),(0,o.kt)("h2",{id:"important-notes"},"Important notes"),(0,o.kt)("p",null,"Consider the following when deploying and developing with the playground:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The playground is created specifically for developers and operators to become familiar with the deployment of Besu in a Kubernetes environment in preparation for going into a cloud or on-premise environment. Thus, it should ",(0,o.kt)("strong",{parentName:"li"},"not")," be deployed into a production environment."),(0,o.kt)("li",{parentName:"ul"},"The playground is not a complete reflection of the ",(0,o.kt)("inlineCode",{parentName:"li"},"helm")," charts as it does not use ",(0,o.kt)("inlineCode",{parentName:"li"},"Helm"),", but rather static or non-templated code that is deployed through ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl apply -f"),". This means that without ",(0,o.kt)("inlineCode",{parentName:"li"},"Helm")," there's a significant amount of repeated code. This is fine for development but not ideal for a production environment."),(0,o.kt)("li",{parentName:"ul"},"The playground uses static/hard-coded keys. Automatic key generation is only supported in ",(0,o.kt)("inlineCode",{parentName:"li"},"helm")," charts."),(0,o.kt)("li",{parentName:"ul"},"As the playground is for local development, no cloud integration or lifecycle support is offered.")))}c.isMDXComponent=!0}}]);