"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[5215],{62127:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=t(85893),r=t(11151);const s={title:"Use EVM tool",sidebar_position:1,description:"Hyperledger Besu EVM tool",tags:["public networks","private networks"]},i="Use the EVM tool",l={id:"public-networks/how-to/troubleshoot/evm-tool",title:"Use EVM tool",description:"Hyperledger Besu EVM tool",source:"@site/versioned_docs/version-24.1.0/public-networks/how-to/troubleshoot/evm-tool.md",sourceDirName:"public-networks/how-to/troubleshoot",slug:"/public-networks/how-to/troubleshoot/evm-tool",permalink:"/public-networks/how-to/troubleshoot/evm-tool",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.1.0/public-networks/how-to/troubleshoot/evm-tool.md",tags:[{label:"public networks",permalink:"/tags/public-networks"},{label:"private networks",permalink:"/tags/private-networks"}],version:"24.1.0",lastUpdatedAt:1707255677,formattedLastUpdatedAt:"Feb 6, 2024",sidebarPosition:1,frontMatter:{title:"Use EVM tool",sidebar_position:1,description:"Hyperledger Besu EVM tool",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Upgrade Besu",permalink:"/public-networks/how-to/upgrade-node"},next:{title:"Trace transactions",permalink:"/public-networks/how-to/troubleshoot/trace-transactions"}},c={},d=[{value:"Get the EVM tool",id:"get-the-evm-tool",level:2},{value:"Build from source",id:"build-from-source",level:3},{value:"Execute with Docker",id:"execute-with-docker",level:3},{value:"EVM tool options",id:"evm-tool-options",level:2}];function a(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"use-the-evm-tool",children:"Use the EVM tool"}),"\n",(0,n.jsx)(o.p,{children:"The Besu EVM tool is a CLI program that executes arbitrary EVM programs and Ethereum State Tests\noutside the context of an operating node.\nUse the EVM tool for benchmarking and fuzz testing."}),"\n",(0,n.jsx)(o.h2,{id:"get-the-evm-tool",children:"Get the EVM tool"}),"\n",(0,n.jsxs)(o.p,{children:["The EVM tool is part of the standard ",(0,n.jsx)(o.a,{href:"/public-networks/get-started/install/binary-distribution",children:"Besu binary distribution"}),"."]}),"\n",(0,n.jsx)(o.h3,{id:"build-from-source",children:"Build from source"}),"\n",(0,n.jsx)(o.p,{children:"To build from source, run the following from the root of the Besu repository:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"./gradlew :ethereum:evmTool:installDist\n"})}),"\n",(0,n.jsxs)(o.p,{children:["An extractable archive files is created in ",(0,n.jsx)(o.code,{children:"ethereum/evmtool/build/distributions"})," and an executable\ninstallation in ",(0,n.jsx)(o.code,{children:"ethereum/evmtool/build/install/evmtool"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"Execute the EVM tool:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"ethereum/evmtool/build/install/evmtool/bin/evmtool <evmtool options>\n"})}),"\n",(0,n.jsx)(o.h3,{id:"execute-with-docker",children:"Execute with Docker"}),"\n",(0,n.jsx)(o.p,{children:"To run the Besu EVM tool in a container:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker run -rm <docker options> hyperledger/besu-evmtool:develop <evmtool options>\n"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Because no data is stored in local directories we recommended using the ",(0,n.jsx)(o.code,{children:"-rm"})," docker option.\nThe ",(0,n.jsx)(o.code,{children:"-rm"})," option deletes the container at the end of execution."]}),"\n",(0,n.jsxs)(o.li,{children:["If you use an option that requires input from standard in, use the ",(0,n.jsx)(o.code,{children:"-i"})," docker option.\nThe ",(0,n.jsx)(o.code,{children:"-i"})," option pipes standard input to the EVM tool."]}),"\n",(0,n.jsxs)(o.li,{children:["If you need to reference files we recommend using a docker file binding, such as\n",(0,n.jsx)(o.code,{children:"-v ${PWD}:/opt/data"}),", which maps the current directory to the ",(0,n.jsx)(o.code,{children:"/opt/data"})," directory in the container."]}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"latest"})," tag is the latest released version of Besu.\nThe ",(0,n.jsx)(o.code,{children:"develop"})," tag is the current main branch code that will go into a future release version of Besu."]})}),"\n",(0,n.jsx)(o.h2,{id:"evm-tool-options",children:"EVM tool options"}),"\n",(0,n.jsxs)(o.p,{children:["The first mode of the EVM tool runs arbitrary EVM bytecode.\nUse ",(0,n.jsx)(o.a,{href:"/public-networks/reference/evm-tool#options",children:"command line options"})," to specify the code and other\ncontextual information.\nFor example:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"evmtool --code=5B600080808060045AFA50600056\n"})}),"\n",(0,n.jsxs)(o.p,{children:["The EVM tool also has ",(0,n.jsx)(o.a,{href:"/public-networks/reference/evm-tool#subcommands",children:"subcommands"})," used for testing code bases.\nThese subcommands are not meant for typical user interactions."]})]})}function h(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>l,a:()=>i});var n=t(67294);const r={},s=n.createContext(r);function i(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);