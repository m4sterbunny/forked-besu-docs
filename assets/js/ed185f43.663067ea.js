"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[9637],{28557:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var s=a(85893),r=a(11151),l=a(74866),t=a(85162);const c={title:"EVM tool options",sidebar_position:5,description:"Besu EVM tool options reference",tags:["public networks","private networks"]},o="EVM tool reference",i={id:"public-networks/reference/evm-tool",title:"EVM tool options",description:"Besu EVM tool options reference",source:"@site/versioned_docs/version-23.7.3/public-networks/reference/evm-tool.md",sourceDirName:"public-networks/reference",slug:"/public-networks/reference/evm-tool",permalink:"/23.7.3/public-networks/reference/evm-tool",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/public-networks/reference/evm-tool.md",tags:[{label:"public networks",permalink:"/23.7.3/tags/public-networks"},{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1710137760,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:5,frontMatter:{title:"EVM tool options",sidebar_position:5,description:"Besu EVM tool options reference",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Genesis file items",permalink:"/23.7.3/public-networks/reference/genesis-items"},next:{title:"Transaction trace types",permalink:"/23.7.3/public-networks/reference/trace-types"}},d={},h=[{value:"Run options",id:"run-options",level:2},{value:"<code>code</code>",id:"code",level:3},{value:"<code>gas</code>",id:"gas",level:3},{value:"<code>price</code>",id:"price",level:3},{value:"<code>sender</code>",id:"sender",level:3},{value:"<code>receiver</code>",id:"receiver",level:3},{value:"<code>input</code>",id:"input",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"<code>json</code>, <code>trace</code>",id:"json-trace",level:3},{value:"<code>json-alloc</code>",id:"json-alloc",level:3},{value:"<code>[no]memory</code>, <code>trace.[no]memory</code>",id:"nomemory-tracenomemory",level:3},{value:"<code>trace.[no]stack</code>",id:"tracenostack",level:3},{value:"<code>trace.[no]returndata</code>",id:"tracenoreturndata",level:3},{value:"<code>[no]time</code>",id:"notime",level:3},{value:"<code>genesis</code>",id:"genesis",level:3},{value:"<code>chain</code>",id:"chain",level:3},{value:"<code>repeat</code>",id:"repeat",level:3},{value:"<code>revert-reason-enabled</code>",id:"revert-reason-enabled",level:3},{value:"<code>fork</code>",id:"fork",level:3},{value:"<code>key-value-storage</code>",id:"key-value-storage",level:3},{value:"<code>data-path</code>",id:"data-path",level:3},{value:"<code>block-number</code>",id:"block-number",level:3},{value:"<code>version</code>",id:"version",level:3},{value:"State test options",id:"state-test-options",level:2},{value:"<code>json</code>, <code>trace</code>",id:"json-trace-1",level:3},{value:"<code>[no]memory</code>, <code>trace.[no]memory</code>",id:"nomemory-tracenomemory-1",level:3},{value:"Use command arguments",id:"use-command-arguments",level:3},{value:"Use standard input",id:"use-standard-input",level:3},{value:"EOF code validation",id:"eof-code-validation",level:2},{value:"<code>file</code>",id:"file",level:3},{value:"Use command arguments",id:"use-command-arguments-1",level:3},{value:"Use standard input",id:"use-standard-input-1",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"evm-tool-reference",children:"EVM tool reference"}),"\n",(0,s.jsxs)(n.p,{children:["This reference describes options for running the following ",(0,s.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/troubleshoot/evm-tool",children:"using the EVM tool"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#run-options",children:"Arbitrary EVM programs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#state-test-options",children:"Ethereum state tests"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#eof-code-validation",children:"Ethereum object formatted code"})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Option names that include ",(0,s.jsx)(n.code,{children:"trace"}),", such as ",(0,s.jsx)(n.a,{href:"#json-trace",children:(0,s.jsx)(n.code,{children:"--trace"})})," and ",(0,s.jsx)(n.a,{href:"#nomemory-tracenomemory",children:(0,s.jsx)(n.code,{children:"--trace.[no]memory"})})," exist to support ",(0,s.jsx)(n.a,{href:"https://ethereum-tests.readthedocs.io/en/latest/t8ntool.html",children:(0,s.jsx)(n.code,{children:"t8ntool"})})," reference testing, and are interchangeable with their standard option names."]})}),"\n",(0,s.jsx)(n.h2,{id:"run-options",children:"Run options"}),"\n",(0,s.jsx)(n.p,{children:"The first mode of the EVM tool runs an arbitrary EVM and is invoked without an extra command. Command line options specify the code and other contextual information."}),"\n",(0,s.jsx)(n.h3,{id:"code",children:(0,s.jsx)(n.code,{children:"code"})}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--code=<code>\n"})})}),(0,s.jsx)(t.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--code=5B600080808060045AFA50600056\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"The code to be executed, in compiled hex code form. Execution fails if this is not set."}),"\n",(0,s.jsx)(n.h3,{id:"gas",children:(0,s.jsx)(n.code,{children:"gas"})}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--gas=<integer>\n"})})}),(0,s.jsx)(t.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--gas=100000000\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Amount of gas to make available to the EVM. The default is 10 billion, a number unlikely to be seen in any production blockchain."}),"\n",(0,s.jsx)(n.h3,{id:"price",children:(0,s.jsx)(n.code,{children:"price"})}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--price=<integer>\n"})})}),(0,s.jsx)(t.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--price=10\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Price of gas in Gwei. The default is ",(0,s.jsx)(n.code,{children:"0"}),". If set to a non-zero value, the sender account must have enough value to cover the gas fees."]}),"\n",(0,s.jsx)(n.h3,{id:"sender",children:(0,s.jsx)(n.code,{children:"sender"})}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--sender=<address>\n"})})}),(0,s.jsx)(t.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--sender=0xfe3b557e8fb62b89f4916b721be55ceb828dbd73\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["The account the invocation is sent from. The specified account must exist in the world state, which, unless specified by ",(0,s.jsx)(n.a,{href:"#genesis",children:(0,s.jsx)(n.code,{children:"--genesis"})}),", is the set of ",(0,s.jsx)(n.a,{href:"/23.7.3/private-networks/reference/accounts-for-testing",children:"accounts used for testing"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"receiver",children:(0,s.jsx)(n.code,{children:"receiver"})}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--receiver=<address>\n"})})}),(0,s.jsx)(t.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--receiver=0x588108d3eab34e94484d7cda5a1d31804ca96fe7\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"The account the invocation is sent to. The specified account does not need to exist."}),"\n",(0,s.jsx)(n.h3,{id:"input",children:(0,s.jsx)(n.code,{children:"input"})}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--input=<code>\n"})})}),(0,s.jsx)(t.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--input=9064129300000000000000000000000000000000000000000000000000000000\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["The data passed into the call. Corresponds to the ",(0,s.jsx)(n.code,{children:"data"})," field of the transaction and is returned by the ",(0,s.jsx)(n.code,{children:"CALLDATA"})," and related opcodes."]}),"\n",(0,s.jsx)(n.h3,{id:"value",children:(0,s.jsx)(n.code,{children:"value"})}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--value=<integer>\n"})})}),(0,s.jsx)(t.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--value=1000000000000000000\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"The value, in wei, attached to this transaction. For operations that query the value or transfer it to other accounts this is the amount that is available. The amount is not reduced to cover intrinsic cost and gas fees."}),"\n",(0,s.jsxs)(n.h3,{id:"json-trace",children:[(0,s.jsx)(n.code,{children:"json"}),", ",(0,s.jsx)(n.code,{children:"trace"})]}),"\n",(0,s.jsx)(l.Z,{children:(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--json\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"Provides an operation-by-operation trace of the command in JSON."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--trace"})," is an alias for ",(0,s.jsx)(n.code,{children:"--json"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"json-alloc",children:(0,s.jsx)(n.code,{children:"json-alloc"})}),"\n",(0,s.jsx)(l.Z,{children:(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--json-alloc\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"Outputs a JSON summary of the post-execution world state and allocations."}),"\n",(0,s.jsxs)(n.h3,{id:"nomemory-tracenomemory",children:[(0,s.jsx)(n.code,{children:"[no]memory"}),", ",(0,s.jsx)(n.code,{children:"trace.[no]memory"})]}),"\n",(0,s.jsx)(l.Z,{children:(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--nomemory, --memory\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["Setting ",(0,s.jsx)(n.code,{children:"--nomemory"})," disables tracing the memory output for each operation. Setting ",(0,s.jsx)(n.code,{children:"--memory"})," enables it. Memory traces are disabled by default."]}),"\n",(0,s.jsx)(n.p,{children:"For memory heavy scripts, disabling memory traces may reduce the volume of JSON output."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--trace.[no]memory"})," is an alias for ",(0,s.jsx)(n.code,{children:"--[no]memory"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"tracenostack",children:(0,s.jsx)(n.code,{children:"trace.[no]stack"})}),"\n",(0,s.jsx)(l.Z,{children:(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--trace.nostack, --trace.stack\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["Setting ",(0,s.jsx)(n.code,{children:"--trace.nostack"})," disables tracing the operand stack for each operation. Setting ",(0,s.jsx)(n.code,{children:"--trace.stack"})," enables it. Stack traces are enabled by default."]}),"\n",(0,s.jsx)(n.h3,{id:"tracenoreturndata",children:(0,s.jsx)(n.code,{children:"trace.[no]returndata"})}),"\n",(0,s.jsx)(l.Z,{children:(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--trace.noreturndata, --trace.returndata\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["Setting ",(0,s.jsx)(n.code,{children:"--trace.noreturndata"})," disables tracing the return data for each operation. Setting ",(0,s.jsx)(n.code,{children:"--trace.returndata"})," enables it. Return data traces are enabled by default."]}),"\n",(0,s.jsx)(n.h3,{id:"notime",children:(0,s.jsx)(n.code,{children:"[no]time"})}),"\n",(0,s.jsx)(l.Z,{children:(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--notime, --time\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["Setting ",(0,s.jsx)(n.code,{children:"--notime"})," disables including time data in the summary output. Setting ",(0,s.jsx)(n.code,{children:"--time"})," enables it."]}),"\n",(0,s.jsx)(n.p,{children:"This is useful for testing and differential evaluations."}),"\n",(0,s.jsx)(n.h3,{id:"genesis",children:(0,s.jsx)(n.code,{children:"genesis"})}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--genesis=<path>\n"})})}),(0,s.jsx)(t.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--genesis=/opt/besu/genesis.json\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/23.7.3/public-networks/reference/genesis-items",children:"Besu genesis file"})," to use when evaluating the EVM. Most useful are the ",(0,s.jsx)(n.code,{children:"alloc"})," items that set up accounts and their stored memory states."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--prestate"})," is a deprecated alias for ",(0,s.jsx)(n.code,{children:"--genesis"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"chain",children:(0,s.jsx)(n.code,{children:"chain"})}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--chain=<mainnet|goerli|sepolia|dev|classic|mordor|kotti|astor>\n"})})}),(0,s.jsx)(t.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--chain=goerli\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["The well-known network genesis file to use when evaluating the EVM. These values are an alternative to the ",(0,s.jsx)(n.a,{href:"#genesis",children:(0,s.jsx)(n.code,{children:"--genesis"})})," option for well-known networks."]}),"\n",(0,s.jsx)(n.h3,{id:"repeat",children:(0,s.jsx)(n.code,{children:"repeat"})}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--repeat=<integer>\n"})})}),(0,s.jsx)(t.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--repeat=1000\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Number of times to repeat the contract before gathering timing information. This is useful when benchmarking EVM operations. The default is ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"revert-reason-enabled",children:(0,s.jsx)(n.code,{children:"revert-reason-enabled"})}),"\n",(0,s.jsx)(l.Z,{children:(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--revert-reason-enabled\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["Enables tracing the reason included in ",(0,s.jsx)(n.code,{children:"REVERT"})," operations. The revert reason is enabled by default."]}),"\n",(0,s.jsx)(n.h3,{id:"fork",children:(0,s.jsx)(n.code,{children:"fork"})}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--fork=<string>\n"})})}),(0,s.jsx)(t.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--fork=FutureEips\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Specific fork to evaluate, overriding network settings."}),"\n",(0,s.jsx)(n.h3,{id:"key-value-storage",children:(0,s.jsx)(n.code,{children:"key-value-storage"})}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--key-value-storage=<memory|rocksdb>\n"})})}),(0,s.jsx)(t.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--key-value-storage=rocksdb\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Kind of key value storage to use."}),"\n",(0,s.jsxs)(n.p,{children:["It might be useful to execute isolated EVM calls in the context of an actual world state. The default is ",(0,s.jsx)(n.code,{children:"memory"}),", which executes the call only in the context of the world provided by ",(0,s.jsx)(n.a,{href:"#genesis",children:(0,s.jsx)(n.code,{children:"--genesis"})})," or ",(0,s.jsx)(n.a,{href:"#chain",children:(0,s.jsx)(n.code,{children:"--chain"})})," at block zero."]}),"\n",(0,s.jsxs)(n.p,{children:["When set to ",(0,s.jsx)(n.code,{children:"rocksdb"})," and combined with ",(0,s.jsx)(n.a,{href:"#data-path",children:(0,s.jsx)(n.code,{children:"--data-path"})}),", ",(0,s.jsx)(n.a,{href:"#block-number",children:(0,s.jsx)(n.code,{children:"--block-number"})}),", and ",(0,s.jsx)(n.a,{href:"#genesis",children:(0,s.jsx)(n.code,{children:"--genesis"})}),", a Besu node that isn't currently running can be used to provide the appropriate world state for a transaction. This is useful when evaluating consensus failures."]}),"\n",(0,s.jsx)(n.h3,{id:"data-path",children:(0,s.jsx)(n.code,{children:"data-path"})}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--data-path=<path>\n"})})}),(0,s.jsx)(t.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--data-path=/opt/besu/data\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.a,{href:"#key-value-storage",children:(0,s.jsx)(n.code,{children:"--key-value-storage"})})," is set to ",(0,s.jsx)(n.code,{children:"rocksdb"}),", specifies the location of the database on disk."]}),"\n",(0,s.jsx)(n.h3,{id:"block-number",children:(0,s.jsx)(n.code,{children:"block-number"})}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--block-number=<integer>\n"})})}),(0,s.jsx)(t.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--block-number=10000000\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["The block number to evaluate the code against. Used to ensure that the EVM is evaluating the code against the correct fork, or to specify the world state when ",(0,s.jsx)(n.a,{href:"#key-value-storage",children:(0,s.jsx)(n.code,{children:"--key-value-storage"})})," is set to ",(0,s.jsx)(n.code,{children:"rocksdb"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"version",children:(0,s.jsx)(n.code,{children:"version"})}),"\n",(0,s.jsx)(l.Z,{children:(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--version\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"Displays the version information."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-v"})," is an alias for ",(0,s.jsx)(n.code,{children:"--version"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"state-test-options",children:"State test options"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"state-test"})," subcommand allows the ",(0,s.jsx)(n.a,{href:"https://github.com/ethereum/tests/tree/develop/GeneralStateTests",children:"Ethereum state tests"})," to be evaluated. The only applicable options are ",(0,s.jsx)(n.code,{children:"--json"})," and ",(0,s.jsx)(n.code,{children:"--nomemory"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"json-trace-1",children:[(0,s.jsx)(n.code,{children:"json"}),", ",(0,s.jsx)(n.code,{children:"trace"})]}),"\n",(0,s.jsx)(l.Z,{children:(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--json\n"})})})}),"\n",(0,s.jsx)(n.p,{children:"Provides an operation-by-operation trace of the command in JSON."}),"\n",(0,s.jsxs)(n.p,{children:["Set this option for EVM Lab Fuzzing. Whether or not ",(0,s.jsx)(n.code,{children:"--json"})," is set, a summary JSON object is printed to standard output for each state test executed."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--trace"})," is an alias for ",(0,s.jsx)(n.code,{children:"--json"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"nomemory-tracenomemory-1",children:[(0,s.jsx)(n.code,{children:"[no]memory"}),", ",(0,s.jsx)(n.code,{children:"trace.[no]memory"})]}),"\n",(0,s.jsx)(l.Z,{children:(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--[no]memory\n"})})})}),"\n",(0,s.jsxs)(n.p,{children:["Setting ",(0,s.jsx)(n.code,{children:"--nomemory"})," disables tracing the memory output for each operation. Setting ",(0,s.jsx)(n.code,{children:"--memory"})," enables it. Memory traces are disabled by default."]}),"\n",(0,s.jsx)(n.p,{children:"For memory heavy scripts, disabling memory traces may reduce the volume of JSON output."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--trace.[no]memory"})," is an alias for ",(0,s.jsx)(n.code,{children:"--[no]memory"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"use-command-arguments",children:"Use command arguments"}),"\n",(0,s.jsx)(n.p,{children:"If you use command arguments, you can list one or more state tests. All the state tests are evaluated in the order they are specified."}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Docker example",label:"Docker example",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --rm -v ${PWD}:/opt/referencetests hyperledger/besu-evmtool:develop --json state-test /opt/referencetests/GeneralStateTests/stExample/add11.json\n"})})}),(0,s.jsx)(t.Z,{value:"CLI example",label:"CLI example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"evm --json state-test stExample/add11.json\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"use-standard-input",children:"Use standard input"}),"\n",(0,s.jsx)(n.p,{children:"If no reference tests are passed in using the command line, the EVM tool loads one complete JSON object from standard input and executes that state test."}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Docker example",label:"Docker example",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --rm -i hyperledger/besu-evmtool:develop --json state-test < stExample/add11.json\n"})})}),(0,s.jsx)(t.Z,{value:"CLI example",label:"CLI example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"evm --json state-test < stExample/add11.json\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"eof-code-validation",children:"EOF code validation"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"code-validate"})," subcommand allows ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-3540",children:"Ethereum object formatted (EOF)"})," code to be validated. It accepts candidate EOF containers or EVM bytecode using the ",(0,s.jsx)(n.code,{children:"--file"})," option, command arguments, or standard input."]}),"\n",(0,s.jsx)(n.h3,{id:"file",children:(0,s.jsx)(n.code,{children:"file"})}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--file=<file>\n"})})}),(0,s.jsx)(t.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--file=eof.txt\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"File containing one or more EOF containers or EVM bytecode. Each line in the file is considered a separate program."}),"\n",(0,s.jsx)(n.h3,{id:"use-command-arguments-1",children:"Use command arguments"}),"\n",(0,s.jsx)(n.p,{children:"If you use command arguments, each argument is considered a separate program. If a code segment includes spaces, it must be contained in quotes."}),"\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(t.Z,{value:"Docker example",label:"Docker example",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker run --rm hyperledger/besu-evmtool:develop code-validate "0xef0001 010008 020002-0007-0002 030000 00 00000002-02010002 59-59-b00001-50-b1 03-b1" 0xef0002 0xef00010100040200010001030000000000000000\n'})})}),(0,s.jsx)(t.Z,{value:"CLI example",label:"CLI example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'evm code-validate "0xef0001 010008 020002-0007-0002 030000 00 00000002-02010002 59-59-b00001-50-b1 03-b1" 0xef0002 0xef00010100040200010001030000000000000000\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"use-standard-input-1",children:"Use standard input"}),"\n",(0,s.jsx)(n.p,{children:"If no reference tests are passed in using the command line, the EVM tool loads and validates code from standard input. Each line is considered a separate program. Comment lines and blanks are ignored."})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>t});a(67294);var s=a(36905);const r={tabItem:"tabItem_Ymn6"};var l=a(85893);function t(e){let{children:n,hidden:a,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,t),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>k});var s=a(67294),r=a(36905),l=a(12466),t=a(16550),c=a(20469),o=a(91980),i=a(67392),d=a(50012);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:s,default:r}}=e;return{value:n,label:a,attributes:s,default:r}}))}(a);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function x(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:a}=e;const r=(0,t.k6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o._X)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,l=u(e),[t,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[i,h]=j({queryString:a,groupId:r}),[m,p]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,d.Nk)(a);return[r,(0,s.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=i??m;return x({value:e,tabValues:l})?e:null})();(0,c.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:t,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),p(e)}),[h,p,l]),tabValues:l}}var p=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(85893);function f(e){let{className:n,block:a,selectedValue:s,selectValue:t,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),d=e=>{const n=e.currentTarget,a=o.indexOf(n),r=c[a].value;r!==s&&(i(n),t(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:c.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...l,className:(0,r.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":s===n}),children:a??n},n)}))})}function g(e){let{lazy:n,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(f,{...e,...n}),(0,v.jsx)(g,{...e,...n})]})}function k(e){const n=(0,p.Z)();return(0,v.jsx)(y,{...e,children:h(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>t});var s=a(67294);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);