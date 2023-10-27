"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[57425],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},v=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),v=n,f=p["".concat(l,".").concat(v)]||p[v]||c[v]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}v.displayName="MDXCreateElement"},89603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const a={title:"Validators",description:"Configuring validators in production networks",sidebar_position:4,tags:["private networks"]},i="Configure validators in a production network",s={unversionedId:"private-networks/how-to/configure/validators",id:"version-23.4.1/private-networks/how-to/configure/validators",title:"Validators",description:"Configuring validators in production networks",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/configure/validators.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/validators",permalink:"/23.4.1/private-networks/how-to/configure/validators",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/configure/validators.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1698376077,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:4,frontMatter:{title:"Validators",description:"Configuring validators in production networks",sidebar_position:4,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Bootnodes",permalink:"/23.4.1/private-networks/how-to/configure/bootnodes"},next:{title:"Pre-deploy a contract",permalink:"/23.4.1/private-networks/how-to/configure/contracts"}},l={},d=[{value:"Number of validators required",id:"number-of-validators-required",level:2},{value:"Adding and removing validators",id:"adding-and-removing-validators",level:2},{value:"Validators as bootnodes",id:"validators-as-bootnodes",level:2}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configure-validators-in-a-production-network"},"Configure validators in a production network"),(0,n.kt)("p",null,"As when ",(0,n.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/how-to/configure/bootnodes"},"configuring bootnodes"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create the ",(0,n.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/concepts/node-keys"},"node key pair")," (that is, the private and public key) before starting the validator.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When creating validators in the cloud (for example, AWS or Azure), attempt to assign static IP addresses to them. If your network is:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Publicly accessible, assign an elastic IP address."),(0,n.kt)("li",{parentName:"ul"},"Internal only, specify a private IP address when you create the instance and record this IP address.")))),(0,n.kt)("p",null,"We recommend storing validator configuration under source control."),(0,n.kt)("h2",{id:"number-of-validators-required"},"Number of validators required"),(0,n.kt)("p",null,"Ensure you configure enough validators to allow for redundancy. IBFT 2.0 tolerates ",(0,n.kt)("inlineCode",{parentName:"p"},"f = (n-1)/3")," faulty validators, where:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"f")," is the number of faulty validators"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"n")," is the number of validators.")),(0,n.kt)("h2",{id:"adding-and-removing-validators"},"Adding and removing validators"),(0,n.kt)("p",null,"You can ",(0,n.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/how-to/configure/consensus/ibft#add-and-remove-validators"},"vote validators in or out of the validator pool"),"."),(0,n.kt)("h2",{id:"validators-as-bootnodes"},"Validators as bootnodes"),(0,n.kt)("p",null,"Validators can also be bootnodes. Other than the ",(0,n.kt)("a",{parentName:"p",href:"/23.4.1/private-networks/how-to/configure/bootnodes"},"usual configuration for bootnodes"),", you do not need to specify any extra configuration when a validator is also a bootnode."),(0,n.kt)("p",null,"If you remove a validator that is also a bootnode, ensure there are enough remaining bootnodes on the network."))}p.isMDXComponent=!0}}]);