"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[52980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Deploy a smart contract",sidebar_position:1,description:"deploying smart contracts",tags:["private networks"]},i="Deploy smart contracts to an Ethereum chain",s={unversionedId:"private-networks/tutorials/contracts/index",id:"version-23.7.3/private-networks/tutorials/contracts/index",title:"Deploy a smart contract",description:"deploying smart contracts",source:"@site/versioned_docs/version-23.7.3/private-networks/tutorials/contracts/index.md",sourceDirName:"private-networks/tutorials/contracts",slug:"/private-networks/tutorials/contracts/",permalink:"/23.7.3/private-networks/tutorials/contracts/",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/tutorials/contracts/index.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1700080085,formattedLastUpdatedAt:"Nov 15, 2023",sidebarPosition:1,frontMatter:{title:"Deploy a smart contract",sidebar_position:1,description:"deploying smart contracts",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Upgrade permissioning contracts",permalink:"/23.7.3/private-networks/tutorials/permissioning/upgrade-contracts"},next:{title:"Transfer account funds",permalink:"/23.7.3/private-networks/tutorials/contracts/transfer-funds"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use <code>eth_sendSignedTransaction</code>",id:"use-eth_sendsignedtransaction",level:2},{value:"Use <code>eth_sendTransaction</code>",id:"use-eth_sendtransaction",level:2},{value:"Use <code>eea_sendRawTransaction</code> for private contracts with web3js-quorum",id:"use-eea_sendrawtransaction-for-private-contracts-with-web3js-quorum",level:2},{value:"Use <code>eea_sendRawTransaction</code> for private contracts with web3js-eea",id:"use-eea_sendrawtransaction-for-private-contracts-with-web3js-eea",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-smart-contracts-to-an-ethereum-chain"},"Deploy smart contracts to an Ethereum chain"),(0,r.kt)("p",null,"This tutorial shows you how to deploy smart contracts as transactions to a network."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This tutorial requires a local blockchain network. You can use the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/tutorials/quickstart"},"Developer Quickstart")," to rapidly generate one. If deploying a private contract, enable privacy on the network (public contracts can also be deployed on privacy-enabled networks)."),(0,r.kt)("h2",{id:"use-eth_sendsignedtransaction"},"Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"eth_sendSignedTransaction")),(0,r.kt)("p",null,"To deploy a smart contract using ",(0,r.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/en/v1.2.0/web3-eth.html#sendsignedtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendSignedTransaction")),", use an account's private key to sign and serialize the transaction, and send the API request."),(0,r.kt)("p",null,"This example uses the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/web3"},"web3js")," library to make the API calls."),(0,r.kt)("p",null,"Using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/1e8cc281098923802845cd829ec20c88513c2e1c/files/common/smart_contracts/privacy/contracts/SimpleStorage.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"SimpleStorage.sol"))," smart contract as an example, create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"compile.js")," with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="compile.js"',title:'"compile.js"'},'const fs = require("fs").promises;\nconst solc = require("solc");\n\nasync function main() {\n  // Load the contract source code\n  const sourceCode = await fs.readFile("SimpleStorage.sol", "utf8");\n  // Compile the source code and retrieve the ABI and bytecode\n  const { abi, bytecode } = compile(sourceCode, "SimpleStorage");\n  // Store the ABI and bytecode into a JSON file\n  const artifact = JSON.stringify({ abi, bytecode }, null, 2);\n  await fs.writeFile("SimpleStorage.json", artifact);\n}\n\nfunction compile(sourceCode, contractName) {\n  // Create the Solidity Compiler Standard Input and Output JSON\n  const input = {\n    language: "Solidity",\n    sources: { main: { content: sourceCode } },\n    settings: { outputSelection: { "*": { "*": ["abi", "evm.bytecode"] } } },\n  };\n  // Parse the compiler output to retrieve the ABI and bytecode\n  const output = solc.compile(JSON.stringify(input));\n  const artifact = JSON.parse(output).contracts.main[contractName];\n  return {\n    abi: artifact.abi,\n    bytecode: artifact.evm.bytecode.object,\n  };\n}\n\nmain().then(() => process.exit(0));\n')),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"compile.js")," to get the smart contract's output JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node compile.js\n")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"solc")," to get the contract's bytecode and ABI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solc SimpleStorage.sol --bin --abi\n")),(0,r.kt)("p",null,"Once you have the bytecode and ABI, you can rename the output files to make them easier to use; this tutorial refers to them as ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleStorage.bin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleStorage.abi"),"."),(0,r.kt)("p",null,"Create a new file named ",(0,r.kt)("inlineCode",{parentName:"p"},"public_tx.js")," to send the transaction (or run the following commands in a JavaScript console). The Developer Quickstart provides an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/1e8cc281098923802845cd829ec20c88513c2e1c/files/besu/smart_contracts/privacy/scripts/public_tx.js"},"example of a public transaction script"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'titl="public_tx.js"',titl:'"public_tx.js"'},'const web3 = new Web3(host);\n// use an existing account, or make an account\nconst privateKey =\n  "0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63";\nconst account = web3.eth.accounts.privateKeyToAccount(privateKey);\n\n// read in the contracts\nconst contractJsonPath = path.resolve(__dirname, "SimpleStorage.json");\nconst contractJson = JSON.parse(fs.readFileSync(contractJsonPath));\nconst contractAbi = contractJson.abi;\nconst contractBinPath = path.resolve(__dirname, "SimpleStorage.bin");\nconst contractBin = fs.readFileSync(contractBinPath);\n// initialize the default constructor with a value `47 = 0x2F`; this value is appended to the bytecode\nconst contractConstructorInit =\n  "000000000000000000000000000000000000000000000000000000000000002F";\n\n// get txnCount for the nonce value\nconst txnCount = await web3.eth.getTransactionCount(account.address);\n\nconst rawTxOptions = {\n  nonce: web3.utils.numberToHex(txnCount),\n  from: account.address,\n  to: null, //public tx\n  value: "0x00",\n  data: "0x" + contractBin + contractInit, // contract binary appended with initialization value\n  gasPrice: "0x0", //ETH per unit of gas\n  gasLimit: "0x24A22", //max number of gas units the tx is allowed to use\n};\nconsole.log("Creating transaction...");\nconst tx = new Tx(rawTxOptions);\nconsole.log("Signing transaction...");\ntx.sign(privateKey);\nconsole.log("Sending transaction...");\nvar serializedTx = tx.serialize();\nconst pTx = await web3.eth.sendSignedTransaction(\n  "0x" + serializedTx.toString("hex").toString("hex"),\n);\nconsole.log("tx transactionHash: " + pTx.transactionHash);\nconsole.log("tx contractAddress: " + pTx.contractAddress);\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rawTxOptions")," contains the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nonce")," - the number of transactions sent from an address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from")," - address of the sending account. For example ",(0,r.kt)("inlineCode",{parentName:"li"},"0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to")," - address of the receiver. To deploy a contract, set to ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gas")," - amount of gas provided by the sender for the transaction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gasPrice")," - price for each unit of gas the sender is willing to pay."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data")," - binary of the contract (in this example there's also a constructor initialization value, so we append that to the binary value)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," - amount of Ether/Wei transferred from the sender to the recipient.")),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"public_tx.js")," to send the transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node public_tx.js\n")),(0,r.kt)("p",null,"This example code creates the transaction ",(0,r.kt)("inlineCode",{parentName:"p"},"tx"),", signs it with the private key of the account, serializes it, then calls ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendSignedTransaction")," to deploy the contract."),(0,r.kt)("h2",{id:"use-eth_sendtransaction"},"Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"eth_sendTransaction")),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.github.io/execution-apis/api-documentation"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction"))," as an alternative to ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendSignedTransaction"),". However, Hyperledger Besu does not support the ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction")," API call and keeps account management separate for stronger security. Configure ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethsigner.consensys.net/en/stable/"},"EthSigner")," with your Besu node to make the ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction")," API call."),(0,r.kt)("p",null,"An example can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/tutorials/quickstart"},"Developer Quickstart")," where the RPC node is paired with EthSigner. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethsigner.consensys.net/"},"EthSigner documentation")," for configuration details."),(0,r.kt)("p",null,"Pass the following parameters to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ethsigner.consensys.net/Reference/API-Methods/#eth_sendtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction"))," call to EthSigner; EthSigner then converts the request to an ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/api/#eth_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendRawTransaction"))," call that Besu uses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to")," - address of the receiver. To deploy a contract, set to ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from")," - address of the sender account. For example ",(0,r.kt)("inlineCode",{parentName:"li"},"0x9b790656b9ec0db1936ed84b3bea605873558198"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gas")," - amount of gas provided by the sender for the transaction"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gasPrice")," - price for each unit of gas the sender is willing to pay"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data")," - one of the following:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For contract deployments (this use case) - compiled code of the contract"),(0,r.kt)("li",{parentName:"ul"},"For contract interactions - hash of the invoked method signature and encoded parameters (see ",(0,r.kt)("a",{parentName:"li",href:"https://solidity.readthedocs.io/en/develop/abi-spec.html"},"Ethereum Contract ABI"),")"),(0,r.kt)("li",{parentName:"ul"},"For simple ether transfers - empty")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=\"'eth_sendTransaction' parameters\"",title:"\"'eth_sendTransaction'",'parameters"':!0},'params: {\n  "to": null,\n  "from": "0x9b790656b9ec0db1936ed84b3bea605873558198",\n  "gas": "0x76c0",\n  "gasPrice": "0x9184e72a000",\n  "data": "0x608060405234801561001057600080fd5b5060405161014d38038061014d8339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806000819055505060f38061005a6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80632a1afcd914604157806360fe47b114605d5780636d4ce63c146088575b600080fd5b604760a4565b6040518082815260200191505060405180910390f35b608660048036036020811015607157600080fd5b810190808035906020019092919050505060aa565b005b608e60b4565b6040518082815260200191505060405180910390f35b60005481565b8060008190555050565b6000805490509056fea2646970667358221220e6966e446bd0af8e6af40eb0d8f323dd02f771ba1f11ae05c65d1624ffb3c58264736f6c63430007060033"\n}\n')),(0,r.kt)("p",null,"Make the request using ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=\"'eth_sendTransaction' curl HTTP request\"",title:"\"'eth_sendTransaction'",curl:!0,HTTP:!0,'request"':!0},'curl -X POST --data \'{"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{"from":"0x9b790656b9ec0db1936ed84b3bea605873558198", "to":null, "gas":"0x7600","gasPrice":"0x9184e72a000", "data":"0x608060405234801561001057600080fd5b5060405161014d38038061014d8339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806000819055505060f38061005a6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80632a1afcd914604157806360fe47b114605d5780636d4ce63c146088575b600080fd5b604760a4565b6040518082815260200191505060405180910390f35b608660048036036020811015607157600080fd5b810190808035906020019092919050505060aa565b005b608e60b4565b6040518082815260200191505060405180910390f35b60005481565b8060008190555050565b6000805490509056fea2646970667358221220e6966e446bd0af8e6af40eb0d8f323dd02f771ba1f11ae05c65d1624ffb3c58264736f6c63430007060033"}], "id":1}\' <JSON-RPC-endpoint:port>\n')),(0,r.kt)("h2",{id:"use-eea_sendrawtransaction-for-private-contracts-with-web3js-quorum"},"Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"eea_sendRawTransaction")," for private contracts with web3js-quorum"),(0,r.kt)("p",null,"To deploy a private contract to another node or ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/concepts/privacy/privacy-groups"},"privacy group")," member, use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/web3js-quorum"},"web3js-quorum")," library and the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/api/#eea_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction"))," API call. You must use this API call instead of ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.github.io/execution-apis/api-documentation"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction"))," because Hyperledger Besu keeps account management separate for stronger security."),(0,r.kt)("p",null,"The Developer Quickstart provides an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/1e8cc281098923802845cd829ec20c88513c2e1c/files/besu/smart_contracts/privacy/scripts/private_tx.js"},"example of a private transaction script"),"."),(0,r.kt)("p",null,"This example uses the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/web3"},"web3js")," library to make the API calls."),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://consensys.github.io/web3js-quorum/latest/module-priv.html#~generateAndSendRawTransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"web3.priv.generateAndSendRawTransaction"))," by running the following commands in a JavaScript console, or by including them in a ",(0,r.kt)("inlineCode",{parentName:"p"},"private_tx.js")," file and running ",(0,r.kt)("inlineCode",{parentName:"p"},"node private_tx.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=\"'private_tx.js' using 'web3.priv.generateAndSendRawTransaction'\"",title:"\"'private_tx.js'",using:!0,"'web3.priv.generateAndSendRawTransaction'\"":!0},'const Web3 = require("web3");\nconst Web3Quorum = require("web3js-quorum");\n\nconst bytecode =\n  "608060405234801561001057600080fd5b5060405161014d38038061014d8339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806000819055505060f38061005a6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80632a1afcd914604157806360fe47b114605d5780636d4ce63c146088575b600080fd5b604760a4565b6040518082815260200191505060405180910390f35b608660048036036020811015607157600080fd5b810190808035906020019092919050505060aa565b005b608e60b4565b6040518082815260200191505060405180910390f35b60005481565b8060008190555050565b6000805490509056fea2646970667358221220e6966e446bd0af8e6af40eb0d8f323dd02f771ba1f11ae05c65d1624ffb3c58264736f6c63430007060033";\n// initialize the default constructor with a value `47 = 0x2F`; this value is appended to the bytecode\nconst contractConstructorInit =\n  "000000000000000000000000000000000000000000000000000000000000002F";\n\nconst chainId = 1337;\nconst web3 = new Web3(clientUrl);\nconst web3quorum = new Web3Quorum(web3, chainId);\n\nconst txOptions = {\n  data: "0x" + bytecode + contractConstructorInit,\n  privateKey: fromPrivateKey,\n  privateFrom: fromPublicKey,\n  privateFor: [toPublicKey],\n};\nconsole.log("Creating contract...");\nconst txHash = await web3quorum.priv.generateAndSendRawTransaction(txOptions);\nconsole.log("Getting contractAddress from txHash: ", txHash);\n\nconst privateTxReceipt = await web3quorum.priv.waitForTransactionReceipt(\n  txHash,\n);\nconsole.log("Private Transaction Receipt: ", privateTxReceipt);\nreturn privateTxReceipt;\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"txOptions")," contains the following field:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data")," - compiled code of the contract (in this example there's also a constructor initialization value, so we append that to the bytecode).")),(0,r.kt)("p",null,"The deployment process includes creating the client as in the previous examples, but rather than deploying the contract with ",(0,r.kt)("inlineCode",{parentName:"p"},"to: null"),", it instead sends the transaction with ",(0,r.kt)("inlineCode",{parentName:"p"},"privateFor: [memberPublicKey/s]"),". Once you make the API call, you receive a ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionHash"),", which you can use to get a ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionReceipt")," containing the contract's address."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This example doesn't use a privacy group and makes a simple node-to-node transaction. To use a privacy group:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Create the privacy group using the public keys of the nodes in the group."),(0,r.kt)("li",{parentName:"ul"},"Specify the ",(0,r.kt)("inlineCode",{parentName:"li"},"privacyGroupId")," instead of the ",(0,r.kt)("inlineCode",{parentName:"li"},"privateFor")," option in the txOptions above and then send the transaction.")),(0,r.kt)("p",{parentName:"admonition"},"The Developer Quickstart provides an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/b72a0f64d685c851bf8be399a8e33bbdf0e09982/files/besu/smart_contracts/privacy/scripts/private_tx_privacy_group.js"},"example of a private transaction with a privacy group"),".")),(0,r.kt)("h2",{id:"use-eea_sendrawtransaction-for-private-contracts-with-web3js-eea"},"Use ",(0,r.kt)("inlineCode",{parentName:"h2"},"eea_sendRawTransaction")," for private contracts with web3js-eea"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This web3js-eea library will be deprecated on December 31, 2021. Please use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/web3js-quorum"},"web3js-quorum")," library instead and refer to the previous section.")),(0,r.kt)("p",null,"To deploy a private contract to another ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/private-networks/concepts/privacy/privacy-groups"},"privacy group")," member, use the ",(0,r.kt)("a",{parentName:"p",href:"https://consensys.github.io/web3js-quorum/latest/index.html"},"web3js-quorum")," library and the ",(0,r.kt)("a",{parentName:"p",href:"/23.7.3/public-networks/reference/api/#eea_sendrawtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction"))," API call. You must use this API call instead of ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.github.io/execution-apis/api-documentation"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction"))," because Hyperledger Besu keeps account management separate for stronger security."),(0,r.kt)("p",null,"The Developer Quickstart provides an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/1e8cc281098923802845cd829ec20c88513c2e1c/files/besu/smart_contracts/privacy/scripts/private_tx.js"},"example of a private transaction script"),"."),(0,r.kt)("p",null,"This example uses the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/web3"},"web3js")," library to make the API calls."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"eea_sendRawTransaction")," by running the following commands in a JavaScript console, or by including them in a ",(0,r.kt)("inlineCode",{parentName:"p"},"private_tx.js")," file and running ",(0,r.kt)("inlineCode",{parentName:"p"},"node private_tx.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=\"'private_tx.js' using 'eea_sendRawTransaction'\"",title:"\"'private_tx.js'",using:!0,"'eea_sendRawTransaction'\"":!0},'const Web3 = require("web3");\nconst EEAClient = require("web3-eea");\n\nconst bytecode =\n  "608060405234801561001057600080fd5b5060405161014d38038061014d8339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806000819055505060f38061005a6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80632a1afcd914604157806360fe47b114605d5780636d4ce63c146088575b600080fd5b604760a4565b6040518082815260200191505060405180910390f35b608660048036036020811015607157600080fd5b810190808035906020019092919050505060aa565b005b608e60b4565b6040518082815260200191505060405180910390f35b60005481565b8060008190555050565b6000805490509056fea2646970667358221220e6966e446bd0af8e6af40eb0d8f323dd02f771ba1f11ae05c65d1624ffb3c58264736f6c63430007060033";\n// initialize the default constructor with a value `47 = 0x2F`; this value is appended to the bytecode\nconst contractConstructorInit =\n  "000000000000000000000000000000000000000000000000000000000000002F";\n\nconst web3 = new Web3(clientUrl);\nconst web3eea = new EEAClient(web3, 1337);\nconst txOptions = {\n  data: "0x" + bytecode + contractConstructorInit,\n  privateKey: fromPrivateKey,\n  privateFrom: fromPublicKey,\n  privateFor: [toPublicKey],\n};\nconsole.log("Creating contract...");\nconst txHash = await web3eea.eea.sendRawTransaction(txOptions);\nconsole.log("Getting contractAddress from txHash: ", txHash);\n\nconst privateTxReceipt = await web3.priv.getTransactionReceipt(\n  txHash,\n  fromPublicKey,\n);\n// console.log("Private Transaction Receipt: ", privateTxReceipt);\nreturn privateTxReceipt;\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"txOptions")," contains the following field:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data")," - compiled code of the contract (in this example there's also a constructor initialization value, so we append that to the bytecode).")),(0,r.kt)("p",null,"The deployment process includes creating the client as in the previous examples, but rather than deploying the contract with ",(0,r.kt)("inlineCode",{parentName:"p"},"to: null"),", it instead sends the transaction with ",(0,r.kt)("inlineCode",{parentName:"p"},"privateFor: [memberPublicKey/s]"),". Once you make the API call, you receive a ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionHash"),", which you can use to get a ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionReceipt")," containing the contract's address."))}d.isMDXComponent=!0}}]);