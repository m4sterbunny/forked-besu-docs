"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[26931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},73632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Multi-tenancy",sidebar_position:4,description:"Multi-tenancy"},o="Multi-tenancy",s={unversionedId:"private-networks/concepts/privacy/multi-tenancy",id:"version-23.7.3/private-networks/concepts/privacy/multi-tenancy",title:"Multi-tenancy",description:"Multi-tenancy",source:"@site/versioned_docs/version-23.7.3/private-networks/concepts/privacy/multi-tenancy.md",sourceDirName:"private-networks/concepts/privacy",slug:"/private-networks/concepts/privacy/multi-tenancy",permalink:"/23.7.3/private-networks/concepts/privacy/multi-tenancy",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/concepts/privacy/multi-tenancy.md",tags:[],version:"23.7.3",lastUpdatedAt:1700172558,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:4,frontMatter:{title:"Multi-tenancy",sidebar_position:4,description:"Multi-tenancy"},sidebar:"privateDocSidebar",previous:{title:"Flexible privacy groups",permalink:"/23.7.3/private-networks/concepts/privacy/flexible-privacy"},next:{title:"Privacy plugin",permalink:"/23.7.3/private-networks/concepts/privacy/plugin"}},c={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multi-tenancy"},"Multi-tenancy"),(0,a.kt)("p",null,"By default, each participant in a privacy network uses its own Besu and Tessera node."),(0,a.kt)("p",null,"Multi-tenancy allows multiple participants to use the same Besu and Tessera node. Each participant is a ",(0,a.kt)("em",{parentName:"p"},"tenant"),", and the operator is the ",(0,a.kt)("em",{parentName:"p"},"owner")," of the Besu and Tessera node."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The operator is responsible for ",(0,a.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/tutorials/privacy/multi-tenancy"},"configuring multi-tenancy"),", and has access to all tenant data.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Multi-tenancy",src:n(87754).Z,width:"1512",height:"648"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Ensure the multi-tenant Tessera node client API is configured to allow access only by the multi-tenant Besu node. Access to your data is secured through Besu using multi-tenancy mode."),(0,a.kt)("p",{parentName:"admonition"},"If not configured to allow access only by the multi-tenant Besu node, other Tessera clients, including other Besu nodes, might be able to access tenant data."),(0,a.kt)("p",{parentName:"admonition"},"To secure access, you can ",(0,a.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/how-to/configure/tls/client-and-server"},"configure TLS between Besu and Tessera")," with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tessera.consensys.net/en/stable/HowTo/Configure/TLS/#whitelist"},(0,a.kt)("inlineCode",{parentName:"a"},"WHITELIST"))," trust mode.")),(0,a.kt)("p",null,"Multi-tenancy validates that tenants have permission to use the specified HTTP or WebSocket JSON-RPC requests, and the tenant has access to the requested privacy data. Private data is isolated and each tenant uses a JSON Web Token (JWT) for authentication."),(0,a.kt)("p",null,"You can ",(0,a.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/how-to/use-besu-api/authenticate"},"create the JWT either externally or internally"),"."))}d.isMDXComponent=!0},87754:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Multi-tenancy-509dd20a1055029dd83055ddfc99139a.png"}}]);