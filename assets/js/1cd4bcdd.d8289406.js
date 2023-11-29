"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[30392],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(o),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return o?r.createElement(h,a(a({ref:t},p),{},{components:o})):r.createElement(h,a({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},22664:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const i={title:"Use EVM tool",sidebar_position:1,description:"Hyperledger Besu EVM tool",tags:["public networks","private networks"]},a="Use the EVM tool",l={unversionedId:"public-networks/how-to/troubleshoot/evm-tool",id:"version-23.10.2/public-networks/how-to/troubleshoot/evm-tool",title:"Use EVM tool",description:"Hyperledger Besu EVM tool",source:"@site/versioned_docs/version-23.10.2/public-networks/how-to/troubleshoot/evm-tool.md",sourceDirName:"public-networks/how-to/troubleshoot",slug:"/public-networks/how-to/troubleshoot/evm-tool",permalink:"/public-networks/how-to/troubleshoot/evm-tool",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/public-networks/how-to/troubleshoot/evm-tool.md",tags:[{label:"public networks",permalink:"/tags/public-networks"},{label:"private networks",permalink:"/tags/private-networks"}],version:"23.10.2",lastUpdatedAt:1701300072,formattedLastUpdatedAt:"Nov 29, 2023",sidebarPosition:1,frontMatter:{title:"Use EVM tool",sidebar_position:1,description:"Hyperledger Besu EVM tool",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Upgrade Besu",permalink:"/public-networks/how-to/upgrade-node"},next:{title:"Trace transactions",permalink:"/public-networks/how-to/troubleshoot/trace-transactions"}},s={},u=[{value:"Get the EVM tool",id:"get-the-evm-tool",level:2},{value:"Build from source",id:"build-from-source",level:3},{value:"Execute with Docker",id:"execute-with-docker",level:3},{value:"EVM tool options",id:"evm-tool-options",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-the-evm-tool"},"Use the EVM tool"),(0,n.kt)("p",null,"The Besu EVM tool is a CLI program that executes arbitrary EVM programs and Ethereum State Tests\noutside the context of an operating node.\nUse the EVM tool for benchmarking and fuzz testing."),(0,n.kt)("h2",{id:"get-the-evm-tool"},"Get the EVM tool"),(0,n.kt)("p",null,"The EVM tool is part of the standard ",(0,n.kt)("a",{parentName:"p",href:"/public-networks/get-started/install/binary-distribution"},"Besu binary distribution"),"."),(0,n.kt)("h3",{id:"build-from-source"},"Build from source"),(0,n.kt)("p",null,"To build from source, run the following from the root of the Besu repository:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew :ethereum:evmTool:installDist\n")),(0,n.kt)("p",null,"An extractable archive files is created in ",(0,n.kt)("inlineCode",{parentName:"p"},"ethereum/evmtool/build/distributions")," and an executable\ninstallation in ",(0,n.kt)("inlineCode",{parentName:"p"},"ethereum/evmtool/build/install/evmtool"),"."),(0,n.kt)("p",null,"Execute the EVM tool:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ethereum/evmtool/build/install/evmtool/bin/evmtool <evmtool options>\n")),(0,n.kt)("h3",{id:"execute-with-docker"},"Execute with Docker"),(0,n.kt)("p",null,"To run the Besu EVM tool in a container:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -rm <docker options> hyperledger/besu-evmtool:develop <evmtool options>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Because no data is stored in local directories we recommended using the ",(0,n.kt)("inlineCode",{parentName:"li"},"-rm")," docker option.\nThe ",(0,n.kt)("inlineCode",{parentName:"li"},"-rm")," option deletes the container at the end of execution."),(0,n.kt)("li",{parentName:"ul"},"If you use an option that requires input from standard in, use the ",(0,n.kt)("inlineCode",{parentName:"li"},"-i")," docker option.\nThe ",(0,n.kt)("inlineCode",{parentName:"li"},"-i")," option pipes standard input to the EVM tool."),(0,n.kt)("li",{parentName:"ul"},"If you need to reference files we recommend using a docker file binding, such as\n",(0,n.kt)("inlineCode",{parentName:"li"},"-v ${PWD}:/opt/data"),", which maps the current directory to the ",(0,n.kt)("inlineCode",{parentName:"li"},"/opt/data")," directory in the container.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"latest")," tag is the latest released version of Besu.\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"develop")," tag is the current main branch code that will go into a future release version of Besu.")),(0,n.kt)("h2",{id:"evm-tool-options"},"EVM tool options"),(0,n.kt)("p",null,"The first mode of the EVM tool runs arbitrary EVM bytecode.\nUse ",(0,n.kt)("a",{parentName:"p",href:"/public-networks/reference/evm-tool#options"},"command line options")," to specify the code and other\ncontextual information.\nFor example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"evmtool --code=5B600080808060045AFA50600056\n")),(0,n.kt)("p",null,"The EVM tool also has ",(0,n.kt)("a",{parentName:"p",href:"/public-networks/reference/evm-tool#subcommands"},"subcommands")," used for testing code bases.\nThese subcommands are not meant for typical user interactions."))}d.isMDXComponent=!0}}]);