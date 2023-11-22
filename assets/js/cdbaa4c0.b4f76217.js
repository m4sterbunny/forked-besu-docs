"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[57204],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(o),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return o?n.createElement(h,a(a({ref:t},u),{},{components:o})):n.createElement(h,a({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<l;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},57254:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const l={title:"Use EVM tool",sidebar_position:1,description:"Hyperledger Besu EVM tool",tags:["public networks","private networks"]},a="Use the EVM tool",i={unversionedId:"public-networks/how-to/troubleshoot/evm-tool",id:"public-networks/how-to/troubleshoot/evm-tool",title:"Use EVM tool",description:"Hyperledger Besu EVM tool",source:"@site/docs/public-networks/how-to/troubleshoot/evm-tool.md",sourceDirName:"public-networks/how-to/troubleshoot",slug:"/public-networks/how-to/troubleshoot/evm-tool",permalink:"/development/public-networks/how-to/troubleshoot/evm-tool",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/troubleshoot/evm-tool.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"},{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1700672486,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:1,frontMatter:{title:"Use EVM tool",sidebar_position:1,description:"Hyperledger Besu EVM tool",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Upgrade Besu",permalink:"/development/public-networks/how-to/upgrade-node"},next:{title:"Trace transactions",permalink:"/development/public-networks/how-to/troubleshoot/trace-transactions"}},s={},p=[{value:"Get the EVM tool",id:"get-the-evm-tool",level:2},{value:"Build from source",id:"build-from-source",level:3},{value:"Execute with Docker",id:"execute-with-docker",level:3},{value:"EVM tool options",id:"evm-tool-options",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-the-evm-tool"},"Use the EVM tool"),(0,r.kt)("p",null,"The Besu EVM tool is a CLI program that executes arbitrary EVM programs and Ethereum State Tests\noutside the context of an operating node.\nUse the EVM tool for benchmarking and fuzz testing."),(0,r.kt)("h2",{id:"get-the-evm-tool"},"Get the EVM tool"),(0,r.kt)("p",null,"The EVM tool is part of the standard ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/get-started/install/binary-distribution"},"Besu binary distribution"),"."),(0,r.kt)("h3",{id:"build-from-source"},"Build from source"),(0,r.kt)("p",null,"To build from source, run the following from the root of the Besu repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew :ethereum:evmTool:installDist\n")),(0,r.kt)("p",null,"An extractable archive files is created in ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum/evmtool/build/distributions")," and an executable\ninstallation in ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum/evmtool/build/install/evmtool"),"."),(0,r.kt)("p",null,"Execute the EVM tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ethereum/evmtool/build/install/evmtool/bin/evmtool <evmtool options>\n")),(0,r.kt)("h3",{id:"execute-with-docker"},"Execute with Docker"),(0,r.kt)("p",null,"To run the Besu EVM tool in a container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -rm <docker options> hyperledger/besu-evmtool:develop <evmtool options>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Because no data is stored in local directories we recommended using the ",(0,r.kt)("inlineCode",{parentName:"li"},"-rm")," docker option.\nThe ",(0,r.kt)("inlineCode",{parentName:"li"},"-rm")," option deletes the container at the end of execution."),(0,r.kt)("li",{parentName:"ul"},"If you use an option that requires input from standard in, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"-i")," docker option.\nThe ",(0,r.kt)("inlineCode",{parentName:"li"},"-i")," option pipes standard input to the EVM tool."),(0,r.kt)("li",{parentName:"ul"},"If you need to reference files we recommend using a docker file binding, such as\n",(0,r.kt)("inlineCode",{parentName:"li"},"-v ${PWD}:/opt/data"),", which maps the current directory to the ",(0,r.kt)("inlineCode",{parentName:"li"},"/opt/data")," directory in the container.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," tag is the latest released version of Besu.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"develop")," tag is the current main branch code that will go into a future release version of Besu.")),(0,r.kt)("h2",{id:"evm-tool-options"},"EVM tool options"),(0,r.kt)("p",null,"The first mode of the EVM tool runs arbitrary EVM bytecode.\nUse ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/evm-tool#options"},"command line options")," to specify the code and other\ncontextual information.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"evmtool --code=5B600080808060045AFA50600056\n")),(0,r.kt)("p",null,"The EVM tool also has ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/evm-tool#subcommands"},"subcommands")," used for testing code bases.\nThese subcommands are not meant for typical user interactions."))}d.isMDXComponent=!0}}]);