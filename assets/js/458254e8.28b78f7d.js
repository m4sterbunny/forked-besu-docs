"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[40192,75986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,f=l["".concat(c,".").concat(m)]||l[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={},i=void 0,s={unversionedId:"global/test_accounts",id:"version-23.10.1/global/test_accounts",title:"test_accounts",description:"The following accounts are test accounts and their private keys are publicly visible in this documentation and in publicly available source code.",source:"@site/versioned_docs/version-23.10.1/global/test_accounts.md",sourceDirName:"global",slug:"/global/test_accounts",permalink:"/23.10.1/global/test_accounts",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.1/global/test_accounts.md",tags:[],version:"23.10.1",lastUpdatedAt:1701287562,formattedLastUpdatedAt:"Nov 29, 2023",frontMatter:{}},c={},p=[],d={toc:p},l="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Do not use the test accounts on Ethereum Mainnet or any production network.")),(0,r.kt)("p",{parentName:"admonition"},"The following accounts are test accounts and their private keys are publicly visible in this documentation and in publicly available source code."),(0,r.kt)("p",{parentName:"admonition"},"They are not secure and everyone can use them."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Using test accounts on Ethereum Mainnet and production networks can lead to loss of funds and identity fraud.")),(0,r.kt)("p",{parentName:"admonition"},"In this documentation, we only provide test accounts for ease of testing and learning purposes; never use them for other purposes."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Always secure your Ethereum Mainnet and any production account properly.")),(0,r.kt)("p",{parentName:"admonition"},"See for instance ",(0,r.kt)("a",{parentName:"p",href:"https://support.mycrypto.com/staying-safe/protecting-yourself-and-your-funds"},'MyCrypto "Protecting Yourself and Your Funds" guide'),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},'"Test Account 1 (address ',(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"),')"'),(0,r.kt)("p",{parentName:"admonition"},"Private key to copy :"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63\n")),(0,r.kt)("p",{parentName:"admonition"},"Initial balance : 200 Eth ",(0,r.kt)("em",{parentName:"p"},"(200000000000000000000 Wei)"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},'"Test Account 2 (address ',(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"0x627306090abaB3A6e1400e9345bC60c78a8BEf57"),')"'),(0,r.kt)("p",{parentName:"admonition"},"Private key to copy :"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3\n")),(0,r.kt)("p",{parentName:"admonition"},"Initial balance : 90000 Eth ",(0,r.kt)("em",{parentName:"p"},"(90000000000000000000000 Wei)"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},'"Test Account 3 (address ',(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"0xf17f52151EbEF6C7334FAD080c5704D77216b732"),')"'),(0,r.kt)("p",{parentName:"admonition"},"Private key to copy :"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"0xae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f\n")),(0,r.kt)("p",{parentName:"admonition"},"Initial balance : 90000 Eth ",(0,r.kt)("em",{parentName:"p"},"(90000000000000000000000 Wei)"))))}u.isMDXComponent=!0},56535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(87462),r=(n(67294),n(3905)),a=n(14896);const i={title:"Accounts for testing",sidebar_position:3,description:"Ethereum accounts used for Hyperledger Besu testing only on private networks",tags:["private networks"]},s="Accounts for testing",c={unversionedId:"private-networks/reference/accounts-for-testing",id:"version-23.10.1/private-networks/reference/accounts-for-testing",title:"Accounts for testing",description:"Ethereum accounts used for Hyperledger Besu testing only on private networks",source:"@site/versioned_docs/version-23.10.1/private-networks/reference/accounts-for-testing.md",sourceDirName:"private-networks/reference",slug:"/private-networks/reference/accounts-for-testing",permalink:"/23.10.1/private-networks/reference/accounts-for-testing",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.1/private-networks/reference/accounts-for-testing.md",tags:[{label:"private networks",permalink:"/23.10.1/tags/private-networks"}],version:"23.10.1",lastUpdatedAt:1701287562,formattedLastUpdatedAt:"Nov 29, 2023",sidebarPosition:3,frontMatter:{title:"Accounts for testing",sidebar_position:3,description:"Ethereum accounts used for Hyperledger Besu testing only on private networks",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Private network API objects",permalink:"/23.10.1/private-networks/reference/api/objects"},next:{title:"Plugin API interfaces",permalink:"/23.10.1/private-networks/reference/plugin-api-interfaces"}},p={},d=[{value:"Development mode",id:"development-mode",level:2},{value:"Genesis file",id:"genesis-file",level:2}],l={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"accounts-for-testing"},"Accounts for testing"),(0,r.kt)("p",null,"You can use existing accounts for testing by including them in the genesis file for a private network. Hyperledger Besu also provides predefined accounts for use in development mode."),(0,r.kt)("h2",{id:"development-mode"},"Development mode"),(0,r.kt)("p",null,"When you start Besu with the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#network"},(0,r.kt)("inlineCode",{parentName:"a"},"--network=dev"))," command line option, Besu uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev.json")," genesis file by default."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dev.json")," genesis file defines the following accounts used for testing."),(0,r.kt)(a.default,{mdxType:"TestAccounts"}),(0,r.kt)("h2",{id:"genesis-file"},"Genesis file"),(0,r.kt)("p",null,"To use existing test accounts, specify the accounts and balances in a genesis file for your test network. For an example of how to define accounts in the genesis file, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/config/src/main/resources/dev.json"},(0,r.kt)("inlineCode",{parentName:"a"},"dev.json")),"."),(0,r.kt)("p",null,"To start Besu with the genesis file defining the existing accounts, use the ",(0,r.kt)("a",{parentName:"p",href:"/23.10.1/public-networks/reference/cli/options#genesis-file"},(0,r.kt)("inlineCode",{parentName:"a"},"--genesis-file"))," command line option ."))}m.isMDXComponent=!0}}]);