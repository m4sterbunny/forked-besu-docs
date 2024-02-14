"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[26396],{55923:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=s(85893),r=s(11151);const i={title:"Deploy using Microsoft Azure",sidebar_position:10,description:"Deploy a private IBFT 2.0 network using Microsoft Azure.",tags:["private networks"]},o="Deploy private network example on Azure",a={id:"private-networks/tutorials/azure",title:"Deploy using Microsoft Azure",description:"Deploy a private IBFT 2.0 network using Microsoft Azure.",source:"@site/docs/private-networks/tutorials/azure.md",sourceDirName:"private-networks/tutorials",slug:"/private-networks/tutorials/azure",permalink:"/development/private-networks/tutorials/azure",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/tutorials/azure.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1707932618,formattedLastUpdatedAt:"Feb 14, 2024",sidebarPosition:10,frontMatter:{title:"Deploy using Microsoft Azure",sidebar_position:10,description:"Deploy a private IBFT 2.0 network using Microsoft Azure.",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Configure Kubernetes mode in NAT manager",permalink:"/development/private-networks/tutorials/kubernetes/nat-manager"},next:{title:"Reference",permalink:"/development/private-networks/reference/"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Block explorer",id:"block-explorer",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Connect to VM RPC endpoint",id:"connect-to-vm-rpc-endpoint",level:2},{value:"SSH",id:"ssh",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deploy-private-network-example-on-azure",children:"Deploy private network example on Azure"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/consensys.quorum-dev-quickstart",children:"Quorum Dev Quickstart on Azure Marketplace"})," enables deploying a private IBFT 2.0 network, which includes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A bootnode."}),"\n",(0,t.jsx)(n.li,{children:"An RPC node."}),"\n",(0,t.jsx)(n.li,{children:"Three regular nodes."}),"\n",(0,t.jsx)(n.li,{children:"A block explorer."}),"\n",(0,t.jsx)(n.li,{children:"Prometheus and Grafana with the Besu dashboard installed."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These are deployed on a single Azure VM in minutes."}),"\n",(0,t.jsxs)(n.p,{children:["Once deployed, you can develop and test applications and connect to the Visual Studio Code (VSCode) plugin using the RPC endpoint ",(0,t.jsx)(n.code,{children:"http://<VM_IP>/jsonrpc"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"The following is a high-level overview of the deployed network."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image landing",src:s(20934).Z+"",width:"1512",height:"1746"})}),"\n",(0,t.jsx)(n.h2,{id:"deploy",children:"Deploy"}),"\n",(0,t.jsx)(n.p,{children:"To deploy the private network example on Azure:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a Resource Group in the ",(0,t.jsx)(n.a,{href:"https://portal.azure.com",children:"Azure Portal"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.a,{href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/consensys.quorum-dev-quickstart",children:"Quorum Dev Quickstart on Azure Marketplace"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Get It Now"})," and ",(0,t.jsx)(n.strong,{children:"Continue"}),". The Quickstart landing page is displayed."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image landing",src:s(90999).Z+"",width:"2646",height:"1762"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create"}),". The ",(0,t.jsx)(n.strong,{children:"Basics"})," page is displayed."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image basics",src:s(37539).Z+"",width:"2672",height:"2030"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Enter:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Details of the Resource Group you created earlier."}),"\n",(0,t.jsx)(n.li,{children:"Basic user credentials to start a VM."}),"\n",(0,t.jsx)(n.li,{children:"Prefix for your new VM and any other resources created."}),"\n",(0,t.jsx)(n.li,{children:"Region to which you wish to deploy the VM."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Next: Size"})," and select the size of the VM you want to use."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To start the deployment, click ",(0,t.jsx)(n.strong,{children:"Review + create"})," at the bottom left of the page."]}),"\n",(0,t.jsx)(n.p,{children:"The deployment typically takes 3--5 minutes. The progress of your deployment is displayed."}),"\n",(0,t.jsx)(n.p,{children:"When the deployment is complete, the resources created are displayed."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Go to Resource"}),". Everything created in the deployment is displayed."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click on the VM name. The VM details such as the IP and DNS name are displayed. Use the IP and DNS name displayed to connect to the VM, either in browser or via RPC calls."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"block-explorer",children:"Block explorer"}),"\n",(0,t.jsx)(n.p,{children:"To display the block explorer, open a new tab and enter either the IP of the VM or the DNS name."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image be",src:s(50087).Z+"",width:"1919",height:"1020"})}),"\n",(0,t.jsx)(n.h2,{id:"metrics",children:"Metrics"}),"\n",(0,t.jsx)(n.p,{children:"The deployment includes Prometheus metrics and Grafana with a custom Besu Dashboard installed. To display the dashboard:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open a new tab and enter the IP or DNS name appended with ",(0,t.jsx)(n.code,{children:"/grafana"}),". For example: ",(0,t.jsx)(n.code,{children:"http://<DNS_NAME_OF_VM>/grafana"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click on home and select the Besu dashboard."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Grafana screenshot",src:s(10163).Z+"",width:"1919",height:"1020"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The dashboard provides a visual way to monitor your network and nodes as the chain progresses. Alerting can also be configured."}),"\n",(0,t.jsx)(n.h2,{id:"connect-to-vm-rpc-endpoint",children:"Connect to VM RPC endpoint"}),"\n",(0,t.jsxs)(n.p,{children:["You can connect dapps or develop directly from the IDE by using VSCode and connecting to the VM RPC endpoint. The endpoint is the DNS name appended with ",(0,t.jsx)(n.code,{children:"/jsonrpc"}),": ",(0,t.jsx)(n.code,{children:"http://<DNS_NAME_OF_VM>/jsonrpc"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ssh",children:"SSH"}),"\n",(0,t.jsxs)(n.p,{children:["You can SSH into the VM to see how everything is set up and working. Use the credentials from step 5 of ",(0,t.jsx)(n.a,{href:"#deploy",children:"deployment"})," and your preferred client:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ssh username@<DNS_NAME_OF_VM>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To list all containers running, run ",(0,t.jsx)(n.code,{children:"docker ps"}),". Find the complete setup in ",(0,t.jsx)(n.code,{children:"/home/<username>/besu-quickstart"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image ssh",src:s(8056).Z+"",width:"1912",height:"993"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},90999:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/mp_0_landing-5cdec9b2528e30ce29b06d11ecb77938.png"},8056:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/mp_10_ssh-47c3a844de85d9a9e17e33c3234b32c4.png"},37539:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/mp_1_basics-fcefb199c3a414a1df4e9c55a39502bc.png"},50087:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/mp_8_block_explorer-acb08c38f2b2d6293ac0ce112808cb56.png"},10163:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/mp_9_grafana-8553c7f464c56edad72663f6425e95d7.png"},20934:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/sampleNetworks-poa-f758f8253e9ab26a321c53c3b3c7259b.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(67294);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);