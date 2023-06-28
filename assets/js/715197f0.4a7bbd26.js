"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[78766],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(a),v=n,u=m["".concat(p,".").concat(v)]||m[v]||d[v]||i;return a?r.createElement(u,o(o({ref:t},l),{},{components:a})):r.createElement(u,o({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=v;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}v.displayName="MDXCreateElement"},67256:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"Private transaction processing",sidebar_position:1,description:"Private transaction processing"},o="Private transaction processing",s={unversionedId:"private-networks/concepts/privacy/private-transactions/processing",id:"private-networks/concepts/privacy/private-transactions/processing",title:"Private transaction processing",description:"Private transaction processing",source:"@site/docs/private-networks/concepts/privacy/private-transactions/processing.md",sourceDirName:"private-networks/concepts/privacy/private-transactions",slug:"/private-networks/concepts/privacy/private-transactions/processing",permalink:"/development/private-networks/concepts/privacy/private-transactions/processing",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/concepts/privacy/private-transactions/processing.md",tags:[],version:"current",lastUpdatedAt:1687906161,formattedLastUpdatedAt:"Jun 27, 2023",sidebarPosition:1,frontMatter:{title:"Private transaction processing",sidebar_position:1,description:"Private transaction processing"},sidebar:"privateDocSidebar",previous:{title:"Private transactions",permalink:"/development/private-networks/concepts/privacy/private-transactions/"},next:{title:"Privacy groups",permalink:"/development/private-networks/concepts/privacy/privacy-groups"}},p={},c=[],l={toc:c};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"private-transaction-processing"},"Private transaction processing"),(0,n.kt)("p",null,"Processing ",(0,n.kt)("a",{parentName:"p",href:"/development/private-networks/concepts/privacy/private-transactions/"},"private transactions")," involves the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Precompiled contract"),": A smart contract compiled from the source language to EVM bytecode and stored by an Ethereum node for later execution.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Privacy marker transaction (PMT)"),": A public Ethereum transaction with a payload of the enclave key. The enclave key is a pointer to the private transaction in Tessera. The ",(0,n.kt)("inlineCode",{parentName:"p"},"to")," attribute of the PMT is the ",(0,n.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#priv_getprivacyprecompileaddress"},"address of the privacy precompiled contract"),"."),(0,n.kt)("p",{parentName:"li"},"The PMT is ",(0,n.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/use-privacy/sign-pmts"},"signed with a random key or the key specified on the command line"),"."))),(0,n.kt)("p",null,"Private transaction processing is illustrated and described in the following diagram."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Processing Private Transactions",src:a(49407).Z,width:"2244",height:"2062"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Submit a private transaction using ",(0,n.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#eea_sendrawtransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction")),". The signed transaction includes transaction parameters specific to private transactions, including:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"privateFor")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"privacyGroupId"),", which specifies the list of recipients."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"privateFrom"),", which specifies the sender."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restriction"),", which specifies the transaction is restricted to the transaction participants."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The JSON-RPC endpoint passes the private transaction to the Private Transaction Handler.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Private Transaction Handler sends the private transaction to Tessera.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tessera distributes the private transaction directly (that is, point-to-point) to the Tessera nodes specified in ",(0,n.kt)("inlineCode",{parentName:"p"},"privateFor")," or belonging to the privacy group identified by ",(0,n.kt)("inlineCode",{parentName:"p"},"privacyGroupId"),". All recipient Tessera nodes store the transaction. Tessera associates the stored transaction with the transaction hash and privacy group ID.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tessera returns the transaction hash to the Private Transaction Handler.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Private Transaction Handler creates a PMT for the private transaction. The Private Transaction Handler propagates the PMT using devP2P in the same way as any other public Ethereum transaction."),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you want to sign the PMT outside of Besu, use ",(0,n.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/send-transactions/private-transactions#priv_distributerawtransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"priv_distributeRawTransaction"))," instead of ",(0,n.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#eea_sendrawtransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction")),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Besu mines the PMT into a block and the PMT is distributed to all Ethereum nodes in the network.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Mainnet Transaction Processor processes the PMT in the same way as any other public transaction. On nodes containing the ",(0,n.kt)("a",{parentName:"p",href:"/development/private-networks/reference/api/#priv_getprivacyprecompileaddress"},"privacy precompile contract")," specified in the ",(0,n.kt)("inlineCode",{parentName:"p"},"to")," attribute of the PMT, the Mainnet Transaction Processor passes the PMT to the privacy precompile contract."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Nodes receiving the PMT that don't contain the privacy precompile contract ignore the PMT."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The privacy precompile contract queries Tessera for the private transaction and privacy group ID using the transaction hash.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The privacy precompile contract passes the private transaction to the Private Transaction Processor. The privacy group ID specifies the private world state to use.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Private Transaction Processor executes the transaction. The Private Transaction Processor can read and write to the private world state, and read from the public world state."))),(0,n.kt)("admonition",{title:"Recommendations",type:"danger"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"We recommend using a network with a consensus mechanism supporting transaction finality. For example, ",(0,n.kt)("a",{parentName:"li",href:"/development/private-networks/how-to/configure/consensus/ibft"},"IBFT 2.0"),"."),(0,n.kt)("li",{parentName:"ul"},"Tessera must be ",(0,n.kt)("a",{parentName:"li",href:"/development/private-networks/how-to/use-privacy/tessera"},"highly available and run in a separate instance to Besu"),".")),(0,n.kt)("p",{parentName:"admonition"},"Using private transactions with ",(0,n.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/data-storage-formats#pruning"},"pruning")," or ",(0,n.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#sync-mode"},"fast sync")," is not supported.")))}m.isMDXComponent=!0},49407:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/PrivateTransactionProcessing-777f8e3007f496f2e621e965fb54dcd0.png"}}]);