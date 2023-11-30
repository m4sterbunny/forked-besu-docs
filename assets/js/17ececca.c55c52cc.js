"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[3209],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19954:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Pass JVM options",sidebar_position:1,description:"Passing Java virtual machine JVM options to Hyperledger Besu at runtime",tags:["public networks","private networks"]},i="Pass JVM options",s={unversionedId:"public-networks/how-to/configure-jvm/pass-jvm-options",id:"version-23.7.2/public-networks/how-to/configure-jvm/pass-jvm-options",title:"Pass JVM options",description:"Passing Java virtual machine JVM options to Hyperledger Besu at runtime",source:"@site/versioned_docs/version-23.7.2/public-networks/how-to/configure-jvm/pass-jvm-options.md",sourceDirName:"public-networks/how-to/configure-jvm",slug:"/public-networks/how-to/configure-jvm/pass-jvm-options",permalink:"/23.7.2/public-networks/how-to/configure-jvm/pass-jvm-options",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/public-networks/how-to/configure-jvm/pass-jvm-options.md",tags:[{label:"public networks",permalink:"/23.7.2/tags/public-networks"},{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1701375992,formattedLastUpdatedAt:"Nov 30, 2023",sidebarPosition:1,frontMatter:{title:"Pass JVM options",sidebar_position:1,description:"Passing Java virtual machine JVM options to Hyperledger Besu at runtime",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Configure Java and Besu",permalink:"/23.7.2/public-networks/how-to/configure-jvm/"},next:{title:"Manage JVM memory",permalink:"/23.7.2/public-networks/how-to/configure-jvm/manage-memory"}},p={},c=[],l={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pass-jvm-options"},"Pass JVM options"),(0,o.kt)("p",null,"To perform tasks such as attaching a debugger or configuring the garbage collector, pass Java Virtual Machine (JVM) options to Hyperledger Besu."),(0,o.kt)("p",null,"Besu passes the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"BESU_OPTS")," environment variable to the JVM. Set standard JVM options in the ",(0,o.kt)("inlineCode",{parentName:"p"},"BESU_OPTS")," variable."),(0,o.kt)("p",null,"For Bash-based executions, you can set the variable for only the scope of the program execution by setting it before starting Besu."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"BESU_OPTS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 \\\nbesu --network=goerli\n")))}m.isMDXComponent=!0}}]);