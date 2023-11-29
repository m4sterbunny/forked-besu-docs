"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[90982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),v=a,y=u["".concat(p,".").concat(v)]||u[v]||d[v]||i;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=v;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},80376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Privacy plugin",description:"Privacy plugin",sidebar_position:5},o="Privacy plugin",s={unversionedId:"private-networks/concepts/privacy/plugin",id:"version-23.7.3/private-networks/concepts/privacy/plugin",title:"Privacy plugin",description:"Privacy plugin",source:"@site/versioned_docs/version-23.7.3/private-networks/concepts/privacy/plugin.md",sourceDirName:"private-networks/concepts/privacy",slug:"/private-networks/concepts/privacy/plugin",permalink:"/23.7.3/private-networks/concepts/privacy/plugin",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/concepts/privacy/plugin.md",tags:[],version:"23.7.3",lastUpdatedAt:1701287562,formattedLastUpdatedAt:"Nov 29, 2023",sidebarPosition:5,frontMatter:{title:"Privacy plugin",description:"Privacy plugin",sidebar_position:5},sidebar:"privateDocSidebar",previous:{title:"Multi-tenancy",permalink:"/23.7.3/private-networks/concepts/privacy/multi-tenancy"},next:{title:"Permissioning",permalink:"/23.7.3/private-networks/concepts/permissioning/"}},p={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Use the payload provider interface",id:"use-the-payload-provider-interface",level:2},{value:"Send transactions",id:"send-transactions",level:3},{value:"Mine transactions",id:"mine-transactions",level:3},{value:"Transaction factory",id:"transaction-factory",level:2},{value:"Register your plugin",id:"register-your-plugin",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"privacy-plugin"},"Privacy plugin"),(0,a.kt)("p",null,"You can define your own strategy for private transactions by building a plugin that extends Hyperledger Besu functionality."),(0,a.kt)("p",null,"The plugin can take many forms, but it must provide Besu with a private transaction when required."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"The privacy plugin is an early access feature and plugin interfaces are subject to change between releases.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Enable the privacy plugin by starting Besu and including the ",(0,a.kt)("inlineCode",{parentName:"p"},"--Xprivacy-plugin-enabled")," command line option. The registered plugin must implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"PrivacyPluginPayloadProvider")," interface."),(0,a.kt)("h2",{id:"use-the-payload-provider-interface"},"Use the payload provider interface"),(0,a.kt)("p",null,"The privacy plugin must define the ",(0,a.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/how-to/use-privacy/access-private-transactions"},"privacy marker transaction (PMT)")," payload. Use the payload to retrieve the contents of the private transaction which could be a link to a location in an enclave, or an encrypted form of the private payload itself."),(0,a.kt)("p",null,"Besu doesn't need to know how the private transaction is distributed, it just needs to know what the private transaction for the PMT is."),(0,a.kt)("h3",{id:"send-transactions"},"Send transactions"),(0,a.kt)("p",null,"When submitting a private transaction using ",(0,a.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/api/#eea_sendrawtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction")),", the signed transaction must be sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"0x000000000000000000000000000000000000007a")," to indicate which ",(0,a.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/concepts/privacy/private-transactions/processing"},"privacy precompiled contract")," is being used."),(0,a.kt)("p",null,"The transaction flow is as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The JSON-RPC endpoint passes the private transaction to the private transaction manager (for example Tessera)."),(0,a.kt)("li",{parentName:"ol"},"The private transaction manager sends the private transaction to the privacy plugin."),(0,a.kt)("li",{parentName:"ol"},"The plugin decides what data to store onchain in the payload, for example the encrypted and serialized private transaction."),(0,a.kt)("li",{parentName:"ol"},"The plugin returns what needs to be stored in the payload for the PMT."),(0,a.kt)("li",{parentName:"ol"},"The private transaction handler creates a PMT for the private transaction, and propagates the PMT using devP2P in the same way as a public Ethereum transaction.")),(0,a.kt)("h3",{id:"mine-transactions"},"Mine transactions"),(0,a.kt)("p",null,"The process of mining transactions happens in reverse to sending transactions."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The Mainnet transaction processor processes the PMT in the same way as any other public transaction. On nodes containing the ",(0,a.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/api/#priv_getprivacyprecompileaddress"},"privacy precompile contract")," specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," attribute of the PMT, the Mainnet transaction processor passes the PMT to the privacy precompile contract."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Nodes receiving the PMT that do not contain the specified privacy precompile contract will ignore the PMT."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The privacy precompile contract queries the plugin for the private transaction using the PMT.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The privacy precompile contract passes the private transaction to the private transaction manager. The privacy group ID specifies the private world state to use.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The private transaction manager executes the transaction. The private transaction manager can read and write to the private world state, and read from the public world state."))),(0,a.kt)("h2",{id:"transaction-factory"},"Transaction factory"),(0,a.kt)("p",null,"An additional extension is available to help you define how PMTs are signed. Currently, Besu supports fixed or random key signing for PMTs."),(0,a.kt)("p",null,"The extension allows you to use a more dynamic approach, for example different keys for different groups."),(0,a.kt)("p",null,"Your plugin needs to register the ",(0,a.kt)("inlineCode",{parentName:"p"},"PrivateMarkerTransactionFactory")," interface which is called before submitting a PMT to the transaction pool. The responsibility then lies with the plugin to sign and serialize the PMT."),(0,a.kt)("h2",{id:"register-your-plugin"},"Register your plugin"),(0,a.kt)("p",null,"To enable Besu to use your privacy plugin, you must implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"PrivacyPluginService")," interface and you must call ",(0,a.kt)("inlineCode",{parentName:"p"},"setPayloadProvider"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\n@AutoService(BesuPlugin.class)\npublic class TestPrivacyPlugin implements BesuPlugin {\n\n    private PrivacyPluginService service;\n\n    @Override\n    public void register(BesuContext context) {\n        service = context.getService(PrivacyPluginService.class).get();\n    }\n\n    @Override\n    public void start() {\n        service.setPayloadProvider(new PrivacyPluginPayloadProvider() {\n            @Override\n            public Bytes generateMarkerPayload(PrivateTransaction privateTransaction, String privacyUserId) {\n                // perform logic to serialize the payload of the marker transaction\n                // in this example we are serialising the private transaction using rlp https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/\n                return org.hyperledger.besu.ethereum.privacy.PrivateTransaction.serialize(privateTransaction).encoded();\n            }\n\n            @Override\n            public Optional<PrivateTransaction> getPrivateTransactionFromPayload(Transaction transaction) {\n                // perform logic to deserialize payload from the marker transaction\n\n                final BytesValueRLPInput bytesValueRLPInput =\n                        new BytesValueRLPInput(transaction.getPayload(), false);\n\n                return Optional.of(org.hyperledger.besu.ethereum.privacy.PrivateTransaction.readFrom(bytesValueRLPInput));\n            }\n        });\n    }\n\n    @Override\n    public void stop() {\n\n    }\n}\n\n")))}d.isMDXComponent=!0}}]);