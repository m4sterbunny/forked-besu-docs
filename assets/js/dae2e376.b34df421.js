"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[96007],{25851:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=s(85893),r=s(11151);const i={title:"Upgrade permissioning contracts",sidebar_position:2,description:"Upgrade the permissioning contracts for onchain permissioning",tags:["private networks"]},o="Upgrade permissioning contracts",a={id:"private-networks/tutorials/permissioning/upgrade-contracts",title:"Upgrade permissioning contracts",description:"Upgrade the permissioning contracts for onchain permissioning",source:"@site/versioned_docs/version-23.7.3/private-networks/tutorials/permissioning/upgrade-contracts.md",sourceDirName:"private-networks/tutorials/permissioning",slug:"/private-networks/tutorials/permissioning/upgrade-contracts",permalink:"/23.7.3/private-networks/tutorials/permissioning/upgrade-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/tutorials/permissioning/upgrade-contracts.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1706814058,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:2,frontMatter:{title:"Upgrade permissioning contracts",sidebar_position:2,description:"Upgrade the permissioning contracts for onchain permissioning",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Get started with onchain permissioning",permalink:"/23.7.3/private-networks/tutorials/permissioning/onchain"},next:{title:"Deploy a smart contract",permalink:"/23.7.3/private-networks/tutorials/contracts/"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Get the latest contracts and install dependencies",id:"1-get-the-latest-contracts-and-install-dependencies",level:3},{value:"3. Update environment variables",id:"3-update-environment-variables",level:3},{value:"4. Optional: Export current allowlists",id:"4-optional-export-current-allowlists",level:3},{value:"5. Deploy the contracts",id:"5-deploy-the-contracts",level:3},{value:"6. Restart Besu nodes",id:"6-restart-besu-nodes",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"upgrade-permissioning-contracts",children:"Upgrade permissioning contracts"}),"\n",(0,t.jsx)(n.p,{children:"The following tutorial describes the steps to upgrade the onchain permissioning contracts to the latest version."}),"\n",(0,t.jsxs)(n.admonition,{title:"Please use this as reference material only!",type:"caution",children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/ConsenSys/permissioning-smart-contracts",children:"permissioning-contract-repo"})," has been archived and is intended as reference material only.\nPlease update all dependencies in there before proceeding."]}),(0,t.jsxs)(n.p,{children:["In addition we also recommend using ",(0,t.jsx)(n.a,{href:"https://hardhat.org/hardhat-runner/docs/guides/deploying",children:"Hardhat"})," instead of ",(0,t.jsx)(n.a,{href:"https://trufflesuite.com/",children:"Truffle"}),",\nas the development environment. Please refer to the ",(0,t.jsx)(n.a,{href:"/23.7.3/private-networks/tutorials/quickstart",children:"Quorum Dev Quickstart"})," for an example."]})]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://nodejs.org/en/",children:"Node.js"})," v10.16.0 or later"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://yarnpkg.com/en/",children:"Yarn"})," v1.15 or later"]}),"\n",(0,t.jsxs)(n.li,{children:["Browser with ",(0,t.jsx)(n.a,{href:"https://metamask.io/",children:"MetaMask installed"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.h3,{id:"1-get-the-latest-contracts-and-install-dependencies",children:"1. Get the latest contracts and install dependencies"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Pull the latest changes if you already have a cloned repository using the ",(0,t.jsx)(n.code,{children:"git pull"})," command inside the ",(0,t.jsx)(n.code,{children:"permissioning-smart-contracts"})," directory."]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Clone the ",(0,t.jsx)(n.code,{children:"permissioning-smart-contracts"})," repository:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/ConsenSys/permissioning-smart-contracts.git\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3-update-environment-variables",children:"3. Update environment variables"}),"\n",(0,t.jsxs)(n.p,{children:["If using a ",(0,t.jsx)(n.code,{children:".env"})," file to configure environment variables, then the file must be in the ",(0,t.jsx)(n.code,{children:"permissioning-smart-contracts"})," directory."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"You can use environment variables to retain existing contracts if required. For example:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RETAIN_ADMIN_CONTRACT=true"})," to retain the current admin list"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RETAIN_NODE_RULES_CONTRACT=true"})," to retain the current Node rules contract"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RETAIN_ACCOUNT_RULES_CONTRACT=true"})," to retain the current Account rules contract"]}),"\n"]})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Legacy: If they exist, rename the following environment variables:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PANTHEON_NODE_PERM_ACCOUNT"})," to ",(0,t.jsx)(n.code,{children:"BESU_NODE_PERM_ACCOUNT"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PANTHEON_NODE_PERM_KEY"})," to ",(0,t.jsx)(n.code,{children:"BESU_NODE_PERM_KEY"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PANTHEON_NODE_PERM_ENDPOINT"})," to ",(0,t.jsx)(n.code,{children:"BESU_NODE_PERM_ENDPOINT"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If updating from v1 to v2, you need to re-deploy the ",(0,t.jsx)(n.code,{children:"NodeIngress"})," contract. In order to do this, first delete the ",(0,t.jsx)(n.code,{children:"NODE_INGRESS_CONTRACT_ADDRESS"})," environment variable."]}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["This step is only required if upgrading from v1 of the node permissioning contract to v2 (because the interface changed, a new ",(0,t.jsx)(n.code,{children:"NodeIngress"})," contract must be deployed)."]})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"4-optional-export-current-allowlists",children:"4. Optional: Export current allowlists"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"This step enables you to export the current allowlists to assist in updating."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Export the current allowlists by setting the following environment variables:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"RETAIN_ADMIN_CONTRACT=true\nRETAIN_NODE_RULES_CONTRACT=true\nRETAIN_ACCOUNT_RULES_CONTRACT=true\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Log the current allowlists to console:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"truffle migrate --reset\n"})}),"\n",(0,t.jsx)(n.p,{children:"The migration scripts will log the existing allowlists to the console, but no contracts will be deployed."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set initial values for updated deployment using the values logged in the previous step:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"INITIAL_ADMIN_ACCOUNTS=<list-of-admins>\nINITIAL_ALLOWLISTED_ACCOUNTS=<list-of-accounts>\nINITIAL_ALLOWLISTED_NODES=<list-of-enode-urls>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Update environment variables for contracts that are to be deployed. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"RETAIN_ADMIN_CONTRACT=true\nRETAIN_NODE_RULES_CONTRACT=false\nRETAIN_ACCOUNT_RULES_CONTRACT=false\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"5-deploy-the-contracts",children:"5. Deploy the contracts"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"permissioning-smart-contracts"})," directory, deploy the contracts:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"truffle migrate --reset\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"important",children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If updating from v1 to v2, the new ",(0,t.jsx)(n.code,{children:"NodeIngress"})," contract address must be specified when restarting the Besu nodes. Copy this address from the migration output. For example:"]}),"\n"]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"> Deployed NodeIngress contract to address = 0x12B1f953395080A13AeED0dC4d0bb14e787A91cF\n"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If upgrading from v2 (using separate storage contracts) copy the ",(0,t.jsx)(n.code,{children:"Storage"})," contract addresses displayed in the output. For example:"]}),"\n"]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"> Deployed NodeStorage contract to address = 0x4F3e35A3Be3C1b77Ade39969D175C743ad3484Ee\n...\n> Deployed AccountStorage contract to address = 0x2362187023D738034B516438Af187356b31E8Fb8\n"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set the storage contract address environment variables to ensure that the storage contracts are not re-deployed. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"NODE_STORAGE_CONTRACT_ADDRESS=0xE0bF6021e023a197DBb3fABE64efA880E13D3f4b\nACCOUNT_STORAGE_CONTRACT_ADDRESS=0x7153CCD1a20Bbb2f6dc89c1024de368326EC6b4F\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Deploy the updated contracts:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"truffle migrate --reset\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"6-restart-besu-nodes",children:"6. Restart Besu nodes"}),"\n",(0,t.jsxs)(n.p,{children:["Restart the Besu nodes with the updated ",(0,t.jsx)(n.a,{href:"#5-deploy-the-contracts",children:(0,t.jsx)(n.code,{children:"NodeIngress"})})," contract address and ",(0,t.jsx)(n.a,{href:"/23.7.3/private-networks/how-to/use-permissioning/onchain#specify-the-permissioning-contract-interface-version",children:"permissioning contract interface"})," version 2."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-besu",children:'cmd besu --data-path=data --genesis-file=../genesis.json --permissions-accounts-contract-enabled --permissions-accounts-contract-address "0x0000000000000000000000000000000000008888" --permissions-nodes-contract-enabled --permissions-nodes-contract-address "0x4E72770760c011647D4873f60A3CF6cDeA896CD8" --permissions-nodes-contract-version=2 --rpc-http-enabled --rpc-http-cors-origins="*" --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(67294);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);