"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[14827],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(t),d=i,b=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return t?r.createElement(b,s(s({ref:n},p),{},{components:t})):r.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[f]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},56894:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const o={title:"Genesis file",sidebar_position:7,description:"Learn about configuring a network using the genesis file.",tags:["public networks","private networks"]},s="Genesis file",a={unversionedId:"public-networks/concepts/genesis-file",id:"version-23.7.1/public-networks/concepts/genesis-file",title:"Genesis file",description:"Learn about configuring a network using the genesis file.",source:"@site/versioned_docs/version-23.7.1/public-networks/concepts/genesis-file.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/genesis-file",permalink:"/23.7.1/public-networks/concepts/genesis-file",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/public-networks/concepts/genesis-file.md",tags:[{label:"public networks",permalink:"/23.7.1/tags/public-networks"},{label:"private networks",permalink:"/23.7.1/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1700672486,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:7,frontMatter:{title:"Genesis file",sidebar_position:7,description:"Learn about configuring a network using the genesis file.",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Events and logs",permalink:"/23.7.1/public-networks/concepts/events-and-logs"},next:{title:"Node keys",permalink:"/23.7.1/public-networks/concepts/node-keys"}},c={},l=[],p={toc:l},f="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(f,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"genesis-file"},"Genesis file"),(0,i.kt)("p",null,"The genesis file defines the first block in the chain, and the first block defines which chain you want to join."),(0,i.kt)("p",null,"For Ethereum Mainnet and public testnets (for example, Goerli) the genesis configuration definition is in Besu and used when specifying a public network using the ",(0,i.kt)("a",{parentName:"p",href:"/23.7.1/public-networks/reference/cli/options#network"},(0,i.kt)("inlineCode",{parentName:"a"},"--network"))," command line option."),(0,i.kt)("p",null,"For private networks, ",(0,i.kt)("a",{parentName:"p",href:"https://consensys.net/blog/quorum/hyperledger-besu-how-to-create-an-ethereum-genesis-file/"},"create a JSON genesis file"),", then specify the genesis file using the ",(0,i.kt)("a",{parentName:"p",href:"/23.7.1/public-networks/reference/cli/options#genesis-file"},(0,i.kt)("inlineCode",{parentName:"a"},"--genesis-file"))," command line option."),(0,i.kt)("p",null,"The genesis file specifies the ",(0,i.kt)("a",{parentName:"p",href:"/23.7.1/public-networks/reference/genesis-items"},"network-wide settings"),", such as those for a ",(0,i.kt)("a",{parentName:"p",href:"/23.7.1/private-networks/how-to/configure/free-gas"},"free gas network"),", so all nodes in a network must use the same genesis file."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can specify node-level settings on the command line or in the ",(0,i.kt)("a",{parentName:"p",href:"/23.7.1/public-networks/how-to/configuration-file"},"node configuration file"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example IBFT 2.0 genesis file"',title:'"Example',IBFT:!0,"2.0":!0,genesis:!0,'file"':!0},'{\n  "config": {\n    "chainId": 2018,\n    "berlinBlock": 0,\n    "ibft2": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    }\n  },\n  "nonce": "0x0",\n  "timestamp": "0x58ee40ba",\n  "extraData": "0xf83ea00000000000000000000000000000000000000000000000000000000000000000d5949811ebc35d7b06b3fa8dc5809a1f9c52751e1deb808400000000c0",\n  "gasLimit": "0x1fffffffffffff",\n  "difficulty": "0x1",\n  "mixHash": "0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365",\n  "coinbase": "0x0000000000000000000000000000000000000000",\n  "alloc": {\n    "9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb": {\n      "balance": "0xad78ebc5ac6200000"\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);