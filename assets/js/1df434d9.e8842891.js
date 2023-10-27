"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[78013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={title:"Use a configuration file",sidebar_position:3,description:"Specify options in the Besu configuration file.",tags:["public networks","private networks"]},a="Use the Hyperledger Besu configuration file",s={unversionedId:"public-networks/how-to/configuration-file",id:"version-23.4.1/public-networks/how-to/configuration-file",title:"Use a configuration file",description:"Specify options in the Besu configuration file.",source:"@site/versioned_docs/version-23.4.1/public-networks/how-to/configuration-file.md",sourceDirName:"public-networks/how-to",slug:"/public-networks/how-to/configuration-file",permalink:"/23.4.1/public-networks/how-to/configuration-file",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/how-to/configuration-file.md",tags:[{label:"public networks",permalink:"/23.4.1/tags/public-networks"},{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1698376077,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:3,frontMatter:{title:"Use a configuration file",sidebar_position:3,description:"Specify options in the Besu configuration file.",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use the Engine API",permalink:"/23.4.1/public-networks/how-to/use-engine-api"},next:{title:"Create and send transactions",permalink:"/23.4.1/public-networks/how-to/send-transactions"}},l={},c=[{value:"TOML specification",id:"toml-specification",level:2}],p={toc:c};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-the-hyperledger-besu-configuration-file"},"Use the Hyperledger Besu configuration file"),(0,o.kt)("p",null,"To specify command line options in a file, use a TOML configuration file."),(0,o.kt)("p",null,"Save the configuration file and reuse it across node startups. To specify the configuration file, use the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/cli/options#config-file"},(0,o.kt)("inlineCode",{parentName:"a"},"--config-file"))," option."),(0,o.kt)("p",null,"To override an option specified in the configuration file, either specify the same option on the command line or as an ",(0,o.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/cli/options#specify-options"},"environment variable"),". For options specified in more than one place, the order of precedence is command line, environment variable, configuration file."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The configuration file is used for node-level settings. You can specify network-wide settings in the ",(0,o.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/concepts/genesis-file"},"genesis file"),".")),(0,o.kt)("h2",{id:"toml-specification"},"TOML specification"),(0,o.kt)("p",null,"The configuration file must be a valid TOML file composed of key/value pairs. Each key is the same as the corresponding command line option name without the leading dashes (",(0,o.kt)("inlineCode",{parentName:"p"},"--"),")."),(0,o.kt)("p",null,"Values must conform to TOML specifications for string, numbers, arrays, and booleans. Specific differences between the command line and the TOML file format are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Comma-separated lists on the command line are string arrays in the TOML file."),(0,o.kt)("li",{parentName:"ul"},"Enclose file paths, hexadecimal numbers, URLs, and ","<","host:port> values in quotes.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"/23.4.1/public-networks/reference/cli/options"},"command line reference")," includes configuration file examples for each option.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Sample TOML configuration file"',title:'"Sample',TOML:!0,configuration:!0,'file"':!0},'# Valid TOML config file\ndata-path="~/besudata" # Path\n\n# Network\nbootnodes=["enode://001@123:4567", "enode://002@123:4567", "enode://003@123:4567"]\n\np2p-host="1.2.3.4"\np2p-port=1234\nmax-peers=42\n\nrpc-http-host="5.6.7.8"\nrpc-http-port=5678\n\nrpc-ws-host="9.10.11.12"\nrpc-ws-port=9101\n\n# Chain\ngenesis-file="~/genesis.json" # Path to the custom genesis file\n\n# Mining\nminer-enabled=true\nminer-coinbase="0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Starting Besu with a configuration file"',title:'"Starting',Besu:!0,with:!0,a:!0,configuration:!0,'file"':!0},"besu --config-file=/home/me/me_node/config.toml\n")))}f.isMDXComponent=!0}}]);