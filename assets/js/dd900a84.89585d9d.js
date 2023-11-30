"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[22338],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=c(r),m=n,y=l["".concat(p,".").concat(m)]||l[m]||d[m]||s;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const s={title:"Run Tessera with Besu",description:"Running ConsenSys Quorum Tessera with Hyperledger Besu",sidebar_position:3,tags:["private networks"]},i="Run Tessera with Besu",o={unversionedId:"private-networks/how-to/use-privacy/tessera",id:"private-networks/how-to/use-privacy/tessera",title:"Run Tessera with Besu",description:"Running ConsenSys Quorum Tessera with Hyperledger Besu",source:"@site/docs/private-networks/how-to/use-privacy/tessera.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/tessera",permalink:"/development/private-networks/how-to/use-privacy/tessera",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/use-privacy/tessera.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1701375992,formattedLastUpdatedAt:"Nov 30, 2023",sidebarPosition:3,frontMatter:{title:"Run Tessera with Besu",description:"Running ConsenSys Quorum Tessera with Hyperledger Besu",sidebar_position:3,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Besu-extended privacy",permalink:"/development/private-networks/how-to/use-privacy/besu-extended"},next:{title:"Create and manage privacy groups",permalink:"/development/private-networks/how-to/use-privacy/privacy-groups"}},p={},c=[{value:"High availability",id:"high-availability",level:2},{value:"Separate instances",id:"separate-instances",level:2}],u={toc:c},l="wrapper";function d(e){let{components:t,...s}=e;return(0,n.kt)(l,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"run-tessera-with-besu"},"Run Tessera with Besu"),(0,n.kt)("p",null,"To enable ",(0,n.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/privacy/"},"privacy functionality")," in production systems, ",(0,n.kt)("a",{parentName:"p",href:"https://docs.tessera.consensys.net/"},"Tessera")," must be ",(0,n.kt)("a",{parentName:"p",href:"#high-availability"},"highly available")," and ",(0,n.kt)("a",{parentName:"p",href:"#separate-instances"},"run in a separate instance")," to Hyperledger Besu."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Besu-Tessera-High-Availability",src:r(27558).Z,width:"1512",height:"648"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can also configure Besu for high availability using load balancers.")),(0,n.kt)("h2",{id:"high-availability"},"High availability"),(0,n.kt)("p",null,"Privacy requires you to ",(0,n.kt)("a",{parentName:"p",href:"https://consensys.net/docs/goquorum//en/stable/configure-and-manage/configure/high-availability/"},"configure Tessera for high availability"),". Besu also requires ",(0,n.kt)("a",{parentName:"p",href:"https://docs.tessera.consensys.net/HowTo/Configure/Orion-Mode"},(0,n.kt)("inlineCode",{parentName:"a"},"orion")," mode")," to be enabled in Tessera."),(0,n.kt)("p",null,"To successfully distribute a private transaction, all private transaction participants must be online. If any participants are offline when submitting the private transaction, the transaction is not attempted and you need to resubmit the transaction."),(0,n.kt)("p",null,"If a Tessera node is unavailable when Besu attempts to process a privacy marker transaction, the Besu node stops processing all new blocks until Tessera is available. The Besu node continually attempts to process the privacy marker transaction until Tessera is available again."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If Tessera becomes available but has lost data, Besu resumes processing blocks and the private states in the Besu nodes might become inconsistent.")),(0,n.kt)("h2",{id:"separate-instances"},"Separate instances"),(0,n.kt)("p",null,"For production systems, we recommend running Besu and Tessera in separate instances. If running Besu and Tessera in the same instance, restrict the amount of memory used by each JVM to ensure each has enough memory."))}d.isMDXComponent=!0},27558:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Besu-Tessera-High-Availability-452df28ed69ccdc9a06250a617e5a477.png"}}]);